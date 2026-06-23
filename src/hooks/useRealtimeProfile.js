import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'
import { usePresenceStore } from '../stores/presenceStore'

export function useRealtimeProfile(userId) {
  const [liveFollowerCount, setLiveFollowerCount] = useState(null)
  const onlineUserIds = usePresenceStore(s => s.onlineUserIds)
  const isOnline = userId ? onlineUserIds.has(userId) : false

  useEffect(() => {
    if (!userId) return

    const fetchCount = async () => {
      const { count } = await supabase
        .from('follows')
        .select('id', { count: 'exact', head: true })
        .eq('following_id', userId)
      if (count !== null) setLiveFollowerCount(count)
    }

    fetchCount()

    const channel = supabase
      .channel(`profile-follows-${userId}`)
      .on('postgres_changes',
        { event: '*', schema: 'public', table: 'follows', filter: `following_id=eq.${userId}` },
        () => fetchCount()
      )
      .subscribe()

    return () => { supabase.removeChannel(channel) }
  }, [userId])

  return { liveFollowerCount, isOnline }
}
