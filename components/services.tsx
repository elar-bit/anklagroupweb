"use client"

import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { services } from "@/lib/services"
import { useLanguage } from "@/components/language-provider"

export function Services() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const { lang } = useLanguage()

  return (
    <section id="servicios" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-gold font-medium mb-4">
            {lang === "es" ? "Nuestros Servicios" : "Our Services"}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {lang === "es"
              ? "Soluciones tecnológicas integrales para tu empresa"
              : "End‑to‑end technology solutions for your business"}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            {lang === "es"
              ? "Desde telefonía hasta inteligencia artificial, cubrimos todas las necesidades de comunicación y tecnología de tu negocio."
              : "From cloud telephony to artificial intelligence, we cover your company’s key communication and technology needs."}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            const isHovered = hoveredId === service.id
            const locale = service.locales[lang]

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
                <div
                  className={cn(
                    "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity duration-300",
                    service.color,
                    isHovered && "opacity-100"
                  )}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={cn(
                      "flex items-center justify-center w-12 h-12 rounded-xl bg-gold/10 mb-4 transition-all duration-300",
                      isHovered && "bg-gold/20 scale-110"
                    )}
                  >
                    <Icon className="h-6 w-6 text-gold" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {locale.title}
                  </h3>
                  <p className="text-sm text-gold mb-3">{locale.subtitle}</p>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4">{locale.intro}</p>

                  {/* Benefits */}
                  <ul className="space-y-2 mb-4">
                    {locale.benefits.slice(0, 4).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="h-4 w-4 text-gold flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div
                    className={cn(
                      "flex items-center gap-2 text-gold font-medium text-sm transition-all duration-300",
                      isHovered && "translate-x-1"
                    )}
                  >
                    <span>{lang === "es" ? "Saber más" : "Learn more"}</span>
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
