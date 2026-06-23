import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'

// ────────── Icons ──────────
const Icons = {
  menu: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
  ),
  search: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
  ),
  bell: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
  ),
  plus: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
  ),
  home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12l9-9 9 9"/><path d="M5 10v9a1 1 0 001 1h3v-5h6v5h3a1 1 0 001-1v-9"/></svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
  ),
  communities: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
  ),
  explore: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  ),
  notification: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
  ),
  settings: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
  ),
  logout: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
  ),
  close: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
  ),
  attachment: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
  ),
  emoji: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
  ),
  mic: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>
  ),
  send: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  ),
  checkAll: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 6 7 16 2 11"/><polyline points="22 6 12 16 9 13"/></svg>
  ),
  reply: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 17 4 12 9 7"/><path d="M20 18v-2a4 4 0 00-4-4H4"/></svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
  ),
  logo: 'F',
}

// ────────── Mock Stories Data ──────────
const storyUsers = [
  {
    id: 1,
    name: 'Your Story',
    avatar: '',
    online: true,
    unread: false,
    isOwn: true,
    stories: [
      { id: 101, type: 'gradient', gradient: 'linear-gradient(135deg, #C6FF00, #00E5FF)', duration: 5000 },
    ],
  },
  {
    id: 2,
    name: 'Luna',
    avatar: '',
    online: true,
    unread: true,
    stories: [
      { id: 201, type: 'gradient', gradient: 'linear-gradient(135deg, #f093fb, #f5576c)', duration: 5000 },
      { id: 202, type: 'gradient', gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)', duration: 4000 },
    ],
  },
  {
    id: 3,
    name: 'Marcus',
    avatar: '',
    online: true,
    unread: true,
    stories: [
      { id: 301, type: 'gradient', gradient: 'linear-gradient(135deg, #a18cd1, #fbc2eb)', duration: 5000 },
    ],
  },
  {
    id: 4,
    name: 'Sofia',
    avatar: '',
    online: false,
    unread: false,
    stories: [
      { id: 401, type: 'gradient', gradient: 'linear-gradient(135deg, #fccb90, #d57eeb)', duration: 4000 },
    ],
  },
  {
    id: 5,
    name: 'Kai',
    avatar: '',
    online: true,
    unread: true,
    stories: [
      { id: 501, type: 'gradient', gradient: 'linear-gradient(135deg, #667eea, #764ba2)', duration: 5000 },
    ],
  },
  {
    id: 6,
    name: 'Zara',
    avatar: '',
    online: false,
    unread: false,
    stories: [
      { id: 601, type: 'gradient', gradient: 'linear-gradient(135deg, #89f7fe, #66a6ff)', duration: 4000 },
    ],
  },
  {
    id: 7,
    name: 'Jules',
    avatar: '',
    online: true,
    unread: true,
    stories: [
      { id: 701, type: 'gradient', gradient: 'linear-gradient(135deg, #f43b47, #453a94)', duration: 5000 },
    ],
  },
]

// ────────── Story Viewer ──────────
function StoryViewer({ stories, userIndex, storyIndex, onClose, onNext, onPrev }) {
  const user = stories[userIndex]
  if (!user || !user.stories[storyIndex]) return null

  const story = user.stories[storyIndex]
  const progress = ((storyIndex + 1) / user.stories.length) * 100

  const getInitials = (name) => name?.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2) || '?'

  return (
    <div className="story-viewer-overlay" onClick={onClose}>
      <div className="story-viewer" onClick={(e) => e.stopPropagation()}>
        <div className="story-viewer-header">
          <div className="story-viewer-progress">
            {user.stories.map((_, i) => (
              <div key={i} className={`story-progress-bar ${i <= storyIndex ? 'active' : ''} ${i === storyIndex ? 'animating' : ''}`} />
            ))}
          </div>
          <div className="story-viewer-user">
            <div className="story-viewer-avatar" style={{ background: user.gradient || 'rgba(255,255,255,0.1)' }}>
              {user.avatar ? <img src={user.avatar} alt="" /> : <span>{getInitials(user.name)}</span>}
            </div>
            <span className="story-viewer-name">{user.name}</span>
            <span className="story-viewer-time">Just now</span>
          </div>
          <button className="story-viewer-close" onClick={onClose}>{Icons.close}</button>
        </div>
        <div className="story-viewer-content" style={{ background: story.gradient || '#1a1a2e' }}>
          <div className="story-viewer-text">{user.name}'s Story</div>
        </div>
        <div className="story-viewer-tap-areas">
          <div className="story-tap-left" onClick={(e) => { e.stopPropagation(); onPrev() }} />
          <div className="story-tap-right" onClick={(e) => { e.stopPropagation(); onNext() }} />
        </div>
      </div>
    </div>
  )
}

// ────────── Typing Indicator ──────────
function TypingIndicator({ users }) {
  if (!users || users.length === 0) return null
  const label = users.length === 1 ? `${users[0]} is typing...` : `${users.length} people are typing...`
  return (
    <div className="typing-indicator">
      <div className="typing-dots">
        <span className="typing-dot" /><span className="typing-dot" /><span className="typing-dot" />
      </div>
      <span className="typing-label">{label}</span>
    </div>
  )
}

// ────────── Date Divider ──────────
function DateDivider({ date }) {
  const today = new Date()
  const msgDate = new Date(date)
  const isToday = today.toDateString() === msgDate.toDateString()
  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)
  const isYesterday = yesterday.toDateString() === msgDate.toDateString()

  let label = isToday ? 'Today' : isYesterday ? 'Yesterday' : msgDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

  return <div className="date-divider"><span>{label}</span></div>
}

// ────────── Styles ──────────
const chatStyles = `
/* ── Base ── */
.chat-page {
  --chat-bg: #050816;
  --chat-glass: rgba(255,255,255,0.08);
  --chat-glass-strong: rgba(255,255,255,0.12);
  --chat-glass-hover: rgba(255,255,255,0.14);
  --chat-accent: #C6FF00;
  --chat-cyan: #00E5FF;
  --chat-text: #ffffff;
  --chat-text-secondary: rgba(255,255,255,0.6);
  --chat-radius: 24px;
  --chat-radius-sm: 16px;
  --chat-radius-pill: 50px;
  --chat-blur: 24px;
  --chat-header-h: 64px;
  --chat-composer-h: 72px;
  --chat-sidebar-w: 280px;
  --font-body: 'DM Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--chat-bg);
  color: var(--chat-text);
  font-family: var(--font-body);
  overflow: hidden;
  position: relative;
}

/* ── Header ── */
.chat-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--chat-header-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background: rgba(5, 8, 22, 0.75);
  backdrop-filter: blur(var(--chat-blur));
  -webkit-backdrop-filter: blur(var(--chat-blur));
  border-bottom: 1px solid rgba(255,255,255,0.06);
  z-index: 50;
}

.chat-header-left {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 120px;
}

.chat-header-center {
  flex: 1;
  text-align: center;
}

.chat-header-center h2 {
  font-size: 16px;
  font-weight: 600;
  font-family: var(--font-body);
  color: var(--chat-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.chat-header-right {
  display: flex;
  align-items: center;
  gap: 4px;
  min-width: 120px;
  justify-content: flex-end;
}

.header-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: var(--chat-text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  padding: 8px;
}

.header-btn:hover,
.header-btn:active {
  background: var(--chat-glass);
  color: var(--chat-text);
  transform: scale(0.92);
}

.header-btn svg {
  width: 22px;
  height: 22px;
}

.header-logo {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: var(--chat-accent);
  color: var(--chat-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 18px;
  cursor: pointer;
  transition: transform 0.2s ease;
  border: none;
  flex-shrink: 0;
}

.header-logo:active {
  transform: scale(0.9);
}

.hamburger-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: var(--chat-text);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  transition: all 0.2s ease;
}

.hamburger-btn:hover,
.hamburger-btn:active {
  background: var(--chat-glass);
  transform: scale(0.92);
}

.hamburger-btn svg {
  width: 22px;
  height: 22px;
}

/* ── Sidebar ── */
.sidebar-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 60;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.sidebar-overlay.open {
  opacity: 1;
  pointer-events: all;
}

.chat-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: var(--chat-sidebar-w);
  max-width: 85vw;
  background: rgba(10, 14, 30, 0.92);
  backdrop-filter: blur(var(--chat-blur));
  -webkit-backdrop-filter: blur(var(--chat-blur));
  border-right: 1px solid rgba(255,255,255,0.06);
  z-index: 70;
  display: flex;
  flex-direction: column;
  transform: translateX(-100%);
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
}

.chat-sidebar.open {
  transform: translateX(0);
}

.sidebar-profile {
  padding: 24px 20px 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.sidebar-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--chat-accent);
  color: var(--chat-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
  position: relative;
  flex-shrink: 0;
  overflow: hidden;
}

.sidebar-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.status-dot {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #22c55e;
  border: 3px solid rgba(10, 14, 30, 0.92);
}

.sidebar-user-info {
  flex: 1;
  min-width: 0;
}

.sidebar-username {
  font-size: 16px;
  font-weight: 600;
  color: var(--chat-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sidebar-status {
  font-size: 12px;
  color: #22c55e;
  font-weight: 500;
}

/* ── Sidebar Nav ── */
.sidebar-nav {
  flex: 1;
  padding: 12px 12px;
  overflow-y: auto;
}

.sidebar-nav-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 14px;
  border-radius: var(--chat-radius-sm);
  color: var(--chat-text-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  background: transparent;
  width: 100%;
  text-align: left;
  font-size: 15px;
  font-family: var(--font-body);
}

.sidebar-nav-item svg {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
}

.sidebar-nav-item:hover {
  background: var(--chat-glass);
  color: var(--chat-text);
}

.sidebar-nav-item.active {
  background: rgba(198, 255, 0, 0.1);
  color: var(--chat-accent);
}

.sidebar-nav-item.active svg {
  color: var(--chat-accent);
}

.sidebar-nav-label {
  font-weight: 500;
}

.sidebar-section-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: rgba(255,255,255,0.3);
  padding: 16px 14px 8px;
  font-weight: 600;
}

/* ── Sidebar Bottom ── */
.sidebar-bottom {
  padding: 12px;
  border-top: 1px solid rgba(255,255,255,0.06);
}

.sidebar-logout {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 14px;
  border-radius: var(--chat-radius-sm);
  color: #ef4444;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  background: transparent;
  width: 100%;
  text-align: left;
  font-size: 15px;
  font-family: var(--font-body);
}

.sidebar-logout svg {
  width: 22px;
  height: 22px;
}

.sidebar-logout:hover {
  background: rgba(239, 68, 68, 0.1);
}

.sidebar-version {
  text-align: center;
  padding: 8px;
  font-size: 11px;
  color: rgba(255,255,255,0.2);
  letter-spacing: 0.5px;
}

/* ── Main Content ── */
.chat-main {
  flex: 1;
  margin-top: var(--chat-header-h);
  margin-bottom: var(--chat-composer-h);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 16px;
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
  position: relative;
}

.chat-main::-webkit-scrollbar {
  width: 4px;
}

.chat-main::-webkit-scrollbar-track {
  background: transparent;
}

.chat-main::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.15);
  border-radius: 10px;
}

/* ── Messages ── */
.messages-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px 0;
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
}

.date-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 12px;
}

.date-divider span {
  background: var(--chat-glass);
  padding: 4px 16px;
  border-radius: var(--chat-radius-pill);
  font-size: 12px;
  color: var(--chat-text-secondary);
  font-weight: 500;
  backdrop-filter: blur(10px);
}

.chat-msg-wrapper {
  display: flex;
  flex-direction: column;
  max-width: 75%;
  animation: msgFadeSlide 0.35s ease forwards;
}

.chat-msg-wrapper.incoming {
  align-self: flex-start;
}

.chat-msg-wrapper.outgoing {
  align-self: flex-end;
}

.chat-msg-bubble {
  padding: 10px 16px;
  border-radius: var(--chat-radius-sm);
  font-size: 14px;
  line-height: 1.5;
  position: relative;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.chat-msg-wrapper.incoming .chat-msg-bubble {
  background: var(--chat-glass);
  border: 1px solid rgba(255,255,255,0.05);
  border-bottom-left-radius: 4px;
  color: var(--chat-text);
}

.chat-msg-wrapper.outgoing .chat-msg-bubble {
  background: rgba(198, 255, 0, 0.15);
  border: 1px solid rgba(198, 255, 0, 0.2);
  border-bottom-right-radius: 4px;
  color: var(--chat-text);
}

.chat-msg-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
  padding: 0 4px;
}

.chat-msg-wrapper.incoming .chat-msg-meta {
  justify-content: flex-start;
}

.chat-msg-wrapper.outgoing .chat-msg-meta {
  justify-content: flex-end;
}

.chat-msg-time {
  font-size: 11px;
  color: var(--chat-text-secondary);
}

.chat-msg-receipt {
  display: flex;
  align-items: center;
}

.chat-msg-receipt svg {
  width: 14px;
  height: 14px;
  color: var(--chat-accent);
}

.chat-msg-reactions {
  display: flex;
  gap: 4px;
  margin-top: 4px;
  flex-wrap: wrap;
}

.msg-reaction {
  font-size: 12px;
  background: var(--chat-glass);
  padding: 2px 8px;
  border-radius: var(--chat-radius-pill);
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;
  user-select: none;
}

.msg-reaction:hover {
  background: var(--chat-glass-hover);
  border-color: rgba(198, 255, 0, 0.3);
  transform: scale(1.05);
}

.chat-msg-reply {
  font-size: 12px;
  color: var(--chat-cyan);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 2px;
  padding: 0 4px;
  opacity: 0.6;
  transition: opacity 0.2s;
  background: none;
  border: none;
  font-family: var(--font-body);
}

.chat-msg-reply:hover {
  opacity: 1;
}

.chat-msg-reply svg {
  width: 12px;
  height: 12px;
}

/* ── Typing Indicator ── */
.typing-indicator {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 4px;
  align-self: flex-start;
}

.typing-dots {
  display: flex;
  align-items: center;
  gap: 3px;
  background: var(--chat-glass);
  padding: 8px 12px;
  border-radius: var(--chat-radius-pill);
}

.typing-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--chat-text-secondary);
  animation: typingBounce 1.4s ease-in-out infinite;
}

.typing-dot:nth-child(2) { animation-delay: 0.2s; }
.typing-dot:nth-child(3) { animation-delay: 0.4s; }

.typing-label {
  font-size: 12px;
  color: var(--chat-text-secondary);
  font-style: italic;
}

/* ── Empty State ── */
.empty-state {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--chat-text-secondary);
  gap: 12px;
  padding: 40px 20px;
  text-align: center;
}

.empty-state-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--chat-glass);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
}

.empty-state-icon svg {
  width: 32px;
  height: 32px;
  opacity: 0.5;
}

.empty-state h3 {
  font-size: 18px;
  font-weight: 600;
  color: var(--chat-text);
  font-family: var(--font-body);
}

.empty-state p {
  font-size: 14px;
  max-width: 280px;
  line-height: 1.5;
}

/* ── Composer ── */
.chat-composer-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: var(--chat-composer-h);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px 12px;
  background: linear-gradient(to top, var(--chat-bg) 60%, transparent);
  z-index: 40;
}

.chat-composer {
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  max-width: 720px;
  background: rgba(255,255,255,0.06);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--chat-radius-pill);
  padding: 4px 4px 4px 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
}

.composer-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: var(--chat-text);
  font-size: 15px;
  font-family: var(--font-body);
  padding: 10px 0;
  min-width: 0;
}

.composer-input::placeholder {
  color: var(--chat-text-secondary);
}

.composer-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: var(--chat-text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  flex-shrink: 0;
  padding: 8px;
}

.composer-btn:hover,
.composer-btn:active {
  background: var(--chat-glass);
  color: var(--chat-text);
  transform: scale(0.92);
}

.composer-btn.send-btn {
  background: var(--chat-accent);
  color: var(--chat-bg);
}

.composer-btn.send-btn:hover,
.composer-btn.send-btn:active {
  background: #b8f000;
  color: var(--chat-bg);
  transform: scale(0.92);
}

.composer-btn.send-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

.composer-btn svg {
  width: 20px;
  height: 20px;
}

/* ── Stories Rail ── */
.stories-rail-wrapper {
  position: fixed;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 30;
  pointer-events: none;
}

.stories-rail {
  pointer-events: all;
  background: rgba(255,255,255,0.04);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: var(--chat-radius-pill);
  padding: 14px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-height: 80vh;
  overflow-y: auto;
  scrollbar-width: none;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
}

.stories-rail::-webkit-scrollbar {
  display: none;
}

.story-avatar-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  transition: transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: storyFloat 3s ease-in-out infinite;
  animation-delay: calc(var(--story-index) * 0.3s);
}

.story-avatar-wrapper:active {
  transform: scale(1.1);
}

.story-avatar-ring {
  width: 62px;
  height: 62px;
  border-radius: 50%;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.story-avatar-ring.unread {
  background: conic-gradient(from 0deg, var(--chat-accent), var(--chat-cyan), #a855f7, var(--chat-accent));
  animation: glowPulse 2s ease-in-out infinite;
}

.story-avatar-ring.seen {
  background: rgba(255,255,255,0.15);
}

.story-avatar-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(20, 25, 50, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  color: var(--chat-text);
  overflow: hidden;
  position: relative;
}

.story-avatar-inner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.story-online-dot {
  position: absolute;
  bottom: 1px;
  right: 1px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #22c55e;
  border: 2px solid rgba(10, 14, 30, 0.95);
}

.story-avatar-name {
  font-size: 10px;
  color: var(--chat-text-secondary);
  white-space: nowrap;
  max-width: 62px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
}

/* ── Story Viewer ── */
.story-viewer-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.92);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.2s ease;
}

.story-viewer {
  position: relative;
  width: 100%;
  max-width: 420px;
  height: 100vh;
  max-height: 700px;
  border-radius: var(--chat-radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 60px rgba(0,0,0,0.5);
}

.story-viewer-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: linear-gradient(to bottom, rgba(0,0,0,0.5), transparent);
}

.story-viewer-progress {
  display: flex;
  gap: 4px;
}

.story-progress-bar {
  flex: 1;
  height: 3px;
  background: rgba(255,255,255,0.2);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.story-progress-bar.active {
  background: rgba(255,255,255,0.4);
}

.story-progress-bar.animating::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: #fff;
  animation: progressAnim var(--duration, 5s) linear forwards;
}

.story-viewer-user {
  display: flex;
  align-items: center;
  gap: 10px;
}

.story-viewer-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  overflow: hidden;
  flex-shrink: 0;
}

.story-viewer-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.story-viewer-name {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
}

.story-viewer-time {
  font-size: 12px;
  color: rgba(255,255,255,0.6);
}

.story-viewer-close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: rgba(0,0,0,0.3);
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  transition: all 0.2s;
}

.story-viewer-close:hover {
  background: rgba(255,255,255,0.15);
}

.story-viewer-close svg {
  width: 20px;
  height: 20px;
}

.story-viewer-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.story-viewer-text {
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 20px rgba(0,0,0,0.3);
  text-align: center;
  padding: 20px;
}

.story-viewer-tap-areas {
  position: absolute;
  inset: 0;
  display: flex;
}

.story-tap-left,
.story-tap-right {
  flex: 1;
  cursor: pointer;
}

/* ── Loading ── */
.chat-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 16px;
  background: var(--chat-bg);
  color: var(--chat-text-secondary);
}

.loading-spinner {
  width: 36px;
  height: 36px;
  border: 3px solid var(--chat-glass);
  border-top-color: var(--chat-accent);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

/* ── Channel List (no channel selected) ── */
.channel-selector {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px 0;
}

.channel-selector h3 {
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--chat-text-secondary);
  margin-bottom: 12px;
  font-family: var(--font-body);
  padding: 0 4px;
}

.channel-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: var(--chat-radius-sm);
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  background: transparent;
  color: var(--chat-text);
  width: 100%;
  text-align: left;
  font-size: 15px;
  font-family: var(--font-body);
}

.channel-item:hover {
  background: var(--chat-glass);
}

.channel-item:active {
  transform: scale(0.98);
}

.channel-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--chat-glass-strong);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  color: var(--chat-accent);
  flex-shrink: 0;
}

.channel-info {
  flex: 1;
  min-width: 0;
}

.channel-name {
  font-weight: 600;
  font-size: 15px;
}

.channel-preview {
  font-size: 13px;
  color: var(--chat-text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.channel-meta {
  text-align: right;
}

.channel-time {
  font-size: 11px;
  color: var(--chat-text-secondary);
}

.channel-unread {
  background: var(--chat-accent);
  color: var(--chat-bg);
  font-size: 11px;
  font-weight: 700;
  min-width: 20px;
  height: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
  margin-top: 4px;
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .stories-rail-wrapper {
    right: 10px;
  }
  .stories-rail {
    padding: 12px 8px;
    gap: 14px;
  }
  .story-avatar-ring {
    width: 54px;
    height: 54px;
  }
  .story-avatar-name {
    max-width: 54px;
    font-size: 9px;
  }
}

@media (max-width: 768px) {
  .stories-rail-wrapper {
    display: none;
  }
  .chat-sidebar {
    max-width: 100vw;
  }
  .chat-main {
    padding: 12px;
  }
  .messages-container {
    padding: 4px 0;
  }
  .chat-msg-wrapper {
    max-width: 85%;
  }
  .chat-composer-wrapper {
    padding: 0 10px 10px;
  }
  .header-btn {
    width: 36px;
    height: 36px;
  }
  .header-btn svg {
    width: 20px;
    height: 20px;
  }
  .chat-header {
    padding: 0 10px;
  }
  .chat-header-right {
    min-width: auto;
    gap: 0;
  }
  .chat-header-left {
    min-width: auto;
  }
  .chat-header-center h2 {
    font-size: 14px;
  }
  .story-viewer {
    max-height: 100vh;
    border-radius: 0;
  }
}

@media (min-width: 769px) and (max-width: 1200px) {
  .chat-header-right .header-btn.chat-new-btn {
    display: none;
  }
}

/* ── Animations ── */
@keyframes msgFadeSlide {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes typingBounce {
  0%, 60%, 100% {
    transform: translateY(0);
    opacity: 0.4;
  }
  30% {
    transform: translateY(-8px);
    opacity: 1;
  }
}

@keyframes storyFloat {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}

@keyframes glowPulse {
  0%, 100% {
    box-shadow: 0 0 8px rgba(198, 255, 0, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(198, 255, 0, 0.6);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes progressAnim {
  from { width: 0%; }
  to { width: 100%; }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* ── User Panel (Channel Members) ── */
.user-panel-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 998;
  animation: fadeIn 0.2s ease;
}
.user-panel {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-8px);
  width: min(380px, calc(100vw - 32px));
  max-height: min(480px, calc(100vh - 160px));
  background: var(--bg-card, #1a1a2e);
  border: 1px solid var(--border-color, rgba(255, 255, 255, 0.08));
  border-radius: 16px;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);
  z-index: 999;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease, transform 0.25s ease;
  overflow: hidden;
}
.user-panel-open {
  opacity: 1;
  pointer-events: auto;
  transform: translateX(-50%) translateY(0);
}
.user-panel-inner {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.user-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border-color, rgba(255, 255, 255, 0.08));
  flex-shrink: 0;
}
.user-panel-header h3 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary, #fff);
  margin: 0;
}
.user-panel-close-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 8px;
  background: var(--bg-hover, rgba(255, 255, 255, 0.06));
  color: var(--text-secondary, #8892b0);
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.user-panel-close-btn:hover {
  background: var(--bg-active, rgba(255, 255, 255, 0.1));
  color: var(--text-primary, #fff);
}
.user-panel-body {
  flex: 1;
  overflow-y: auto;
  padding: 12px 0;
  min-height: 120px;
}
.user-panel-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}
.user-panel-spinner {
  width: 28px;
  height: 28px;
  border: 3px solid var(--border-color, rgba(255, 255, 255, 0.08));
  border-top-color: var(--accent, #c6ff00);
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}
.user-panel-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
}
.user-panel-empty-icon {
  width: 48px;
  height: 48px;
  color: var(--text-tertiary, #4a4f6b);
  margin-bottom: 16px;
  opacity: 0.6;
}
.user-panel-empty p {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary, #fff);
  margin: 0 0 6px 0;
}
.user-panel-empty span {
  font-size: 13px;
  color: var(--text-tertiary, #4a4f6b);
}
.user-panel-list {
  display: flex;
  flex-direction: column;
}
.user-panel-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background 0.15s;
}
.user-panel-item:hover {
  background: var(--bg-hover, rgba(255, 255, 255, 0.04));
}
.user-panel-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  background: var(--bg-hover, rgba(255, 255, 255, 0.06));
}
.user-panel-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.user-panel-avatar-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-secondary, #8892b0);
  background: var(--bg-hover, rgba(255, 255, 255, 0.08));
}
.user-panel-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.user-panel-name-row {
  display: flex;
  align-items: center;
  gap: 6px;
}
.user-panel-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary, #fff);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.user-panel-verified {
  color: var(--accent, #c6ff00);
  flex-shrink: 0;
}
.user-panel-handle {
  font-size: 12px;
  color: var(--text-tertiary, #4a4f6b);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.user-panel-badge {
  font-size: 11px;
  font-weight: 600;
  color: var(--accent, #c6ff00);
  background: rgba(198, 255, 0, 0.12);
  padding: 2px 10px;
  border-radius: 12px;
  flex-shrink: 0;
  white-space: nowrap;
}
.channel-dropdown-arrow {
  transition: transform 0.25s ease;
  margin-left: 6px;
  color: var(--text-tertiary, #4a4f6b);
}
.user-panel-open .channel-dropdown-arrow {
  transform: rotate(180deg);
}

/* ── Responsive & Touch-target Improvements ── */

/* Very small screens: < 400px */
@media (max-width: 399px) {
  .chat-container {
    --safe-bottom: 0px;
  }
  .chat-header {
    padding: 0 12px;
  }
  .chat-header-center h2 {
    font-size: 16px;
  }
  .chat-messages {
    padding: 12px;
  }
  .chat-composer {
    padding: 8px 12px;
    gap: 6px;
  }
  .chat-composer input {
    font-size: 14px;
    padding: 10px 12px;
  }
  .chat-sidebar {
    width: 100%;
  }
  .user-panel {
    width: calc(100vw - 16px);
    max-height: calc(100vh - 140px);
  }
  .message-bubble {
    max-width: 90%;
  }
}

/* Tablet landscape: 768–1024px */
@media (min-width: 768px) and (max-width: 1024px) {
  .chat-stories-rail {
    max-width: 140px;
  }
  .chat-main {
    max-width: calc(100% - 320px);
  }
}

/* Large screens: > 1400px */
@media (min-width: 1400px) {
  .chat-container {
    max-width: 1600px;
    margin: 0 auto;
  }
  .chat-main {
    max-width: 720px;
  }
  .chat-stories-rail {
    max-width: 220px;
  }
  .chat-sidebar {
    width: 300px;
  }
  .chat-messages {
    padding: 24px 40px;
  }
}

/* Touch target minimum sizes for mobile */
@media (max-width: 768px) {
  .chat-header button,
  .chat-composer button,
  .chat-message-actions button,
  .chat-sidebar-item,
  .chat-back-btn,
  .user-panel-close-btn {
    min-width: 40px;
    min-height: 40px;
  }
  .chat-composer input {
    font-size: 16px; /* prevent iOS zoom on focus */
  }
  .chat-composer {
    padding-bottom: max(8px, env(safe-area-inset-bottom, 0px));
  }
  .chat-header {
    padding-top: max(0px, env(safe-area-inset-top, 0px));
  }
}

/* Stories rail hide on very narrow screens */
@media (max-width: 500px) {
  .chat-stories-rail {
    display: none;
  }
}
`


// ────────── Main Chat Component ──────────
export default function Chat() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeChannel, setActiveChannel] = useState(null)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [channels, setChannels] = useState([])
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [storyViewerOpen, setStoryViewerOpen] = useState(false)
  const [storyUserIndex, setStoryUserIndex] = useState(0)
  const [storyIndex, setStoryIndex] = useState(0)
  const [typingUsers, setTypingUsers] = useState([])
  const [showUserPanel, setShowUserPanel] = useState(false)
  const [panelUsers, setPanelUsers] = useState([])
  const [panelLoading, setPanelLoading] = useState(false)

  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  // ── Check auth ──
  useEffect(() => {
    document.title = 'Chat — FrameX'
    const init = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        if (!session) {
          navigate('/login')
          return
        }
        setUser(session.user)
      } catch (e) {
        console.warn('Auth check failed, running in offline mode')
        setUser({ id: 'offline', email: 'guest@framex.app' })
      }
      setLoading(false)
    }
    init()
  }, [navigate])

  // ── Load channels ──
  useEffect(() => {
    if (!user || user.id === 'offline') {
      // Offline mode: show sample channels
      setChannels([
        { id: 'general', name: 'general', display_name: '# general' },
        { id: 'random', name: 'random', display_name: '# random' },
      ])
      setActiveChannel({ id: 'general', name: 'general', display_name: '# general' })
      return
    }

    const fetchChannels = async () => {
      try {
        const { data } = await supabase
          .from('channels')
          .select('*')
          .order('name')
        if (data) {
          setChannels(data)
          if (!activeChannel && data.length > 0) {
            setActiveChannel(data[0])
          }
        }
      } catch (e) {
        console.warn('Failed to fetch channels:', e)
        setChannels([
          { id: 'general', name: 'general', display_name: '# general' },
        ])
        setActiveChannel({ id: 'general', name: 'general', display_name: '# general' })
      }
    }
    fetchChannels()
  }, [user])

  // ── Load messages ──
  useEffect(() => {
    if (!activeChannel) return

    const fetchMessages = async () => {
      try {
        if (user?.id === 'offline') {
          setMessages([
            {
              id: '1',
              content: 'Welcome to FrameX Chat! 🎉',
              user_id: 'system',
              created_at: new Date().toISOString(),
              profiles: { display_name: 'FrameX', username: 'framex' },
            },
            {
              id: '2',
              content: 'Select a story to view it. This is a demo environment.',
              user_id: 'system',
              created_at: new Date(Date.now() - 60000).toISOString(),
              profiles: { display_name: 'FrameX', username: 'framex' },
            },
          ])
          return
        }

        const { data } = await supabase
          .from('messages')
          .select('*, profiles(*)')
          .eq('channel_id', activeChannel.id)
          .order('created_at', { ascending: true })
          .limit(100)
        if (data) setMessages(data)
      } catch (e) {
        console.warn('Failed to load messages')
      }
    }
    fetchMessages()
  }, [activeChannel, user])

  // ── Subscribe to realtime messages ──
  useEffect(() => {
    if (!activeChannel || user?.id === 'offline') return

    let channel
    const setupSubscription = async () => {
      try {
        channel = supabase
          .channel(`messages:${activeChannel.id}`)
          .on('postgres_changes',
            { event: 'INSERT', schema: 'public', table: 'messages', filter: `channel_id=eq.${activeChannel.id}` },
            (payload) => {
              const newMsg = payload.new
              if (newMsg.user_id !== user?.id) {
                // Fetch profile for the new message
                supabase.from('profiles').select('*').eq('id', newMsg.user_id).single().then(({ data: profile }) => {
                  setMessages(prev => [...prev, { ...newMsg, profiles: profile }])
                }).catch(() => {
                  setMessages(prev => [...prev, newMsg])
                })
              }
            }
          )
          .subscribe()
      } catch (e) {
        console.warn('Realtime subscription failed')
      }
    }
    setupSubscription()
    return () => {
      if (channel) supabase.removeChannel(channel)
    }
  }, [activeChannel, user])

  // ── Scroll to bottom on new messages ──
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // ── Close sidebar on Escape ──
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') { setSidebarOpen(false) } }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // ── Lock body scroll when sidebar open ──
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [sidebarOpen])

  // ── Auto-advance stories ──
  useEffect(() => {
    if (!storyViewerOpen) return
    const userStories = storyUsers[storyUserIndex]
    if (!userStories) return
    const story = userStories.stories[storyIndex]
    if (!story) return

    const timer = setTimeout(() => {
      handleNextStory()
    }, story.duration || 5000)

    return () => clearTimeout(timer)
  }, [storyViewerOpen, storyUserIndex, storyIndex])

  // ── Fetch followers/friends for #general channel ──
  const fetchPanelUsers = useCallback(async () => {
    if (!user || user.id === 'offline') return
    setPanelLoading(true)
    try {
      // Get followers (people who follow the current user)
      const { data: followers } = await supabase
        .from('follows')
        .select('follower_id')
        .eq('following_id', user.id)

      // Get who the current user follows (for mutual/friends detection)
      const { data: following } = await supabase
        .from('follows')
        .select('following_id')
        .eq('follower_id', user.id)

      const followerIds = (followers || []).map(f => f.follower_id)
      const followingIds = (following || []).map(f => f.following_id)

      if (followerIds.length === 0) {
        setPanelUsers([])
        setPanelLoading(false)
        return
      }

      const { data: profiles } = await supabase
        .from('profiles')
        .select('id, username, display_name, avatar_url, bio, is_verified')
        .in('id', followerIds)

      const usersWithStatus = (profiles || []).map(p => ({
        ...p,
        isFriend: followingIds.includes(p.id),
        isFollower: true,
      }))

      setPanelUsers(usersWithStatus)
    } catch (e) {
      console.warn('Failed to fetch panel users:', e)
      setPanelUsers([])
    }
    setPanelLoading(false)
  }, [user])

  // ── Load panel users when opened ──
  useEffect(() => {
    if (showUserPanel) fetchPanelUsers()
  }, [showUserPanel, fetchPanelUsers])

  // ── Realtime subscription for follows changes ──
  useEffect(() => {
    if (!user || user.id === 'offline') return

    let channel
    try {
      channel = supabase
        .channel('follows-changes')
        .on('postgres_changes',
          { event: '*', schema: 'public', table: 'follows' },
          () => {
            if (showUserPanel) fetchPanelUsers()
          }
        )
        .subscribe()
    } catch (e) {
      console.warn('Realtime follows subscription failed')
    }

    return () => { if (channel) supabase.removeChannel(channel) }
  }, [user, showUserPanel, fetchPanelUsers])

  // ── Send message ──
  const sendMessage = useCallback(async (e) => {
    e?.preventDefault()
    if (!input.trim() || !activeChannel) return

    const content = input.trim()
    setInput('')

    if (user?.id === 'offline') {
      setMessages(prev => [
        ...prev,
        {
          id: `msg-${Date.now()}`,
          content,
          user_id: 'offline',
          created_at: new Date().toISOString(),
          profiles: { display_name: 'You', username: 'you' },
        },
      ])
      return
    }

    try {
      await supabase.from('messages').insert({
        channel_id: activeChannel.id,
        user_id: user.id,
        content,
      })
    } catch (e) {
      console.warn('Failed to send message')
    }
  }, [input, activeChannel, user])

  // ── Sign out ──
  const signOut = useCallback(async () => {
    try {
      await supabase.auth.signOut()
    } catch (e) {
      // ignore
    }
    navigate('/login')
  }, [navigate])

  // ── Story navigation ──
  const openStoryViewer = useCallback((userIdx) => {
    setStoryUserIndex(userIdx)
    setStoryIndex(0)
    setStoryViewerOpen(true)
  }, [])

  const closeStoryViewer = useCallback(() => {
    setStoryViewerOpen(false)
  }, [])

  const handleNextStory = useCallback(() => {
    const userStories = storyUsers[storyUserIndex]
    if (!userStories) return

    if (storyIndex < userStories.stories.length - 1) {
      setStoryIndex(prev => prev + 1)
    } else if (storyUserIndex < storyUsers.length - 1) {
      setStoryUserIndex(prev => prev + 1)
      setStoryIndex(0)
    } else {
      setStoryViewerOpen(false)
    }
  }, [storyUserIndex, storyIndex])

  const handlePrevStory = useCallback(() => {
    if (storyIndex > 0) {
      setStoryIndex(prev => prev - 1)
    } else if (storyUserIndex > 0) {
      setStoryUserIndex(prev => prev - 1)
      setStoryIndex(storyUsers[storyUserIndex - 1]?.stories.length - 1 || 0)
    }
  }, [storyUserIndex, storyIndex])

  // ── Helpers ──
  const getInitials = (name) => {
    if (!name) return '?'
    return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2) || '?'
  }

  const formatTime = (dateStr) => {
    const d = new Date(dateStr)
    const now = new Date()
    const diff = now - d
    const mins = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)

    if (mins < 1) return 'Now'
    if (mins < 60) return `${mins}m`
    if (hours < 24) return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    return d.toLocaleDateString([], { month: 'short', day: 'numeric' })
  }

  const getAvatarColor = (name) => {
    const colors = ['#C6FF00', '#00E5FF', '#a855f7', '#f472b6', '#f59e0b', '#34d399', '#60a5fa', '#fb923c']
    let hash = 0
    for (let i = 0; i < (name || '').length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash)
    }
    return colors[Math.abs(hash) % colors.length]
  }

  // ── Group messages by date ──
  const groupedMessages = messages.reduce((acc, msg, idx) => {
    const msgDate = new Date(msg.created_at).toDateString()
    const prevDate = idx > 0 ? new Date(messages[idx - 1].created_at).toDateString() : null
    if (msgDate !== prevDate) {
      acc.push({ type: 'date', date: msg.created_at })
    }
    acc.push({ type: 'message', msg, isOwn: msg.user_id === user?.id })
    return acc
  }, [])

  // ── Loading state ──
  if (loading) {
    return (
      <div className="chat-page">
        <style>{chatStyles}</style>
        <div className="chat-loading">
          <div className="loading-spinner" />
          <span>Loading chat...</span>
        </div>
      </div>
    )
  }

  // ── Get active display name ──
  const channelName = activeChannel?.display_name || activeChannel?.name || 'Select a channel'

  // ── Get current user info ──
  const currentUserName = user?.user_metadata?.full_name || user?.email || 'User'
  const currentUserInitials = getInitials(currentUserName)

  // ── Render ──
  return (
    <div className="chat-page">
      <style>{chatStyles}</style>

      {/* ─── Header ─── */}
      <header className="chat-header">
        <div className="chat-header-left">
          <button className="hamburger-btn" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
            {Icons.menu}
          </button>
          <button className="header-logo" onClick={() => navigate('/')}>{Icons.logo}</button>
        </div>
        <div className="chat-header-center" onClick={() => {
          if (activeChannel?.name === 'general' || activeChannel?.display_name === '# general') {
            setShowUserPanel(prev => !prev)
          }
        }} style={{ cursor: (activeChannel?.name === 'general') ? 'pointer' : 'default' }}>
          <h2>{channelName}</h2>
          {(activeChannel?.name === 'general') && (
            <svg className="channel-dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          )}
        </div>
        <div className="chat-header-right">
          <button className="header-btn" aria-label="Search">{Icons.search}</button>
          <button className="header-btn" aria-label="Notifications">
            {Icons.bell}
            <span className="notification-badge" />
          </button>
          <button className="header-btn chat-new-btn" aria-label="New chat">{Icons.plus}</button>
        </div>
      </header>

      {/* ─── User Panel (for #general channel) ─── */}
      {showUserPanel && (
        <div className="user-panel-overlay" onClick={() => setShowUserPanel(false)} />
      )}
      <div className={`user-panel ${showUserPanel ? 'user-panel-open' : ''}`}>
        <div className="user-panel-inner">
          <div className="user-panel-header">
            <h3>Channel Members</h3>
            <button className="user-panel-close-btn" onClick={() => setShowUserPanel(false)} aria-label="Close panel">
              {Icons.close}
            </button>
          </div>
          <div className="user-panel-body">
            {panelLoading ? (
              <div className="user-panel-loading">
                <div className="user-panel-spinner" />
              </div>
            ) : panelUsers.length === 0 ? (
              <div className="user-panel-empty">
                <svg className="user-panel-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <line x1="22" y1="6" x2="22" y2="12" />
                  <line x1="19" y1="9" x2="25" y2="9" />
                </svg>
                <p>You are alone</p>
                <span>Follow others to see them here</span>
              </div>
            ) : (
              <div className="user-panel-list">
                {panelUsers.map(pu => (
                  <div key={pu.id} className="user-panel-item" onClick={() => { setShowUserPanel(false); }}>
                    <div className="user-panel-avatar">
                      {pu.avatar_url ? (
                        <img src={pu.avatar_url} alt="" loading="lazy" />
                      ) : (
                        <span className="user-panel-avatar-fallback">
                          {(pu.display_name || pu.username || '?')[0].toUpperCase()}
                        </span>
                      )}
                    </div>
                    <div className="user-panel-info">
                      <div className="user-panel-name-row">
                        <span className="user-panel-name">{pu.display_name || pu.username || 'Unknown'}</span>
                        {pu.is_verified && (
                          <svg className="user-panel-verified" viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" />
                          </svg>
                        )}
                      </div>
                      <div className="user-panel-handle">@{pu.username}</div>
                    </div>
                    {pu.isFriend && <span className="user-panel-badge">Friend</span>}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ─── Sidebar Overlay ─── */}
      <div className={`sidebar-overlay ${sidebarOpen ? 'open' : ''}`} onClick={() => setSidebarOpen(false)} />

      {/* ─── Sidebar ─── */}
      <aside className={`chat-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-profile">
          <div className="sidebar-avatar">
            {user?.user_metadata?.avatar_url ? (
              <img src={user.user_metadata.avatar_url} alt="" />
            ) : (
              currentUserInitials
            )}
            <span className="status-dot" />
          </div>
          <div className="sidebar-user-info">
            <div className="sidebar-username">{currentUserName}</div>
            <div className="sidebar-status">● Online</div>
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="sidebar-section-label">Menu</div>
          <button className="sidebar-nav-item active" onClick={() => { setSidebarOpen(false); navigate('/chat') }}>
            {Icons.chat}
            <span className="sidebar-nav-label">Chats</span>
          </button>
          <button className="sidebar-nav-item" onClick={() => { setSidebarOpen(false); navigate('/home') }}>
            {Icons.home}
            <span className="sidebar-nav-label">Home</span>
          </button>
          <button className="sidebar-nav-item" onClick={() => { setSidebarOpen(false); navigate('/communities') }}>
            {Icons.communities}
            <span className="sidebar-nav-label">Communities</span>
          </button>
          <button className="sidebar-nav-item" onClick={() => { setSidebarOpen(false); navigate('/explore') }}>
            {Icons.explore}
            <span className="sidebar-nav-label">Explore</span>
          </button>

          <div className="sidebar-section-label">Preferences</div>
          <button className="sidebar-nav-item" onClick={() => { setSidebarOpen(false); navigate('/notifications') }}>
            {Icons.notification}
            <span className="sidebar-nav-label">Notifications</span>
          </button>
          <button className="sidebar-nav-item" onClick={() => { setSidebarOpen(false); navigate('/settings') }}>
            {Icons.settings}
            <span className="sidebar-nav-label">Settings</span>
          </button>
        </nav>

        <div className="sidebar-bottom">
          <button className="sidebar-logout" onClick={signOut}>
            {Icons.logout}
            <span>Log Out</span>
          </button>
          <div className="sidebar-version">FrameX v1.0.0</div>
        </div>
      </aside>

      {/* ─── Main Content ─── */}
      <main className="chat-main">
        {!activeChannel ? (
          <div className="messages-container">
            <div className="channel-selector">
              <h3>Channels</h3>
              {channels.map(ch => (
                <button key={ch.id} className="channel-item" onClick={() => setActiveChannel(ch)}>
                  <div className="channel-avatar">#</div>
                  <div className="channel-info">
                    <div className="channel-name">{ch.display_name || `# ${ch.name}`}</div>
                    <div className="channel-preview">Tap to view messages</div>
                  </div>
                  <div className="channel-meta" />
                </button>
              ))}
            </div>
          </div>
        ) : messages.length === 0 ? (
          <div className="messages-container">
            <div className="empty-state">
              <div className="empty-state-icon">{Icons.chat}</div>
              <h3>No messages yet</h3>
              <p>Start the conversation. Send a message to begin chatting.</p>
            </div>
          </div>
        ) : (
          <div className="messages-container">
            {groupedMessages.map((item, idx) => {
              if (item.type === 'date') {
                return <DateDivider key={`date-${idx}`} date={item.date} />
              }
              const { msg, isOwn } = item
              return (
                <div key={msg.id} className={`chat-msg-wrapper ${isOwn ? 'outgoing' : 'incoming'}`}>
                  <div className="chat-msg-bubble">
                    {!isOwn && (
                      <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--chat-accent)', marginBottom: 2 }}>
                        {msg.profiles?.display_name || msg.profiles?.username || 'Unknown'}
                      </div>
                    )}
                    <div>{msg.content}</div>
                  </div>
                  <div className="chat-msg-meta">
                    <span className="chat-msg-time">{formatTime(msg.created_at)}</span>
                    {isOwn && (
                      <span className="chat-msg-receipt">{Icons.checkAll}</span>
                    )}
                  </div>
                  <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                    <button className="chat-msg-reply">{Icons.reply} Reply</button>
                  </div>
                  <div className="chat-msg-reactions">
                    <span className="msg-reaction">❤️</span>
                    <span className="msg-reaction">🔥</span>
                    <span className="msg-reaction">👍</span>
                  </div>
                </div>
              )
            })}

            {/* Typing indicator */}
            {typingUsers.length > 0 && <TypingIndicator users={typingUsers} />}

            <div ref={messagesEndRef} />
          </div>
        )}
      </main>

      {/* ─── Composer ─── */}
      <div className="chat-composer-wrapper">
        <form className="chat-composer" onSubmit={sendMessage}>
          <button type="button" className="composer-btn" aria-label="Attach file">
            {Icons.attachment}
          </button>
          <input
            ref={inputRef}
            className="composer-input"
            type="text"
            placeholder={activeChannel ? `Message ${activeChannel.display_name || activeChannel.name || 'channel'}...` : 'Select a channel to start chatting'}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={!activeChannel}
            aria-label="Message input"
          />
          <button type="button" className="composer-btn" aria-label="Add emoji">
            {Icons.emoji}
          </button>
          <button type="button" className="composer-btn" aria-label="Voice message">
            {Icons.mic}
          </button>
          <button
            type="submit"
            className="composer-btn send-btn"
            disabled={!input.trim() || !activeChannel}
            aria-label="Send message"
          >
            {Icons.send}
          </button>
        </form>
      </div>

      {/* ─── Stories Rail ─── */}
      <div className="stories-rail-wrapper">
        <div className="stories-rail">
          {storyUsers.map((su, idx) => (
            <div
              key={su.id}
              className="story-avatar-wrapper"
              style={{ '--story-index': idx }}
              onClick={() => openStoryViewer(idx)}
            >
              <div className={`story-avatar-ring ${su.unread ? 'unread' : 'seen'}`}>
                <div className="story-avatar-inner">
                  {su.avatar ? (
                    <img src={su.avatar} alt="" />
                  ) : (
                    getInitials(su.name)
                  )}
                  {su.online && <span className="story-online-dot" />}
                </div>
              </div>
              <span className="story-avatar-name">{su.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Story Viewer ─── */}
      {storyViewerOpen && (
        <StoryViewer
          stories={storyUsers}
          userIndex={storyUserIndex}
          storyIndex={storyIndex}
          onClose={closeStoryViewer}
          onNext={handleNextStory}
          onPrev={handlePrevStory}
        />
      )}
    </div>
  )
}
