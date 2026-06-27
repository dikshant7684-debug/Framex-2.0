import { create } from 'zustand'
import { supabase } from '../lib/supabaseClient'
import { useAuthStore } from './authStore'
import { useFeedStore } from './feedStore'

export const usePostStore = create((get) => ({
  createPost: async ({ content, image_url, video_url, type = 'text', audience = 'public', media = [] }) => {
    // Get the authenticated user for RLS compliance
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) throw new Error('Authentication required')

    const { data, error } = await supabase
      .from('posts')
      .insert({ content, image_url, video_url, type, audience, media, user_id: user.id })
      .select()
      .single()

    if (error) throw error

    // Attach profile data (separate query avoids FK relationship dependency)
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

    return data
  },

  uploadPostImage: async (file, userId, onProgress) => {
    const ext = file.name.split('.').pop()
    const fileName = `${userId}/${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`
    const filePath = `post-images/${fileName}`

    const { data, error } = await supabase.storage
      .from('post-images')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
      })

    if (error) throw error

    const { data: { publicUrl } } = supabase.storage
      .from('post-images')
      .getPublicUrl(data.path)

    return {
      url: publicUrl,
      path: data.path,
    }
  },

  deletePostImage: async (path) => {
    const { error } = await supabase.storage
      .from('post-images')
      .remove([path])

    if (error) throw error
  },

  deletePost: async (postId) => {
    const { error } = await supabase
      .from('posts')
      .update({ is_deleted: true })
      .eq('id', postId)

    if (error) throw error

    // Remove from feed store optimistically
    useFeedStore.getState().removePostOptimistic(postId)
  },

  likePost: async (postId) => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error('Not authenticated')

    const { error } = await supabase
      .from('likes')
      .insert({ post_id: postId, user_id: user.id })

    if (error) {
      // 23505 = unique violation — like already exists, treat as success
      if (error.code === '23505') {
        // Still update local state to match DB reality
        const feedState = useFeedStore.getState()
        const { likedPostIds } = feedState
        const newSet = new Set(likedPostIds)
        newSet.add(postId)
        feedState.updatePostInFeed(postId, {
          likes: (feedState.posts.find(p => p.id === postId)?.likes || 0) + 1,
          isLiked: true,
        })
        // HACK: directly set via internal setter since toggleLike is async
        feedState.setLikedPostIds(newSet)
        return
      }
      throw error
    }

    // Optimistically update like count in feed store
    const feedState = useFeedStore.getState()
    const post = feedState.posts.find(p => p.id === postId)
    if (post) {
      feedState.updatePostInFeed(postId, {
        likes: (post.likes || 0) + 1,
        isLiked: true,
      })
    }
    // Keep likedPostIds Set in sync
    const newSet = new Set(feedState.likedPostIds)
    newSet.add(postId)
    feedState.setLikedPostIds(newSet)
  },

  unlikePost: async (postId) => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error('Not authenticated')

    const { error } = await supabase
      .from('likes')
      .delete()
      .eq('post_id', postId)
      .eq('user_id', user.id)

    if (error) throw error

    // Sync likedPostIds Set in feed store
    const feedState = useFeedStore.getState()
    const newSet = new Set(feedState.likedPostIds)
    newSet.delete(postId)
    feedState.setLikedPostIds(newSet)
    feedState.updatePostInFeed(postId, {
      likes: Math.max(0, (feedState.posts.find(p => p.id === postId)?.likes || 0) - 1),
      isLiked: false,
    })
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

    // Attach profile data (separate query avoids FK relationship dependency)
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

    // Optimistically update comment count in feed store
    const feedState = useFeedStore.getState()
    const post = feedState.posts.find(p => p.id === postId)
    if (post) {
      feedState.updatePostInFeed(postId, {
        comments: (post.comments || 0) + 1,
      })
    }

    return data
  },

  deleteComment: async (commentId) => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error('Not authenticated')

    const { error } = await supabase
      .from('comments')
      .update({ is_deleted: true })
      .eq('id', commentId)
      .eq('user_id', user.id)

    if (error) throw error
  },

  editComment: async (commentId, content) => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error('Not authenticated')

    const { data, error } = await supabase
      .from('comments')
      .update({ content, is_edited: true })
      .eq('id', commentId)
      .eq('user_id', user.id)
      .select()
      .single()

    if (error) throw error
    return data
  },

  fetchComments: async (postId) => {
    const { data, error } = await supabase
      .from('comments')
      .select(`
        *,
        profiles:user_id (id, username, display_name, avatar_url, is_verified)
      `)
      .eq('post_id', postId)
      .eq('is_deleted', false)
      .order('created_at', { ascending: true })

    if (error) throw error
    return data || []
  },

  repostPost: async ({ postId, quoteText = null }) => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error('Not authenticated')

    const insertData = { post_id: postId, user_id: user.id }
    if (quoteText) insertData.quote_text = quoteText

    const { data, error } = await supabase
      .from('reposts')
      .insert(insertData)
      .select()
      .single()

    if (error) throw error
    return data
  },

  undoRepost: async (postId) => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error('Not authenticated')

    const { error } = await supabase
      .from('reposts')
      .delete()
      .eq('post_id', postId)
      .eq('user_id', user.id)

    if (error) throw error
  },

  // === Saved Posts ===

  savePost: async (postId) => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error('Not authenticated')

    const { error } = await supabase
      .from('saved_posts')
      .insert({ user_id: user.id, post_id: postId })

    if (error) {
      // 23505 = unique violation — save already exists, treat as success
      if (error.code === '23505') {
        const feedState = useFeedStore.getState()
        const { savedPostIds } = feedState
        const newSet = new Set(savedPostIds)
        newSet.add(postId)
        feedState.setSavedPostIds(newSet)
        feedState.updatePostInFeed(postId, { saved: true })
        return
      }
      throw error
    }

    // Sync savedPostIds Set in feed store
    const feedState = useFeedStore.getState()
    const newSet = new Set(feedState.savedPostIds)
    newSet.add(postId)
    feedState.setSavedPostIds(newSet)
    feedState.updatePostInFeed(postId, { saved: true })
  },

  unsavePost: async (postId) => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error('Not authenticated')

    const { error } = await supabase
      .from('saved_posts')
      .delete()
      .eq('user_id', user.id)
      .eq('post_id', postId)

    if (error) throw error

    // Sync savedPostIds Set in feed store
    const feedState = useFeedStore.getState()
    const newSet = new Set(feedState.savedPostIds)
    newSet.delete(postId)
    feedState.setSavedPostIds(newSet)
    feedState.updatePostInFeed(postId, { saved: false })
  },

  fetchSavedPostIds: async (userId) => {
    const { data, error } = await supabase
      .from('saved_posts')
      .select('post_id')
      .eq('user_id', userId)

    if (error) throw error
    return (data || []).map(s => s.post_id)
  },

  fetchLikedPostIds: async (userId) => {
    const { data, error } = await supabase
      .from('likes')
      .select('post_id')
      .eq('user_id', userId)

    if (error) throw error
    return (data || []).map(l => l.post_id)
  },
}))
