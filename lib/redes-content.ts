import type { Lang } from "@/components/language-provider"

export const redesCopy = {
  es: {
    label: "Comunidad",
    heading: "Redes y recursos",
    intro:
      "Estamos preparando nuestros canales oficiales. Mientras tanto, puedes contactarnos y te compartimos el canal ideal según tu necesidad (ventas, soporte o alianzas).",
    salesTitle: "Ventas",
    salesText: "Cotizaciones, demos y diseño de soluciones para tu empresa.",
    salesCta: "Solicitar demo",
    supportTitle: "Soporte",
    supportText: "Atención a incidentes, monitoreo y acompañamiento.",
    supportCta: "Abrir ticket",
    partnersTitle: "Alianzas",
    partnersText: "Partners, integraciones y proyectos conjuntos.",
    partnersCta: "Escribirnos",
  },
  en: {
    label: "Community",
    heading: "Social & resources",
    intro:
      "We’re preparing our official channels. In the meantime, contact us and we’ll point you to the right channel for sales, support or partnerships.",
    salesTitle: "Sales",
    salesText: "Quotes, demos and solution design for your business.",
    salesCta: "Request a demo",
    supportTitle: "Support",
    supportText: "Incident handling, monitoring and guidance.",
    supportCta: "Open a ticket",
    partnersTitle: "Partnerships",
    partnersText: "Partners, integrations and joint projects.",
    partnersCta: "Contact us",
  },
} as const

export function getRedesCopy(lang: Lang) {
  return lang === "es" ? redesCopy.es : redesCopy.en
}
