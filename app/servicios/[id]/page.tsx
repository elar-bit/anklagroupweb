"use client"

import Image from "next/image"
import Link from "next/link"
import { notFound, useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { getServiceById } from "@/lib/services"
import { SERVICE_ASSETS } from "@/lib/service-assets"
import { useLanguage } from "@/components/language-provider"
import { ScrollReveal } from "@/components/scroll-reveal"
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

  if (!service) {
    return notFound()
  }

  const locale = service.locales[lang]
  const Icon = service.icon
  const isEs = lang === "es"

  if (!mounted) {
    return <div className="min-h-screen bg-background" />
  }

  const block1Title = assets?.block1Title ? (isEs ? assets.block1Title.es : assets.block1Title.en) : null
  const block2Title = assets?.block2Title ? (isEs ? assets.block2Title.es : assets.block2Title.en) : null
  const block1Body = assets?.block1Body ? (isEs ? assets.block1Body.es : assets.block1Body.en) : null
  const block2Body = assets?.block2Body ? (isEs ? assets.block2Body.es : assets.block2Body.en) : null

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero: mismo espaciado que Home para que el logo no se superponga */}
      <section className="relative pt-32 md:pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/10 via-background to-background" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgb(255_255_255_/_0.03)_1px,_transparent_1px),linear-gradient(to_bottom,_rgb(255_255_255_/_0.03)_1px,_transparent_1px)] bg-[size:4rem_4rem]" />
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
                <p className="mt-5 text-lg text-muted-foreground text-pretty">{locale.intro}</p>
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
                  <Image
                    src={assets.svg1}
                    alt=""
                    width={400}
                    height={300}
                    className="w-full max-w-sm h-auto object-contain"
                  />
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bloque 2: imagen izquierda, texto derecha (layout Z) */}
      {assets?.svg2 && (block1Title != null || block1Body != null) && (
        <section className="py-16 bg-card/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className="flex justify-center order-2 lg:order-1">
                  <Image
                    src={assets.svg2}
                    alt=""
                    width={400}
                    height={300}
                    className="w-full max-w-sm h-auto object-contain"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  {block1Title && (
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                      {block1Title}
                    </h2>
                  )}
                  {block1Body && (
                    <p className="mt-4 text-muted-foreground text-pretty">{block1Body}</p>
                  )}
                  <div className="mt-6">
                    <Button asChild className="bg-gold text-background hover:bg-gold-light">
                      <Link href="/#contacto">
                        {isEs ? "Hablar con un especialista" : "Talk to a specialist"}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Bloque 3: texto izquierda, imagen derecha (segundo SVG si hay dos bloques de copy) */}
      {assets?.svg1 && (block2Title != null || block2Body != null) && (
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div>
                  {block2Title && (
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                      {block2Title}
                    </h2>
                  )}
                  {block2Body && (
                    <p className="mt-4 text-muted-foreground text-pretty">{block2Body}</p>
                  )}
                  <div className="mt-6">
                    <Button asChild variant="outline" className="border-border">
                      <Link href="/#contacto">
                        {isEs ? "Solicitar propuesta" : "Request a proposal"}
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Image
                    src={assets.svg1}
                    alt=""
                    width={400}
                    height={300}
                    className="w-full max-w-sm h-auto object-contain"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Beneficios y proceso */}
      <section className="py-16 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="bg-card border-border p-6 rounded-2xl">
                <h2 className="font-semibold text-foreground">
                  {isEs ? "Beneficios" : "Benefits"}
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {locale.benefits.map((f, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className="bg-card border-border p-6 rounded-2xl lg:col-span-2">
                <h2 className="font-semibold text-foreground">
                  {isEs ? "Proceso de trabajo" : "Working process"}
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
          </ScrollReveal>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-3xl border border-border bg-card p-8 md:p-10 relative overflow-hidden text-center">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`} />
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  {isEs ? "¿Listo para dar el siguiente paso?" : "Ready to take the next step?"}
                </h2>
                <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{locale.cta}</p>
                <div className="mt-6 flex justify-center">
                  <Button asChild size="lg" className="bg-gold text-background hover:bg-gold-light">
                    <Link href="/#contacto">
                      {isEs ? "Hablar con un especialista" : "Talk to a specialist"}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
