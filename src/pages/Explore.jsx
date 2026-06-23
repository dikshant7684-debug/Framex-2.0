import { useState, useEffect, useRef, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRealtimeTrends } from '../hooks/useRealtimeTrends'
import { useFeedStore } from '../stores/feedStore'

const fallbackExplorePosts = [
  { id: '1', imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600', username: 'creativemind', avatarColor: '#CCFF00', likes: 234, comments: 18, isVideo: false },
  { id: '2', imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600', username: 'designpro', avatarColor: '#FF6B6B', likes: 189, comments: 24, isVideo: false },
  { id: '3', imageUrl: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600', username: 'codemaster', avatarColor: '#4ECDC4', likes: 312, comments: 42, isVideo: false },
  { id: '4', imageUrl: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600', username: 'artistico', avatarColor: '#A78BFA', likes: 156, comments: 11, isVideo: true },
  { id: '5', imageUrl: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=600', username: 'pixelator', avatarColor: '#FFD93D', likes: 278, comments: 33, isVideo: false },
  { id: '6', imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=600', username: 'neonwave', avatarColor: '#6BCB77', likes: 445, comments: 67, isVideo: false },
  { id: '7', imageUrl: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=600', username: 'cyberpunk', avatarColor: '#FF6B6B', likes: 523, comments: 89, isVideo: true },
  { id: '8', imageUrl: 'https://images.unsplash.com/photo-1574169208507-84376144848b?w=600', username: 'abstractor', avatarColor: '#CCFF00', likes: 167, comments: 14, isVideo: false },
  { id: '9', imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600', username: 'dreamcast', avatarColor: '#A78BFA', likes: 398, comments: 55, isVideo: false },
]
const searchSuggestions = [
  { type: 'trend', label: 'FrameX', sub: 'Trending' },
  { type: 'trend', label: 'Design', sub: '12.4K posts' },
  { type: 'trend', label: 'React', sub: '8.2K posts' },
  { type: 'trend', label: 'UI/UX', sub: '6.7K posts' },
  { type: 'community', label: 'Pixel Artists', sub: '12.4K members' },
  { type: 'community', label: 'Code Crew', sub: '8.2K members' },
  { type: 'community', label: 'Synthwave', sub: '6.7K members' },
  { type: 'community', label: 'Neo Creators', sub: '15.1K members' },
]
const trendingHashtags = [
  { tag: 'framex', posts: '2.4K' },
  { tag: 'design', posts: '1.8K' },
  { tag: 'coding', posts: '1.2K' },
  { tag: 'uiux', posts: '892' },
  { tag: 'react', posts: '756' },
  { tag: 'photography', posts: '654' },
  { tag: 'art', posts: '543' },
  { tag: 'music', posts: '432' },
]
const allCategories = [
  { id: 'for-you', label: 'For You', icon: '✨' },
  { id: 'trending', label: 'Trending', icon: '🔥' },
  { id: 'photos', label: 'Photos', icon: '📷' },
  { id: 'videos', label: 'Videos', icon: '🎬' },
  { id: 'communities', label: 'Communities', icon: '👥' },
  { id: 'technology', label: 'Tech', icon: '💻' },
  { id: 'gaming', label: 'Gaming', icon: '🎮' },
  { id: 'art', label: 'Art', icon: '🎨' },
  { id: 'music', label: 'Music', icon: '🎵' },
]
const trendingCreatorsFallback = [
  { handle: '@creativemind', name: 'Creative Mind', avatarColor: '#CCFF00', followers: '12.4K' },
  { handle: '@designpro', name: 'Design Pro', avatarColor: '#FF6B6B', followers: '8.7K' },
  { handle: '@codemaster', name: 'Code Master', avatarColor: '#4ECDC4', followers: '6.2K' },
  { handle: '@artistico', name: 'Artistico', avatarColor: '#A78BFA', followers: '5.1K' },
]
const communities = [
  { name: 'Pixel Artists', icon: '🎨', members: '12.4K' },
  { name: 'Code Crew', icon: '💻', members: '8.2K' },
  { name: 'Synthwave', icon: '🎵', members: '6.7K' },
  { name: 'Neo Creators', icon: '✨', members: '15.1K' },
  { name: 'Photo Masters', icon: '📷', members: '9.3K' },
  { name: 'Gaming Hub', icon: '🎮', members: '11.8K' },
  { name: 'Design Talk', icon: '🎨', members: '7.5K' },
]

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
  communities: '👥',
  technology: '💻',
  gaming: '🎮',
  art: '🎨',
  music: '🎵',
}

export default function Explore() {
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('for-you')
  const [searchQuery, setSearchQuery] = useState('')
  const [searchFocused, setSearchFocused] = useState(false)
  const { trendData, trendingCreators: liveTrendingCreators } = useRealtimeTrends()
  const [following, setFollowing] = useState({})
  const [joined, setJoined] = useState({})
  const searchRef = useRef(null)
  const hashtagScrollRef = useRef(null)
  const tabsScrollRef = useRef(null)

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
    return fallbackExplorePosts
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

  const filteredSuggestions = useMemo(() => {
    if (!searchQuery.trim()) return searchSuggestions
    const q = searchQuery.toLowerCase()
    return searchSuggestions.filter(
      (s) => s.label.toLowerCase().includes(q) || s.sub.toLowerCase().includes(q)
    )
  }, [searchQuery])

  const toggleFollow = (handle) => {
    setFollowing((prev) => ({ ...prev, [handle]: !prev[handle] }))
  }

  const toggleJoin = (name) => {
    setJoined((prev) => ({ ...prev, [name]: !prev[name] }))
  }

  const getSuggestionIcon = (type) => {
    switch (type) {
      case 'user': return '👤'
      case 'hashtag': return '#️⃣'
      case 'post': return '📄'
      case 'community': return '👥'
      default: return '•'
    }
  }

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
          {searchFocused && filteredSuggestions?.length > 0 && (
            <motion.div
              className="explore-suggestions"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {filteredSuggestions.map((s, i) => (
                <motion.div
                  key={`${s.type}-${s.label}`}
                  className="explore-suggestion-item"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <span className="explore-suggestion-icon">{getSuggestionIcon(s.type)}</span>
                  <div className="explore-suggestion-info">
                    <span className="explore-suggestion-label">{s.label}</span>
                    <span className="explore-suggestion-sub">{s.sub}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Trending Hashtags */}
      <div className="explore-hashtags-wrapper">
        <div className="explore-hashtags" ref={hashtagScrollRef}>
          {(trendData?.length > 0 ? trendData : trendingHashtags).map((h) => (
            <button key={h.tag} className="explore-hashtag-pill">
              <span className="explore-hashtag-sign">#</span>
              {h.tag}
              <span className="explore-hashtag-count">{h.posts}</span>
            </button>
          ))}
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

        {/* Desktop Sidebar */}
        <aside className="explore-sidebar">
          {/* Trending Creators */}
          <div className="explore-sidebar-section">
            <h3 className="explore-sidebar-title">Trending Creators</h3>
            <div className="explore-creators-list">
              {(liveTrendingCreators?.length > 0 ? liveTrendingCreators : trendingCreatorsFallback).map((creator) => (
                <div key={creator.handle} className="explore-creator-row">
                  <div
                    className="explore-creator-avatar"
                    style={{ background: creator.avatarColor }}
                  >
                    {creator.name.charAt(0)}
                  </div>
                  <div className="explore-creator-info">
                    <span className="explore-creator-name">{creator.name}</span>
                    <span className="explore-creator-handle">{creator.handle}</span>
                    <span className="explore-creator-followers">{creator.followers} followers</span>
                  </div>
                  <button
                    className={`explore-follow-btn ${following[creator.handle] ? 'explore-following' : ''}`}
                    onClick={() => toggleFollow(creator.handle)}
                  >
                    {following[creator.handle] ? 'Following' : 'Follow'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Suggested Communities */}
          <div className="explore-sidebar-section">
            <h3 className="explore-sidebar-title">Suggested Communities</h3>
            <div className="explore-communities-list">
              {communities.slice(0, 5).map((c) => (
                <div key={c.name} className="explore-community-row">
                  <span className="explore-community-icon">{c.icon}</span>
                  <div className="explore-community-info">
                    <span className="explore-community-name">{c.name}</span>
                    <span className="explore-community-members">{c.members} members</span>
                  </div>
                  <button
                    className={`explore-join-btn ${joined[c.name] ? 'explore-joined' : ''}`}
                    onClick={() => toggleJoin(c.name)}
                  >
                    {joined[c.name] ? 'Joined' : 'Join'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Mobile Creators Carousel */}
      <div className="explore-mobile-section">
        <h3 className="explore-mobile-title">Trending Creators</h3>
        <div className="explore-mobile-scroll">
          {(liveTrendingCreators?.length > 0 ? liveTrendingCreators : trendingCreatorsFallback).map((creator) => (
            <div key={creator.handle} className="explore-mobile-creator">
              <div
                className="explore-mobile-creator-avatar"
                style={{ background: creator.avatarColor }}
              >
                {creator.name.charAt(0)}
              </div>
              <span className="explore-mobile-creator-name">{creator.name}</span>
              <span className="explore-mobile-creator-followers">{creator.followers}</span>
              <button
                className={`explore-mobile-follow-btn ${following[creator.handle] ? 'explore-following' : ''}`}
                onClick={() => toggleFollow(creator.handle)}
              >
                {following[creator.handle] ? 'Following' : 'Follow'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Communities Carousel */}
      <div className="explore-mobile-section">
        <h3 className="explore-mobile-title">Suggested Communities</h3>
        <div className="explore-mobile-scroll">
          {communities.slice(0, 6).map((c) => (
            <div key={c.name} className="explore-mobile-community">
              <span className="explore-mobile-community-icon">{c.icon}</span>
              <span className="explore-mobile-community-name">{c.name}</span>
              <span className="explore-mobile-community-members">{c.members}</span>
              <button
                className={`explore-mobile-join-btn ${joined[c.name] ? 'explore-joined' : ''}`}
                onClick={() => toggleJoin(c.name)}
              >
                {joined[c.name] ? 'Joined' : 'Join'}
              </button>
            </div>
          ))}
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

        /* ────────── Sidebar ────────── */
        .explore-sidebar {
          width: 280px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .explore-sidebar-section {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 1rem;
        }
        .explore-sidebar-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text);
          margin: 0 0 0.85rem;
        }

        /* ── Creator Row ── */
        .explore-creators-list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .explore-creator-row {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }
        .explore-creator-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--accent-text);
          flex-shrink: 0;
        }
        .explore-creator-info {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          line-height: 1.3;
        }
        .explore-creator-name {
          font-size: 0.82rem;
          color: var(--text);
          font-weight: 500;
        }
        .explore-creator-handle {
          font-size: 0.7rem;
          color: var(--text-secondary);
        }
        .explore-creator-followers {
          font-size: 0.65rem;
          color: var(--text-secondary);
          opacity: 0.7;
        }
        .explore-follow-btn {
          padding: 0.3rem 0.75rem;
          border-radius: 8px;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--text-secondary);
          font-size: 0.75rem;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.2s;
          flex-shrink: 0;
          white-space: nowrap;
        }
        .explore-follow-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
        .explore-following {
          background: color-mix(in srgb, var(--accent) 10%, transparent);
          border-color: var(--accent);
          color: var(--accent);
        }

        /* ── Community Row ── */
        .explore-communities-list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .explore-community-row {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }
        .explore-community-icon {
          font-size: 1.4rem;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .explore-community-info {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          line-height: 1.3;
        }
        .explore-community-name {
          font-size: 0.82rem;
          color: var(--text);
          font-weight: 500;
        }
        .explore-community-members {
          font-size: 0.7rem;
          color: var(--text-secondary);
        }
        .explore-join-btn {
          padding: 0.3rem 0.75rem;
          border-radius: 8px;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--text-secondary);
          font-size: 0.75rem;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.2s;
          flex-shrink: 0;
          white-space: nowrap;
        }
        .explore-join-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
        .explore-joined {
          background: color-mix(in srgb, var(--accent) 10%, transparent);
          border-color: var(--accent);
          color: var(--accent);
        }

        /* ────────── Mobile Carousels ────────── */
        .explore-mobile-section {
          display: none;
          margin-top: 1.25rem;
        }
        .explore-mobile-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text);
          margin: 0 0 0.75rem;
        }
        .explore-mobile-scroll {
          display: flex;
          gap: 0.7rem;
          overflow-x: auto;
          padding-bottom: 0.25rem;
          scrollbar-width: none;
        }
        .explore-mobile-scroll::-webkit-scrollbar {
          display: none;
        }

        .explore-mobile-creator {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
          min-width: 100px;
          padding: 0.75rem 0.5rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 14px;
          flex-shrink: 0;
        }
        .explore-mobile-creator-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          font-weight: 700;
          color: var(--accent-text);
        }
        .explore-mobile-creator-name {
          font-size: 0.78rem;
          color: var(--text);
          font-weight: 500;
          text-align: center;
        }
        .explore-mobile-creator-followers {
          font-size: 0.65rem;
          color: var(--text-secondary);
        }
        .explore-mobile-follow-btn {
          padding: 0.25rem 0.7rem;
          border-radius: 6px;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--text-secondary);
          font-size: 0.7rem;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.2s;
        }
        .explore-mobile-follow-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        .explore-mobile-community {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
          min-width: 110px;
          padding: 0.75rem 0.5rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 14px;
          flex-shrink: 0;
        }
        .explore-mobile-community-icon {
          font-size: 1.6rem;
        }
        .explore-mobile-community-name {
          font-size: 0.78rem;
          color: var(--text);
          font-weight: 500;
          text-align: center;
        }
        .explore-mobile-community-members {
          font-size: 0.65rem;
          color: var(--text-secondary);
        }
        .explore-mobile-join-btn {
          padding: 0.25rem 0.7rem;
          border-radius: 6px;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--text-secondary);
          font-size: 0.7rem;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.2s;
        }
        .explore-mobile-join-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        /* ────────── Responsive ────────── */
        @media (min-width: 1024px) {
          .explore-sidebar {
            display: flex;
          }
          .explore-mobile-section {
            display: none;
          }
        }

        @media (max-width: 1023px) {
          .explore-sidebar {
            display: none;
          }
          .explore-mobile-section {
            display: block;
          }
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
