"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { BrandLogo } from "@/components/brand-logo"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useLanguage } from "@/components/language-provider"

const navigation = [
  { key: "home", href: "/#inicio" },
  { key: "services", href: "/#servicios" },
  { key: "about", href: "/#nosotros" },
  { key: "contact", href: "/#contacto" },
  { key: "blog", href: "/blog" },
]

export function Header() {
  const { lang, setLang } = useLanguage()

  const labels: Record<(typeof navigation)[number]["key"], string> =
    lang === "es"
      ? {
          home: "Inicio",
          services: "Servicios",
          about: "Nosotros",
          contact: "Contacto",
          blog: "Blog",
        }
      : {
          home: "Home",
          services: "Services",
          about: "About",
          contact: "Contact",
          blog: "Blog",
        }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <BrandLogo />
        </div>
        <div className="flex items-center gap-3 lg:gap-4">
          {/* Language switch - desktop */}
          <div className="hidden sm:flex items-center rounded-full border border-border bg-card px-1 py-0.5 text-xs font-medium">
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

          <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
              >
                <span className="sr-only">Abrir menú</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-sm">
              <SheetHeader className="pb-2">
                <SheetTitle className="flex items-center justify-between">
                  <BrandLogo size="sm" className="h-8 w-[150px]" />
                </SheetTitle>
              </SheetHeader>
              <div className="px-4 pb-4">
                {/* Language switch - mobile */}
                <div className="mb-4 flex items-center justify-start">
                  <div className="inline-flex items-center rounded-full border border-border bg-card px-1 py-0.5 text-xs font-medium">
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
                </div>
                <div className="grid gap-1">
                  {navigation.map((item) => (
                    <SheetClose asChild key={item.key}>
                      <Link
                        href={item.href}
                        className="rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-secondary transition-colors"
                      >
                        {labels[item.key]}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
                <div className="mt-5">
                  <SheetClose asChild>
                    <Button asChild className="w-full bg-gold text-background hover:bg-gold-light">
                      <Link href="/#contacto">Contáctanos</Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-10">
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
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild className="bg-gold text-background hover:bg-gold-light">
            <Link href="/#contacto">{lang === "es" ? "Contáctanos" : "Contact us"}</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}
