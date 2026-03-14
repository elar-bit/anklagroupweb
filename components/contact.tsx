"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle, Calendar, Check, AlertCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"

const CALENDLY_URL = "https://calendly.com/anklagroup/demo"

const copyEn = {
  sectionTitle: "Contact",
  heading: "Let's talk about your project",
  subheading: "Get a tailored quote. Tell us your main challenge and we'll match you with the right solution.",
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
  challengeQuestion: "What's your main challenge today?",
  challengeUnstable: "Unstable networks",
  challengeCosts: "High costs",
  challengeSupport: "Lack of support",
  challengeScale: "Need to scale",
  challengeOther: "Other",
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
  send: "Send request",
  sending: "Sending...",
  successTitle: "Request received",
  successText: "We'll contact you shortly. While you wait, book a demo to see our solutions in action.",
  bookDemo: "Schedule a demo",
  requiredMessage: "Please fill out this field",
  invalidEmail: "Enter a valid email",
}

const copyEs = {
  sectionTitle: "Contacto",
  heading: "Hablemos de tu proyecto",
  subheading: "Obtén una cotización a tu medida. Cuéntanos tu principal reto y te conectamos con la solución adecuada.",
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
  challengeQuestion: "¿Cuál es tu principal reto hoy?",
  challengeUnstable: "Redes inestables",
  challengeCosts: "Altos costos",
  challengeSupport: "Falta de soporte",
  challengeScale: "Necesito escalar",
  challengeOther: "Otro",
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
  send: "Enviar solicitud",
  sending: "Enviando...",
  successTitle: "Solicitud recibida",
  successText: "Te contactaremos pronto. Mientras tanto, agenda una demo para ver nuestras soluciones en acción.",
  bookDemo: "Agendar demo",
  requiredMessage: "Llena este campo",
  invalidEmail: "Ingresa un email válido",
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Contact() {
  const { lang } = useLanguage()
  const t = lang === "es" ? copyEs : copyEn
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [challenge, setChallenge] = useState<string>("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [service, setService] = useState("")
  const [message, setMessage] = useState("")
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const nameValid = name.trim().length >= 2
  const emailValid = EMAIL_REGEX.test(email)
  const messageValid = message.trim().length >= 10
  const formValid = challenge && nameValid && emailValid && messageValid

  const challengeOptions = [
    { value: "unstable", label: t.challengeUnstable },
    { value: "costs", label: t.challengeCosts },
    { value: "support", label: t.challengeSupport },
    { value: "scale", label: t.challengeScale },
    { value: "other", label: t.challengeOther },
  ]

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTouched((p) => ({ ...p, name: true, email: true, message: true, challenge: true }))
    if (!formValid) return
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 60000)
  }

  const inputClass = useCallback(
    (valid: boolean, fieldTouched: boolean) =>
      cn(
        "bg-background border transition-all",
        fieldTouched && !valid && "border-destructive focus:border-destructive",
        fieldTouched && valid && "border-emerald-500/50 focus:border-emerald-500",
        "focus:border-gold focus:ring-gold"
      ),
    []
  )

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

          <div className="rounded-2xl border border-border bg-card p-6 lg:p-8 shadow-lg shadow-black/5">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{t.successTitle}</h3>
                <p className="text-gray-200 mb-6 max-w-sm">{t.successText}</p>
                <Button asChild className="bg-gold text-background hover:bg-gold-light">
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                    <Calendar className="h-5 w-5 mr-2" />
                    {t.bookDemo}
                  </a>
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground">{t.challengeQuestion}</label>
                  <div className="flex flex-wrap gap-2">
                    {challengeOptions.map((opt) => (
                      <Button
                        key={opt.value}
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => setChallenge(opt.value)}
                        className={cn(
                          "border transition-colors",
                          challenge === opt.value
                            ? "border-gold bg-gold/15 text-gold"
                            : "border-border hover:border-gold/50"
                        )}
                      >
                        {opt.label}
                      </Button>
                    ))}
                  </div>
                  {touched.challenge && !challenge && (
                    <p className="text-xs text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {t.requiredMessage}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      {t.name}
                    </label>
                    <div className="relative">
                      <Input
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={() => setTouched((p) => ({ ...p, name: true }))}
                        placeholder={t.namePlaceholder}
                        required
                        className={cn(inputClass(nameValid, touched.name), touched.name && "pr-9")}
                      />
                      {touched.name && (
                        <span className="absolute right-3 top-1/2 -translate-y-1/2">
                          {nameValid ? (
                            <Check className="h-4 w-4 text-emerald-500" />
                          ) : (
                            <AlertCircle className="h-4 w-4 text-destructive" />
                          )}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      {t.email}
                    </label>
                    <div className="relative">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => setTouched((p) => ({ ...p, email: true }))}
                        placeholder={t.emailPlaceholder}
                        required
                        className={cn(inputClass(emailValid, touched.email), touched.email && "pr-9")}
                      />
                      {touched.email && (
                        <span className="absolute right-3 top-1/2 -translate-y-1/2">
                          {emailValid ? (
                            <Check className="h-4 w-4 text-emerald-500" />
                          ) : (
                            <AlertCircle className="h-4 w-4 text-destructive" />
                          )}
                        </span>
                      )}
                    </div>
                    {touched.email && !emailValid && email && (
                      <p className="text-xs text-destructive">{t.invalidEmail}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-foreground">
                    {t.company}
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
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
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full h-10 px-3 rounded-md border border-border bg-background text-foreground focus:border-gold focus:ring-gold focus:outline-none"
                  >
                    <option value="">{t.selectService}</option>
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
                  <div className="relative">
                    <Textarea
                      id="message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onBlur={() => setTouched((p) => ({ ...p, message: true }))}
                      placeholder={t.messagePlaceholder}
                      rows={4}
                      required
                      className={cn(
                        "resize-none pr-10",
                        inputClass(messageValid, touched.message)
                      )}
                    />
                    {touched.message && (
                      <span className="absolute right-3 top-4">
                        {messageValid ? (
                          <Check className="h-4 w-4 text-emerald-500" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-destructive" />
                        )}
                      </span>
                    )}
                  </div>
                  {touched.message && !messageValid && message && (
                    <p className="text-xs text-destructive">
                      {lang === "es" ? "Mínimo 10 caracteres." : "Minimum 10 characters."}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isLoading || !formValid}
                  className="w-full bg-gold text-background hover:bg-gold-light disabled:opacity-50 h-11 font-medium"
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
