import { useEffect, useRef } from 'react'
import styles from './Cursor.module.css'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    // Solo en dispositivos con hover real (desktop)
    if (window.matchMedia('(hover: none)').matches) return

    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let x = 0, y = 0
    let rx = 0, ry = 0

    const move = (e) => {
      x = e.clientX
      y = e.clientY
      dot.style.transform = `translate(${x}px, ${y}px)`
    }

    // Ring sigue con lag suave
    let rafId
    const animate = () => {
      rx += (x - rx) * 0.12
      ry += (y - ry) * 0.12
      ring.style.transform = `translate(${rx}px, ${ry}px)`
      rafId = requestAnimationFrame(animate)
    }

    // Elementos interactivos que deben abrir el ring
    const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label, [tabindex]'

    const expand   = () => ring.classList.add(styles.expand)
    const collapse = () => ring.classList.remove(styles.expand)

    // Delegación: un solo listener en document en lugar de uno por elemento
    const onEnter = (e) => { if (e.target.closest(INTERACTIVE)) expand() }
    const onLeave = (e) => { if (e.target.closest(INTERACTIVE)) collapse() }

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseover',  onEnter)
    document.addEventListener('mouseout',   onLeave)

    rafId = requestAnimationFrame(animate)

    // Ocultar cursor nativo (refuerzo por JS además del CSS)
    document.documentElement.style.cursor = 'none'

    return () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover',  onEnter)
      document.removeEventListener('mouseout',   onLeave)
      cancelAnimationFrame(rafId)
      document.documentElement.style.cursor = ''
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className={styles.dot}  />
      <div ref={ringRef} className={styles.ring} />
    </>
  )
}
