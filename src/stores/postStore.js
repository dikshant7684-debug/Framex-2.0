import { create } from 'zustand'
import { supabase } from '../lib/supabaseClient'

export const usePostStore = create(() => ({
  createPost: async ({ content, image_url, video_url, type = 'text' }) => {
    const { data, error } = await supabase
      .from('posts')
      .insert({ content, image_url, video_url, type })
      .select(`
        *,
        profiles:user_id (id, username, display_name, avatar_url, is_verified)
      `)
      .single()

    if (error) throw error
    return data
  },

  deletePost: async (postId) => {
    const { error } = await supabase
      .from('posts')
      .update({ is_deleted: true })
      .eq('id', postId)

    if (error) throw error
  },

  likePost: async (postId) => {
    const { error } = await supabase
      .from('likes')
      .insert({ post_id: postId })

    if (error) throw error
  },

  unlikePost: async (postId) => {
    const { error } = await supabase
      .from('likes')
      .delete()
      .eq('post_id', postId)

    if (error) throw error
  },

  addComment: async ({ postId, content, parentId = null }) => {
    const insertData = { post_id: postId, content }
    if (parentId) insertData.parent_id = parentId

    const { data, error } = await supabase
      .from('comments')
      .insert(insertData)
      .select(`
        *,
        profiles:user_id (id, username, display_name, avatar_url, is_verified)
      `)
      .single()

    if (error) throw error
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
