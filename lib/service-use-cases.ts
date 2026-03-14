import type { ServiceId } from "./services"
import type { Lang } from "@/components/language-provider"

export type UseCaseData = {
  industryBadge: string
  context: string
  challenge: string
  solution: string
  result: string
}

const useCases: Record<ServiceId, { es: UseCaseData; en: UseCaseData }> = {
  "hosted-pbx": {
    es: {
      industryBadge: "Salud",
      context: "Red de clínicas con múltiples sedes que maneja un alto volumen de citas y consultas por teléfono.",
      challenge: "Saturación del PBX tradicional, líneas ocupadas y pérdida de pacientes que no podían agendar.",
      solution: "Implementación de Telefonía en la Nube con IVR inteligente y colas por especialidad para agendamiento y recordatorios.",
      result: "Reducción del 45% en tiempos de espera y 100% de disponibilidad desde cualquier sede o dispositivo.",
    },
    en: {
      industryBadge: "Healthcare",
      context: "A multi-site clinic network handling high volume of appointments and phone inquiries.",
      challenge: "Traditional PBX saturation, busy lines and loss of patients who could not schedule.",
      solution: "Cloud Telephony with intelligent IVR and queues by specialty for scheduling and reminders.",
      result: "45% reduction in wait times and 100% availability from any site or device.",
    },
  },
  lan: {
    es: {
      industryBadge: "Logística",
      context: "Operador de almacenes con más de 5.000 m² de bodega y oficinas que dependen de inventario en tiempo real y voz sobre IP.",
      challenge: "Zonas muertas de Wi‑Fi en la bodega, caídas durante picos de despacho y red de invitados sin segmentar.",
      solution: "Diseño e implementación de red LAN empresarial con cobertura Wi‑Fi en 5.000 m² y VLANs para datos, voz e invitados.",
      result: "Cobertura estable en toda la operación y cero incidentes de red durante temporada alta.",
    },
    en: {
      industryBadge: "Logistics",
      context: "Warehouse operator with over 5,000 m² of warehouse and offices relying on real-time inventory and VoIP.",
      challenge: "Wi‑Fi dead zones in the warehouse, outages during dispatch peaks and unsegmented guest network.",
      solution: "Enterprise LAN design and deployment with Wi‑Fi coverage across 5,000 m² and VLANs for data, voice and guests.",
      result: "Stable coverage across the operation and zero network incidents during peak season.",
    },
  },
  support: {
    es: {
      industryBadge: "Corporativo",
      context: "Oficinas corporativas con equipos distribuidos y sistemas críticos que no pueden parar en temporada alta.",
      challenge: "Tickets reactivos, backups sin verificar y falta de un equipo disponible 24/7 para emergencias.",
      solution: "Soporte técnico gestionado con monitoreo proactivo, mantenimiento preventivo y centro de soporte 24/7.",
      result: "Cero downtime no planificado en temporada alta y tiempo de respuesta menor a 2 horas en incidentes críticos.",
    },
    en: {
      industryBadge: "Corporate",
      context: "Corporate offices with distributed teams and critical systems that cannot go down during peak season.",
      challenge: "Reactive tickets, unverified backups and no 24/7 team available for emergencies.",
      solution: "Managed IT support with proactive monitoring, preventive maintenance and 24/7 support center.",
      result: "Zero unplanned downtime during peak season and under 2-hour response time for critical incidents.",
    },
  },
  inbound: {
    es: {
      industryBadge: "E-commerce",
      context: "Tienda online con alto volumen de pedidos y consultas de seguimiento, devoluciones y garantías.",
      challenge: "Largos tiempos de espera, clientes que cuelgan y falta de métricas claras de nivel de servicio.",
      solution: "Mesa de atención inbound 24/7 con canales unificados (voz, chat, correo) y reportes de NPS y CSAT en tiempo real.",
      result: "Reducción del 35% en tiempo promedio de respuesta y aumento del 20% en satisfacción del cliente (NPS).",
    },
    en: {
      industryBadge: "E-commerce",
      context: "Online store with high order volume and inquiries about tracking, returns and warranties.",
      challenge: "Long wait times, customers hanging up and lack of clear service-level metrics.",
      solution: "24/7 inbound contact desk with unified channels (voice, chat, email) and real-time NPS and CSAT reporting.",
      result: "35% reduction in average response time and 20% increase in customer satisfaction (NPS).",
    },
  },
  outbound: {
    es: {
      industryBadge: "Bienes raíces",
      context: "Inmobiliaria con bases de leads en frío que requieren calificación y seguimiento constante.",
      challenge: "Agentes que no alcanzaban el volumen de contactos y resultados sin trazabilidad en el CRM.",
      solution: "Campañas outbound con marcador predictivo e integración CRM: cada llamada y siguiente paso registrados en tiempo real.",
      result: "Triplicación de contactos efectivos por agente y 100% de leads con estado actualizado en el CRM.",
    },
    en: {
      industryBadge: "Real estate",
      context: "Real estate firm with cold lead databases requiring qualification and consistent follow-up.",
      challenge: "Agents unable to reach contact volume and results with no traceability in the CRM.",
      solution: "Outbound campaigns with predictive dialer and CRM integration: every call and next step logged in real time.",
      result: "Tripled effective contacts per agent and 100% of leads with updated status in the CRM.",
    },
  },
  "ai-agents": {
    es: {
      industryBadge: "Hotelería",
      context: "Cadena hotelera que recibe consultas de reservas, horarios y servicios a toda hora.",
      challenge: "Check-in y consultas fuera de horario de recepción generaban quejas y pérdida de reservas.",
      solution: "Agente de IA por WhatsApp para check-in automático, confirmación de reservas y respuestas frecuentes 24/7.",
      result: "Check-in automático en menos de 2 minutos y 80% de consultas resueltas sin intervención humana.",
    },
    en: {
      industryBadge: "Hospitality",
      context: "Hotel chain receiving booking inquiries, schedules and service questions around the clock.",
      challenge: "Check-in and inquiries outside reception hours led to complaints and lost bookings.",
      solution: "AI agent via WhatsApp for automated check-in, booking confirmation and frequent answers 24/7.",
      result: "Automated check-in in under 2 minutes and 80% of inquiries resolved without human intervention.",
    },
  },
  omnichannel: {
    es: {
      industryBadge: "Servicios profesionales",
      context: "Despacho de servicios profesionales con consultas por email, redes sociales y teléfono de forma dispersa.",
      challenge: "El cliente repetía su historia en cada canal; los equipos no tenían una vista unificada del historial.",
      solution: "Plataforma omnicanal que unifica email y redes sociales en una bandeja única con historial por cliente.",
      result: "Tiempo de respuesta un 40% menor y cero repetición de contexto al cambiar de canal.",
    },
    en: {
      industryBadge: "Professional services",
      context: "Professional services firm with inquiries coming in via email, social media and phone in a scattered way.",
      challenge: "The client repeated their story on every channel; teams had no unified view of history.",
      solution: "Omnichannel platform unifying email and social media in one inbox with history per client.",
      result: "40% faster response time and zero context repetition when switching channels.",
    },
  },
}

export function getServiceUseCase(serviceId: ServiceId, lang: Lang): UseCaseData {
  return useCases[serviceId]?.[lang] ?? useCases["hosted-pbx"][lang]
}
