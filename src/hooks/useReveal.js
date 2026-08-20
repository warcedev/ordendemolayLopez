import { useEffect, useRef, useState } from 'react'

export function useReveal(options = {}) {
  const { threshold = 0.18, rootMargin = '0px 0px -80px 0px' } = options
  const ref = useRef(null)
  const [enVista, setEnVista] = useState(false)

  useEffect(() => {
    const nodo = ref.current
    if (!nodo) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEnVista(true)
          observer.unobserve(nodo)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(nodo)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, enVista]
}
