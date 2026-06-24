import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const BODY_WIDTH = 140

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
)

export default function SlideFab() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="slide-fab-wrap">
      <motion.div
        className="slide-fab-inner"
        drag="x"
        dragConstraints={{ left: 0, right: BODY_WIDTH }}
        dragElastic={0.15}
        onDragEnd={(_, info) => {
          if (info.offset.x < -30 || info.velocity.x < -20) {
            setIsOpen(true)
          } else if (info.offset.x > 20 || info.velocity.x > 20) {
            setIsOpen(false)
          }
        }}
        animate={{ x: isOpen ? 0 : BODY_WIDTH }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        onTap={() => {
          if (isOpen) navigate('/create')
          else setIsOpen(true)
        }}
        whileTap={{ scale: 0.94 }}
        layout
      >
        <div className="slide-fab-body">
          <span className="slide-fab-body-icon"><PlusIcon /></span>
          <span className="slide-fab-body-text">Create Post</span>
        </div>
        <div className="slide-fab-tab">
          <PlusIcon />
        </div>
      </motion.div>
      <style>{styles}</style>
    </div>
  )
}

const styles = `
  .slide-fab-wrap {
    position: fixed;
    right: 0;
    top: 35%;
    transform: translateY(-50%);
    z-index: 1000;
    pointer-events: none;
  }

  .slide-fab-inner {
    display: flex;
    align-items: center;
    pointer-events: auto;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    touch-action: pan-y;
  }

  .slide-fab-tab {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--accent);
    color: var(--accent-text);
    border-radius: 12px 0 0 12px;
    box-shadow: -2px 2px 12px color-mix(in srgb, var(--accent) 25%, transparent);
    flex-shrink: 0;
  }
  .slide-fab-tab svg {
    width: 22px;
    height: 22px;
  }

  .slide-fab-body {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    height: 44px;
    padding: 0 0.75rem 0 1rem;
    background: var(--accent);
    color: var(--accent-text);
    flex-shrink: 0;
    white-space: nowrap;
    border-radius: 12px 0 0 12px;
  }
  .slide-fab-body-icon svg {
    width: 18px;
    height: 18px;
  }
  .slide-fab-body-text {
    font-size: 0.85rem;
    font-weight: 600;
    font-family: inherit;
  }

  @media (min-width: 768px) {
    .slide-fab-wrap {
      display: none;
    }
  }
`
