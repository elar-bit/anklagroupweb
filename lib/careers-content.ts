import type { Lang } from "@/components/language-provider"

export type CareerRole = {
  id: string
  title: string
  location: string
  bullets: string[]
}

const rolesEn: CareerRole[] = [
  {
    id: "networking",
    title: "Network Engineering (LAN/Wi‑Fi)",
    location: "Remote / Hybrid",
    bullets: ["Implementation and troubleshooting", "Documentation and standards", "Support for rollouts"],
  },
  {
    id: "support",
    title: "Technical Support (L1/L2)",
    location: "Remote",
    bullets: ["Ticket management", "Monitoring and response", "Escalation and SOPs"],
  },
  {
    id: "callcenter",
    title: "Call Center Specialist (Inbound/Outbound)",
    location: "Remote",
    bullets: ["Metrics and quality", "Script coaching", "Continuous improvement"],
  },
]

const rolesEs: CareerRole[] = [
  {
    id: "networking",
    title: "Ingeniería de Redes (LAN/Wi‑Fi)",
    location: "Remoto / Híbrido",
    bullets: ["Implementación y diagnóstico", "Documentación y estándares", "Soporte a despliegues"],
  },
  {
    id: "support",
    title: "Soporte Técnico (N1/N2)",
    location: "Remoto",
    bullets: ["Gestión de tickets", "Monitoreo y respuesta", "Escalamiento y SOPs"],
  },
  {
    id: "callcenter",
    title: "Especialista Call Center (Inbound/Outbound)",
    location: "Remoto",
    bullets: ["Métricas y calidad", "Entrenamiento de scripts", "Mejora continua"],
  },
]

export function getCareersRoles(lang: Lang): CareerRole[] {
  return lang === "es" ? rolesEs : rolesEn
}

export const careersCopy = {
  es: {
    label: "Carreras",
    heading: "Únete a ANKLA Group Inc",
    intro:
      "Buscamos personas con mentalidad de servicio, obsesión por la calidad y ganas de construir soluciones modernas para empresas.",
    applyTitle: "Postúlate",
    applyText:
      "Completa el formulario y adjunta tu CV en PDF. Indica el rol que te interesa; te responderemos con los siguientes pasos.",
    formName: "Nombre completo",
    formEmail: "Email",
    formPhone: "Teléfono",
    formRole: "Rol de interés",
    formRolePlaceholder: "Selecciona un rol",
    formOther: "Otro / Abierto",
    formMessage: "Mensaje breve (opcional)",
    formMessagePlaceholder: "Experiencia relevante, disponibilidad, etc.",
    formFile: "CV en PDF",
    formFileHint: "Solo PDF. Máx. 4 MB.",
    formFileButton: "Seleccionar archivo",
    formFileEmpty: "Ningún archivo seleccionado",
    submit: "Enviar CV",
    submitting: "Enviando…",
    successTitle: "CV enviado",
    successText: "Gracias. Revisaremos tu perfil y nos pondremos en contacto.",
    errorGeneric: "No se pudo enviar. Intenta de nuevo o escríbenos por contacto.",
    required: "Requerido",
    invalidEmail: "Email no válido",
    invalidFile: "Adjunta un PDF de hasta 4 MB.",
  },
  en: {
    label: "Careers",
    heading: "Join ANKLA Group Inc",
    intro:
      "We look for people with a service mindset, a passion for quality, and the drive to build modern solutions for businesses.",
    applyTitle: "Apply",
    applyText:
      "Fill out the form and attach your résumé as a PDF. Tell us which role interests you; we’ll reply with next steps.",
    formName: "Full name",
    formEmail: "Email",
    formPhone: "Phone",
    formRole: "Role of interest",
    formRolePlaceholder: "Select a role",
    formOther: "Other / Open",
    formMessage: "Short message (optional)",
    formMessagePlaceholder: "Relevant experience, availability, etc.",
    formFile: "Résumé (PDF)",
    formFileHint: "PDF only. Max 4 MB.",
    formFileButton: "Choose file",
    formFileEmpty: "No file selected",
    submit: "Submit résumé",
    submitting: "Sending…",
    successTitle: "Résumé sent",
    successText: "Thank you. We’ll review your profile and get back to you.",
    errorGeneric: "Could not send. Please try again or use the contact section.",
    required: "Required",
    invalidEmail: "Invalid email",
    invalidFile: "Attach a PDF up to 4 MB.",
  },
} as const

export function getCareersCopy(lang: Lang) {
  return lang === "es" ? careersCopy.es : careersCopy.en
}
