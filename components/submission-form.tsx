"use client"

import type React from "react"

import { useRef, useState } from "react"
import { UploadCloud, FileCheck2, X, CheckCircle2, Trophy } from "lucide-react"

const categories = [
  "Most Push-Ups",
  "Fastest Mile",
  "Mental Math Sprint",
  "Typing Speed",
  "Books Read",
  "Chess Rating",
  "Practice Hours",
  "Design Battles",
]

const MAX_FILE_MB = 10
const ACCEPTED = "image/*,video/*,.pdf"

type Errors = {
  name?: string
  category?: string
  value?: string
  proof?: string
}

export function SubmissionForm() {
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [value, setValue] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [dragging, setDragging] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  function validateFile(candidate: File): string | undefined {
    if (candidate.size > MAX_FILE_MB * 1024 * 1024) {
      return `File must be under ${MAX_FILE_MB}MB`
    }
    return undefined
  }

  function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return
    const candidate = files[0]
    const fileError = validateFile(candidate)
    if (fileError) {
      setErrors((prev) => ({ ...prev, proof: fileError }))
      return
    }
    setFile(candidate)
    setErrors((prev) => ({ ...prev, proof: undefined }))
  }

  function validate(): boolean {
    const next: Errors = {}
    if (!name.trim()) next.name = "Enter your name"
    if (!category) next.category = "Pick a category"
    if (value.trim() === "" || Number.isNaN(Number(value))) {
      next.value = "Enter a numeric value"
    } else if (Number(value) < 0) {
      next.value = "Value must be positive"
    }
    if (!file) next.proof = "Upload proof of your achievement"
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    // Submission payload is ready for a server action / API route.
    setSubmitted(true)
  }

  function resetForm() {
    setName("")
    setCategory("")
    setValue("")
    setFile(null)
    setErrors({})
    setSubmitted(false)
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-border bg-card p-8 text-center md:p-12">
        <span className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <CheckCircle2 className="size-8" aria-hidden="true" />
        </span>
        <h2 className="mt-6 font-display text-2xl font-bold tracking-tight">Submission received</h2>
        <p className="mx-auto mt-2 max-w-sm text-pretty text-muted-foreground">
          Nice flex, {name.split(" ")[0] || "champ"}. Our team will verify your {category.toLowerCase()} entry and add
          you to the ranking soon.
        </p>
        <button
          type="button"
          onClick={resetForm}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          <Trophy className="size-4" aria-hidden="true" />
          Submit another
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-3xl border border-border bg-card p-6 md:p-8">
      <div className="grid gap-6">
        <Field label="Your name" htmlFor="name" error={errors.name}>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Maya Chen"
            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
            aria-invalid={!!errors.name}
          />
        </Field>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Category" htmlFor="category" error={errors.category}>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full appearance-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/30 aria-[invalid=true]:border-destructive data-[placeholder=true]:text-muted-foreground"
              data-placeholder={category === ""}
              aria-invalid={!!errors.category}
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Value" htmlFor="value" error={errors.value} hint="Your numeric score">
            <input
              id="value"
              type="number"
              inputMode="decimal"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="e.g. 142"
              className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
              aria-invalid={!!errors.value}
            />
          </Field>
        </div>

        <Field label="Proof" htmlFor="proof" error={errors.proof} hint="Photo, video, or PDF up to 10MB">
          <div
            onDragOver={(e) => {
              e.preventDefault()
              setDragging(true)
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => {
              e.preventDefault()
              setDragging(false)
              handleFiles(e.dataTransfer.files)
            }}
            className={`relative flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-6 py-10 text-center transition-colors ${
              dragging ? "border-primary bg-primary/5" : "border-input bg-background"
            }`}
          >
            {file ? (
              <div className="flex w-full items-center justify-between gap-3 rounded-lg bg-secondary px-4 py-3 text-left">
                <span className="flex min-w-0 items-center gap-3">
                  <FileCheck2 className="size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium">{file.name}</span>
                    <span className="block text-xs text-muted-foreground">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </span>
                  </span>
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setFile(null)
                    if (inputRef.current) inputRef.current.value = ""
                  }}
                  className="flex size-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
                  aria-label="Remove file"
                >
                  <X className="size-4" aria-hidden="true" />
                </button>
              </div>
            ) : (
              <>
                <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary">
                  <UploadCloud className="size-6" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium">
                  Drag &amp; drop or{" "}
                  <button
                    type="button"
                    onClick={() => inputRef.current?.click()}
                    className="text-primary underline underline-offset-2"
                  >
                    browse
                  </button>
                </span>
                <span className="text-xs text-muted-foreground">Screenshots, clips, or certificates work great</span>
              </>
            )}
            <input
              ref={inputRef}
              id="proof"
              type="file"
              accept={ACCEPTED}
              onChange={(e) => handleFiles(e.target.files)}
              className="sr-only"
            />
          </div>
        </Field>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          <Trophy className="size-4" aria-hidden="true" />
          Submit for ranking
        </button>
      </div>
    </form>
  )
}

function Field({
  label,
  htmlFor,
  hint,
  error,
  children,
}: {
  label: string
  htmlFor: string
  hint?: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="grid gap-2">
      <div className="flex items-baseline justify-between gap-2">
        <label htmlFor={htmlFor} className="text-sm font-semibold">
          {label}
        </label>
        {hint && !error && <span className="text-xs text-muted-foreground">{hint}</span>}
      </div>
      {children}
      {error && <span className="text-xs font-medium text-destructive">{error}</span>}
    </div>
  )
}
