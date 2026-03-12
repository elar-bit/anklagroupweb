"use client"

import Link from "next/link"
import { Linkedin, Twitter, Facebook } from "lucide-react"
import { BrandLogo } from "@/components/brand-logo"
import { useLanguage } from "@/components/language-provider"

const navigationEn = {
  services: [
    { name: "Cloud Telephony", href: "/servicios/hosted-pbx" },
    { name: "LAN Networks", href: "/servicios/lan" },
    { name: "Managed Support", href: "/servicios/support" },
    { name: "AI Agents", href: "/servicios/ai-agents" },
  ],
  company: [
    { name: "About Us", href: "/#nosotros" },
    { name: "Contact", href: "/#contacto" },
    { name: "Careers", href: "/carreras" },
    { name: "Blog", href: "/blog" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/legal/privacidad" },
    { name: "Terms of Service", href: "/legal/terminos" },
  ],
  social: [
    { name: "LinkedIn", href: "/redes", icon: Linkedin },
    { name: "Twitter", href: "/redes", icon: Twitter },
    { name: "Facebook", href: "/redes", icon: Facebook },
  ],
  servicesTitle: "Services",
  companyTitle: "Company",
  legalTitle: "Legal",
  tagline: "Transforming business technology infrastructure with innovative solutions.",
  copyright: "All rights reserved.",
}

const navigationEs = {
  services: [
    { name: "Telefonía en la Nube", href: "/servicios/hosted-pbx" },
    { name: "Redes LAN", href: "/servicios/lan" },
    { name: "Soporte Técnico", href: "/servicios/support" },
    { name: "AI Agents", href: "/servicios/ai-agents" },
  ],
  company: [
    { name: "Sobre Nosotros", href: "/#nosotros" },
    { name: "Contacto", href: "/#contacto" },
    { name: "Carreras", href: "/carreras" },
    { name: "Blog", href: "/blog" },
  ],
  legal: [
    { name: "Política de Privacidad", href: "/legal/privacidad" },
    { name: "Términos de Servicio", href: "/legal/terminos" },
  ],
  social: [
    { name: "LinkedIn", href: "/redes", icon: Linkedin },
    { name: "Twitter", href: "/redes", icon: Twitter },
    { name: "Facebook", href: "/redes", icon: Facebook },
  ],
  servicesTitle: "Servicios",
  companyTitle: "Empresa",
  legalTitle: "Legal",
  tagline: "Transformando la infraestructura tecnológica de empresas con soluciones innovadoras.",
  copyright: "Todos los derechos reservados.",
}

export function Footer() {
  const { lang } = useLanguage()
  const t = lang === "es" ? navigationEs : navigationEn

  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="mb-4">
              <BrandLogo size="md" />
            </div>
            <p className="text-sm text-gray-200 mb-6 max-w-xs">{t.tagline}</p>
            <div className="flex gap-4">
              {t.social.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-200 hover:text-gold transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">{t.servicesTitle}</h3>
            <ul className="space-y-3">
              {t.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-200 hover:text-gold transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">{t.companyTitle}</h3>
            <ul className="space-y-3">
              {t.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-200 hover:text-gold transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">{t.legalTitle}</h3>
            <ul className="space-y-3">
              {t.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-200 hover:text-gold transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-gray-200 text-center">
            &copy; {new Date().getFullYear()} ANKLA Group Inc. {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
