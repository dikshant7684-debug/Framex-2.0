import { create } from 'zustand'
import { supabase } from '../lib/supabaseClient'

export const useNotificationStore = create((set, get) => ({
  notifications: [],
  unreadCount: 0,
  isLoading: false,

  fetchNotifications: async () => {
    set({ isLoading: true })
    try {
      const { data, error } = await supabase
        .from('notifications')
        .select(`
          *,
          actor:actor_id (id, username, display_name, avatar_url)
        `)
        .order('created_at', { ascending: false })
        .limit(50)

      if (error) throw error

      const unread = (data || []).filter(n => !n.is_read).length
      set({ notifications: data || [], unreadCount: unread, isLoading: false })
    } catch (error) {
      set({ isLoading: false })
      console.error('Fetch notifications error:', error.message)
    }
  },

  addNotificationRealtime: (notification) => {
    set(state => {
      const exists = state.notifications.some(n => n.id === notification.id)
      if (exists) return state

      return {
        notifications: [notification, ...state.notifications],
        unreadCount: state.unreadCount + (notification.is_read ? 0 : 1),
      }
    })
  },

  markAsRead: async (notificationId) => {
    const { error } = await supabase
      .from('notifications')
      .update({ is_read: true })
      .eq('id', notificationId)

    if (error) {
      console.error('Mark as read error:', error.message)
      return
    }

    set(state => ({
      notifications: state.notifications.map(n =>
        n.id === notificationId ? { ...n, is_read: true } : n
      ),
      unreadCount: Math.max(0, state.unreadCount - 1),
    }))
  },

  markAllAsRead: async () => {
    const { error } = await supabase
      .from('notifications')
      .update({ is_read: true })
      .eq('is_read', false)

    if (error) {
      console.error('Mark all as read error:', error.message)
      return
    }

    set(state => ({
      notifications: state.notifications.map(n => ({ ...n, is_read: true })),
      unreadCount: 0,
    }))
  },
}))
