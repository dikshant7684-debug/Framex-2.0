import { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useNotificationStore } from '../stores/notificationStore'

const navItems = [
  { path: '/home', label: 'Home', icon: 'home' },
  { path: '/explore', label: 'Explore', icon: 'explore' },
  { path: '/chat', label: 'Chats', icon: 'chat' },
  { path: '/notifications', label: 'Alerts', icon: 'bell' },
  { path: '/profile', label: 'Profile', icon: 'user' },
]

const icons = {
  home: (active) => (
    <svg viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12l9-9 9 9"/><path d="M5 10v9a1 1 0 001 1h3v-5h6v5h3a1 1 0 001-1v-9"/>
    </svg>
  ),
  explore: (active) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
    </svg>
  ),
  chat: (active) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
    </svg>
  ),
  bell: (active) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>
  ),
  user: (active) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  plus: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  ),
}

export default function BottomNav() {
  const navigate = useNavigate()
  const location = useLocation()
  const { unreadCount: notifUnread } = useNotificationStore()
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY
      if (current > lastScrollY.current && current > 60) {
        setVisible(false)
      } else {
        setVisible(true)
      }
      lastScrollY.current = current
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          className="bottom-nav"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="bottom-nav-inner">
            {navItems.map((item) => {
              const active = location.pathname === item.path
              return (
                <button
                  key={item.path}
                  className={`bottom-nav-item ${active ? 'active' : ''}`}
                  onClick={() => {
                    if (location.pathname === item.path) return
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                    navigate(item.path)
                  }}
                >
                  <span className="nav-icon-wrap">
                    {icons[item.icon](active)}
                    {item.path === '/notifications' && notifUnread > 0 && (
                      <span className="bottom-nav-badge">{notifUnread > 99 ? '99+' : notifUnread}</span>
                    )}
                  </span>
                  <span className="nav-label-text">{item.label}</span>
                </button>
              )
            })}
          </div>
          <button className="create-btn" onClick={() => navigate('/home')} aria-label="Create post">
            {icons.plus()}
          </button>
          <style>{bottomNavStyles}</style>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

const bottomNavStyles = `
  .bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    padding: 0 0 env(safe-area-inset-bottom, 0);
    pointer-events: none;
  }

  .bottom-nav-inner {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    max-width: 600px;
    height: 64px;
    padding: 0 0.5rem;
    background: color-mix(in srgb, var(--bg-alt) 88%, transparent);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border-top: 1px solid var(--border);
    pointer-events: auto;
    position: relative;
  }

  .bottom-nav-connection {
    position: absolute;
    top: 6px;
    right: 6px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    z-index: 3;
    border: 1.5px solid color-mix(in srgb, var(--bg-alt) 95%, transparent);
  }

  .bottom-nav-badge {
    position: absolute;
    top: -5px;
    right: -7px;
    min-width: 16px;
    height: 16px;
    padding: 0 4px;
    border-radius: 100px;
    background: var(--danger);
    color: #fff;
    font-size: 0.55rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    box-shadow: 0 0 0 1.5px color-mix(in srgb, var(--bg-alt) 95%, transparent);
  }

  .bottom-nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    width: 56px;
    height: 48px;
    background: none;
    border: none;
    color: var(--text-secondary);
    cursor: pointer;
    transition: color 0.2s;
    font-family: inherit;
    position: relative;
    -webkit-tap-highlight-color: transparent;
    padding: 0;
  }
  .bottom-nav-item.active {
    color: var(--accent);
  }

  .nav-icon-wrap {
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nav-icon-wrap svg {
    width: 20px;
    height: 20px;
  }
  .bottom-nav-item.active .nav-icon-wrap svg {
    filter: drop-shadow(0 0 8px color-mix(in srgb, var(--accent) 30%, transparent));
  }

  .nav-label-text {
    font-size: 0.6rem;
    font-weight: 500;
    letter-spacing: 0.02em;
  }

  .create-btn {
    position: absolute;
    bottom: 28px;
    left: 50%;
    transform: translateX(-50%);
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: var(--accent);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--accent-text);
    cursor: pointer;
    box-shadow: 0 4px 20px color-mix(in srgb, var(--accent) 35%, transparent);
    transition: all 0.2s ease;
    pointer-events: auto;
    -webkit-tap-highlight-color: transparent;
    z-index: 2;
  }
  .create-btn:hover {
    transform: translateX(-50%) scale(1.05);
    box-shadow: 0 6px 28px color-mix(in srgb, var(--accent) 50%, transparent);
  }
  .create-btn:active {
    transform: translateX(-50%) scale(0.92);
  }
  .create-btn svg {
    width: 26px;
    height: 26px;
  }

  @media (min-width: 768px) {
    .bottom-nav {
      display: none;
    }
  }
`
