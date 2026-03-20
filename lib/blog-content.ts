import type { Lang } from "@/components/language-provider"

export type BlogPostLocalized = {
  title: string
  excerpt: string
  summary: string
  bullets: string[]
  conclusion: string
}

export const blogPosts: Record<string, Record<Lang, BlogPostLocalized>> = {
  "telefonia-cloud-vs-tradicional": {
    es: {
      title: "Telefonía en la nube vs. central tradicional",
      excerpt: "Qué cambia en costos, escalabilidad, continuidad y analítica cuando migras a Hosted PBX.",
      summary:
        "La diferencia clave no es solo “dónde vive” la PBX: es la velocidad para escalar, medir y asegurar continuidad operativa.",
      bullets: [
        "Costos: pasa de CAPEX (hardware) a OPEX controlado y predecible.",
        "Escalabilidad: agrega extensiones/colas/IVR en minutos, sin visitas técnicas.",
        "Continuidad: redirecciones y softphones reducen impacto ante contingencias.",
        "Analítica: reportes por colas, agentes, horas pico y motivos de contacto.",
      ],
      conclusion:
        "Si tu equipo crece, atiendes múltiples sedes o necesitas reportes para optimizar, Hosted PBX suele ser el siguiente paso natural.",
    },
    en: {
      title: "Cloud telephony vs. traditional PBX",
      excerpt: "What changes in cost, scalability, continuity and analytics when you move to Hosted PBX.",
      summary:
        "The key difference isn’t only where the PBX lives—it’s how fast you can scale, measure and keep operations running.",
      bullets: [
        "Costs: shift from hardware CAPEX to predictable, controlled OPEX.",
        "Scalability: add extensions, queues and IVR in minutes—no truck rolls.",
        "Continuity: forwarding and softphones reduce impact during outages.",
        "Analytics: queue, agent, peak‑hour and contact‑reason reporting.",
      ],
      conclusion:
        "If your team is growing, you run multiple sites, or you need reporting to optimize, Hosted PBX is often the natural next step.",
    },
  },
  "vlan-segmentacion-empresa": {
    es: {
      title: "VLANs y segmentación: seguridad sin complicaciones",
      excerpt: "Buenas prácticas para separar invitados, IoT, voz y operación en una red LAN moderna.",
      summary:
        "Segmentar no es solo “para grandes”: es una forma directa de reducir riesgos y mejorar performance.",
      bullets: [
        "Separa invitados, IoT/cámaras, voz IP y operación para limitar movimientos laterales.",
        "Prioriza voz con QoS y reduce jitter en llamadas.",
        "Simplifica troubleshooting y mantenimiento por segmentos.",
        "Agrega controles por SSID y políticas de acceso por rol/dispositivo.",
      ],
      conclusion:
        "Una LAN bien segmentada es el cimiento para crecer sin que la red se convierta en cuello de botella.",
    },
    en: {
      title: "VLANs and segmentation: security without the headache",
      excerpt: "Best practices to separate guests, IoT, voice and operations on a modern LAN.",
      summary:
        "Segmentation isn’t just for enterprises—it’s a direct way to reduce risk and improve performance.",
      bullets: [
        "Separate guests, IoT/cameras, VoIP and operations to limit lateral movement.",
        "Prioritize voice with QoS and reduce jitter on calls.",
        "Simplify troubleshooting and maintenance by segment.",
        "Add SSID controls and role/device‑based access policies.",
      ],
      conclusion:
        "A well‑segmented LAN is the foundation to scale without the network becoming a bottleneck.",
    },
  },
  "ia-atencion-al-cliente": {
    es: {
      title: "IA en atención al cliente: de FAQ a agentes inteligentes",
      excerpt: "Cómo pasar de automatizaciones básicas a AI Agents con handoff y medición real.",
      summary:
        "Los AI Agents modernos no solo responden: califican, ejecutan pasos y transfieren con contexto.",
      bullets: [
        "Empieza por casos repetitivos (status, horarios, onboarding, FAQs).",
        "Define handoff: cuándo pasa a humano y qué información debe llevar.",
        "Integra con CRM/Helpdesk para leer y escribir datos de forma segura.",
        "Mide: tasa de resolución, ahorro de tiempo, CSAT y motivos de escalamiento.",
      ],
      conclusion:
        "La IA funciona mejor cuando se diseña con objetivos claros, datos mínimos necesarios y métricas desde el día 1.",
    },
    en: {
      title: "AI in customer service: from FAQs to intelligent agents",
      excerpt: "How to move from basic automation to AI agents with handoff and real measurement.",
      summary:
        "Modern AI agents don’t just answer—they qualify, execute steps and transfer with context.",
      bullets: [
        "Start with repetitive cases (status, hours, onboarding, FAQs).",
        "Define handoff: when to route to a human and what context to carry.",
        "Integrate CRM/helpdesk to read/write data securely.",
        "Measure resolution rate, time saved, CSAT and escalation reasons.",
      ],
      conclusion:
        "AI works best when designed with clear goals, minimum necessary data and metrics from day one.",
    },
  },
}

export const blogListCopy = {
  es: {
    label: "Blog",
    heading: "Ideas prácticas para mejorar comunicación y TI",
    intro:
      "Publicaciones pensadas para líderes de operaciones y TI: decisiones, benchmarks y guías accionables.",
    read: "Leer",
    ctaTitle: "¿Quieres un tema específico?",
    ctaText: "Cuéntanos tu industria y publicamos una guía orientada a tu caso.",
    ctaButton: "Sugerir tema",
  },
  en: {
    label: "Blog",
    heading: "Practical ideas to improve communications and IT",
    intro:
      "Articles for operations and IT leaders: decisions, benchmarks and actionable guides.",
    read: "Read",
    ctaTitle: "Want a specific topic?",
    ctaText: "Tell us your industry and we’ll publish a guide tailored to your case.",
    ctaButton: "Suggest a topic",
  },
} as const

export const blogArticleCopy = {
  es: {
    label: "Artículo",
    keyPoints: "Puntos clave",
    conclusion: "Conclusión",
    talkCta: "Hablar con ANKLA",
    back: "Volver al blog",
  },
  en: {
    label: "Article",
    keyPoints: "Key takeaways",
    conclusion: "Conclusion",
    talkCta: "Talk to ANKLA",
    back: "Back to blog",
  },
} as const

export function getBlogPost(slug: string, lang: Lang): BlogPostLocalized | null {
  const post = blogPosts[slug]
  if (!post) return null
  return post[lang] ?? post.en
}
