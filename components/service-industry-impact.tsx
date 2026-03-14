"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { useLanguage } from "@/components/language-provider"
import { getServiceUseCase } from "@/lib/service-use-cases"
import type { ServiceId } from "@/lib/services"
import { Building2, Target, Lightbulb, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

type Props = {
  serviceId: ServiceId
}

export function ServiceIndustryImpact({ serviceId }: Props) {
  const { lang } = useLanguage()
  const data = getServiceUseCase(serviceId, lang)
  const isEs = lang === "es"

  const sectionTitle = isEs ? "Impacto en tu industria" : "Impact on your industry"
  const labels = {
    context: isEs ? "Contexto" : "Context",
    challenge: isEs ? "El reto" : "The challenge",
    solution: isEs ? "La solución ANKLA" : "The ANKLA solution",
    result: isEs ? "Resultado medible" : "Measurable result",
  }

  const blocks = [
    { key: "context" as const, icon: Building2, label: labels.context, value: data.context },
    { key: "challenge" as const, icon: Target, label: labels.challenge, value: data.challenge },
    { key: "solution" as const, icon: Lightbulb, label: labels.solution, value: data.solution },
    { key: "result" as const, icon: TrendingUp, label: labels.result, value: data.result },
  ]

  return (
    <section className="py-16 sm:py-24 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            {sectionTitle}
          </h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto text-sm">
            {isEs
              ? "Un caso de uso por industria para inspirar lo que podemos lograr en tu sector."
              : "A use case per industry to inspire what we can achieve in your sector."}
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div
            className={cn(
              "rounded-2xl border border-border bg-card overflow-hidden",
              "shadow-lg shadow-black/5",
              "bg-gradient-to-b from-card to-card/80"
            )}
          >
            <div className="border-b border-border px-6 py-4 bg-background/50">
              <span className="inline-flex items-center rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold">
                [{data.industryBadge}]
              </span>
            </div>
            <div className="p-6 lg:p-8 space-y-6">
              {blocks.map(({ key, icon: Icon, label, value }) => (
                <div key={key} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold/90 mb-1">
                      {label}
                    </p>
                    <p className="text-gray-200 leading-relaxed">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
