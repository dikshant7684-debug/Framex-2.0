import { useEffect, useRef, useCallback } from 'react'

export function useInfiniteScroll(loadMore, { threshold = 0.5, enabled = true } = {}) {
  const sentinelRef = useRef(null)

  useEffect(() => {
    if (!enabled) return
    const el = sentinelRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore()
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [loadMore, threshold, enabled])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return { sentinelRef, scrollToTop }
}
