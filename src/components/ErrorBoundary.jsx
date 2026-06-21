import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info)
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#08080f',
          color: '#fff',
          fontFamily: 'system-ui, sans-serif',
          padding: '2rem'
        }}>
          <div style={{
            maxWidth: 480,
            padding: '2rem',
            background: 'rgba(255,255,255,0.04)',
            borderRadius: 16,
            border: '1px solid rgba(255,255,255,0.08)'
          }}>
            <h2 style={{ margin: '0 0 0.75rem', fontSize: '1.25rem' }}>Something went wrong</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', margin: 0 }}>
              {this.state.error.message}
            </p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
