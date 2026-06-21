import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Chat from './pages/Chat'
import Dashboard from './pages/Dashboard'
import Communities from './pages/Communities'
import Explore from './pages/Explore'
import Notifications from './pages/Notifications'
import Settings from './pages/Settings'
import ErrorBoundary from './components/ErrorBoundary'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import AppLayout from './components/AppLayout'

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<ProtectedRoute><Chat /></ProtectedRoute>} />
          <Route path="/home" element={<ProtectedRoute><AppLayout><Dashboard /></AppLayout></ProtectedRoute>} />
          <Route path="/communities" element={<ProtectedRoute><AppLayout><Communities /></AppLayout></ProtectedRoute>} />
          <Route path="/explore" element={<ProtectedRoute><AppLayout><Explore /></AppLayout></ProtectedRoute>} />
          <Route path="/notifications" element={<ProtectedRoute><AppLayout><Notifications /></AppLayout></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><AppLayout><Settings /></AppLayout></ProtectedRoute>} />
        </Routes>
      </AuthProvider>
    </ErrorBoundary>
  )
}
