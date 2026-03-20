"use client"

import { useLanguage } from "@/components/language-provider"
import { getPrivacyContent } from "@/lib/legal-content"

export function LegalPrivacyPage() {
  const { lang } = useLanguage()
  const doc = getPrivacyContent(lang)

  return (
    <section className="pt-28 pb-16">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <p className="text-gold font-medium mb-3">{doc.label}</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">{doc.title}</h1>
        <p className="mt-4 text-muted-foreground text-pretty">{doc.intro}</p>

        <div className="mt-10 space-y-8 rounded-2xl border border-border bg-card p-6">
          {doc.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-semibold text-foreground">{section.heading}</h2>
              {Array.isArray(section.body) ? (
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                  {section.body.map((line) => (
                    <li key={line}>{line.replace(/^-\s*/, "")}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm text-muted-foreground">{section.body}</p>
              )}
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
