import Reveal from './Reveal'
import './Contacto.css'

const INFO = [
  {
    titulo: 'Correo electrónico',
    valor: 'contacto@capitulo333.org.py',
    icono: <path d="M3 6h18v12H3zM3 6l9 7 9-7" />,
  },
  {
    titulo: 'WhatsApp',
    valor: '+595 9XX XXX XXX',
    icono: <path d="M21 12a9 9 0 1 1-4.1-7.6M21 3l-6.5 6.5M8 12l2.5 2.5L16 9" />,
  },
]

const REDES = ['Instagram', 'Facebook', 'TikTok']

export default function Contacto() {
  return (
    <section id="contacto" className="seccion contacto">
      <div className="container contacto-grid">
        <Reveal className="contacto-info">
          <span className="eyebrow">Contacto</span>
          <h2 className="titulo-seccion">
            Hablemos de <span className="acento">hermandad</span>
          </h2>
          <p className="lead">
            ¿Tenés preguntas sobre la Orden o querés sumarte al Capítulo? Escribinos, con gusto te
            contamos más.
          </p>

          <div className="contacto-lista">
            {INFO.map((item) => (
              <div key={item.titulo} className="contacto-item">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {item.icono}
                </svg>
                <div>
                  <strong>{item.titulo}</strong>
                  <span>{item.valor}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="contacto-redes">
            {REDES.map((red) => (
              <a key={red} href="#" className="contacto-red" onClick={(e) => e.preventDefault()}>
                {red}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140} className="contacto-logos">
          <img src="/logodemolay.png" alt="Logo de la Orden DeMolay" className="contacto-logo" />
          <img src="/escudo-capitulo.png" alt="Escudo del Capítulo Mariscal Francisco Solano López Nº 333" className="contacto-logo" />
        </Reveal>
      </div>
    </section>
  )
}
