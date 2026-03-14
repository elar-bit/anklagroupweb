"use client"

import type { PainPoint } from "@/lib/service-persuasion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useLanguage } from "@/components/language-provider"
import { AlertTriangle } from "lucide-react"

type Props = {
  problems: PainPoint[]
}

export function ServiceProblemSection({ problems }: Props) {
  const { lang } = useLanguage()
  const title =
    lang === "es"
      ? "¿Su empresa enfrenta estos retos?"
      : "Does your company face these challenges?"
  const subtitle =
    lang === "es"
      ? "Identifique los dolores más comunes que resolvemos cada día."
      : "Identify the most common pains we solve every day."

  return (
    <section className="py-16 sm:py-24 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            {title}
          </h2>
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((p, i) => (
            <ScrollReveal key={i} className="flex">
              <div className="rounded-2xl border border-border bg-card p-6 flex flex-col flex-1">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-300 leading-relaxed flex-1">
                  {p.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
