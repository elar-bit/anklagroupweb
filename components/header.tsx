"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { BrandLogo } from "@/components/brand-logo"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useLanguage } from "@/components/language-provider"

const SCROLL_THRESHOLD = 80
const SCROLL_THRESHOLD_MOBILE = 50 // Mostrar header compacto antes en móvil para que el menú sea visible al hacer scroll

const navigation = [
  { key: "home", href: "/#inicio" },
  { key: "services", href: "/#servicios" },
  { key: "about", href: "/#nosotros" },
  { key: "contact", href: "/#contacto" },
  { key: "blog", href: "/blog" },
]

const labelsEn: Record<string, string> = {
  home: "Home",
  services: "Services",
  about: "About",
  contact: "Contact",
  blog: "Blog",
  contactUs: "Contact us",
  openMenu: "Open menu",
  closeMenu: "Close",
}

const labelsEs: Record<string, string> = {
  home: "Inicio",
  services: "Servicios",
  about: "Nosotros",
  contact: "Contacto",
  blog: "Blog",
  contactUs: "Contáctanos",
  openMenu: "Abrir menú",
  closeMenu: "Cerrar",
}

export function Header() {
  const pathname = usePathname()
  const { lang, setLang } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)

  const isHome = pathname === "/"
  const showTransparent = isHome && !isScrolled

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const isMobile = typeof window !== "undefined" && window.innerWidth < 1024
      const threshold = isMobile ? SCROLL_THRESHOLD_MOBILE : SCROLL_THRESHOLD
      setIsScrolled(y >= threshold)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  const labels = lang === "es" ? labelsEs : labelsEn

  const LangSwitch = () => (
    <div className="flex items-center rounded-full border border-border bg-card px-1 py-0.5 text-xs font-medium">
      <button
        type="button"
        onClick={() => setLang("es")}
        className={`px-2 py-1 rounded-full transition-colors ${
          lang === "es" ? "bg-gold text-background" : "text-white/90 hover:text-white"
        }`}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`px-2 py-1 rounded-full transition-colors ${
          lang === "en" ? "bg-gold text-background" : "text-white/90 hover:text-white"
        }`}
      >
        EN
      </button>
    </div>
  )

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[9999] border-b transition-all duration-300 ${
        showTransparent
          ? "bg-transparent border-transparent"
          : "bg-background/95 backdrop-blur-md border-border"
      }`}
    >
      {/* Nav: compact on non-home or when scrolled; expanded only on home at top (desktop). Móvil: al tope solo logo default + idioma; al scroll logo scroll + idioma + menú */}
      <nav
        className={`relative mx-auto flex max-w-7xl items-center pl-6 pr-8 lg:px-8 ${
          showTransparent ? "py-2 min-h-0 lg:min-h-[180px] lg:py-6 max-lg:min-h-[8rem] max-lg:py-3" : "py-4"
        }`}
      >
        {/* Left/Center: desktop = scroll logo o spacer; móvil al tope = logo default centrado; móvil al scroll = logo scroll */}
        <div className={`flex-1 flex items-center min-w-0 justify-start ${!showTransparent ? "min-w-[140px] lg:min-w-0" : ""}`}>
          {!showTransparent ? (
            <BrandLogo variant="scroll" size="md" className="shrink-0" />
          ) : (
            <div className="hidden lg:block flex-1 min-w-0" aria-hidden />
          )}
        </div>

        {/* Móvil al tope: logo justo al centro, con espacio arriba para que no se corte */}
        {showTransparent && (
          <div className="lg:hidden absolute inset-0 flex items-center justify-center pt-6 pb-2 pointer-events-none">
            <BrandLogo variant="default" size="md" align="center" />
          </div>
        )}

        {/* Center: main logo (desktop, only on home at top) */}
        {showTransparent && (
          <div className="hidden lg:flex absolute inset-0 items-center justify-center pt-4 pb-4 pointer-events-none">
            <div className="pointer-events-auto flex items-center justify-center">
              <BrandLogo variant="default" size="lg" align="center" />
            </div>
          </div>
        )}
        {/* Center when compact: nav links */}
        <div className="hidden lg:flex flex-1 justify-center items-center">
          {!showTransparent ? (
            <div className="flex gap-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-sm font-medium text-white/90 hover:text-gold transition-colors"
                >
                  {labels[item.key]}
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex-1 min-w-0" aria-hidden />
          )}
        </div>

        {/* Right: CTA + Language + Mobile menu. Móvil al tope: sin flex-1 para que el logo quede más centrado; switch un poco a la izquierda (pr) */}
        <div className="flex items-center justify-end gap-3 lg:gap-4 flex-1 min-w-0 max-lg:flex-none max-lg:pr-4">
          <LangSwitch />

          <div className="hidden lg:block">
            <Button asChild className="bg-gold text-background hover:bg-gold-light">
              <Link href="/#contacto">{labels.contactUs}</Link>
            </Button>
          </div>

          {/* Móvil: menú con estado controlado para poder cerrar con click en hamburger; sin switch duplicado dentro */}
          {!showTransparent && (
          <div className="flex lg:hidden shrink-0 ml-1">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md p-3 text-foreground touch-manipulation"
                  aria-label={labels.openMenu}
                  aria-expanded={mobileMenuOpen}
                >
                  <span className="sr-only">{labels.openMenu}</span>
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </button>
              </SheetTrigger>
              <SheetContent
                className="w-full sm:max-w-sm"
                overlayClassName="max-lg:top-14 max-lg:left-0 max-lg:right-0 max-lg:bottom-0"
              >
                <SheetHeader className="pb-2 flex flex-row items-center justify-between gap-2">
                  <SheetTitle className="flex items-center justify-start flex-1 min-w-0">
                    <BrandLogo variant="scroll" size="sm" />
                  </SheetTitle>
                  <SheetClose asChild>
                    <button
                      type="button"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors touch-manipulation"
                      aria-label={labels.closeMenu}
                    >
                      <X className="h-5 w-5" />
                      <span>{labels.closeMenu}</span>
                    </button>
                  </SheetClose>
                </SheetHeader>
                <div className="mt-6 flow-root">
                  <div className="grid gap-1">
                    {navigation.map((item) => (
                      <SheetClose asChild key={item.key}>
                        <Link
                          href={item.href}
                          className="rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-secondary transition-colors block"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {labels[item.key]}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                  <div className="mt-5">
                    <SheetClose asChild>
                      <Button asChild className="w-full bg-gold text-background hover:bg-gold-light">
                        <Link href="/#contacto" onClick={() => setMobileMenuOpen(false)}>{labels.contactUs}</Link>
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          )}
        </div>
      </nav>
    </header>
  )
}
