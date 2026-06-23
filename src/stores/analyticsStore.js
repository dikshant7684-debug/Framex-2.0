import { create } from 'zustand'
import { supabase } from '../lib/supabaseClient'

export const useAnalyticsStore = create((set) => ({
  metrics: null,
  isLoading: false,
  dateRange: '7d',

  fetchMetrics: async (range = '7d') => {
    set({ isLoading: true, dateRange: range })

    const now = new Date()
    let since
    switch (range) {
      case '24h': since = new Date(now - 24 * 60 * 60 * 1000); break
      case '7d': since = new Date(now - 7 * 24 * 60 * 60 * 1000); break
      case '30d': since = new Date(now - 30 * 24 * 60 * 60 * 1000); break
      case '90d': since = new Date(now - 90 * 24 * 60 * 60 * 1000); break
      default: since = new Date(now - 7 * 24 * 60 * 60 * 1000)
    }

    try {
      const [postsResult, likesResult, commentsResult, followsResult] = await Promise.allSettled([
        supabase.from('posts').select('id', { count: 'exact', head: true })
          .gte('created_at', since.toISOString()),
        supabase.from('likes').select('id', { count: 'exact', head: true })
          .gte('created_at', since.toISOString()),
        supabase.from('comments').select('id', { count: 'exact', head: true })
          .gte('created_at', since.toISOString()),
        supabase.from('follows').select('id', { count: 'exact', head: true })
          .gte('created_at', since.toISOString()),
      ])

      const metrics = {
        posts: postsResult.status === 'fulfilled' ? postsResult.value.count ?? 0 : 0,
        likes: likesResult.status === 'fulfilled' ? likesResult.value.count ?? 0 : 0,
        comments: commentsResult.status === 'fulfilled' ? commentsResult.value.count ?? 0 : 0,
        follows: followsResult.status === 'fulfilled' ? followsResult.value.count ?? 0 : 0,
      }

      set({ metrics, isLoading: false })
    } catch (error) {
      set({ isLoading: false })
      console.error('Fetch metrics error:', error.message)
    }
  },

  getMetricHistory: async (metric = 'posts', range = '7d') => {
    const now = new Date()
    let since
    switch (range) {
      case '24h': since = new Date(now - 24 * 60 * 60 * 1000); break
      case '7d': since = new Date(now - 7 * 24 * 60 * 60 * 1000); break
      case '30d': since = new Date(now - 30 * 24 * 60 * 60 * 1000); break
      case '90d': since = new Date(now - 90 * 24 * 60 * 60 * 1000); break
      default: since = new Date(now - 7 * 24 * 60 * 60 * 1000)
    }

    const tableMap = {
      posts: 'posts',
      likes: 'likes',
      comments: 'comments',
      follows: 'follows',
    }

    const table = tableMap[metric]
    if (!table) return []

    try {
      const { data, error } = await supabase
        .from(table)
        .select('created_at')
        .gte('created_at', since.toISOString())
        .order('created_at', { ascending: true })

      if (error) throw error

      const buckets = {}
      const interval = range === '24h' ? 60 * 60 * 1000 : 24 * 60 * 60 * 1000

      for (const row of data || []) {
        const bucket = new Date(Math.floor(new Date(row.created_at).getTime() / interval) * interval)
        const key = bucket.toISOString()
        buckets[key] = (buckets[key] || 0) + 1
      }

      return Object.entries(buckets).map(([date, value]) => ({ date, value }))
    } catch (error) {
      console.error(`Fetch ${metric} history error:`, error.message)
      return []
    }
  },
}))
