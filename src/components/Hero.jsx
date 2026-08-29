import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Icon from './Icon'
import Magnetic from './Magnetic'
import { clients, stats } from '../data'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (d) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] } }),
}

/* the five names shown in the trust line — the "+N more" behind them is
   derived, so adding a client never leaves a stale number on the hero */
const TRUST = ['Reliance Industries', 'Cairn Oil & Gas', 'Linde', 'ISRO', 'Halliburton']
const TRUST_SHORT = ['Reliance', 'Cairn', 'Linde', 'ISRO', 'Halliburton']

function useCountUp(target, start) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!start) return
    let raf
    const duration = 1400
    const t0 = performance.now()
    function tick(now) {
      const p = Math.min(1, (now - t0) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, target])
  return value
}

function HeroStat({ value, label, suffix }) {
  const [inView, setInView] = useState(false)
  const num = useCountUp(value, inView)
  return (
    <motion.div
      className="hstat"
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true, amount: 0.8 }}
    >
      <span className="hstat-num">{num}<em>{suffix}</em></span>
      <span className="hstat-label">{label}</span>
    </motion.div>
  )
}

export default function Hero() {
  const more = Math.max(clients.length - TRUST.length, 0)

  return (
    <section id="home" className="hero">
      <div className="hero-photo">
        <img
          src="/plant/plant-refinery-delivery.jpg"
          alt="Guru Industries tanker delivering industrial gas at a client refinery in Gujarat"
          fetchPriority="high"
        />
      </div>
      <div className="hero-scrim" />

      <div className="section-inner hero-inner">
        <motion.div
          className="hero-meta"
          variants={fadeUp} initial="hidden" animate="show" custom={0.05}
        >
          <span>Palanpur, Gujarat</span>
          <i />
          <span>Est. 2011</span>
          <i />
          <span>Industrial &amp; Medical Gases</span>
        </motion.div>

        <motion.h1
          className="hero-h1"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } }}
        >
          <motion.span className="h1-row" variants={fadeUp} custom={0}>INDUSTRIAL &amp; MEDICAL GAS</motion.span>
          <motion.span className="h1-row h1-accent" variants={fadeUp} custom={0.08}>SUPPLY FOR OPERATIONS</motion.span>
          <motion.span className="h1-row" variants={fadeUp} custom={0.16}>THAT NEVER STOP.</motion.span>
        </motion.h1>

        <motion.p className="hero-sub" variants={fadeUp} initial="hidden" animate="show" custom={0.4}>
          Industrial, medical &amp; specialty gases and bulk chemicals from Chandisar
          G.I.D.C., Palanpur — with nitrogen purging, pneumatic testing and gas
          equipment rental across Gujarat and India.
        </motion.p>

        <motion.div className="hero-cta" variants={fadeUp} initial="hidden" animate="show" custom={0.5}>
          <Magnetic>
            <a href="#contact" className="btn btn-solid btn-lg">Get a Quote <Icon name="arrow" size={16} /></a>
          </Magnetic>
          <Magnetic>
            <a href="#products" className="btn btn-outline-light btn-lg">Explore Products</a>
          </Magnetic>
        </motion.div>

        <motion.div className="hero-trust" variants={fadeUp} initial="hidden" animate="show" custom={0.6}>
          <span className="hero-trust-label">Trusted by</span>
          <span className="hero-trust-names">
            {TRUST_SHORT.join(' · ')} <b>+{more} more</b>
          </span>
        </motion.div>
      </div>

      <motion.div
        className="hero-stats-strip"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {stats.slice(1, 4).map((s) => (
          <HeroStat key={s.label} value={s.value} label={s.label} suffix={s.suffix} />
        ))}
      </motion.div>
    </section>
  )
}
