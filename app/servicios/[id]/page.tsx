"use client";

import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { getServiceById } from "@/lib/services"
import { useLanguage } from "@/components/language-provider"
import { useEffect, useState } from "react"

type PageProps = {
  params: { id: string }
}



export default async function ServicePage({ params }: PageProps) {
  const { id } = params
  const service = getServiceById(id)
  if (!service) notFound()

  const Icon = service.icon

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ClientServiceSection serviceId={service.id} Icon={Icon} color={service.color} />
      <Footer />
    </main>
  )
}

type ClientSectionProps = {
  serviceId: string
  Icon: typeof import("lucide-react").Phone
  color: string
}

function ClientServiceSection({ serviceId, Icon, color }: ClientSectionProps) {
  const { lang } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const service = getServiceById(serviceId)
  if (!service) return null
  const locale = service.locales[lang]

  const sectionTitle =
    lang === "es" ? "Un proceso simple, medible y sin fricción" : "A simple, measurable and low‑friction process"
  const sectionIntro =
    lang === "es"
      ? "Diseñamos la solución, la implementamos y la dejamos operativa con documentación y acompañamiento."
      : "We design, implement and hand over the solution fully documented and ready to operate."

  const steps =
    lang === "es"
      ? [
          { step: "01", title: "Diagnóstico", text: "Entendemos tu operación, objetivos y restricciones." },
          {
            step: "02",
            title: "Diseño",
            text: "Definimos arquitectura, alcance y un plan de entregas por hitos.",
          },
          {
            step: "03",
            title: "Implementación",
            text: "Configuramos, probamos y lanzamos de forma controlada.",
          },
          {
            step: "04",
            title: "Soporte",
            text: "Monitoreamos, medimos y ajustamos de manera continua.",
          },
        ]
      : [
          { step: "01", title: "Discovery", text: "We map your operation, goals and constraints." },
          {
            step: "02",
            title: "Design",
            text: "We define architecture, scope and a milestone‑based delivery plan.",
          },
          {
            step: "03",
            title: "Implementation",
            text: "We configure, test and go live in a controlled way.",
          },
          {
            step: "04",
            title: "Support",
            text: "We monitor, measure and continuously improve.",
          },
        ]

  const readyTitle = lang === "es" ? "¿Listo para empezar?" : "Ready to get started?"
  const readyText =
    lang === "es"
      ? "Cuéntanos tu caso y te recomendamos el mejor camino: alcance, tiempos y una propuesta clara."
      : "Tell us about your case and we’ll recommend the best path: scope, timelines and a clear proposal."
  const primaryCta = lang === "es" ? "Hablar con un especialista" : "Talk to a specialist"
  const secondaryCta = lang === "es" ? "Explorar más servicios" : "Explore more services"
  const includesTitle = lang === "es" ? "Qué incluye" : "What’s included"
  const resultsTitle = lang === "es" ? "Resultados típicos" : "Typical outcomes"

  if (!mounted) {
    return null
  }

  return (
    <>
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/10 via-background to-background" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgb(255_255_255_/_0.03)_1px,_transparent_1px),linear-gradient(to_bottom,_rgb(255_255_255_/_0.03)_1px,_transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm text-gold">
              <Icon className="h-4 w-4" />
              <span>{locale.subtitle}</span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-balance">
              {locale.title}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground text-pretty">{service.description}</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-gold text-background hover:bg-gold-light">
                <Link href="/#contacto">Solicitar asesoría</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border">
                <Link href="/servicios">Ver todos los servicios</Link>
              </Button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="bg-card border-border p-6 rounded-2xl">
              <h2 className="font-semibold text-foreground">{includesTitle}</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {locale.benefits.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="bg-card border-border p-6 rounded-2xl lg:col-span-2">
              <h2 className="font-semibold text-foreground">{resultsTitle}</h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.locales[lang].process.map((o) => (
                  <div
                    key={o}
                    className="rounded-xl border border-border bg-background/40 p-4 hover:border-gold/40 transition-colors"
                  >
                    <p className="text-sm text-muted-foreground">{o}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-gold font-medium mb-3">{lang === "es" ? "Implementación" : "Implementation"}</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">{sectionTitle}</h2>
              <p className="mt-4 text-muted-foreground text-pretty">{sectionIntro}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {steps.map((s) => (
                <div key={s.step} className="rounded-2xl border border-border bg-background/40 p-5">
                  <div className="text-gold font-semibold">{s.step}</div>
                  <div className="mt-2 font-semibold text-foreground">{s.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10 relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-60`} />
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground text-balance">
                {readyTitle}
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl text-pretty">{readyText}</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-gold text-background hover:bg-gold-light">
                  <Link href="/#contacto">{primaryCta}</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-border">
                  <Link href="/servicios">{secondaryCta}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}