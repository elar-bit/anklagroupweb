"use client"

import { MessageSquare, Settings, Headphones } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { SectionReveal } from "@/components/section-reveal"

const stepsEn = [
  {
    step: 1,
    icon: MessageSquare,
    title: "Consultation",
    desc: "We assess your current setup, pain points and goals. You get a clear roadmap and quote—no surprises.",
  },
  {
    step: 2,
    icon: Settings,
    title: "Implementation",
    desc: "Design, deploy and migrate with minimal disruption. We handle the tech so you keep running.",
  },
  {
    step: 3,
    icon: Headphones,
    title: "24/7 Support",
    desc: "One team for incidents, changes and questions. Proactive monitoring so you stay online.",
  },
]

const stepsEs = [
  {
    step: 1,
    icon: MessageSquare,
    title: "Consultoría",
    desc: "Evaluamos tu situación actual, dolores y objetivos. Recibes una hoja de ruta y cotización claras.",
  },
  {
    step: 2,
    icon: Settings,
    title: "Implementación",
    desc: "Diseñamos, desplegamos y migramos con mínima interrupción. Nosotros nos encargamos de la tecnología.",
  },
  {
    step: 3,
    icon: Headphones,
    title: "Soporte 24/7",
    desc: "Un solo equipo para incidentes, cambios y dudas. Monitoreo proactivo para que no caigas.",
  },
]

export function ProcessSteps() {
  const { lang } = useLanguage()
  const steps = lang === "es" ? stepsEs : stepsEn

  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-gold font-medium mb-4">
            {lang === "es" ? "Proceso" : "Process"}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {lang === "es"
              ? "Tres pasos. Sin complicaciones."
              : "Three steps. No hassle."}
          </h2>
          <p className="mt-4 text-lg text-gray-200 text-pretty">
            {lang === "es"
              ? "De la primera conversación al soporte continuo: un proceso claro y predecible."
              : "From first conversation to ongoing support: a clear, predictable process."}
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <SectionReveal key={s.step} delay={i * 0.1}>
                <div className="relative rounded-2xl border border-border bg-card p-6 lg:p-8 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gold/15 text-gold mb-5">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="text-sm font-semibold text-gold">
                    {lang === "es" ? "Paso" : "Step"} {s.step}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-3 text-gray-200 text-sm leading-relaxed">{s.desc}</p>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border -translate-y-1/2" aria-hidden />
                  )}
                </div>
              </SectionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
