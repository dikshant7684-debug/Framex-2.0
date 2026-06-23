import { useEffect } from 'react'
import { useFeedStore } from '../stores/feedStore'

export function useRealtimeFeed() {
  const newPostsCount = useFeedStore(s => s.newPostsCount)
  const subscribeToPosts = useFeedStore(s => s.subscribeToPosts)
  const acknowledgeNewPosts = useFeedStore(s => s.acknowledgeNewPosts)

  useEffect(() => {
    subscribeToPosts()
  }, [subscribeToPosts])

  return {
    newPosts: newPostsCount > 0 ? Array.from({ length: newPostsCount }) : [],
    postUpdates: {},
    clearNewPosts: acknowledgeNewPosts,
    feedEvents: [],
  }
}
