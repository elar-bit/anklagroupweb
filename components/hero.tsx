"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Network, Bot } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

const HERO_VIDEO_SRC = "/particles.mp4"

export function Hero() {
  const { lang } = useLanguage()

  const copy =
    lang === "es"
      ? {
          badge: "Soluciones de IA para tu empresa",
          title1: "Transformamos tu",
          title2: " infraestructura ",
          title3: "tecnológica",
          subtitle:
            "Telefonía en la nube, redes empresariales, soporte técnico y soluciones de inteligencia artificial. Todo lo que tu empresa necesita para crecer.",
          primaryCta: "Solicitar consulta",
          secondaryCta: "Ver servicios",
          statLines: ["Líneas activas", "Empresas", "Uptime"],
        }
      : {
          badge: "AI‑powered solutions for your business",
          title1: "We transform your",
          title2: " technology ",
          title3: "infrastructure",
          subtitle:
            "Cloud telephony, enterprise networking, managed IT support and AI solutions. Everything your business needs to scale with confidence.",
          primaryCta: "Request a consultation",
          secondaryCta: "View services",
          statLines: ["Active lines", "Companies", "Uptime"],
        }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-24">
      <video
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        muted
        autoPlay
        loop
        playsInline
        aria-hidden
        src={HERO_VIDEO_SRC}
      />
      <div className="absolute inset-0 bg-blue-900/40" aria-hidden />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgb(255_255_255_/_0.03)_1px,_transparent_1px),linear-gradient(to_bottom,_rgb(255_255_255_/_0.03)_1px,_transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm text-gold">
              <Bot className="h-4 w-4" />
              <span>{copy.badge}</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
              {copy.title1}
              <span className="text-gold">{copy.title2}</span>
              {copy.title3}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-pretty">
              {copy.subtitle}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button asChild size="lg" className="bg-gold text-background hover:bg-gold-light w-full sm:w-auto">
                <Link href="/#contacto">
                  {copy.primaryCta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary w-full sm:w-auto">
                <Link href="/#servicios">{copy.secondaryCta}</Link>
              </Button>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 mb-2">
                  <Phone className="h-6 w-6 text-gold" />
                </div>
                <span className="text-2xl font-bold text-foreground">500+</span>
                <span className="text-xs text-muted-foreground">{copy.statLines[0]}</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 mb-2">
                  <Network className="h-6 w-6 text-gold" />
                </div>
                <span className="text-2xl font-bold text-foreground">150+</span>
                <span className="text-xs text-muted-foreground">{copy.statLines[1]}</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 mb-2">
                  <Bot className="h-6 w-6 text-gold" />
                </div>
                <span className="text-2xl font-bold text-foreground">99.9%</span>
                <span className="text-xs text-muted-foreground">{copy.statLines[2]}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center order-1 lg:order-2">
            <Image src="/home1.svg" alt="" width={480} height={360} className="w-full max-w-md h-auto object-contain" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
