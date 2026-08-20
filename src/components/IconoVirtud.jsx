const RUTAS = {
  corazon: 'M12 21s-7.5-4.6-10-9.2C.4 8.4 2 5 5.3 5c1.9 0 3.4 1 4.7 2.7C11.3 6 12.8 5 14.7 5 18 5 19.6 8.4 22 11.8 19.5 16.4 12 21 12 21z',
  llama: 'M12 2c1 3-3 4.5-3 8a3 3 0 0 0 6 0c0-1-.5-1.8-1-2.5 2 1 3.5 3.5 3.5 6a5.5 5.5 0 0 1-11 0C6.5 9 9 5.5 12 2z',
  mano: 'M7 12V6.5a1.5 1.5 0 0 1 3 0V11m3 0V5a1.5 1.5 0 0 1 3 0v6m3 .5V8a1.5 1.5 0 0 1 3 0v6c0 4-2.5 7-7 7h-2c-3 0-4.5-1-6-3l-3-4.2c-.6-.9-.3-2 .6-2.5.8-.4 1.7-.2 2.3.5L7 14',
  personas: 'M9 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm7-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM2 20c0-3.3 3.1-6 7-6s7 2.7 7 6M16 14c3.3 0 6 2.4 6 6',
  escudo: 'M12 3l7 3v6c0 5-3 8.5-7 9-4-.5-7-4-7-9V6z',
  gota: 'M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z',
  estrella: 'M12 2.5l2.9 6 6.6.8-4.8 4.6 1.2 6.6L12 17.3l-5.9 3.2 1.2-6.6-4.8-4.6 6.6-.8z',
}

export default function IconoVirtud({ tipo }) {
  const d = RUTAS[tipo] || RUTAS.estrella
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-hidden="true">
      <path d={d} stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  )
}
