import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { siteData } from '../data/siteData'
import styles from './Projects.module.css'

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const titleRef = useScrollReveal()

  const featured = siteData.projects.filter((p) => p.featured)
  const rest = siteData.projects.filter((p) => !p.featured)
  const visible = showAll ? [...featured, ...rest] : featured

  return (
    <section id="proyectos" className={styles.projects}>
      <div className="container">
        <div className={`reveal ${styles.header}`} ref={titleRef}>
          <p className="section-label">Proyectos</p>
          <h2 className="section-title">Trabajo selecto</h2>
        </div>

        {/* Grid de proyectos destacados */}
        <div className={styles.grid}>
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} large={i === 0} />
          ))}
        </div>

        {/* Lista del resto */}
        {showAll && (
          <div className={styles.list}>
            {rest.map((project) => (
              <ProjectRow key={project.id} project={project} />
            ))}
          </div>
        )}

        <div className={styles.more}>
          <button className="btn btn-outline" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Ver menos' : `Ver todos los proyectos (${rest.length} más)`}
          </button>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, large }) {
  const ref = useScrollReveal()

  return (
    <div
      className={`reveal delay-${index + 1} ${styles.card} ${large ? styles.cardLarge : ''}`}
      ref={ref}
      style={{ '--accent-color': project.color }}
    >
      {/* Visual placeholder */}
      <div className={styles.visual}>
        <div className={styles.visualInner}>
          <span className={styles.visualNum}>0{project.id}</span>
        </div>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardMeta}>
          <span className={styles.cardCategory}>{project.category}</span>
          <span className={styles.cardYear}>{project.year}</span>
        </div>

        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.description}</p>

        <div className={styles.cardTags}>
          {project.tags.map((t) => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>

        <div className={styles.cardLink}>
          <span>Ver proyecto</span>
          <ArrowUpRight size={14} />
        </div>
      </div>
    </div>
  )
}

function ProjectRow({ project }) {
  const ref = useScrollReveal()

  return (
    <div className={`reveal ${styles.row}`} ref={ref} style={{ '--accent-color': project.color }}>
      <span className={styles.rowYear}>{project.year}</span>
      <h3 className={styles.rowTitle}>{project.title}</h3>
      <span className={styles.rowCategory}>{project.category}</span>
      <div className={styles.rowTags}>
        {project.tags.slice(0, 3).map((t) => (
          <span className="tag" key={t}>{t}</span>
        ))}
      </div>
      <ArrowUpRight size={16} className={styles.rowArrow} />
    </div>
  )
}
