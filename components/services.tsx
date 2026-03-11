"use client"

import { useState } from "react"
import { 
  ArrowRight,
  Check
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { services } from "@/lib/services"

export function Services() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section id="servicios" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-gold font-medium mb-4">Nuestros Servicios</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Soluciones tecnológicas integrales para tu empresa
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Desde telefonía hasta inteligencia artificial, cubrimos todas las necesidades de comunicación y tecnología de tu negocio.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            const isHovered = hoveredId === service.id
            
            return (
              <Link
                key={service.id}
                href={`/servicios/${service.id}`}
                className={cn(
                  "group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300",
                  "hover:border-gold/50 hover:shadow-lg hover:shadow-gold/5",
                  isHovered && "border-gold/50 shadow-lg shadow-gold/5"
                )}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Gradient background */}
                <div className={cn(
                  "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity duration-300",
                  service.color,
                  isHovered && "opacity-100"
                )} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={cn(
                    "flex items-center justify-center w-12 h-12 rounded-xl bg-gold/10 mb-4 transition-all duration-300",
                    isHovered && "bg-gold/20 scale-110"
                  )}>
                    <Icon className="h-6 w-6 text-gold" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gold mb-3">{service.subtitle}</p>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-gold flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA */}
                  <div className={cn(
                    "flex items-center gap-2 text-gold font-medium text-sm transition-all duration-300",
                    isHovered && "translate-x-1"
                  )}>
                    <span>Saber más</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
