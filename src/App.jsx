import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuienesSomos from './components/QuienesSomos'
import OrdenDeMolay from './components/OrdenDeMolay'
import SolanoLopez from './components/SolanoLopez'
import Cargos from './components/Cargos'
import Unete from './components/Unete'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuienesSomos />
        <OrdenDeMolay />
        <SolanoLopez />
        <Cargos />
        <Unete />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}

export default App
