import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'

const ThemeContext = createContext()

const STORAGE_KEY = 'framex-theme'

const darkVars = {
  '--bg': '#08080f',
  '--bg-alt': '#0c0c18',
  '--text': '#ffffff',
  '--text-secondary': 'rgba(255,255,255,0.4)',
  '--surface': 'rgba(255,255,255,0.05)',
  '--surface-hover': 'rgba(255,255,255,0.10)',
  '--border': 'rgba(255,255,255,0.08)',
  '--accent': '#CCFF00',
  '--accent-text': '#08080f',
  '--danger': '#ff4d4d',
  '--glass-bg': 'rgba(255,255,255,0.05)',
  '--glass-border': 'rgba(255,255,255,0.08)',
}

const lightVars = {
  '--bg': '#ffffff',
  '--bg-alt': '#f5f5f7',
  '--text': '#111111',
  '--text-secondary': 'rgba(0,0,0,0.45)',
  '--surface': 'rgba(0,0,0,0.03)',
  '--surface-hover': 'rgba(0,0,0,0.06)',
  '--border': 'rgba(0,0,0,0.08)',
  '--accent': '#a0cc00',
  '--accent-text': '#ffffff',
  '--danger': '#e03030',
  '--glass-bg': 'rgba(255,255,255,0.7)',
  '--glass-border': 'rgba(0,0,0,0.06)',
}

function applyTheme(resolved) {
  const vars = resolved === 'light' ? lightVars : darkVars
  const root = document.documentElement
  Object.entries(vars).forEach(([key, val]) => root.style.setProperty(key, val))
  root.setAttribute('data-theme', resolved)
}

function getPreferredTheme() {
  if (typeof window === 'undefined') return 'dark'
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored === 'dark' || stored === 'light' || stored === 'system') return stored
    } catch {}
    return 'dark'
  })

  const [resolvedTheme, setResolvedTheme] = useState(() => {
    if (theme === 'system') return getPreferredTheme()
    return theme
  })

  const setTheme = useCallback((t) => {
    setThemeState(t)
    try { localStorage.setItem(STORAGE_KEY, t) } catch {}
  }, [])

  const location = useLocation()

  // Apply theme whenever resolvedTheme changes
  useEffect(() => {
    if (location.pathname === '/') {
      applyTheme('dark')
    } else {
      applyTheme(resolvedTheme)
    }
  }, [resolvedTheme, location.pathname])

  // Re-resolve when theme setting changes
  useEffect(() => {
    if (theme === 'system') {
      setResolvedTheme(getPreferredTheme())
    } else {
      setResolvedTheme(theme)
    }
  }, [theme])

  // Listen for OS preference changes when in system mode
  useEffect(() => {
    if (theme !== 'system') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => setResolvedTheme(getPreferredTheme())
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [theme])

  // Smooth transitions on theme switch
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      *, *::before, *::after {
        transition: background-color 0.3s ease, color 0.3s ease,
                    border-color 0.3s ease, box-shadow 0.3s ease,
                    backdrop-filter 0.3s ease !important;
      }
    `
    style.id = 'theme-transition-style'
    const existing = document.getElementById('theme-transition-style')
    if (existing) existing.remove()
    document.head.appendChild(style)

    const timeout = setTimeout(() => {
      const el = document.getElementById('theme-transition-style')
      if (el) el.remove()
    }, 400)

    return () => {
      clearTimeout(timeout)
      const el = document.getElementById('theme-transition-style')
      if (el) el.remove()
    }
  }, [resolvedTheme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
