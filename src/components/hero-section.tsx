
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Fundo from "../../public/fundo.jpg";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${Fundo})` }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-primary-foreground/30 rounded-full">
            <span className="text-primary-foreground font-semibold text-sm">Inovação com tecnologia é o futuro!</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground leading-tight">
            Transformando <span className="text-primary-foreground underline">ideias</span> em{" "}
            <span className="text-primary-foreground underline">realidade digital</span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground mb-8 text-pretty leading-relaxed max-w-3xl mx-auto">
            Isso se torna mais que um desenvolvimento, criamos conexões entre pessoas e tecnologia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("services")}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 trasition duration-300 cursor-pointer"
            >
              Nossos Serviços
              <ArrowDown className="ml-2" size={20} />
            </Button>
            <Button
              onClick={() => scrollToSection("about")}
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2trasition duration-300 cursor-pointer"
            >
              Conheça a Fluxy
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground rounded-full" />
        </div>
      </div>
    </section>
  )
}
