"use client"

import { Shield, Headphones } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useLanguage } from "@/components/language-provider"

export function ServiceWhyAnkla() {
  const { lang } = useLanguage()
  const title = lang === "es" ? "Por qué ANKLA" : "Why ANKLA"
  const uptimeLabel = lang === "es" ? "Uptime garantizado" : "Guaranteed uptime"
  const supportLabel = lang === "es" ? "Soporte 24/7" : "24/7 support"
  const sub =
    lang === "es"
      ? "Infraestructura confiable y un equipo que responde cuando más lo necesita."
      : "Reliable infrastructure and a team that responds when you need it most."

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="rounded-2xl border border-gold/30 bg-gold/5 p-8 md:p-10 max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-6">
              {title}
            </h2>
            <p className="text-center text-gray-300 mb-8">{sub}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 rounded-xl bg-card border border-border p-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gold">99.9%</p>
                  <p className="text-sm text-gray-300">{uptimeLabel}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-xl bg-card border border-border p-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Headphones className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gold">24/7</p>
                  <p className="text-sm text-gray-300">{supportLabel}</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
