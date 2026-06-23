import { useState, useEffect, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import StoriesRow from '../components/StoriesRow'
import FeedPost from '../components/FeedPost'
import PostComposer from '../components/PostComposer'
import { PostSkeleton } from '../components/SkeletonLoader'
import { useFeedStore } from '../stores/feedStore'
import { useInfiniteScroll } from '../hooks/useInfiniteScroll'
import { useRealtimeFeed } from '../hooks/useRealtimeFeed'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
}

const postVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 }
  }
}

const avatarColors = ['#CCFF00', '#FF6B6B', '#4ECDC4', '#A78BFA', '#FFD93D', '#6BCB77']

function mapPost(post) {
  const profile = post.profiles || {}
  const name = profile.display_name || profile.username || 'user'
  return {
    id: post.id,
    username: name,
    handle: '@' + (profile.username || 'user'),
    avatarColor: avatarColors[((post.id || '').charCodeAt(0) || 0) % avatarColors.length],
    timestamp: post.created_at ? new Date(post.created_at).getTime() : Date.now(),
    content: post.content || '',
    images: post.image_url ? [post.image_url] : [],
    likes: post.likes ?? 0,
    comments: post.comments ?? 0,
    liked: post.isLiked ?? false,
    saved: false,
  }
}

export default function HomeFeed() {
  const [loading, setLoading] = useState(true)
  const [showComposer, setShowComposer] = useState(false)
  const posts = useFeedStore(s => s.posts)
  const isLoading = useFeedStore(s => s.isLoading)
  const hasMore = useFeedStore(s => s.hasMore)
  const fetchFeed = useFeedStore(s => s.fetchFeed)
  const { newPosts, clearNewPosts } = useRealtimeFeed()

  useEffect(() => {
    fetchFeed({ refresh: true }).then(() => setLoading(false))
  }, [fetchFeed])

  const loadMore = useCallback(() => {
    if (!isLoading && hasMore) fetchFeed()
  }, [isLoading, hasMore, fetchFeed])

  const { sentinelRef, scrollToTop } = useInfiniteScroll(loadMore, { enabled: !loading && hasMore })

  const handleRefresh = () => {
    setLoading(true)
    fetchFeed({ refresh: true }).then(() => setLoading(false))
  }

  const handleNewPostsBanner = () => {
    clearNewPosts()
    handleRefresh()
    scrollToTop()
  }

  const visiblePosts = useMemo(() => posts.map(mapPost), [posts])

  return (
    <div className="feed-container">
      <div className="feed-header">
        <h1 className="feed-title">Home</h1>
        <div className="feed-header-actions">
          <button className="feed-compose-btn" onClick={() => setShowComposer(true)} aria-label="Create post">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
              <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
          <button className="feed-refresh-btn" onClick={handleRefresh} aria-label="Refresh">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 4 23 10 17 10" />
              <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
            </svg>
          </button>
        </div>
      </div>

      {loading ? (
        <div className="feed-posts">
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
        </div>
      ) : (
        <motion.div
          className="feed-posts"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <StoriesRow />
          <AnimatePresence mode="popLayout">
            {newPosts.length > 0 && (
              <motion.div
                key="new-posts-banner"
                className="feed-new-posts-banner"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                onClick={handleNewPostsBanner}
              >
                <span>{newPosts.length} new post{newPosts.length > 1 ? 's' : ''} available</span>
              </motion.div>
            )}
            {visiblePosts.map(post => (
              <motion.div
                key={post.id}
                variants={postVariants}
                layout
              >
                <FeedPost post={post} />
              </motion.div>
            ))}
          </AnimatePresence>
          {isLoading && (
            <div className="feed-loading-more">
              <div className="feed-loading-dot" />
              <div className="feed-loading-dot" />
              <div className="feed-loading-dot" />
            </div>
          )}
          <div ref={sentinelRef} className="feed-sentinel" />
          {!hasMore && !isLoading && visiblePosts.length > 0 && (
            <p className="feed-end">You&apos;re all caught up! 🎉</p>
          )}
        </motion.div>
      )}

      <AnimatePresence>
        {showComposer && (
          <PostComposer onClose={() => setShowComposer(false)} />
        )}
      </AnimatePresence>

      <style>{`
        .feed-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 1rem;
          padding-bottom: 5rem;
        }
        .feed-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .feed-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text);
          margin: 0;
        }
        .feed-header-actions {
          display: flex;
          gap: 0.5rem;
        }
        .feed-compose-btn, .feed-refresh-btn {
          width: 38px; height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 0;
          transition: all 0.25s ease;
          -webkit-tap-highlight-color: transparent;
        }
        .feed-compose-btn:hover, .feed-refresh-btn:hover { background: var(--surface-hover); color: var(--accent); }
        .feed-compose-btn:active, .feed-refresh-btn:active { transform: scale(0.92); }
        .feed-compose-btn svg, .feed-refresh-btn svg { width: 18px; height: 18px; }
        .feed-posts {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .feed-loading-more {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          padding: 1.5rem 0;
        }
        .feed-loading-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: color-mix(in srgb, var(--accent) 40%, transparent);
          animation: feedDotPulse 1.4s ease-in-out infinite;
        }
        .feed-loading-dot:nth-child(2) { animation-delay: 0.2s; }
        .feed-loading-dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes feedDotPulse {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.3; }
          40% { transform: scale(1); opacity: 1; }
        }
        .feed-sentinel { height: 1px; }
        .feed-new-posts-banner {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem;
          background: color-mix(in srgb, var(--accent) 8%, transparent);
          border: 1px solid color-mix(in srgb, var(--accent) 20%, transparent);
          border-radius: 12px;
          cursor: pointer;
          transition: background 0.2s;
          overflow: hidden;
        }
        .feed-new-posts-banner:hover { background: color-mix(in srgb, var(--accent) 14%, transparent); }
        .feed-new-posts-banner span {
          font-size: 0.85rem;
          color: var(--accent);
          font-weight: 500;
        }
        .feed-end {
          text-align: center;
          color: var(--text-secondary);
          font-size: 0.85rem;
          padding: 1.5rem 0;
        }
        @media (max-width: 600px) {
          .feed-container { padding: 0.75rem; padding-bottom: 5rem; }
          .feed-title { font-size: 1.25rem; }
        }
        @media (min-width: 768px) {
          .feed-container { padding-top: 1.5rem; }
        }
      `}</style>
    </div>
  )
}
