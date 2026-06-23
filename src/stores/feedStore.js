import { create } from 'zustand'
import { supabase } from '../lib/supabaseClient'

const PAGE_SIZE = 10

export const useFeedStore = create((set, get) => ({
  posts: [],
  isLoading: false,
  isRefreshing: false,
  hasMore: true,
  page: 0,
  newPostsCount: 0,
  _channel: null,

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

      const posts = (data || []).map(post => ({
        ...post,
        profiles: profileMap[post.user_id] || null,
        likes: post.likes_count?.[0]?.count ?? 0,
        comments: post.comments_count?.[0]?.count ?? 0,
        isLiked: false,
      }))

      const hasMoreData = from + PAGE_SIZE < (count || 0)

      if (refresh) {
        set({ posts, page: 1, hasMore: hasMoreData, isRefreshing: false, isLoading: false, newPostsCount: 0 })
      } else {
        set(state => ({
          posts: [...state.posts, ...posts],
          page: currentPage + 1,
          hasMore: hasMoreData,
          isLoading: false,
        }))
      }
    } catch (error) {
      set({ isRefreshing: false, isLoading: false })
      console.error('Feed fetch error:', error.message)
    }
  },

  refreshFeed: () => get().fetchFeed({ refresh: true }),

  addPostOptimistic: (post) => {
    set(state => ({ posts: [post, ...state.posts] }))
  },

  removePostOptimistic: (postId) => {
    set(state => ({ posts: state.posts.filter(p => p.id !== postId) }))
  },

  updatePostInFeed: (postId, updates) => {
    set(state => ({
      posts: state.posts.map(p => (p.id === postId ? { ...p, ...updates } : p)),
    }))
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

          // Fetch profile separately
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

  unsubscribeFromPosts: () => {
    const { _channel } = get()
    if (_channel) {
      supabase.removeChannel(_channel)
      set({ _channel: null })
    }
  },

  acknowledgeNewPosts: () => {
    set({ newPostsCount: 0 })
  },
}))
