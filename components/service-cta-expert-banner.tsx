"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

type Props = {
  ctaExpert: string
  serviceName: string
}

export function ServiceCtaExpertBanner({ ctaExpert, serviceName }: Props) {
  const { lang } = useLanguage()
  const sub =
    lang === "es"
      ? "Un especialista te contactará para una evaluación sin compromiso."
      : "A specialist will contact you for a no-obligation assessment."
  const buttonText =
    lang === "es"
      ? `Solicitar consultoría gratuita de ${serviceName}`
      : `Request free consultation for ${serviceName}`

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#1e3a5f] border border-[#2a4a6f] p-6 sm:p-8 md:p-10 text-center shadow-xl min-w-0 overflow-hidden">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white break-words">
            {ctaExpert}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-blue-100/90 max-w-lg mx-auto">{sub}</p>
          <div className="mt-6 flex justify-center">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto max-w-full bg-amber-500 hover:bg-amber-400 text-background font-semibold text-center text-sm sm:text-base whitespace-normal min-w-0 h-auto py-3 px-4"
            >
              <Link href="/#contacto" className="inline-flex items-center justify-center gap-2 text-center">
                <span className="break-words">{buttonText}</span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
