import type { ServiceId } from "./services"
import type { Lang } from "@/components/language-provider"

export type FaqItem = { question: string; answer: string }

const faqs: Record<ServiceId, { es: FaqItem[]; en: FaqItem[] }> = {
  "hosted-pbx": {
    es: [
      {
        question: "¿Puedo usar mi extensión en mi celular?",
        answer:
          "Sí, nuestra App convierte tu smartphone en una extensión de la oficina con total seguridad. Mismo número, mismas colas y desvíos desde cualquier lugar.",
      },
      {
        question: "¿Tengo que cambiar mis números de teléfono actuales?",
        answer:
          "No. Realizamos la portabilidad de tus números existentes de forma transparente para que no pierdas contacto con tus clientes actuales.",
      },
      {
        question: "¿Qué pasa si se cae el internet en mi oficina?",
        answer:
          "Tu telefonía sigue viva en la nube. Las llamadas se pueden desviar automáticamente a aplicaciones móviles (Softphones) o a números celulares externos para que nunca pierdas una venta.",
      },
      {
        question: "¿Es difícil de configurar si no tengo un técnico?",
        answer:
          'Nosotros nos encargamos de todo. Es "Plug & Play": conectas el teléfono al internet y ya estás operando. Nosotros gestionamos las colas de llamadas y el IVR por ti.',
      },
    ],
    en: [
      {
        question: "Can I use my extension on my cell phone?",
        answer:
          "Yes. Our app turns your smartphone into an office extension with full security. Same number, same queues and forwarding from anywhere.",
      },
      {
        question: "Do I have to change my current phone numbers?",
        answer:
          "No. We port your existing numbers seamlessly so you don't lose touch with your current customers.",
      },
      {
        question: "What happens if the internet goes down at my office?",
        answer:
          "Your telephony stays live in the cloud. Calls can be automatically forwarded to mobile apps (softphones) or external cell numbers so you never miss a sale.",
      },
    ],
  },
  lan: {
    es: [
      {
        question: "¿Cómo evitan que un virus de una laptop afecte mis servidores?",
        answer:
          "Implementamos segmentación por VLANs para aislar el tráfico crítico del resto de la red. Invitados, cámaras y datos sensibles van en redes separadas; un virus en un equipo no alcanza sus servidores.",
      },
      {
        question: "¿Por qué no puedo usar el router que me da mi proveedor de internet?",
        answer:
          "Los equipos residenciales no están diseñados para manejar el tráfico de múltiples usuarios, voz sobre IP y cámaras de seguridad simultáneamente. Nuestra infraestructura garantiza estabilidad y evita que tu red \"se congele\" en momentos críticos.",
      },
      {
        question: "¿Mi red actual es segura contra ciberataques?",
        answer:
          "Si no tienes segmentación de red (VLANs), un virus en una laptop podría infectar tus servidores. Nosotros blindamos tu red separando el tráfico de invitados, cámaras y datos sensibles.",
      },
      {
        question: "¿Ofrecen soporte si un switch o antena falla?",
        answer:
          "Sí, monitoreamos proactivamente tu red. En muchos casos, detectamos y resolvemos la falla antes de que tú te des cuenta.",
      },
    ],
    en: [
      {
        question: "How do you prevent a virus on a laptop from affecting my servers?",
        answer:
          "We use VLAN segmentation to isolate critical traffic from the rest of the network. Guests, cameras and sensitive data sit on separate networks; a virus on one device cannot reach your servers.",
      },
      {
        question: "Why can't I use the router my internet provider gave me?",
        answer:
          "Consumer gear isn't built to handle multiple users, VoIP and security cameras at once. Our infrastructure ensures stability and prevents your network from freezing at critical times.",
      },
      {
        question: "Do you support me if a switch or antenna fails?",
        answer:
          "Yes. We monitor your network proactively. In many cases we detect and fix issues before you notice them.",
      },
    ],
  },
  support: {
    es: [
      {
        question: "¿Qué incluye el soporte preventivo?",
        answer:
          "Monitoreo de salud de discos, actualizaciones de seguridad automáticas y limpieza de software mensual para evitar fallos. Así reducimos paradas no planificadas y alargamos la vida de sus equipos.",
      },
      {
        question: "¿Mi información está segura con su equipo de soporte?",
        answer:
          "Absolutamente. Firmamos acuerdos de confidencialidad (NDA) y utilizamos herramientas de acceso remoto encriptadas. Cada intervención queda registrada en nuestro sistema de tickets para tu auditoría.",
      },
      {
        question: "¿Cuánto tiempo tardan en responder si algo se rompe?",
        answer:
          "Tenemos niveles de servicio (SLA) definidos. Para emergencias críticas, nuestra respuesta es inmediata a través de nuestro centro de soporte 24/7.",
      },
      {
        question: "¿Esto es más barato que contratar a un técnico interno?",
        answer:
          "Sí. Obtienes un equipo entero de especialistas por una fracción del costo de un salario full-time, sin cargas prestacionales ni riesgos de rotación de personal.",
      },
    ],
    en: [
      {
        question: "What does preventive support include?",
        answer:
          "Disk health monitoring, automatic security updates and monthly software cleanup to prevent failures. This reduces unplanned downtime and extends the life of your equipment.",
      },
      {
        question: "Is my data safe with your support team?",
        answer:
          "Absolutely. We sign NDAs and use encrypted remote-access tools. Every intervention is logged in our ticket system for your audit.",
      },
      {
        question: "How fast do you respond when something breaks?",
        answer:
          "We have defined SLAs. For critical emergencies, response is immediate through our 24/7 support center.",
      },
      {
        question: "Is this cheaper than hiring an in-house technician?",
        answer:
          "Yes. You get a full team of specialists for a fraction of one full-time salary, with no benefits overhead or turnover risk.",
      },
    ],
  },
  "ai-agents": {
    es: [
      {
        question: "¿La IA puede agendar citas sola?",
        answer:
          "Sí, se conecta a tu calendario y reserva espacios sin intervención humana, validando disponibilidad en tiempo real. Ideal para consultas, demos o seguimientos.",
      },
      {
        question: "¿La IA suena \"robótica\" o molesta a los clientes?",
        answer:
          "Al contrario. Utilizamos modelos de lenguaje avanzados que entienden el contexto y responden de forma natural. Los clientes agradecen la inmediatez de una respuesta útil sobre una espera eterna con un humano.",
      },
      {
        question: "¿Se integra con mi CRM o base de datos actual?",
        answer:
          "Sí. Nuestros agentes de IA pueden consultar inventarios, estados de pedido o agendar citas directamente en tu software actual mediante APIs.",
      },
      {
        question: "¿Qué pasa si la IA no sabe responder algo?",
        answer:
          'El sistema está diseñado para una "transferencia suave". Si la IA detecta una consulta compleja, transfiere la conversación a un agente humano con todo el historial previo.',
      },
    ],
    en: [
      {
        question: "Can the AI schedule appointments on its own?",
        answer:
          "Yes. It connects to your calendar and books slots with no human intervention, checking availability in real time. Ideal for consultations, demos or follow-ups.",
      },
      {
        question: "Does the AI sound robotic or annoy customers?",
        answer:
          "Quite the opposite. We use advanced language models that understand context and respond naturally. Customers appreciate instant, helpful answers over long waits for a human.",
      },
      {
        question: "What if the AI doesn't know the answer?",
        answer:
          'The system is built for "warm transfer." If the AI detects a complex query, it hands off to a human agent with full conversation history.',
      },
    ],
  },
  omnichannel: {
    es: [
      {
        question: "¿El cliente tiene que repetir su historia cada vez que cambia de canal?",
        answer:
          "No. Nuestro sistema unifica el historial. Si escribió por WhatsApp y luego llama, el agente ya sabe todo el contexto. Una sola conversación, todos los canales.",
      },
      {
        question: "¿La IA suena \"robótica\" o molesta a los clientes?",
        answer:
          "Al contrario. Utilizamos modelos de lenguaje avanzados que entienden el contexto y responden de forma natural. Los clientes agradecen la inmediatez de una respuesta útil sobre una espera eterna con un humano.",
      },
      {
        question: "¿Se integra con mi CRM o base de datos actual?",
        answer:
          "Sí. Nuestros agentes de IA pueden consultar inventarios, estados de pedido o agendar citas directamente en tu software actual mediante APIs.",
      },
    ],
    en: [
      {
        question: "Does the customer have to repeat their story every time they switch channels?",
        answer:
          "No. Our system unifies history. If they messaged on WhatsApp and then call, the agent already has full context. One conversation, every channel.",
      },
      {
        question: "Does the AI sound robotic or annoy customers?",
        answer:
          "Quite the opposite. We use advanced language models that understand context and respond naturally. Customers appreciate instant, helpful answers over long waits for a human.",
      },
      {
        question: "Does it integrate with my current CRM or database?",
        answer:
          "Yes. Our AI agents can check inventory, order status or schedule appointments directly in your existing software via APIs.",
      },
    ],
  },
  inbound: {
    es: [
      {
        question: "¿Cómo miden el éxito del servicio?",
        answer:
          "Entregamos reportes de NPS (Satisfacción), CSAT y Tiempo Promedio de Respuesta en tiempo real. Dashboards y auditorías semanales para que veas el rendimiento de la campaña.",
      },
      {
        question: "¿Cómo garantizan la calidad de las llamadas?",
        answer:
          "Grabamos el 100% de las interacciones y realizamos auditorías semanales. Además, te entregamos dashboards en tiempo real para que veas el rendimiento de la campaña.",
      },
      {
        question: "¿Pueden trabajar con mi base de datos de prospectos?",
        answer:
          "Sí, cargamos tus bases de datos de forma segura en nuestros marcadores predictivos para maximizar el tiempo efectivo de conversación y cumplir con las normativas locales de privacidad.",
      },
      {
        question: "¿Escalan en temporada alta o picos de demanda?",
        answer:
          "Sí. Ajustamos capacidad por campaña o temporada para que no pierdas ventas ni saturación en picos. Te damos reportes claros de nivel de servicio y resolución.",
      },
    ],
    en: [
      {
        question: "How do you measure service success?",
        answer:
          "We deliver NPS (satisfaction), CSAT and average response time reports in real time. Dashboards and weekly audits so you see campaign performance.",
      },
      {
        question: "How do you guarantee call quality?",
        answer:
          "We record 100% of interactions and run weekly audits. You also get real-time dashboards to see campaign performance.",
      },
      {
        question: "Do you scale for peak season or demand spikes?",
        answer:
          "Yes. We adjust capacity by campaign or season so you don't lose sales or overload. You get clear reports on service level and resolution.",
      },
    ],
  },
  outbound: {
    es: [
      {
        question: "¿Pueden integrarse con mi CRM actual?",
        answer:
          "Sí, sincronizamos los resultados de cada llamada directamente con Salesforce, HubSpot o tu CRM propio. Cada contacto, nota y siguiente paso queda registrado en tiempo real.",
      },
      {
        question: "¿Cómo garantizan la calidad de las llamadas?",
        answer:
          "Grabamos el 100% de las interacciones y realizamos auditorías semanales. Además, te entregamos dashboards en tiempo real para que veas el rendimiento de la campaña.",
      },
      {
        question: "¿Pueden trabajar con mi base de datos de prospectos?",
        answer:
          "Sí, cargamos tus bases de datos de forma segura en nuestros marcadores predictivos para maximizar el tiempo efectivo de conversación y cumplir con las normativas locales de privacidad.",
      },
      {
        question: "¿Cumplen con normativas de no molestar y privacidad?",
        answer:
          "Sí. Incluimos opt-out, listas de exclusión y buenas prácticas por país. Cada contacto queda registrado en tu CRM para trazabilidad y cumplimiento.",
      },
    ],
    en: [
      {
        question: "Can you integrate with my current CRM?",
        answer:
          "Yes. We sync the outcome of every call directly to Salesforce, HubSpot or your own CRM. Every contact, note and next step is recorded in real time.",
      },
      {
        question: "How do you guarantee call quality?",
        answer:
          "We record 100% of interactions and run weekly audits. You also get real-time dashboards to see campaign performance.",
      },
      {
        question: "Do you comply with do-not-call and privacy regulations?",
        answer:
          "Yes. We include opt-out, exclusion lists and best practices by country. Every contact is logged in your CRM for traceability and compliance.",
      },
    ],
  },
}

export function getServiceFaqs(serviceId: ServiceId, lang: Lang): FaqItem[] {
  return faqs[serviceId]?.[lang] ?? faqs["hosted-pbx"][lang]
}
