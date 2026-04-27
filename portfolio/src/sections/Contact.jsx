import { useState } from 'react'
import { Send, Mail, MapPin } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { siteData } from '../data/siteData'
import styles from './Contact.module.css'

export default function Contact() {
  const titleRef = useScrollReveal()
  const formRef = useScrollReveal()

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // El envío real depende del backend; aquí se simula para el portfolio.
  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contacto" className={styles.contact}>
      <div className="container">
        <div className={styles.inner}>
          {/* Bloque izquierdo */}
          <div className={`reveal ${styles.left}`} ref={titleRef}>
            <p className="section-label">Contacto</p>
            <h2 className={styles.heading}>
              Hablemos de<br />
              <em>tu próximo proyecto.</em>
            </h2>

            <p className={styles.text}>
              Estoy disponible para proyectos freelance, colaboraciones y posiciones front-end.
              Si tienes algo en mente, escríbeme y te respondo en menos de 24 horas.
            </p>

            <div className={styles.info}>
              <a href={`mailto:${siteData.email}`} className={styles.infoRow}>
                <Mail size={16} />
                <span>{siteData.email}</span>
              </a>
              <div className={styles.infoRow}>
                <MapPin size={16} />
                <span>{siteData.location}</span>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className={`reveal ${styles.formWrap}`} ref={formRef}>
            {sent ? (
              <div className={styles.thanks}>
                <span className={styles.thanksEmoji}>✦</span>
                <h3>Mensaje recibido</h3>
                <p>Gracias por escribirme. Te respondo en breve.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.field}>
                  <label htmlFor="name">Nombre</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Cuéntame qué tienes en mente..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className={`btn btn-primary ${styles.submit}`}>
                  Enviar mensaje
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
