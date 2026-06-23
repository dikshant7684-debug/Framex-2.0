import { useState } from 'react'
import { motion } from 'framer-motion'
import { usePostStore } from '../stores/postStore'

function formatTime(timestamp) {
  const diff = Date.now() - timestamp
  const mins = Math.floor(diff / 60000)
  if (mins < 1) return 'Just now'
  if (mins < 60) return `${mins}m ago`
  const hours = Math.floor(mins / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  if (days < 7) return `${days}d ago`
  return new Date(timestamp).toLocaleDateString()
}

function formatCount(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M'
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K'
  return n.toString()
}

const icons = {
  heart: (filled) => (
    <svg viewBox="0 0 24 24" fill={filled ? '#ff4d6d' : 'none'} stroke={filled ? '#ff4d6d' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: filled ? 'drop-shadow(0 0 6px rgba(255,77,109,0.4))' : 'none' }}>
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
    </svg>
  ),
  comment: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
    </svg>
  ),
  share: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  ),
  bookmark: (filled) => (
    <svg viewBox="0 0 24 24" fill={filled ? '#CCFF00' : 'none'} stroke={filled ? '#CCFF00' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
    </svg>
  ),
  dots: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
    </svg>
  ),
}

export default function FeedPost({ post }) {
  const [liked, setLiked] = useState(post.liked)
  const [saved, setSaved] = useState(post.saved)
  const [likesCount, setLikesCount] = useState(post.likes)
  const [animKey, setAnimKey] = useState(0)

  const likePost = usePostStore(s => s.likePost)
  const unlikePost = usePostStore(s => s.unlikePost)

  const handleLike = () => {
    if (liked) {
      setLiked(false)
      setLikesCount(prev => prev - 1)
      unlikePost(post.id).catch(() => {
        setLiked(true)
        setLikesCount(prev => prev + 1)
      })
    } else {
      setLiked(true)
      setLikesCount(prev => prev + 1)
      setAnimKey(prev => prev + 1)
      likePost(post.id).catch(() => {
        setLiked(false)
        setLikesCount(prev => prev - 1)
      })
    }
  }

  const handleSave = () => setSaved(prev => !prev)

  const getInitial = (name) => name.charAt(0).toUpperCase()

  return (
    <motion.div
      className="feed-post"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      {/* Header */}
      <div className="post-header">
        <div className="post-avatar" style={{ background: post.avatarColor }}>
          <span>{getInitial(post.username)}</span>
        </div>
        <div className="post-user-info">
          <span className="post-username">{post.username}</span>
          <span className="post-handle">{post.handle} · {formatTime(post.timestamp)}</span>
        </div>
        <button className="post-more-btn">{icons.dots}</button>
      </div>

      {/* Content */}
      <div className="post-content">
        <p>{post.content}</p>
      </div>

      {/* Images */}
      {post.images && post.images.length > 0 && (
        <div className={`post-images ${post.images.length > 1 ? 'multi' : ''}`}>
          {post.images.map((img, i) => (
            <motion.div
              key={i}
              className="post-image-wrap"
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <img src={img} alt={`Post image ${i + 1}`} loading="lazy" />
            </motion.div>
          ))}
        </div>
      )}

      {/* Stats bar */}
      <div className="post-stats">
        <span className="post-stat">
          <span style={{ color: liked ? '#ff4d6d' : undefined }}>{formatCount(likesCount)}</span> likes
        </span>
        <span className="post-stat">{formatCount(post.comments)} comments</span>
      </div>

      {/* Actions */}
      <div className="post-actions">
        <motion.button
          className={`post-action ${liked ? 'liked' : ''}`}
          onClick={handleLike}
          whileTap={{ scale: 0.8 }}
        >
          <motion.span
            key={animKey}
            initial={liked ? { scale: 0.5 } : false}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 500, damping: 15 }}
            className="post-action-icon"
          >
            {icons.heart(liked)}
          </motion.span>
          <span>Like</span>
        </motion.button>

        <button className="post-action">
          <span className="post-action-icon">{icons.comment}</span>
          <span>Comment</span>
        </button>

        <button className="post-action">
          <span className="post-action-icon">{icons.share}</span>
          <span>Share</span>
        </button>

        <motion.button
          className={`post-action ${saved ? 'saved' : ''}`}
          onClick={handleSave}
          whileTap={{ scale: 0.8 }}
        >
          <span className="post-action-icon">{icons.bookmark(saved)}</span>
          <span>Save</span>
        </motion.button>
      </div>

      <style>{postStyles}</style>
    </motion.div>
  )
}

const postStyles = `
  .feed-post {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 16px;
    padding: 1.1rem 1.25rem;
    margin-bottom: 0.85rem;
    transition: border-color 0.3s ease;
  }
  .feed-post:hover {
    border-color: rgba(255,255,255,0.1);
  }

  .post-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
  }

  .post-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: 700;
    color: #08080f;
    flex-shrink: 0;
  }

  .post-user-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 0;
  }
  .post-username {
    font-size: 0.9rem;
    font-weight: 600;
    color: #fff;
  }
  .post-handle {
    font-size: 0.75rem;
    color: rgba(255,255,255,0.35);
  }

  .post-more-btn {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    color: rgba(255,255,255,0.3);
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.2s;
    padding: 0;
    flex-shrink: 0;
  }
  .post-more-btn:hover {
    background: rgba(255,255,255,0.05);
    color: rgba(255,255,255,0.6);
  }
  .post-more-btn svg {
    width: 18px;
    height: 18px;
  }

  .post-content {
    margin-bottom: 0.85rem;
  }
  .post-content p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: rgba(255,255,255,0.85);
    margin: 0;
  }

  .post-images {
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 0.75rem;
  }
  .post-images.multi {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px;
  }
  .post-image-wrap {
    overflow: hidden;
    cursor: pointer;
  }
  .post-image-wrap img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }
  .post-image-wrap:hover img {
    transform: scale(1.03);
  }
  .post-images.multi .post-image-wrap img {
    height: 200px;
  }

  .post-stats {
    display: flex;
    gap: 1rem;
    padding: 0.5rem 0 0.65rem;
    border-top: 1px solid rgba(255,255,255,0.04);
    margin-bottom: 0.25rem;
  }
  .post-stat {
    font-size: 0.78rem;
    color: rgba(255,255,255,0.35);
    font-weight: 500;
  }
  .post-stat span {
    color: rgba(255,255,255,0.7);
  }

  .post-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.4rem;
    border-top: 1px solid rgba(255,255,255,0.04);
  }
  .post-action {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 0.6rem;
    background: none;
    border: none;
    border-radius: 8px;
    color: rgba(255,255,255,0.4);
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.2s;
    font-family: inherit;
    flex: 1;
    justify-content: center;
  }
  .post-action:hover {
    background: rgba(255,255,255,0.04);
    color: rgba(255,255,255,0.7);
  }
  .post-action.liked {
    color: #ff4d6d;
  }
  .post-action.saved {
    color: #CCFF00;
  }

  .post-action-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .post-action-icon svg {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 480px) {
    .feed-post { padding: 1rem; }
    .post-image-wrap img { height: 220px; }
    .post-images.multi .post-image-wrap img { height: 150px; }
    .post-action { font-size: 0.72rem; padding: 0.35rem 0.4rem; }
    .post-action-icon svg { width: 16px; height: 16px; }
  }
`
