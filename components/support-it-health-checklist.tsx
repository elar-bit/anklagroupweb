"use client"

import { useState } from "react"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"

const QUESTIONS = [
  { id: "backups", es: "¿Tienes backups diarios verificados?", en: "Do you have verified daily backups?" },
  { id: "firewall", es: "¿Tu firewall está actualizado y monitoreado?", en: "Is your firewall up to date and monitored?" },
  { id: "phishing", es: "¿Tus empleados saben identificar phishing?", en: "Do your employees know how to spot phishing?" },
] as const

export function SupportItHealthChecklist() {
  const { lang } = useLanguage()
  const [answers, setAnswers] = useState<Record<string, boolean | null>>({
    backups: null,
    firewall: null,
    phishing: null,
  })
  const isEs = lang === "es"

  const total = QUESTIONS.length
  const yesCount = Object.values(answers).filter((v) => v === true).length
  const allAnswered = Object.values(answers).every((v) => v !== null)

  const resultTitle = isEs ? "Diagnóstico rápido" : "Quick diagnosis"
  const resultInvite =
    isEs
      ? "¿Quieres una auditoría gratuita de tu infraestructura? Un experto puede revisar contigo estos puntos y más."
      : "Want a free audit of your infrastructure? An expert can review these points and more with you."
  const ctaAudit = isEs ? "Solicitar auditoría gratuita" : "Request free audit"

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="rounded-2xl border border-border bg-card p-6 lg:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {isEs ? "Checklist de salud IT" : "IT health checklist"}
            </h3>
            <p className="text-sm text-gray-300 mb-6">
              {isEs
                ? "Responde en segundos. Te daremos una recomendación."
                : "Answer in seconds. We'll give you a recommendation."}
            </p>
            <ul className="space-y-4">
              {QUESTIONS.map((q) => (
                <li key={q.id} className="flex items-center justify-between gap-4 py-2 border-b border-border last:border-0">
                  <span className="text-gray-200">{isEs ? q.es : q.en}</span>
                  <div className="flex gap-2 flex-shrink-0">
                    <button
                      type="button"
                      onClick={() => setAnswers((p) => ({ ...p, [q.id]: true }))}
                      className={cn(
                        "w-9 h-9 rounded-lg flex items-center justify-center transition-colors",
                        answers[q.id] === true ? "bg-emerald-500/20 text-emerald-400" : "bg-muted hover:bg-muted/80 text-muted-foreground"
                      )}
                      aria-pressed={answers[q.id] === true}
                    >
                      <Check className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setAnswers((p) => ({ ...p, [q.id]: false }))}
                      className={cn(
                        "w-9 h-9 rounded-lg flex items-center justify-center transition-colors",
                        answers[q.id] === false ? "bg-red-500/20 text-red-400" : "bg-muted hover:bg-muted/80 text-muted-foreground"
                      )}
                      aria-pressed={answers[q.id] === false}
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            {allAnswered && (
              <div className="mt-8 rounded-xl bg-gold/10 border border-gold/30 p-4 text-center">
                <p className="font-medium text-foreground">{resultTitle}</p>
                <p className="text-sm text-gray-300 mt-1">
                  {yesCount === total
                    ? isEs
                      ? "Tienes buenas bases. Podemos ayudarte a consolidar y monitorear 24/7."
                      : "You have solid foundations. We can help you consolidate and monitor 24/7."
                    : isEs
                      ? "Hay puntos que conviene reforzar. Una auditoría gratuita te da un plan claro."
                      : "Some areas need reinforcement. A free audit gives you a clear plan."}
                </p>
                <p className="text-sm text-gray-200 mt-2">{resultInvite}</p>
                <Button asChild className="mt-4 bg-gold text-background hover:bg-gold-light">
                  <Link href="/#contacto">{ctaAudit}</Link>
                </Button>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
