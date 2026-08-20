export default function Emblem({ size = 48, className = '' }) {
  return (
    <img
      src="/escudo-capitulo.png"
      width={size}
      height={size}
      style={{ width: size, height: 'auto' }}
      className={`emblema-img ${className}`.trim()}
      alt="Escudo del Capítulo Mariscal Francisco Solano López Nº 333"
    />
  )
}
