import { useEffect, useRef } from 'react'
import { ArrowRight, MapPin } from 'lucide-react'
import { siteData } from '../data/siteData'
import styles from './Hero.module.css'

export default function Hero() {
  const bgRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.bg} ref={bgRef}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        {/* Grid de líneas solo en parte izquierda */}
        <div className={styles.gridLines} />
      </div>

      <div className={`container ${styles.inner}`}>

        {/* ── Columna izquierda: texto ── */}
        <div className={styles.left}>

          <div className={styles.badge}>
            <MapPin size={10} strokeWidth={2} />
            <span>Valencia, España</span>
          </div>

          <h1 className={styles.title}>
            <span className={styles.titleLine}>Construyo</span>
            <span className={styles.titleLineAccent}>interfaces</span>
            <span className={styles.titleLine}>que importan.</span>
          </h1>

          <p className={styles.sub}>{siteData.hero.subline}</p>

          <div className={styles.ctas}>
            <a href="#proyectos" className={styles.ctaPrimary}>
              {siteData.hero.cta}
              <ArrowRight size={15} />
            </a>
            <a href="#contacto" className={styles.ctaSecondary}>
              {siteData.hero.ctaSecondary}
            </a>
          </div>

          {/* Mini stats en horizontal */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>4+</span>
              <span className={styles.statLabel}>años exp.</span>
            </div>
            <div className={styles.statDiv} />
            <div className={styles.stat}>
              <span className={styles.statNum}>200+</span>
              <span className={styles.statLabel}>proyectos</span>
            </div>

          </div>
        </div>

        {/* ── Columna derecha: foto ── */}
        <div className={styles.right}>
          <div className={styles.photoWrap}>
            {/* Marco decorativo */}
            <div className={styles.photoFrame} />
            <img
              src="/jesus.jpg"
              alt="Jesús Painceira"
              className={styles.photo}
            />
            {/* Chip flotante */}
            <div className={styles.chip}>
              <span className={styles.chipDot} />
              Front-End Dev
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
