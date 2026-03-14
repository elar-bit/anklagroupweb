"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const copyEn = {
  sectionTitle: "Contact",
  heading: "Let's talk about your project",
  subheading: "We're ready to help you transform your technology infrastructure. Contact us today.",
  contactInfo: "Contact information",
  email: "Email",
  phone: "Phones",
  location: "Presence",
  hoursTitle: "Business hours",
  monFri: "Monday - Friday",
  sat: "Saturday",
  techSupport: "Technical Support",
  name: "Name",
  namePlaceholder: "Your name",
  emailPlaceholder: "you@email.com",
  company: "Company",
  companyPlaceholder: "Your company name",
  serviceInterest: "Service of interest",
  selectService: "Select a service",
  hostedPbx: "Cloud Telephony (Hosted PBX)",
  lan: "LAN Networks",
  support: "Managed Support",
  inbound: "Inbound Campaigns",
  outbound: "Outbound Campaigns",
  aiAgents: "AI Agents",
  omnichannel: "AI Omnichannel",
  other: "Other",
  message: "Message",
  messagePlaceholder: "Tell us about your project...",
  send: "Send message",
  sending: "Sending...",
  successTitle: "Message sent!",
  successText: "We'll get back to you soon.",
  requiredMessage: "Please fill out this field",
}

const copyEs = {
  sectionTitle: "Contacto",
  heading: "Hablemos de tu proyecto",
  subheading: "Estamos listos para ayudarte a transformar tu infraestructura tecnológica. Contáctanos hoy.",
  contactInfo: "Información de contacto",
  email: "Email",
  phone: "Teléfonos",
  location: "Presencia",
  hoursTitle: "Horario de atención",
  monFri: "Lunes - Viernes",
  sat: "Sábado",
  techSupport: "Soporte Técnico",
  name: "Nombre",
  namePlaceholder: "Tu nombre",
  emailPlaceholder: "tu@email.com",
  company: "Empresa",
  companyPlaceholder: "Nombre de tu empresa",
  serviceInterest: "Servicio de interés",
  selectService: "Selecciona un servicio",
  hostedPbx: "Telefonía en la Nube (Hosted PBX)",
  lan: "Redes LAN",
  support: "Soporte Técnico",
  inbound: "Campañas Inbound",
  outbound: "Campañas Outbound",
  aiAgents: "AI Agents",
  omnichannel: "AI Omnichannel",
  other: "Otro",
  message: "Mensaje",
  messagePlaceholder: "Cuéntanos sobre tu proyecto...",
  send: "Enviar mensaje",
  sending: "Enviando...",
  successTitle: "¡Mensaje enviado!",
  successText: "Nos pondremos en contacto contigo pronto.",
  requiredMessage: "Llena este campo",
}

export function Contact() {
  const { lang } = useLanguage()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const t = lang === "es" ? copyEs : copyEn

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const serviceOptions = [
    { value: "hosted-pbx", label: t.hostedPbx },
    { value: "lan", label: t.lan },
    { value: "support", label: t.support },
    { value: "inbound", label: t.inbound },
    { value: "outbound", label: t.outbound },
    { value: "ai-agents", label: t.aiAgents },
    { value: "omnichannel", label: t.omnichannel },
    { value: "other", label: t.other },
  ]

  return (
    <section id="contacto" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-gold font-medium mb-4">{t.sectionTitle}</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {t.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-200 text-pretty">{t.subheading}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">{t.contactInfo}</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{t.email}</p>
                    <a
                      href="mailto:info@anklagroupinc.com"
                      className="text-gray-200 hover:text-gold transition-colors"
                    >
                      info@anklagroupinc.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  <div className="space-y-3">
                    <p className="font-medium text-foreground">{t.phone}</p>
                    <div className="space-y-1.5 text-gray-200">
                      <p>
                        <a href="tel:+13055035859" className="hover:text-gold transition-colors">305-503-5859</a>
                        <span className="text-gray-400"> — Miami</span>
                      </p>
                      <p>
                        <a href="tel:+17875585199" className="hover:text-gold transition-colors">787-558-5199</a>
                        <span className="text-gray-400"> — Puerto Rico</span>
                      </p>
                      <p>
                        <a href="tel:+573103665600" className="hover:text-gold transition-colors">+57 310-366-5600</a>
                        <span className="text-gray-400"> — Colombia</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{t.location}</p>
                    <p className="text-gray-200">Miami · Puerto Rico · Colombia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h4 className="font-semibold text-foreground mb-4">{t.hoursTitle}</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-200">{t.monFri}</span>
                  <span className="text-foreground">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-200">{t.sat}</span>
                  <span className="text-foreground">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-200">{t.techSupport}</span>
                  <span className="text-gold font-medium">24/7</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{t.successTitle}</h3>
                <p className="text-gray-200">{t.successText}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      {t.name}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder={t.namePlaceholder}
                      required
                      onInvalid={(e) => e.currentTarget.setCustomValidity(t.requiredMessage)}
                      onInput={(e) => e.currentTarget.setCustomValidity("")}
                      className="bg-background border-border focus:border-gold focus:ring-gold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      {t.email}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={t.emailPlaceholder}
                      required
                      onInvalid={(e) => e.currentTarget.setCustomValidity(t.requiredMessage)}
                      onInput={(e) => e.currentTarget.setCustomValidity("")}
                      className="bg-background border-border focus:border-gold focus:ring-gold"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-foreground">
                    {t.company}
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder={t.companyPlaceholder}
                    className="bg-background border-border focus:border-gold focus:ring-gold"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-foreground">
                    {t.serviceInterest}
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full h-10 px-3 rounded-md border border-border bg-background text-foreground focus:border-gold focus:ring-gold focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      {t.selectService}
                    </option>
                    {serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    {t.message}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t.messagePlaceholder}
                    rows={4}
                    required
                    onInvalid={(e) => e.currentTarget.setCustomValidity(t.requiredMessage)}
                    onInput={(e) => e.currentTarget.setCustomValidity("")}
                    className="bg-background border-border focus:border-gold focus:ring-gold resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gold text-background hover:bg-gold-light disabled:opacity-50"
                >
                  {isLoading ? t.sending : <><span>{t.send}</span><Send className="ml-2 h-4 w-4 inline" /></>}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
