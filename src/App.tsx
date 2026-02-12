import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/SectionServices'
import Gallery from './components/SectionGallery'
import { GlobalCss } from './styles'

function App() {
  return (
    <div className="App">
      <GlobalCss />
      <Header />
      <Hero />
      <Services />
      <Gallery />
    </div>
  )
}

export default App
