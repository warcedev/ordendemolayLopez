import { useEffect, useState } from 'react'
import Emblem from './Emblem'
import './Navbar.css'

const ENLACES = [
  { href: '#quienes-somos', texto: 'Quiénes Somos' },
  { href: '#la-orden', texto: 'La Orden' },
  { href: '#solano-lopez', texto: 'Solano López' },
  { href: '#cargos', texto: 'Puestos y Cargos' },
  { href: '#unite', texto: 'Unite' },
]

export default function Navbar() {
  const [conFondo, setConFondo] = useState(false)
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [seccionActiva, setSeccionActiva] = useState('')

  useEffect(() => {
    const onScroll = () => setConFondo(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const secciones = ENLACES.map(({ href }) => document.querySelector(href)).filter(Boolean)
    if (!secciones.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setSeccionActiva(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' },
    )

    secciones.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className={`navbar ${conFondo ? 'navbar-solida' : ''}`}>
      <div className="container navbar-interior">
        <a href="#inicio" className="navbar-marca">
          <Emblem size={34} />
          <span>
            Capítulo Mariscal
            <br />
            Francisco Solano López <strong>Nº 333</strong>
          </span>
        </a>

        <nav className="navbar-enlaces" aria-label="Navegación principal">
          {ENLACES.map((enlace) => (
            <a
              key={enlace.href}
              href={enlace.href}
              className={seccionActiva === enlace.href ? 'activo' : ''}
            >
              {enlace.texto}
            </a>
          ))}
        </nav>

        <a href="#contacto" className="boton boton-primario navbar-cta">
          Contactanos
        </a>

        <button
          className={`navbar-hamburguesa ${menuAbierto ? 'abierto' : ''}`}
          aria-label="Abrir menú"
          aria-expanded={menuAbierto}
          onClick={() => setMenuAbierto((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav className={`navbar-movil ${menuAbierto ? 'abierto' : ''}`} aria-label="Navegación móvil">
        {ENLACES.map((enlace) => (
          <a key={enlace.href} href={enlace.href} onClick={() => setMenuAbierto(false)}>
            {enlace.texto}
          </a>
        ))}
      </nav>
    </header>
  )
}
