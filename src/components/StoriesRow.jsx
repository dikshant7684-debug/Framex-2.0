import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const storyUsers = [
  { id: 'own', name: 'Your Story', avatar: null, isOwn: true, unread: false, online: true },
  { id: 'u1', name: 'Luna', avatar: 'https://i.pravatar.cc/150?u=luna', unread: true, online: true },
  { id: 'u2', name: 'Max', avatar: 'https://i.pravatar.cc/150?u=max', unread: true, online: true },
  { id: 'u3', name: 'Zara', avatar: 'https://i.pravatar.cc/150?u=zara', unread: false, online: true },
  { id: 'u4', name: 'Kai', avatar: 'https://i.pravatar.cc/150?u=kai', unread: true, online: false },
  { id: 'u5', name: 'Nova', avatar: 'https://i.pravatar.cc/150?u=nova', unread: false, online: false },
  { id: 'u6', name: 'Rey', avatar: 'https://i.pravatar.cc/150?u=rey', unread: true, online: true },
  { id: 'u7', name: 'Elise', avatar: 'https://i.pravatar.cc/150?u=elise', unread: false, online: false },
  { id: 'u8', name: 'Theo', avatar: 'https://i.pravatar.cc/150?u=theo', unread: true, online: true },
]

const gradientPalette = [
  'linear-gradient(135deg, #f093fb, #f5576c)',
  'linear-gradient(135deg, #4facfe, #00f2fe)',
  'linear-gradient(135deg, #a18cd1, #fbc2eb)',
  'linear-gradient(135deg, #fccb90, #d57eeb)',
  'linear-gradient(135deg, #667eea, #764ba2)',
  'linear-gradient(135deg, #89f7fe, #66a6ff)',
  'linear-gradient(135deg, #f43b47, #453a94)',
  'linear-gradient(135deg, #11998e, #38ef7d)',
]

function getGradient(id) {
  return gradientPalette[id % gradientPalette.length]
}

function getInitial(name) {
  return name.charAt(0).toUpperCase()
}

export default function StoriesRow() {
  const scrollRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }
  const handleMouseUp = () => setIsDragging(false)
  const handleMouseLeave = () => setIsDragging(false)
  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 1.5
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  return (
    <div className="stories-section">
      <div className="stories-header">
        <span className="stories-title">Stories</span>
      </div>
      <div
        ref={scrollRef}
        className="stories-scroll"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {storyUsers.map((user, i) => {
          const gradient = getGradient(i)
          const initial = getInitial(user.name)
          const hasUnread = user.unread

          return (
            <motion.div
              key={user.id}
              className={`story-item ${hasUnread ? 'unread' : ''}`}
              whileTap={{ scale: 0.92 }}
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <div className="story-avatar-ring" style={{ background: gradient }}>
                <div className="story-avatar-inner">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} />
                  ) : (
                    <span className="story-avatar-text">{initial}</span>
                  )}
                </div>
                {user.isOwn && <span className="story-plus-badge">+</span>}
              </div>
              <span className="story-name">{user.name}</span>
              {user.online && <span className="story-online-dot" />}
            </motion.div>
          )
        })}
      </div>
      <style>{storiesStyles}</style>
    </div>
  )
}

const storiesStyles = `
  .stories-section {
    margin-bottom: 0.5rem;
    padding: 0.75rem 0 0.25rem;
  }

  .stories-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.25rem;
    margin-bottom: 0.75rem;
  }
  .stories-title {
    font-size: 0.85rem;
    font-weight: 600;
    color: rgba(255,255,255,0.6);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .stories-scroll {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    padding: 0 1.25rem 0.5rem;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
    cursor: grab;
    user-select: none;
  }
  .stories-scroll::-webkit-scrollbar {
    display: none;
  }
  .stories-scroll:active {
    cursor: grabbing;
  }

  .story-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
    flex-shrink: 0;
    width: 68px;
    cursor: pointer;
    position: relative;
    -webkit-tap-highlight-color: transparent;
  }

  .story-avatar-ring {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-shrink: 0;
  }
  .story-item.unread .story-avatar-ring {
    box-shadow: 0 0 0 3px rgba(204,255,0,0.15);
  }

  .story-avatar-inner {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    overflow: hidden;
    background: #08080f;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .story-avatar-inner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .story-avatar-text {
    font-size: 1.25rem;
    font-weight: 700;
    color: #fff;
  }
  .story-plus-badge {
    position: absolute;
    bottom: -2px;
    right: -2px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #CCFF00;
    color: #08080f;
    font-size: 14px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #08080f;
    line-height: 1;
  }

  .story-name {
    font-size: 0.7rem;
    color: rgba(255,255,255,0.6);
    text-align: center;
    max-width: 68px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .story-online-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #22c55e;
    position: absolute;
    bottom: 18px;
    right: 6px;
    border: 2px solid var(--bg, #08080f);
  }

  @media (max-width: 600px) {
    .stories-scroll { padding: 0 0.75rem 0.5rem; }
    .story-item { width: 60px; }
    .story-avatar-ring { width: 52px; height: 52px; }
    .story-avatar-inner { width: 44px; height: 44px; }
    .story-name { max-width: 60px; }
    .stories-header { padding: 0 0.75rem; }
  }
`
