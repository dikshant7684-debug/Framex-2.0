import { useState, useRef, useEffect } from 'react'

const statusConfig = {
  connecting:  { color: '#fbbf24', label: 'Connecting...', pulse: true },
  connected:   { color: '#22c55e', label: 'Connected', pulse: false },
  disconnected: { color: '#ef4444', label: 'Disconnected', pulse: false },
  reconnecting: { color: '#f97316', label: 'Reconnecting...', pulse: true },
}

export default function ConnectionStatus({ variant = 'sidebar' }) {
  const [visible, setVisible] = useState(false)
  const hideTimer = useRef(null)

  useEffect(() => {
    return () => clearTimeout(hideTimer.current)
  }, [])

  const { connectionStatus, isFallbackMode } = window.__FRAMEX_REALTIME__ || { connectionStatus: 'connecting', isFallbackMode: true }

  useEffect(() => {
    setVisible(true)
    clearTimeout(hideTimer.current)
    if (connectionStatus === 'connected') {
      hideTimer.current = setTimeout(() => setVisible(false), 3000)
    }
  }, [connectionStatus])

  const cfg = statusConfig[connectionStatus] || statusConfig.connecting

  if (variant === 'sidebar') {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          cursor: 'pointer',
          position: 'relative',
        }}
        title={`${cfg.label}${isFallbackMode ? ' (Simulated)' : ''}`}
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: cfg.color,
            boxShadow: cfg.pulse ? `0 0 6px ${cfg.color}` : 'none',
            animation: cfg.pulse ? 'connectionPulse 1.5s ease-in-out infinite' : 'none',
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontSize: 11,
            color: 'var(--text-secondary, rgba(255,255,255,0.4))',
            fontFamily: 'monospace',
          }}
        >
          {cfg.label}
        </span>
        {isFallbackMode && (
          <span style={{
            fontSize: 9,
            padding: '1px 5px',
            borderRadius: 4,
            backgroundColor: 'var(--surface, rgba(255,255,255,0.05))',
            color: 'var(--text-secondary, rgba(255,255,255,0.4))',
          }}>
            SIM
          </span>
        )}
      </div>
    )
  }

  // Mobile variant (compact dot)
  return (
    <div
      style={{
        position: 'relative',
        width: 20,
        height: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      title={`${cfg.label}${isFallbackMode ? ' (Simulated)' : ''}`}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: cfg.color,
          boxShadow: cfg.pulse ? `0 0 6px ${cfg.color}` : 'none',
          animation: cfg.pulse ? 'connectionPulse 1.5s ease-in-out infinite' : 'none',
        }}
      />
    </div>
  )
}
