import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Icon from './Icon'
import Logo from './Logo'
import { contact, mailLink } from '../data'

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#products', label: 'Products' },
  { href: '#services', label: 'Services' },
  { href: '#clients', label: 'Clients' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`site-header ${scrolled ? 'is-scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="topbar">
        <div className="topbar-inner">
          <a href={contact.mapUrl} target="_blank" rel="noopener noreferrer" className="topbar-address">
            <Icon name="pin" size={13} /> Chandisar G.I.D.C., Palanpur, Gujarat
            <Icon name="external" size={11} className="topbar-ext" />
          </a>
          {/* one address only — the number lives in the nav bar below, and the
              second address is in the footer */}
          <div className="topbar-right">
            <a href={mailLink()}><Icon name="mail" size={13} /> {contact.emails[0]}</a>
          </div>
        </div>
      </div>

      <div className="nav-bar">
        <div className="nav-inner">
          <a href="#home" className="brand" aria-label="Guru Industries — home">
            <Logo height={51} />
          </a>

          <nav className={`main-nav ${open ? 'is-open' : ''}`}>
            {LINKS.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: -14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                {l.label}
              </motion.a>
            ))}
          </nav>

          <div className="nav-actions">
            {/* the quote CTA lived here and duplicated the hero's. A tap-to-call
                does not, and it stays reachable after the topbar collapses. */}
            <a className="nav-phone" href={`tel:${contact.phones[0].tel}`}>
              <Icon name="phone" size={15} />
              <span className="nav-phone-num">{contact.phones[0].label}</span>
            </a>
            <button className={`burger ${open ? 'is-open' : ''}`} aria-label="menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
