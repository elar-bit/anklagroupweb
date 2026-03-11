import type { LucideIcon } from "lucide-react"
import {
  Bot,
  Headphones,
  MessageSquare,
  Network,
  Phone,
  PhoneOutgoing,
  Server,
} from "lucide-react"
import type { Lang } from "@/components/language-provider"

export type ServiceId =
  | "hosted-pbx"
  | "lan"
  | "support"
  | "inbound"
  | "outbound"
  | "ai-agents"
  | "omnichannel"

type LocalizedBlock = {
  title: string
  subtitle: string
  intro: string
  benefits: string[]
  process: string[]
  cta: string
}

export type Service = {
  id: ServiceId
  icon: LucideIcon
  color: string
  locales: Record<Lang, LocalizedBlock>
}

export const services: Service[] = [
  {
    id: "hosted-pbx",
    icon: Phone,
    color: "from-amber-500/20 to-amber-600/5",
    locales: {
      es: {
        title: "Telefonía en la Nube",
        subtitle: "Hosted PBX para empresas",
        intro:
          "Diseñamos y operamos centrales telefónicas en la nube que conectan a tus equipos, sucursales y clientes en un solo sistema, sin invertir en hardware ni mantenimiento complejo.",
        benefits: [
          "Reduce hasta un 60 % los costos frente a PBX tradicional.",
          "Escala extensiones, colas y IVR en minutos, sin visitas técnicas.",
          "Habilita trabajo remoto con softphones en computador o móvil.",
          "Mejora la calidad de servicio con grabación, monitoreo y reportes en tiempo real.",
        ],
        process: [
          "Diagnóstico de líneas, tráfico y casos de uso actuales.",
          "Diseño de IVR, colas, horarios y reglas de enrutamiento.",
          "Migración controlada desde tu central actual, sin perder números.",
          "Capacitación a usuarios y acompañamiento en la operación inicial.",
        ],
        cta: "Agenda una evaluación de tu sistema telefónico actual y recibe una propuesta de migración a la nube.",
      },
      en: {
        title: "Cloud Telephony",
        subtitle: "Hosted PBX for business",
        intro:
          "We design and operate cloud PBX platforms that connect teams, branches and customers in a single system, without on‑premise hardware or complex maintenance.",
        benefits: [
          "Cut telephony costs by up to 60% versus traditional PBX.",
          "Scale extensions, queues and IVR in minutes without site visits.",
          "Enable remote work with softphones on desktop and mobile.",
          "Improve service quality with call recording, monitoring and real‑time reporting.",
        ],
        process: [
          "Assessment of current lines, traffic and use cases.",
          "Design of IVR, queues, schedules and routing rules.",
          "Controlled migration from your existing PBX without losing numbers.",
          "User training and guided hypercare during the first weeks.",
        ],
        cta: "Schedule an assessment of your current phone system and get a tailored cloud PBX proposal.",
      },
    },
  },
  {
    id: "lan",
    icon: Network,
    color: "from-yellow-500/20 to-yellow-600/5",
    locales: {
      es: {
        title: "Redes LAN Empresariales",
        subtitle: "Diseño, instalación y optimización",
        intro:
          "Construimos infraestructuras de red cableadas e inalámbricas preparadas para voz, datos, video y dispositivos IoT, con foco en rendimiento, seguridad y escalabilidad.",
        benefits: [
          "Cobertura estable en oficinas, bodegas y espacios críticos.",
          "Segmentación por VLAN para separar invitados, voz, cámaras e infraestructura.",
          "Mayor seguridad con políticas claras por tipo de usuario y dispositivo.",
          "Base lista para proyectos de voz IP, videovigilancia y analítica.",
        ],
        process: [
          "Levantamiento de planos, puntos de red y equipos actuales.",
          "Diseño de topología, cableado estructurado y Wi‑Fi empresarial.",
          "Implementación, pruebas de rendimiento y documentación.",
          "Monitoreo inicial y ajustes finos según el uso real.",
        ],
        cta: "Solicita un assessment de tu red actual y un plan de mejora de corto y mediano plazo.",
      },
      en: {
        title: "Enterprise LAN Networks",
        subtitle: "Design, deployment and optimization",
        intro:
          "We build wired and wireless network infrastructures ready for voice, data, video and IoT, with a strong focus on performance, security and scalability.",
        benefits: [
          "Stable coverage across offices, warehouses and critical areas.",
          "VLAN segmentation to separate guests, voice, cameras and core systems.",
          "Improved security with clear policies by user and device type.",
          "A solid foundation for VoIP, video surveillance and analytics projects.",
        ],
        process: [
          "Site survey of floor plans, network drops and existing gear.",
          "Topology design, structured cabling and enterprise Wi‑Fi planning.",
          "Implementation, performance testing and full documentation.",
          "Initial monitoring and fine‑tuning based on real usage.",
        ],
        cta: "Request an assessment of your current network and a practical improvement roadmap.",
      },
    },
  },
  {
    id: "support",
    icon: Server,
    color: "from-orange-500/20 to-orange-600/5",
    locales: {
      es: {
        title: "Soporte Técnico Gestionado",
        subtitle: "Computadores, servidores y core de TI",
        intro:
          "Operamos el día a día de tu infraestructura tecnológica con un equipo que previene incidentes, responde rápido y documenta cada cambio.",
        benefits: [
          "Mayor disponibilidad de servicios críticos gracias a mantenimiento preventivo.",
          "Menos tickets repetitivos con estándares y automatización.",
          "Backups verificados y planes de recuperación ante desastres.",
          "Visibilidad de inventario, contratos y ciclos de vida de equipos.",
        ],
        process: [
          "Diagnóstico de inventario, criticidad y niveles de servicio actuales.",
          "Definición de catálogos de servicio, SLAs y matriz de escalamiento.",
          "Onboarding de usuarios y toma de control de herramientas de soporte.",
          "Reportes periódicos con métricas y recomendaciones de mejora.",
        ],
        cta: "Conversemos sobre tus incidentes más frecuentes y cómo estabilizar tu operación de TI.",
      },
      en: {
        title: "Managed IT Support",
        subtitle: "Endpoints, servers and core IT",
        intro:
          "We operate your day‑to‑day IT infrastructure with a team focused on preventing incidents, responding fast and documenting every change.",
        benefits: [
          "Higher availability for critical services thanks to preventive maintenance.",
          "Fewer repetitive tickets through standards and automation.",
          "Verified backups and disaster recovery playbooks.",
          "Visibility into inventory, contracts and hardware lifecycle.",
        ],
        process: [
          "Assessment of inventory, business criticality and current SLAs.",
          "Definition of service catalog, SLAs and escalation matrix.",
          "User onboarding and takeover of support tools and procedures.",
          "Periodic reports with metrics and concrete improvement actions.",
        ],
        cta: "Let’s review your most common incidents and design a plan to stabilize your IT operation.",
      },
    },
  },
  {
    id: "inbound",
    icon: Headphones,
    color: "from-amber-400/20 to-amber-500/5",
    locales: {
      es: {
        title: "Campañas Inbound",
        subtitle: "Contact center de servicio",
        intro:
          "Creamos y operamos equipos de atención al cliente que responden rápido, resuelven en el primer contacto y representan tu marca con consistencia.",
        benefits: [
          "Mejores tiempos de respuesta y resolución en el primer contacto.",
          "Guiones y playbooks alineados a tu forma de atender.",
          "Métricas claras: nivel de servicio, NPS, CSAT y causas de contacto.",
          "Escalabilidad para temporadas altas y lanzamientos.",
        ],
        process: [
          "Entendimiento de tus canales actuales y volúmenes de contacto.",
          "Diseño de flujos, guiones, métricas y reportes ejecutivos.",
          "Selección y entrenamiento de agentes según tu industria.",
          "Operación continua con monitoreo de calidad y coaching.",
        ],
        cta: "Agenda una sesión para revisar tu operación actual y modelar una mesa de servicio inbound.",
      },
      en: {
        title: "Inbound Campaigns",
        subtitle: "Service contact center",
        intro:
          "We build and run customer service teams that respond quickly, solve on first contact and represent your brand consistently.",
        benefits: [
          "Improved response and first‑contact resolution times.",
          "Scripts and playbooks fully aligned with your service vision.",
          "Clear metrics: service level, NPS, CSAT and contact drivers.",
          "Scalability for peak seasons and product launches.",
        ],
        process: [
          "Review of your current channels and contact volumes.",
          "Design of flows, scripts, KPIs and executive reporting.",
          "Agent selection and training specific to your industry.",
          "Ongoing operations with quality monitoring and coaching.",
        ],
        cta: "Book a session to review your current service operation and design a modern inbound desk.",
      },
    },
  },
  {
    id: "outbound",
    icon: PhoneOutgoing,
    color: "from-yellow-400/20 to-yellow-500/5",
    locales: {
      es: {
        title: "Campañas Outbound",
        subtitle: "Telemarketing y generación de demanda",
        intro:
          "Diseñamos campañas de salida que combinan datos, guiones y tecnología para maximizar contactos efectivos y conversiones.",
        benefits: [
          "Más conversaciones relevantes por hora gracias a marcadores inteligentes.",
          "Mejor conversión con segmentación por perfil, historial y comportamiento.",
          "Trazabilidad por campaña, agente y canal para optimizar inversión.",
          "Integración con tu CRM para no duplicar esfuerzos comerciales.",
        ],
        process: [
          "Definición de objetivos comerciales, segmentos y oferta.",
          "Limpieza y preparación de bases de datos, reglas de contacto y opt‑out.",
          "Configuración de marcadores, guiones y flujos de seguimiento.",
          "Monitoreo diario y ajustes rápidos en discurso, horarios y targeting.",
        ],
        cta: "Conversemos sobre tu embudo comercial y cómo reforzarlo con campañas outbound estructuradas.",
      },
      en: {
        title: "Outbound Campaigns",
        subtitle: "Telemarketing and demand generation",
        intro:
          "We design outbound campaigns that combine data, scripting and technology to maximize effective conversations and conversions.",
        benefits: [
          "More relevant conversations per hour using smart dialers.",
          "Higher conversion with segmentation by profile, history and behavior.",
          "Full traceability by campaign, agent and channel to optimize spend.",
          "Integration with your CRM to avoid duplicated sales efforts.",
        ],
        process: [
          "Definition of commercial goals, target segments and offer.",
          "Data cleaning, preparation and contact/opt‑out rules.",
          "Dialer, scripting and follow‑up flow configuration.",
          "Daily monitoring and quick tuning of pitch, schedules and targeting.",
        ],
        cta: "Let’s review your sales funnel and see how structured outbound campaigns can accelerate it.",
      },
    },
  },
  {
    id: "ai-agents",
    icon: Bot,
    color: "from-gold/20 to-gold/5",
    locales: {
      es: {
        title: "AI Agents",
        subtitle: "Agentes virtuales inteligentes",
        intro:
          "Implementamos agentes de IA que atienden, califican y enrutan conversaciones 24/7 por voz y chat, integrados con tus sistemas de negocio.",
        benefits: [
          "Disponibilidad continua sin aumentar el tamaño de tu equipo humano.",
          "Reducción de tareas repetitivas para tus agentes y equipos internos.",
          "Mejor calificación de oportunidades antes de pasar a ventas.",
          "Experiencias conversacionales naturales, sin menús rígidos.",
        ],
        process: [
          "Identificación de casos de uso repetitivos de alto volumen.",
          "Diseño de flujos conversacionales y reglas de handoff a humanos.",
          "Integración con CRM, ticketing u otros sistemas clave.",
          "Monitoreo, entrenamiento continuo y mejora basada en datos.",
        ],
        cta: "Agenda una demo de un AI Agent operando con tus propios casos de uso.",
      },
      en: {
        title: "AI Agents",
        subtitle: "Intelligent virtual agents",
        intro:
          "We deploy AI agents that handle, qualify and route conversations 24/7 over voice and chat, integrated with your core systems.",
        benefits: [
          "24/7 availability without growing your human team.",
          "Fewer repetitive tasks for agents and internal teams.",
          "Better lead qualification before routing to sales.",
          "Natural conversational experiences instead of rigid menus.",
        ],
        process: [
          "Identification of high‑volume, repetitive use cases.",
          "Design of conversational flows and human handoff rules.",
          "Integration with CRM, ticketing or other key platforms.",
          "Ongoing monitoring, training and data‑driven improvements.",
        ],
        cta: "Book a demo of an AI Agent working with your own use cases.",
      },
    },
  },
  {
    id: "omnichannel",
    icon: MessageSquare,
    color: "from-amber-300/20 to-amber-400/5",
    locales: {
      es: {
        title: "AI Omnichannel",
        subtitle: "Comunicación unificada con IA",
        intro:
          "Orquestamos todos tus canales digitales —WhatsApp, SMS, email, chat web— en una sola plataforma, con automatizaciones inteligentes y trazabilidad completa.",
        benefits: [
          "Un inbox unificado para ver el historial completo de cada cliente.",
          "Flujos automatizados para bienvenida, recordatorios, encuestas y campañas.",
          "Bots y agentes que comparten contexto entre canales.",
          "Reportes ejecutivos para entender qué canal convierte mejor.",
        ],
        process: [
          "Mapa de tus canales actuales y puntos de contacto con clientes.",
          "Definición de journeys prioritarios y reglas de enrutamiento.",
          "Implementación de bots, plantillas y flujos automatizados.",
          "Medición continua y optimización por canal y campaña.",
        ],
        cta: "Solicita una sesión para mapear tus canales y definir un modelo omnicanal apoyado en IA.",
      },
      en: {
        title: "AI Omnichannel",
        subtitle: "Unified communication with AI",
        intro:
          "We orchestrate all your digital channels—WhatsApp, SMS, email, web chat—on a single platform with smart automation and full traceability.",
        benefits: [
          "A unified inbox with a complete history for each customer.",
          "Automated flows for onboarding, reminders, surveys and campaigns.",
          "Bots and agents sharing context across every channel.",
          "Executive dashboards to understand which channels convert best.",
        ],
        process: [
          "Mapping of your current channels and customer touchpoints.",
          "Definition of priority journeys and routing rules.",
          "Implementation of bots, templates and automated workflows.",
          "Continuous measurement and optimization by channel and campaign.",
        ],
        cta: "Request a workshop to map your channels and design an AI‑powered omnichannel model.",
      },
    },
  },
]

export function getServiceById(id: string) {
  return services.find((s) => s.id === id)
}

