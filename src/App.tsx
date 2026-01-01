import './App.css';
import { Header } from './components/header';
import { HeroSection } from './components/hero-section';
import { AboutSection } from './components/about-section';
import { ServicesSection } from './components/services-section';
import { ContactSection } from './components/contact-section';
import { Footer } from './components/footer';


function App() {

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default App
