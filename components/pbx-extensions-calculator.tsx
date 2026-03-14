"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { useLanguage } from "@/components/language-provider"
import { ScrollReveal } from "@/components/scroll-reveal"
import { MapPin } from "lucide-react"

type Props = {
  useCaseTitle?: string
  useCaseBody?: string
}

export function PbxExtensionsCalculator({ useCaseTitle, useCaseBody }: Props) {
  const { lang } = useLanguage()
  const [extensions, setExtensions] = useState(20)
  const isEs = lang === "es"

  const title = isEs ? "Calculadora de ahorro" : "Savings calculator"
  const sub =
    isEs
      ? "¿Cuántas extensiones tienes hoy? Descubre cuánto podrías ahorrar."
      : "How many extensions do you have today? See how much you could save."
  const extensionsLabel = isEs ? "Extensiones actuales" : "Current extensions"
  const resultText =
    isEs
      ? "Ahorra hasta un 60% en costos de mantenimiento y hardware comparado con sistemas tradicionales."
      : "Save up to 60% on maintenance and hardware costs compared to traditional systems."

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <ScrollReveal>
            <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-1">{title}</h3>
              <p className="text-sm text-gray-300 mb-6">{sub}</p>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">{extensionsLabel}</span>
                    <span className="font-medium text-foreground">{extensions}</span>
                  </div>
                  <Slider
                    value={[extensions]}
                    onValueChange={([v]) => setExtensions(v)}
                    min={5}
                    max={150}
                    step={5}
                    className="[&_[data-slot=slider-range]]:bg-gold"
                  />
                </div>
                <div className="rounded-xl bg-gold/10 border border-gold/30 p-4">
                  <p className="text-sm text-gray-200 leading-relaxed">{resultText}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          {useCaseTitle && useCaseBody && (
            <ScrollReveal>
              <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
                <div className="flex items-center gap-2 text-gold mb-3">
                  <MapPin className="h-5 w-5" />
                  <span className="font-semibold">{useCaseTitle}</span>
                </div>
                <p className="text-gray-200 leading-relaxed">{useCaseBody}</p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  )
}
