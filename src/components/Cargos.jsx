import Reveal from './Reveal'
import OfficerCard from './OfficerCard'
import { lineaDeOficiales, consejoAsesor } from '../data/cargos'
import './Cargos.css'

export default function Cargos() {
  return (
    <section id="cargos" className="seccion cargos">
      <div className="container">
        <Reveal className="cargos-intro">
          <span className="eyebrow">Puestos y Cargos</span>
          <h2 className="titulo-seccion">
            Nuestra <span className="acento">línea de oficiales</span>
          </h2>
          <p className="lead">
            Cada oficial cumple un rol ceremonial y de liderazgo dentro del Capítulo. Las
            fotografías son de ejemplo — se actualizarán próximamente.
          </p>
        </Reveal>

        <div className="cargos-grid">
          {lineaDeOficiales.map((oficial, i) => (
            <OfficerCard key={oficial.cargo} {...oficial} indice={i} delay={(i % 3) * 90} />
          ))}
        </div>

        <Reveal className="cargos-subtitulo">
          <h3>Consejo Asesor</h3>
          <p>Adultos referentes que acompañan y guían el trabajo del Capítulo.</p>
        </Reveal>

        <div className="cargos-grid cargos-grid-asesor">
          {consejoAsesor.map((asesor, i) => (
            <OfficerCard key={asesor.cargo} {...asesor} indice={i} delay={(i % 3) * 90} />
          ))}
        </div>
      </div>
    </section>
  )
}
