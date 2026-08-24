import Reveal from './Reveal'
import './SolanoLopez.css'

export default function SolanoLopez() {
  return (
    <section id="solano-lopez" className="seccion solano-lopez">
      <div className="solano-lopez-fondo" aria-hidden="true" />
      <div className="container solano-lopez-contenido">
        <Reveal className="eyebrow">Por qué llevamos su nombre</Reveal>

        <Reveal delay={100} as="h2" className="titulo-seccion sl-titulo">
          Mariscal <span className="acento">Francisco Solano López</span>
        </Reveal>

        <Reveal delay={200} className="sl-grid">
          <p className="sl-texto">
            Francisco Solano López (1827–1870) fue Presidente de la República del Paraguay y
            condujo a la nación durante la Guerra de la Triple Alianza, el conflicto más doloroso
            de nuestra historia. Su entrega absoluta por la soberanía nacional lo convirtió en
            símbolo de resistencia y sacrificio. En 1936, el Congreso Nacional lo declaró Héroe
            Nacional del Paraguay, honor que conserva hasta hoy.
          </p>
          <p className="sl-texto">
            Cayó en combate el 1 de marzo de 1870, en Cerro Corá, donde se le atribuye la célebre
            frase que resume su entrega por la patria. Ese mismo espíritu de honor, fidelidad y
            amor a la tierra que nos vio nacer es el que buscamos cultivar en cada joven de
            nuestro Capítulo.
          </p>
          <p className="sl-texto">
            Llevamos el nombre de Mariscal López en honor al Mariscal Francisco Solano López, una
            de las figuras más importantes de la historia del Paraguay. Su nombre representa el
            patriotismo, el valor, el sacrificio, la lealtad y el compromiso con la defensa de la
            patria. Como miembros de la Orden DeMolay, llevar su nombre significa mantener vivo su
            legado y buscar que esos valores también estén presentes en nuestra formación como
            jóvenes, especialmente mediante el liderazgo, el servicio y el compromiso con nuestra
            comunidad y nuestro país.
          </p>
        </Reveal>

        <Reveal delay={320} className="sl-cita">
          <span className="sl-cita-marca" aria-hidden="true">
            &ldquo;
          </span>
          <p>Muero por mi patria, con la espada en la mano.</p>
          <span className="sl-cita-autor">— Atribuida al Mariscal Francisco Solano López, Cerro Corá, 1870</span>
        </Reveal>
      </div>
    </section>
  )
}
