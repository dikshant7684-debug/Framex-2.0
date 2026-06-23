import { useEffect } from 'react'
import { useAnalyticsStore } from '../stores/analyticsStore'

export function useRealtimeAnalytics() {
  const analyticsData = useAnalyticsStore(s => s.metrics)
  const fetchMetrics = useAnalyticsStore(s => s.fetchMetrics)

  useEffect(() => {
    if (!analyticsData) fetchMetrics()
  }, [analyticsData, fetchMetrics])

  return { analyticsData }
}
