"use client"

import { AlertTriangle, WifiOff, ServerCrash, ShieldCheck, Zap, Headphones } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { SectionReveal } from "@/components/section-reveal"

const problemsEn = [
  {
    icon: ServerCrash,
    title: "Obsolete infrastructure",
    desc: "Legacy PBX and on-premise systems burn budget on maintenance and limit remote work.",
  },
  {
    icon: WifiOff,
    title: "Network outages and instability",
    desc: "Downtime costs you sales, support tickets, and client trust—every minute counts.",
  },
  {
    icon: AlertTriangle,
    title: "Reactive support and hidden costs",
    desc: "Fixing issues after they break is expensive. Without 24/7 coverage, problems escalate.",
  },
]

const problemsEs = [
  {
    icon: ServerCrash,
    title: "Infraestructura obsoleta",
    desc: "PBX antiguos y sistemas locales consumen presupuesto en mantenimiento y limitan el trabajo remoto.",
  },
  {
    icon: WifiOff,
    title: "Caídas de red e inestabilidad",
    desc: "Cada minuto de caída te cuesta ventas, tickets de soporte y la confianza del cliente.",
  },
  {
    icon: AlertTriangle,
    title: "Soporte reactivo y costos ocultos",
    desc: "Reparar cuando ya falló sale caro. Sin cobertura 24/7, los problemas escalan.",
  },
]

const solutionsEn = [
  { icon: Zap, title: "Cloud-first stack", benefit: "Cut telephony and IT costs by up to 60% while scaling in minutes." },
  { icon: ShieldCheck, title: "Stable, monitored networks", benefit: "Proactive monitoring and redundancy so you stay online." },
  { icon: Headphones, title: "24/7 technical support", benefit: "One team, one SLA—incidents and changes under control." },
]

const solutionsEs = [
  { icon: Zap, title: "Stack en la nube", benefit: "Reduce costos de telefonía e IT hasta 60% y escala en minutos." },
  { icon: ShieldCheck, title: "Redes estables y monitoreadas", benefit: "Monitoreo proactivo y redundancia para que no caigas." },
  { icon: Headphones, title: "Soporte técnico 24/7", benefit: "Un equipo, un SLA: incidentes y cambios bajo control." },
]

export function WhyCompaniesLose() {
  const { lang } = useLanguage()
  const isEs = lang === "es"
  const problems = isEs ? problemsEs : problemsEn
  const solutions = isEs ? solutionsEs : solutionsEn

  return (
    <section className="py-24 sm:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-gold font-medium mb-4">
            {isEs ? "¿Por qué las empresas pierden dinero hoy?" : "Why do companies lose money today?"}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {isEs
              ? "Problemas que cuestan. Soluciones que pagan."
              : "Problems that cost. Solutions that pay."}
          </h2>
          <p className="mt-4 text-lg text-gray-200 text-pretty">
            {isEs
              ? "Dejamos atrás el enfoque reactivo. Con ANKLA obtienes infraestructura que reduce costos y evita paradas."
              : "We move past reactive firefighting. With ANKLA you get infrastructure that cuts costs and prevents outages."}
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <SectionReveal delay={0.1}>
            <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-6 lg:p-8">
              <h3 className="text-lg font-semibold text-red-400 mb-6">
                {isEs ? "Lo que te está costando dinero" : "What's costing you money"}
              </h3>
              <ul className="space-y-5">
                {problems.map((p, i) => {
                  const Icon = p.icon
                  return (
                    <li key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-red-400" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{p.title}</p>
                        <p className="text-sm text-gray-300 mt-0.5">{p.desc}</p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="rounded-2xl border border-gold/40 bg-gold/10 p-6 lg:p-8">
              <h3 className="text-lg font-semibold text-gold mb-6">
                {isEs ? "Cómo ANKLA te hace ahorrar y crecer" : "How ANKLA helps you save and grow"}
              </h3>
              <ul className="space-y-5">
                {solutions.map((s, i) => {
                  const Icon = s.icon
                  return (
                    <li key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{s.title}</p>
                        <p className="text-sm text-gray-200 mt-0.5">{s.benefit}</p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
