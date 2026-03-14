"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { getServiceFaqs } from "@/lib/service-faqs"
import { useLanguage } from "@/components/language-provider"
import { ScrollReveal } from "@/components/scroll-reveal"
import type { ServiceId } from "@/lib/services"
import { HelpCircle } from "lucide-react"

type Props = {
  serviceId: ServiceId
}

export function ServiceFaqSection({ serviceId }: Props) {
  const { lang } = useLanguage()
  const items = getServiceFaqs(serviceId, lang)
  const title = lang === "es" ? "Preguntas frecuentes" : "Frequently asked questions"
  const subtitle =
    lang === "es"
      ? "Resolvemos las dudas más comunes de forma clara y sencilla."
      : "We answer the most common questions in plain language."

  return (
    <section className="py-16 sm:py-24 bg-muted/30" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold/10 text-gold mb-4">
            <HelpCircle className="h-6 w-6" />
          </div>
          <h2
            id="faq-heading"
            className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground"
          >
            {title}
          </h2>
          <p className="mt-3 text-gray-300 max-w-xl mx-auto text-base">
            {subtitle}
          </p>
        </ScrollReveal>

        <ScrollReveal className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-border bg-card/80 shadow-sm overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              {items.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border-border px-6 last:border-b-0"
                >
                  <AccordionTrigger className="py-5 text-left text-foreground font-medium hover:text-gold hover:no-underline [&[data-state=open]>svg]:rotate-180">
                    <span className="pr-4 text-base leading-snug">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-base leading-relaxed pb-5 pt-0">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
