import { useScrollReveal } from '../hooks/useScrollReveal'
import { siteData } from '../data/siteData'
import styles from './About.module.css'

export default function About() {
  const leftRef = useScrollReveal()
  const rightRef = useScrollReveal()

  return (
    <section id="sobre-mi" className={styles.about}>
      <div className="container">
        <div className={styles.grid}>
          {/* Columna izquierda */}
          <div className={`reveal ${styles.left}`} ref={leftRef}>
            <p className="section-label">Sobre mí</p>
            <h2 className="section-title">
              Desarrollador con<br />
              <em>alma de diseñador.</em>
            </h2>

            <div className={styles.tags}>
              {siteData.about.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Columna derecha */}
          <div className={`reveal ${styles.right}`} ref={rightRef}>
            {siteData.about.bio.map((paragraph, i) => (
              <p key={i} className={styles.bio}>
                {paragraph}
              </p>
            ))}

            {/* Stats */}
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>4+</span>
                <span className={styles.statLabel}>Años de experiencia</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>30+</span>
                <span className={styles.statLabel}>Proyectos entregados</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>∞</span>
                <span className={styles.statLabel}>Caffeine consumed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
