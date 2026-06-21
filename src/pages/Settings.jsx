import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

const Icons = {
  user: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  mail: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  bell: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
  shield: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  globe: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
  lock: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>,
  chevronRight: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>,
  edit: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
  logOut: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>,
  smartphone: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
}

export default function Settings() {
  const { user, signOut } = useAuth()
  const displayName = user?.user_metadata?.username || user?.email?.split('@')[0] || 'User'
  const email = user?.email || 'user@framex.app'
  const initial = displayName.charAt(0).toUpperCase()

  return (
    <div className="page-enter">
      <div className="settings-page">
        <div className="page-header">
          <h1>Settings</h1>
          <p>Manage your account and preferences</p>
        </div>

        {/* Profile */}
        <div className="profile-card glass">
          <div className="profile-avatar">{initial}</div>
          <div className="profile-info">
            <h2>{displayName}</h2>
            <span className="profile-email">{email}</span>
          </div>
          <button className="edit-profile-btn">{Icons.edit} Edit Profile</button>
        </div>

        {/* Account Settings */}
        <div className="settings-card glass">
          <h3 className="settings-card-title">Account Settings</h3>
          <div className="settings-items">
            {[
              { icon: Icons.mail, label: 'Email Notifications', desc: 'Manage email preferences' },
              { icon: Icons.shield, label: 'Two-Factor Auth', desc: 'Enhance account security' },
              { icon: Icons.smartphone, label: 'Connected Accounts', desc: 'Link social profiles' },
              { icon: Icons.globe, label: 'Language', desc: 'English (US)' },
            ].map((item, i) => (
              <div key={i} className="settings-item">
                <div className="settings-item-icon">{item.icon}</div>
                <div className="settings-item-content">
                  <span className="settings-item-label">{item.label}</span>
                  <span className="settings-item-desc">{item.desc}</span>
                </div>
                <div className="settings-item-arrow">{Icons.chevronRight}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy */}
        <div className="settings-card glass">
          <h3 className="settings-card-title">Privacy</h3>
          <div className="settings-items">
            {[
              { label: 'Private Account', desc: 'Only approved followers can see your content' },
              { label: 'Activity Status', desc: 'Show when you\'re active' },
              { label: 'Show Read Receipts', desc: 'Let others know you\'ve seen their messages' },
            ].map((item, i) => (
              <div key={i} className="settings-item">
                <div className="settings-item-icon">{Icons.lock}</div>
                <div className="settings-item-content">
                  <span className="settings-item-label">{item.label}</span>
                  <span className="settings-item-desc">{item.desc}</span>
                </div>
                <div className={`toggle ${i === 1 ? 'toggle-on' : ''}`}>
                  <div className="toggle-knob" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Danger Zone */}
        <div className="settings-card glass danger-zone">
          <h3 className="settings-card-title" style={{ color: '#ff6464' }}>Danger Zone</h3>
          <p className="danger-desc">Once you delete your account, there is no going back. Please be certain.</p>
          <button className="delete-btn">Delete Account</button>
        </div>

        {/* Sign out */}
        <div className="sign-out-section">
          <button className="sign-out-btn" onClick={signOut}>
            {Icons.logOut} Sign Out
          </button>
          <span className="version">FrameX v1.0.0</span>
        </div>
      </div>

      <style>{`
        .settings-page {
          padding: 1.5rem;
          max-width: 720px;
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

        .page-header { margin-bottom: 1.5rem; }
        .page-header h1 { font-size: 1.75rem; font-weight: 700; color: #fff; margin: 0 0 0.35rem; }
        .page-header p { font-size: 0.9rem; color: rgba(255,255,255,0.4); margin: 0; }

        /* Profile */
        .profile-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
          margin-bottom: 1rem;
        }
        .profile-avatar {
          width: 56px; height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #CCFF00, #a0cc00);
          color: #08080f;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          font-weight: 700;
          flex-shrink: 0;
        }
        .profile-info { flex: 1; min-width: 0; }
        .profile-info h2 { margin: 0; font-size: 1.1rem; font-weight: 600; color: #fff; }
        .profile-email { font-size: 0.85rem; color: rgba(255,255,255,0.4); }
        .edit-profile-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.1);
          background: transparent;
          color: rgba(255,255,255,0.6);
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
          flex-shrink: 0;
        }
        .edit-profile-btn svg { width: 16px; height: 16px; }
        .edit-profile-btn:hover { border-color: #CCFF00; color: #CCFF00; }

        /* Cards */
        .settings-card {
          padding: 1.25rem;
          margin-bottom: 1rem;
        }
        .settings-card-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin: 0 0 0.75rem;
        }
        .settings-items { display: flex; flex-direction: column; }
        .settings-item {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.85rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .settings-item:last-child { border-bottom: none; }
        .settings-item:hover { opacity: 0.8; }
        .settings-item-icon {
          width: 36px; height: 36px;
          border-radius: 10px;
          background: rgba(255,255,255,0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .settings-item-icon svg { width: 18px; height: 18px; color: rgba(255,255,255,0.4); }
        .settings-item-content { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 0.1rem; }
        .settings-item-label { font-size: 0.9rem; color: #fff; font-weight: 500; }
        .settings-item-desc { font-size: 0.78rem; color: rgba(255,255,255,0.3); }
        .settings-item-arrow svg { width: 18px; height: 18px; color: rgba(255,255,255,0.2); }

        /* Toggle */
        .toggle {
          width: 40px; height: 22px;
          border-radius: 11px;
          background: rgba(255,255,255,0.1);
          position: relative;
          transition: background 0.3s;
          flex-shrink: 0;
          cursor: pointer;
        }
        .toggle-on { background: #CCFF00; }
        .toggle-knob {
          width: 16px; height: 16px;
          border-radius: 50%;
          background: #fff;
          position: absolute;
          top: 3px; left: 3px;
          transition: transform 0.3s;
        }
        .toggle-on .toggle-knob { transform: translateX(18px); }

        /* Danger zone */
        .danger-zone { border-color: rgba(255, 100, 100, 0.15); }
        .danger-desc { font-size: 0.85rem; color: rgba(255,255,255,0.4); margin: 0 0 1rem; }
        .delete-btn {
          padding: 0.6rem 1.5rem;
          border-radius: 8px;
          border: 1px solid rgba(255, 100, 100, 0.3);
          background: rgba(255, 100, 100, 0.1);
          color: #ff6464;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
          font-weight: 500;
        }
        .delete-btn:hover { background: #ff6464; color: #fff; }

        /* Sign out */
        .sign-out-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          padding: 2rem 0;
        }
        .sign-out-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 2rem;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.1);
          background: transparent;
          color: rgba(255,255,255,0.5);
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
        }
        .sign-out-btn svg { width: 18px; height: 18px; }
        .sign-out-btn:hover { border-color: rgba(255,100,100,0.4); color: #ff6464; }
        .version { font-size: 0.75rem; color: rgba(255,255,255,0.2); }

        @media (max-width: 600px) {
          .settings-page { padding: 1rem; }
          .profile-card { flex-wrap: wrap; justify-content: center; text-align: center; }
          .profile-info { width: 100%; text-align: center; }
          .edit-profile-btn { width: 100%; justify-content: center; }
          .page-header h1 { font-size: 1.4rem; }
        }
      `}</style>
    </div>
  )
}
