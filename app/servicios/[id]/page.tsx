"use client";

import Link from "next/link"
import { notFound, useParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { getServiceById } from "@/lib/services"
import { useLanguage } from "@/components/language-provider"
import { IllustrationPlaceholder } from "@/components/illustration-placeholder"
import { useEffect, useState } from "react"

const ILLUSTRATION_VARIANT: Record<string, "telephony" | "lan" | "support" | "ai"> = {
  "hosted-pbx": "telephony",
  lan: "lan",
  support: "support",
  inbound: "telephony",
  outbound: "telephony",
  "ai-agents": "ai",
  omnichannel: "ai",
}

export default function ServicePage() {
  const params = useParams()
  const id = params?.id as string
  const { lang } = useLanguage()
  const [mounted, setMounted] = useState(false)

  // Prevenir errores de hidratación
  useEffect(() => {
    setMounted(true)
  }, [])

  const service = getServiceById(id)

  // Si no encuentra el servicio, mostramos error
  if (!service) {
    return notFound()
  }

  const locale = service.locales[lang]
  const Icon = service.icon

  if (!mounted) {
    return <div className="min-h-screen bg-background" />
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/10 via-background to-background" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgb(255_255_255_/_0.03)_1px,_transparent_1px),linear-gradient(to_bottom,_rgb(255_255_255_/_0.03)_1px,_transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm text-gold">
                <Icon className="h-4 w-4" />
                <span>{locale.subtitle}</span>
              </div>
              <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-balance">
                {locale.title}
              </h1>
              <p className="mt-5 text-lg text-muted-foreground text-pretty">
                {locale.intro}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-gold text-background hover:bg-gold-light">
                  <Link href="/#contacto">
                    {lang === "es" ? "Solicitar asesoría" : "Request consultation"}
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-border">
                  <Link href="/#servicios">
                    {lang === "es" ? "Ver otros servicios" : "Other services"}
                  </Link>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <IllustrationPlaceholder variant={ILLUSTRATION_VARIANT[service.id] || "ai"} className="min-h-[280px]" />
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="bg-card border-border p-6 rounded-2xl">
              <h2 className="font-semibold text-foreground">
                {lang === "es" ? "Beneficios" : "Benefits"}
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {locale.benefits.map((f, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="bg-card border-border p-6 rounded-2xl lg:col-span-2">
              <h2 className="font-semibold text-foreground">
                {lang === "es" ? "Proceso de trabajo" : "Working process"}
              </h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {locale.process.map((step, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-border bg-background/40 p-4 hover:border-gold/40 transition-colors"
                  >
                    <p className="text-sm text-muted-foreground">
                      <span className="text-gold font-bold mr-2">{i + 1}.</span>
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10 relative overflow-hidden text-center">
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`} />
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                {lang === "es" ? "¿Listo para dar el siguiente paso?" : "Ready to take the next step?"}
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                {locale.cta}
              </p>
              <div className="mt-6 flex justify-center">
                <Button asChild size="lg" className="bg-gold text-background hover:bg-gold-light">
                  <Link href="/#contacto">
                    {lang === "es" ? "Hablar con un especialista" : "Talk to a specialist"}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}