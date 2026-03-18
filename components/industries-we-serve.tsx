"use client"

import { Truck, ShoppingBag, HeartPulse, Landmark, GraduationCap } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { SectionReveal } from "@/components/section-reveal"

const industriesEn = [
  { icon: Truck, name: "Logistics", desc: "Dispatch, tracking and customer communication on one platform." },
  { icon: ShoppingBag, name: "Retail", desc: "Stores, e‑commerce and contact centers aligned with your brand." },
  { icon: GraduationCap, name: "Education", desc: "Inbound & outbound campaigns, queues and telephony built for student experiences." },
  { icon: HeartPulse, name: "Healthcare", desc: "Secure, compliant communications for clinics and providers." },
  { icon: Landmark, name: "Finance", desc: "Reliable telephony and support for banks and financial services." },
]

const industriesEs = [
  { icon: Truck, name: "Logística", desc: "Despacho, seguimiento y comunicación con clientes en una sola plataforma." },
  { icon: ShoppingBag, name: "Retail", desc: "Tiendas, e‑commerce y centros de contacto alineados con tu marca." },
  { icon: GraduationCap, name: "Educación", desc: "Campañas inbound/outbound, colas y telefonía listas para experiencias de estudiantes." },
  { icon: HeartPulse, name: "Salud", desc: "Comunicaciones seguras y cumplimiento normativo para clínicas y proveedores." },
  { icon: Landmark, name: "Finanzas", desc: "Telefonía y soporte confiables para banca y servicios financieros." },
]

export function IndustriesWeServe() {
  const { lang } = useLanguage()
  const industries = lang === "es" ? industriesEs : industriesEn

  return (
    <section className="py-24 sm:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-gold font-medium mb-4">
            {lang === "es" ? "Industrias que servimos" : "Industries we serve"}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {lang === "es"
              ? "Experiencia en tu sector"
              : "Experience in your sector"}
          </h2>
          <p className="mt-4 text-lg text-gray-200 text-pretty">
            {lang === "es"
              ? "Logística, retail, salud, finanzas y educación: sabemos los requisitos de cada industria y te entregamos soluciones que encajan."
              : "Logistics, retail, healthcare, finance and education: we know each industry's requirements and deliver solutions that fit."}
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((ind, i) => {
            const Icon = ind.icon
            return (
              <SectionReveal key={ind.name} delay={i * 0.08}>
                <div className="rounded-2xl border border-border bg-card p-6 text-center hover:border-gold/40 transition-colors">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold/10 text-gold mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground">{ind.name}</h3>
                  <p className="mt-2 text-sm text-gray-300">{ind.desc}</p>
                </div>
              </SectionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
