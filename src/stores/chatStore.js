import { create } from 'zustand'
import { supabase } from '../lib/supabaseClient'

export const useChatStore = create((set, get) => ({
  conversations: [],
  activeConvId: null,
  messagesByConv: {},
  typingUsers: {},
  isLoadingConversations: false,
  isLoadingMessages: false,

  fetchConversations: async () => {
    set({ isLoadingConversations: true })
    try {
      const { data, error } = await supabase
        .from('conversations')
        .select(`
          *,
          participants:conversation_participants (
            user_id
          ),
          last_message:messages (
            id, content, sender_id, created_at
          )
        `)
        .order('updated_at', { ascending: false })
        .limit(1, { foreignTable: 'messages', ascending: false })

      if (error) throw error

      // Batch fetch profiles for all participants
      const userIds = [...new Set((data || []).flatMap(c => c.participants?.map(p => p.user_id) || []).filter(Boolean))]
      let profileMap = {}
      if (userIds.length > 0) {
        const { data: profiles } = await supabase
          .from('profiles')
          .select('id, username, display_name, avatar_url, is_verified')
          .in('id', userIds)
        profileMap = Object.fromEntries((profiles || []).map(p => [p.id, p]))
      }

      const conversations = (data || []).map(conv => ({
        ...conv,
        participants: (conv.participants || []).map(p => ({
          ...p,
          profiles: profileMap[p.user_id] || null,
        })),
        lastMessage: conv.last_message?.[0] || null,
      }))

      set({ conversations, isLoadingConversations: false })
    } catch (error) {
      set({ isLoadingConversations: false })
      console.error('Fetch conversations error:', error.message)
    }
  },

  fetchMessages: async (conversationId) => {
    set({ isLoadingMessages: true })
    try {
      const { data, error } = await supabase
        .from('messages')
        .select(`*`)
        .eq('conversation_id', conversationId)
        .order('created_at', { ascending: true })
        .limit(50)

      if (error) throw error

      // Batch fetch sender profiles
      const senderIds = [...new Set((data || []).map(m => m.sender_id).filter(Boolean))]
      let profileMap = {}
      if (senderIds.length > 0) {
        const { data: profiles } = await supabase
          .from('profiles')
          .select('id, username, display_name, avatar_url')
          .in('id', senderIds)
        profileMap = Object.fromEntries((profiles || []).map(p => [p.id, p]))
      }

      const messages = (data || []).map(m => ({
        ...m,
        sender: profileMap[m.sender_id] || null,
      }))

      set(state => ({
        messagesByConv: { ...state.messagesByConv, [conversationId]: messages },
        isLoadingMessages: false,
      }))
    } catch (error) {
      set({ isLoadingMessages: false })
      console.error('Fetch messages error:', error.message)
    }
  },

  setActiveConversation: (convId) => {
    const { activeConvId } = get()
    if (activeConvId === convId) return

    set({ activeConvId: convId })
    if (convId) {
      get().fetchMessages(convId)
    }
  },

  sendMessage: async ({ conversationId, content, messageType = 'text' }) => {
    try {
      const { data, error } = await supabase
        .from('messages')
        .insert({
          conversation_id: conversationId,
          content,
          message_type: messageType,
        })
        .select(`*`)
        .single()

      if (error) throw error

      // Attach sender profile
      try {
        const { data: profile } = await supabase
          .from('profiles')
          .select('id, username, display_name, avatar_url')
          .eq('id', data.sender_id)
          .single()
        data.sender = profile || null
      } catch {
        data.sender = null
      }

      set(state => {
        const existing = state.messagesByConv[conversationId] || []
        return {
          messagesByConv: {
            ...state.messagesByConv,
            [conversationId]: [...existing, data],
          },
        }
      })

      return data
    } catch (error) {
      console.error('Send message error:', error.message)
      throw error
    }
  },

  addMessageRealtime: (message) => {
    const { activeConvId, messagesByConv } = get()
    const convId = message.conversation_id

    if (messagesByConv[convId]) {
      const exists = messagesByConv[convId].some(m => m.id === message.id)
      if (!exists) {
        set(state => ({
          messagesByConv: {
            ...state.messagesByConv,
            [convId]: [...(state.messagesByConv[convId] || []), message],
          },
        }))
      }
    }

    if (convId === activeConvId) {
      set(state => ({
        conversations: state.conversations.map(c =>
          c.id === convId ? { ...c, lastMessage: message, updated_at: new Date().toISOString() } : c
        ),
      }))
    }
  },

  setTyping: (conversationId, userId, isTyping) => {
    set(state => ({
      typingUsers: {
        ...state.typingUsers,
        [conversationId]: isTyping
          ? [...(state.typingUsers[conversationId] || []).filter(id => id !== userId), userId]
          : (state.typingUsers[conversationId] || []).filter(id => id !== userId),
      },
    }))
  },

  createConversation: async (participantIds, name = null, type = 'dm') => {
    try {
      const { data: conv, error: convError } = await supabase
        .from('conversations')
        .insert({ type, name })
        .select()
        .single()

      if (convError) throw convError

      const participants = [supabase.auth.getUser(), ...participantIds]
        .filter(Boolean)
        .map(userId => ({ conversation_id: conv.id, user_id: userId }))

      const { error: partError } = await supabase
        .from('conversation_participants')
        .insert(participants)

      if (partError) throw partError

      set(state => ({
        conversations: [{ ...conv, participants: [] }, ...state.conversations],
        activeConvId: conv.id,
      }))

      return conv
    } catch (error) {
      console.error('Create conversation error:', error.message)
      throw error
    }
  },
}))
