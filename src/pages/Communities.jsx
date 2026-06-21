import { useState } from 'react'

const Icons = {
  search: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  users: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  plus: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
  hash: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>,
  lock: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>,
}

const categories = ['All', 'Gaming', 'Art', 'Music', 'Tech', 'Photography', 'Fitness', 'Fashion']

const communities = [
  { name: 'Pixel Art Masters', members: '12.4k', category: 'Art', desc: 'A community for pixel art enthusiasts and digital artists.', color: '#ff6b6b' },
  { name: 'Cyber Gamers', members: '8.7k', category: 'Gaming', desc: 'Discuss the latest games, strategies, and esports.', color: '#ffa502' },
  { name: 'Synthwave Producers', members: '5.2k', category: 'Music', desc: 'Create and share synthwave, retrowave, and chill beats.', color: '#7bed9f' },
  { name: 'Code Brigade', members: '15.3k', category: 'Tech', desc: 'Web dev, AI, open source — all things code.', color: '#70a1ff' },
  { name: 'Lens Culture', members: '6.8k', category: 'Photography', desc: 'Share your best shots and photography techniques.', color: '#ff6348' },
  { name: 'Neon Fitness', members: '4.1k', category: 'Fitness', desc: 'Push your limits with the neon fitness crew.', color: '#a29bfe' },
  { name: 'Digital Canvas', members: '9.5k', category: 'Art', desc: 'Digital painting, 3D modeling, and concept art.', color: '#55efc4' },
  { name: 'Vaporwave Lounge', members: '3.9k', category: 'Music', desc: 'Chill aesthetics, vaporwave, and lo-fi vibes.', color: '#fd79a8' },
]

export default function Communities() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = communities.filter(c => {
    const matchCategory = activeCategory === 'All' || c.category === activeCategory
    const matchSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.desc.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <div className="page-enter">
      <div className="communities-page">
        <div className="page-header">
          <h1>Communities</h1>
          <p>Discover and join communities that match your interests</p>
        </div>

        <div className="search-bar glass">
          {Icons.search}
          <input
            type="text"
            placeholder="Search communities..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="category-pills">
          {categories.map(cat => (
            <button
              key={cat}
              className={`pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === 'All' ? null : <span className="pill-icon">{Icons.hash}</span>}
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="empty-state glass">
            {Icons.search}
            <h3>No communities found</h3>
            <p>Try adjusting your search or filter</p>
          </div>
        ) : (
          <div className="communities-grid">
            {filtered.map((c, i) => (
              <div key={i} className="community-card glass">
                <div className="community-card-header" style={{ background: `linear-gradient(135deg, ${c.color}22, ${c.color}44)` }}>
                  <div className="community-avatar" style={{ background: c.color }}>
                    {c.name.charAt(0)}
                  </div>
                  <span className="community-category">{c.category}</span>
                </div>
                <div className="community-card-body">
                  <h3>{c.name}</h3>
                  <p>{c.desc}</p>
                  <div className="community-meta">
                    <span>{Icons.users} {c.members} members</span>
                  </div>
                </div>
                <div className="community-card-footer">
                  <button className="join-community-btn">Join Community</button>
                </div>
              </div>
            ))}

            {/* Create community card */}
            <div className="community-card create-card glass">
              <div className="create-card-icon">{Icons.plus}</div>
              <h3>Create Community</h3>
              <p>Start your own community and bring people together</p>
              <button className="create-community-btn">Get Started</button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .communities-page {
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

        /* Search */
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

        /* Category Pills */
        .category-pills {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }
        .pill {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.5rem 1rem;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.5);
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
          white-space: nowrap;
        }
        .pill:hover { border-color: rgba(204,255,0,0.3); color: #fff; }
        .pill.active { background: #CCFF00; color: #08080f; border-color: #CCFF00; font-weight: 600; }
        .pill-icon svg { width: 14px; height: 14px; }

        /* Empty */
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 3rem 2rem;
          text-align: center;
          gap: 0.75rem;
        }
        .empty-state svg { width: 48px; height: 48px; color: rgba(255,255,255,0.15); }
        .empty-state h3 { margin: 0; color: #fff; font-weight: 600; }
        .empty-state p { margin: 0; color: rgba(255,255,255,0.4); font-size: 0.9rem; }

        /* Grid */
        .communities-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        .community-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .community-card:hover { transform: translateY(-4px); box-shadow: 0 8px 30px rgba(0,0,0,0.3); }
        .community-card-header {
          padding: 1.5rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .community-avatar {
          width: 48px; height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
        }
        .community-category {
          padding: 0.25rem 0.6rem;
          border-radius: 6px;
          background: rgba(255,255,255,0.08);
          font-size: 0.75rem;
          color: rgba(255,255,255,0.6);
        }
        .community-card-body { padding: 0 1.25rem 1rem; flex: 1; }
        .community-card-body h3 { margin: 0 0 0.4rem; font-size: 1rem; color: #fff; font-weight: 600; }
        .community-card-body p { margin: 0 0 0.75rem; font-size: 0.85rem; color: rgba(255,255,255,0.4); line-height: 1.4; }
        .community-meta { display: flex; gap: 1rem; font-size: 0.8rem; color: rgba(255,255,255,0.4); }
        .community-meta svg { width: 14px; height: 14px; vertical-align: middle; margin-right: 0.3rem; }
        .community-card-footer { padding: 0.75rem 1.25rem; border-top: 1px solid rgba(255,255,255,0.06); }
        .join-community-btn {
          width: 100%;
          padding: 0.6rem;
          border-radius: 8px;
          border: none;
          background: rgba(204,255,0,0.1);
          color: #CCFF00;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
          font-weight: 500;
        }
        .join-community-btn:hover { background: #CCFF00; color: #08080f; }

        /* Create card */
        .create-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          text-align: center;
          gap: 0.75rem;
          border: 1px dashed rgba(255,255,255,0.12);
          cursor: pointer;
        }
        .create-card:hover { border-color: rgba(204,255,0,0.3); }
        .create-card-icon svg { width: 40px; height: 40px; color: rgba(255,255,255,0.2); }
        .create-card h3 { margin: 0; color: #fff; font-weight: 600; font-size: 1rem; }
        .create-card p { margin: 0; color: rgba(255,255,255,0.4); font-size: 0.85rem; }
        .create-community-btn {
          padding: 0.5rem 1.5rem;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.15);
          background: transparent;
          color: rgba(255,255,255,0.5);
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
        }
        .create-community-btn:hover { border-color: #CCFF00; color: #CCFF00; }

        @media (max-width: 900px) {
          .communities-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .communities-page { padding: 1rem; }
          .communities-grid { grid-template-columns: 1fr; }
          .page-header h1 { font-size: 1.4rem; }
        }
      `}</style>
    </div>
  )
}
