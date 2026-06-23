import { create } from 'zustand'
import { supabase } from '../lib/supabaseClient'
import { useAuthStore } from './authStore'

export const useProfileStore = create((set, get) => ({
  profilesByUserId: {},
  followersByUserId: {},
  isLoading: false,

  fetchProfile: async (userId) => {
    const { profilesByUserId } = get()
    if (profilesByUserId[userId]) return profilesByUserId[userId]

    set({ isLoading: true })
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()

      if (error) throw error

      set(state => ({
        profilesByUserId: { ...state.profilesByUserId, [userId]: data },
        isLoading: false,
      }))

      return data
    } catch (error) {
      set({ isLoading: false })
      console.error('Fetch profile error:', error.message)
      return null
    }
  },

  fetchFollowers: async (userId) => {
    try {
      const { data, error } = await supabase
        .from('follows')
        .select('follower_id')
        .eq('following_id', userId)

      if (error) throw error

      set(state => ({
        followersByUserId: { ...state.followersByUserId, [userId]: data || [] },
      }))

      return data || []
    } catch (error) {
      console.error('Fetch followers error:', error.message)
      return []
    }
  },

  getFollowerCount: (userId) => {
    const { followersByUserId } = get()
    return followersByUserId[userId]?.length ?? 0
  },

  followUser: async (userId) => {
    const authUser = useAuthStore.getState().user
    if (!authUser) throw new Error('Not authenticated')

    const { error } = await supabase
      .from('follows')
      .insert({ follower_id: authUser.id, following_id: userId })

    if (error) throw error

    set(state => {
      const existing = state.followersByUserId[userId] || []
      return {
        followersByUserId: {
          ...state.followersByUserId,
          [userId]: [...existing, { follower_id: authUser.id }],
        },
      }
    })
  },

  unfollowUser: async (userId) => {
    const authUser = useAuthStore.getState().user
    if (!authUser) throw new Error('Not authenticated')

    const { error } = await supabase
      .from('follows')
      .delete()
      .eq('follower_id', authUser.id)
      .eq('following_id', userId)

    if (error) throw error

    set(state => {
      const existing = state.followersByUserId[userId] || []
      return {
        followersByUserId: {
          ...state.followersByUserId,
          [userId]: existing.filter(f => f.follower_id !== authUser.id),
        },
      }
    })
  },

  isFollowing: (userId) => {
    const authUser = useAuthStore.getState().user
    if (!authUser) return false
    const { followersByUserId } = get()
    const followers = followersByUserId[userId] || []
    return followers.some(f => f.follower_id === authUser.id)
  },

  updateProfile: async (updates) => {
    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .select()
      .single()

    if (error) throw error

    set(state => ({
      profilesByUserId: { ...state.profilesByUserId, [data.id]: data },
    }))

    return data
  },

  updateProfileRealtime: (profile) => {
    set(state => ({
      profilesByUserId: { ...state.profilesByUserId, [profile.id]: profile },
    }))
  },
}))
