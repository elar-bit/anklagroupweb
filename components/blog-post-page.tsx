"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { blogArticleCopy, getBlogPost } from "@/lib/blog-content"

export function BlogPostPage() {
  const params = useParams()
  const slug = typeof params?.slug === "string" ? params.slug : ""
  const { lang } = useLanguage()
  const labels = lang === "es" ? blogArticleCopy.es : blogArticleCopy.en
  const post = slug ? getBlogPost(slug, lang) : null

  if (!post) {
    return (
      <article className="pt-28 pb-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-muted-foreground">{lang === "es" ? "Artículo no encontrado." : "Article not found."}</p>
          <Button asChild variant="outline" className="mt-4 border-border">
            <Link href="/blog">{labels.back}</Link>
          </Button>
        </div>
      </article>
    )
  }

  return (
    <article className="pt-28 pb-16">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <p className="text-gold font-medium mb-3">{labels.label}</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">{post.title}</h1>
        <p className="mt-4 text-muted-foreground text-pretty">{post.summary}</p>

        <div className="mt-10 rounded-2xl border border-border bg-card p-6">
          <h2 className="font-semibold text-foreground">{labels.keyPoints}</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {post.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-card p-6">
          <h2 className="font-semibold text-foreground">{labels.conclusion}</h2>
          <p className="mt-3 text-sm text-muted-foreground">{post.conclusion}</p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Button asChild className="bg-gold text-background hover:bg-gold-light">
            <Link href="/#contacto">{labels.talkCta}</Link>
          </Button>
          <Button asChild variant="outline" className="border-border">
            <Link href="/blog">{labels.back}</Link>
          </Button>
        </div>
      </div>
    </article>
  )
}
