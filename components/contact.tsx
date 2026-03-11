"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsLoading(false)
    setIsSubmitted(true)
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contacto" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-gold font-medium mb-4">Contacto</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Hablemos de tu proyecto
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Estamos listos para ayudarte a transformar tu infraestructura tecnológica. Contáctanos hoy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Información de contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:info@anklagroup.com" className="text-muted-foreground hover:text-gold transition-colors">
                      info@anklagroup.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Teléfono</p>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-gold transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Ubicación</p>
                    <p className="text-muted-foreground">
                      Miami, Florida, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Working hours */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h4 className="font-semibold text-foreground mb-4">Horario de atención</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Lunes - Viernes</span>
                  <span className="text-foreground">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sábado</span>
                  <span className="text-foreground">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Soporte Técnico</span>
                  <span className="text-gold font-medium">24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-muted-foreground">
                  Nos pondremos en contacto contigo pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Nombre
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Tu nombre"
                      required
                      className="bg-background border-border focus:border-gold focus:ring-gold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      className="bg-background border-border focus:border-gold focus:ring-gold"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-foreground">
                    Empresa
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Nombre de tu empresa"
                    className="bg-background border-border focus:border-gold focus:ring-gold"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-foreground">
                    Servicio de interés
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full h-10 px-3 rounded-md border border-border bg-background text-foreground focus:border-gold focus:ring-gold focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Selecciona un servicio</option>
                    <option value="hosted-pbx">Telefonía en la Nube (Hosted PBX)</option>
                    <option value="lan">Redes LAN</option>
                    <option value="support">Soporte Técnico</option>
                    <option value="inbound">Campañas Inbound</option>
                    <option value="outbound">Campañas Outbound</option>
                    <option value="ai-agents">AI Agents</option>
                    <option value="omnichannel">AI Omnichannel</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Cuéntanos sobre tu proyecto..."
                    rows={4}
                    required
                    className="bg-background border-border focus:border-gold focus:ring-gold resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gold text-background hover:bg-gold-light disabled:opacity-50"
                >
                  {isLoading ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar mensaje
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
