import { ArrowRight } from "lucide-react"

export function JoinCta() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground md:px-12 md:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 70% 70%, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-balance md:text-5xl">
            Someone is #1 right now. Why not you?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-primary-foreground/80 text-pretty">
            Create your profile, join your first ranking, and start climbing today. It is free for
            every student.
          </p>
          <a
            href="#"
            className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-bold text-accent-foreground shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5"
          >
            Join a Ranking
            <ArrowRight
              className="size-5 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground md:flex-row md:px-6">
        <p className="font-display font-bold text-foreground">FlexRank</p>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2" aria-label="Footer">
          {["Rankings", "Categories", "Schools", "Privacy", "Terms"].map((item) => (
            <a key={item} href="#" className="transition-colors hover:text-foreground">
              {item}
            </a>
          ))}
        </nav>
        <p>© {new Date().getFullYear()} FlexRank</p>
      </div>
    </footer>
  )
}
