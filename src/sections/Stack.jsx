import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { siteData } from '../data/siteData'
import styles from './Stack.module.css'

export default function Stack() {
  const titleRef = useScrollReveal()
  // Todos los items del stack en una sola lista plana con metadata de grupo
  const allItems = siteData.stack.flatMap((group) =>
    group.items.map((item) => ({ item, color: group.color, category: group.category }))
  )

  return (
    <section id="stack" className={styles.stack}>
      <div className="container">
        <div className={`reveal ${styles.header}`} ref={titleRef}>
          <p className="section-label">Stack</p>
          <h2 className="section-title">Tecnologías</h2>
        </div>

        {/* Grupos como tabs / filtros */}
        <StackCloud items={allItems} groups={siteData.stack} />
      </div>
    </section>
  )
}

function StackCloud({ items, groups }) {
  const [active, setActive] = useState(null) // null = todos
  const ref = useScrollReveal()

  const visible = active
    ? items.filter((i) => i.category === active)
    : items

  return (
    <div className={`reveal ${styles.cloud}`} ref={ref}>
      {/* Filtros */}
      <div className={styles.filters}>
        <button
          className={`${styles.filter} ${active === null ? styles.filterActive : ''}`}
          onClick={() => setActive(null)}
        >
          Todos
        </button>
        {groups.map((g) => (
          <button
            key={g.category}
            className={`${styles.filter} ${active === g.category ? styles.filterActive : ''}`}
            style={active === g.category ? { '--fc': g.color } : {}}
            onClick={() => setActive(active === g.category ? null : g.category)}
          >
            <span className={styles.filterDot} style={{ background: g.color }} />
            {g.category}
          </button>
        ))}
      </div>

      {/* Nube de pills */}
      <div className={styles.pills}>
        {visible.map(({ item, color, category }) => (
          <span
            key={item + category}
            className={styles.pill}
            style={{ '--pc': color }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
