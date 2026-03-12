import type { ServiceId } from "./services"

export type ServiceAssets = {
  svg1: string
  svg2: string
  /** Optional extra block title (e.g. "Use cases") — key for i18n */
  block1Title?: { es: string; en: string }
  block2Title?: { es: string; en: string }
  block1Body?: { es: string; en: string }
  block2Body?: { es: string; en: string }
}

export const SERVICE_ASSETS: Record<ServiceId, ServiceAssets> = {
  "hosted-pbx": {
    svg1: "/hosted1.svg",
    svg2: "/hosted2.svg",
    block1Title: { es: "Telefonía IP y escalabilidad", en: "IP telephony and scalability" },
    block2Title: { es: "Ahorro de costos y flexibilidad", en: "Cost savings and flexibility" },
    block1Body: {
      es: "Centrales en la nube con VoIP de alta calidad, IVR, colas y extensiones ilimitadas. Escala sin instalar hardware ni esperar a técnicos.",
      en: "Cloud PBX with high-quality VoIP, IVR, queues and unlimited extensions. Scale without installing hardware or waiting for technicians.",
    },
    block2Body: {
      es: "Reduce hasta un 60% los costos frente a un PBX tradicional. Paga solo por lo que usas y olvídate del mantenimiento de equipos.",
      en: "Cut telephony costs by up to 60% versus traditional PBX. Pay only for what you use and forget about hardware maintenance.",
    },
  },
  lan: {
    svg1: "/network1.svg",
    svg2: "/network2.svg",
    block1Title: { es: "Robustez y baja latencia", en: "Robustness and low latency" },
    block2Title: { es: "Seguridad de red y segmentación", en: "Network security and segmentation" },
    block1Body: {
      es: "Redes cableadas e inalámbricas diseñadas para voz, datos y video. Baja latencia y alta disponibilidad para operaciones críticas.",
      en: "Wired and wireless networks designed for voice, data and video. Low latency and high availability for critical operations.",
    },
    block2Body: {
      es: "VLANs, firewalls y políticas de acceso para proteger datos y separar tráfico. Cumplimiento y control por área o dispositivo.",
      en: "VLANs, firewalls and access policies to protect data and segment traffic. Compliance and control by area or device.",
    },
  },
  support: {
    svg1: "/support1.svg",
    svg2: "/support2.svg",
    block1Title: { es: "Mantenimiento proactivo y 24/7", en: "Proactive maintenance and 24/7 support" },
    block2Title: { es: "Continuidad de negocio", en: "Business continuity" },
    block1Body: {
      es: "Monitoreo preventivo, parches y respuestas rápidas. Equipo técnico disponible las 24 horas para que tu operación no se detenga.",
      en: "Preventive monitoring, patching and fast response. Technical team available 24/7 so your operation never stops.",
    },
    block2Body: {
      es: "Backups verificados, planes de recuperación y documentación al día. Menos incidentes y menos tiempo perdido.",
      en: "Verified backups, recovery plans and up-to-date documentation. Fewer incidents and less downtime.",
    },
  },
  inbound: {
    svg1: "/inbound1.svg",
    svg2: "/inbound2.svg",
    block1Title: { es: "Satisfacción del cliente y CX", en: "Customer satisfaction and CX" },
    block2Title: { es: "Resolución en la primera llamada", en: "First-call resolution" },
    block1Body: {
      es: "Agentes capacitados, guiones alineados a tu marca y métricas claras (NPS, CSAT) para mejorar la experiencia de cliente.",
      en: "Trained agents, scripts aligned with your brand and clear metrics (NPS, CSAT) to improve customer experience.",
    },
    block2Body: {
      es: "Objetivo: resolver en el primer contacto. Menos devoluciones, menos escalamientos y clientes más satisfechos.",
      en: "Goal: resolve on first contact. Fewer callbacks, fewer escalations and happier customers.",
    },
  },
  outbound: {
    svg1: "/outbound1.svg",
    svg2: "/outbound2.svg",
    block1Title: { es: "Prospección inteligente y ventas", en: "Smart prospecting and sales" },
    block2Title: { es: "Alcance masivo y conversión", en: "Mass reach and conversion" },
    block1Body: {
      es: "Campañas de salida con datos limpios, marcador predictivo y guiones que convierten. Seguimiento integrado con tu CRM.",
      en: "Outbound campaigns with clean data, predictive dialer and conversion-focused scripts. Follow-up integrated with your CRM.",
    },
    block2Body: {
      es: "Más contactos efectivos por hora y mejor tasa de conversión. Reportes por campaña, agente y canal para optimizar inversión.",
      en: "More effective contacts per hour and higher conversion rate. Reports by campaign, agent and channel to optimize spend.",
    },
  },
  "ai-agents": {
    svg1: "/ia1.svg",
    svg2: "/ia2.svg",
    block1Title: { es: "Automatización y disponibilidad 24/7", en: "Automation and 24/7 availability" },
    block2Title: { es: "Reducción de carga operativa", en: "Reduced operational load" },
    block1Body: {
      es: "Agentes de IA que atienden por voz y chat a cualquier hora. Respuestas naturales, handoff a humanos y aprendizaje continuo.",
      en: "AI agents that handle voice and chat around the clock. Natural responses, human handoff and continuous learning.",
    },
    block2Body: {
      es: "Descarga a tu equipo de tareas repetitivas. Calificación de leads, FAQs y reservas automatizadas sin aumentar la plantilla.",
      en: "Offload repetitive tasks from your team. Lead qualification, FAQs and automated bookings without growing headcount.",
    },
  },
  omnichannel: {
    svg1: "/omni.svg",
    svg2: "/omni2.svg",
    block1Title: { es: "Experiencia unificada (WhatsApp, Web, RRSS)", en: "Unified experience (WhatsApp, Web, social)" },
    block2Title: { es: "Personalización y trazabilidad", en: "Personalization and traceability" },
    block1Body: {
      es: "Un solo inbox para WhatsApp, web, redes y email. El cliente elige el canal; tú ves todo el historial en un solo lugar.",
      en: "One inbox for WhatsApp, web, social and email. The customer chooses the channel; you see the full history in one place.",
    },
    block2Body: {
      es: "Flujos automatizados y bots que mantienen el contexto entre canales. Reportes por canal para saber qué convierte mejor.",
      en: "Automated flows and bots that keep context across channels. Per-channel reports to see what converts best.",
    },
  },
}
