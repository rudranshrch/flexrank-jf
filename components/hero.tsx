import { ArrowRight, Sparkles } from "lucide-react"
import { TrendingRanking } from "./trending-ranking"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted-foreground">
            <Sparkles className="size-3.5 text-accent" aria-hidden="true" />
            Ranked by 40,000+ students
          </span>

          <h1 className="mt-5 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-balance sm:text-6xl md:text-7xl">
            What Are You{" "}
            <span className="relative whitespace-nowrap text-accent">
              #1 At?
              <svg
                className="absolute -bottom-2 left-0 w-full text-accent/40"
                viewBox="0 0 200 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 9c40-6 120-8 196-4"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            FlexRank turns every skill into a leaderboard. Pick a category, log your score, and climb
            the ranks against students at your school and beyond.
          </p>

          <div id="join" className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-bold text-accent-foreground shadow-lg shadow-accent/25 transition-transform hover:-translate-y-0.5"
            >
              Join a Ranking
              <ArrowRight
                className="size-5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Browse categories
            </a>
          </div>

          <dl className="mt-10 flex items-center gap-8">
            <div>
              <dt className="text-xs font-medium text-muted-foreground">Categories</dt>
              <dd className="font-display text-2xl font-bold">1,200+</dd>
            </div>
            <div className="h-8 w-px bg-border" aria-hidden="true" />
            <div>
              <dt className="text-xs font-medium text-muted-foreground">Schools</dt>
              <dd className="font-display text-2xl font-bold">860</dd>
            </div>
            <div className="h-8 w-px bg-border" aria-hidden="true" />
            <div>
              <dt className="text-xs font-medium text-muted-foreground">Ranked today</dt>
              <dd className="font-display text-2xl font-bold text-primary">9.4k</dd>
            </div>
          </dl>
        </div>

        <div className="flex justify-center lg:justify-end">
          <TrendingRanking />
        </div>
      </div>
    </section>
  )
}
