"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Network, Bot } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/10 via-background to-background" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgb(255_255_255_/_0.03)_1px,_transparent_1px),linear-gradient(to_bottom,_rgb(255_255_255_/_0.03)_1px,_transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm text-gold">
            <Bot className="h-4 w-4" />
            <span>Soluciones de IA para tu empresa</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
            Transformamos tu
            <span className="text-gold"> infraestructura </span>
            tecnológica
          </h1>
          
          {/* Subheadline */}
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Telefonía en la nube, redes empresariales, soporte técnico y soluciones de inteligencia artificial. 
            Todo lo que tu empresa necesita para crecer.
          </p>
          
          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-gold text-background hover:bg-gold-light w-full sm:w-auto">
              <Link href="/#contacto">
                Solicitar Consulta
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary w-full sm:w-auto">
              <Link href="/#servicios">
                Ver Servicios
              </Link>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 mb-4">
                <Phone className="h-6 w-6 text-gold" />
              </div>
              <span className="text-3xl font-bold text-foreground">500+</span>
              <span className="text-sm text-muted-foreground">Líneas Activas</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 mb-4">
                <Network className="h-6 w-6 text-gold" />
              </div>
              <span className="text-3xl font-bold text-foreground">150+</span>
              <span className="text-sm text-muted-foreground">Empresas</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 mb-4">
                <Bot className="h-6 w-6 text-gold" />
              </div>
              <span className="text-3xl font-bold text-foreground">99.9%</span>
              <span className="text-sm text-muted-foreground">Uptime</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
