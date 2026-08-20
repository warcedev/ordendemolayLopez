import { useReveal } from '../hooks/useReveal'

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, enVista] = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${enVista ? 'en-vista' : ''} ${className}`.trim()}
      style={{ transitionDelay: enVista ? `${delay}ms` : '0ms' }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
