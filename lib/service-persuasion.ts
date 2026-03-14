import type { LucideIcon } from "lucide-react"
import {
  DollarSign,
  WifiOff,
  PhoneOff,
  ShieldAlert,
  Radio,
  Lock,
  ServerCrash,
  Clock,
  UserX,
  Bot,
  MessageCircle,
  Zap,
} from "lucide-react"
import type { ServiceId } from "./services"
import type { Lang } from "@/components/language-provider"

export type PainPoint = {
  icon: LucideIcon
  title: string
  description: string
}

export type PersuasionData = {
  problems: PainPoint[]
  solutions: string[]
  expectedResults: { value: string; label: string }[]
  useCaseTitle?: string
  useCaseBody?: string
  ctaExpert: string
  interactiveType: "pbx-calculator" | "lan-before-after" | "support-checklist" | "ai-chat" | "faq"
}

const persuasion: Record<ServiceId, Record<Lang, PersuasionData>> = {
  "hosted-pbx": {
    es: {
      problems: [
        {
          icon: DollarSign,
          title: "Facturas telefónicas altísimas",
          description: "El costo de mantenimiento, hardware y líneas tradicionales come tu presupuesto sin aportar flexibilidad.",
        },
        {
          icon: Radio,
          title: "Sistemas rígidos que no permiten teletrabajo",
          description: "Tu equipo no puede atender desde casa o otra sede con la misma calidad ni el mismo número.",
        },
        {
          icon: PhoneOff,
          title: "Pérdida de llamadas por mala configuración",
          description: "IVR confuso, colas que no reparten bien o fallos que hacen que los clientes cuelguen y busquen a la competencia.",
        },
      ],
      solutions: [
        "Reducción de hasta 60% en costos vs. PBX tradicional (mantenimiento y hardware).",
        "Extensiones, colas e IVR escalables en minutos; sin visitas técnicas.",
        "Trabajo remoto con softphones en PC y móvil; mismo número y reglas en todas las sedes.",
        "Grabación, monitoreo y reportes en tiempo real para mejorar la calidad de servicio.",
      ],
      expectedResults: [
        { value: "60%", label: "menos en costos de telefonía" },
        { value: "99.9%", label: "uptime de voz" },
        { value: "24/7", label: "soporte técnico" },
      ],
      useCaseTitle: "Empresas con múltiples sedes",
      useCaseBody: "Conecta tus oficinas en Miami, Puerto Rico y Colombia como si estuvieran en el mismo pasillo. Un solo sistema, números locales y enrutamiento inteligente.",
      ctaExpert: "Hablar con un experto en Telefonía Cloud",
      interactiveType: "pbx-calculator",
    },
    en: {
      problems: [
        {
          icon: DollarSign,
          title: "Sky-high phone bills",
          description: "Traditional maintenance, hardware and line costs eat your budget without giving you flexibility.",
        },
        {
          icon: Radio,
          title: "Rigid systems that block remote work",
          description: "Your team can't work from home or another office with the same quality or the same number.",
        },
        {
          icon: PhoneOff,
          title: "Lost calls from poor configuration",
          description: "Confusing IVR, queues that don't distribute well, or failures that make customers hang up and go to competitors.",
        },
      ],
      solutions: [
        "Up to 60% cost reduction vs. traditional PBX (maintenance and hardware).",
        "Extensions, queues and IVR scalable in minutes; no site visits.",
        "Remote work with softphones on PC and mobile; same number and rules across all locations.",
        "Call recording, monitoring and real-time reports to improve service quality.",
      ],
      expectedResults: [
        { value: "60%", label: "less on telephony costs" },
        { value: "99.9%", label: "voice uptime" },
        { value: "24/7", label: "technical support" },
      ],
      useCaseTitle: "Multi-site businesses",
      useCaseBody: "Connect your offices in Miami, Puerto Rico and Colombia as if they were in the same hallway. One system, local numbers and smart routing.",
      ctaExpert: "Talk to a Cloud Telephony expert",
      interactiveType: "pbx-calculator",
    },
  },
  lan: {
    es: {
      problems: [
        {
          icon: WifiOff,
          title: "Caídas de internet que detienen la operación",
          description: "Cuando la red falla, ventas, soporte y logística se paralizan. Cada minuto cuenta.",
        },
        {
          icon: Radio,
          title: "Zonas muertas de Wi-Fi en bodega y oficina",
          description: "Puntos ciegos donde los dispositivos no conectan o la señal es inestable.",
        },
        {
          icon: ShieldAlert,
          title: "Vulnerabilidades que exponen datos",
          description: "Redes planas sin segmentación donde un acceso comprometido pone en riesgo todo.",
        },
      ],
      solutions: [
        "Cobertura estable en oficinas, bodegas y espacios críticos con Wi‑Fi empresarial.",
        "Segmentación por VLAN: invitados, voz, cámaras e infraestructura separados y seguros.",
        "Políticas claras por tipo de usuario y dispositivo; menor superficie de ataque.",
        "Base lista para VoIP, videovigilancia y analítica sin redes paralelas.",
      ],
      expectedResults: [
        { value: "99.9%", label: "disponibilidad de red" },
        { value: "0", label: "zonas muertas en zonas críticas" },
        { value: "100%", label: "segmentación recomendada" },
      ],
      ctaExpert: "Hablar con un experto en Redes LAN",
      interactiveType: "lan-before-after",
    },
    en: {
      problems: [
        {
          icon: WifiOff,
          title: "Internet outages that stop operations",
          description: "When the network fails, sales, support and logistics stop. Every minute counts.",
        },
        {
          icon: Radio,
          title: "Dead zones for Wi‑Fi in warehouse and office",
          description: "Blind spots where devices won't connect or the signal is unstable.",
        },
        {
          icon: ShieldAlert,
          title: "Vulnerabilities that expose data",
          description: "Flat networks with no segmentation where one compromised access puts everything at risk.",
        },
      ],
      solutions: [
        "Stable coverage across offices, warehouses and critical areas with enterprise Wi‑Fi.",
        "VLAN segmentation: guests, voice, cameras and core infrastructure separated and secure.",
        "Clear policies by user and device type; smaller attack surface.",
        "Foundation ready for VoIP, video surveillance and analytics without duplicate networks.",
      ],
      expectedResults: [
        { value: "99.9%", label: "network availability" },
        { value: "0", label: "dead zones in critical areas" },
        { value: "100%", label: "recommended segmentation" },
      ],
      ctaExpert: "Talk to an Enterprise LAN expert",
      interactiveType: "lan-before-after",
    },
  },
  support: {
    es: {
      problems: [
        {
          icon: ServerCrash,
          title: "Algo se rompe y no tienes a quién llamar",
          description: "El estrés de depender de un técnico interno sobrecargado o de un proveedor que tarda horas en responder.",
        },
        {
          icon: Clock,
          title: "Respuestas que tardan horas o días",
          description: "Tickets que se acumulan y problemas que escalan porque no hay un equipo dedicado ni SLA claro.",
        },
        {
          icon: Lock,
          title: "Backups y seguridad inciertos",
          description: "No sabes si tus respaldos funcionan ni si tu firewall está actualizado. Un solo incidente puede costarte todo.",
        },
      ],
      solutions: [
        "Soporte 24/7 real: personas que atienden incidentes críticos, no solo contestador.",
        "Mantenimiento preventivo y monitoreo para reducir paradas no planificadas.",
        "Backups verificados y planes de recuperación ante desastres documentados.",
        "Un solo punto de contacto: inventario, contratos y ciclos de vida bajo control.",
      ],
      expectedResults: [
        { value: "24/7", label: "soporte real, no contestador" },
        { value: "<2h", label: "tiempo de respuesta crítico" },
        { value: "100%", label: "backups verificados" },
      ],
      ctaExpert: "Hablar con un experto en Soporte Gestionado",
      interactiveType: "support-checklist",
    },
    en: {
      problems: [
        {
          icon: ServerCrash,
          title: "Something breaks and you have no one to call",
          description: "The stress of relying on an overloaded in-house tech or a vendor that takes hours to respond.",
        },
        {
          icon: Clock,
          title: "Responses that take hours or days",
          description: "Tickets piling up and issues escalating because there's no dedicated team or clear SLA.",
        },
        {
          icon: Lock,
          title: "Uncertain backups and security",
          description: "You don't know if your backups work or if your firewall is up to date. One incident can cost you everything.",
        },
      ],
      solutions: [
        "Real 24/7 support: people who handle critical incidents, not just an answering machine.",
        "Preventive maintenance and monitoring to reduce unplanned downtime.",
        "Verified backups and documented disaster recovery plans.",
        "Single point of contact: inventory, contracts and lifecycle under control.",
      ],
      expectedResults: [
        { value: "24/7", label: "real support, not voicemail" },
        { value: "<2h", label: "critical response time" },
        { value: "100%", label: "verified backups" },
      ],
      ctaExpert: "Talk to a Managed Support expert",
      interactiveType: "support-checklist",
    },
  },
  "ai-agents": {
    es: {
      problems: [
        {
          icon: MessageCircle,
          title: "Leads que se enfrían sin respuesta",
          description: "Nadie contesta fines de semana o fuera de horario; los prospectos se van a la competencia.",
        },
        {
          icon: UserX,
          title: "Agentes saturados con preguntas repetitivas",
          description: "\"¿Dónde está mi pedido?\" una y otra vez; el equipo humano no da abasto.",
        },
        {
          icon: Clock,
          title: "Tiempos de espera que matan la conversión",
          description: "Colas largas y demoras que frustran al cliente y reducen ventas.",
        },
      ],
      solutions: [
        "Un agente que nunca duerme: atiende 24/7 por voz y chat en varios idiomas.",
        "Calificación y enrutamiento automático; humanos solo para lo que suma valor.",
        "Menos tareas repetitivas para tu equipo; más tiempo para cierres y casos complejos.",
        "Integración con CRM y sistemas para que cada conversación quede registrada.",
      ],
      expectedResults: [
        { value: "100%", label: "prospectos atendidos al instante" },
        { value: "24/7", label: "disponibilidad sin aumentar nómina" },
        { value: "40%", label: "menos carga repetitiva en agentes" },
      ],
      ctaExpert: "Hablar con un experto en AI Agents",
      interactiveType: "ai-chat",
    },
    en: {
      problems: [
        {
          icon: MessageCircle,
          title: "Leads that go cold without a response",
          description: "No one answers on weekends or after hours; prospects go to the competition.",
        },
        {
          icon: UserX,
          title: "Agents overwhelmed with repetitive questions",
          description: "\"Where is my order?\" over and over; the human team can't keep up.",
        },
        {
          icon: Clock,
          title: "Wait times that kill conversion",
          description: "Long queues and delays that frustrate customers and reduce sales.",
        },
      ],
      solutions: [
        "An agent that never sleeps: handles 24/7 over voice and chat in multiple languages.",
        "Automatic qualification and routing; humans only for high-value conversations.",
        "Fewer repetitive tasks for your team; more time for closing and complex cases.",
        "Integration with CRM and systems so every conversation is logged.",
      ],
      expectedResults: [
        { value: "100%", label: "prospects answered instantly" },
        { value: "24/7", label: "availability without adding headcount" },
        { value: "40%", label: "less repetitive load on agents" },
      ],
      ctaExpert: "Talk to an AI Agents expert",
      interactiveType: "ai-chat",
    },
  },
  inbound: {
    es: {
      problems: [
        { icon: Clock, title: "Tiempos de respuesta lentos", description: "Los clientes esperan demasiado y la satisfacción cae." },
        { icon: UserX, title: "Resolución en segundo o tercer contacto", description: "Problemas que se arrastran por falta de procesos y guiones." },
        { icon: Zap, title: "Picos de demanda sin capacidad", description: "Temporadas altas o campañas que saturan al equipo." },
      ],
      solutions: [
        "Mejores tiempos de respuesta y resolución en el primer contacto.",
        "Guiones y playbooks alineados a tu forma de atender.",
        "Métricas claras: nivel de servicio, NPS, CSAT y causas de contacto.",
        "Escalabilidad para temporadas altas y lanzamientos.",
      ],
      expectedResults: [
        { value: "↑", label: "NPS y CSAT" },
        { value: "<30s", label: "tiempo de respuesta objetivo" },
        { value: "1er", label: "contacto resolución" },
      ],
      ctaExpert: "Hablar con un experto en Campañas Inbound",
      interactiveType: "faq",
    },
    en: {
      problems: [
        { icon: Clock, title: "Slow response times", description: "Customers wait too long and satisfaction drops." },
        { icon: UserX, title: "Resolution on second or third contact", description: "Issues that drag on due to lack of process and scripts." },
        { icon: Zap, title: "Demand spikes without capacity", description: "Peak seasons or campaigns that overwhelm the team." },
      ],
      solutions: [
        "Faster response and first-contact resolution times.",
        "Scripts and playbooks aligned with your service vision.",
        "Clear metrics: service level, NPS, CSAT and contact drivers.",
        "Scalability for peak seasons and product launches.",
      ],
      expectedResults: [
        { value: "↑", label: "NPS and CSAT" },
        { value: "<30s", label: "target response time" },
        { value: "1st", label: "contact resolution" },
      ],
      ctaExpert: "Talk to an Inbound Campaigns expert",
      interactiveType: "faq",
    },
  },
  outbound: {
    es: {
      problems: [
        { icon: PhoneOff, title: "Pocos contactos efectivos por hora", description: "Marcado manual o listas mal segmentadas." },
        { icon: DollarSign, title: "Costo por lead demasiado alto", description: "Recursos mal enfocados y seguimiento que se pierde." },
        { icon: UserX, title: "CRM desactualizado", description: "Ventas no sabe qué pasó con cada prospecto." },
      ],
      solutions: [
        "Más conversaciones relevantes por hora con marcador inteligente.",
        "Segmentación por perfil, historial y comportamiento para mejor conversión.",
        "Trazabilidad por campaña, agente y canal; integración con tu CRM.",
        "Cumplimiento normativo (opt-out, no molestar) integrado.",
      ],
      expectedResults: [
        { value: "35%+", label: "más reuniones agendadas" },
        { value: "1", label: "CRM actualizado en tiempo real" },
        { value: "100%", label: "cumplimiento opt-out" },
      ],
      ctaExpert: "Hablar con un experto en Campañas Outbound",
      interactiveType: "faq",
    },
    en: {
      problems: [
        { icon: PhoneOff, title: "Too few effective contacts per hour", description: "Manual dialing or poorly segmented lists." },
        { icon: DollarSign, title: "Cost per lead too high", description: "Resources misallocated and follow-up that gets lost." },
        { icon: UserX, title: "CRM out of date", description: "Sales doesn't know what happened with each prospect." },
      ],
      solutions: [
        "More relevant conversations per hour with smart dialer.",
        "Segmentation by profile, history and behavior for higher conversion.",
        "Traceability by campaign, agent and channel; integration with your CRM.",
        "Compliance (opt-out, do not disturb) built in.",
      ],
      expectedResults: [
        { value: "35%+", label: "more meetings set" },
        { value: "1", label: "CRM updated in real time" },
        { value: "100%", label: "opt-out compliance" },
      ],
      ctaExpert: "Talk to an Outbound Campaigns expert",
      interactiveType: "faq",
    },
  },
  omnichannel: {
    es: {
      problems: [
        { icon: MessageCircle, title: "Canales dispersos", description: "WhatsApp, email y chat en silos; el cliente repite su historia." },
        { icon: Clock, title: "Respuestas lentas entre canales", description: "Sin contexto unificado ni priorización." },
        { icon: Bot, title: "Bots que no entienden el contexto", description: "Conversaciones que no escalan bien a humano." },
      ],
      solutions: [
        "Inbox unificado con historial completo por cliente.",
        "Flujos automatizados: bienvenida, recordatorios, encuestas y campañas.",
        "Bots y agentes que comparten contexto entre canales.",
        "Reportes ejecutivos para ver qué canal convierte mejor.",
      ],
      expectedResults: [
        { value: "1", label: "inbox unificado" },
        { value: "100%", label: "contexto entre canales" },
        { value: "↑", label: "conversión por canal" },
      ],
      ctaExpert: "Hablar con un experto en AI Omnichannel",
      interactiveType: "faq",
    },
    en: {
      problems: [
        { icon: MessageCircle, title: "Channels in silos", description: "WhatsApp, email and chat disconnected; the customer repeats their story." },
        { icon: Clock, title: "Slow responses across channels", description: "No unified context or prioritization." },
        { icon: Bot, title: "Bots that don't understand context", description: "Conversations that don't hand off well to humans." },
      ],
      solutions: [
        "Unified inbox with full history per customer.",
        "Automated flows: onboarding, reminders, surveys and campaigns.",
        "Bots and agents sharing context across every channel.",
        "Executive reports to see which channel converts best.",
      ],
      expectedResults: [
        { value: "1", label: "unified inbox" },
        { value: "100%", label: "context across channels" },
        { value: "↑", label: "conversion per channel" },
      ],
      ctaExpert: "Talk to an AI Omnichannel expert",
      interactiveType: "faq",
    },
  },
}

export function getServicePersuasion(serviceId: ServiceId, lang: Lang): PersuasionData {
  return persuasion[serviceId]?.[lang] ?? persuasion["hosted-pbx"][lang]
}
