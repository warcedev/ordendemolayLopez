import Reveal from './Reveal'
import './Unete.css'

const REQUISITOS = [
  'Varones de entre 12 y 21 años',
  'Creer en un Ser Supremo, sin importar el credo religioso',
  'Buena conducta y disposición a formar parte de una hermandad',
]

export default function Unete() {
  return (
    <section id="unite" className="seccion unete">
      <div className="container unete-caja">
        <Reveal className="unete-texto">
          <span className="eyebrow">Sumate al Capítulo</span>
          <h2 className="titulo-seccion">
            ¿Querés ser parte de <span className="acento">esta hermandad?</span>
          </h2>
          <p className="lead">
            Si sos joven y querés crecer en liderazgo, valores y amistad para toda la vida, esta es
            tu invitación.
          </p>

          <ul className="unete-lista">
            {REQUISITOS.map((req) => (
              <li key={req}>
                <span className="unete-check" aria-hidden="true">
                  ✓
                </span>
                {req}
              </li>
            ))}
          </ul>

          <a href="#contacto" className="boton boton-primario">
            Quiero sumarme
          </a>
        </Reveal>
      </div>
    </section>
  )
}
