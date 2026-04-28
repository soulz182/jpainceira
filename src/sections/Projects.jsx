import { useState } from 'react'
import { ArrowUpRight, Globe } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { siteData } from '../data/siteData'
import styles from './Projects.module.css'

// Genera la URL del screenshot via Microlink (gratuito, sin API key)
const screenshotUrl = (url) =>
  `https://api.microlink.io?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`

export default function Projects() {
  const titleRef = useScrollReveal()
  const featured = siteData.projects.filter((p) => p.featured)

  return (
    <section id="proyectos" className={styles.projects}>
      <div className="container">
        <div className={`reveal ${styles.header}`} ref={titleRef}>
          <p className="section-label">Proyectos</p>
          <h2 className="section-title">Trabajo selecto</h2>
        </div>

        <div className={styles.grid}>
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} large={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Visual: screenshot real o gradiente de fallback ───────────────────────────
function ProjectVisual({ project }) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  if (project.url && !error) {
    return (
      <div className={styles.visual}>
        {/* Gradiente mientras carga */}
        {!loaded && <div className={styles.visualFallback} />}

        <img
          src={screenshotUrl(project.url)}
          alt={`Captura de ${project.title}`}
          className={`${styles.visualImg} ${loaded ? styles.visualImgLoaded : ''}`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          loading="lazy"
        />

        {/* Overlay oscuro sutil para legibilidad */}
        <div className={styles.visualOverlay} />

        {/* Icono de enlace externo en esquina */}
        <div className={styles.visualBadge}>
          <Globe size={11} />
          <span>Live</span>
        </div>
      </div>
    )
  }

  // Sin URL o error → gradiente con número decorativo
  return (
    <div className={styles.visual}>
      <div className={styles.visualFallback} />
      <div className={styles.visualInner}>
        <span className={styles.visualNum}>0{project.id}</span>
      </div>
    </div>
  )
}

// ── Card ──────────────────────────────────────────────────────────────────────
function ProjectCard({ project, index, large }) {
  const ref = useScrollReveal()

  const Tag = project.url ? 'a' : 'div'
  const linkProps = project.url
    ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Tag
      {...linkProps}
      className={`reveal delay-${index + 1} ${styles.card} ${large ? styles.cardLarge : ''} ${project.url ? styles.isLink : ''}`}
      ref={ref}
      style={{ '--accent-color': project.color }}
    >
      <ProjectVisual project={project} />

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

        {project.url && (
          <div className={styles.cardLink}>
            <span>Ver proyecto</span>
            <ArrowUpRight size={14} />
          </div>
        )}
      </div>
    </Tag>
  )
}
