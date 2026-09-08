import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export type RankEntry = {
  id: string
  name: string
  handle: string
  value: number
  verified: boolean
}

const entries: RankEntry[] = [
  { id: "1", name: "Maya Okafor", handle: "@mayao", value: 2847, verified: true },
  { id: "2", name: "Diego Ramirez", handle: "@dramirez", value: 2790, verified: true },
  { id: "3", name: "Aisha Bennett", handle: "@aishab", value: 2681, verified: true },
  { id: "4", name: "Liam Chen", handle: "@liamc", value: 2544, verified: false },
  { id: "5", name: "Sofia Nakamura", handle: "@sofian", value: 2498, verified: true },
  { id: "6", name: "Noah Adeyemi", handle: "@noaha", value: 2376, verified: false },
  { id: "7", name: "Priya Sharma", handle: "@priyas", value: 2312, verified: true },
  { id: "8", name: "Ethan Kowalski", handle: "@ethank", value: 2205, verified: false },
  { id: "9", name: "Zara Hassan", handle: "@zarah", value: 2144, verified: true },
  { id: "10", name: "Lucas Moreau", handle: "@lucasm", value: 2089, verified: false },
  { id: "11", name: "Chloe Park", handle: "@chloep", value: 1998, verified: false },
  { id: "12", name: "Marcus Johnson", handle: "@marcusj", value: 1932, verified: true },
]

const numberFormat = new Intl.NumberFormat("en-US")

function rankStyle(rank: number) {
  if (rank === 1) return "bg-gold text-gold-foreground"
  if (rank === 2) return "bg-secondary-foreground/80 text-secondary"
  if (rank === 3) return "bg-accent text-accent-foreground"
  return "bg-secondary text-secondary-foreground"
}

export function RankingList() {
  return (
    <ul className="flex flex-col gap-2">
      {entries.map((entry, index) => {
        const rank = index + 1
        return (
          <li
            key={entry.id}
            className={cn(
              "flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:border-primary/40",
              rank <= 3 && "shadow-sm",
            )}
          >
            <span
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-display text-lg font-bold tabular-nums",
                rankStyle(rank),
              )}
            >
              {rank}
            </span>

            <div className="flex min-w-0 flex-1 items-center gap-2">
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="truncate font-medium text-foreground">{entry.name}</span>
                  {entry.verified && (
                    <span
                      className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"
                      title="Verified achievement"
                    >
                      <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                      <span className="sr-only">Verified</span>
                    </span>
                  )}
                </div>
                <span className="truncate text-sm text-muted-foreground">{entry.handle}</span>
              </div>
            </div>

            <div className="text-right">
              <div className="font-display text-lg font-bold tabular-nums text-foreground">
                {numberFormat.format(entry.value)}
              </div>
              <div className="text-xs uppercase tracking-wide text-muted-foreground">points</div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
