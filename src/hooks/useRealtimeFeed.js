import { useState, useEffect, useCallback } from 'react'
import { supabase } from '../lib/supabaseClient'

export function useRealtimeFeed() {
  const [newPosts, setNewPosts] = useState([])
  const [postUpdates, setPostUpdates] = useState({})

  useEffect(() => {
    const channel = supabase
      .channel('realtime-feed')
      .on('postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'posts' },
        async (payload) => {
          const { data, error } = await supabase
            .from('posts')
            .select(`
              *,
              profiles:user_id (id, username, display_name, avatar_url, is_verified),
              likes_count:likes(count),
              comments_count:comments(count)
            `)
            .eq('id', payload.new.id)
            .single()

          if (error || !data) return

          const post = {
            ...data,
            likes: data.likes_count?.[0]?.count ?? 0,
            comments: data.comments_count?.[0]?.count ?? 0,
            isLiked: false,
          }

          setNewPosts(prev => {
            if (prev.some(p => p.id === post.id)) return prev
            return [post, ...prev]
          })
        }
      )
      .subscribe()

    return () => { supabase.removeChannel(channel) }
  }, [])

  const clearNewPosts = useCallback(() => setNewPosts([]), [])

  return { newPosts, postUpdates, clearNewPosts, feedEvents: [] }
}
