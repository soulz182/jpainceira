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

        {/* Grid: índice izquierda — detalle derecha */}
        <div className={styles.grid}>
          <div className={styles.index}>
            {siteData.experience.map((job, i) => (
              <IndexItem key={i} job={job} index={i} />
            ))}
          </div>
          <div className={styles.cards}>
            {siteData.experience.map((job, i) => (
              <ExpCard key={i} job={job} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function IndexItem({ job, index }) {
  const ref = useScrollReveal()
  return (
    <div className={`reveal delay-${index + 1} ${styles.indexItem}`} ref={ref}>
      <span className={styles.indexNum}>0{index + 1}</span>
      <span className={styles.indexCompany}>{job.company}</span>
    </div>
  )
}

function ExpCard({ job, index }) {
  const ref = useScrollReveal()
  return (
    <div className={`reveal delay-${index + 1} ${styles.card}`} ref={ref}>
      <div className={styles.cardTop}>
        <div>
          <h3 className={styles.role}>{job.role}</h3>
          <span className={styles.company}>{job.company}</span>
        </div>
        <span className={styles.period}>{job.period}</span>
      </div>
      <p className={styles.desc}>{job.description}</p>
      <div className={styles.highlights}>
        {job.highlights.map((h) => (
          <span className="tag" key={h}>{h}</span>
        ))}
      </div>
    </div>
  )
}
