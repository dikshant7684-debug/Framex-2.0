import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuthStore } from '../stores/authStore'
import { usePostStore } from '../stores/postStore'
import { useFeedStore } from '../stores/feedStore'

export default function PostComposer({ onClose }) {
  const [content, setContent] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const user = useAuthStore(s => s.user)
  const profile = useAuthStore(s => s.profile)
  const createPost = usePostStore(s => s.createPost)
  const refreshFeed = useFeedStore(s => s.fetchFeed)
  const textareaRef = useRef(null)

  const handleSubmit = async () => {
    const trimmed = content.trim()
    if (!trimmed) return
    setIsSubmitting(true)
    setError('')

    try {
      await createPost({
        content: trimmed,
        image_url: imageUrl.trim() || null,
      })
      setContent('')
      setImageUrl('')
      refreshFeed({ refresh: true })
      if (onClose) onClose()
    } catch (err) {
      setError(err.message || 'Failed to create post')
    } finally {
      setIsSubmitting(false)
    }
  }

  const avatarColor = profile?.avatar_color || '#CCFF00'
  const displayName = profile?.display_name || profile?.username || user?.email || 'User'

  return (
    <motion.div
      className="post-composer-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => { if (e.target === e.currentTarget && onClose) onClose() }}
    >
      <motion.div
        className="post-composer"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        <div className="post-composer-header">
          <h3>Create Post</h3>
          <button className="post-composer-close" onClick={onClose}>&times;</button>
        </div>

        <div className="post-composer-body">
          <div className="post-composer-avatar" style={{ background: avatarColor }}>
            {displayName.charAt(0).toUpperCase()}
          </div>
          <textarea
            ref={textareaRef}
            className="post-composer-textarea"
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            maxLength={2000}
            autoFocus
          />
        </div>

        <div className="post-composer-image">
          <input
            className="post-composer-image-input"
            placeholder="Add image URL (optional)"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        {error && <p className="post-composer-error">{error}</p>}

        <div className="post-composer-footer">
          <span className="post-composer-count">{content.length}/2000</span>
          <button
            className="post-composer-submit"
            onClick={handleSubmit}
            disabled={!content.trim() || isSubmitting}
          >
            {isSubmitting ? 'Posting...' : 'Post'}
          </button>
        </div>
      </motion.div>

      <style>{postComposerStyles}</style>
    </motion.div>
  )
}

const postComposerStyles = `
  .post-composer-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 1rem;
    backdrop-filter: blur(4px);
  }

  .post-composer {
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 16px;
    width: 100%;
    max-width: 520px;
    overflow: hidden;
  }

  .post-composer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.25rem;
    border-bottom: 1px solid var(--border);
  }
  .post-composer-header h3 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text);
  }
  .post-composer-close {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: none;
    background: var(--surface);
    color: var(--text-secondary);
    font-size: 1.25rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: inherit;
  }
  .post-composer-close:hover {
    background: var(--surface-hover);
    color: var(--text);
  }

  .post-composer-body {
    display: flex;
    gap: 0.75rem;
    padding: 1rem 1.25rem;
  }
  .post-composer-avatar {
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
  .post-composer-textarea {
    flex: 1;
    background: none;
    border: none;
    color: var(--text);
    font-size: 1rem;
    font-family: inherit;
    resize: none;
    min-height: 100px;
    outline: none;
    line-height: 1.5;
  }
  .post-composer-textarea::placeholder {
    color: var(--text-secondary);
  }

  .post-composer-image {
    padding: 0 1.25rem 0.75rem;
  }
  .post-composer-image-input {
    width: 100%;
    padding: 0.6rem 0.75rem;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: var(--surface);
    color: var(--text);
    font-size: 0.85rem;
    font-family: inherit;
    outline: none;
    box-sizing: border-box;
  }
  .post-composer-image-input:focus {
    border-color: var(--accent);
  }

  .post-composer-error {
    color: var(--danger, #ff4d4d);
    font-size: 0.85rem;
    padding: 0 1.25rem 0.5rem;
    margin: 0;
  }

  .post-composer-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1.25rem;
    border-top: 1px solid var(--border);
  }
  .post-composer-count {
    font-size: 0.8rem;
    color: var(--text-secondary);
  }
  .post-composer-submit {
    padding: 0.5rem 1.5rem;
    border-radius: 10px;
    border: none;
    background: var(--accent);
    color: #08080f;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    font-family: inherit;
    transition: all 0.2s;
  }
  .post-composer-submit:hover:not(:disabled) {
    opacity: 0.9;
    transform: translateY(-1px);
  }
  .post-composer-submit:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`
