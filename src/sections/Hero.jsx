import { useEffect, useRef } from 'react'
import { ArrowDown } from 'lucide-react'
import { siteData } from '../data/siteData'
import styles from './Hero.module.css'

export default function Hero() {
  const bgRef = useRef(null)

  // Parallax suave en el fondo
  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const lines = siteData.hero.headline.split('\n')

  return (
    <section className={styles.hero} id="inicio">
      {/* Fondo con malla de puntos */}
      <div className={styles.bg} ref={bgRef}>
        <div className={styles.grid} />
        <div className={styles.blob1} />
        <div className={styles.blob2} />
      </div>

      <div className={`container ${styles.inner}`}>
        {/* Label superior */}
        <div className={styles.topLabel}>
          <span className={styles.dot} />
          <span>Valencia, España</span>
          <span className={styles.sep}>·</span>
          <span>{siteData.role}</span>
        </div>

        {/* Titular principal */}
        <h1 className={styles.title}>
          {lines.map((line, i) => (
            <span key={i} className={`${styles.line} ${styles[`line${i + 1}`]}`}>
              {i === 1 ? (
                <>
                  {line}
                </>
              ) : (
                line
              )}
            </span>
          ))}
        </h1>

        {/* Subtítulo */}
        <p className={styles.sub}>{siteData.hero.subline}</p>

        {/* CTAs */}
        <div className={styles.ctas}>
          <a href="#proyectos" className="btn btn-primary">
            {siteData.hero.cta}
            <ArrowDown size={14} />
          </a>
          <a href="#contacto" className="btn btn-outline">
            {siteData.hero.ctaSecondary}
          </a>
        </div>


      </div>

      {/* Número decorativo */}
      <span className={styles.deco}>01</span>
    </section>
  )
}
