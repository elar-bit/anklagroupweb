import type { ServiceId } from "./services"
import type { Lang } from "@/components/language-provider"

export type FaqItem = { question: string; answer: string }

const faqs: Record<ServiceId, { es: FaqItem[]; en: FaqItem[] }> = {
  "hosted-pbx": {
    es: [
      {
        question: "¿Perderé mi número actual al migrar?",
        answer: "No. Realizamos portabilidad de números o redirección temporal. Tus clientes siguen llamando al mismo número.",
      },
      {
        question: "¿Cuánto tarda la implementación?",
        answer: "Depende del tamaño: desde unos días para oficinas pequeñas hasta 2-4 semanas para multi-sede. Te damos una fecha desde el primer contacto.",
      },
      {
        question: "¿Qué pasa si ya tengo equipos IP?",
        answer: "Muchos equipos son compatibles con nuestra plataforma. Evaluamos tu parque y te decimos qué reutilizar y qué actualizar.",
      },
    ],
    en: [
      {
        question: "Will I lose my current number when migrating?",
        answer: "No. We handle number porting or temporary forwarding. Your customers keep calling the same number.",
      },
      {
        question: "How long does implementation take?",
        answer: "Depends on size: from a few days for small offices to 2-4 weeks for multi-site. We give you a timeline from the first call.",
      },
      {
        question: "What if I already have IP phones?",
        answer: "Many devices are compatible with our platform. We assess your equipment and tell you what to reuse and what to upgrade.",
      },
    ],
  },
  lan: {
    es: [
      {
        question: "¿Tienen que tirar cable en toda la oficina?",
        answer: "Solo donde haga falta. Evaluamos lo existente y proponemos mejoras puntuales o redes nuevas según el caso.",
      },
      {
        question: "¿Pueden trabajar con mi ISP actual?",
        answer: "Sí. Diseñamos la LAN interna y la integración con tu proveedor de internet. No te obligamos a cambiar de ISP.",
      },
      {
        question: "¿Qué garantía dan sobre la estabilidad?",
        answer: "Diseños documentados, equipos enterprise y monitoreo. Incluimos SLA según el nivel de soporte que elijas.",
      },
    ],
    en: [
      {
        question: "Do you have to run cable everywhere?",
        answer: "Only where needed. We assess what exists and propose targeted upgrades or new runs as required.",
      },
      {
        question: "Can you work with my current ISP?",
        answer: "Yes. We design the internal LAN and integration with your internet provider. We don't require you to switch ISPs.",
      },
      {
        question: "What do you guarantee for stability?",
        answer: "Documented designs, enterprise gear and monitoring. We include SLA based on the support level you choose.",
      },
    ],
  },
  support: {
    es: [
      {
        question: "¿Atienden solo en horario de oficina?",
        answer: "Ofrecemos soporte 24/7 para incidentes críticos. Horario extendido o 24/7 completo según el plan que elijas.",
      },
      {
        question: "¿Trabajan con nuestro equipo interno de TI?",
        answer: "Sí. Nos integramos con tu equipo: escalamos, documentamos y coordinamos cambios para no duplicar trabajo.",
      },
      {
        question: "¿Qué tipo de equipos pueden soportar?",
        answer: "Servidores, redes, PCs, software de negocio y comunicaciones unificadas. Definimos alcance en la consultoría inicial.",
      },
    ],
    en: [
      {
        question: "Do you only support during business hours?",
        answer: "We offer 24/7 support for critical incidents. Extended or full 24/7 coverage depending on the plan you choose.",
      },
      {
        question: "Do you work with our internal IT team?",
        answer: "Yes. We integrate with your team: we escalate, document and coordinate changes so we don't duplicate work.",
      },
      {
        question: "What kind of equipment can you support?",
        answer: "Servers, networks, PCs, business software and unified communications. We define scope in the initial consultation.",
      },
    ],
  },
  inbound: {
    es: [
      {
        question: "¿Pueden usar nuestra herramienta de colas/CRM?",
        answer: "Sí. Trabajamos con los sistemas que ya tengas (Zendesk, Freshdesk, HubSpot, etc.) o te recomendamos uno.",
      },
      {
        question: "¿Cómo miden la calidad del servicio?",
        answer: "NPS, CSAT, tiempo de respuesta, resolución en primer contacto. Reportes ejecutivos y grabaciones para mejora continua.",
      },
      {
        question: "¿Escalan en temporada alta?",
        answer: "Sí. Ajustamos capacidad por campaña o temporada para que no pierdas ventas ni saturación en picos.",
      },
    ],
    en: [
      {
        question: "Can you use our queue/CRM tool?",
        answer: "Yes. We work with the systems you already have (Zendesk, Freshdesk, HubSpot, etc.) or recommend one.",
      },
      {
        question: "How do you measure service quality?",
        answer: "NPS, CSAT, response time, first-contact resolution. Executive reports and recordings for continuous improvement.",
      },
      {
        question: "Do you scale for peak season?",
        answer: "Yes. We adjust capacity by campaign or season so you don't lose sales or overload during peaks.",
      },
    ],
  },
  outbound: {
    es: [
      {
        question: "¿Cumplen con normativas de no molestar?",
        answer: "Sí. Incluimos opt-out, listas de exclusión y buenas prácticas por país. Te asesoramos en cumplimiento.",
      },
      {
        question: "¿De dónde salen los datos para llamar?",
        answer: "Tú aportas la base (o la limpiamos nosotros). Nosotros configuramos el proceso, guiones y métricas. No vendemos listas.",
      },
      {
        question: "¿Integran con nuestro CRM?",
        answer: "Sí. Registramos contactos, resultados y siguiente paso en tu CRM para que ventas tenga todo en un solo lugar.",
      },
    ],
    en: [
      {
        question: "Do you comply with do-not-call rules?",
        answer: "Yes. We include opt-out, exclusion lists and best practices by country. We advise on compliance.",
      },
      {
        question: "Where do the calling lists come from?",
        answer: "You provide the database (or we clean it). We set up process, scripts and metrics. We don't sell lists.",
      },
      {
        question: "Do you integrate with our CRM?",
        answer: "Yes. We log contacts, outcomes and next steps in your CRM so sales has everything in one place.",
      },
    ],
  },
  "ai-agents": {
    es: [
      {
        question: "¿Reemplazan a los agentes humanos?",
        answer: "No. Automatizamos tareas repetitivas y calificación; los agentes humanos atienden casos complejos y cierres.",
      },
      {
        question: "¿En qué idiomas pueden operar?",
        answer: "Español e inglés por defecto. Evaluamos otros idiomas según tu mercado y modelo de lenguaje.",
      },
      {
        question: "¿Cuánto tarda en estar en producción?",
        answer: "Pilotos en 2-4 semanas. Producción completa según alcance (flujos, integraciones, pruebas). Te damos un cronograma claro.",
      },
    ],
    en: [
      {
        question: "Do they replace human agents?",
        answer: "No. We automate repetitive tasks and qualification; humans handle complex cases and closing.",
      },
      {
        question: "What languages can they run in?",
        answer: "Spanish and English by default. We evaluate other languages based on your market and language model.",
      },
      {
        question: "How long until we're in production?",
        answer: "Pilots in 2-4 weeks. Full production depends on scope (flows, integrations, testing). We give you a clear timeline.",
      },
    ],
  },
  omnichannel: {
    es: [
      {
        question: "¿Incluye WhatsApp y redes sociales?",
        answer: "Sí. Unificamos canales (voz, chat, WhatsApp, etc.) en una sola cola y contexto para el agente.",
      },
      {
        question: "¿La IA entiende el contexto de la conversación?",
        answer: "Sí. Usamos historial y contexto para respuestas coherentes y escalación cuando hace falta un humano.",
      },
      {
        question: "¿Podemos empezar por un solo canal?",
        answer: "Sí. Puedes arrancar por voz o chat y sumar canales después. La arquitectura está lista para crecer.",
      },
    ],
    en: [
      {
        question: "Does it include WhatsApp and social?",
        answer: "Yes. We unify channels (voice, chat, WhatsApp, etc.) in one queue and context for the agent.",
      },
      {
        question: "Does the AI understand conversation context?",
        answer: "Yes. We use history and context for coherent responses and escalation when a human is needed.",
      },
      {
        question: "Can we start with just one channel?",
        answer: "Yes. You can start with voice or chat and add channels later. The architecture is ready to scale.",
      },
    ],
  },
}

export function getServiceFaqs(serviceId: ServiceId, lang: Lang): FaqItem[] {
  return faqs[serviceId]?.[lang] ?? faqs["hosted-pbx"][lang]
}
