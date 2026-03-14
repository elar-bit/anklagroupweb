"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

type Props = {
  ctaExpert: string
}

export function ServiceCtaExpertBanner({ ctaExpert }: Props) {
  const { lang } = useLanguage()
  const sub =
    lang === "es"
      ? "Un especialista te contactará para una evaluación sin compromiso."
      : "A specialist will contact you for a no-obligation assessment."

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-2xl bg-[#1e3a5f] border border-[#2a4a6f] p-8 md:p-10 text-center shadow-xl">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            {ctaExpert}
          </h2>
          <p className="mt-2 text-blue-100/90 max-w-lg mx-auto">{sub}</p>
          <Button
            asChild
            size="lg"
            className="mt-6 bg-amber-500 hover:bg-amber-400 text-background font-semibold"
          >
            <Link href="/#contacto">
              {lang === "es" ? "Ir al formulario" : "Go to form"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
