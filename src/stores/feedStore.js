import { create } from 'zustand'
import { supabase } from '../lib/supabaseClient'
import { useAuthStore } from './authStore'

const PAGE_SIZE = 10

export const useFeedStore = create((set, get) => ({
  posts: [],
  isLoading: false,
  isRefreshing: false,
  hasMore: true,
  page: 0,
  newPostsCount: 0,
  likedPostIds: new Set(),
  savedPostIds: new Set(),
  _channel: null,
  _engagementChannel: null,
  _commentChannel: null,

  setLikedPostIds: (ids) => set({ likedPostIds: new Set(ids) }),
  setSavedPostIds: (ids) => set({ savedPostIds: new Set(ids) }),

  fetchFeed: async ({ refresh = false } = {}) => {
    const { page, hasMore, isLoading, isRefreshing } = get()
    if (isLoading || isRefreshing) return
    if (!refresh && !hasMore) return

    if (refresh) {
      set({ isRefreshing: true })
    } else {
      set({ isLoading: true })
    }

    const currentPage = refresh ? 0 : page
    const from = currentPage * PAGE_SIZE
    const to = from + PAGE_SIZE - 1

    try {
      const { data, error, count } = await supabase
        .from('posts')
        .select(`
          *,
          likes_count:likes(count),
          comments_count:comments(count)
        `, { count: 'exact' })
        .eq('is_deleted', false)
        .order('created_at', { ascending: false })
        .range(from, to)

      if (error) throw error

      // Batch fetch profiles for all posts
      const userIds = [...new Set((data || []).map(p => p.user_id).filter(Boolean))]
      let profileMap = {}
      if (userIds.length > 0) {
        const { data: profiles } = await supabase
          .from('profiles')
          .select('id, username, display_name, avatar_url, is_verified')
          .in('id', userIds)
        profileMap = Object.fromEntries((profiles || []).map(p => [p.id, p]))
      }

      // Get current user's engagement state
      const user = useAuthStore.getState().user
      let likedSet = get().likedPostIds
      let savedSet = get().savedPostIds
      if (user) {
        const { data: likes } = await supabase
          .from('likes')
          .select('post_id')
          .eq('user_id', user.id)
          .in('post_id', (data || []).map(p => p.id).filter(Boolean))
        likedSet = new Set((likes || []).map(l => l.post_id))

        const { data: saves } = await supabase
          .from('saved_posts')
          .select('post_id')
          .eq('user_id', user.id)
          .in('post_id', (data || []).map(p => p.id).filter(Boolean))
        savedSet = new Set((saves || []).map(s => s.post_id))
      }

      const posts = (data || []).map(post => ({
        ...post,
        profiles: profileMap[post.user_id] || null,
        likes: post.likes_count?.[0]?.count ?? 0,
        comments: post.comments_count?.[0]?.count ?? 0,
        isLiked: likedSet.has(post.id),
        saved: savedSet.has(post.id),
      }))

      const hasMoreData = from + PAGE_SIZE < (count ?? 0)

      if (refresh) {
        set({
          posts,
          hasMore: hasMoreData,
          page: 1,
          isRefreshing: false,
          likedPostIds: likedSet,
          savedPostIds: savedSet,
        })
      } else {
        set(state => ({
          posts: [...state.posts, ...posts],
          hasMore: hasMoreData,
          page: currentPage + 1,
          isLoading: false,
          likedPostIds: likedSet,
          savedPostIds: savedSet,
        }))
      }
    } catch (err) {
      set({ isLoading: false, isRefreshing: false })
      console.error('fetchFeed error:', err)
    }
  },

  toggleLike: async (postId) => {
    const user = useAuthStore.getState().user
    if (!user) throw new Error('Authentication required')

    const { likedPostIds } = get()
    const isLiked = likedPostIds.has(postId)

    // Optimistic UI
    const newLikedSet = new Set(likedPostIds)
    if (isLiked) {
      newLikedSet.delete(postId)
    } else {
      newLikedSet.add(postId)
    }
    set({ likedPostIds: newLikedSet })
    get().updatePostInFeed(postId, {
      likes: Math.max(0, (get().posts.find(p => p.id === postId)?.likes || 0) + (isLiked ? -1 : 1)),
      isLiked: !isLiked,
    })

    try {
      if (isLiked) {
        const { error } = await supabase
          .from('likes')
          .delete()
          .eq('post_id', postId)
          .eq('user_id', user.id)
        if (error) throw error
      } else {
        const { error } = await supabase
          .from('likes')
          .insert({ post_id: postId, user_id: user.id })
        if (error) throw error
      }
    } catch (err) {
      // Rollback on error
      const rollbackSet = new Set(likedPostIds)
      set({ likedPostIds: rollbackSet })
      get().updatePostInFeed(postId, {
        likes: get().posts.find(p => p.id === postId)?.likes ?? 0,
        isLiked,
      })
      throw err
    }
  },

  toggleSave: async (postId) => {
    const user = useAuthStore.getState().user
    if (!user) throw new Error('Authentication required')

    const { savedPostIds } = get()
    const isSaved = savedPostIds.has(postId)

    // Optimistic UI
    const newSavedSet = new Set(savedPostIds)
    if (isSaved) {
      newSavedSet.delete(postId)
    } else {
      newSavedSet.add(postId)
    }
    set({ savedPostIds: newSavedSet })
    get().updatePostInFeed(postId, { saved: !isSaved })

    try {
      if (isSaved) {
        const { error } = await supabase
          .from('saved_posts')
          .delete()
          .eq('user_id', user.id)
          .eq('post_id', postId)
        if (error) throw error
      } else {
        const { error } = await supabase
          .from('saved_posts')
          .insert({ user_id: user.id, post_id: postId })
        if (error) throw error
      }
    } catch (err) {
      // Rollback
      const rollbackSet = new Set(savedPostIds)
      set({ savedPostIds: rollbackSet })
      get().updatePostInFeed(postId, { saved: isSaved })
      throw err
    }
  },

  addComment: async ({ postId, content, parentId = null }) => {
    const user = useAuthStore.getState().user
    if (!user) throw new Error('Authentication required')

    const insertData = { post_id: postId, content, user_id: user.id }
    if (parentId) insertData.parent_id = parentId

    const { data, error } = await supabase
      .from('comments')
      .insert(insertData)
      .select()
      .single()

    if (error) throw error

    // Attach profile
    try {
      const { data: profile } = await supabase
        .from('profiles')
        .select('id, username, display_name, avatar_url, is_verified')
        .eq('id', data.user_id)
        .single()
      data.profiles = profile || null
    } catch {
      data.profiles = null
    }

    // Update comment count optimistically
    get().updatePostInFeed(postId, {
      comments: (get().posts.find(p => p.id === postId)?.comments || 0) + 1,
    })

    return data
  },

  refreshFeed: () => get().fetchFeed({ refresh: true }),

  acknowledgeNewPosts: () => {
    set({ newPostsCount: 0 })
  },

  subscribeToPosts: () => {
    const { _channel } = get()
    if (_channel) return

    const channel = supabase
      .channel('feed-store-realtime')
      .on('postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'posts' },
        async (payload) => {
          const { data, error } = await supabase
            .from('posts')
            .select(`
              *,
              likes_count:likes(count),
              comments_count:comments(count)
            `)
            .eq('id', payload.new.id)
            .single()

          if (error || !data) return

          const { data: profile } = await supabase
            .from('profiles')
            .select('id, username, display_name, avatar_url, is_verified')
            .eq('id', data.user_id)
            .single()

          const post = {
            ...data,
            profiles: profile || null,
            likes: data.likes_count?.[0]?.count ?? 0,
            comments: data.comments_count?.[0]?.count ?? 0,
            isLiked: false,
            saved: false,
          }

          set(state => {
            if (state.posts.some(p => p.id === post.id)) return state
            return {
              posts: [post, ...state.posts],
              newPostsCount: state.newPostsCount + 1,
            }
          })
        }
      )
      .subscribe()

    set({ _channel: channel })
  },

  subscribeToEngagement: () => {
    const existing = get()._engagementChannel
    if (existing) return

    const currentUser = useAuthStore.getState().user

    const channel = supabase
      .channel('engagement-changes')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'likes' },
        (payload) => {
          const postId = payload.new.post_id
          // Skip current user's own likes to prevent double-count with optimistic UI
          if (currentUser && payload.new.user_id === currentUser.id) return
          get().updatePostInFeed(postId, {
            likes: (get().posts.find(p => p.id === postId)?.likes || 0) + 1,
          })
        }
      )
      .on(
        'postgres_changes',
        { event: 'DELETE', schema: 'public', table: 'likes' },
        (payload) => {
          const postId = payload.old.post_id
          // Skip current user's own unlikes to prevent double-count with optimistic UI
          if (currentUser && payload.old.user_id === currentUser.id) return
          get().updatePostInFeed(postId, {
            likes: Math.max(0, (get().posts.find(p => p.id === postId)?.likes || 0) - 1),
          })
        }
      )
      .subscribe()

    set({ _engagementChannel: channel })

    return () => {
      supabase.removeChannel(channel)
      set({ _engagementChannel: null })
    }
  },

  subscribeToComments: (postId, onComment) => {
    const channel = supabase
      .channel(`comments-${postId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'comments',
          filter: `post_id=eq.${postId}`,
        },
        async (payload) => {
          // Attach profile data
          let comment = payload.new
          try {
            const { data: profile } = await supabase
              .from('profiles')
              .select('id, username, display_name, avatar_url, is_verified')
              .eq('id', comment.user_id)
              .single()
            comment = { ...comment, profiles: profile || null }
          } catch {
            comment = { ...comment, profiles: null }
          }
          onComment(comment)

          // Skip count increment for current user's own comments (already optimistically updated)
          const currentUser = useAuthStore.getState().user
          if (currentUser && payload.new.user_id === currentUser.id) return

          // Update comment count
          get().updatePostInFeed(postId, {
            comments: (get().posts.find(p => p.id === postId)?.comments || 0) + 1,
          })
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'comments',
          filter: `post_id=eq.${postId}`,
        },
        (payload) => {
          onComment({ type: 'UPDATE', comment: payload.new })
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'DELETE',
          schema: 'public',
          table: 'comments',
          filter: `post_id=eq.${postId}`,
        },
        (payload) => {
          onComment({ type: 'DELETE', commentId: payload.old.id })

          // Decrease comment count
          get().updatePostInFeed(postId, {
            comments: Math.max(0, (get().posts.find(p => p.id === postId)?.comments || 0) - 1),
          })
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  },

  updatePostInFeed: (postId, updates) => {
    set(state => ({
      posts: state.posts.map(p =>
        p.id === postId ? { ...p, ...updates } : p
      ),
    }))
  },

  removePostOptimistic: (postId) => {
    set(state => ({
      posts: state.posts.filter(p => p.id !== postId),
    }))
  },

  unsubscribeEngagement: () => {
    const { _engagementChannel } = get()
    if (_engagementChannel) {
      supabase.removeChannel(_engagementChannel)
      set({ _engagementChannel: null })
    }
  },

  cleanup: () => {
    const { _channel, _engagementChannel } = get()
    if (_channel) {
      supabase.removeChannel(_channel)
    }
    if (_engagementChannel) {
      supabase.removeChannel(_engagementChannel)
    }
    set({ _channel: null, _engagementChannel: null })
  },
}))
