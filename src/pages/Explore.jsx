import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useRealtimeTrends } from '../hooks/useRealtimeTrends'
import { useFeedStore } from '../stores/feedStore'
import { supabase } from '../lib/supabaseClient'

// No fallback posts — only real data from the feed store
// Search suggestions come from real-time data only
// Trending hashtags come from real-time data only
const allCategories = [
  { id: 'for-you', label: 'For You', icon: '✨' },
  { id: 'trending', label: 'Trending', icon: '🔥' },
  { id: 'photos', label: 'Photos', icon: '📷' },
  { id: 'videos', label: 'Videos', icon: '🎬' },
  { id: 'technology', label: 'Tech', icon: '💻' },
  { id: 'gaming', label: 'Gaming', icon: '🎮' },
  { id: 'art', label: 'Art', icon: '🎨' },
  { id: 'music', label: 'Music', icon: '🎵' },
]
// Trending creators come from real-time data only
// Communities come from database only

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
  </svg>
)

const MessageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
  </svg>
)

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M8 5v14l11-7z" />
  </svg>
)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
}

const gridItemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 18 },
  },
}

const categoryIcons = {
  'for-you': '✨',
  trending: '🔥',
  photos: '📷',
  videos: '🎬',
  // 'communities' removed — only database-backed communities, no mock data
  technology: '💻',
  gaming: '🎮',
  art: '🎨',
  music: '🎵',
}

export default function Explore() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('for-you')
  const [searchQuery, setSearchQuery] = useState('')
  const [searchFocused, setSearchFocused] = useState(false)
  const { trendData } = useRealtimeTrends()
  const searchRef = useRef(null)
  const hashtagScrollRef = useRef(null)
  const tabsScrollRef = useRef(null)

  const [searchResults, setSearchResults] = useState({ users: [], hashtags: [], posts: [] })
  const [searchLoading, setSearchLoading] = useState(false)
  const searchTimer = useRef(null)

  const performSearch = useCallback(async (query) => {
    if (query.length < 1) {
      setSearchResults({ users: [], hashtags: [], posts: [] })
      return
    }
    setSearchLoading(true)
    try {
      const q = `%${query}%`
      const [usersData, postsData] = await Promise.all([
        supabase
          .from('profiles')
          .select('id, username, display_name, avatar_url, bio')
          .or(`username.ilike.${q},display_name.ilike.${q}`)
          .limit(5),
        supabase
          .from('posts')
          .select('id, content, created_at, profiles!inner(id, username, display_name, avatar_url)')
          .ilike('content', q)
          .order('created_at', { ascending: false })
          .limit(10),
      ])

      // Extract unique hashtags from matching posts
      const hashtagSet = new Set()
      const hashtags = []
      if (postsData.data) {
        const tagRegex = /#(\w+)/gi
        for (const post of postsData.data) {
          let match
          while ((match = tagRegex.exec(post.content)) !== null) {
            const tag = match[1].toLowerCase()
            if (!hashtagSet.has(tag) && tag.includes(query.toLowerCase())) {
              hashtagSet.add(tag)
              hashtags.push({ tag, posts: '—' })
            }
          }
        }
      }

      setSearchResults({
        users: usersData.data || [],
        hashtags: hashtags.slice(0, 5),
        posts: postsData.data || [],
      })
    } catch (err) {
      console.warn('Search error:', err)
      setSearchResults({ users: [], hashtags: [], posts: [] })
    } finally {
      setSearchLoading(false)
    }
  }, [])

  // Debounced search
  useEffect(() => {
    if (searchTimer.current) clearTimeout(searchTimer.current)
    if (!searchQuery.trim()) {
      setSearchResults({ users: [], hashtags: [], posts: [] })
      return
    }
    searchTimer.current = setTimeout(() => performSearch(searchQuery.trim()), 300)
    return () => {
      if (searchTimer.current) clearTimeout(searchTimer.current)
    }
  }, [searchQuery, performSearch])

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  const feedPosts = useFeedStore((s) => s.posts)
  const fetchFeedAction = useFeedStore((s) => s.fetchFeed)

  const explorePosts = useMemo(() => {
    if (feedPosts?.length > 0) {
      const avatarColors = ['#CCFF00', '#FF6B6B', '#4ECDC4', '#A78BFA', '#FFD93D', '#6BCB77']
      return feedPosts.filter(p => p.image_url || p.video_url).map((p, i) => ({
        id: p.id,
        imageUrl: p.image_url || 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600',
        username: p.profiles?.username || p.profiles?.display_name || 'user',
        avatarColor: avatarColors[i % avatarColors.length],
        likes: p.likes ?? 0,
        comments: p.comments ?? 0,
        isVideo: !!p.video_url,
      }))
    }
    return []
  }, [feedPosts])

  useEffect(() => {
    if (!feedPosts?.length) fetchFeedAction()
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchFocused(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])





  const SkeletonGrid = () => (
    <div className="explore-skeleton-grid">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="explore-skeleton-item" style={{ height: i % 3 === 0 ? 280 : i % 3 === 1 ? 200 : 240 }}>
          <div className="explore-shimmer" />
        </div>
      ))}
    </div>
  )

  return (
    <div className="explore-page">
      {/* Search Bar */}
      <div className="explore-search-wrapper" ref={searchRef}>
        <div className={`explore-search ${searchFocused ? 'explore-search-focused' : ''}`}>
          <SearchIcon />
          <input
            type="text"
            placeholder="Search posts, creators, hashtags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setSearchFocused(true)}
          />
          {searchQuery && (
            <button className="explore-search-clear" onClick={() => setSearchQuery('')}>
              ✕
            </button>
          )}
        </div>
        <AnimatePresence>
          {searchFocused && searchQuery.trim() && (
            <motion.div
              className="explore-suggestions"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {searchQuery.trim() ? (
                // Real search results
                searchLoading ? (
                  <div className="explore-search-status">Searching...</div>
                ) : (
                  <>
                    {/* Users Section */}
                    <div className="explore-search-section">
                      <div className="explore-search-section-title">Users</div>
                      {searchResults.users.length > 0 ? (
                        searchResults.users.map((u, i) => (
                          <motion.div
                            key={`user-${u.id}`}
                            className="explore-suggestion-item"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.03 }}
                            onClick={() => navigate(`/profile/${u.id}`)}
                            style={{ cursor: 'pointer' }}
                          >
                            <span className="explore-suggestion-icon" style={{ background: u.avatar_url ? `url(${u.avatar_url}) center/cover` : 'var(--surface)', borderRadius: '50%', overflow: 'hidden' }}>
                              {!u.avatar_url && (u.display_name?.[0] || u.username?.[0] || '?')}
                            </span>
                            <div className="explore-suggestion-info">
                              <span className="explore-suggestion-label">{u.display_name || u.username}</span>
                              <span className="explore-suggestion-sub">@{u.username}</span>
                            </div>
                          </motion.div>
                        ))
                      ) : (
                        <div className="explore-search-empty">No users found</div>
                      )}
                    </div>

                    {/* Hashtags Section */}
                    <div className="explore-search-section">
                      <div className="explore-search-section-title">Hashtags</div>
                      {searchResults.hashtags.length > 0 ? (
                        searchResults.hashtags.map((h, i) => (
                          <motion.div
                            key={`tag-${h.tag}`}
                            className="explore-suggestion-item"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.03 }}
                          >
                            <span className="explore-suggestion-icon">#️⃣</span>
                            <div className="explore-suggestion-info">
                              <span className="explore-suggestion-label">#{h.tag}</span>
                              <span className="explore-suggestion-sub">{h.posts} posts</span>
                            </div>
                          </motion.div>
                        ))
                      ) : (
                        <div className="explore-search-empty">No hashtags found</div>
                      )}
                    </div>

                    {/* Posts Section */}
                    <div className="explore-search-section">
                      <div className="explore-search-section-title">Posts</div>
                      {searchResults.posts.length > 0 ? (
                        searchResults.posts.map((p, i) => (
                          <motion.div
                            key={`post-${p.id}`}
                            className="explore-suggestion-item"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.03 }}
                          >
                            <span className="explore-suggestion-icon">📄</span>
                            <div className="explore-suggestion-info">
                              <span className="explore-suggestion-label">
                                {p.content.length > 60 ? p.content.slice(0, 60) + '...' : p.content}
                              </span>
                              <span className="explore-suggestion-sub">
                                by @{p.profiles?.username || p.profiles?.display_name || 'user'}
                              </span>
                            </div>
                          </motion.div>
                        ))
                      ) : (
                        <div className="explore-search-empty">No posts found</div>
                      )}
                    </div>

                    {/* Overall empty state */}
                    {!searchLoading && searchResults.users.length === 0 && searchResults.hashtags.length === 0 && searchResults.posts.length === 0 && (
                      <div className="explore-search-empty explore-search-empty-all">
                        No results found for "{searchQuery}"
                      </div>
                    )}
                  </>
                )
              ) : null}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Trending Hashtags */}
      <div className="explore-hashtags-wrapper">
        <div className="explore-hashtags" ref={hashtagScrollRef}>
          {(trendData || []).map((h) => (
            <button key={h.tag} className="explore-hashtag-pill">
              <span className="explore-hashtag-sign">#</span>
              {h.tag}
              <span className="explore-hashtag-count">{h.posts}</span>
            </button>
          ))}
          {(!trendData || trendData.length === 0) && (
            <div className="explore-search-empty">No trends available yet</div>
          )}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="explore-tabs-wrapper">
        <div className="explore-tabs" ref={tabsScrollRef}>
          {allCategories.map((cat) => (
            <button
              key={cat.id}
              className={`explore-tab ${activeCategory === cat.id ? 'explore-tab-active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="explore-tab-icon">{cat.icon}</span>
              <span className="explore-tab-label">{cat.label}</span>
            </button>
          ))}
          <motion.div
            className="explore-tab-indicator"
            layoutId="active-tab"
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="explore-content">
        {/* Masonry Grid */}
        <div className="explore-grid-section">
          {loading ? (
            <SkeletonGrid />
          ) : (
            <motion.div
              className="explore-masonry"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={activeCategory}
            >
              <AnimatePresence mode="popLayout">
                {explorePosts.map((post) => (
                  <motion.div
                    key={post.id}
                    className="explore-masonry-item"
                    variants={gridItemVariants}
                    layout
                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  >
                    <div className="explore-masonry-img-wrap">
                      <img
                        src={post.imageUrl}
                        alt={`by ${post.username}`}
                        loading="lazy"
                      />
                      {post.isVideo && (
                        <div className="explore-video-badge">
                          <PlayIcon />
                        </div>
                      )}
                      <div className="explore-masonry-overlay">
                        <div className="explore-masonry-stats">
                          <span>
                            <HeartIcon /> {post.likes >= 1000 ? `${(post.likes / 1000).toFixed(1)}K` : post.likes}
                          </span>
                          <span>
                            <MessageIcon /> {post.comments}
                          </span>
                        </div>
                        <div className="explore-masonry-creator">
                          <span
                            className="explore-masonry-avatar"
                            style={{ background: post.avatarColor }}
                          >
                            {post.username.charAt(0)}
                          </span>
                          <span className="explore-masonry-username">{post.username}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

      </div>


      <style>{`
        /* ────────── Layout ────────── */
        .explore-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem;
          padding-bottom: 5rem;
        }

        /* ────────── Search ────────── */
        .explore-search-wrapper {
          position: relative;
          margin-bottom: 0.75rem;
          z-index: 50;
        }
        .explore-search {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.7rem 1.1rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 14px;
          transition: all 0.25s ease;
        }
        .explore-search-focused {
          border-color: var(--accent);
          background: var(--bg-alt);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 8%, transparent);
        }
        .explore-search svg {
          color: var(--text-secondary);
          flex-shrink: 0;
        }
        .explore-search input {
          flex: 1;
          background: none;
          border: none;
          outline: none;
          color: var(--text);
          font-size: 0.9rem;
          font-family: inherit;
        }
        .explore-search input::placeholder {
          color: var(--text-secondary);
        }
        .explore-search-clear {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          font-size: 0.85rem;
          padding: 2px;
          line-height: 1;
        }
        .explore-search-clear:hover {
          color: var(--text);
        }

        /* ────────── Suggestions ────────── */
        .explore-suggestions {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          right: 0;
          background: var(--bg-alt);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 0.5rem;
          overflow: hidden;
          box-shadow: 0 12px 40px color-mix(in srgb, var(--text) 4%, transparent);
        }
        .explore-suggestion-item {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          padding: 0.55rem 0.6rem;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.15s;
        }
        .explore-suggestion-item:hover {
          background: var(--surface);
        }
        .explore-suggestion-icon {
          font-size: 1.1rem;
          flex-shrink: 0;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .explore-suggestion-info {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .explore-suggestion-label {
          font-size: 0.85rem;
          color: var(--text);
          font-weight: 500;
        }
        .explore-suggestion-sub {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        /* ────────── Search Results ────────── */
        .explore-search-status {
          text-align: center;
          padding: 0.75rem;
          color: var(--text-secondary);
          font-size: 0.85rem;
        }
        .explore-search-section {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          padding: 0.75rem 0;
          border-top: 1px solid var(--border);
        }
        .explore-search-section:first-of-type {
          border-top: none;
          padding-top: 0;
        }
        .explore-search-section-title {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0 0.25rem 0.25rem;
        }
        .explore-search-empty {
          text-align: center;
          padding: 0.75rem 0;
          color: var(--text-secondary);
          font-size: 0.85rem;
        }
        .explore-search-empty-all {
          text-align: center;
          padding: 1.5rem 1rem;
          color: var(--text-secondary);
          font-size: 1rem;
        }

        /* ────────── Hashtags ────────── */
        .explore-hashtags-wrapper {
          margin-bottom: 1rem;
          overflow: hidden;
        }
        .explore-hashtags {
          display: flex;
          gap: 0.5rem;
          overflow-x: auto;
          padding-bottom: 0.25rem;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .explore-hashtags::-webkit-scrollbar {
          display: none;
        }
        .explore-hashtag-pill {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.4rem 0.9rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 100px;
          color: var(--text-secondary);
          font-size: 0.8rem;
          font-family: inherit;
          white-space: nowrap;
          cursor: pointer;
          transition: all 0.2s;
          flex-shrink: 0;
        }
        .explore-hashtag-pill:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: color-mix(in srgb, var(--accent) 6%, transparent);
        }
        .explore-hashtag-sign {
          color: var(--accent);
          font-weight: 600;
        }
        .explore-hashtag-count {
          font-size: 0.7rem;
          color: var(--text-secondary);
          opacity: 0.6;
        }

        /* ────────── Category Tabs ────────── */
        .explore-tabs-wrapper {
          margin-bottom: 1.25rem;
          overflow: hidden;
        }
        .explore-tabs {
          display: flex;
          gap: 0.35rem;
          overflow-x: auto;
          padding-bottom: 0.25rem;
          position: relative;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .explore-tabs::-webkit-scrollbar {
          display: none;
        }
        .explore-tab {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.5rem 0.85rem;
          background: transparent;
          border: none;
          border-radius: 10px;
          color: var(--text-secondary);
          font-size: 0.82rem;
          font-family: inherit;
          white-space: nowrap;
          cursor: pointer;
          transition: color 0.2s, background 0.2s;
          flex-shrink: 0;
        }
        .explore-tab:hover {
          color: var(--text);
          background: var(--surface);
        }
        .explore-tab-active {
          color: var(--accent) !important;
          background: color-mix(in srgb, var(--accent) 7%, transparent);
        }
        .explore-tab-icon {
          font-size: 0.9rem;
        }
        .explore-tab-indicator {
          display: none;
        }
        .explore-tab-active .explore-tab-indicator {
          display: block;
        }

        /* ────────── Content Layout ────────── */
        .explore-content {
          display: flex;
          gap: 1.5rem;
        }
        .explore-grid-section {
          flex: 1;
          min-width: 0;
        }

        /* ────────── Masonry Grid ────────── */
        .explore-masonry {
          column-count: 3;
          column-gap: 0.75rem;
        }
        .explore-masonry-item {
          break-inside: avoid;
          margin-bottom: 0.75rem;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
        }
        .explore-masonry-img-wrap {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          background: var(--surface);
          cursor: pointer;
        }
        .explore-masonry-img-wrap img {
          display: block;
          width: 100%;
          height: auto;
          transition: transform 0.4s ease;
        }
        .explore-masonry-img-wrap:hover img {
          transform: scale(1.05);
        }
        .explore-video-badge {
          position: absolute;
          top: 0.6rem;
          right: 0.6rem;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          border-radius: 8px;
          color: #fff;
          opacity: 0.9;
        }
        .explore-masonry-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.7) 0%,
            rgba(0,0,0,0.2) 40%,
            transparent 60%
          );
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0.9rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .explore-masonry-img-wrap:hover .explore-masonry-overlay {
          opacity: 1;
        }
        .explore-masonry-stats {
          display: flex;
          gap: 0.8rem;
          margin-bottom: 0.5rem;
        }
        .explore-masonry-stats span {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.78rem;
          color: #fff;
          font-weight: 500;
          text-shadow: 0 1px 3px rgba(0,0,0,0.5);
        }
        .explore-masonry-stats span svg {
          width: 14px;
          height: 14px;
        }
        .explore-masonry-creator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .explore-masonry-avatar {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.6rem;
          font-weight: 700;
          color: #fff;
          flex-shrink: 0;
          border: 1.5px solid rgba(255,255,255,0.3);
        }
        .explore-masonry-username {
          font-size: 0.75rem;
          color: #fff;
          font-weight: 500;
          text-shadow: 0 1px 3px rgba(0,0,0,0.5);
        }

        /* ────────── Skeleton ────────── */
        .explore-skeleton-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
        }
        .explore-skeleton-item {
          border-radius: 12px;
          overflow: hidden;
          background: var(--surface);
          position: relative;
        }
        .explore-shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255,255,255,0.04) 50%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: exploreShimmer 1.8s ease-in-out infinite;
        }
        @keyframes exploreShimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }


        /* ────────── Responsive ────────── */
        @media (max-width: 1023px) {
          .explore-masonry {
            column-count: 2;
          }
        }

        @media (max-width: 600px) {
          .explore-page {
            padding: 0.75rem;
            padding-bottom: 5rem;
          }
          .explore-masonry {
            column-count: 2;
            column-gap: 0.5rem;
          }
          .explore-masonry-item {
            margin-bottom: 0.5rem;
          }
          .explore-skeleton-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.5rem;
          }
          .explore-tab {
            padding: 0.4rem 0.65rem;
            font-size: 0.78rem;
          }
          .explore-tab-icon {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 380px) {
          .explore-masonry {
            column-count: 2;
          }
        }
      `}</style>
    </div>
  )
}
