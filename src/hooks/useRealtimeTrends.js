import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'

function formatCount(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M'
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K'
  return String(n)
}

export function useRealtimeTrends() {
  const [trendData, setTrendData] = useState([])
  const [trendingCreators, setTrendingCreators] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        const { data: posts } = await supabase
          .from('posts')
          .select('content, created_at')
          .not('content', 'is', null)
          .eq('is_deleted', false)
          .order('created_at', { ascending: false })
          .limit(200)

        const tagCounts = {}
        const tagRegex = /#(\w+)/gi
        if (posts) {
          for (const post of posts) {
            let match
            while ((match = tagRegex.exec(post.content)) !== null) {
              const tag = match[1].toLowerCase()
              tagCounts[tag] = (tagCounts[tag] || 0) + 1
            }
          }
        }

        const sortedTags = Object.entries(tagCounts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 8)
          .map(([tag, count]) => ({
            tag,
            posts: formatCount(count),
          }))

        setTrendData(sortedTags)
      } catch (err) {
        console.warn('Failed to fetch trends:', err)
      }
    }

    const fetchCreators = async () => {
      try {
        const { data: follows } = await supabase
          .from('follows')
          .select('following_id')

        if (follows && follows.length > 0) {
          const counts = {}
          follows.forEach(f => {
            counts[f.following_id] = (counts[f.following_id] || 0) + 1
          })

          const topIds = Object.entries(counts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 4)
            .map(([id]) => id)

          if (topIds.length > 0) {
            const { data: profiles } = await supabase
              .from('profiles')
              .select('id, username, display_name, avatar_url')
              .in('id', topIds)

            if (profiles) {
              const profileMap = {}
              profiles.forEach(p => { profileMap[p.id] = p })

              const creators = topIds.map((id, i) => {
                const profile = profileMap[id] || {}
                return {
                  handle: `@${profile.username || 'user'}`,
                  name: profile.display_name || profile.username || 'User',
                  avatarUrl: profile.avatar_url || null,
                  followers: formatCount(counts[id]),
                }
              })
              setTrendingCreators(creators)
            }
          }
        }
      } catch (err) {
        console.warn('Failed to fetch creators:', err)
      }
    }

    Promise.all([fetchTrends(), fetchCreators()]).finally(() => setLoading(false))
  }, [])

  return { trendData, trendingCreators, loading }
}
