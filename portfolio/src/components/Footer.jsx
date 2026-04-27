import { Github, Linkedin, Twitter } from 'lucide-react'
import { siteData } from '../data/siteData'
import styles from './Footer.module.css'

const iconMap = { Github, Linkedin, Twitter }

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="#" className={styles.logo}>
          <span className={styles.logoAccent}>J</span>P
        </a>

        {/* Centro */}
        <p className={styles.copy}>
          © {year} Jesús Painceira — Hecho con React y ganas en Valencia.
        </p>

        {/* Redes */}
        <div className={styles.social}>
          {siteData.social.map((s) => {
            const Icon = iconMap[s.icon]
            return (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={s.name}
              >
                {Icon && <Icon size={16} strokeWidth={1.5} />}
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
