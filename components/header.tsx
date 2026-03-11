"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { BrandLogo } from "@/components/brand-logo"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Inicio", href: "/#inicio" },
  { name: "Servicios", href: "/#servicios" },
  { name: "Nosotros", href: "/#nosotros" },
  { name: "Contacto", href: "/#contacto" },
  { name: "Blog", href: "/blog" },
]

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <BrandLogo />
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
                <div className="grid gap-1">
                  {navigation.map((item) => (
                    <SheetClose asChild key={item.name}>
                      <Link
                        href={item.href}
                        className="rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-secondary transition-colors"
                      >
                        {item.name}
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
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild className="bg-gold text-background hover:bg-gold-light">
            <Link href="/#contacto">Contáctanos</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}
