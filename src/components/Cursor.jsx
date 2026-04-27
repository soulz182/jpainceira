import { useEffect, useRef } from 'react'
import styles from './Cursor.module.css'

// Cursor personalizado solo en desktop
export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    // No mostrar en táctil
    if (window.matchMedia('(hover: none)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let x = 0, y = 0
    let rx = 0, ry = 0

    const move = (e) => {
      x = e.clientX
      y = e.clientY
      dot.style.transform = `translate(${x}px, ${y}px)`
    }

    // El ring sigue con un lag suave
    const animate = () => {
      rx += (x - rx) * 0.12
      ry += (y - ry) * 0.12
      ring.style.transform = `translate(${rx}px, ${ry}px)`
      requestAnimationFrame(animate)
    }

    const onEnterLink = () => ring.classList.add(styles.expand)
    const onLeaveLink = () => ring.classList.remove(styles.expand)

    document.addEventListener('mousemove', move)
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', onEnterLink)
      el.addEventListener('mouseleave', onLeaveLink)
    })

    const raf = requestAnimationFrame(animate)
    document.documentElement.style.cursor = 'none'

    return () => {
      document.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
      document.documentElement.style.cursor = ''
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className={styles.dot} />
      <div ref={ringRef} className={styles.ring} />
    </>
  )
}
