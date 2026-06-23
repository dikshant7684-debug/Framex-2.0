import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'

export default function AuthCallback() {
  const navigate = useNavigate()
  const [message, setMessage] = useState('Verifying your email...')

  useEffect(() => {
    const handleAuthRedirect = async () => {
      const { data, error } = await supabase.auth.getSession()

      if (error) {
        setMessage('Authentication failed. Please try signing in again.')
        setTimeout(() => navigate('/login'), 3000)
        return
      }

      if (data?.session) {
        // Session established, redirect to home
        navigate('/home')
      } else {
        // No session yet — the hash might still be processing
        // Supabase's onAuthStateChange listener in authStore will handle it
        setMessage('Redirecting...')
      }
    }

    handleAuthRedirect()

    // Listen for auth events in case the hash is being processed
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') {
        navigate('/home')
      } else if (event === 'SIGNED_UP') {
        navigate('/home')
      }
    })

    return () => subscription?.unsubscribe()
  }, [navigate])

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#08080f',
      color: '#fff',
      fontFamily: 'system-ui, sans-serif',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      <div className="auth-callback-spinner" />
      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>{message}</p>
      <style>{`
        .auth-callback-spinner {
          width: 32px; height: 32px;
          border: 2px solid rgba(255,255,255,0.06);
          border-top-color: #CCFF00;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  )
}
