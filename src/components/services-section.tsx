
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Bot, Code, Layers, Brain, Zap, Server, AppWindow } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Chatbots",
    icon: Bot,
    description: "Chatbots inteligentes para atendimento automatizado",
    fullDescription:
      "Desenvolvemos chatbots personalizados com inteligência artificial que podem atender seus clientes 24/7, responder perguntas frequentes, realizar vendas e muito mais. Integração com WhatsApp, Telegram, Facebook Messenger e seu site.",
    features: [
      "Atendimento 24/7 automatizado",
      "Integração com múltiplas plataformas",
      "Processamento de linguagem natural",
      "Análise de sentimentos",
      "Relatórios e métricas detalhadas",
    ],
  },
  {
    id: 2,
    title: "Landing Pages",
    icon: AppWindow, // você pode trocar o ícone se quiser, algo como "Layout" ou "Monitor" ficaria mais coerente
    description: "Páginas de alta conversão desenvolvidas para destacar sua marca e gerar resultados reais.",
    fullDescription:
      "Criamos landing pages modernas, otimizadas e personalizadas para cada negócio, com foco em atrair, engajar e converter visitantes em clientes. Trabalhamos com design responsivo, SEO técnico, velocidade otimizada e integrações com ferramentas de marketing e análise de dados.",
    features: [
      "Design estratégico voltado à conversão",
      "Desempenho otimizado para SEO e velocidade",
      "Responsividade total para dispositivos móveis",
      "Integração com ferramentas de marketing (Google Ads, Meta, CRM, etc.)",
      "Análises de tráfego e métricas de conversão em tempo real",
      "Copywriting profissional e chamadas de ação personalizadas",
      "Hospedagem segura e monitoramento contínuo",
    ],
  },
  {
    id: 3,
    title: "APIs",
    icon: Code,
    description: "Desenvolvimento de APIs robustas e escaláveis",
    fullDescription:
      "Criamos APIs RESTful e GraphQL seguras, documentadas e de alta performance para integrar seus sistemas e aplicações. Seguimos as melhores práticas de desenvolvimento e segurança.",
    features: [
      "APIs RESTful e GraphQL",
      "Documentação completa",
      "Autenticação e segurança",
      "Alta performance e escalabilidade",
      "Versionamento e manutenção",
    ],
  },
  {
    id: 4,
    title: "Criação de Softwares",
    icon: Layers,
    description: "Desenvolvimento de softwares web e mobile completos",
    fullDescription:
      "Desenvolvemos sistemas completos do zero, desde o planejamento até a implantação. Aplicações web responsivas, aplicativos mobile nativos e híbridos, painéis administrativos e muito mais.",
    features: [
      "Aplicações web responsivas",
      "Aplicativos mobile (iOS e Android)",
      "Painéis administrativos",
      "Integração com sistemas existentes",
      "Suporte e manutenção contínua",
    ],
  },
  {
    id: 5,
    title: "Soluções com IA",
    icon: Brain,
    description: "Soluções inteligentes com Inteligência Artificial",
    fullDescription:
      "Utilizamos IA para automatizar processos, gerar insights e otimizar decisões. Desde análise de dados até assistentes virtuais inteligentes, criamos soluções que pensam junto com você.",
    features: [
      "Rag para alimentação de IA",
      "Automação de Relatórios e Processos",
      "Chatbots e Processamento de Linguagem Natural",
      "Modelos Customizados para Seu Negócio",
    ],
  },
  {
    id: 6,
    title: "Automatização de Serviços",
    icon: Zap,
    description: "Automatização de Processos Empresariais",
    fullDescription:
      "Reduza tarefas manuais e ganhe produtividade com automações inteligentes. Conectamos sistemas, CRMs e planilhas para que sua equipe foque no que realmente importa.",
    features: [
      "Automação via APIs e Webhooks",
      "Integração com Ferramentas Corporativas",
      "Redução de Erros e Tempo Operacional",
      "Fluxos Personalizados sob Medida",
    ],
  },
  {
    id: 7,
    title: "Hospedagem de Serviços",
    icon: Server,
    description: "Hospedagem segura e de alta performance",
    fullDescription:
      "Hospedamos e gerenciamos seus sistemas com segurança, alta performance e suporte 24h. Garantimos estabilidade e escalabilidade sob demanda.",
    features: [
      "VPS Otimizados",
      "Alta Disponibilidade e SSL Gratuito",
      "Monitoramento 24/7",
      "Suporte técnico especializado",
    ],
  },
]

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null)

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Nossos <span className="text-primary">Serviços</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Soluções tecnológicas completas para impulsionar seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card
                  key={service.id}
                  className="border-2 hover:border-primary transition-all cursor-pointer group hover:shadow-lg"
                  onClick={() => setSelectedService(service)}
                >
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="text-primary" size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                    <span className="text-primary font-semibold text-sm group-hover:underline">Saiba mais →</span>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl  max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-4 mb-4">
              {selectedService && (
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <selectedService.icon className="text-primary" size={24} />
                </div>
              )}
              <DialogTitle className="text-2xl ">{selectedService?.title}</DialogTitle>
            </div>
            <DialogDescription className="text-base leading-relaxed">
              {selectedService?.fullDescription}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            <h4 className="font-semibold text-lg mb-4">Principais recursos:</h4>
            <ul className="space-y-3">
              {selectedService?.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center mt-0.5 shrink-0">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span className="text-muted-foreground leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
