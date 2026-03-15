"use client"

import { useState } from "react"
import { CheckCircle2, Upload } from "lucide-react"
import { categories } from "@/lib/data/categories"

export default function SubmitPage() {
    const [submitted, setSubmitted] = useState(false)
    const [form, setForm] = useState({
        name: "",
        url: "",
        tagline: "",
        description: "",
        category: "",
        tags: "",
        email: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
    }

    if (submitted) {
        return (
            <div className="container py-24 flex flex-col items-center text-center max-w-md mx-auto">
                <div className="h-20 w-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h1 className="font-display text-3xl font-bold mb-3">Submission received!</h1>
                <p className="text-muted-foreground mb-8">
                    Thanks for submitting <span className="font-semibold text-foreground">{form.name}</span> to DevNest.
                    We&apos;ll review it shortly and reach out to <span className="font-semibold text-foreground">{form.email}</span>.
                </p>
                <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", url: "", tagline: "", description: "", category: "", tags: "", email: "" }) }}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-bold text-white hover:from-violet-700 hover:to-indigo-700 transition-all"
                >
                    Submit another tool
                </button>
            </div>
        )
    }

    return (
        <div className="container py-14">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 mb-4 shadow-lg shadow-violet-500/20">
                        <Upload className="h-7 w-7 text-white" />
                    </div>
                    <h1 className="font-display text-4xl font-bold mb-3">Submit a Tool</h1>
                    <p className="text-muted-foreground max-w-md mx-auto">
                        Know a great tool that belongs on DevNest? Fill out the form below and we&apos;ll review it within 48 hours.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="rounded-2xl border border-border bg-card p-8 space-y-5">
                        {/* Tool name */}
                        <div>
                            <label className="block text-sm font-semibold mb-1.5" htmlFor="name">Tool Name <span className="text-red-500">*</span></label>
                            <input
                                id="name" name="name" required value={form.name} onChange={handleChange}
                                placeholder="e.g. Vercel, Supabase, Linear..."
                                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-violet-400/70 focus:ring-2 focus:ring-violet-400/20 transition-all"
                            />
                        </div>

                        {/* URL */}
                        <div>
                            <label className="block text-sm font-semibold mb-1.5" htmlFor="url">Website URL <span className="text-red-500">*</span></label>
                            <input
                                id="url" name="url" type="url" required value={form.url} onChange={handleChange}
                                placeholder="https://example.com"
                                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-violet-400/70 focus:ring-2 focus:ring-violet-400/20 transition-all"
                            />
                        </div>

                        {/* Tagline */}
                        <div>
                            <label className="block text-sm font-semibold mb-1.5" htmlFor="tagline">Short Tagline <span className="text-red-500">*</span></label>
                            <input
                                id="tagline" name="tagline" required value={form.tagline} onChange={handleChange}
                                placeholder="One-sentence description (max 80 chars)"
                                maxLength={80}
                                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-violet-400/70 focus:ring-2 focus:ring-violet-400/20 transition-all"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-semibold mb-1.5" htmlFor="description">Full Description <span className="text-red-500">*</span></label>
                            <textarea
                                id="description" name="description" required value={form.description} onChange={handleChange}
                                rows={4}
                                placeholder="Describe what the tool does, who it's for, and what makes it unique..."
                                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-violet-400/70 focus:ring-2 focus:ring-violet-400/20 transition-all"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block text-sm font-semibold mb-1.5" htmlFor="category">Category <span className="text-red-500">*</span></label>
                            <select
                                id="category" name="category" required value={form.category} onChange={handleChange}
                                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-violet-400/70 transition-all"
                            >
                                <option value="">Select a category...</option>
                                {categories.map((cat) => (
                                    <option key={cat.slug} value={cat.slug}>{cat.name}</option>
                                ))}
                            </select>
                        </div>

                        {/* Tags */}
                        <div>
                            <label className="block text-sm font-semibold mb-1.5" htmlFor="tags">Tags <span className="text-muted-foreground font-normal">(comma-separated)</span></label>
                            <input
                                id="tags" name="tags" value={form.tags} onChange={handleChange}
                                placeholder="e.g. Open Source, API, React..."
                                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-violet-400/70 focus:ring-2 focus:ring-violet-400/20 transition-all"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-semibold mb-1.5" htmlFor="email">Your Email <span className="text-red-500">*</span></label>
                            <input
                                id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                                placeholder="your@email.com"
                                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-violet-400/70 focus:ring-2 focus:ring-violet-400/20 transition-all"
                            />
                            <p className="text-xs text-muted-foreground mt-1">We&apos;ll only use this to follow up on your submission.</p>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3.5 text-sm font-bold text-white hover:from-violet-700 hover:to-indigo-700 transition-all shadow-lg shadow-violet-500/20"
                    >
                        <Upload className="h-4 w-4" />
                        Submit for Review
                    </button>
                </form>
            </div>
        </div>
    )
}
