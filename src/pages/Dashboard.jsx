import { useAuthStore } from '../stores/authStore'

const Icons = {
  chat: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
  communities: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  explore: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>,
  notification: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
  settings: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>,
  trending: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  users: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  plus: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
  arrowRight: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  heart: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
  messageSquare: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
  bell: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
}

export default function Dashboard() {
  const { user } = useAuthStore()
  const displayName = user?.user_metadata?.username || user?.email?.split('@')[0] || 'User'
  const initial = displayName.charAt(0).toUpperCase()

  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening'

  return (
    <div className="page-enter">
      <div className="dashboard">
        {/* Welcome */}
        <div className="welcome-card glass">
          <div className="welcome-avatar">{initial}</div>
          <div className="welcome-text">
            <span className="welcome-greeting">{greeting}</span>
            <h1 className="welcome-name">{displayName}</h1>
            <p className="welcome-sub">Welcome to your FrameX dashboard</p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="stats-row">
          <div className="stat-card glass">
            <div className="stat-icon stat-icon-chat">{Icons.messageSquare}</div>
            <div className="stat-info">
              <span className="stat-value">12</span>
              <span className="stat-label">Messages</span>
            </div>
          </div>
          <div className="stat-card glass">
            <div className="stat-icon stat-icon-community">{Icons.communities}</div>
            <div className="stat-info">
              <span className="stat-value">5</span>
              <span className="stat-label">Communities</span>
            </div>
          </div>
          <div className="stat-card glass">
            <div className="stat-icon stat-icon-notif">{Icons.bell}</div>
            <div className="stat-info">
              <span className="stat-value">8</span>
              <span className="stat-label">Notifications</span>
            </div>
          </div>
          <div className="stat-card glass">
            <div className="stat-icon stat-icon-trend">{Icons.trending}</div>
            <div className="stat-info">
              <span className="stat-value">3</span>
              <span className="stat-label">Trending</span>
            </div>
          </div>
        </div>

        {/* Trending Content */}
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">{Icons.trending} Trending Now</h2>
            <button className="section-link">View all {Icons.arrowRight}</button>
          </div>
          <div className="trending-grid">
            {['Neon Nights', 'Digital Horizons', 'Cyber Pulse'].map((title, i) => (
              <div key={i} className="trending-card glass" style={{ '--card-hue': i * 120 }}>
                <div className="trending-thumb" style={{ background: `linear-gradient(135deg, hsl(${i * 120}, 80%, 20%), hsl(${i * 120 + 60}, 80%, 10%))` }}>
                  <div className="trending-thumb-icon">{Icons.trending}</div>
                </div>
                <div className="trending-body">
                  <h3>{title}</h3>
                  <div className="trending-meta">
                    <span>{Icons.heart} 2.4k</span>
                    <span>{Icons.messageSquare} 89</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Suggested Communities */}
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">{Icons.communities} Suggested Communities</h2>
            <button className="section-link">View all {Icons.arrowRight}</button>
          </div>
          <div className="communities-row">
            {[
              { name: 'Pixel Artists', members: '12.4k', tag: 'Art' },
              { name: 'Code Crew', members: '8.2k', tag: 'Tech' },
              { name: 'Synthwave', members: '6.7k', tag: 'Music' },
              { name: 'Neo Creators', members: '15.1k', tag: 'Design' },
            ].map((c, i) => (
              <div key={i} className="community-mini-card glass" style={{ '--card-hue': i * 90 }}>
                <div className="community-mini-avatar" style={{ background: `linear-gradient(135deg, hsl(${i * 90}, 80%, 30%), hsl(${i * 90 + 50}, 80%, 15%))` }}>
                  {c.name.charAt(0)}
                </div>
                <div className="community-mini-info">
                  <h4>{c.name}</h4>
                  <span className="community-mini-meta">{c.members} members · {c.tag}</span>
                </div>
                <button className="join-btn">Join</button>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="section">
          <div className="section-header">
            <h2 className="section-title">Quick Actions</h2>
          </div>
          <div className="actions-grid">
            {[{ icon: Icons.plus, label: 'New Post', desc: 'Share something new' },
              { icon: Icons.communities, label: 'Communities', desc: 'Find your people' },
              { icon: Icons.explore, label: 'Explore', desc: 'Discover content' },
              { icon: Icons.settings, label: 'Settings', desc: 'Customize your experience' },
            ].map((a, i) => (
              <div key={i} className="action-card glass">
                <div className="action-icon">{a.icon}</div>
                <div className="action-text">
                  <h4>{a.label}</h4>
                  <p>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <style>{`
        .dashboard {
          padding: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
          animation: fadeSlideUp 0.5s ease;
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .glass {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
        }

        /* Welcome */
        .welcome-card {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.75rem;
          margin-bottom: 1.5rem;
        }
        .welcome-avatar {
          width: 60px; height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #CCFF00, #a0cc00);
          color: #08080f;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          flex-shrink: 0;
        }
        .welcome-text { display: flex; flex-direction: column; gap: 0.2rem; }
        .welcome-greeting { font-size: 0.85rem; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.05em; }
        .welcome-name { font-size: 1.5rem; font-weight: 700; color: #fff; margin: 0; }
        .welcome-sub { font-size: 0.9rem; color: rgba(255,255,255,0.5); margin: 0; }

        /* Stats */
        .stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .stat-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
        }
        .stat-icon {
          width: 44px; height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .stat-icon svg { width: 22px; height: 22px; }
        .stat-icon-chat { background: rgba(0, 150, 255, 0.15); color: #0096ff; }
        .stat-icon-community { background: rgba(204, 255, 0, 0.15); color: #CCFF00; }
        .stat-icon-notif { background: rgba(255, 100, 100, 0.15); color: #ff6464; }
        .stat-icon-trend { background: rgba(150, 50, 255, 0.15); color: #9632ff; }
        .stat-info { display: flex; flex-direction: column; gap: 0.15rem; }
        .stat-value { font-size: 1.5rem; font-weight: 700; color: #fff; line-height: 1; }
        .stat-label { font-size: 0.8rem; color: rgba(255,255,255,0.4); }

        /* Sections */
        .section { margin-bottom: 2rem; }
        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .section-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: #fff;
          margin: 0;
        }
        .section-title svg { width: 20px; height: 20px; color: #CCFF00; }
        .section-link {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          background: none;
          border: none;
          color: rgba(255,255,255,0.5);
          font-size: 0.85rem;
          cursor: pointer;
          transition: color 0.2s;
          padding: 0;
          font-family: inherit;
        }
        .section-link svg { width: 14px; height: 14px; }
        .section-link:hover { color: #CCFF00; }

        /* Trending */
        .trending-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        .trending-card { overflow: hidden; cursor: pointer; transition: transform 0.3s, box-shadow 0.3s; }
        .trending-card:hover { transform: translateY(-4px); box-shadow: 0 8px 30px rgba(0,0,0,0.3); }
        .trending-thumb {
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .trending-thumb-icon svg { width: 40px; height: 40px; color: rgba(255,255,255,0.3); }
        .trending-body { padding: 1rem; }
        .trending-body h3 { margin: 0 0 0.5rem; font-size: 1rem; color: #fff; font-weight: 600; }
        .trending-meta { display: flex; gap: 1rem; font-size: 0.8rem; color: rgba(255,255,255,0.4); }
        .trending-meta svg { width: 14px; height: 14px; vertical-align: middle; margin-right: 0.25rem; }

        /* Communities mini */
        .communities-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }
        .community-mini-card {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.75rem;
          transition: transform 0.3s;
        }
        .community-mini-card:hover { transform: translateY(-4px); }
        .community-mini-avatar {
          width: 52px; height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
        }
        .community-mini-info h4 { margin: 0; font-size: 0.95rem; color: #fff; font-weight: 600; }
        .community-mini-meta { font-size: 0.75rem; color: rgba(255,255,255,0.4); }
        .join-btn {
          padding: 0.4rem 1rem;
          border-radius: 8px;
          border: 1px solid #CCFF00;
          background: transparent;
          color: #CCFF00;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
        }
        .join-btn:hover { background: #CCFF00; color: #08080f; }

        /* Quick Actions */
        .actions-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }
        .action-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 1.5rem 1rem;
          gap: 0.75rem;
          cursor: pointer;
          transition: transform 0.3s, border-color 0.3s;
        }
        .action-card:hover { transform: translateY(-4px); border-color: rgba(204, 255, 0, 0.3); }
        .action-icon svg { width: 32px; height: 32px; color: #CCFF00; }
        .action-text h4 { margin: 0; font-size: 0.95rem; color: #fff; font-weight: 600; }
        .action-text p { margin: 0; font-size: 0.8rem; color: rgba(255,255,255,0.4); }

        /* Responsive */
        @media (max-width: 900px) {
          .stats-row { grid-template-columns: repeat(2, 1fr); }
          .trending-grid { grid-template-columns: repeat(2, 1fr); }
          .communities-row { grid-template-columns: repeat(2, 1fr); }
          .actions-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .dashboard { padding: 1rem; }
          .stats-row { grid-template-columns: 1fr 1fr; }
          .trending-grid { grid-template-columns: 1fr; }
          .communities-row { grid-template-columns: 1fr; }
          .actions-grid { grid-template-columns: 1fr; }
          .welcome-card { flex-direction: column; text-align: center; }
        }
      `}</style>
    </div>
  )
}
