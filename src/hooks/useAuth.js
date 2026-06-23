import { useAuthStore } from '../stores/authStore'

export function useAuth() {
  const { user, session, profile, isLoading, error, signIn, signUp, signOut, updateProfile } = useAuthStore()
  return {
    user,
    session,
    profile,
    loading: isLoading,
    isAuthenticated: !!user,
    error,
    signIn,
    signUp,
    signOut,
    updateProfile,
  }
}
