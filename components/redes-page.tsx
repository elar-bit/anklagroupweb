"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { getRedesCopy } from "@/lib/redes-content"

export function RedesPageContent() {
  const { lang } = useLanguage()
  const t = getRedesCopy(lang)

  return (
    <section className="pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-gold font-medium mb-3">{t.label}</p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">{t.heading}</h1>
          <p className="mt-4 text-muted-foreground text-pretty">{t.intro}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card border-border p-6 rounded-2xl">
            <h2 className="text-lg font-semibold text-foreground">{t.salesTitle}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{t.salesText}</p>
            <div className="mt-5">
              <Button asChild className="bg-gold text-background hover:bg-gold-light">
                <Link href="/#contacto">{t.salesCta}</Link>
              </Button>
            </div>
          </Card>
          <Card className="bg-card border-border p-6 rounded-2xl">
            <h2 className="text-lg font-semibold text-foreground">{t.supportTitle}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{t.supportText}</p>
            <div className="mt-5">
              <Button asChild variant="outline" className="border-border">
                <Link href="/#contacto">{t.supportCta}</Link>
              </Button>
            </div>
          </Card>
          <Card className="bg-card border-border p-6 rounded-2xl">
            <h2 className="text-lg font-semibold text-foreground">{t.partnersTitle}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{t.partnersText}</p>
            <div className="mt-5">
              <Button asChild variant="outline" className="border-border">
                <Link href="/#contacto">{t.partnersCta}</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
