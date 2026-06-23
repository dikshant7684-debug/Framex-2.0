import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Chat from './pages/Chat'
import HomeFeed from './pages/HomeFeed'
import Profile from './pages/Profile'
import Communities from './pages/Communities'
import Explore from './pages/Explore'
import Notifications from './pages/Notifications'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings'
import PostCreation from './pages/PostCreation'
import ErrorBoundary from './components/ErrorBoundary'
import { ThemeProvider } from './context/ThemeContext'
import { useAuthStore } from './stores/authStore'
import ProtectedRoute from './components/ProtectedRoute'
import AppLayout from './components/AppLayout'

export default function App() {
  const { isLoading } = useAuthStore()

  if (isLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#08080f',
        color: '#fff',
        fontFamily: 'system-ui, sans-serif',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <div className="app-loading-spinner" />
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>Loading...</p>
        <style>{`
          .app-loading-spinner {
            width: 32px; height: 32px;
            border: 2px solid rgba(255,255,255,0.06);
            border-top-color: #CCFF00;
            border-radius: 50%;
            animation: spin 0.7s linear infinite;
          }
          @keyframes spin { to { transform: rotate(360deg); } }
        `}</style>
      </div>
    )
  }

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<ProtectedRoute><Chat /></ProtectedRoute>} />
          <Route path="/home" element={<ProtectedRoute><AppLayout><HomeFeed /></AppLayout></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><AppLayout><Profile /></AppLayout></ProtectedRoute>} />
          <Route path="/profile/:id" element={<ProtectedRoute><AppLayout><Profile /></AppLayout></ProtectedRoute>} />
          <Route path="/communities" element={<ProtectedRoute><AppLayout><Communities /></AppLayout></ProtectedRoute>} />
          <Route path="/explore" element={<ProtectedRoute><AppLayout><Explore /></AppLayout></ProtectedRoute>} />
          <Route path="/notifications" element={<ProtectedRoute><AppLayout><Notifications /></AppLayout></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><AppLayout><Settings /></AppLayout></ProtectedRoute>} />
          <Route path="/analytics" element={<ProtectedRoute><AppLayout><Analytics /></AppLayout></ProtectedRoute>} />
          <Route path="/create" element={<ProtectedRoute><AppLayout><PostCreation /></AppLayout></ProtectedRoute>} />
        </Routes>
      </ThemeProvider>
    </ErrorBoundary>
  )
}
