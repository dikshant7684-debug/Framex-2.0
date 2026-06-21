import { useState } from 'react'

const Icons = {
  search: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  trending: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  heart: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
  heartFilled: <svg viewBox="0 0 24 24" fill="#ff6464" stroke="#ff6464" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
  messageCircle: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>,
  eye: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  hash: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>,
}

const tabs = ['Trending', 'Recent', 'Popular', 'Following']

const posts = [
  { title: 'Neon Dreams Collection', author: '@cyberartist', likes: '3.4k', comments: '142', hue: 0 },
  { title: 'Synthwave Sunset', author: '@vaporwave', likes: '2.8k', comments: '98', hue: 220 },
  { title: 'Digital Garden', author: '@pixelkitten', likes: '1.9k', comments: '67', hue: 120 },
  { title: 'Cyberpunk Cityscape', author: '@neondreamer', likes: '4.2k', comments: '203', hue: 300 },
  { title: 'Abstract AI Series #7', author: '@deepmind', likes: '2.1k', comments: '55', hue: 45 },
  { title: 'Retro Wave Rider', author: '@outrun', likes: '5.6k', comments: '312', hue: 170 },
]

const creators = [
  { name: 'CyberArtist', handle: '@cyberartist', color: '#ff6b6b' },
  { name: 'PixelKitten', handle: '@pixelkitten', color: '#7bed9f' },
  { name: 'NeonDreamer', handle: '@neondreamer', color: '#70a1ff' },
  { name: 'VaporWave', handle: '@vaporwave', color: '#fd79a8' },
  { name: 'DeepMind', handle: '@deepmind', color: '#a29bfe' },
]

export default function Explore() {
  const [activeTab, setActiveTab] = useState('Trending')
  const [searchQuery, setSearchQuery] = useState('')
  const [liked, setLiked] = useState({})

  const toggleLike = (i) => setLiked(prev => ({ ...prev, [i]: !prev[i] }))

  return (
    <div className="page-enter">
      <div className="explore-page">
        <div className="page-header">
          <h1>Explore</h1>
          <p>Discover trending content, creators, and more</p>
        </div>

        <div className="search-bar glass">
          {Icons.search}
          <input
            type="text"
            placeholder="Search posts, creators, hashtags..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Trending hashtags */}
        <div className="hashtags-row">
          {['#neon', '#synthwave', '#cyberpunk', '#aiart', '#vaporwave', '#pixelart'].map((tag, i) => (
            <span key={i} className="hashtag-pill glass">{Icons.hash} {tag}</span>
          ))}
        </div>

        {/* Filter tabs */}
        <div className="filter-tabs">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`filter-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'Trending' && Icons.trending}
              {tab === 'Recent' && Icons.eye}
              {tab === 'Popular' && Icons.heart}
              {tab === 'Following' && Icons.hash}
              {tab}
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="explore-grid">
          {posts.map((post, i) => (
            <div key={i} className="explore-card glass">
              <div className="explore-card-thumb" style={{ background: `linear-gradient(135deg, hsl(${post.hue}, 80%, 20%), hsl(${post.hue + 60}, 80%, 8%))` }}>
                <div className="explore-card-overlay">
                  <span className="explore-view-btn">{Icons.eye} View</span>
                </div>
              </div>
              <div className="explore-card-body">
                <h3>{post.title}</h3>
                <span className="explore-author">{post.author}</span>
                <div className="explore-card-actions">
                  <button className={`explore-action ${liked[i] ? 'liked' : ''}`} onClick={() => toggleLike(i)}>
                    {liked[i] ? Icons.heartFilled : Icons.heart}
                    <span>{post.likes}</span>
                  </button>
                  <span className="explore-action">
                    {Icons.messageCircle}
                    <span>{post.comments}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Creators to follow */}
        <section className="section">
          <h2 className="section-title">Creators to Follow</h2>
          <div className="creators-scroll">
            {creators.map((c, i) => (
              <div key={i} className="creator-card glass">
                <div className="creator-avatar" style={{ background: `linear-gradient(135deg, ${c.color}, ${c.color}88)` }}>
                  {c.name.charAt(0)}
                </div>
                <div className="creator-info">
                  <span className="creator-name">{c.name}</span>
                  <span className="creator-handle">{c.handle}</span>
                </div>
                <button className="follow-btn">Follow</button>
              </div>
            ))}
          </div>
        </section>
      </div>

      <style>{`
        .explore-page {
          padding: 1.5rem;
          max-width: 1200px;
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

        .search-bar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.25rem;
          margin-bottom: 1.25rem;
        }
        .search-bar svg { width: 20px; height: 20px; color: rgba(255,255,255,0.3); flex-shrink: 0; }
        .search-bar input {
          flex: 1;
          background: none;
          border: none;
          outline: none;
          color: #fff;
          font-size: 0.95rem;
          font-family: inherit;
        }
        .search-bar input::placeholder { color: rgba(255,255,255,0.3); }

        .hashtags-row {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }
        .hashtag-pill {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.4rem 1rem;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.5);
          cursor: pointer;
          transition: all 0.2s;
        }
        .hashtag-pill svg { width: 14px; height: 14px; }
        .hashtag-pill:hover { color: #CCFF00; border-color: rgba(204,255,0,0.3); }

        .filter-tabs {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .filter-tab {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.55rem 1.1rem;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.08);
          background: transparent;
          color: rgba(255,255,255,0.5);
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
        }
        .filter-tab svg { width: 16px; height: 16px; }
        .filter-tab:hover { color: #fff; border-color: rgba(255,255,255,0.15); }
        .filter-tab.active { background: rgba(204,255,0,0.1); color: #CCFF00; border-color: rgba(204,255,0,0.3); }

        .explore-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .explore-card { overflow: hidden; transition: transform 0.3s; }
        .explore-card:hover { transform: translateY(-4px); }
        .explore-card-thumb {
          height: 180px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .explore-card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .explore-card:hover .explore-card-overlay { opacity: 1; }
        .explore-view-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 1.2rem;
          border-radius: 8px;
          background: rgba(255,255,255,0.1);
          color: #fff;
          font-size: 0.85rem;
          cursor: pointer;
          backdrop-filter: blur(8px);
        }
        .explore-view-btn svg { width: 16px; height: 16px; }
        .explore-card-body { padding: 1rem; }
        .explore-card-body h3 { margin: 0 0 0.25rem; font-size: 0.95rem; color: #fff; font-weight: 600; }
        .explore-author { font-size: 0.8rem; color: rgba(255,255,255,0.35); display: block; margin-bottom: 0.75rem; }
        .explore-card-actions { display: flex; gap: 1rem; }
        .explore-action {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.4);
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          font-family: inherit;
        }
        .explore-action svg { width: 16px; height: 16px; }
        .explore-action.liked { color: #ff6464; }

        .section { margin-bottom: 2rem; }
        .section-title { font-size: 1.1rem; font-weight: 600; color: #fff; margin: 0 0 1rem; }

        .creators-scroll {
          display: flex;
          gap: 0.75rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
          scrollbar-width: none;
        }
        .creators-scroll::-webkit-scrollbar { display: none; }
        .creator-card {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          min-width: 240px;
          flex-shrink: 0;
          transition: transform 0.3s;
        }
        .creator-card:hover { transform: translateY(-2px); }
        .creator-avatar {
          width: 40px; height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: #fff;
          font-size: 1rem;
          flex-shrink: 0;
        }
        .creator-info { display: flex; flex-direction: column; flex: 1; min-width: 0; }
        .creator-name { font-size: 0.85rem; color: #fff; font-weight: 500; }
        .creator-handle { font-size: 0.75rem; color: rgba(255,255,255,0.35); }
        .follow-btn {
          padding: 0.35rem 0.8rem;
          border-radius: 6px;
          border: 1px solid rgba(255,255,255,0.12);
          background: transparent;
          color: rgba(255,255,255,0.6);
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
          flex-shrink: 0;
        }
        .follow-btn:hover { border-color: #CCFF00; color: #CCFF00; }

        @media (max-width: 900px) {
          .explore-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .explore-page { padding: 1rem; }
          .explore-grid { grid-template-columns: 1fr; }
          .filter-tabs { flex-wrap: wrap; }
          .page-header h1 { font-size: 1.4rem; }
        }
      `}</style>
    </div>
  )
}
