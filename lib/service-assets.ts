import type { ServiceId } from "./services"

export type ServiceAssets = {
  svg1: string
  svg2: string
  /** Single content block: title + paragraphs (strategic benefits, technical features, use case) */
  contentTitle: { es: string; en: string }
  contentParagraphs: { es: string[]; en: string[] }
}

export const SERVICE_ASSETS: Record<ServiceId, ServiceAssets> = {
  "hosted-pbx": {
    svg1: "/hosted1.svg",
    svg2: "/hosted2.svg",
    contentTitle: { es: "Telefonía IP, escalabilidad y ahorro estratégico", en: "IP telephony, scalability and strategic savings" },
    contentParagraphs: {
      es: [
        "Migrar a una central en la nube no solo reduce costos operativos hasta en un 60% frente a un PBX tradicional: libera capital que puedes destinar a crecimiento, evita inversiones en hardware y elimina la dependencia de un único proveedor de mantenimiento. Las empresas que adoptan Hosted PBX suelen ver un retorno de la inversión en menos de doce meses, con facturación predecible y sin sorpresas por averías o actualizaciones de equipo.",
        "Nuestras soluciones incluyen VoIP de alta calidad (codecs modernos, redundancia de rutas), IVR y colas configurables por horario y volumen, grabación de llamadas con cumplimiento normativo, integración con CRM y reportes en tiempo real. Puedes escalar extensiones, números y colas en minutos desde un panel de control, sin visitas técnicas ni plazos de instalación. El trabajo remoto queda cubierto con softphones en escritorio y móvil, manteniendo el mismo número y las mismas reglas de enrutamiento.",
        "Un ejemplo típico: una empresa de logística con tres sedes y 80 empleados necesitaba unificar la atención al cliente y reducir el tiempo de respuesta. Con Hosted PBX desplegamos una única central con colas por departamento, IVR en español e inglés y redirección a móviles en horario extendido. En dos semanas tenían todas las líneas activas; el primer mes ya veían ahorro en facturación y cero incidencias por fallos de central física.",
      ],
      en: [
        "Migrating to a cloud PBX doesn't just cut operational costs by up to 60% versus traditional PBX: it frees capital for growth, avoids hardware spend and removes dependence on a single maintenance vendor. Companies that adopt Hosted PBX typically see ROI within twelve months, with predictable billing and no surprises from equipment failures or upgrades.",
        "Our solutions include high-quality VoIP (modern codecs, path redundancy), IVR and queues configurable by schedule and volume, call recording with compliance, CRM integration and real-time reporting. You can scale extensions, numbers and queues in minutes from a control panel, with no site visits or installation lead times. Remote work is covered with desktop and mobile softphones, keeping the same number and routing rules.",
        "A typical example: a logistics company with three sites and 80 employees needed to unify customer support and reduce response time. With Hosted PBX we deployed a single platform with queues by department, IVR in Spanish and English and redirect to mobiles during extended hours. Within two weeks all lines were live; by the first month they were already seeing lower bills and zero incidents from on-premise PBX failures.",
      ],
    },
  },
  lan: {
    svg1: "/network1.svg",
    svg2: "/network2.svg",
    contentTitle: { es: "Robustez, seguridad y baja latencia", en: "Robustness, security and low latency" },
    contentParagraphs: {
      es: [
        "Una red empresarial bien diseñada es la base para voz IP, videollamadas, videovigilancia y aplicaciones críticas. Los beneficios estratégicos incluyen menor tiempo de inactividad, mayor productividad y la posibilidad de crecer sin rediseños costosos. Invertir en cableado estructurado, switches gestionados y Wi‑Fi profesional reduce incidentes, facilita el cumplimiento y mejora la experiencia de usuarios y clientes que dependen de tu conectividad.",
        "Implementamos redes con VLANs para separar tráfico (invitados, voz, datos, IoT), QoS para priorizar voz y video, y políticas de acceso por puerto y dispositivo. Los equipos son redundantes donde aplica y el monitoreo es proactivo: detección de anomalías, alertas y documentación actualizada. La latencia se mantiene baja incluso en picos de uso, lo que es esencial para call centers, trading o cualquier operación en tiempo real.",
        "Caso de uso real: una clínica con dos plantas y consultorios necesitaba una red estable para historiales clínicos, videoconferencia con especialistas y cámaras de seguridad. Desplegamos cableado Cat6, segmentación por zona (recepción, consultorios, administración) y Wi‑Fi de alta densidad en salas de espera. Resultado: cero quejas por caídas de conexión y la posibilidad de sumar más dispositivos sin tocar la infraestructura core.",
      ],
      en: [
        "A well-designed enterprise network is the foundation for VoIP, video calls, surveillance and critical applications. Strategic benefits include less downtime, higher productivity and the ability to scale without costly redesigns. Investing in structured cabling, managed switches and professional Wi‑Fi reduces incidents, supports compliance and improves the experience for users and customers who depend on your connectivity.",
        "We deploy networks with VLANs to segment traffic (guests, voice, data, IoT), QoS to prioritize voice and video, and access policies by port and device. Equipment is redundant where it matters and monitoring is proactive: anomaly detection, alerts and up-to-date documentation. Latency stays low even under peak load, which is essential for call centers, trading or any real-time operation.",
        "Real use case: a clinic with two floors and multiple consulting rooms needed a stable network for medical records, video calls with specialists and security cameras. We deployed Cat6 cabling, segmentation by zone (reception, consulting, admin) and high-density Wi‑Fi in waiting areas. Result: zero connection drop complaints and the ability to add more devices without touching the core infrastructure.",
      ],
    },
  },
  support: {
    svg1: "/support1.svg",
    svg2: "/support2.svg",
    contentTitle: { es: "Mantenimiento proactivo, 24/7 y continuidad", en: "Proactive maintenance, 24/7 and continuity" },
    contentParagraphs: {
      es: [
        "El soporte gestionado permite a las empresas enfocarse en su negocio mientras la infraestructura de TI se mantiene estable, actualizada y documentada. Los beneficios estratégicos incluyen menos paradas no planificadas, tiempos de respuesta predecibles y un único punto de contacto para incidentes, cambios y consultas. Las pymes y sedes medianas suelen lograr una reducción notable de costos internos de TI y mayor satisfacción de usuarios.",
        "Ofrecemos monitoreo proactivo de servidores y servicios críticos, aplicación de parches en ventanas acordadas, backups verificados y pruebas de recuperación, inventario de activos y documentación de procedimientos. El soporte 24/7 cubre incidentes que afecten operación; los niveles de servicio (SLAs) se definen por prioridad y tipo de fallo. Todo queda registrado en un sistema de tickets para trazabilidad y mejora continua.",
        "Ejemplo: una cadena de retail con varias tiendas sufría fallos recurrentes en cajas y conexión a central. Implementamos monitoreo de puntos de venta, mantenimiento preventivo mensual y un acuerdo de respuesta para incidentes críticos en menos de dos horas. En seis meses las incidencias por tienda bajaron más de 70% y el equipo interno pudo dedicarse a proyectos de transformación en lugar de apagar fuegos.",
      ],
      en: [
        "Managed support lets companies focus on their business while IT infrastructure stays stable, up to date and documented. Strategic benefits include fewer unplanned outages, predictable response times and a single point of contact for incidents, changes and queries. SMBs and mid-size offices often achieve a significant drop in internal IT costs and higher user satisfaction.",
        "We provide proactive monitoring of servers and critical services, patching in agreed windows, verified backups and recovery tests, asset inventory and procedure documentation. 24/7 support covers incidents that affect operations; service levels (SLAs) are defined by priority and type of failure. Everything is logged in a ticketing system for traceability and continuous improvement.",
        "Example: a retail chain with multiple stores had recurring till and connectivity issues. We implemented POS monitoring, monthly preventive maintenance and a response agreement for critical incidents within two hours. In six months incidents per store dropped by over 70% and the internal team could focus on transformation projects instead of firefighting.",
      ],
    },
  },
  inbound: {
    svg1: "/inbound1.svg",
    svg2: "/inbound2.svg",
    contentTitle: { es: "CX, satisfacción del cliente y resolución a la primera", en: "CX, customer satisfaction and first-contact resolution" },
    contentParagraphs: {
      es: [
        "Una mesa de atención inbound bien operada se traduce en clientes más satisfechos, menor abandono y mejor reputación de marca. Los beneficios estratégicos incluyen métricas claras (NPS, CSAT, tiempo de respuesta, resolución en primer contacto), capacidad de escalar en temporadas altas sin contratar fijo y una voz de marca consistente en cada canal. Invertir en procesos, guiones y formación de agentes suele reducir quejas y devoluciones y aumentar la lealtad.",
        "Nuestras campañas inbound incluyen diseño de flujos por tipo de consulta, guiones y playbooks alineados a tu tono de marca, formación continua de agentes y supervisión de calidad con grabaciones y feedback. Trabajamos con las herramientas que ya uses (CRM, colas, WhatsApp) y te entregamos reportes ejecutivos por nivel de servicio, motivo de contacto y tendencias. La escalación a segundo nivel o equipos internos queda definida y documentada.",
        "Caso real: un e‑commerce con alto volumen de consultas postventa necesitaba bajar tiempos de respuesta y mantener un trato uniforme. Montamos una mesa inbound con script por tipo de pedido, integración con la plataforma de envíos y métricas en tiempo real. En tres meses el tiempo medio de resolución bajó un 40% y el NPS subió más de 15 puntos; en temporada de rebajas pudieron doblar capacidad con refuerzos temporales sin perder calidad.",
      ],
      en: [
        "A well-run inbound desk leads to happier customers, less churn and a stronger brand reputation. Strategic benefits include clear metrics (NPS, CSAT, response time, first-contact resolution), the ability to scale in peak seasons without permanent hiring and a consistent brand voice on every channel. Investing in processes, scripts and agent training typically reduces complaints and returns and increases loyalty.",
        "Our inbound campaigns include flow design by query type, scripts and playbooks aligned with your brand tone, ongoing agent training and quality supervision with recordings and feedback. We work with your existing tools (CRM, queues, WhatsApp) and deliver executive reports by service level, contact reason and trends. Escalation to second level or internal teams is defined and documented.",
        "Real case: an e‑commerce with high post-sale query volume needed to cut response times and keep treatment consistent. We set up an inbound desk with scripts by order type, integration with the shipping platform and real-time metrics. In three months average resolution time dropped 40% and NPS rose by over 15 points; during sales peaks they could double capacity with temporary staff without losing quality.",
      ],
    },
  },
  outbound: {
    svg1: "/outbound1.svg",
    svg2: "/outbound2.svg",
    contentTitle: { es: "Prospección inteligente, ventas y alcance masivo", en: "Smart prospecting, sales and mass reach" },
    contentParagraphs: {
      es: [
        "Las campañas outbound bien ejecutadas generan oportunidades calificadas, cierres y renovaciones sin depender solo del inbound. Los beneficios estratégicos incluyen un pipeline más predecible, mejor uso de bases de datos y seguimiento automatizado que no cae en el olvido. Con marcador predictivo y guiones optimizados, el equipo comercial puede multiplicar el número de contactos efectivos por hora y concentrarse en los leads con mayor probabilidad de cierre.",
        "Ofrecemos diseño de campaña (objetivos, segmentos, mensaje), limpieza y enriquecimiento de datos cuando aplica, configuración de marcador y CRM, y guiones que se adaptan por tipo de producto o etapa del embudo. Las métricas (contactos, conversiones, reuniones agendadas) se revisan por campaña y agente para ajustar mensaje, horarios y targeting. El cumplimiento normativo (opt‑out, no molestar) queda integrado en el proceso.",
        "Ejemplo: una empresa de software B2B necesitaba calificar leads antes de pasar a ventas. Lanzamos una campaña outbound con lista segmentada por industria y tamaño, script de calificación y entrega de oportunidades en el CRM con notas y siguiente paso. En dos meses el ratio de reuniones agendadas sobre contactos efectivos subió un 35% y el equipo de ventas pudo priorizar solo oportunidades con criterios cumplidos.",
      ],
      en: [
        "Well-executed outbound campaigns generate qualified opportunities, closes and renewals without relying only on inbound. Strategic benefits include a more predictable pipeline, better use of databases and automated follow-up that doesn't get forgotten. With predictive dialer and optimized scripts, the sales team can multiply effective contacts per hour and focus on leads with the highest close probability.",
        "We offer campaign design (objectives, segments, message), data cleaning and enrichment when needed, dialer and CRM setup, and scripts that adapt by product type or funnel stage. Metrics (contacts, conversions, meetings set) are reviewed by campaign and agent to adjust message, timing and targeting. Compliance (opt-out, do not disturb) is built into the process.",
        "Example: a B2B software company needed to qualify leads before handing to sales. We launched an outbound campaign with a list segmented by industry and size, qualification script and handoff of opportunities into the CRM with notes and next step. In two months the ratio of meetings set to effective contacts rose 35% and the sales team could prioritize only opportunities that met the criteria.",
      ],
    },
  },
  "ai-agents": {
    svg1: "/ia1.svg",
    svg2: "/ia2.svg",
    contentTitle: { es: "Automatización 24/7 y reducción de carga operativa", en: "24/7 automation and reduced operational load" },
    contentParagraphs: {
      es: [
        "Los agentes de IA permiten atender consultas frecuentes, calificar leads y ejecutar tareas repetitivas sin aumentar la plantilla. Los beneficios estratégicos incluyen disponibilidad total fuera del horario laboral, consistencia en las respuestas y la posibilidad de escalar picos de demanda sin contratar más personas. Las empresas que integran IA en atención y ventas suelen ver una caída clara en el tiempo dedicado a FAQs, reservas o seguimiento inicial, liberando al equipo humano para casos complejos o de alto valor.",
        "Nuestros AI Agents trabajan por voz y chat, con procesamiento de lenguaje natural y reglas de handoff a agentes humanos cuando el tema lo requiere. Se integran con tu CRM, ticketing o base de conocimientos para dar respuestas contextuales y registrar interacciones. El aprendizaje es continuo: se ajustan respuestas y flujos según feedback y datos de conversación. La privacidad y el cumplimiento (consentimiento, datos mínimos) se tienen en cuenta desde el diseño.",
        "Caso de uso: una aseguradora quería reducir la carga en su mesa de reclamaciones para consultas de estado. Desplegamos un agente de IA que consultaba el estado del siniestro por voz y por chat, daba respuestas en tiempo real y transfería a humano solo cuando el cliente pedía hablar con un asesor o el caso no estaba en sistema. En cuatro meses más del 50% de las consultas de estado se resolvían sin intervención humana y el tiempo medio de espera en cola bajó de forma notable.",
      ],
      en: [
        "AI agents let you handle frequent queries, qualify leads and run repetitive tasks without adding headcount. Strategic benefits include full availability outside business hours, consistent answers and the ability to scale demand peaks without hiring. Companies that integrate AI into support and sales often see a clear drop in time spent on FAQs, bookings or initial follow-up, freeing the human team for complex or high-value cases.",
        "Our AI Agents work over voice and chat, with natural language processing and handoff rules to human agents when the topic requires it. They integrate with your CRM, ticketing or knowledge base to give contextual answers and log interactions. Learning is continuous: responses and flows are tuned from feedback and conversation data. Privacy and compliance (consent, minimal data) are considered from the design stage.",
        "Use case: an insurer wanted to reduce load on its claims desk for status queries. We deployed an AI agent that checked claim status by voice and chat, gave real-time answers and transferred to a human only when the customer asked to speak to an agent or the case wasn't in the system. Within four months over 50% of status queries were resolved without human intervention and average queue wait time dropped significantly.",
      ],
    },
  },
  omnichannel: {
    svg1: "/omni.svg",
    svg2: "/omni2.svg",
    contentTitle: { es: "Experiencia unificada (WhatsApp, Web, RRSS) y personalización", en: "Unified experience (WhatsApp, Web, social) and personalization" },
    contentParagraphs: {
      es: [
        "Un enfoque omnicanal bien implementado mejora la satisfacción del cliente y la eficiencia operativa: el cliente elige el canal (WhatsApp, web, redes, email) y la empresa ve una sola conversación con historial completo. Los beneficios estratégicos incluyen respuestas más rápidas, menos repetición de información y la posibilidad de personalizar mensajes y ofertas según el contexto y el historial. Las marcas que unifican canales suelen ver mejor retención y mayor valor de vida del cliente.",
        "Ofrecemos un inbox unificado, flujos automatizados (bienvenida, recordatorios, encuestas) y bots que mantienen el contexto entre canales. Las plantillas y mensajes se adaptan por canal y cumplen con las políticas de cada plataforma (ej. WhatsApp Business). Los reportes permiten ver rendimiento por canal, tipo de conversación y tasa de resolución para invertir donde más convierte. La integración con CRM o ERP es posible para tener datos de cliente y pedidos en la misma vista.",
        "Ejemplo real: una marca de consumo quería centralizar atención por WhatsApp, web y redes sin que el cliente tuviera que repetir su caso. Implementamos una plataforma omnicanal con historial unificado, bots para consultas frecuentes y escalación a agentes con contexto completo. En pocas semanas el tiempo medio de resolución bajó y el equipo pudo atender más conversaciones simultáneas sin perder calidad; además pudieron lanzar campañas segmentadas por canal con mejor tasa de apertura y respuesta.",
      ],
      en: [
        "A well-implemented omnichannel approach improves customer satisfaction and operational efficiency: the customer chooses the channel (WhatsApp, web, social, email) and the company sees a single conversation with full history. Strategic benefits include faster responses, less repetition of information and the ability to personalize messages and offers by context and history. Brands that unify channels often see better retention and higher customer lifetime value.",
        "We offer a unified inbox, automated flows (welcome, reminders, surveys) and bots that keep context across channels. Templates and messages adapt by channel and comply with each platform's policies (e.g. WhatsApp Business). Reports show performance by channel, conversation type and resolution rate so you can invest where it converts most. Integration with CRM or ERP is possible to have customer and order data in the same view.",
        "Real example: a consumer brand wanted to centralize support via WhatsApp, web and social without the customer repeating their case. We implemented an omnichannel platform with unified history, bots for frequent queries and escalation to agents with full context. Within weeks average resolution time dropped and the team could handle more simultaneous conversations without losing quality; they could also run segmented campaigns by channel with better open and response rates.",
      ],
    },
  },
}
