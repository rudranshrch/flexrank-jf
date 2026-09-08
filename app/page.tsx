import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Categories } from "@/components/categories"
import { JoinCta, SiteFooter } from "@/components/join-cta"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Categories />
        <JoinCta />
      </main>
      <SiteFooter />
    </div>
  )
}
