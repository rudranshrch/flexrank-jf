"use client"

import { useMemo, useState } from "react"

type SubmissionStatus = "pending" | "approved" | "rejected"

type Submission = {
  id: string
  name: string
  handle: string
  category: string
  value: number
  unit: string
  proofName: string
  proofType: "image" | "video" | "pdf"
  submittedAt: string
  status: SubmissionStatus
}

const INITIAL_SUBMISSIONS: Submission[] = [
  {
    id: "sub_01",
    name: "Maya Chen",
    handle: "@mayaruns",
    category: "Fastest Mile",
    value: 4.52,
    unit: "min",
    proofName: "track-timer-screenshot.jpg",
    proofType: "image",
    submittedAt: "2 hours ago",
    status: "pending",
  },
  {
    id: "sub_02",
    name: "Diego Alvarez",
    handle: "@diegocodes",
    category: "Hackathon Wins",
    value: 7,
    unit: "wins",
    proofName: "devpost-profile.pdf",
    proofType: "pdf",
    submittedAt: "5 hours ago",
    status: "pending",
  },
  {
    id: "sub_03",
    name: "Priya Nair",
    handle: "@priyadunks",
    category: "Free Throws Streak",
    value: 128,
    unit: "in a row",
    proofName: "gym-clip.mp4",
    proofType: "video",
    submittedAt: "8 hours ago",
    status: "pending",
  },
  {
    id: "sub_04",
    name: "Sam Whitfield",
    handle: "@samspeaks",
    category: "Debate Trophies",
    value: 12,
    unit: "trophies",
    proofName: "award-wall.jpg",
    proofType: "image",
    submittedAt: "1 day ago",
    status: "pending",
  },
  {
    id: "sub_05",
    name: "Aisha Bello",
    handle: "@aishachem",
    category: "Science Fair Medals",
    value: 9,
    unit: "medals",
    proofName: "fair-results.pdf",
    proofType: "pdf",
    submittedAt: "1 day ago",
    status: "pending",
  },
]

const PROOF_LABELS: Record<Submission["proofType"], string> = {
  image: "Image",
  video: "Video",
  pdf: "PDF",
}

function ProofIcon({ type }: { type: Submission["proofType"] }) {
  if (type === "video") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
        <path d="m10 8 6 4-6 4V8Z" fill="currentColor" />
        <rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  }
  if (type === "pdf") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
        <path
          d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M14 3v5h5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="8.5" cy="9.5" r="1.5" fill="currentColor" />
      <path d="m5 17 4-4 3 3 3-3 4 4" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  )
}

function StatCard({ label, value, tone }: { label: string; value: number; tone: "pending" | "approved" | "rejected" }) {
  const toneClass =
    tone === "approved"
      ? "text-primary"
      : tone === "rejected"
        ? "text-accent"
        : "text-foreground"
  return (
    <div className="rounded-xl border border-border bg-card px-5 py-4">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className={`mt-1 font-display text-3xl font-bold tabular-nums ${toneClass}`}>{value}</p>
    </div>
  )
}

export function ModerationQueue() {
  const [submissions, setSubmissions] = useState<Submission[]>(INITIAL_SUBMISSIONS)

  const counts = useMemo(() => {
    return submissions.reduce(
      (acc, s) => {
        acc[s.status] += 1
        return acc
      },
      { pending: 0, approved: 0, rejected: 0 } as Record<SubmissionStatus, number>,
    )
  }, [submissions])

  const pending = submissions.filter((s) => s.status === "pending")

  function updateStatus(id: string, status: SubmissionStatus) {
    setSubmissions((prev) => prev.map((s) => (s.id === id ? { ...s, status } : s)))
  }

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 md:py-14">
      <div className="flex flex-col gap-2">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
          <span className="size-1.5 rounded-full bg-accent" />
          Admin · Moderation
        </span>
        <h1 className="font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
          Review the queue
        </h1>
        <p className="max-w-xl text-pretty text-muted-foreground leading-relaxed">
          Approve verified achievements to publish them to the leaderboard, or reject submissions that
          fail proof review.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-3">
        <StatCard label="Pending" value={counts.pending} tone="pending" />
        <StatCard label="Approved" value={counts.approved} tone="approved" />
        <StatCard label="Rejected" value={counts.rejected} tone="rejected" />
      </div>

      <div className="mt-8">
        {pending.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card px-6 py-16 text-center">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg viewBox="0 0 24 24" fill="none" className="size-6" aria-hidden="true">
                <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="mt-4 font-display text-xl font-bold">Queue is clear</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Every submission has been reviewed. Nice work.
            </p>
          </div>
        ) : (
          <ul className="flex flex-col gap-3">
            {pending.map((submission) => (
              <li
                key={submission.id}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex min-w-0 items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-base font-bold text-primary">
                    {submission.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <p className="font-display text-lg font-bold leading-tight">{submission.name}</p>
                      <span className="text-sm text-muted-foreground">{submission.handle}</span>
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-sm">
                      <span className="rounded-md bg-secondary px-2 py-0.5 font-medium text-secondary-foreground">
                        {submission.category}
                      </span>
                      <span className="font-semibold tabular-nums">
                        {submission.value} <span className="text-muted-foreground">{submission.unit}</span>
                      </span>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-muted-foreground">{submission.submittedAt}</span>
                    </div>
                    <button
                      type="button"
                      className="mt-2 inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      <ProofIcon type={submission.proofType} />
                      {PROOF_LABELS[submission.proofType]} · {submission.proofName}
                    </button>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-2 md:flex-col md:items-stretch lg:flex-row">
                  <button
                    type="button"
                    onClick={() => updateStatus(submission.id, "approved")}
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
                      <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Approve
                  </button>
                  <button
                    type="button"
                    onClick={() => updateStatus(submission.id, "rejected")}
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
                      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    Reject
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
