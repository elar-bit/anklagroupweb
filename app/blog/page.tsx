import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogListPage } from "@/components/blog-list-page"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <BlogListPage />
      <Footer />
    </main>
  )
}
