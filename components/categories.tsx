import { Dumbbell, BookOpen, Gamepad2, Music, Code, Palette, Timer, Calculator } from "lucide-react"

const categories = [
  { icon: Dumbbell, label: "Most Push-Ups", tag: "Fitness", hot: true },
  { icon: Timer, label: "Fastest Mile", tag: "Track", hot: true },
  { icon: Calculator, label: "Mental Math Sprint", tag: "Academics", hot: false },
  { icon: Code, label: "Typing Speed", tag: "Tech", hot: true },
  { icon: BookOpen, label: "Books Read", tag: "Reading", hot: false },
  { icon: Gamepad2, label: "Chess Rating", tag: "Games", hot: false },
  { icon: Music, label: "Practice Hours", tag: "Music", hot: false },
  { icon: Palette, label: "Design Battles", tag: "Art", hot: true },
]

export function Categories() {
  return (
    <section className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Every skill is a scoreboard
            </h2>
            <p className="mt-3 max-w-lg text-muted-foreground text-pretty">
              From sprints to spreadsheets, there is a ranking for whatever you are best at. Pick one
              and see where you land.
            </p>
          </div>
          <a href="#" className="shrink-0 text-sm font-semibold text-primary hover:underline">
            See all 1,200+ categories
          </a>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map(({ icon: Icon, label, tag, hot }) => (
            <li key={label}>
              <a
                href="#"
                className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="mt-auto flex items-center gap-2">
                  <span className="font-display font-bold leading-tight">{label}</span>
                  {hot && (
                    <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent">
                      Hot
                    </span>
                  )}
                </span>
                <span className="text-xs font-medium text-muted-foreground">{tag}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
