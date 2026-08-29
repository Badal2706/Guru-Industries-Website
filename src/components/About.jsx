import Reveal from './Reveal'
import Icon from './Icon'
import { values, missionVision, principles, yearsInService } from '../data'

const CHECKS = [
  'Manufacturer, trader & supplier of industrial gases since 2011',
  'Based at Chandisar G.I.D.C., Palanpur — serving all of North Gujarat',
  'Uninterrupted 24×7 supply for business-critical operations',
  'Significant client base across Gujarat and the Indian subcontinent',
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <Reveal><p className="eyebrow"><span className="eyebrow-line" />Who We Are</p></Reveal>
            <Reveal delay={0.05}><h2>Built Around<br />Uptime.</h2></Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="section-sub">
              A leading manufacturer, trader &amp; supplier of industrial gases,
              medical gases and bulk chemicals, operating from Chandisar G.I.D.C.
              in Palanpur, Banaskantha, and serving clients across Gujarat and India.
            </p>
          </Reveal>
        </div>

        <div className="about-grid">
          <Reveal className="about-visual" y={0}>
            <img src="/plant/plant-guru-tanker-filling.jpg" alt="Guru Industries cryogenic tanker filling liquid nitrogen at a client plant" />
            <div className="about-badge">
              <span className="about-badge-num">{yearsInService()}<i>+</i></span>
              <span className="about-badge-label">Years of<br />Excellence</span>
            </div>
          </Reveal>

          <div className="about-list">
            {CHECKS.map((c, i) => (
              <Reveal key={c} delay={0.08 + i * 0.06}>
                <div className="about-row">
                  <span className="about-row-num">{String(i + 1).padStart(2, '0')}</span>
                  <p>{c}</p>
                  <Icon name="check" size={14} stroke={2.4} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="pillar-grid">
          {[...values, ...missionVision].map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06}>
              <div className="pillar">
                <span className="pillar-idx">{String(i + 1).padStart(2, '0')}</span>
                <div className="pillar-icon"><Icon name={v.icon} size={20} /></div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="principle-bar" y={12}>
          <span className="principle-bar-label">How we operate</span>
          <div className="principle-bar-items">
            {principles.map((p) => <span key={p}>{p}</span>)}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
