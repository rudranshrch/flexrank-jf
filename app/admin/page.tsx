import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { ModerationQueue } from "@/components/moderation-queue"

export const metadata: Metadata = {
  title: "Admin · Moderation Queue — FlexRank",
  description: "Review pending FlexRank submissions and approve or reject achievements for the leaderboard.",
}

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <ModerationQueue />
    </main>
  )
}
