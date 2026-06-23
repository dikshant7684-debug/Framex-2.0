import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'

export function useRealtime() {
  const [connectionStatus, setConnectionStatus] = useState('connecting')

  useEffect(() => {
    const channel = supabase.channel('realtime-status')
    channel
      .subscribe((status) => {
        if (status === 'SUBSCRIBED') setConnectionStatus('connected')
        else if (status === 'CHANNEL_ERROR') setConnectionStatus('error')
        else if (status === 'CLOSED') setConnectionStatus('disconnected')
      })

    return () => { supabase.removeChannel(channel) }
  }, [])

  return {
    connectionStatus,
    connectionAttempt: 0,
    isFallbackMode: false,
    lastEvent: null,
    subscribe: () => () => {},
    emit: () => {},
  }
}
