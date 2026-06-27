import { useEffect } from 'react'
import { useFeedStore } from '../stores/feedStore'
import { useAuthStore } from '../stores/authStore'

export function useRealtimeFeed() {
  const newPostsCount = useFeedStore(s => s.newPostsCount)
  const subscribeToPosts = useFeedStore(s => s.subscribeToPosts)
  const acknowledgeNewPosts = useFeedStore(s => s.acknowledgeNewPosts)
  const subscribeToEngagement = useFeedStore(s => s.subscribeToEngagement)
  const user = useAuthStore(s => s.user)

  useEffect(() => {
    subscribeToPosts()
  }, [subscribeToPosts])

  useEffect(() => {
    if (user) {
      const unsubscribe = subscribeToEngagement()
      return () => {
        if (typeof unsubscribe === 'function') unsubscribe()
      }
    }
  }, [user, subscribeToEngagement])

  return {
    newPosts: newPostsCount > 0 ? Array.from({ length: newPostsCount }) : [],
    postUpdates: {},
    clearNewPosts: acknowledgeNewPosts,
    feedEvents: [],
  }
}
