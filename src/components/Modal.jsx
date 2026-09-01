import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Icon from './Icon'

export default function Modal({ open, onClose, children, label, className = '' }) {
  const panelRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const previous = document.activeElement
    function onKey(e) {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key !== 'Tab' || !panelRef.current) return
      const items = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => panelRef.current?.focus(), 40)
    return () => {
      clearTimeout(t)
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      if (previous instanceof HTMLElement) previous.focus()
    }
  }, [open, onClose])

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(e) => { if (e.target === e.currentTarget) onClose() }}
        >
          <motion.div
            ref={panelRef}
            className={`modal-panel ${className}`}
            role="dialog"
            aria-modal="true"
            aria-label={label || 'Details'}
            tabIndex={-1}
            /* Lenis hijacks wheel events for the whole document; without this
               attribute the portal-rendered panel cannot be scrolled at all */
            data-lenis-prevent
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <button className="modal-close" aria-label="Close" onClick={onClose}>
              <Icon name="close" size={18} />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
