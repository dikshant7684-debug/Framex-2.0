import { useMemo } from 'react'
import { useFeedStore } from '../stores/feedStore'

export function useRealtimeMedia() {
  const posts = useFeedStore(s => s.posts)

  const galleryItems = useMemo(() => {
    return posts
      .filter(p => p.image_url)
      .map(p => ({
        id: `media_${p.id}`,
        imageUrl: p.image_url,
        title: p.content?.slice(0, 40) || 'New upload',
        uploadedAt: p.created_at ? new Date(p.created_at).getTime() : Date.now(),
      }))
  }, [posts])

  return { galleryItems }
}
