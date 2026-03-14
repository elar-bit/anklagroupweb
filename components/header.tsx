"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
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
}

const labelsEs: Record<string, string> = {
  home: "Inicio",
  services: "Servicios",
  about: "Nosotros",
  contact: "Contacto",
  blog: "Blog",
  contactUs: "Contáctanos",
  openMenu: "Abrir menú",
}

export function Header() {
  const pathname = usePathname()
  const { lang, setLang } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)

  const isHome = pathname === "/"
  // On mobile always use compact header so it stays visible when scrolling; desktop keeps expand/collapse
  const showTransparent = isHome && !isScrolled

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY >= SCROLL_THRESHOLD)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[9999] border-b transition-all duration-300 ${
        showTransparent
          ? "bg-transparent border-transparent"
          : "bg-background/95 backdrop-blur-md border-border"
      }`}
    >
      {/* Nav: on mobile always compact (single row); on desktop expand only on home at top */}
      <nav
        className={`relative mx-auto flex max-w-7xl items-center pl-6 pr-8 lg:px-8 ${
          showTransparent ? "py-2 min-h-0 lg:min-h-[180px] lg:py-6" : "py-4"
        }`}
      >
        {/* Left: logo — mobile always compact; desktop only when scrolled/not home */}
        <div className="flex-1 flex items-center min-w-0 justify-start min-w-[100px] sm:min-w-[140px] lg:min-w-0">
          {/* Mobile: always show logo so header stays one row and visible */}
          <div className="flex lg:hidden shrink-0">
            <BrandLogo variant="scroll" size="md" />
          </div>
          {/* Desktop: logo only when compact */}
          {!showTransparent ? (
            <div className="hidden lg:block shrink-0">
              <BrandLogo variant="scroll" size="md" />
            </div>
          ) : (
            <div className="hidden lg:block flex-1 min-w-0" aria-hidden />
          )}
        </div>

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

        {/* Right: CTA + Language + Mobile menu */}
        <div className="flex items-center justify-end gap-3 lg:gap-4 flex-1 min-w-0">
          <LangSwitch />

          <div className="hidden lg:block">
            <Button asChild className="bg-gold text-background hover:bg-gold-light">
              <Link href="/#contacto">{labels.contactUs}</Link>
            </Button>
          </div>

          <div className="flex lg:hidden shrink-0 ml-1">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md p-3 text-foreground touch-manipulation"
                  aria-label={labels.openMenu}
                >
                  <span className="sr-only">{labels.openMenu}</span>
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-sm flex flex-col p-0">
                <SheetHeader className="shrink-0 px-4 pr-12 pt-4 pb-3 border-b border-border">
                  <SheetTitle className="flex items-center justify-start">
                    <BrandLogo variant="scroll" size="sm" className="!h-8 !w-[110px]" />
                  </SheetTitle>
                </SheetHeader>
                <div className="flex-1 min-h-0 overflow-y-auto px-4 py-4">
                  <div className="mb-4">
                    <LangSwitch />
                  </div>
                  <div className="grid gap-1">
                    {navigation.map((item) => (
                      <SheetClose asChild key={item.key}>
                        <Link
                          href={item.href}
                          className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground hover:bg-secondary transition-colors block"
                        >
                          {labels[item.key]}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                  <div className="mt-5">
                    <SheetClose asChild>
                      <Button asChild className="w-full bg-gold text-background hover:bg-gold-light">
                        <Link href="/#contacto">{labels.contactUs}</Link>
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}
