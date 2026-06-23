import { motion, AnimatePresence } from 'framer-motion'
import { useUiStore } from '../stores/uiStore'

export default function ToastContainer() {
  const { toasts, removeToast } = useUiStore()

  return (
    <div className="toast-container">
      <AnimatePresence mode="popLayout">
        {toasts.map(toast => (
          <motion.div
            key={toast.id}
            className={`toast-pill toast-${toast.type}`}
            layout
            initial={{ opacity: 0, y: -40, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95, filter: 'blur(4px)' }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 28,
              mass: 0.8,
            }}
            onClick={() => removeToast(toast.id)}
          >
            {toast.type === 'success' && (
              <svg className="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="16 8 10 16 7 13" />
              </svg>
            )}
            {toast.type === 'error' && (
              <svg className="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
            )}
            {toast.type === 'info' && (
              <svg className="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            )}
            <span className="toast-message">{toast.message}</span>
          </motion.div>
        ))}
      </AnimatePresence>

      <style>{toastStyles}</style>
    </div>
  )
}

const toastStyles = `
  .toast-container {
    position: fixed;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    pointer-events: none;
    width: auto;
    max-width: calc(100vw - 32px);
  }

  .toast-pill {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 24px;
    border-radius: 100px;
    background: color-mix(in srgb, var(--bg-alt, #0a0a14) 75%, transparent);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid color-mix(in srgb, var(--border, #222) 60%, transparent);
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.35),
      0 2px 8px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 color-mix(in srgb, #fff 8%, transparent);
    pointer-events: auto;
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  .toast-icon {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }

  .toast-success .toast-icon {
    color: #22c55e;
  }

  .toast-error .toast-icon {
    color: #ef4444;
  }

  .toast-info .toast-icon {
    color: var(--accent, #CCFF00);
  }

  .toast-message {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--text, #eee);
    white-space: normal;
    word-break: break-word;
    overflow-wrap: break-word;
  }

  .toast-success .toast-message {
    color: #e8f5e9;
  }

  .toast-error .toast-message {
    color: #fce4ec;
  }

  .toast-info .toast-message {
    color: var(--text, #eee);
  }

  @media (max-width: 480px) {
    .toast-container {
      top: 12px;
      max-width: calc(100vw - 24px);
    }
    .toast-pill {
      padding: 10px 18px;
      gap: 8px;
    }
    .toast-message {
      font-size: 0.8125rem;
    }
  }
`
