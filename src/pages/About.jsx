import { useEffect } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const team = [
    { name: 'Alex Chen', role: 'CEO & Founder', icon: 'fa-user-tie' },
    { name: 'Sarah Mitchell', role: 'CTO', icon: 'fa-laptop-code' },
    { name: 'David Park', role: 'Head of Design', icon: 'fa-paint-brush' },
    { name: 'Emily Rodriguez', role: 'VP of Engineering', icon: 'fa-cogs' },
  ]

  const features = [
    { icon: 'fa-bolt', title: 'Lightning Fast', desc: 'Optimized for speed with sub-second response times across all platforms.' },
    { icon: 'fa-shield-alt', title: 'Secure by Design', desc: 'End-to-end encryption with enterprise-grade security protocols.' },
    { icon: 'fa-layer-group', title: 'Modular Architecture', desc: 'Plugin-based system that grows with your creative workflow.' },
    { icon: 'fa-robot', title: 'AI-Powered', desc: 'Intelligent suggestions and automation that learn from your style.' },
  ]

  return (
    <>
      <Nav />
      <div className="aurora-bg" />

      <main className="about-page">
        {/* ===== HERO ===== */}
        <section className="about-hero">
          <div className="about-hero-bg-glow" />
          <div className="about-hero-content">
            <span className="section-label reveal">About FrameX</span>
            <h1 className="about-hero-title reveal reveal-delay-1">
              Redefining <span className="lemon-text">Creative</span> Boundaries
            </h1>
            <p className="about-hero-sub reveal reveal-delay-2">
              We believe great design should be effortless. FrameX brings together
              cutting-edge AI, real-time collaboration, and intuitive tools to
              empower creators worldwide.
            </p>
            <div className="about-hero-stats reveal reveal-delay-3">
              <div className="stat-item">
                <span className="stat-number">50K+</span>
                <span className="stat-label">Active Users</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-number">99.9%</span>
                <span className="stat-label">Uptime</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-number">120+</span>
                <span className="stat-label">Countries</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== OUR STORY ===== */}
        <section className="about-section" id="our-story">
          <div className="about-container">
            <span className="section-label reveal">Our Story</span>
            <h2 className="section-title reveal">How FrameX Began</h2>
            <div className="story-card glass reveal reveal-delay-1">
              <div className="story-icon"><i className="fas fa-quote-left" /></div>
              <p className="story-text">
                FrameX was born in 2023 from a simple observation: creative tools were either
                powerful but complex, or simple but limiting. Our founders—engineers, designers,
                and artists—set out to build something different: a platform that combines
                professional-grade capabilities with an intuitive, joyful experience.
              </p>
              <p className="story-text">
                What started as a small project in a co-working space has grown into a global
                community of creators. Today, FrameX powers workflows for freelance designers,
                creative agencies, and enterprise teams across 120+ countries.
              </p>
              <div className="story-meta">
                <span><i className="fas fa-calendar" /> Founded 2023</span>
                <span><i className="fas fa-users" /> Team of 48</span>
                <span><i className="fas fa-globe" /> Global Reach</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== MISSION & VISION ===== */}
        <section className="about-section" id="mission-vision">
          <div className="about-container">
            <span className="section-label reveal">Mission &amp; Vision</span>
            <h2 className="section-title reveal">What Drives Us</h2>
            <div className="mv-grid">
              <div className="mv-card glass reveal reveal-delay-1">
                <div className="mv-icon"><i className="fas fa-bullseye" /></div>
                <h3>Our Mission</h3>
                <p>
                  To democratize creative technology by building tools that are
                  powerful enough for professionals yet accessible enough for
                  beginners. We remove barriers, not features.
                </p>
              </div>
              <div className="mv-card glass reveal reveal-delay-2">
                <div className="mv-icon"><i className="fas fa-eye" /></div>
                <h3>Our Vision</h3>
                <p>
                  A world where anyone can bring their creative vision to life
                  without wrestling with software. We envision FrameX as the
                  invisible bridge between imagination and creation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== WHAT MAKES FRAMEX DIFFERENT ===== */}
        <section className="about-section" id="what-makes-us-different">
          <div className="about-container">
            <span className="section-label reveal">Why FrameX</span>
            <h2 className="section-title reveal">What Makes Us Different</h2>
            <div className="features-grid">
              {features.map((f, i) => (
                <div key={f.title} className={`feature-card glass reveal reveal-delay-${i + 1}`}>
                  <div className="feature-card-icon"><i className={`fas ${f.icon}`} /></div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TEAM ===== */}
        <section className="about-section" id="team">
          <div className="about-container">
            <span className="section-label reveal">Leadership</span>
            <h2 className="section-title reveal">Meet the Team</h2>
            <div className="team-grid">
              {team.map((m, i) => (
                <div key={m.name} className={`team-card glass reveal reveal-delay-${i + 1}`}>
                  <div className="team-avatar"><i className={`fas ${m.icon}`} /></div>
                  <h3>{m.name}</h3>
                  <p className="team-role">{m.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== STARTUP INFO CARD ===== */}
        <section className="about-section" id="info">
          <div className="about-container">
            <span className="section-label reveal">Snapshot</span>
            <h2 className="section-title reveal">Startup at a Glance</h2>
            <div className="info-card glass reveal reveal-delay-1">
              <div className="info-grid">
                <div className="info-item">
                  <i className="fas fa-calendar-alt" />
                  <span className="info-label">Founded</span>
                  <span className="info-value">2023</span>
                </div>
                <div className="info-item">
                  <i className="fas fa-map-pin" />
                  <span className="info-label">Headquarters</span>
                  <span className="info-value">San Francisco, CA</span>
                </div>
                <div className="info-item">
                  <i className="fas fa-user-friends" />
                  <span className="info-label">Team Size</span>
                  <span className="info-value">48 Members</span>
                </div>
                <div className="info-item">
                  <i className="fas fa-trophy" />
                  <span className="info-label">Funding</span>
                  <span className="info-value">Series A</span>
                </div>
                <div className="info-item">
                  <i className="fas fa-rocket" />
                  <span className="info-label">Stage</span>
                  <span className="info-value">Growth</span>
                </div>
                <div className="info-item">
                  <i className="fas fa-handshake" />
                  <span className="info-label">Partners</span>
                  <span className="info-value">20+</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section className="about-section" id="contact">
          <div className="about-container">
            <span className="section-label reveal">Contact</span>
            <h2 className="section-title reveal">Get In Touch</h2>
            <div className="contact-content glass reveal reveal-delay-1">
              <p className="contact-text">
                Have a question, partnership idea, or just want to say hello?
                We'd love to hear from you.
              </p>
              <div className="contact-links">
                <a href="mailto:hello@framex.com" className="contact-link">
                  <i className="fas fa-envelope" /> hello@framex.com
                </a>
                <a href="tel:+1234567890" className="contact-link">
                  <i className="fas fa-phone" /> +1 (234) 567-890
                </a>
                <a href="#" className="contact-link">
                  <i className="fas fa-map-marker-alt" /> San Francisco, CA
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SOCIAL LINKS ===== */}
        <section className="about-section" id="social">
          <div className="about-container">
            <span className="section-label reveal">Community</span>
            <h2 className="section-title reveal">Follow Our Journey</h2>
            <div className="social-grid reveal reveal-delay-1">
              <a href="#" className="social-link glass"><i className="fab fa-twitter" /> Twitter / X</a>
              <a href="#" className="social-link glass"><i className="fab fa-github" /> GitHub</a>
              <a href="#" className="social-link glass"><i className="fab fa-linkedin-in" /> LinkedIn</a>
              <a href="#" className="social-link glass"><i className="fab fa-discord" /> Discord</a>
              <a href="#" className="social-link glass"><i className="fab fa-youtube" /> YouTube</a>
              <a href="#" className="social-link glass"><i className="fab fa-instagram" /> Instagram</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .about-page {
          padding-top: 5rem;
        }

        /* ===== HERO ===== */
        .about-hero {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 4rem 5%;
          overflow: hidden;
        }

        .about-hero-bg-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 600px;
          height: 600px;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(204, 255, 0, 0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .about-hero-content {
          max-width: 800px;
          position: relative;
          z-index: 1;
        }

        .about-hero-title {
          font-size: clamp(2.2rem, 6vw, 4rem);
          font-weight: 700;
          line-height: 1.15;
          margin-bottom: 1.5rem;
        }

        .lemon-text {
          color: var(--color-lemon);
        }

        .about-hero-sub {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: rgba(255, 255, 255, 0.6);
          max-width: 620px;
          margin: 0 auto 2.5rem;
          line-height: 1.8;
        }

        .about-hero-stats {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .stat-number {
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--color-lemon);
          font-family: var(--font-display);
        }

        .stat-label {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.08);
        }

        /* ===== SECTIONS ===== */
        .about-section {
          padding: var(--section-padding);
        }

        .about-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .section-title {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          margin-bottom: 3rem;
          font-weight: 700;
        }

        /* ===== STORY ===== */
        .story-card {
          padding: 3rem;
          position: relative;
        }

        .story-icon {
          font-size: 2rem;
          color: var(--color-lemon);
          opacity: 0.3;
          margin-bottom: 1rem;
        }

        .story-text {
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.8;
          margin-bottom: 1.2rem;
        }

        .story-text:last-of-type {
          margin-bottom: 2rem;
        }

        .story-meta {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .story-meta span {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.5);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .story-meta span i {
          color: var(--color-lemon);
          width: 16px;
        }

        /* ===== MISSION & VISION ===== */
        .mv-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .mv-card {
          padding: 2.5rem;
          text-align: center;
        }

        .mv-icon {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: rgba(204, 255, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          color: var(--color-lemon);
          margin: 0 auto 1.5rem;
        }

        .mv-card h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
        }

        .mv-card p {
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.8;
          font-size: 0.95rem;
        }

        /* ===== FEATURES GRID ===== */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.2rem;
        }

        .feature-card {
          padding: 2rem 1.5rem;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
        }

        .feature-card-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(204, 255, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          color: var(--color-lemon);
          margin: 0 auto 1.2rem;
        }

        .feature-card h3 {
          font-size: 1.05rem;
          margin-bottom: 0.6rem;
        }

        .feature-card p {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.55);
          line-height: 1.7;
        }

        /* ===== TEAM ===== */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.2rem;
        }

        .team-card {
          padding: 2rem 1.5rem;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-4px);
        }

        .team-avatar {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(204, 255, 0, 0.1);
          border: 2px solid rgba(204, 255, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          color: var(--color-lemon);
          margin: 0 auto 1.2rem;
        }

        .team-card h3 {
          font-size: 1rem;
          margin-bottom: 0.3rem;
        }

        .team-role {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.45);
        }

        /* ===== INFO CARD ===== */
        .info-card {
          padding: 3rem;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .info-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.3rem;
        }

        .info-item i {
          font-size: 1.5rem;
          color: var(--color-lemon);
          margin-bottom: 0.5rem;
        }

        .info-label {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.35);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .info-value {
          font-size: 1.05rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.85);
        }

        /* ===== CONTACT ===== */
        .contact-content {
          padding: 3rem;
          text-align: center;
        }

        .contact-text {
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.6);
          max-width: 520px;
          margin: 0 auto 2rem;
          line-height: 1.8;
        }

        .contact-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .contact-link {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .contact-link:hover {
          background: rgba(204, 255, 0, 0.08);
          border-color: rgba(204, 255, 0, 0.2);
          color: var(--color-lemon);
          transform: translateY(-2px);
        }

        .contact-link i {
          font-size: 1rem;
        }

        /* ===== SOCIAL ===== */
        .social-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .social-grid .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 1.2rem;
          border-radius: 12px;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.65);
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-grid .social-link:hover {
          background: rgba(204, 255, 0, 0.06);
          border-color: rgba(204, 255, 0, 0.15);
          color: var(--color-lemon);
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }

        .social-grid .social-link i {
          font-size: 1.2rem;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 968px) {
          .features-grid,
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .info-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .about-hero {
            min-height: auto;
            padding: 3rem 5%;
          }

          .about-hero-stats {
            flex-direction: column;
            gap: 1rem;
          }

          .stat-divider {
            width: 40px;
            height: 1px;
          }

          .stat-number {
            font-size: 1.3rem;
          }

          .mv-grid {
            grid-template-columns: 1fr;
          }

          .story-card {
            padding: 2rem;
          }

          .story-meta {
            flex-direction: column;
            gap: 0.75rem;
          }

          .info-card {
            padding: 2rem;
          }

          .contact-content {
            padding: 2rem;
          }

          .contact-links {
            flex-direction: column;
            align-items: center;
          }

          .social-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .about-section {
            padding: 4rem 5%;
          }

          .features-grid,
          .team-grid {
            grid-template-columns: 1fr;
          }

          .info-grid {
            grid-template-columns: 1fr;
          }

          .social-grid {
            grid-template-columns: 1fr;
          }

          .team-card,
          .feature-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  )
}
