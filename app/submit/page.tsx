import { SiteHeader } from "@/components/site-header"
import { SubmissionForm } from "@/components/submission-form"

export default function SubmitPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-2xl px-4 py-12 md:px-6 md:py-16">
        <div className="mb-8">
          <span className="inline-flex items-center rounded-full bg-accent/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent">
            New entry
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
            Claim your spot
          </h1>
          <p className="mt-3 max-w-md text-pretty text-muted-foreground">
            Submit your achievement with proof. Once verified, you will land on the leaderboard and start climbing.
          </p>
        </div>
        <SubmissionForm />
      </section>
    </main>
  )
}
