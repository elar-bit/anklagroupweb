"use client"

import { Check } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useLanguage } from "@/components/language-provider"

type Props = {
  solutions: string[]
}

export function ServiceSolutionSection({ solutions }: Props) {
  const { lang } = useLanguage()
  const title = lang === "es" ? "La solución ANKLA" : "The ANKLA solution"
  const subtitle =
    lang === "es"
      ? "Nuestra tecnología elimina esos problemas de raíz."
      : "Our technology removes those problems at the source."

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            {title}
          </h2>
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
        </ScrollReveal>
        <ScrollReveal>
          <ul className="max-w-3xl mx-auto space-y-4">
            {solutions.map((s, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                </span>
                <span className="text-gray-200 leading-relaxed">{s}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  )
}
