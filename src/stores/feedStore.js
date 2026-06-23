import { create } from 'zustand'
import { supabase } from '../lib/supabaseClient'

const PAGE_SIZE = 10

export const useFeedStore = create((set, get) => ({
  posts: [],
  isLoading: false,
  isRefreshing: false,
  hasMore: true,
  page: 0,

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
          profiles:user_id (id, username, display_name, avatar_url, is_verified),
          likes_count:likes(count),
          comments_count:comments(count)
        `, { count: 'exact' })
        .eq('is_deleted', false)
        .order('created_at', { ascending: false })
        .range(from, to)

      if (error) throw error

      const posts = (data || []).map(post => ({
        ...post,
        likes: post.likes_count?.[0]?.count ?? 0,
        comments: post.comments_count?.[0]?.count ?? 0,
        isLiked: false,
      }))

      const hasMoreData = from + PAGE_SIZE < (count || 0)

      if (refresh) {
        set({ posts, page: 1, hasMore: hasMoreData, isRefreshing: false, isLoading: false })
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
}))
