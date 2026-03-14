"use client"

import Image from "next/image"
import { Shield, Clock, Users, Award } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const valuesEn = [
  { icon: Shield, title: "Reliability", description: "Robust infrastructure with 99.9% guaranteed uptime for your peace of mind." },
  { icon: Clock, title: "24/7 Support", description: "Technical team available around the clock, every day of the week." },
  { icon: Users, title: "Experience", description: "Over 10 years of experience in enterprise technology solutions." },
  { icon: Award, title: "Excellence", description: "Committed to the highest standards of quality and service." },
]

const valuesEs = [
  { icon: Shield, title: "Confiabilidad", description: "Infraestructura robusta con 99.9% de uptime garantizado para tu tranquilidad." },
  { icon: Clock, title: "Soporte 24/7", description: "Equipo técnico disponible las 24 horas, los 7 días de la semana." },
  { icon: Users, title: "Experiencia", description: "Más de 10 años de experiencia en soluciones tecnológicas empresariales." },
  { icon: Award, title: "Excelencia", description: "Comprometidos con los más altos estándares de calidad y servicio." },
]

const copyEn = {
  label: "About Us",
  heading: "Your trusted technology partner",
  para1: "At ANKLA Group Inc, we specialize in providing end-to-end technology solutions that drive business growth and efficiency.",
  para2: "From cloud telephony to artificial intelligence, our team is committed to delivering the highest quality services, tailored to each client's needs.",
  tagline: "Technology that feels simple",
  subtitle: "Design • Implementation • Support",
}

const copyEs = {
  label: "Sobre Nosotros",
  heading: "Tu socio tecnológico de confianza",
  para1: "En ANKLA Group Inc, nos especializamos en proporcionar soluciones tecnológicas integrales que impulsan el crecimiento y la eficiencia de las empresas.",
  para2: "Desde telefonía en la nube hasta inteligencia artificial, nuestro equipo está comprometido con ofrecer servicios de la más alta calidad, adaptados a las necesidades específicas de cada cliente.",
  tagline: "Tecnología que se siente simple",
  subtitle: "Diseño • Implementación • Soporte",
}

export function About() {
  const { lang } = useLanguage()
  const values = lang === "es" ? valuesEs : valuesEn
  const t = lang === "es" ? copyEs : copyEn

  return (
    <section id="nosotros" className="py-24 sm:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-gold font-medium mb-4">{t.label}</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6 text-balance">
              {t.heading}
            </h2>
            <p className="text-lg text-gray-200 mb-6 text-pretty">{t.para1}</p>
            <p className="text-gray-200 mb-8 text-pretty">{t.para2}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <div key={value.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                      <p className="text-sm text-gray-200">{value.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-gold/20 via-gold/10 to-transparent p-8 lg:p-12">
              <div className="w-full h-full rounded-xl bg-background/50 backdrop-blur-sm border border-border flex flex-col items-center justify-center text-center gap-4 py-4 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80"
                  alt=""
                  width={320}
                  height={240}
                  className="w-full max-w-[200px] sm:max-w-[240px] h-32 sm:h-40 object-cover object-center rounded-lg shrink-0"
                />
                <div className="shrink-0">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{t.tagline}</h3>
                  <p className="text-gold font-medium text-sm sm:text-base">{t.subtitle}</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gold/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
