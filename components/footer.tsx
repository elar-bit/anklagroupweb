import Link from "next/link"
import { Linkedin, Twitter, Facebook } from "lucide-react"
import { BrandLogo } from "@/components/brand-logo"

const navigation = {
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
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <BrandLogo size="md" />
            </div>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Transformando la infraestructura tecnológica de empresas con soluciones innovadoras.
            </p>
            <div className="flex gap-4">
              {navigation.social.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-gold transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Servicios</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Empresa</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} ANKLA Group Inc. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
