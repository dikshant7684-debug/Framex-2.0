import { useState, useEffect, useRef, useCallback } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useAuthStore } from '../stores/authStore'
import { useFeedStore } from '../stores/feedStore'

export default function CommentModal({ post, onClose }) {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [editContent, setEditContent] = useState('')
  const [error, setError] = useState(null)
  const inputRef = useRef(null)
  const user = useAuthStore(s => s.user)
  const subscribeToComments = useFeedStore(s => s.subscribeToComments)
  const addComment = useFeedStore(s => s.addComment)

  const loadComments = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('comments')
        .select(`
          *,
          profiles:user_id (id, username, display_name, avatar_url, is_verified)
        `)
        .eq('post_id', post.id)
        .eq('is_deleted', false)
        .order('created_at', { ascending: true })

      if (error) throw error
      setComments(data || [])
    } catch (err) {
      console.error('Error loading comments:', err)
      setError('Failed to load comments')
    } finally {
      setIsLoading(false)
    }
  }, [post.id])

  useEffect(() => {
    loadComments()

    const unsubscribe = subscribeToComments(post.id, (payload) => {
      if (payload.type === 'UPDATE') {
        setComments(prev => prev.map(c =>
          c.id === payload.comment.id ? { ...c, ...payload.comment } : c
        ))
      } else if (payload.type === 'DELETE') {
        setComments(prev => prev.filter(c => c.id !== payload.commentId))
      } else {
        // New comment - avoid duplicates
        setComments(prev => {
          if (prev.some(c => c.id === payload.id)) return prev
          return [...prev, payload]
        })
      }
    })

    return () => {
      if (typeof unsubscribe === 'function') unsubscribe()
    }
  }, [post.id, loadComments, subscribeToComments])

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!newComment.trim() || isSubmitting) return

    if (!user) {
      setError('Please sign in to comment')
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      const data = await addComment({ postId: post.id, content: newComment.trim() })
      setNewComment('')
      setComments(prev => [...prev, data])
    } catch (err) {
      setError(err.message || 'Failed to add comment')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEdit = async (commentId) => {
    if (!editContent.trim()) return

    try {
      const { data, error } = await supabase
        .from('comments')
        .update({ content: editContent.trim(), is_edited: true })
        .eq('id', commentId)
        .eq('user_id', user.id)
        .select()
        .single()

      if (error) throw error
      setComments(prev => prev.map(c => c.id === commentId ? { ...c, content: data.content, is_edited: data.is_edited } : c))
      setEditingId(null)
      setEditContent('')
    } catch (err) {
      setError(err.message || 'Failed to edit comment')
    }
  }

  const handleDelete = async (commentId) => {
    if (!confirm('Delete this comment?')) return

    try {
      const { error } = await supabase
        .from('comments')
        .update({ is_deleted: true })
        .eq('id', commentId)
        .eq('user_id', user.id)

      if (error) throw error
      setComments(prev => prev.filter(c => c.id !== commentId))
    } catch (err) {
      setError(err.message || 'Failed to delete comment')
    }
  }

  const formatTime = (dateStr) => {
    const date = new Date(dateStr)
    const now = new Date()
    const diff = now - date
    const mins = Math.floor(diff / 60000)
    if (mins < 1) return 'just now'
    if (mins < 60) return `${mins}m ago`
    const hours = Math.floor(mins / 60)
    if (hours < 24) return `${hours}h ago`
    const days = Math.floor(hours / 24)
    if (days < 7) return `${days}d ago`
    return date.toLocaleDateString()
  }

  return (
    <div className="comment-modal-overlay" onClick={onClose}>
      <div className="comment-modal" onClick={e => e.stopPropagation()}>
        <div className="comment-modal-header">
          <h3>Comments ({post.comments ?? comments.length})</h3>
          <button className="comment-modal-close" onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="comment-modal-body">
          {isLoading ? (
            <div className="comment-loading">Loading comments...</div>
          ) : comments.length === 0 ? (
            <div className="comment-empty">No comments yet. Be the first!</div>
          ) : (
            <div className="comment-list">
              {comments.map(comment => {
                const isOwner = user && comment.user_id === user.id
                return (
                  <div key={comment.id} className="comment-item">
                    <div className="comment-avatar">
                      {comment.profiles?.avatar_url ? (
                        <img src={comment.profiles.avatar_url} alt="" />
                      ) : (
                        <div className="comment-avatar-placeholder">
                          {(comment.profiles?.display_name || comment.profiles?.username || '?')[0]}
                        </div>
                      )}
                    </div>
                    <div className="comment-content">
                      <div className="comment-meta">
                        <span className="comment-author">
                          {comment.profiles?.display_name || comment.profiles?.username || 'Anonymous'}
                        </span>
                        <span className="comment-time">{formatTime(comment.created_at)}</span>
                        {comment.is_edited && <span className="comment-edited">(edited)</span>}
                      </div>

                      {editingId === comment.id ? (
                        <div className="comment-edit-form">
                          <textarea
                            value={editContent}
                            onChange={e => setEditContent(e.target.value)}
                            className="comment-edit-input"
                            rows={2}
                          />
                          <div className="comment-edit-actions">
                            <button onClick={() => handleEdit(comment.id)} className="comment-save-btn">Save</button>
                            <button onClick={() => { setEditingId(null); setEditContent('') }} className="comment-cancel-btn">Cancel</button>
                          </div>
                        </div>
                      ) : (
                        <p className="comment-text">{comment.content}</p>
                      )}

                      {isOwner && editingId !== comment.id && (
                        <div className="comment-actions">
                          <button
                            onClick={() => { setEditingId(comment.id); setEditContent(comment.content) }}
                            className="comment-action-btn"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(comment.id)}
                            className="comment-action-btn comment-action-delete"
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        <div className="comment-modal-footer">
          {error && <div className="comment-error">{error}</div>}
          <form className="comment-form" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              value={newComment}
              onChange={e => setNewComment(e.target.value)}
              placeholder={user ? 'Write a comment...' : 'Sign in to comment'}
              className="comment-input"
              disabled={isSubmitting || !user}
            />
            <button
              type="submit"
              className="comment-submit-btn"
              disabled={!newComment.trim() || isSubmitting || !user}
            >
              {isSubmitting ? '...' : 'Post'}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .comment-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }

        .comment-modal {
          background: var(--bg-card, #1a1a2e);
          border: 1px solid var(--border, rgba(255,255,255,0.08));
          border-radius: 20px 20px 0 0;
          width: 100%;
          max-width: 560px;
          max-height: 80vh;
          display: flex;
          flex-direction: column;
          animation: slideUp 0.25s ease;
          box-shadow: 0 -8px 32px rgba(0,0,0,0.4);
        }

        .comment-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 20px;
          border-bottom: 1px solid var(--border, rgba(255,255,255,0.08));
        }

        .comment-modal-header h3 {
          font-family: var(--font-body);
          font-size: 16px;
          font-weight: 600;
        }

        .comment-modal-close {
          background: none;
          border: none;
          color: var(--text-secondary, #888);
          cursor: pointer;
          padding: 4px;
          border-radius: 8px;
          transition: all 0.2s;
        }

        .comment-modal-close:hover {
          background: rgba(255,255,255,0.1);
          color: var(--text, #fff);
        }

        .comment-modal-body {
          flex: 1;
          overflow-y: auto;
          padding: 12px 0;
          min-height: 120px;
          max-height: 50vh;
        }

        .comment-loading, .comment-empty {
          text-align: center;
          padding: 40px 20px;
          color: var(--text-secondary, #888);
          font-size: 14px;
        }

        .comment-list {
          display: flex;
          flex-direction: column;
        }

        .comment-item {
          display: flex;
          gap: 10px;
          padding: 10px 20px;
          transition: background 0.15s;
        }

        .comment-item:hover {
          background: rgba(255,255,255,0.02);
        }

        .comment-avatar {
          flex-shrink: 0;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          overflow: hidden;
        }

        .comment-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .comment-avatar-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--accent, #ccff00), #aadd00);
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .comment-content {
          flex: 1;
          min-width: 0;
        }

        .comment-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 2px;
        }

        .comment-author {
          font-weight: 600;
          font-size: 13px;
          color: var(--text, #fff);
        }

        .comment-time {
          font-size: 11px;
          color: var(--text-secondary, #888);
        }

        .comment-edited {
          font-size: 11px;
          color: var(--text-secondary, #888);
          font-style: italic;
        }

        .comment-text {
          font-size: 14px;
          color: var(--text, #eee);
          line-height: 1.5;
          word-break: break-word;
        }

        .comment-actions {
          display: flex;
          gap: 12px;
          margin-top: 4px;
        }

        .comment-action-btn {
          background: none;
          border: none;
          color: var(--text-secondary, #888);
          font-size: 12px;
          cursor: pointer;
          padding: 2px 0;
          transition: color 0.2s;
        }

        .comment-action-btn:hover {
          color: var(--accent, #ccff00);
        }

        .comment-action-delete:hover {
          color: #ff4444;
        }

        .comment-edit-form {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .comment-edit-input {
          background: rgba(255,255,255,0.06);
          border: 1px solid var(--border, rgba(255,255,255,0.12));
          border-radius: 8px;
          padding: 8px 10px;
          color: var(--text, #fff);
          font-size: 13px;
          font-family: var(--font-body);
          resize: none;
          width: 100%;
        }

        .comment-edit-actions {
          display: flex;
          gap: 8px;
        }

        .comment-save-btn, .comment-cancel-btn {
          padding: 4px 12px;
          border-radius: 6px;
          font-size: 12px;
          cursor: pointer;
          border: none;
        }

        .comment-save-btn {
          background: var(--accent, #ccff00);
          color: #000;
        }

        .comment-cancel-btn {
          background: rgba(255,255,255,0.1);
          color: var(--text, #fff);
        }

        .comment-modal-footer {
          padding: 12px 20px 20px;
          border-top: 1px solid var(--border, rgba(255,255,255,0.08));
        }

        .comment-error {
          color: #ff4444;
          font-size: 12px;
          margin-bottom: 8px;
        }

        .comment-form {
          display: flex;
          gap: 10px;
        }

        .comment-input {
          flex: 1;
          background: rgba(255,255,255,0.06);
          border: 1px solid var(--border, rgba(255,255,255,0.10));
          border-radius: 24px;
          padding: 10px 16px;
          color: var(--text, #fff);
          font-size: 14px;
          font-family: var(--font-body);
          outline: none;
          transition: border-color 0.2s;
        }

        .comment-input:focus {
          border-color: var(--accent, #ccff00);
        }

        .comment-input::placeholder {
          color: var(--text-secondary, #666);
        }

        .comment-input:disabled {
          opacity: 0.5;
        }

        .comment-submit-btn {
          background: var(--accent, #ccff00);
          color: #000;
          border: none;
          padding: 10px 20px;
          border-radius: 24px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.2s;
          white-space: nowrap;
        }

        .comment-submit-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .comment-submit-btn:not(:disabled):hover {
          opacity: 0.85;
        }

        @media (min-width: 640px) {
          .comment-modal-overlay {
            align-items: center;
          }

          .comment-modal {
            border-radius: 20px;
            max-height: 600px;
          }
        }
      `}</style>
    </div>
  )
}
