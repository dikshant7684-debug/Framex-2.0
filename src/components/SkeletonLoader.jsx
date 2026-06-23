import { motion } from 'framer-motion'

export function PostSkeleton() {
  return (
    <div className="feed-post-skeleton">
      <div className="skeleton-header">
        <div className="skeleton-circle" />
        <div className="skeleton-lines">
          <div className="skeleton-line w-40" />
          <div className="skeleton-line w-24" />
        </div>
      </div>
      <div className="skeleton-body">
        <div className="skeleton-line w-100" />
        <div className="skeleton-line w-80" />
      </div>
      <div className="skeleton-image" />
      <div className="skeleton-actions">
        <div className="skeleton-line w-20" />
        <div className="skeleton-line w-20" />
        <div className="skeleton-line w-20" />
      </div>
      <style>{skeletonStyles}</style>
    </div>
  )
}

export function StorySkeleton() {
  return (
    <div className="story-skeleton">
      <div className="skeleton-circle lg" />
      <div className="skeleton-line w-16" />
      <style>{skeletonStyles}</style>
    </div>
  )
}

const skeletonStyles = `
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  .feed-post-skeleton {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 16px;
    padding: 1.25rem;
    margin-bottom: 1rem;
  }

  .skeleton-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }

  .skeleton-circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(90deg, rgba(255,255,255,0.06) 25%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.06) 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s ease-in-out infinite;
    flex-shrink: 0;
  }

  .skeleton-circle.lg {
    width: 56px;
    height: 56px;
  }

  .skeleton-lines {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .skeleton-line {
    height: 12px;
    border-radius: 6px;
    background: linear-gradient(90deg, rgba(255,255,255,0.06) 25%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.06) 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s ease-in-out infinite;
  }

  .skeleton-line.w-16 { width: 64px; }
  .skeleton-line.w-20 { width: 80px; }
  .skeleton-line.w-24 { width: 96px; }
  .skeleton-line.w-40 { width: 160px; }
  .skeleton-line.w-80 { width: 80%; }
  .skeleton-line.w-100 { width: 100%; }

  .skeleton-body {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .skeleton-image {
    width: 100%;
    height: 300px;
    border-radius: 12px;
    background: linear-gradient(90deg, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.04) 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s ease-in-out infinite;
    margin-bottom: 1rem;
  }

  .skeleton-actions {
    display: flex;
    gap: 1.5rem;
  }

  .story-skeleton {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
  }
`
