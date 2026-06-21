import { useEffect, useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'

export default function Nav() {
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) target.scrollIntoView({ behavior: 'smooth' })
      })
    })
  }, [])

  const closeMenu = () => setMenuOpen(false)

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeMenu() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="logo">
        <div className="logo-icon">F</div>
        <h1>FrameX</h1>
      </div>
      <ul>
        {isHome ? (
          <>
            <li><a href="#features" onClick={closeMenu}>Features</a></li>
            <li><a href="#community" onClick={closeMenu}>Community</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#pricing" onClick={closeMenu}>Pricing</a></li>
          </>
        ) : (
          <li><Link to="/" className="back-home-link" onClick={closeMenu}>← Back to Home</Link></li>
        )}
      </ul>
      <div className="nav-right">
        {isHome && (
          <div className="auth-buttons">
            <button className="login" onClick={() => navigate('/login')}>Log In</button>
            <button className="get-started" onClick={() => navigate('/login')}>Get Started</button>
          </div>
        )}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`menu-toggle-icon ${menuOpen ? 'fas fa-times' : 'fas fa-bars'}`} />
        </button>
      </div>
      <style>{`
        nav {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.8rem 5%;
            background: rgba(8, 8, 15, 0.6);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border-bottom: var(--glass-border);
            transition: background 0.3s ease;
        }

        nav.scrolled {
            background: rgba(8, 8, 15, 0.85);
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .logo-icon {
            width: 32px;
            height: 32px;
            border-radius: 8px;
            background: var(--gradient-accent);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.9rem;
            font-weight: 700;
            color: #08080f;
        }

        .logo h1 {
            font-family: var(--font-display);
            font-size: 1.4rem;
            font-weight: 700;
            background: var(--gradient-accent);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        nav ul {
            display: flex;
            gap: 2.5rem;
        }

        nav ul li a {
            font-size: 0.9rem;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.6);
            transition: color 0.3s ease;
            position: relative;
            letter-spacing: 0.02em;
        }

        nav ul li a::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 1.5px;
            background: var(--gradient-accent);
            transition: width 0.3s ease;
            border-radius: 2px;
        }

        nav ul li a:hover {
            color: #fff;
        }

        nav ul li a:hover::after {
            width: 100%;
        }

        .auth-buttons {
            display: flex;
            gap: 0.75rem;
        }

        .nav-right {
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }

        .menu-toggle {
            display: none;
            width: 44px;
            height: 44px;
            align-items: center;
            justify-content: center;
            background: var(--color-glass);
            border: var(--glass-border);
            border-radius: 12px;
            color: rgba(255, 255, 255, 0.7);
            font-size: 1.3rem;
            cursor: pointer;
            transition: all 0.3s ease;
            padding: 0;
            -webkit-tap-highlight-color: transparent;
            user-select: none;
        }

        .menu-toggle:hover {
            background: var(--color-glass-hover);
            color: #fff;
        }

        .menu-toggle:active {
            transform: scale(0.92);
        }

        .menu-toggle-icon {
            transition: transform 0.3s ease;
        }

        .menu-toggle-icon.fa-times {
            transform: rotate(90deg);
        }

        .login {
            padding: 0.5rem 1.5rem;
            background: var(--color-glass);
            color: rgba(255, 255, 255, 0.85);
            border: var(--glass-border);
            border-radius: 8px;
            font-size: 0.85rem;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .login:hover {
            background: var(--color-glass-hover);
            border-color: rgba(255, 255, 255, 0.2);
        }

        .signup,
        .get-started {
            padding: 0.5rem 1.5rem;
            background: var(--gradient-accent);
            color: #08080f;
            border-radius: 8px;
            font-size: 0.85rem;
            font-weight: 600;
            transition: all 0.3s ease;
        }

        .signup:hover,
        .get-started:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 20px rgba(204, 255, 0, 0.25);
        }

        @media (max-width: 968px) {
            nav ul {
                gap: 1.5rem;
            }
            nav ul li a {
                font-size: 0.8rem;
            }
            .auth-buttons .login,
            .auth-buttons .get-started {
                padding: 0.4rem 1rem;
                font-size: 0.78rem;
            }
            .logo h1 {
                font-size: 1.2rem;
            }
        }

        @media (max-width: 768px) {
            nav {
                padding: 0.7rem 5%;
            }
            nav ul {
                display: none;
            }
            .nav-right .auth-buttons {
                display: none;
            }
            .menu-toggle {
                display: flex;
            }

            /* Drawer backdrop */
            .mobile-backdrop {
                position: fixed;
                inset: 0;
                background: rgba(0, 0, 0, 0.65);
                backdrop-filter: blur(6px);
                -webkit-backdrop-filter: blur(6px);
                z-index: 1001;
                opacity: 0;
                pointer-events: none;
                transition: opacity 0.3s ease;
            }
            .mobile-backdrop.active {
                opacity: 1;
                pointer-events: all;
            }

            /* Drawer panel */
            .mobile-drawer {
                position: fixed;
                top: 0;
                right: 0;
                width: 82%;
                max-width: 380px;
                height: 100vh;
                height: 100dvh;
                background: rgba(10, 10, 22, 0.96);
                backdrop-filter: blur(40px);
                -webkit-backdrop-filter: blur(40px);
                border-left: 1px solid rgba(255, 255, 255, 0.06);
                z-index: 1002;
                transform: translateX(100%);
                transition: transform 0.3s ease-in-out;
                display: flex;
                flex-direction: column;
                padding: 2rem 1.5rem;
                box-shadow: -10px 0 40px rgba(0, 0, 0, 0.3);
            }
            .mobile-drawer.active {
                transform: translateX(0);
            }

            /* Close button */
            .drawer-close {
                position: absolute;
                top: 1rem;
                right: 1.25rem;
                width: 44px;
                height: 44px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(255, 255, 255, 0.04);
                border: 1px solid rgba(255, 255, 255, 0.06);
                border-radius: 12px;
                color: rgba(255, 255, 255, 0.5);
                font-size: 1.3rem;
                cursor: pointer;
                transition: all 0.3s ease;
                -webkit-tap-highlight-color: transparent;
                user-select: none;
                padding: 0;
            }
            .drawer-close:hover {
                background: rgba(255, 255, 255, 0.1);
                color: #fff;
            }
            .drawer-close:active {
                transform: scale(0.92);
            }

            /* Menu items */
            .drawer-menu-items {
                display: flex;
                flex-direction: column;
                gap: 0.25rem;
                margin-top: 5rem;
            }
            .drawer-menu-items a {
                display: flex;
                align-items: center;
                min-height: 48px;
                padding: 0.75rem 1rem;
                font-size: 1.05rem;
                font-weight: 400;
                color: rgba(255, 255, 255, 0.55);
                text-decoration: none;
                border-radius: 12px;
                transition: all 0.25s ease;
                letter-spacing: 0.02em;
                -webkit-tap-highlight-color: transparent;
            }
            .drawer-menu-items a:hover {
                color: #fff;
                background: rgba(255, 255, 255, 0.04);
            }
            .drawer-menu-items a:active {
                color: #fff;
                background: rgba(255, 255, 255, 0.08);
                transform: scale(0.98);
            }

            /* Accent bar on hover */
            .drawer-menu-items a::before {
                content: '';
                width: 3px;
                height: 0;
                background: var(--color-lemon);
                border-radius: 2px;
                margin-right: 0.75rem;
                transition: height 0.25s ease;
                flex-shrink: 0;
            }
            .drawer-menu-items a:hover::before {
                height: 20px;
            }

            /* CTA button */
            .drawer-cta {
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 48px;
                margin-top: 2rem;
                padding: 0.75rem 2rem;
                background: var(--color-lemon);
                color: #08080f !important;
                border-radius: 12px;
                font-size: 1.1rem;
                font-weight: 600;
                text-decoration: none;
                transition: all 0.3s ease;
                -webkit-tap-highlight-color: transparent;
            }
            .drawer-cta:hover {
                transform: translateY(-1px);
                box-shadow: 0 4px 24px rgba(204, 255, 0, 0.25);
                background: #d4ff1a;
            }
            .drawer-cta:active {
                transform: scale(0.97);
            }
        }

        @media (max-width: 480px) {
            .signup,
            .get-started {
                display: none;
            }
        }
      `}</style>
    </nav>
    <div className={`mobile-backdrop ${menuOpen ? 'active' : ''}`} onClick={closeMenu} />
    <div className={`mobile-drawer ${menuOpen ? 'active' : ''}`}>
      <button className="drawer-close" onClick={closeMenu} aria-label="Close menu">
        <i className="fas fa-times" />
      </button>
      <div className="drawer-menu-items">
        <a href="#features" onClick={closeMenu}>Features</a>
        <a href="#community" onClick={closeMenu}>Community</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#pricing" onClick={closeMenu}>Pricing</a>
        <a href="#get-started" className="drawer-cta" onClick={closeMenu}>Get Started</a>
      </div>
    </div>
    </>
  )
}
