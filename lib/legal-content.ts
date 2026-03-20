import type { Lang } from "@/components/language-provider"

export type LegalSection = { heading: string; body: string | string[] }

export type LegalDoc = {
  label: string
  title: string
  intro: string
  sections: LegalSection[]
}

const terms: Record<Lang, LegalDoc> = {
  es: {
    label: "Legal",
    title: "Términos de Servicio",
    intro:
      "Estos términos describen de forma general el uso del sitio web y el contacto con ANKLA Group Inc. Para contratos de servicio, se emiten acuerdos y SLAs específicos por proyecto.",
    sections: [
      {
        heading: "Uso del sitio",
        body:
          "Puedes navegar el contenido y contactarnos para solicitar información. No uses el sitio para actividades ilícitas, abuso, scraping malicioso o intentos de interferir con su operación.",
      },
      {
        heading: "Contenido y propiedad",
        body:
          "El contenido (texto, diseño y materiales) es propiedad de ANKLA Group Inc o de sus licenciantes, salvo donde se indique lo contrario. Las marcas y logotipos pertenecen a sus respectivos dueños.",
      },
      {
        heading: "Limitación de responsabilidad",
        body:
          "La información se ofrece “tal cual” y puede cambiar. Para decisiones críticas se recomienda una evaluación y propuesta formal, con alcance y condiciones definidas.",
      },
      {
        heading: "Servicios",
        body:
          "Los servicios se rigen por acuerdos específicos (alcance, SLAs, precios, confidencialidad). Si deseas una cotización, contáctanos.",
      },
    ],
  },
  en: {
    label: "Legal",
    title: "Terms of Service",
    intro:
      "These terms describe, in general terms, use of this website and contact with ANKLA Group Inc. For service contracts, project‑specific agreements and SLAs are issued separately.",
    sections: [
      {
        heading: "Use of the website",
        body:
          "You may browse the content and contact us to request information. Do not use the site for unlawful activity, abuse, malicious scraping, or attempts to interfere with its operation.",
      },
      {
        heading: "Content and ownership",
        body:
          "Content (text, design and materials) is owned by ANKLA Group Inc or its licensors unless stated otherwise. Trademarks and logos belong to their respective owners.",
      },
      {
        heading: "Limitation of liability",
        body:
          "Information is provided “as is” and may change. For critical decisions, we recommend a formal assessment and proposal with defined scope and terms.",
      },
      {
        heading: "Services",
        body:
          "Services are governed by specific agreements (scope, SLAs, pricing, confidentiality). For a quote, please contact us.",
      },
    ],
  },
}

const privacy: Record<Lang, LegalDoc> = {
  es: {
    label: "Legal",
    title: "Política de Privacidad",
    intro:
      "Esta página describe, de forma general, cómo se recopila y utiliza información al contactar a ANKLA Group Inc. Si necesitas un documento legal formal para tu jurisdicción, lo personalizamos.",
    sections: [
      {
        heading: "Información que recopilamos",
        body: [
          "Datos de contacto (nombre, email, teléfono) cuando envías formularios.",
          "Información de empresa y requerimientos para preparar propuestas.",
          "Métricas anónimas de uso del sitio para mejorar rendimiento y contenido.",
        ],
      },
      {
        heading: "Cómo la usamos",
        body: [
          "Responder solicitudes, cotizaciones y soporte.",
          "Mejorar nuestros servicios, procesos y experiencia digital.",
          "Cumplir obligaciones de seguridad y continuidad.",
        ],
      },
      {
        heading: "Retención y seguridad",
        body:
          "Conservamos la información por el tiempo necesario para los fines descritos y aplicamos medidas razonables de seguridad (acceso restringido, respaldo y prácticas de minimización).",
      },
      {
        heading: "Contacto",
        body:
          "Para preguntas sobre privacidad o solicitudes de acceso o eliminación, contáctanos desde la sección de contacto.",
      },
    ],
  },
  en: {
    label: "Legal",
    title: "Privacy Policy",
    intro:
      "This page describes, in general terms, how information is collected and used when you contact ANKLA Group Inc. If you need a formal legal document for your jurisdiction, we can tailor one.",
    sections: [
      {
        heading: "Information we collect",
        body: [
          "Contact details (name, email, phone) when you submit forms.",
          "Company information and requirements to prepare proposals.",
          "Anonymous site usage metrics to improve performance and content.",
        ],
      },
      {
        heading: "How we use it",
        body: [
          "To respond to requests, quotes and support.",
          "To improve our services, processes and digital experience.",
          "To meet security and business continuity obligations.",
        ],
      },
      {
        heading: "Retention and security",
        body:
          "We retain information for as long as needed for the purposes described and apply reasonable security measures (restricted access, backups and data minimization).",
      },
      {
        heading: "Contact",
        body:
          "For privacy questions or access/deletion requests, contact us through the contact section.",
      },
    ],
  },
}

export function getTermsContent(lang: Lang): LegalDoc {
  return terms[lang] ?? terms.en
}

export function getPrivacyContent(lang: Lang): LegalDoc {
  return privacy[lang] ?? privacy.en
}
