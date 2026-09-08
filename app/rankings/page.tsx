import { SiteHeader } from "@/components/site-header"
import { RankingList } from "@/components/ranking-list"

export default function RankingsPage() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl px-4 py-10 md:py-14">
        <header className="mb-8">
          <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-accent">
            Trending now
          </p>
          <h1 className="text-balance font-display text-3xl font-bold text-foreground md:text-4xl">
            Fastest Mile · Grade 11
          </h1>
          <p className="mt-2 max-w-prose text-pretty text-muted-foreground">
            Live standings ranked by points. Verified badges mean the achievement was confirmed by a coach or
            official.
          </p>
        </header>

        <RankingList />
      </main>
    </div>
  )
}
