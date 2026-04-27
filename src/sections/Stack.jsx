import { useScrollReveal } from '../hooks/useScrollReveal'
import { siteData } from '../data/siteData'
import styles from './Stack.module.css'

export default function Stack() {
  const titleRef = useScrollReveal()

  return (
    <section id="stack" className={styles.stack}>
      <div className="container">
        <div className={`reveal ${styles.header}`} ref={titleRef}>
          <p className="section-label">Stack</p>
          <h2 className="section-title">Tecnologías</h2>
          <p className={styles.subtitle}>
            Lo que uso a diario, lo que estoy aprendiendo y las herramientas que me acompañan.
          </p>
        </div>

        <div className={styles.groups}>
          {siteData.stack.map((group, gi) => (
            <StackGroup key={gi} group={group} index={gi} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StackGroup({ group, index }) {
  const ref = useScrollReveal()

  return (
    <div
      className={`reveal delay-${index + 1} ${styles.group}`}
      ref={ref}
    >
      <div className={styles.groupHeader}>
        <span
          className={styles.groupDot}
          style={{ background: group.color }}
        />
        <h3 className={styles.groupTitle}>{group.category}</h3>
      </div>

      <ul className={styles.items}>
        {group.items.map((item) => (
          <li key={item} className={styles.item}>
            <span
              className={styles.itemLine}
              style={{ background: group.color }}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
