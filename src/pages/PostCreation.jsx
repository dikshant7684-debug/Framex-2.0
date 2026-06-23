import { useState, useRef, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuthStore } from '../stores/authStore'
import { usePostStore } from '../stores/postStore'
import { useFeedStore } from '../stores/feedStore'
import { useUiStore } from '../stores/uiStore'

const MAX_CAPTION_LENGTH = 2200
const MAX_IMAGES = 10
const SUPPORTED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
const MAX_FILE_SIZE = 20 * 1024 * 1024

const AUDIENCE_OPTIONS = [
  { value: 'public', label: 'Public', icon: 'globe', desc: 'Anyone can see this post' },
  { value: 'followers', label: 'Followers Only', icon: 'users', desc: 'Only followers can see this post' },
  { value: 'private', label: 'Private', icon: 'lock', desc: 'Only you can see this post' },
]

export default function PostCreation() {
  const navigate = useNavigate()
  const { profile } = useAuthStore()
  const { createPost, uploadPostImage, deletePostImage } = usePostStore()
  const { addPostOptimistic, removePostOptimistic } = useFeedStore()
  const { addToast } = useUiStore()

  const [caption, setCaption] = useState('')
  const [images, setImages] = useState([])
  const [audience, setAudience] = useState('public')
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [keyboardOffset, setKeyboardOffset] = useState(0)
  const [dragIndex, setDragIndex] = useState(null)

  const fileInputRef = useRef(null)
  const captionRef = useRef(null)
  const submitStartTime = useRef(0)

  useEffect(() => {
    const handleResize = () => {
      if (window.visualViewport) {
        const offset = Math.max(0, window.innerHeight - window.visualViewport.height)
        setKeyboardOffset(offset)
      }
    }
    window.visualViewport?.addEventListener('resize', handleResize)
    return () => window.visualViewport?.removeEventListener('resize', handleResize)
  }, [])

  const handleBack = useCallback(() => {
    if (uploading) return
    if (caption || images.length > 0) {
      if (window.confirm('Discard this post?')) {
        cleanupImages()
        navigate(-1)
      }
    } else {
      navigate(-1)
    }
  }, [caption, images, uploading, navigate])

  useEffect(() => {
    const handlePopState = () => {
      if (caption || images.length > 0) {
        cleanupImages()
      }
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [caption, images])

  const cleanupImages = async () => {
    for (const img of images) {
      if (img.path) {
        try { await deletePostImage(img.path) } catch {}
      }
    }
  }

  const validateFile = (file) => {
    if (!SUPPORTED_TYPES.includes(file.type)) {
      addToast(`Unsupported file type: ${file.type}`, 'error')
      return false
    }
    if (file.size > MAX_FILE_SIZE) {
      addToast('File too large. Max 20MB.', 'error')
      return false
    }
    return true
  }

  const handleFilesSelected = async (files) => {
    const remaining = MAX_IMAGES - images.length
    if (files.length > remaining) {
      addToast(`You can only add ${remaining} more image(s)`, 'error')
    }

    const validFiles = Array.from(files).slice(0, remaining).filter(validateFile)
    if (validFiles.length === 0) return

    const newImages = validFiles.map(file => ({
      id: `temp_${Date.now()}_${Math.random().toString(36).slice(2)}`,
      file,
      url: URL.createObjectURL(file),
      path: null,
      progress: 0,
      status: 'pending',
    }))

    setImages(prev => [...prev, ...newImages])
  }

  const handleInputChange = (e) => {
    const input = e.target
    const files = input.files
    if (files) {
      handleFilesSelected(files)
    }
    input.value = ''
  }

  const removeImage = (id) => {
    setImages(prev => {
      const img = prev.find(i => i.id === id)
      if (img?.url?.startsWith('blob:')) URL.revokeObjectURL(img.url)
      if (img?.path) {
        deletePostImage(img.path).catch(() => {})
      }
      return prev.filter(i => i.id !== id)
    })
  }

  const handleDragStart = (index) => setDragIndex(index)

  const handleDragOver = (e, index) => {
    e.preventDefault()
    if (dragIndex === null || dragIndex === index) return
    setImages(prev => {
      const next = [...prev]
      const [moved] = next.splice(dragIndex, 1)
      next.splice(index, 0, moved)
      return next
    })
    setDragIndex(index)
  }

  const handleDragEnd = () => setDragIndex(null)

  const uploadAllImages = async () => {
    const toUpload = images.filter(img => img.status === 'pending')
    if (toUpload.length === 0) return []

    const userId = useAuthStore.getState().user?.id
    if (!userId) throw new Error('Not authenticated')

    const uploaded = []

    for (const img of toUpload) {
      setImages(prev => prev.map(i =>
        i.id === img.id ? { ...i, status: 'uploading', progress: 0 } : i
      ))

      try {
        const result = await uploadPostImage(img.file, userId, (progress) => {
          setImages(prev => prev.map(i =>
            i.id === img.id ? { ...i, progress } : i
          ))
        })

        setImages(prev => prev.map(i =>
          i.id === img.id ? { ...i, path: result.path, url: result.url, status: 'done', progress: 100 } : i
        ))

        uploaded.push({ url: result.url, path: result.path })
      } catch (err) {
        setImages(prev => prev.map(i =>
          i.id === img.id ? { ...i, status: 'error' } : i
        ))
        throw new Error(`Failed to upload ${img.file.name}: ${err.message}`)
      }
    }

    return uploaded
  }

  const handleSubmit = async () => {
    if (isSubmitting || uploading) return
    if (images.length === 0 && !caption.trim()) {
      addToast('Add a photo or write something', 'error')
      return
    }

    setIsSubmitting(true)
    setUploading(true)
    submitStartTime.current = Date.now()

    try {
      const media = await uploadAllImages()
      setUploading(false)

      const optimisticId = `opt_${Date.now()}`
      const optimisticPost = {
        id: optimisticId,
        user_id: useAuthStore.getState().user?.id,
        content: caption.trim(),
        type: media.length > 0 ? 'image' : 'text',
        media,
        image_url: media[0]?.url || null,
        audience,
        is_deleted: false,
        created_at: new Date().toISOString(),
        profiles: profile ? {
          id: profile.id,
          username: profile.username,
          display_name: profile.display_name,
          avatar_url: profile.avatar_url,
          is_verified: profile.is_verified || false,
        } : null,
      }

      addPostOptimistic(optimisticPost)

      const result = await createPost({
        content: caption.trim(),
        type: media.length > 0 ? 'image' : 'text',
        media,
        image_url: media[0]?.url || null,
        audience,
      })

      if (navigator.vibrate) navigator.vibrate(20)

      removePostOptimistic(optimisticId)
      addPostOptimistic({ ...result })

      setShowSuccess(true)
      setTimeout(() => {
        navigate('/home', { replace: true })
      }, 800)

    } catch (err) {
      setUploading(false)
      setIsSubmitting(false)
      setShowSuccess(false)
      addToast(err.message || 'Failed to create post', 'error')
    }
  }

  const canSubmit = (images.length > 0 || caption.trim().length > 0) && !isSubmitting && !uploading

  const remainingChars = MAX_CAPTION_LENGTH - caption.length

  const getInitials = (name) => {
    if (!name) return '?'
    return name.slice(0, 2).toUpperCase()
  }

  return (
    <motion.div
      className="post-creation-page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{ paddingBottom: keyboardOffset > 0 ? `${keyboardOffset}px` : 0 }}
    >
      {/* Header */}
      <div className="pc-header">
        <button className="pc-back-btn" onClick={handleBack} disabled={uploading} aria-label="Go back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
          </svg>
        </button>
        <h1 className="pc-title">New Post</h1>
        <button
          className={`pc-submit-btn ${!canSubmit ? 'disabled' : ''} ${showSuccess ? 'success' : ''}`}
          onClick={handleSubmit}
          disabled={!canSubmit}
        >
          {showSuccess ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="pc-check-icon">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          ) : isSubmitting ? (
            <div className="pc-spinner" />
          ) : (
            'Post'
          )}
        </button>
      </div>

      {/* User Info */}
      <div className="pc-user-info">
        <div className="pc-avatar" style={{ background: profile?.avatar_color || 'var(--accent)' }}>
          {profile?.avatar_url ? (
            <img src={profile.avatar_url} alt="" />
          ) : (
            <span>{getInitials(profile?.display_name || profile?.username)}</span>
          )}
        </div>
        <div className="pc-user-details">
          <span className="pc-display-name">{profile?.display_name || 'Unknown'}</span>
          <span className="pc-username">@{profile?.username || 'unknown'}</span>
        </div>
      </div>

      {/* Caption Input */}
      <div className="pc-caption-area">
        <textarea
          ref={captionRef}
          className="pc-caption-input"
          placeholder="Write a caption..."
          value={caption}
          onChange={(e) => {
            if (e.target.value.length <= MAX_CAPTION_LENGTH) {
              setCaption(e.target.value)
            }
          }}
          rows={4}
          maxLength={MAX_CAPTION_LENGTH}
        />
        {caption.length > 0 && (
          <span className={`pc-char-count ${remainingChars < 100 ? 'pc-char-warn' : ''} ${remainingChars < 20 ? 'pc-char-danger' : ''}`}>
            {remainingChars}
          </span>
        )}
      </div>

      {/* Image Preview Grid */}
      <AnimatePresence>
        {images.length > 0 && (
          <motion.div
            className="pc-image-grid"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {images.map((img, index) => (
              <motion.div
                key={img.id}
                className={`pc-image-item ${img.status === 'uploading' ? 'uploading' : ''} ${img.status === 'error' ? 'error' : ''}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { delay: index * 0.05 },
                }}
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDragEnd={handleDragEnd}
              >
                <img src={img.url} alt={`Upload ${index + 1}`} />
                <button className="pc-img-remove" onClick={() => removeImage(img.id)} aria-label="Remove image">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
                {img.status === 'uploading' && (
                  <div className="pc-img-progress">
                    <svg className="pc-progress-ring" viewBox="0 0 36 36">
                      <circle className="pc-progress-bg" cx="18" cy="18" r="16" />
                      <circle
                        className="pc-progress-bar"
                        cx="18" cy="18" r="16"
                        strokeDasharray={`${img.progress * 1.005} 100.5`}
                        strokeDashoffset="0"
                      />
                    </svg>
                    <span className="pc-progress-text">{Math.round(img.progress)}%</span>
                  </div>
                )}
                {img.status === 'error' && (
                  <div className="pc-img-error-overlay">
                    <span>Failed</span>
                  </div>
                )}
                <span className="pc-img-order">{index + 1}</span>
              </motion.div>
            ))}
            {images.length < MAX_IMAGES && !isSubmitting && (
              <motion.button
                className="pc-add-image-btn"
                onClick={() => fileInputRef.current?.click()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                </svg>
                <span>Add</span>
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add Photo Button (when no images yet) */}
      {images.length === 0 && (
        <motion.button
          className="pc-add-photo-btn"
          onClick={() => fileInputRef.current?.click()}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isSubmitting}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
          </svg>
          <span>Add Photos</span>
        </motion.button>
      )}

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        multiple
        onChange={handleInputChange}
        style={{ display: 'none' }}
      />

      {/* Audience Selector */}
      <div className="pc-audience-section">
        <label className="pc-section-label">Audience</label>
        <div className="pc-audience-options">
          {AUDIENCE_OPTIONS.map(opt => (
            <button
              key={opt.value}
              className={`pc-audience-btn ${audience === opt.value ? 'active' : ''}`}
              onClick={() => !isSubmitting && setAudience(opt.value)}
              disabled={isSubmitting}
            >
              <span className="pc-audience-icon">
                {opt.icon === 'globe' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                  </svg>
                )}
                {opt.icon === 'users' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
                  </svg>
                )}
                {opt.icon === 'lock' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                  </svg>
                )}
              </span>
              <span className="pc-audience-label">{opt.label}</span>
            </button>
          ))}
        </div>
      </div>

      <style>{postCreationStyles}</style>
    </motion.div>
  )
}

const postCreationStyles = `
  .post-creation-page {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 1rem 6rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    transition: padding-bottom 0.2s ease;
  }

  /* Header */
  .pc-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--border);
    position: sticky;
    top: 0;
    background: var(--bg);
    z-index: 10;
  }

  .pc-back-btn {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
    background: var(--surface);
    color: var(--text);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
    -webkit-tap-highlight-color: transparent;
  }
  .pc-back-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  .pc-back-btn svg {
    width: 20px;
    height: 20px;
  }
  .pc-back-btn:active {
    background: var(--surface-hover);
  }

  .pc-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text);
    margin: 0;
  }

  .pc-submit-btn {
    padding: 0.5rem 1.25rem;
    border-radius: 100px;
    border: none;
    background: var(--accent);
    color: var(--accent-text, #000);
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.25s ease;
    min-width: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: inherit;
    -webkit-tap-highlight-color: transparent;
  }
  .pc-submit-btn.disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
  .pc-submit-btn.success {
    background: #22c55e;
    color: #fff;
    min-width: 64px;
  }
  .pc-check-icon {
    width: 20px;
    height: 20px;
  }

  .pc-spinner {
    width: 18px;
    height: 18px;
    border: 2px solid rgba(0,0,0,0.15);
    border-top-color: var(--accent-text, #000);
    border-radius: 50%;
    animation: pc-spin 0.6s linear infinite;
  }
  @keyframes pc-spin { to { transform: rotate(360deg); } }

  /* User Info */
  .pc-user-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 0;
  }

  .pc-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--accent-text, #000);
    overflow: hidden;
    flex-shrink: 0;
  }
  .pc-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .pc-user-details {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
  }
  .pc-display-name {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text);
  }
  .pc-username {
    font-size: 0.78rem;
    color: var(--text-secondary);
  }

  /* Caption */
  .pc-caption-area {
    position: relative;
    margin-bottom: 1rem;
  }

  .pc-caption-input {
    width: 100%;
    min-height: 100px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 0.85rem;
    color: var(--text);
    font-size: 0.95rem;
    font-family: inherit;
    resize: vertical;
    line-height: 1.5;
    outline: none;
    transition: border-color 0.2s;
    box-sizing: border-box;
  }
  .pc-caption-input:focus {
    border-color: var(--accent);
  }
  .pc-caption-input::placeholder {
    color: var(--text-secondary);
    opacity: 0.6;
  }

  .pc-char-count {
    position: absolute;
    bottom: 0.75rem;
    right: 0.85rem;
    font-size: 0.72rem;
    color: var(--text-secondary);
    font-weight: 500;
  }
  .pc-char-warn {
    color: #f59e0b;
  }
  .pc-char-danger {
    color: var(--danger);
  }

  /* Add Photo Button (empty state) */
  .pc-add-photo-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    width: 100%;
    padding: 1rem;
    border: 2px dashed var(--border);
    border-radius: 12px;
    background: transparent;
    color: var(--text-secondary);
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    font-family: inherit;
    margin-bottom: 1rem;
    -webkit-tap-highlight-color: transparent;
  }
  .pc-add-photo-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  .pc-add-photo-btn:hover {
    border-color: var(--accent);
    color: var(--accent);
    background: color-mix(in srgb, var(--accent) 6%, transparent);
  }
  .pc-add-photo-btn svg {
    width: 22px;
    height: 22px;
  }

  /* Image Grid */
  .pc-image-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .pc-image-item {
    position: relative;
    aspect-ratio: 1;
    border-radius: 10px;
    overflow: hidden;
    background: var(--surface);
    border: 2px solid transparent;
    cursor: grab;
    transition: border-color 0.2s;
  }
  .pc-image-item:active {
    cursor: grabbing;
  }
  .pc-image-item.uploading {
    border-color: var(--accent);
  }
  .pc-image-item.error {
    border-color: var(--danger);
  }
  .pc-image-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .pc-img-remove {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: rgba(0,0,0,0.65);
    border: none;
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    -webkit-tap-highlight-color: transparent;
  }
  .pc-img-remove svg {
    width: 14px;
    height: 14px;
  }

  .pc-img-order {
    position: absolute;
    bottom: 4px;
    left: 4px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgba(0,0,0,0.55);
    color: #fff;
    font-size: 0.6rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Upload Progress Overlay */
  .pc-img-progress {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
  .pc-progress-ring {
    width: 44px;
    height: 44px;
    transform: rotate(-90deg);
  }
  .pc-progress-bg {
    fill: none;
    stroke: rgba(255,255,255,0.15);
    stroke-width: 3;
  }
  .pc-progress-bar {
    fill: none;
    stroke: var(--accent);
    stroke-width: 3;
    stroke-linecap: round;
    transition: stroke-dasharray 0.3s ease;
  }
  .pc-progress-text {
    position: absolute;
    font-size: 0.65rem;
    font-weight: 700;
    color: #fff;
  }

  .pc-img-error-overlay {
    position: absolute;
    inset: 0;
    background: rgba(220, 38, 38, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 0.75rem;
    font-weight: 600;
    z-index: 1;
  }

  /* Add Image Button (in grid) */
  .pc-add-image-btn {
    aspect-ratio: 1;
    border-radius: 10px;
    border: 2px dashed var(--border);
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    transition: all 0.2s;
    font-family: inherit;
    font-size: 0.7rem;
    font-weight: 500;
    -webkit-tap-highlight-color: transparent;
  }
  .pc-add-image-btn:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
  .pc-add-image-btn svg {
    width: 24px;
    height: 24px;
  }

  /* Audience Selector */
  .pc-audience-section {
    margin-top: 0.5rem;
  }

  .pc-section-label {
    display: block;
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--text-secondary);
    margin-bottom: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .pc-audience-options {
    display: flex;
    gap: 0.5rem;
  }

  .pc-audience-btn {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.35rem;
    padding: 0.75rem 0.5rem;
    border-radius: 10px;
    border: 1.5px solid var(--border);
    background: var(--surface);
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.2s;
    font-family: inherit;
    -webkit-tap-highlight-color: transparent;
  }
  .pc-audience-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .pc-audience-btn.active {
    border-color: var(--accent);
    background: color-mix(in srgb, var(--accent) 8%, transparent);
    color: var(--accent);
  }
  .pc-audience-btn:not(.active):hover {
    border-color: var(--text-secondary);
  }

  .pc-audience-icon svg {
    width: 20px;
    height: 20px;
  }
  .pc-audience-label {
    font-size: 0.72rem;
    font-weight: 500;
    text-align: center;
    line-height: 1.2;
  }

  /* Responsive */
  @media (min-width: 768px) {
    .post-creation-page {
      padding: 0 2rem 2rem;
    }
    .pc-image-grid {
      grid-template-columns: repeat(4, 1fr);
    }
    .pc-caption-input {
      min-height: 120px;
    }
  }

  @media (max-width: 380px) {
    .pc-audience-options {
      flex-direction: column;
    }
    .pc-audience-btn {
      flex-direction: row;
      padding: 0.6rem 0.75rem;
    }
  }
`
