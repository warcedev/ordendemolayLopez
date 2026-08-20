import Avatar from './Avatar'
import Reveal from './Reveal'

export default function OfficerCard({ cargo, nombre, foto, indice = 0, delay = 0 }) {
  return (
    <Reveal delay={delay} className="officer-card">
      <div className="officer-foto">
        <Avatar nombre={nombre} foto={foto} indice={indice} />
      </div>
      <div className="officer-info">
        <h3>{nombre}</h3>
        <span>{cargo}</span>
      </div>
    </Reveal>
  )
}
