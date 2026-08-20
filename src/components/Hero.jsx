import Emblem from './Emblem'
import Reveal from './Reveal'
import './Hero.css'

const ESTADISTICAS = [
  { valor: '333', etiqueta: 'Número de Capítulo' },
  { valor: '7', etiqueta: 'Virtudes Cardinales' },
  { valor: '1919', etiqueta: 'Fundación de la Orden' },
  { valor: '+100', etiqueta: 'Años de tradición' },
]

function Estrella({ variante = 'blanca' }) {
  return (
    <svg viewBox="0 0 24 24" className={`hero-estrella hero-estrella-${variante}`} aria-hidden="true">
      <path d="M12 2.5l2.9 6 6.6.8-4.8 4.6 1.2 6.6L12 17.3l-5.9 3.2 1.2-6.6-4.8-4.6 6.6-.8z" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-fondo" aria-hidden="true">
        <div className="hero-franjas" />
        <div className="hero-estrellas" />
        <div className="hero-viñeta" />
      </div>

      <div className="container hero-contenido">
        <Reveal className="hero-rango" aria-hidden="true">
          <Estrella variante="blanca" />
          <Estrella variante="azul" />
          <Estrella variante="blanca" />
        </Reveal>

        <Reveal delay={80} className="hero-emblema-wrap">
          <div className="hero-emblema-halo">
            <Emblem size={110} />
          </div>
        </Reveal>

        <Reveal delay={180} className="eyebrow hero-eyebrow">
          Orden Internacional DeMolay · Paraguay
        </Reveal>

        <Reveal as="h1" delay={260} className="hero-titulo">
          Capítulo <span className="acento">Mariscal Francisco</span>
          <br />
          Solano López <span className="hero-numero">Nº 333</span>
        </Reveal>

        <Reveal delay={360} className="lead hero-lead">
          Formamos líderes jóvenes sobre los pilares del honor, la hermandad y el patriotismo,
          honrando el nombre del máximo héroe nacional del Paraguay.
        </Reveal>

        <Reveal delay={440} className="hero-acciones">
          <a href="#la-orden" className="boton boton-primario">
            Conocé la Orden
          </a>
          <a href="#contacto" className="boton boton-fantasma">
            Contactanos
          </a>
        </Reveal>

        <Reveal delay={540} className="hero-stats">
          {ESTADISTICAS.map((stat) => (
            <div key={stat.etiqueta} className="hero-stat">
              <span className="hero-stat-valor">{stat.valor}</span>
              <span className="hero-stat-etiqueta">{stat.etiqueta}</span>
            </div>
          ))}
        </Reveal>
      </div>

      <a href="#quienes-somos" className="hero-scroll" aria-label="Bajar a la siguiente sección">
        <span />
      </a>
    </section>
  )
}
