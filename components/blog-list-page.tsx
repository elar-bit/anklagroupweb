"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { blogListCopy, blogPosts } from "@/lib/blog-content"

export function BlogListPage() {
  const { lang } = useLanguage()
  const t = lang === "es" ? blogListCopy.es : blogListCopy.en
  const slugs = Object.keys(blogPosts)

  return (
    <section className="pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-gold font-medium mb-3">{t.label}</p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">{t.heading}</h1>
          <p className="mt-4 text-muted-foreground text-pretty">{t.intro}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {slugs.map((slug) => {
            const post = blogPosts[slug][lang]
            return (
              <Card key={slug} className="bg-card border-border p-6 rounded-2xl">
                <h2 className="text-lg font-semibold text-foreground">{post.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{post.excerpt}</p>
                <div className="mt-5">
                  <Button asChild variant="outline" className="border-border">
                    <Link href={`/blog/${slug}`}>{t.read}</Link>
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 rounded-3xl border border-border bg-card p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-foreground">{t.ctaTitle}</h3>
            <p className="text-sm text-muted-foreground mt-1">{t.ctaText}</p>
          </div>
          <Button asChild className="bg-gold text-background hover:bg-gold-light">
            <Link href="/#contacto">{t.ctaButton}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
