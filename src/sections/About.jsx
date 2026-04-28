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
          <div className={`reveal ${styles.left}`} ref={leftRef}>
            <p className="section-label">Sobre mí</p>
            <h2 className="section-title">
              Desarrollador con<br />
              alma de diseñador.
            </h2>

            <div className={styles.tags}>
              {siteData.about.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className={`reveal ${styles.right}`} ref={rightRef}>
            {siteData.about.bio.map((paragraph, i) => (
              <p key={i} className={styles.bio}>
                {paragraph}
              </p>
            ))}

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>4+</span>
                <span className={styles.statLabel}>Años de experiencia</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>200+</span>
                <span className={styles.statLabel}>Proyectos entregados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
