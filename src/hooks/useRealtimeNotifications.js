import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useNotificationStore } from '../stores/notificationStore'
import { useAuthStore } from '../stores/authStore'

export function useRealtimeNotifications() {
  const user = useAuthStore(s => s.user)
  const notifications = useNotificationStore(s => s.notifications)
  const unreadCount = useNotificationStore(s => s.unreadCount)
  const fetchNotifications = useNotificationStore(s => s.fetchNotifications)
  const markAllAsRead = useNotificationStore(s => s.markAllAsRead)
  const addNotificationRealtime = useNotificationStore(s => s.addNotificationRealtime)
  const [liveNotifications, setLiveNotifications] = useState([])

  useEffect(() => {
    fetchNotifications()
  }, [fetchNotifications])

  useEffect(() => {
    if (!user) return

    const channel = supabase
      .channel('realtime-notifications')
      .on('postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'notifications', filter: `user_id=eq.${user.id}` },
        async (payload) => {
          const { data, error } = await supabase
            .from('notifications')
            .select('*, actor:actor_id (id, username, display_name, avatar_url)')
            .eq('id', payload.new.id)
            .single()

          if (error || !data) return

          setLiveNotifications(prev => {
            if (prev.some(n => n.id === data.id)) return prev
            return [data, ...prev]
          })
          addNotificationRealtime(data)
        }
      )
      .subscribe()

    return () => { supabase.removeChannel(channel) }
  }, [user, addNotificationRealtime])

  return {
    liveNotifications,
    unreadCount,
    markAllAsRead,
    notificationEvents: notifications,
  }
}
