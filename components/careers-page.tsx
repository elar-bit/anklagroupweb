"use client"

import { Card } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { getCareersCopy, getCareersRoles } from "@/lib/careers-content"
import { CareersCvForm } from "@/components/careers-cv-form"

export function CareersPageContent() {
  const { lang } = useLanguage()
  const t = getCareersCopy(lang)
  const roles = getCareersRoles(lang)

  return (
    <section className="pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-gold font-medium mb-3">{t.label}</p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">{t.heading}</h1>
          <p className="mt-4 text-muted-foreground text-pretty">{t.intro}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((r) => (
            <Card key={r.id} className="bg-card border-border p-6 rounded-2xl">
              <h2 className="text-lg font-semibold text-foreground">{r.title}</h2>
              <p className="text-sm text-gold mt-1">{r.location}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {r.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-14 max-w-2xl">
          <h2 className="text-xl font-semibold text-foreground">{t.applyTitle}</h2>
          <p className="text-sm text-muted-foreground mt-2 mb-6">{t.applyText}</p>
          <CareersCvForm />
        </div>
      </div>
    </section>
  )
}
