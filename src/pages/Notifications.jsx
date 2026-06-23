import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRealtimeNotifications } from '../hooks/useRealtimeNotifications'

const Icons = {
  heart: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
  heartFilled: <svg viewBox="0 0 24 24" fill="#ff6464" stroke="#ff6464" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
  user: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  messageCircle: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>,
  users: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  checkAll: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/><polyline points="9 11 12 14 22 4"/></svg>,
  bellOff: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13.73 21a2 2 0 01-3.46 0"/><path d="M18.63 13A17.89 17.89 0 0118 8"/><path d="M6.26 6.26A5.86 5.86 0 006 8c0 7-3 9-3 9h14"/><path d="M18 8a6 6 0 00-9.33-5"/><line x1="1" y1="1" x2="23" y2="23"/></svg>,
  tag: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>,
}

const todayNotifs = [
  { type: 'like', icon: 'heart', text: 'CyberArtist liked your post "Neon Dreams"', time: '2m ago', read: false },
  { type: 'follow', icon: 'user', text: 'PixelKitten started following you', time: '8m ago', read: false },
  { type: 'comment', icon: 'message', text: 'VaporWave commented on your post', time: '15m ago', read: false },
  { type: 'invite', icon: 'users', text: 'You were invited to join Synthwave Producers', time: '42m ago', read: false },
  { type: 'tag', icon: 'tag', text: 'NeonDreamer tagged you in a post', time: '1h ago', read: true },
]

const earlierNotifs = [
  { type: 'like', icon: 'heart', text: 'DeepMind liked your post "Abstract #7"', time: '3h ago', read: true },
  { type: 'follow', icon: 'user', text: 'OutRunner started following you', time: '5h ago', read: true },
  { type: 'comment', icon: 'message', text: 'RetroArt commented on "Digital Garden"', time: '1d ago', read: true },
  { type: 'like', icon: 'heart', text: 'AstroMike liked 3 of your posts', time: '2d ago', read: true },
]

const iconMap = {
  heart: Icons.heartFilled,
  user: Icons.user,
  message: Icons.messageCircle,
  users: Icons.users,
  tag: Icons.tag,
}

export default function Notifications() {
  const { notificationState = [], unreadCount, markAllAsRead } = useRealtimeNotifications()
  const [showEmpty, setShowEmpty] = useState(false)

  const markAllRead = markAllAsRead

  const todayNotifs = notificationState.filter(n => {
    const match = n.time.match(/(\d+)([mh])/)
    if (!match) return false
    const [, val, unit] = match
    if (unit === 'm') return parseInt(val) < 60
    if (unit === 'h') return parseInt(val) < 24
    return false
  })
  const earlierNotifs = notificationState.filter(n => {
    const match = n.time.match(/(\d+)([dh])/)
    if (!match) return true
    const [, val, unit] = match
    if (unit === 'h') return parseInt(val) >= 1
    return true
  })

  if (showEmpty || notificationState.length === 0) {
    return (
      <div className="page-enter">
        <div className="notifications-page">
          <div className="empty-state glass">
            <div className="empty-icon">{Icons.bellOff}</div>
            <h3>All caught up!</h3>
            <p>No new notifications. You're up to date.</p>
          </div>
        </div>
        <style>{notifStyles}</style>
      </div>
    )
  }

  return (
    <div className="page-enter">
      <div className="notifications-page">
        <div className="page-header">
          <div className="page-header-left">
            <h1>Notifications</h1>
            {unreadCount > 0 && <span className="unread-badge">{unreadCount}</span>}
          </div>
          <button
            className="mark-all-btn"
            onClick={markAllRead}
            disabled={unreadCount === 0}
          >
            {Icons.checkAll} Mark all as read
          </button>
        </div>

        {todayNotifs.length > 0 && (
          <div className="notif-section">
            <h2 className="notif-section-title">Today</h2>
            <div className="notif-list">
              <AnimatePresence mode="popLayout">
                {todayNotifs.map((n, i) => (
                  <motion.div
                    key={`today-${n.type}-${i}`}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className={`notif-item glass ${n.read ? 'notif-read' : ''}`}
                  >
                    <div className="notif-icon" style={{ background: n.read ? 'var(--surface)' : 'color-mix(in srgb, var(--accent) 10%, transparent)' }}>
                      {iconMap[n.icon]}
                    </div>
                    <div className="notif-content">
                      <p className="notif-text">{n.text}</p>
                      <span className="notif-time">{n.time}</span>
                    </div>
                    {!n.read && <div className="notif-dot" />}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}

        <div className="notif-section">
          <h2 className="notif-section-title">Earlier</h2>
          <div className="notif-list">
            <AnimatePresence mode="popLayout">
              {earlierNotifs.map((n, i) => (
                <motion.div
                  key={`earlier-${n.type}-${i}`}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                  className={`notif-item glass notif-read`}
                >
                  <div className="notif-icon" style={{ background: 'var(--surface)' }}>
                    {iconMap[n.icon]}
                  </div>
                  <div className="notif-content">
                    <p className="notif-text">{n.text}</p>
                    <span className="notif-time">{n.time}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{notifStyles}</style>
    </div>
  )
}

const notifStyles = `
  .notifications-page {
    padding: 1.5rem;
    max-width: 800px;
    margin: 0 auto;
    animation: fadeSlideUp 0.5s ease;
  }
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .glass {
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 16px;
  }

  .page-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.75rem;
    gap: 1rem;
  }
  .page-header-left { display: flex; align-items: center; gap: 0.75rem; }
  .page-header h1 { font-size: 1.75rem; font-weight: 700; color: var(--text); margin: 0; }
  .unread-badge {
    padding: 0.15rem 0.55rem;
    border-radius: 100px;
    background: var(--accent);
    color: var(--accent-text);
    font-size: 0.8rem;
    font-weight: 600;
  }
  .mark-all-btn {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--text-secondary);
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.2s;
    font-family: inherit;
  }
  .mark-all-btn svg { width: 16px; height: 16px; }
  .mark-all-btn:hover:not(:disabled) { border-color: var(--accent); color: var(--accent); }
  .mark-all-btn:disabled { opacity: 0.4; cursor: default; }

  .notif-section { margin-bottom: 1.5rem; }
  .notif-section-title {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin: 0 0 0.75rem;
  }
  .notif-list { display: flex; flex-direction: column; gap: 0.5rem; }
  .notif-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.25rem;
    transition: transform 0.2s;
  }
  .notif-item:hover { transform: translateX(4px); }
  .notif-item.notif-read { opacity: 0.65; }
  .notif-icon {
    width: 40px; height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .notif-icon svg { width: 20px; height: 20px; }
  .notif-icon svg { color: var(--accent); }
  .notif-read .notif-icon svg { color: var(--text-secondary); }
  .notif-content { flex: 1; min-width: 0; }
  .notif-text {
    margin: 0 0 0.2rem;
    font-size: 0.9rem;
    color: var(--text);
    line-height: 1.4;
  }
  .notif-time { font-size: 0.78rem; color: var(--text-secondary); }
  .notif-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: var(--accent);
    flex-shrink: 0;
    animation: pulse-dot 2s infinite;
  }
  @keyframes pulse-dot {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 2rem;
    text-align: center;
    gap: 0.75rem;
  }
  .empty-icon svg { width: 56px; height: 56px; color: color-mix(in srgb, var(--text) 12%, transparent); }
  .empty-state h3 { margin: 0; color: var(--text); font-weight: 600; }
  .empty-state p { margin: 0; color: var(--text-secondary); font-size: 0.9rem; }

  @media (max-width: 768px) {
    .page-header { flex-direction: column; align-items: flex-start; }
    .mark-all-btn { width: 100%; justify-content: center; }
    .notif-item { padding: 0.85rem 1rem; }
  }
  @media (max-width: 600px) {
    .notifications-page { padding: 1rem; }
    .page-header h1 { font-size: 1.4rem; }
  }
`
