import Icon from './Icon'
import Logo from './Logo'
import { contact, products, services, mailLink } from '../data'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-inner footer-grid">
        <div className="footer-brand">
          <a href="#home" className="brand" aria-label="Guru Industries — home">
            <Logo height={64} />
          </a>
          <p>
            Leading manufacturer, trader &amp; supplier of industrial gases,
            medical gases &amp; chemicals since 2011 — serving the Indian
            subcontinent with globally benchmarked quality.
          </p>
          <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
            <span className="wa-dot" /> WhatsApp Chat
          </a>
        </div>

        <div className="footer-col">
          <h4>Products</h4>
          <ul>
            {products.slice(0, 6).map((p) => (
              <li key={p.name}><a href="#products">{p.name}</a></li>
            ))}
            <li><a href="#products" className="footer-more">View all {products.length} products <Icon name="arrow" size={12} /></a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            {services.map((s) => (
              <li key={s.title}><a href="#services">{s.title}</a></li>
            ))}
            <li><a href="#about">About Us</a></li>
            <li><a href="#clients">Our Clients</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="footer-contact">
            {contact.phones.map((p) => (
              <li key={p.tel}>
                <Icon name="phone" size={14} />
                <a href={`tel:${p.tel}`}>{p.label}</a>
              </li>
            ))}
            {contact.emails.map((e) => (
              <li key={e}>
                <Icon name="mail" size={14} />
                <a href={mailLink(e)}>{e}</a>
              </li>
            ))}
            <li>
              <Icon name="pin" size={14} />
              <a href={contact.mapUrl} target="_blank" rel="noopener noreferrer">
                {contact.address.join(' ')}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bar">
        <div className="section-inner footer-bar-inner">
          <p>© {new Date().getFullYear()} Guru Industries. All rights reserved.</p>
          <p>Industrial Gases · Medical Gases · Chemicals</p>
        </div>
      </div>
    </footer>
  )
}
