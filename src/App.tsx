import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/SectionServices'
import Gallery from './components/SectionGallery'
import Feedback from './components/SectionFeedback'
import Contact from './components/SectionContact'
import { GlobalCss } from './styles'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <GlobalCss />
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
