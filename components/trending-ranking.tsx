import { Crown, Flame, ChevronUp, ChevronDown, Minus } from "lucide-react"

type Entry = {
  rank: number
  name: string
  school: string
  score: string
  initials: string
  tint: string
  delta: "up" | "down" | "same"
}

const entries: Entry[] = [
  {
    rank: 1,
    name: "Maya Okafor",
    school: "Lincoln High",
    score: "1,204",
    initials: "MO",
    tint: "bg-accent/15 text-accent",
    delta: "up",
  },
  {
    rank: 2,
    name: "Diego Ramirez",
    school: "Westfield Prep",
    score: "1,187",
    initials: "DR",
    tint: "bg-primary/15 text-primary",
    delta: "up",
  },
  {
    rank: 3,
    name: "Priya Sharma",
    school: "Northgate Academy",
    score: "1,150",
    initials: "PS",
    tint: "bg-chart-4/20 text-chart-4",
    delta: "down",
  },
  {
    rank: 4,
    name: "Jordan Lee",
    school: "Eastside High",
    score: "1,098",
    initials: "JL",
    tint: "bg-chart-5/15 text-chart-5",
    delta: "same",
  },
  {
    rank: 5,
    name: "Aisha Bello",
    school: "Riverside High",
    score: "1,042",
    initials: "AB",
    tint: "bg-primary/15 text-primary",
    delta: "up",
  },
]

const rankStyles: Record<number, string> = {
  1: "bg-gold text-gold-foreground",
  2: "bg-secondary text-secondary-foreground",
  3: "bg-accent/15 text-accent",
}

function DeltaIcon({ delta }: { delta: Entry["delta"] }) {
  if (delta === "up")
    return <ChevronUp className="size-4 text-primary" aria-label="Moving up" />
  if (delta === "down")
    return <ChevronDown className="size-4 text-accent" aria-label="Moving down" />
  return <Minus className="size-4 text-muted-foreground" aria-label="No change" />
}

export function TrendingRanking() {
  return (
    <div className="relative w-full max-w-md">
      <div className="rounded-3xl border border-border bg-card p-5 shadow-xl shadow-primary/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-lg bg-accent/15 text-accent">
              <Flame className="size-4" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-medium text-muted-foreground">Trending now</p>
              <p className="font-display text-sm font-bold leading-tight">Fastest Mile · Grade 11</p>
            </div>
          </div>
          <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground">
            Live
          </span>
        </div>

        <ol className="mt-4 flex flex-col gap-1.5">
          {entries.map((entry) => (
            <li
              key={entry.rank}
              className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 transition-colors ${
                entry.rank === 1 ? "bg-gold/12 ring-1 ring-gold/40" : "hover:bg-secondary"
              }`}
            >
              <span
                className={`flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                  rankStyles[entry.rank] ?? "bg-secondary text-muted-foreground"
                }`}
              >
                {entry.rank}
              </span>
              <span
                className={`flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${entry.tint}`}
                aria-hidden="true"
              >
                {entry.initials}
              </span>
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="flex items-center gap-1.5 truncate text-sm font-semibold">
                  {entry.name}
                  {entry.rank === 1 && (
                    <Crown className="size-3.5 text-gold-foreground" aria-label="Top ranked" />
                  )}
                </span>
                <span className="truncate text-xs text-muted-foreground">{entry.school}</span>
              </span>
              <span className="flex items-center gap-1">
                <DeltaIcon delta={entry.delta} />
                <span className="w-12 text-right font-display text-sm font-bold tabular-nums">
                  {entry.score}
                </span>
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
          <p className="text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">2,140</span> students competing
          </p>
          <a href="#" className="text-xs font-semibold text-primary hover:underline">
            View full board
          </a>
        </div>
      </div>

      <div className="absolute -right-3 -top-3 hidden rotate-6 rounded-2xl border border-border bg-card px-3 py-2 shadow-lg sm:block">
        <p className="text-[10px] font-medium text-muted-foreground">You climbed</p>
        <p className="font-display text-sm font-bold text-primary">+14 spots this week</p>
      </div>
    </div>
  )
}
