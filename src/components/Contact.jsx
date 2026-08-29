import { useRef, useState } from 'react'
import Reveal from './Reveal'
import Icon from './Icon'
import { contact, inquiryPurposes, websiteNote, waLink, mailLink } from '../data'

/* Two blocks only. The column has to sit level with the form beside it, and a
   third block pushed it past the form's height — the map absorbs the balance. */
const INFO = [
  {
    icon: 'phone',
    title: 'Call Us',
    lines: contact.phones.slice(0, 2).map((p) => p.label),
    href: `tel:${contact.phones[0].tel}`,
  },
  {
    icon: 'pin',
    title: 'Visit Us',
    lines: contact.address,
    href: contact.mapUrl,
    external: true,
  },
]

function buildMessage(f) {
  const rows = [
    ['Name', f.name],
    ['Phone', f.phone],
    ['Email', f.email],
    ['City', f.city],
    ['Enquiry', f.purpose],
    ['Message', f.message],
  ].filter(([, v]) => v && String(v).trim())
  return `${websiteNote}\n\n${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}`
}

const EMPTY = { name: '', phone: '', email: '', city: '', purpose: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const formRef = useRef(null)

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  /* Both buttons are type="button" so neither triggers a page-reloading submit.
     Native validation still runs — reportValidity() shows the browser's own
     "please fill this in" bubbles before we hand off to WhatsApp or mail. */
  function send(channel) {
    if (!formRef.current.reportValidity()) return
    const message = buildMessage(form)
    if (channel === 'whatsapp') {
      window.open(waLink(message), '_blank', 'noopener')
    } else {
      window.location.href = mailLink(
        contact.emails[0],
        `Website enquiry — ${form.purpose || 'Guru Industries'}`,
        message
      )
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="section-inner">
        <div className="contact-panel">
          <div className="contact-grid">
            <div className="contact-info">
              <Reveal><p className="eyebrow"><span className="eyebrow-line" />Get In Touch</p></Reveal>
              <Reveal delay={0.05}><h2>Let's Build Your<br />Supply Line</h2></Reveal>
              <Reveal delay={0.1}>
                <p className="contact-lead">
                  Quotations, bulk supply, equipment rental or on-site plants —
                  our team responds fast.
                </p>
              </Reveal>

              <div className="info-list">
                {INFO.map((item, i) => {
                  const Tag = item.href ? 'a' : 'div'
                  const extra = item.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {}
                  return (
                    <Reveal key={item.title} delay={0.12 + i * 0.06}>
                      <Tag className="info-item" href={item.href} {...extra}>
                        <span className="info-icon"><Icon name={item.icon} size={19} /></span>
                        <span>
                          <strong>
                            {item.title}
                            {item.external && <Icon name="external" size={11} className="info-ext" />}
                          </strong>
                          {item.lines.map((l) => <span className="info-line" key={l}>{l}</span>)}
                        </span>
                      </Tag>
                    </Reveal>
                  )
                })}
              </div>

              <Reveal delay={0.26} y={16} className="map-block">
                <a className="map-link" href={contact.mapUrl} target="_blank" rel="noopener noreferrer">
                  Open in Google Maps <Icon name="external" size={13} />
                </a>
                <div className="map-frame">
                  <iframe
                    title="Guru Industries — Chandisar G.I.D.C., Palanpur"
                    src={contact.mapEmbed}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15} y={30} className="contact-form-wrap">
              <form className="contact-form" ref={formRef} onSubmit={(e) => e.preventDefault()}>
                <h3>Request a Quote</h3>
                <p className="form-sub">
                  Tell us what you need — volumes, location and timelines help us
                  quote accurately. Choose how you'd like to send it.
                </p>
                <div className="form-row">
                  <label>Name<input type="text" placeholder="Your name" required value={form.name} onChange={set('name')} /></label>
                  <label>Phone<input type="tel" placeholder="+91" required value={form.phone} onChange={set('phone')} /></label>
                </div>
                <div className="form-row">
                  <label>Email <em>(optional)</em><input type="email" placeholder="you@company.com" value={form.email} onChange={set('email')} /></label>
                  <label>City<input type="text" placeholder="Your city" value={form.city} onChange={set('city')} /></label>
                </div>
                <label>
                  Purpose of Inquiry
                  <select value={form.purpose} onChange={set('purpose')}>
                    <option value="" disabled>Select a product or service…</option>
                    {inquiryPurposes.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                </label>
                <label>Message<textarea rows="3" placeholder="Volumes, location, timelines…" value={form.message} onChange={set('message')}></textarea></label>

                <div className="form-actions">
                  <button type="button" className="btn btn-solid btn-lg" onClick={() => send('whatsapp')}>
                    Send on WhatsApp <Icon name="arrow" size={15} />
                  </button>
                  <button type="button" className="btn btn-ghost btn-lg" onClick={() => send('email')}>
                    Send by Email <Icon name="mail" size={15} />
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
