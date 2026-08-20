import Reveal from './Reveal'
import IconoVirtud from './IconoVirtud'
import { virtudes } from '../data/virtudes'
import './OrdenDeMolay.css'

export default function OrdenDeMolay() {
  return (
    <section id="la-orden" className="seccion la-orden">
      <div className="container">
        <Reveal className="la-orden-intro">
          <span className="eyebrow">¿Qué es la Orden DeMolay?</span>
          <h2 className="titulo-seccion">
            Más de un siglo formando <span className="acento">hombres de bien</span>
          </h2>
          <p className="lead">
            Fundada en 1919 en Kansas City, Estados Unidos, por Frank S. Land, la Orden
            Internacional DeMolay es una organización juvenil fraternal para varones de entre 12 y
            21 años. Su nombre honra a Jacques DeMolay, el último Gran Maestre de los Caballeros
            Templarios, símbolo de fidelidad y coraje hasta el final. En Paraguay, capítulos como
            el nuestro continúan ese legado formando jóvenes íntegros para la sociedad.
          </p>
        </Reveal>

        <div className="virtudes-grid">
          {virtudes.map((virtud, i) => (
            <Reveal key={virtud.nombre} delay={i * 80} className="virtud-card">
              <div className="virtud-icono">
                <IconoVirtud tipo={virtud.icono} />
              </div>
              <h3>{virtud.nombre}</h3>
              <p>{virtud.descripcion}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
