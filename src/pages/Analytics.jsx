import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRealtimeAnalytics } from '../hooks/useRealtimeAnalytics'
import ConnectionStatus from '../components/ConnectionStatus'

const metricIcons = {
  liveViewers: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  activeUsers: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  totalUsers: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  postsPerMinute: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>,
  engagementRate: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  dailyActiveUsers: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  newSignupsToday: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>,
  avgSessionDuration: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
}

const metricLabels = {
  liveViewers: 'Live Viewers',
  activeUsers: 'Active Users',
  totalUsers: 'Total Users',
  postsPerMinute: 'Posts / Min',
  engagementRate: 'Engagement Rate',
  dailyActiveUsers: 'DAU',
  newSignupsToday: 'New Signups',
  avgSessionDuration: 'Avg Session',
}

const metricColors = {
  liveViewers: '#CCFF00',
  activeUsers: '#60a5fa',
  totalUsers: '#a78bfa',
  postsPerMinute: '#f472b6',
  engagementRate: '#34d399',
  dailyActiveUsers: '#fbbf24',
  newSignupsToday: '#fb923c',
  avgSessionDuration: '#22d3ee',
}

function MiniSparkline({ value, color }) {
  const points = Array.from({ length: 20 }, (_, i) => {
    const base = value * (1 + (Math.random() - 0.5) * 0.4)
    return { x: i * 5, y: 30 - (base / 100) * 25 }
  })
  const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ')
  return (
    <svg width="100" height="30" style={{ flexShrink: 0 }}>
      <path d={path} fill="none" stroke={color} strokeWidth="1.5" opacity="0.6" />
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="1.5" fill={color} opacity="0.4" />
      ))}
    </svg>
  )
}

function MetricCard({ metricKey, metric, index }) {
  const color = metricColors[metricKey] || '#CCFF00'
  const current = typeof metric.current === 'number' ? metric.current.toLocaleString() : metric.current
  const isUp = metric.change?.startsWith?.('+')

  return (
    <motion.div
      className="analytics-card glass"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, type: 'spring', stiffness: 100 }}
    >
      <div className="analytics-card-header">
        <div className="analytics-card-icon" style={{ background: `${color}15`, color }}>
          {metricIcons[metricKey]}
        </div>
        <span className="analytics-card-change" style={{ color: isUp ? '#34d399' : '#f87171' }}>
          {metric.change}
        </span>
      </div>
      <div className="analytics-card-value">{current}</div>
      <div className="analytics-card-label">{metricLabels[metricKey]}</div>
      <MiniSparkline value={typeof metric.current === 'number' ? metric.current : parseInt(metric.current) || 50} color={color} />
    </motion.div>
  )
}

export default function Analytics() {
  const { analyticsData } = useRealtimeAnalytics()
  const [timeRange, setTimeRange] = useState('1h')

  const entries = Object.entries(analyticsData)
  const primaryMetrics = entries.slice(0, 4)
  const secondaryMetrics = entries.slice(4)

  return (
    <div className="page-enter">
      <div className="analytics-dashboard">
        <div className="analytics-header">
          <div>
            <h1 className="analytics-title">Live Analytics</h1>
            <p className="analytics-subtitle">Real-time dashboard metrics</p>
          </div>
          <div className="analytics-header-right">
            <ConnectionStatus variant="sidebar" />
            <div className="analytics-time-selector">
              {['1h', '24h', '7d', '30d'].map(r => (
                <button
                  key={r}
                  className={`analytics-time-btn ${timeRange === r ? 'active' : ''}`}
                  onClick={() => setTimeRange(r)}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="analytics-primary-grid">
          {primaryMetrics.map(([key, metric], i) => (
            <MetricCard key={key} metricKey={key} metric={metric} index={i} />
          ))}
        </div>

        <div className="analytics-secondary-grid">
          {secondaryMetrics.map(([key, metric], i) => (
            <MetricCard key={key} metricKey={key} metric={metric} index={i + 4} />
          ))}
        </div>

        <div className="analytics-footer glass">
          <div className="analytics-footer-dot" />
          <span>All metrics updating in real-time • Auto-refresh enabled</span>
        </div>
      </div>

      <style>{analyticsStyles}</style>
    </div>
  )
}

const analyticsStyles = `
  .analytics-dashboard {
    padding: 1.5rem;
    max-width: 960px;
    margin: 0 auto;
    animation: fadeSlideUp 0.5s ease;
  }
  .analytics-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .analytics-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 1.75rem;
    font-weight: 700;
    color: #fff;
    margin: 0;
  }
  .analytics-subtitle {
    color: rgba(255,255,255,0.4);
    font-size: 0.85rem;
    margin: 0.25rem 0 0;
  }
  .analytics-header-right {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .analytics-time-selector {
    display: flex;
    background: rgba(255,255,255,0.05);
    border-radius: 10px;
    padding: 3px;
    gap: 2px;
  }
  .analytics-time-btn {
    padding: 0.35rem 0.75rem;
    border: none;
    border-radius: 7px;
    background: transparent;
    color: rgba(255,255,255,0.4);
    font-size: 0.8rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    font-family: inherit;
  }
  .analytics-time-btn.active {
    background: rgba(204,255,0,0.15);
    color: #CCFF00;
  }
  .analytics-time-btn:hover:not(.active) { color: rgba(255,255,255,0.7); }

  .analytics-primary-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin-bottom: 1rem;
  }
  .analytics-secondary-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  .analytics-card {
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: relative;
    overflow: hidden;
  }
  .analytics-card:hover {
    transform: translateY(-2px);
    border-color: rgba(255,255,255,0.15);
  }
  .glass {
    background: rgba(255,255,255,0.05);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 16px;
    transition: all 0.3s ease;
  }
  .analytics-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .analytics-card-icon {
    width: 32px; height: 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .analytics-card-icon svg { width: 16px; height: 16px; }
  .analytics-card-change {
    font-size: 0.75rem;
    font-weight: 600;
    font-family: monospace;
  }
  .analytics-card-value {
    font-size: 1.75rem;
    font-weight: 700;
    color: #fff;
    font-family: monospace;
    line-height: 1;
  }
  .analytics-card-label {
    font-size: 0.8rem;
    color: rgba(255,255,255,0.4);
    font-weight: 500;
  }

  .analytics-footer {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1.25rem;
  }
  .analytics-footer-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: #22c55e;
    animation: connectionPulse 2s infinite;
  }
  .analytics-footer span {
    font-size: 0.8rem;
    color: rgba(255,255,255,0.3);
  }

  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes connectionPulse {
    0%, 100% { opacity: 1; box-shadow: 0 0 4px #22c55e; }
    50% { opacity: 0.5; box-shadow: 0 0 8px #22c55e; }
  }

  @media (max-width: 768px) {
    .analytics-primary-grid { grid-template-columns: repeat(2, 1fr); }
    .analytics-secondary-grid { grid-template-columns: repeat(2, 1fr); }
    .analytics-header { flex-direction: column; }
    .analytics-card-value { font-size: 1.4rem; }
  }
  @media (max-width: 480px) {
    .analytics-primary-grid, .analytics-secondary-grid { grid-template-columns: 1fr; }
    .analytics-dashboard { padding: 1rem; }
  }
`
