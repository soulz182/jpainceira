import { useScrollReveal } from '../hooks/useScrollReveal'
import { siteData } from '../data/siteData'
import styles from './Experience.module.css'

export default function Experience() {
  const titleRef = useScrollReveal()

  return (
    <section id="experiencia" className={styles.experience}>
      <div className="container">
        <div className={`reveal ${styles.header}`} ref={titleRef}>
          <p className="section-label">Experiencia</p>
          <h2 className="section-title">Trayectoria</h2>
        </div>

        <div className={styles.timeline}>
          {siteData.experience.map((job, i) => (
            <ExperienceItem key={i} job={job} index={i} last={i === siteData.experience.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceItem({ job, index, last }) {
  const ref = useScrollReveal()

  return (
    <div className={`reveal delay-${index + 1} ${styles.item}`} ref={ref}>
      {/* Línea vertical */}
      <div className={styles.track}>
        <div className={styles.dot} />
        {!last && <div className={styles.line} />}
      </div>

      {/* Contenido */}
      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.period}>{job.period}</span>
        </div>

        <h3 className={styles.role}>{job.role}</h3>
        <span className={styles.company}>{job.company}</span>

        <p className={styles.desc}>{job.description}</p>

        <div className={styles.highlights}>
          {job.highlights.map((h) => (
            <span className="tag" key={h}>{h}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
