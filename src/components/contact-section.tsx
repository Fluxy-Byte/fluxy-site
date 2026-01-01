import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-linear-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Entre em <span className="text-primary">Contato</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Estamos prontos para transformar suas ideias em realidade
            </p>
          </div>

          <div className="text-center mb-10">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold text-sm">Horário de atendimento: <b>Segunda</b> a <b>Sexta</b>, das 9h às 18h</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Email</h3>
                    <p className="w-auto text-muted-foreground pb-4">Este é um de nossos canais de contato. Caso tenha interesse em nossos serviços ou dúvidas, fique à vontade para nos enviar uma mensagem por e-mail.</p>
                    <a
                      href="mailto:fluxytechnologies@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <b>fluxytechnologies@gmail.com</b>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Telefones</h3>
                    <p className="w-auto text-muted-foreground pb-4">Basta clicar no número abaixo que você sera direcionado para o WhatsApp</p>
                    <a
                      href="https://wa.me/5534997801829?text=Olá,%20queria%20fazer%20uma%20solicitação%20de%20start%20de%20projeto."
                      target="_blank"
                      className="w-auto text-muted-foreground hover:text-primary transition-colors">
                      <b>+55 (34) 99780-1829</b>
                    </a>

                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 border-2 bg-linear-to-br from-primary/10 to-accent/10">
            <CardContent className="pt-8 pb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Localização</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Uberlândia, MG - Brasil
                    <br />
                    Atendimento em todo território nacional
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
