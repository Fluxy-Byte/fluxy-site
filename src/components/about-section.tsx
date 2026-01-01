"use client"

import { Sparkles, Target, Users } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { useState, useEffect } from "react";
import Fly from "../../public/fly_com_telefone.png"

export function AboutSection() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Sobre a <span className="text-primary">Fluxy Technologies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Somos uma empresa de tecnologia dedicada a criar soluções inovadoras que transformam negócios
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 hover:border-primary trasition duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Inovação</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Utilizamos as tecnologias mais avançadas para criar soluções que fazem a diferença em seu negócio
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary trasition duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Foco em Resultados e Segurança</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cada projeto é desenvolvido com foco em gerar valor real para nossos clientes e garantir segurança aos seus usuários
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary trasition duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Parceria</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Trabalhamos lado a lado com nossos clientes para garantir o sucesso de cada projeto que entregamos
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-linear-to-br from-primary/10 to-accent/10 border-2 hover:border-primary trasition duration-300">
            <CardContent className="pt-8 pb-8 flex justify-center items-center">
              {!isMobile &&
                <img
                  src={Fly}
                  alt="Fluxy Technologies"
                  className="w-50 h-50 rounded-lg object-contain"
                />
              }
              <p className={`text-lg ${isMobile ? "text-center" : "text-start"} leading-relaxed max-w-4xl mx-auto`}>
                Na <b className="text-primary">Fluxy Technologies</b>, unimos experiência e inovação para criar soluções tecnológicas sob medida. Nosso time, com ampla vivência no mercado, acompanha as mais recentes tendências para garantir que cada cliente alcance resultados reais e esteja sempre à frente no mundo digital.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
