import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Markets from './components/Markets'
import WhyUs from './components/WhyUs'
import UseCases from './components/UseCases'
import OEM from './components/OEM'
import About from './components/About'
import Engagement from './components/Engagement'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Markets />
        <WhyUs />
        <UseCases />
        <OEM />
        <About />
        <Engagement />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
