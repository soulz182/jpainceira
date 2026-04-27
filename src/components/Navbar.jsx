import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { siteData } from '../data/siteData'
import styles from './Navbar.module.css'

const links = [
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Stack', href: '#stack' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false)

  const handleLink = () => setOpen(false)

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo / nombre */}
        <a href="#" className={styles.logo}>
          <span className={styles.logoAccent}>J</span>P
        </a>

        {/* Nav desktop */}
        <nav className={styles.links} aria-label="Navegación principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={styles.link}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA disponibilidad */}
        {siteData.available && (
          <a href="#contacto" className={`btn btn-primary ${styles.ctaBtn}`}>
            Disponible
          </a>
        )}

        {/* Hamburger mobile */}
        <button
          className={styles.burger}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Menú mobile */}
      <div className={`${styles.mobile} ${open ? styles.mobileOpen : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} className={styles.mobileLink} onClick={handleLink}>
            {l.label}
          </a>
        ))}
      </div>
    </header>
  )
}
