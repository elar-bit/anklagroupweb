"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { useLanguage } from "@/components/language-provider"

type Result = { value: string; label: string }

type Props = {
  results: Result[]
}

export function ServiceExpectedResults({ results }: Props) {
  const { lang } = useLanguage()
  const title = lang === "es" ? "Resultados esperados" : "Expected results"
  const subtitle =
    lang === "es"
      ? "Impacto real que puedes esperar con ANKLA."
      : "Real impact you can expect with ANKLA."

  return (
    <section className="py-16 sm:py-24 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            {title}
          </h2>
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {results.map((r, i) => (
            <ScrollReveal key={i}>
              <div className="rounded-2xl border border-border bg-card p-6 lg:p-8 text-center">
                <p className="text-3xl sm:text-4xl font-bold text-gold tracking-tight">
                  {r.value}
                </p>
                <p className="mt-2 text-sm text-gray-300">{r.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
