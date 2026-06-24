import { create } from 'zustand'
import { supabase } from '../lib/supabaseClient'

export const useAuthStore = create((set, get) => ({
  user: null,
  session: null,
  profile: null,
  isLoading: true,
  error: null,
  _authListener: null,

  initialize: async () => {
    try {
      const { _authListener } = get()
      if (_authListener) {
        _authListener()
        set({ _authListener: null })
      }

      // Timeout: don't let auth hang forever if Supabase is unreachable
      const timeout = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Auth request timed out')), 8000)
      )

      const sessionResult = await Promise.race([
        supabase.auth.getSession(),
        timeout,
      ])

      const { data: { session }, error } = sessionResult
      if (error) throw error

      if (session) {
        let { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single()

        // Auto-create profile if missing (e.g., users who signed up before DB trigger existed)
        if (!profile) {
          const username = session.user.email?.split('@')[0] || 'user'
          const { data: newProfile } = await supabase
            .from('profiles')
            .insert({
              id: session.user.id,
              username,
              display_name: username,
            })
            .select()
            .single()
          profile = newProfile
        }

        set({ user: session.user, session, profile, isLoading: false })
      } else {
        set({ user: null, session: null, profile: null, isLoading: false })
      }

      // Listen for auth state changes
      const unsubscribe = supabase.auth.onAuthStateChange(async (event, session) => {
        if (session) {
          let { data: profile } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single()

          // Auto-create profile if missing
          if (!profile) {
            const username = session.user.email?.split('@')[0] || 'user'
            const { data: newProfile } = await supabase
              .from('profiles')
              .insert({
                id: session.user.id,
                username,
                display_name: username,
              })
              .select()
              .single()
            profile = newProfile
          }

          set({ user: session.user, session, profile })
        } else {
          set({ user: null, session: null, profile: null })
        }
      })
      set({ _authListener: unsubscribe })
    } catch (error) {
      set({ isLoading: false, error: error.message })
    }
  },

  signIn: async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
    return data
  },

  signUp: async (email, password, userData = {}) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData,
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    })
    if (error) throw error

    // Auto-create profile record in the database
    if (data?.user) {
      const username = userData.username || email.split('@')[0]
      const { error: profileError } = await supabase
        .from('profiles')
        .insert({
          id: data.user.id,
          username,
          display_name: username,
        })
      if (profileError) console.warn('Failed to create profile:', profileError.message)
    }

    return data
  },

  signOut: async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    set({ user: null, session: null, profile: null })
  },

  updateProfile: async (updates) => {
    const { user } = get()
    if (!user) throw new Error('Not authenticated')

    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', user.id)
      .select()
      .single()

    if (error) throw error
    set({ profile: data })
    return data
  },
}))
