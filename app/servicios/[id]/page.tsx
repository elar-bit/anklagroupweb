"use client"

import Image from "next/image"
import Link from "next/link"
import { notFound, useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { getServiceById } from "@/lib/services"
import { getServicePersuasion } from "@/lib/service-persuasion"
import { SERVICE_ASSETS } from "@/lib/service-assets"
import { useLanguage } from "@/components/language-provider"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ServiceProblemSection } from "@/components/service-problem-section"
import { ServiceSolutionSection } from "@/components/service-solution-section"
import { ServiceExpectedResults } from "@/components/service-expected-results"
import { ServiceCtaExpertBanner } from "@/components/service-cta-expert-banner"
import { ServiceFaqSection } from "@/components/service-faq-section"
import { ServiceInteractive } from "@/components/service-interactive"
import { StickyDemoCta } from "@/components/sticky-demo-cta"
import type { ServiceId } from "@/lib/services"

export default function ServicePage() {
  const params = useParams()
  const id = (params?.id as string) as ServiceId | undefined
  const { lang } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const service = id ? getServiceById(id) : null
  const assets = id && service ? SERVICE_ASSETS[id as ServiceId] : null
  const persuasion = id && service ? getServicePersuasion(service.id, lang) : null

  if (!service) {
    return notFound()
  }

  const locale = service.locales[lang]
  const Icon = service.icon
  const isEs = lang === "es"

  if (!mounted) {
    return <div className="min-h-screen bg-background" />
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgb(255_255_255_/_0.02)_1px,_transparent_1px),linear-gradient(to_bottom,_rgb(255_255_255_/_0.02)_1px,_transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm text-gold">
                  <Icon className="h-4 w-4" />
                  <span>{locale.subtitle}</span>
                </div>
                <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-balance">
                  {locale.title}
                </h1>
                <p className="mt-5 text-lg text-gray-200 text-pretty">{locale.intro}</p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg" className="bg-gold text-background hover:bg-gold-light">
                    <Link href="/#contacto">
                      {isEs ? "Solicitar asesoría" : "Request consultation"}
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-border">
                    <Link href="/#servicios">{isEs ? "Ver otros servicios" : "Other services"}</Link>
                  </Button>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                {assets?.svg1 && (
                  <div className="relative w-full max-w-md flex justify-center items-center p-4">
                    <div
                      className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_75%_75%_at_50%_50%,rgba(56,189,248,0.14),transparent_65%)] pointer-events-none"
                      aria-hidden
                    />
                    <div className="relative rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8 flex justify-center items-center w-full min-h-[240px]">
                      <Image
                        src={assets.svg1}
                        alt=""
                        width={420}
                        height={320}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* El Problema */}
      {persuasion && (
        <ServiceProblemSection problems={persuasion.problems} />
      )}

      {/* La Solución ANKLA */}
      {persuasion && (
        <ServiceSolutionSection solutions={persuasion.solutions} />
      )}

      {/* Componente interactivo por servicio */}
      {persuasion && (
        <ServiceInteractive serviceId={service.id} data={persuasion} />
      )}

      {/* Resultados esperados */}
      {persuasion && (
        <ServiceExpectedResults results={persuasion.expectedResults} />
      )}

      {/* Preguntas frecuentes */}
      <ServiceFaqSection serviceId={service.id} />

      {/* CTA Final: Hablar con un experto */}
      {persuasion && (
        <ServiceCtaExpertBanner ctaExpert={persuasion.ctaExpert} />
      )}

      <StickyDemoCta />
      <Footer />
    </main>
  )
}
