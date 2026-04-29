import { useState } from 'react'
import { X } from 'lucide-react'
import styles from './Navbar.module.css'

const links = [
  { label: 'Sobre mí',    href: '#sobre-mi' },
  { label: 'Stack',       href: '#stack' },
  { label: 'Proyectos',   href: '#proyectos' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Servicios',   href: '#servicios' },
  { label: 'Contacto',    href: '#contacto' },
]

export default function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false)

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>

        <a href="#" className={styles.logo}>jp.</a>

        {/* Desktop links — cada uno con su número */}
        <nav className={styles.links} aria-label="Navegación principal">
          {links.map((l, i) => (
            <a key={l.href} href={l.href} className={styles.link}>
              <span className={styles.linkNum}>0{i + 1}</span>
              <span className={styles.linkLabel}>{l.label}</span>
            </a>
          ))}
        </nav>

        {/* Burger custom — tres líneas que se cruzan */}
        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Menú mobile — fullscreen */}
      <div className={`${styles.mobile} ${open ? styles.mobileOpen : ''}`}>
        <button className={styles.mobileClose} onClick={() => setOpen(false)}>
          <X size={22} />
        </button>
        <nav className={styles.mobileLinks}>
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              <span className={styles.mobileLinkNum}>0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
