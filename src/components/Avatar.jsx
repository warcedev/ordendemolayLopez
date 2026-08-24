import { useState } from 'react'

const PALETA = [
  ['#cd1126', '#8f0c1c'],
  ['#0038a8', '#00204f'],
  ['#b8912b', '#8a6a1d'],
  ['#2f6844', '#1e4530'],
]

function inicialesDe(nombre) {
  return nombre
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((palabra) => palabra[0])
    .join('')
    .toUpperCase()
}

function slugDe(nombre) {
  const sinAcentos = nombre.normalize('NFD').replace(new RegExp('\\p{Mn}', 'gu'), '')
  return sinAcentos.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
}

export default function Avatar({ nombre, foto, indice = 0 }) {
  const [fallo, setFallo] = useState(false)
  const src = foto || `/${slugDe(nombre)}.jpeg`

  if (!fallo) {
    return <img className="avatar-foto" src={src} alt={nombre} onError={() => setFallo(true)} />
  }

  const [desde, hasta] = PALETA[indice % PALETA.length]

  return (
    <div
      className="avatar-placeholder"
      style={{ background: `linear-gradient(140deg, ${desde}, ${hasta})` }}
      aria-hidden="true"
    >
      <span>{inicialesDe(nombre)}</span>
    </div>
  )
}
