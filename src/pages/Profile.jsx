import { useState, useEffect, useRef, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate, useParams } from 'react-router-dom'
import FeedPost from '../components/FeedPost'
import { useRealtimeProfile } from '../hooks/useRealtimeProfile'
import { useAuthStore } from '../stores/authStore'
import { useProfileStore } from '../stores/profileStore'
import { usePostStore } from '../stores/postStore'
import { supabase } from '../lib/supabaseClient'

const AVATAR_COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9']
const getAvatarColor = (name) => {
  if (typeof name !== 'string') return AVATAR_COLORS[0]
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length]
}

function formatCount(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M'
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K'
  return n.toString()
}

export default function Profile() {
  const { id } = useParams()
  const [viewMode, setViewMode] = useState('grid')
  const [activeTab, setActiveTab] = useState('posts')
  const navigate = useNavigate()
  const [showEditModal, setShowEditModal] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [toast, setToast] = useState(null)
  const [viewUser, setViewUser] = useState(null)
  const [viewUserLoading, setViewUserLoading] = useState(false)
  const [userPosts, setUserPosts] = useState([])
  const [postsLoading, setPostsLoading] = useState(false)
  const [userStats, setUserStats] = useState({ posts: 0, followers: 0, following: 0 })
  const [savedPosts, setSavedPosts] = useState([])
  const [savedPostsLoading, setSavedPostsLoading] = useState(false)
  const [likedPosts, setLikedPosts] = useState([])
  const [likedPostsLoading, setLikedPostsLoading] = useState(false)
  const [editForm, setEditForm] = useState({
    avatar_url: '',
    cover_url: '',
    full_name: '',
    username: '',
    bio: '',
    website: '',
  })
  const fileInputRef = useRef(null)
  const coverInputRef = useRef(null)

  const authProfile = useAuthStore(s => s.profile)
  const authUser = useAuthStore(s => s.user)
  const updateProfile = useAuthStore(s => s.updateProfile)
  const isOwnProfile = !id || id === authUser?.id
  const targetUserId = id || authUser?.id
  const { liveFollowerCount, isOnline } = useRealtimeProfile(targetUserId)
  const followUser = useProfileStore(s => s.followUser)
  const unfollowUser = useProfileStore(s => s.unfollowUser)
  const fetchFollowers = useProfileStore(s => s.fetchFollowers)
  const followersByUserId = useProfileStore(s => s.followersByUserId)
  const fetchSavedPostIds = usePostStore(s => s.fetchSavedPostIds)
  const fetchLikedPostIds = usePostStore(s => s.fetchLikedPostIds)
  const savedPostIds = useRef(new Set())

  const profile = useMemo(() => {
    const src = isOwnProfile ? authProfile : viewUser
    if (!src) {
      return {
        username: 'Loading...',
        handle: '@...',
        avatarUrl: null,
        bio: '',
        website: '',
        posts: '0',
        followers: 0,
        following: 0,
      }
    }
    return {
      username: src.display_name || src.username || 'Unknown',
      handle: `@${src.username || 'unknown'}`,
      avatarUrl: src.avatar_url || null,
      bio: src.bio || '',
      website: src.website || '',
      posts: userStats.posts,
      followers: liveFollowerCount ?? userStats.followers,
      following: userStats.following,
    }
  }, [isOwnProfile, viewUser, authProfile, userStats, liveFollowerCount])

  const isFollowing = useMemo(() => {
    if (isOwnProfile || !targetUserId) return false
    const followers = followersByUserId[targetUserId] || []
    return followers.some(f => f.follower_id === authUser?.id)
  }, [isOwnProfile, targetUserId, followersByUserId, authUser])

  // Fetch viewed user profile
  useEffect(() => {
    if (isOwnProfile || !id) return
    setViewUserLoading(true)
    supabase.from('profiles').select('*').eq('id', id).single()
      .then(({ data, error }) => {
        if (error) throw error
        setViewUser(data)
      })
      .catch(err => console.warn('Failed to load user profile:', err.message))
      .finally(() => setViewUserLoading(false))
  }, [id, isOwnProfile])

  // Fetch user posts
  useEffect(() => {
    if (!targetUserId) return
    setPostsLoading(true)
    supabase
      .from('posts')
      .select('*')
      .eq('user_id', targetUserId)
      .eq('is_deleted', false)
      .order('created_at', { ascending: false })
      .then(({ data, error }) => {
        if (!error && data) setUserPosts(data)
      })
      .finally(() => setPostsLoading(false))
  }, [targetUserId])

  // Fetch user stats (post count, following count)
  useEffect(() => {
    if (!targetUserId) return
    const fetchStats = async () => {
      try {
        const [postsRes, followingRes, followersRes] = await Promise.all([
          supabase.from('posts').select('id', { count: 'exact', head: true }).eq('user_id', targetUserId).eq('is_deleted', false),
          supabase.from('follows').select('id', { count: 'exact', head: true }).eq('follower_id', targetUserId),
          supabase.from('follows').select('id', { count: 'exact', head: true }).eq('following_id', targetUserId),
        ])
        setUserStats({
          posts: postsRes.count ?? 0,
          following: followingRes.count ?? 0,
          followers: followersRes.count ?? 0,
        })
      } catch (err) {
        console.warn('Failed to fetch user stats:', err)
      }
    }
    fetchStats()
  }, [targetUserId])

  // Fetch followers for follow/unfollow check
  useEffect(() => {
    if (!targetUserId || isOwnProfile) return
    fetchFollowers(targetUserId)
  }, [targetUserId, isOwnProfile, fetchFollowers])

  // Fetch liked posts
  useEffect(() => {
    if (!targetUserId || activeTab !== 'likes') return
    let cancelled = false
    setLikedPostsLoading(true)
    fetchLikedPostIds(targetUserId)
      .then(async (likedIds) => {
        if (!likedIds || likedIds.length === 0) {
          if (!cancelled) setLikedPosts([])
          return
        }
        const { data: posts, error } = await supabase
          .from('posts')
          .select('*')
          .in('id', likedIds)
          .eq('is_deleted', false)
          .order('created_at', { ascending: false })
        if (error) throw error
        if (!posts || posts.length === 0) {
          if (!cancelled) setLikedPosts([])
          return
        }
        const userIds = [...new Set(posts.map(p => p.user_id))]
        const { data: profiles } = await supabase
          .from('profiles')
          .select('id, username, display_name, avatar_url')
          .in('id', userIds)
        const profileMap = {}
        if (profiles) profiles.forEach(p => { profileMap[p.id] = p })
        const enriched = posts.map(post => {
          const profile = profileMap[post.user_id] || {}
          return {
            id: post.id,
            username: profile.display_name || profile.username || 'Unknown',
            handle: `@${profile.username || 'unknown'}`,
            avatarColor: getAvatarColor(profile.username || ''),
            content: post.content || '',
            images: post.image_url ? [post.image_url] : [],
            likes: post.likes_count || post.likes || 0,
            comments: post.comments_count || 0,
            timestamp: post.created_at ? new Date(post.created_at).getTime() : Date.now(),
            liked: true,
            saved: false,
          }
        })
        if (!cancelled) setLikedPosts(enriched)
      })
      .catch(err => console.warn('Failed to fetch liked posts:', err.message))
      .finally(() => { if (!cancelled) setLikedPostsLoading(false) })
    return () => { cancelled = true }
  }, [targetUserId, activeTab, fetchLikedPostIds])

  // Fetch saved posts
  useEffect(() => {
    if (!targetUserId || activeTab !== 'saved' || !isOwnProfile) return
    let cancelled = false
    setSavedPostsLoading(true)
    fetchSavedPostIds(targetUserId)
      .then(async (savedIds) => {
        if (!savedIds || savedIds.length === 0) {
          if (!cancelled) { setSavedPosts([]); savedPostIds.current = new Set() }
          return
        }
        savedPostIds.current = new Set(savedIds)
        const { data: posts, error } = await supabase
          .from('posts')
          .select('*')
          .in('id', savedIds)
          .eq('is_deleted', false)
          .order('created_at', { ascending: false })
        if (error) throw error
        if (!posts || posts.length === 0) {
          if (!cancelled) setSavedPosts([])
          return
        }
        const userIds = [...new Set(posts.map(p => p.user_id))]
        const { data: profiles } = await supabase
          .from('profiles')
          .select('id, username, display_name, avatar_url')
          .in('id', userIds)
        const profileMap = {}
        if (profiles) profiles.forEach(p => { profileMap[p.id] = p })
        const enriched = posts.map(post => {
          const profile = profileMap[post.user_id] || {}
          return {
            id: post.id,
            username: profile.display_name || profile.username || 'Unknown',
            handle: `@${profile.username || 'unknown'}`,
            avatarColor: getAvatarColor(profile.username || ''),
            content: post.content || '',
            images: post.image_url ? [post.image_url] : [],
            likes: post.likes_count || post.likes || 0,
            comments: post.comments_count || 0,
            timestamp: post.created_at ? new Date(post.created_at).getTime() : Date.now(),
            liked: false,
            saved: true,
          }
        })
        if (!cancelled) setSavedPosts(enriched)
      })
      .catch(err => console.warn('Failed to fetch saved posts:', err.message))
      .finally(() => { if (!cancelled) setSavedPostsLoading(false) })
    return () => { cancelled = true }
  }, [targetUserId, activeTab, isOwnProfile, fetchSavedPostIds])

  const showToast = (type, message) => {
    setToast({ type, message })
    setTimeout(() => setToast(null), 3000)
  }

  const ensureBucket = async (bucket) => {
    const { data: buckets } = await supabase.storage.listBuckets()
    if (buckets?.some(b => b.name === bucket)) return true
    const { error } = await supabase.storage.createBucket(bucket, { public: true })
    if (error) {
      console.warn(`Could not auto-create bucket "${bucket}":`, error.message)
      return false
    }
    return true
  }

  const uploadImage = async (file, bucket) => {
    if (!file) return null
    setUploading(true)
    try {
      const fileExt = file.name.split('.').pop()
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(2)}.${fileExt}`

      const { error } = await supabase.storage.from(bucket).upload(fileName, file)
      if (error?.message?.includes('bucket') || error?.message?.includes('Bucket')) {
        const created = await ensureBucket(bucket)
        if (!created) {
          showToast('error', `Storage bucket "${bucket}" not found. Create it in Supabase dashboard or run the migration SQL.`)
          return null
        }
        // Retry upload after creating bucket
        const { error: retryErr } = await supabase.storage.from(bucket).upload(fileName, file)
        if (retryErr) throw retryErr
      } else if (error) {
        throw error
      }

      const { data: { publicUrl } } = supabase.storage.from(bucket).getPublicUrl(fileName)
      return publicUrl
    } catch (err) {
      showToast('error', err.message || 'Failed to upload image')
      return null
    } finally {
      setUploading(false)
    }
  }

  const handleSaveProfile = async () => {
    setSaving(true)
    try {
      const updates = {}
      if (editForm.full_name) updates.full_name = editForm.full_name
      if (editForm.username) updates.username = editForm.username
      if (editForm.bio) updates.bio = editForm.bio
      if (editForm.website) updates.website = editForm.website
      if (editForm.avatar_url) updates.avatar_url = editForm.avatar_url
      if (editForm.cover_url) updates.cover_url = editForm.cover_url
      await updateProfile(updates)
      showToast('success', 'Profile updated successfully!')
      setShowEditModal(false)
    } catch (err) {
      showToast('error', err.message || 'Failed to update profile')
    } finally {
      setSaving(false)
    }
  }

  const tabs = [
    { id: 'posts', label: 'Posts' },
    { id: 'likes', label: 'Likes' },
    ...(isOwnProfile ? [{ id: 'saved', label: 'Saved' }] : []),
  ]

  return (
    <motion.div
      className="profile-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-cover">
          <div className="profile-cover-bg" />
          {!isOwnProfile && (
            <button className="profile-back-btn" onClick={() => navigate(-1)} aria-label="Go back">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}
        </div>

        <div className="profile-info">
          <div className="profile-avatar-section">
            <div className="profile-avatar" style={{ background: getAvatarColor(profile.username), position: 'relative' }}>
              {profile.avatarUrl ? (
                <img src={profile.avatarUrl} alt={profile.username} className="profile-avatar-img" />
              ) : (
                <span>{profile.username.charAt(0).toUpperCase()}</span>
              )}
              <span className={`profile-status-badge ${isOnline ? 'online' : 'offline'}`} />
            </div>
            <div className="profile-actions">
              {isOwnProfile && <><motion.button
                className="profile-settings-btn"
                onClick={() => navigate('/settings')}
                aria-label="Settings"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.92, rotate: 15 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                  <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
                </svg>
              </motion.button>
              <motion.button
                className="profile-edit-btn"
                onClick={() => {
                  if (authProfile) {
                    setEditForm({
                      avatar_url: authProfile.avatar_url || '',
                      cover_url: authProfile.cover_url || '',
                      full_name: authProfile.full_name || '',
                      username: authProfile.username || '',
                      bio: authProfile.bio || '',
                      website: authProfile.website || '',
                    })
                  }
                  setShowEditModal(true)
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                Edit Profile
              </motion.button>
              </>}
              {!isOwnProfile && (
                <motion.button
                  className={`profile-follow-btn${isFollowing ? ' following' : ''}`}
                  onClick={() => isFollowing ? unfollowUser(targetUserId) : followUser(targetUserId)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  {isFollowing ? 'Following' : 'Follow'}
                </motion.button>
              )}
            </div>
          </div>

          <div className="profile-details">
            <h1 className="profile-name">{profile.username}</h1>
            <span className="profile-handle">{profile.handle}</span>
            <p className="profile-bio">{profile.bio}</p>
            <a className="profile-website" href={profile.website ? (profile.website.startsWith('http') ? profile.website : `https://${profile.website}`) : '#'} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
              </svg>
              {profile.website}
            </a>
          </div>

          <div className="profile-stats">
            <div className="profile-stat">
              <span className="profile-stat-value">{formatCount(profile.posts)}</span>
              <span className="profile-stat-label">Posts</span>
            </div>
            <div className="profile-stat">
              <span className="profile-stat-value">{formatCount(liveFollowerCount || profile.followers)}</span>
              <span className="profile-stat-label">Followers</span>
            </div>
            <div className="profile-stat">
              <span className="profile-stat-value">{formatCount(profile.following)}</span>
              <span className="profile-stat-label">Following</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="profile-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`profile-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div className="profile-tab-underline" layoutId="tab-underline" />
            )}
          </button>
        ))}
        <div className="profile-view-toggle">
          <button
            className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
          </button>
          <button
            className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'posts' && (
          <motion.div
            key="posts"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="profile-content"
          >
            {viewMode === 'grid' ? (
              <div className="profile-grid">
                {userPosts.length > 0 ? userPosts.map(post => (
                  <motion.div
                    key={post.id}
                    className="profile-grid-item"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    {post.image_url ? (
                      <img src={post.image_url} alt="" loading="lazy" />
                    ) : (
                      <div className="grid-item-text">
                        <p>{post.content.substring(0, 60)}...</p>
                      </div>
                    )}
                    <div className="grid-item-overlay">
                      <span>{(post.likes_count || post.likes || 0)} ❤</span>
                    </div>
                  </motion.div>
                )) : (
                  <div className="profile-empty">
                    <p>No posts yet</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="profile-list">
                {userPosts.length > 0 ? userPosts.map(post => (
                  <FeedPost key={post.id} post={post} />
                )) : (
                  <div className="profile-empty">
                    <p>No posts yet</p>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}
        {activeTab === 'likes' && (
          <motion.div
            key="likes"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="profile-content"
          >
            {likedPostsLoading ? (
              <div className="profile-empty"><p>Loading liked posts...</p></div>
            ) : viewMode === 'grid' ? (
              <div className="profile-grid">
                {likedPosts.length > 0 ? likedPosts.map(post => (
                  <motion.div
                    key={post.id}
                    className="profile-grid-item"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    {post.images?.[0] ? (
                      <img src={post.images[0]} alt="" loading="lazy" />
                    ) : (
                      <div className="grid-item-text">
                        <p>{post.content.substring(0, 60)}...</p>
                      </div>
                    )}
                    <div className="grid-item-overlay">
                      <span>{post.likes} ❤</span>
                    </div>
                  </motion.div>
                )) : (
                  <div className="profile-empty"><p>No liked posts yet</p></div>
                )}
              </div>
            ) : (
              <div className="profile-list">
                {likedPosts.length > 0 ? likedPosts.map(post => (
                  <FeedPost key={post.id} post={post} />
                )) : (
                  <div className="profile-empty"><p>No liked posts yet</p></div>
                )}
              </div>
            )}
          </motion.div>
        )}
        {activeTab === 'saved' && (
          <motion.div
            key="saved"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="profile-content"
          >
            {savedPostsLoading ? (
              <div className="profile-empty"><p>Loading saved posts...</p></div>
            ) : viewMode === 'grid' ? (
              <div className="profile-grid">
                {savedPosts.length > 0 ? savedPosts.map(post => (
                  <motion.div
                    key={post.id}
                    className="profile-grid-item"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    {post.images?.[0] ? (
                      <img src={post.images[0]} alt="" loading="lazy" />
                    ) : (
                      <div className="grid-item-text">
                        <p>{post.content.substring(0, 60)}...</p>
                      </div>
                    )}
                    <div className="grid-item-overlay">
                      <span>{post.likes} ❤</span>
                    </div>
                  </motion.div>
                )) : (
                  <div className="profile-empty"><p>No saved posts yet</p></div>
                )}
              </div>
            ) : (
              <div className="profile-list">
                {savedPosts.length > 0 ? savedPosts.map(post => (
                  <FeedPost key={post.id} post={post} />
                )) : (
                  <div className="profile-empty"><p>No saved posts yet</p></div>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Edit Profile Modal */}
      <AnimatePresence>
        {showEditModal && (
          <motion.div
            className="edit-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowEditModal(false)}
          >
            <motion.div
              className="edit-modal"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="edit-modal-header">
                <h2>Edit Profile</h2>
                <motion.button
                  className="edit-modal-close"
                  onClick={() => setShowEditModal(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </motion.button>
              </div>

              <div className="edit-modal-body">
                <div className="edit-field">
                  <label>Profile Picture</label>
                  <div className="image-upload-area" onClick={() => fileInputRef.current?.click()}>
                    {editForm.avatar_url ? (
                      <img src={editForm.avatar_url} alt="Avatar" className="image-preview" />
                    ) : (
                      <div className="image-upload-placeholder">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                          <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>
                        </svg>
                        <span>Tap to change</span>
                      </div>
                    )}
                    {uploading && <div className="image-upload-spinner" />}
                  </div>
                  <input ref={fileInputRef} type="file" accept="image/*" hidden onChange={async e => {
                    const file = e.target.files?.[0]
                    if (!file) return
                    const url = await uploadImage(file, 'avatars')
                    if (url) setEditForm(f => ({ ...f, avatar_url: url }))
                  }} />
                </div>

                <div className="edit-field">
                  <label>Cover Image</label>
                  <div className="cover-upload-area" onClick={() => coverInputRef.current?.click()}>
                    {editForm.cover_url ? (
                      <img src={editForm.cover_url} alt="Cover" className="cover-preview" />
                    ) : (
                      <div className="image-upload-placeholder">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                        </svg>
                        <span>Tap to change cover</span>
                      </div>
                    )}
                  </div>
                  <input ref={coverInputRef} type="file" accept="image/*" hidden onChange={async e => {
                    const file = e.target.files?.[0]
                    if (!file) return
                    const url = await uploadImage(file, 'covers')
                    if (url) setEditForm(f => ({ ...f, cover_url: url }))
                  }} />
                </div>

                <div className="edit-field">
                  <label>Name</label>
                  <input type="text" value={editForm.full_name} onChange={e => setEditForm(f => ({ ...f, full_name: e.target.value }))} placeholder="Your full name" />
                </div>

                <div className="edit-field">
                  <label>Username</label>
                  <input type="text" value={editForm.username} onChange={e => setEditForm(f => ({ ...f, username: e.target.value }))} placeholder="Your username" />
                </div>

                <div className="edit-field">
                  <label>Bio</label>
                  <textarea value={editForm.bio} onChange={e => setEditForm(f => ({ ...f, bio: e.target.value }))} placeholder="Tell your story" rows={3} />
                </div>

                <div className="edit-field">
                  <label>Website</label>
                  <input type="text" value={editForm.website} onChange={e => setEditForm(f => ({ ...f, website: e.target.value }))} placeholder="yourwebsite.com" />
                </div>
              </div>

              <div className="edit-modal-footer">
                <motion.button className="edit-btn-cancel" onClick={() => setShowEditModal(false)} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  Cancel
                </motion.button>
                <motion.button className="edit-btn-save" onClick={handleSaveProfile} disabled={saving} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  {saving ? 'Saving...' : 'Save Changes'}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            className={`toast toast-${toast.type}`}
            initial={{ opacity: 0, y: 50, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 20, x: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            {toast.type === 'success' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
              </svg>
            )}
            <span>{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{profileStyles}</style>
    </motion.div>
  )
}

const profileStyles = `
  .profile-page {
    max-width: 800px;
    margin: 0 auto;
    padding-bottom: 5rem;
  }

  .profile-cover {
    height: 160px;
    border-radius: 0 0 24px 24px;
    overflow: hidden;
    position: relative;
  }
  .profile-cover-bg {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(204,255,0,0.15), rgba(0,229,255,0.1), rgba(204,255,0,0.05));
  }
  .profile-back-btn {
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: 10;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(8, 8, 15, 0.5);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
    padding: 0;
    transition: all 0.25s ease;
    font-family: inherit;
  }
  .profile-back-btn:hover {
    background: rgba(8, 8, 15, 0.7);
    color: #fff;
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }
  .profile-back-btn:active {
    transform: scale(0.92);
  }

  .profile-info {
    padding: 0 1.5rem;
    margin-top: -40px;
    position: relative;
  }

  .profile-avatar-section {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .profile-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 700;
    color: var(--accent-text);
    border: 4px solid var(--bg);
    flex-shrink: 0;
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--accent) 20%, transparent);
    overflow: hidden;
  }
  .profile-avatar-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }
  .profile-edit-btn {
    padding: 0.45rem 1.2rem;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: var(--surface);
    color: color-mix(in srgb, var(--text) 70%, transparent);
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.2s;
    font-family: inherit;
    font-weight: 500;
  }
  .profile-edit-btn:hover {
    border-color: color-mix(in srgb, var(--accent) 40%, transparent);
    color: var(--accent);
    background: color-mix(in srgb, var(--accent) 6%, transparent);
  }

  .profile-follow-btn {
    padding: 0.45rem 1.2rem;
    border-radius: 8px;
    border: 1px solid var(--accent);
    background: var(--accent);
    color: var(--accent-text);
    font-size: 0.85rem;
    cursor: pointer;
    font-family: inherit;
    font-weight: 600;
    transition: all 0.2s;
  }
  .profile-follow-btn:hover {
    opacity: 0.85;
  }
  .profile-follow-btn.following {
    background: var(--surface);
    color: var(--text);
    border-color: var(--border);
  }

  .profile-settings-btn {
    width: 38px;
    height: 38px;
    border-radius: 12px;
    border: 1px solid var(--border);
    background: var(--surface);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    color: var(--text-secondary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    transition: all 0.2s;
    font-family: inherit;
    flex-shrink: 0;
  }
  .profile-settings-btn:hover {
    color: var(--accent);
    border-color: color-mix(in srgb, var(--accent) 30%, transparent);
  }
  .profile-settings-btn:active {
    transform: scale(0.92);
  }

  .profile-status-badge {
    position: absolute;
    bottom: 2px;
    right: 2px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 2.5px solid var(--bg);
    z-index: 2;
  }
  .profile-status-badge.online { background: #22c55e; }
  .profile-status-badge.offline { background: #6b7280; }

  .profile-details {
    margin-bottom: 1.25rem;
  }
  .profile-name {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text);
    margin: 0 0 0.15rem;
  }
  .profile-handle {
    font-size: 0.9rem;
    color: var(--text-secondary);
    display: block;
    margin-bottom: 0.5rem;
  }
  .profile-bio {
    font-size: 0.9rem;
    color: color-mix(in srgb, var(--text) 65%, transparent);
    line-height: 1.5;
    margin: 0 0 0.5rem;
  }
  .profile-website {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 0.85rem;
    color: var(--accent);
    text-decoration: none;
    font-weight: 500;
  }
  .profile-website:hover {
    text-decoration: underline;
  }

  .profile-stats {
    display: flex;
    gap: 2.5rem;
    padding: 1rem 0;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    margin-bottom: 0;
  }
  .profile-stat {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .profile-stat-value {
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--text);
  }
  .profile-stat-label {
    font-size: 0.75rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .profile-tabs {
    display: flex;
    align-items: center;
    gap: 0;
    padding: 0 1.5rem;
    border-bottom: 1px solid var(--border);
    position: relative;
  }
  .profile-tab {
    padding: 0.85rem 1.25rem;
    background: none;
    border: none;
    color: var(--text-secondary);
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    position: relative;
    font-family: inherit;
    transition: color 0.2s;
  }
  .profile-tab.active {
    color: var(--text);
  }
  .profile-tab-underline {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--accent);
    border-radius: 2px 2px 0 0;
  }

  .profile-view-toggle {
    margin-left: auto;
    display: flex;
    gap: 0.25rem;
  }
  .view-btn {
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    color: color-mix(in srgb, var(--text) 25%, transparent);
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.2s;
    padding: 0;
  }
  .view-btn svg {
    width: 18px;
    height: 18px;
  }
  .view-btn:hover {
    color: color-mix(in srgb, var(--text) 50%, transparent);
    background: var(--surface);
  }
  .view-btn.active {
    color: var(--accent);
    background: color-mix(in srgb, var(--accent) 8%, transparent);
  }

  .profile-content {
    padding: 1.25rem 1.5rem;
  }

  .profile-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
  }
  .profile-grid-item {
    position: relative;
    aspect-ratio: 1;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    background: var(--surface);
  }
  .profile-grid-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .grid-item-text {
    padding: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .grid-item-text p {
    font-size: 0.75rem;
    color: var(--text-secondary);
    text-align: center;
    margin: 0;
  }
  .grid-item-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
    font-size: 0.9rem;
    color: #fff;
    font-weight: 600;
  }
  .profile-grid-item:hover .grid-item-overlay {
    opacity: 1;
  }

  .profile-empty {
    text-align: center;
    padding: 3rem 0;
  }
  .profile-empty p {
    color: var(--text-secondary);
    font-size: 0.95rem;
  }

  /* Actions container */
  .profile-actions {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin-top: -24px;
  }

  /* Edit Modal */
  .edit-modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.6);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
  .edit-modal {
    background: var(--bg);
    border: 1px solid var(--glass-border);
    border-radius: 16px;
    max-width: 480px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    padding: 1.5rem;
    box-shadow: 0 25px 50px rgba(0,0,0,0.25);
  }
  .edit-modal::-webkit-scrollbar { width: 4px; }
  .edit-modal::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }
  .edit-modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
  }
  .edit-modal-header h2 {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text);
    margin: 0;
  }
  .edit-modal-close {
    width: 34px;
    height: 34px;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: var(--surface);
    color: var(--text-secondary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    font-family: inherit;
  }
  .edit-modal-body {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  .edit-field {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  .edit-field label {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  .edit-field input,
  .edit-field textarea {
    width: 100%;
    padding: 0.7rem 0.85rem;
    border: 1px solid var(--border);
    border-radius: 10px;
    background: var(--surface);
    color: var(--text);
    font-size: 0.9rem;
    font-family: inherit;
    outline: none;
    transition: border-color 0.2s;
    box-sizing: border-box;
  }
  .edit-field input:focus,
  .edit-field textarea:focus {
    border-color: var(--accent);
  }
  .edit-field textarea {
    resize: vertical;
    min-height: 80px;
  }
  .image-upload-area {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px dashed var(--border);
    overflow: hidden;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--surface);
    transition: border-color 0.2s;
  }
  .image-upload-area:hover {
    border-color: var(--accent);
  }
  .cover-upload-area {
    width: 100%;
    height: 120px;
    border-radius: 12px;
    border: 2px dashed var(--border);
    overflow: hidden;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--surface);
    transition: border-color 0.2s;
  }
  .cover-upload-area:hover {
    border-color: var(--accent);
  }
  .image-preview, .cover-preview {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .image-upload-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    color: var(--text-secondary);
    font-size: 0.7rem;
  }
  .image-upload-placeholder svg {
    opacity: 0.5;
  }
  .image-upload-spinner {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  .image-upload-spinner::after {
    content: '';
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255,255,255,0.3);
    border-top-color: var(--accent);
    border-radius: 50%;
    animation: modal-spin 0.7s linear infinite;
  }
  .edit-modal-footer {
    display: flex;
    gap: 0.75rem;
    justify-content: flex-end;
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid var(--border);
  }
  .edit-btn-cancel {
    padding: 0.6rem 1.25rem;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: var(--surface);
    color: var(--text-secondary);
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    font-family: inherit;
  }
  .edit-btn-save {
    padding: 0.6rem 1.25rem;
    border-radius: 10px;
    border: none;
    background: var(--accent);
    color: var(--accent-text);
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
  }
  .edit-btn-save:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* Toast */
  .toast {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.75rem 1.25rem;
    border-radius: 12px;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    font-size: 0.85rem;
    font-weight: 500;
    z-index: 200;
    box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  }
  .toast-success {
    background: rgba(34,197,94,0.12);
    border: 1px solid rgba(34,197,94,0.25);
    color: #22c55e;
  }
  .toast-error {
    background: rgba(239,68,68,0.12);
    border: 1px solid rgba(239,68,68,0.25);
    color: #ef4444;
  }

  @keyframes modal-spin {
    to { transform: rotate(360deg); }
  }

  @media (max-width: 600px) {
    .profile-grid { grid-template-columns: repeat(3, 1fr); gap: 4px; }
    .profile-info { padding: 0 1rem; }
    .profile-tabs { padding: 0 1rem; }
    .profile-content { padding: 1rem; }
    .profile-avatar { width: 68px; height: 68px; font-size: 1.6rem; }
    .profile-cover { height: 120px; }
    .profile-stats { gap: 1.5rem; }
    .profile-actions { margin-top: -16px; }
    .toast {
      bottom: 1rem;
      right: 1rem;
      left: 1rem;
    }
    .edit-modal { padding: 1.25rem; max-height: 85vh; }
  }
`
