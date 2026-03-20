"use client"

import Link from "next/link"
import { services } from "@/lib/services"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import type { Lang } from "@/components/language-provider"

const pageCopy: Record<
  Lang,
  { label: string; heading: string; intro: string; details: string }
> = {
  es: {
    label: "Servicios",
    heading: "Soluciones a la medida para comunicación, TI e IA",
    intro:
      "Explora cada servicio para ver alcance, entregables y resultados típicos. Si necesitas una propuesta específica, contáctanos y lo aterrizamos en minutos.",
    details: "Ver detalles",
  },
  en: {
    label: "Services",
    heading: "Tailored solutions for communications, IT and AI",
    intro:
      "Explore each service for scope, deliverables and typical outcomes. Need a specific proposal? Contact us and we’ll scope it quickly.",
    details: "View details",
  },
}

export function ServiciosIndexPage() {
  const { lang } = useLanguage()
  const t = pageCopy[lang]
  const locale = lang

  return (
    <section className="pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-gold font-medium mb-3">{t.label}</p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">{t.heading}</h1>
          <p className="mt-4 text-muted-foreground text-pretty">{t.intro}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            const L = service.locales[locale]
            return (
              <Link
                key={service.id}
                href={`/servicios/${service.id}`}
                className="group rounded-2xl border border-border bg-card p-6 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/5 transition-all"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gold/10 mb-4 group-hover:bg-gold/20 transition-colors">
                  <Icon className="h-6 w-6 text-gold" />
                </div>
                <h2 className="text-lg font-semibold text-foreground">{L.title}</h2>
                <p className="text-sm text-gold mt-1">{L.subtitle}</p>
                <p className="mt-3 text-sm text-muted-foreground">{L.intro}</p>
                <div className="mt-5">
                  <Button variant="outline" className="border-border group-hover:border-gold/50">
                    {t.details}
                  </Button>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
