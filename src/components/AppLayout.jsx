import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Icons = {
  menu: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  home: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12l9-9 9 9"/><path d="M5 10v9a1 1 0 001 1h3v-5h6v5h3a1 1 0 001-1v-9"/></svg>,
  chat: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
  communities: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  explore: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>,
  notification: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
  settings: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>,
  logout: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>,
  close: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
}

const navItems = [
  { path: '/home', label: 'Home', icon: 'home' },
  { path: '/chat', label: 'Chats', icon: 'chat' },
  { path: '/communities', label: 'Communities', icon: 'communities' },
  { path: '/explore', label: 'Explore', icon: 'explore' },
  { path: '/notifications', label: 'Notifications', icon: 'notification' },
  { path: '/settings', label: 'Settings', icon: 'settings' },
]

const pageTitles = {
  '/home': 'Home',
  '/chat': 'Chats',
  '/communities': 'Communities',
  '/explore': 'Explore',
  '/notifications': 'Notifications',
  '/settings': 'Settings',
}

export default function AppLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const username = user?.user_metadata?.username || user?.email?.split('@')[0] || 'User'

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [sidebarOpen])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setSidebarOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const handleNav = (path) => {
    setSidebarOpen(false)
    navigate(path)
  }

  const handleLogout = async () => {
    setSidebarOpen(false)
    await signOut()
    navigate('/login')
  }

  const currentPage = pageTitles[location.pathname] || 'FrameX'

  return (
    <div className="app-layout">
      {/* Header */}
      <header className="app-header">
        <button className="hamburger" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
          {Icons.menu}
        </button>
        <div className="header-logo" onClick={() => navigate('/home')}>
          <span className="logo-mark">F</span>
          <span className="logo-text">FrameX</span>
        </div>
        <div className="header-title">{currentPage}</div>
        <div className="header-actions">
          <button className="header-icon" onClick={() => navigate('/notifications')} aria-label="Notifications">
            {Icons.notification}
          </button>
        </div>
      </header>

      {/* Sidebar backdrop */}
      <div className={`sidebar-backdrop ${sidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />

      {/* Sidebar */}
      <aside className={`app-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-profile">
            <div className="sidebar-avatar">{username[0].toUpperCase()}</div>
            <div className="sidebar-user-info">
              <span className="sidebar-username">{username}</span>
              <span className="sidebar-status">Online</span>
            </div>
          </div>
          <button className="sidebar-close" onClick={() => setSidebarOpen(false)} aria-label="Close menu">
            {Icons.close}
          </button>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <button
              key={item.path}
              className={`sidebar-nav-item ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => handleNav(item.path)}
            >
              <span className="nav-icon">{Icons[item.icon]}</span>
              <span className="nav-label">{item.label}</span>
              {item.label === 'Notifications' && <span className="nav-badge">3</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="sidebar-nav-item logout" onClick={handleLogout}>
            <span className="nav-icon">{Icons.logout}</span>
            <span className="nav-label">Log Out</span>
          </button>
          <div className="sidebar-version">FrameX v1.0.0</div>
        </div>
      </aside>

      {/* Main content */}
      <main className="app-main">{children}</main>

      <style>{`
        .app-layout {
          min-height: 100vh;
          background: #08080f;
          color: #fff;
        }

        /* ===== HEADER ===== */
        .app-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.6rem 5%;
          background: rgba(8,8,15,0.85);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          height: 56px;
        }

        .hamburger {
          width: 38px; height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          color: rgba(255,255,255,0.7);
          cursor: pointer;
          padding: 0;
          transition: all 0.25s ease;
          -webkit-tap-highlight-color: transparent;
        }
        .hamburger:hover { background: rgba(255,255,255,0.1); color: #fff; }
        .hamburger:active { transform: scale(0.92); }
        .hamburger svg { width: 20px; height: 20px; }

        .header-logo {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          cursor: pointer;
          flex-shrink: 0;
        }
        .logo-mark {
          width: 28px; height: 28px;
          border-radius: 8px;
          background: #CCFF00;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 700;
          color: #08080f;
          flex-shrink: 0;
        }
        .logo-text {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #CCFF00;
          display: none;
        }
        @media (min-width: 480px) { .logo-text { display: block; } }

        .header-title {
          flex: 1;
          font-size: 1rem;
          font-weight: 600;
          color: rgba(255,255,255,0.85);
          text-align: center;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        .header-icon {
          width: 38px; height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          border-radius: 12px;
          color: rgba(255,255,255,0.5);
          cursor: pointer;
          transition: all 0.25s ease;
          padding: 0;
        }
        .header-icon:hover { background: rgba(255,255,255,0.06); color: #fff; }
        .header-icon:active { transform: scale(0.92); }
        .header-icon svg { width: 20px; height: 20px; }

        /* ===== SIDEBAR BACKDROP ===== */
        .sidebar-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 200;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .sidebar-backdrop.active { opacity: 1; pointer-events: all; }

        /* ===== SIDEBAR ===== */
        .app-sidebar {
          position: fixed;
          top: 0; left: 0;
          width: 280px;
          max-width: 82vw;
          height: 100vh; height: 100dvh;
          z-index: 201;
          background: rgba(10,10,22,0.97);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          border-right: 1px solid rgba(255,255,255,0.06);
          transform: translateX(-100%);
          transition: transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          flex-direction: column;
          box-shadow: 4px 0 40px rgba(0,0,0,0.4);
        }
        .app-sidebar.open { transform: translateX(0); }

        .sidebar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.25rem 0.75rem;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .sidebar-profile {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .sidebar-avatar {
          width: 42px; height: 42px;
          border-radius: 50%;
          background: linear-gradient(135deg, #CCFF00, #00E5FF);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          font-weight: 700;
          color: #08080f;
          flex-shrink: 0;
        }
        .sidebar-user-info {
          display: flex;
          flex-direction: column;
        }
        .sidebar-username {
          font-size: 0.95rem;
          font-weight: 600;
          color: #fff;
        }
        .sidebar-status {
          font-size: 0.75rem;
          color: #4ade80;
        }
        .sidebar-close {
          width: 36px; height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 10px;
          color: rgba(255,255,255,0.5);
          cursor: pointer;
          padding: 0;
          transition: all 0.25s ease;
        }
        .sidebar-close:hover { background: rgba(255,255,255,0.1); color: #fff; }
        .sidebar-close svg { width: 18px; height: 18px; }

        .sidebar-nav {
          flex: 1;
          padding: 0.75rem 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          overflow-y: auto;
        }
        .sidebar-nav-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 0.85rem;
          background: transparent;
          border: none;
          border-radius: 12px;
          color: rgba(255,255,255,0.55);
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
          width: 100%;
          font-family: 'DM Sans', 'Inter', sans-serif;
          position: relative;
        }
        .sidebar-nav-item:hover {
          color: #fff;
          background: rgba(255,255,255,0.05);
        }
        .sidebar-nav-item.active {
          color: #CCFF00;
          background: rgba(204,255,0,0.08);
        }
        .sidebar-nav-item .nav-icon {
          width: 22px; height: 22px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sidebar-nav-item .nav-icon svg {
          width: 20px; height: 20px;
        }
        .sidebar-nav-item .nav-label {
          flex: 1;
        }
        .nav-badge {
          background: #CCFF00;
          color: #08080f;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 0.1rem 0.45rem;
          border-radius: 10px;
          min-width: 20px;
          text-align: center;
        }

        .sidebar-footer {
          padding: 0.75rem;
          border-top: 1px solid rgba(255,255,255,0.04);
        }
        .sidebar-footer .logout {
          color: rgba(255,255,255,0.4);
        }
        .sidebar-footer .logout:hover {
          color: #ff4d4d;
          background: rgba(255,77,77,0.06);
        }
        .sidebar-version {
          text-align: center;
          font-size: 0.7rem;
          color: rgba(255,255,255,0.15);
          margin-top: 0.5rem;
        }

        /* ===== MAIN CONTENT ===== */
        .app-main {
          padding-top: 56px;
          min-height: 100vh;
        }

        /* ===== PAGE TRANSITIONS ===== */
        .page-enter {
          animation: pageIn 0.35s ease-out;
        }
        @keyframes pageIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ===== RESPONSIVE ===== */
        @media (min-width: 768px) {
          .app-sidebar { width: 280px; }
        }

        @media (max-width: 480px) {
          .app-header { padding: 0.6rem 4%; }
          .header-title { font-size: 0.9rem; }
        }
      `}</style>
    </div>
  )
}
