import { create } from 'zustand'
import { supabase } from '../lib/supabaseClient'
import { useFeedStore } from './feedStore'

export const usePostStore = create(() => ({
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
    const { error } = await supabase
      .from('likes')
      .insert({ post_id: postId })

    if (error) throw error

    // Optimistically update like count in feed store
    const feedState = useFeedStore.getState()
    const post = feedState.posts.find(p => p.id === postId)
    if (post) {
      feedState.updatePostInFeed(postId, {
        likes: (post.likes || 0) + 1,
        isLiked: true,
      })
    }
  },

  unlikePost: async (postId) => {
    const { error } = await supabase
      .from('likes')
      .delete()
      .eq('post_id', postId)

    if (error) throw error

    // Optimistically update like count in feed store
    const feedState = useFeedStore.getState()
    const post = feedState.posts.find(p => p.id === postId)
    if (post) {
      feedState.updatePostInFeed(postId, {
        likes: Math.max(0, (post.likes || 0) - 1),
        isLiked: false,
      })
    }
  },

  addComment: async ({ postId, content, parentId = null }) => {
    const insertData = { post_id: postId, content }
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
    const { error } = await supabase
      .from('comments')
      .update({ is_deleted: true })
      .eq('id', commentId)

    if (error) throw error
  },

  repostPost: async ({ postId, quoteText = null }) => {
    const insertData = { post_id: postId }
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
    const { error } = await supabase
      .from('reposts')
      .delete()
      .eq('post_id', postId)

    if (error) throw error
  },
}))
