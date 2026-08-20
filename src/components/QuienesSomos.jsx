import Reveal from './Reveal'
import Emblem from './Emblem'
import './QuienesSomos.css'

const PILARES = [
  { titulo: 'Formación de Líderes', texto: 'Espacios de crecimiento personal, oratoria y trabajo en equipo desde la adolescencia.' },
  { titulo: 'Servicio a la Comunidad', texto: 'Actividades solidarias y cívicas que devuelven a la sociedad lo que ella nos da.' },
  { titulo: 'Hermandad para toda la vida', texto: 'Vínculos de amistad y apoyo mutuo que trascienden la juventud.' },
]

export default function QuienesSomos() {
  return (
    <section id="quienes-somos" className="seccion quienes-somos">
      <div className="container qs-grid">
        <Reveal className="qs-texto">
          <span className="eyebrow">Quiénes Somos</span>
          <h2 className="titulo-seccion">
            Jóvenes construyendo <span className="acento">carácter y liderazgo</span>
          </h2>
          <p className="lead">
            El Capítulo Mariscal Francisco Solano López Nº 333 reúne a jóvenes varones de la
            comunidad que buscan crecer en valores, desarrollar habilidades de liderazgo y forjar
            amistades genuinas bajo los principios de la Orden DeMolay.
          </p>
          <p className="qs-parrafo">
            Llevamos con orgullo el nombre del Mariscal Francisco Solano López, símbolo máximo del
            amor a la patria paraguaya, como recordatorio constante de que el carácter se forma con
            disciplina, sacrificio y compromiso hacia los demás. Este espacio es una maqueta:
            pronto sumaremos aquí nuestra historia, actividades y logros reales.
          </p>

          <div className="qs-pilares">
            {PILARES.map((pilar) => (
              <div key={pilar.titulo} className="qs-pilar">
                <span className="qs-pilar-numero" aria-hidden="true" />
                <div>
                  <h3>{pilar.titulo}</h3>
                  <p>{pilar.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160} className="qs-visual">
          <div className="qs-marco">
            <div className="qs-marco-brillo" />
            <Emblem size={140} />
            <p className="qs-marco-texto">
              Capítulo Nº 333
              <br />
              Orden Internacional DeMolay
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
