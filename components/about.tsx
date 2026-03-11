import { Shield, Clock, Users, Award } from "lucide-react"
import { BrandLogo } from "@/components/brand-logo"

const values = [
  {
    icon: Shield,
    title: "Confiabilidad",
    description: "Infraestructura robusta con 99.9% de uptime garantizado para tu tranquilidad."
  },
  {
    icon: Clock,
    title: "Soporte 24/7",
    description: "Equipo técnico disponible las 24 horas, los 7 días de la semana."
  },
  {
    icon: Users,
    title: "Experiencia",
    description: "Más de 10 años de experiencia en soluciones tecnológicas empresariales."
  },
  {
    icon: Award,
    title: "Excelencia",
    description: "Comprometidos con los más altos estándares de calidad y servicio."
  }
]

export function About() {
  return (
    <section id="nosotros" className="py-24 sm:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="text-gold font-medium mb-4">Sobre Nosotros</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6 text-balance">
              Tu socio tecnológico de confianza
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              En ANKLA Group Inc, nos especializamos en proporcionar soluciones tecnológicas 
              integrales que impulsan el crecimiento y la eficiencia de las empresas.
            </p>
            <p className="text-muted-foreground mb-8 text-pretty">
              Desde telefonía en la nube hasta inteligencia artificial, nuestro equipo de 
              expertos está comprometido con ofrecer servicios de la más alta calidad, 
              adaptados a las necesidades específicas de cada cliente.
            </p>
            
            {/* Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <div key={value.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-gold/20 via-gold/10 to-transparent p-8 lg:p-12">
              <div className="w-full h-full rounded-xl bg-background/50 backdrop-blur-sm border border-border flex items-center justify-center">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-6">
                    <BrandLogo href={null} className="h-16 w-[280px]" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Tecnología que se siente simple</h3>
                  <p className="text-gold font-medium">Diseño • Implementación • Soporte</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gold/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
