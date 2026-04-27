import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Stack from './sections/Stack'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Services from './sections/Services'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import './styles/reveal.css'

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Cursor />
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
