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

export type ServiceId =
  | "hosted-pbx"
  | "lan"
  | "support"
  | "inbound"
  | "outbound"
  | "ai-agents"
  | "omnichannel"

export type Service = {
  id: ServiceId
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
  features: string[]
  outcomes: string[]
  color: string
}

export const services: Service[] = [
  {
    id: "hosted-pbx",
    icon: Phone,
    title: "Telefonía en la Nube",
    subtitle: "Hosted PBX",
    description:
      "Centraliza llamadas, extensiones y reportes en un sistema PBX en la nube: sin hardware, con máxima flexibilidad.",
    features: [
      "Extensiones ilimitadas",
      "IVR personalizado",
      "Grabación de llamadas",
      "Reportes en tiempo real",
    ],
    outcomes: [
      "Reduce costos y elimina mantenimiento de PBX físico",
      "Mejora la experiencia del cliente con IVR y colas",
      "Visibilidad total con analítica y grabaciones",
    ],
    color: "from-amber-500/20 to-amber-600/5",
  },
  {
    id: "lan",
    icon: Network,
    title: "Redes LAN",
    subtitle: "Instalación y Configuración",
    description:
      "Diseño, instalación y optimización de redes empresariales para rendimiento, seguridad y escalabilidad.",
    features: [
      "Cableado estructurado",
      "Switches gestionados",
      "VLANs y segmentación",
      "Wi‑Fi empresarial",
    ],
    outcomes: [
      "Conectividad estable en toda la operación",
      "Segmentación segura por áreas y dispositivos",
      "Base lista para voz IP, cámaras y crecimiento",
    ],
    color: "from-yellow-500/20 to-yellow-600/5",
  },
  {
    id: "support",
    icon: Server,
    title: "Soporte Técnico",
    subtitle: "Computadores y Servidores",
    description:
      "Soporte preventivo y correctivo para endpoints y servidores, con monitoreo y respuesta rápida.",
    features: [
      "Soporte 24/7",
      "Mantenimiento preventivo",
      "Backup y recuperación",
      "Monitoreo proactivo",
    ],
    outcomes: [
      "Menos incidencias y mayor continuidad operativa",
      "Tiempos de respuesta claros y escalamiento",
      "Recuperación ágil ante fallos y pérdidas",
    ],
    color: "from-orange-500/20 to-orange-600/5",
  },
  {
    id: "inbound",
    icon: Headphones,
    title: "Campañas Inbound",
    subtitle: "Call Center",
    description:
      "Atención al cliente con agentes capacitados, métricas y procesos para elevar CSAT y eficiencia.",
    features: [
      "Atención multicanal",
      "Scripts personalizados",
      "Métricas detalladas",
      "Escalamiento flexible",
    ],
    outcomes: [
      "Mejores tiempos de respuesta y resolución",
      "Control de calidad con métricas y auditoría",
      "Capacidad adaptable a picos de demanda",
    ],
    color: "from-amber-400/20 to-amber-500/5",
  },
  {
    id: "outbound",
    icon: PhoneOutgoing,
    title: "Campañas Outbound",
    subtitle: "Telemarketing",
    description:
      "Generación de leads y ventas con estrategia, seguimiento y reportes para optimizar la conversión.",
    features: [
      "Marcador predictivo",
      "Gestión de leads",
      "Seguimiento automatizado",
      "Reportes de conversión",
    ],
    outcomes: [
      "Más contactos efectivos por hora",
      "Mejor conversión con segmentación y scripts",
      "Visibilidad por campaña, agente y canal",
    ],
    color: "from-yellow-400/20 to-yellow-500/5",
  },
  {
    id: "ai-agents",
    icon: Bot,
    title: "AI Agents",
    subtitle: "Inteligencia Artificial",
    description:
      "Agentes virtuales que atienden, califican y enrutan conversaciones 24/7 con lenguaje natural e integraciones.",
    features: [
      "Procesamiento de lenguaje natural",
      "Integración con CRM",
      "Aprendizaje continuo",
      "Transferencia a humanos",
    ],
    outcomes: [
      "Atención 24/7 sin aumentar tu equipo",
      "Menos tareas repetitivas y más productividad",
      "Mejor calificación y handoff a agentes humanos",
    ],
    color: "from-gold/20 to-gold/5",
  },
  {
    id: "omnichannel",
    icon: MessageSquare,
    title: "AI Omnichannel",
    subtitle: "Comunicación Unificada",
    description:
      "Unifica WhatsApp, SMS, email y chat con flujos automatizados y un historial centralizado por cliente.",
    features: [
      "WhatsApp, SMS, Email",
      "Chatbots inteligentes",
      "Historial unificado",
      "Automatización de flujos",
    ],
    outcomes: [
      "Menos fricción: un solo inbox para todo",
      "Automatizaciones que reducen tiempos y errores",
      "Trazabilidad completa de conversaciones",
    ],
    color: "from-amber-300/20 to-amber-400/5",
  },
]

export function getServiceById(id: string) {
  return services.find((s) => s.id === id)
}

