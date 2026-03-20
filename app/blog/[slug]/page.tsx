import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogPostPage } from "@/components/blog-post-page"
import { blogPosts } from "@/lib/blog-content"

type PageProps = {
  params: Promise<{ slug: string }>
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params
  if (!blogPosts[slug]) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <BlogPostPage />
      <Footer />
    </main>
  )
}
