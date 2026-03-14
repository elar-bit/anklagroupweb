"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { getServiceFaqs } from "@/lib/service-faqs"
import type { ServiceId } from "@/lib/services"
import { useLanguage } from "@/components/language-provider"

export function ServiceFaq({ serviceId }: { serviceId: ServiceId }) {
  const { lang } = useLanguage()
  const items = getServiceFaqs(serviceId, lang)
  const title = lang === "es" ? "Preguntas frecuentes" : "Frequently asked questions"

  return (
    <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
      <h3 className="text-lg font-semibold text-foreground mb-6">{title}</h3>
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border-border">
            <AccordionTrigger className="text-left text-foreground hover:text-gold hover:no-underline py-4">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 text-sm leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
