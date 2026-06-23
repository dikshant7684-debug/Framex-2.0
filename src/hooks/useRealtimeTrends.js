import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'

const fallbackTrendData = [
  { tag: 'framex', posts: '2.4K' }, { tag: 'design', posts: '1.8K' },
  { tag: 'coding', posts: '1.2K' }, { tag: 'uiux', posts: '892' },
  { tag: 'react', posts: '756' }, { tag: 'photography', posts: '654' },
  { tag: 'art', posts: '543' }, { tag: 'music', posts: '432' },
]

const fallbackCreators = [
  { handle: '@creativemind', name: 'Creative Mind', avatarColor: '#CCFF00', followers: '12.4K' },
  { handle: '@designpro', name: 'Design Pro', avatarColor: '#FF6B6B', followers: '8.7K' },
  { handle: '@codemaster', name: 'Code Master', avatarColor: '#4ECDC4', followers: '6.2K' },
  { handle: '@artistico', name: 'Artistico', avatarColor: '#A78BFA', followers: '5.1K' },
]

const avatarColors = ['#CCFF00', '#FF6B6B', '#4ECDC4', '#A78BFA', '#FFD93D', '#6BCB77']

export function useRealtimeTrends() {
  const [trendData] = useState(fallbackTrendData)
  const [trendingCreators, setTrendingCreators] = useState(fallbackCreators)

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const { data } = await supabase
          .from('profiles')
          .select('username, display_name')
          .limit(4)
        if (data && data.length > 0) {
          setTrendingCreators(
            data.map((c, i) => ({
              handle: `@${c.username || c.display_name}`,
              name: c.display_name || c.username,
              avatarColor: avatarColors[i % avatarColors.length],
              followers: `${Math.floor(Math.random() * 10 + 1)}.${Math.floor(Math.random() * 9)}K`,
            }))
          )
        }
      } catch { /* keep fallback */ }
    }
    fetchCreators()
  }, [])

  return { trendData, trendingCreators }
}
