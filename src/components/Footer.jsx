import Emblem from './Emblem'
import './Footer.css'

const ENLACES = [
  { href: '#quienes-somos', texto: 'Quiénes Somos' },
  { href: '#la-orden', texto: 'La Orden' },
  { href: '#solano-lopez', texto: 'Solano López' },
  { href: '#cargos', texto: 'Puestos y Cargos' },
  { href: '#contacto', texto: 'Contacto' },
]

export default function Footer() {
  const año = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="franja" />
      <div className="container footer-interior">
        <div className="footer-marca">
          <Emblem size={40} />
          <div>
            <strong>Capítulo Mariscal Francisco Solano López</strong>
            <span>Nº 333 · Orden Internacional DeMolay · Paraguay</span>
          </div>
        </div>

        <nav className="footer-enlaces" aria-label="Enlaces del pie de página">
          {ENLACES.map((e) => (
            <a key={e.href} href={e.href}>
              {e.texto}
            </a>
          ))}
        </nav>

        <p className="footer-copy">
          © {año} Capítulo Mariscal Francisco Solano López Nº 333. Todos los derechos reservados.
        </p>

        <p className="footer-credito">
          Desarrollado por{' '}
          <a href="https://codebywill.vercel.app/" target="_blank" rel="noopener noreferrer">
            codebywill
          </a>{' '}
          · 2026
        </p>
      </div>
    </footer>
  )
}
