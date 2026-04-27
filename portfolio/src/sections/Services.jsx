import { Monitor, ShoppingCart, Code2, Zap, Palette, Wrench } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { siteData } from '../data/siteData'
import styles from './Services.module.css'

// Mapa de nombre de icono → componente
const icons = { Monitor, ShoppingCart, Code2, Zap, Palette, Wrench }

export default function Services() {
  const titleRef = useScrollReveal()

  return (
    <section id="servicios" className={styles.services}>
      <div className="container">
        <div className={`reveal ${styles.header}`} ref={titleRef}>
          <p className="section-label">Servicios</p>
          <h2 className="section-title">¿En qué puedo ayudarte?</h2>
        </div>

        <div className={styles.grid}>
          {siteData.services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }) {
  const ref = useScrollReveal()
  const Icon = icons[service.icon]

  return (
    <div className={`reveal delay-${(index % 3) + 1} ${styles.card}`} ref={ref}>
      <div className={styles.iconWrap}>
        {Icon && <Icon size={20} strokeWidth={1.5} />}
      </div>
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.desc}>{service.desc}</p>
    </div>
  )
}
