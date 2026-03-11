"use client"

import Link from "next/link"
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
  const { lang, setLang } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)

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
          lang === "es" ? "bg-gold text-background" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`px-2 py-1 rounded-full transition-colors ${
          lang === "en" ? "bg-gold text-background" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  )

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-border"
          : "bg-transparent border-transparent"
      }`}
    >
      {/* Nav: when scrolled keep compact; when not scrolled use taller min-height so main logo is never clipped */}
      <nav
        className={`relative mx-auto flex max-w-7xl items-center px-6 lg:px-8 ${
          isScrolled ? "py-4" : "min-h-[120px] py-4 lg:min-h-[180px] lg:py-6"
        }`}
      >
        {/* Left: scroll logo (when scrolled) or empty spacer — scroll state unchanged */}
        <div className="flex-1 flex items-center min-w-0 justify-start">
          {isScrolled ? (
            <BrandLogo variant="scroll" size="md" className="shrink-0" />
          ) : (
            <div className="hidden lg:block flex-1 min-w-0" aria-hidden />
          )}
        </div>

        {/* Center: main logo (desktop, initial state only) — pt-4/py-4 so it never touches top; flexbox center */}
        {!isScrolled && (
          <div className="hidden lg:flex absolute inset-0 items-center justify-center pt-4 pb-4 pointer-events-none">
            <div className="pointer-events-auto flex items-center justify-center">
              <BrandLogo variant="default" size="lg" align="center" />
            </div>
          </div>
        )}
        {/* Center when scrolled: nav links */}
        <div className="hidden lg:flex flex-1 justify-center items-center">
          {isScrolled ? (
            <div className="flex gap-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors"
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

          <div className="flex lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
                >
                  <span className="sr-only">{labels.openMenu}</span>
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-sm">
                <SheetHeader className="pb-2">
                  <SheetTitle className="flex items-center justify-between">
                    <BrandLogo variant={isScrolled ? "scroll" : "default"} size="sm" />
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-6 flow-root">
                  <div className="mb-4">
                    <LangSwitch />
                  </div>
                  <div className="grid gap-1">
                    {navigation.map((item) => (
                      <SheetClose asChild key={item.key}>
                        <Link
                          href={item.href}
                          className="rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-secondary transition-colors block"
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

      {/* Mobile: centered logo when at top only — padding so it doesn't touch top edge */}
      {!isScrolled && (
        <div className="lg:hidden flex items-center justify-center pt-4 pb-4">
          <BrandLogo variant="default" size="md" align="center" />
        </div>
      )}
    </header>
  )
}
