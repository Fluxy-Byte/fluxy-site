
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Logo from "../../public/logo.png"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-250 ${isMobileMenuOpen ? "bg-white rounded-b-lg" : ""} ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <img
                src={Logo}
                alt="Fluxy Technologies"
                className="w-25 h-25 rounded-full! object-contain"
              />
            </div>
            <span className={`text-xl font-bold transition duration-300  ${isMobileMenuOpen ? "text-foreground!" : ""} ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>Fluxy Technologies</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`transition duration-300 cursor-pointer ${isScrolled ? "text-foreground hover:text-primary" : "text-primary-foreground"}`}
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`transition duration-300 cursor-pointer ${isScrolled ? "text-foreground hover:text-primary" : "text-primary-foreground"}`}
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`transition duration-300 cursor-pointer ${isScrolled ? "text-foreground hover:text-primary" : "text-primary-foreground"}`}
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`transition duration-300 cursor-pointer ${isScrolled ? "text-foreground hover:text-primary" : "text-primary-foreground"}`}
            >
              Contato
            </button>
          </nav>


          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-foreground">
            {isMobileMenuOpen ? <X size={24} className={`${isScrolled ? "text-primary" : "text-primary"}`} /> : <Menu className={`${isScrolled ? "text-primary" : "text-primary-foreground"}`} size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors text-left cursor-pointer"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors text-left cursor-pointer"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors text-left cursor-pointer"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors text-left cursor-pointer"
            >
              Contato
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
