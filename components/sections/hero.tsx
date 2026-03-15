"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search, Sparkles } from "lucide-react"

export function Hero() {
    const [query, setQuery] = useState("")
    const router = useRouter()

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (query.trim()) {
            router.push(`/tools?q=${encodeURIComponent(query.trim())}`)
        }
    }

    return (
        <section className="relative overflow-hidden hero-gradient">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
                <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-violet-400/10 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-indigo-400/10 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-purple-400/5 blur-3xl" />
            </div>

            <div className="container relative z-10 py-20 md:py-28 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 rounded-full border border-violet-200/80 bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700 dark:border-violet-800/60 dark:bg-violet-950/50 dark:text-violet-300 mb-6 animate-fade-in">
                    <Sparkles className="h-3 w-3" />
                    Curated developer tools directory
                </div>

                {/* Headline */}
                <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4 animate-slide-up">
                    Find the{" "}
                    <span className="gradient-text">perfect tools</span>
                    <br className="hidden md:block" />
                    {" "}to build faster
                </h1>

                {/* Sub-headline */}
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in">
                    Browse{" "}
                    <span className="font-semibold text-foreground">200+</span> hand-picked tools for developers, designers,
                    and indie hackers. All in one place.
                </p>

                {/* Search bar */}
                <form onSubmit={handleSearch} className="relative mx-auto max-w-xl animate-slide-up">
                    <div className="relative flex items-center rounded-2xl border border-violet-200/80 bg-background/80 shadow-lg shadow-violet-500/10 backdrop-blur-sm glow dark:border-violet-800/60">
                        <Search className="absolute left-4 h-5 w-5 text-muted-foreground" />
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search tools, categories, or tags..."
                            className="w-full bg-transparent py-4 pl-12 pr-36 text-sm outline-none placeholder:text-muted-foreground"
                        />
                        <button
                            type="submit"
                            className="absolute right-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:from-violet-700 hover:to-indigo-700 transition-all"
                        >
                            Search
                        </button>
                    </div>
                </form>

                {/* Quick pills */}
                <div className="flex flex-wrap items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
                    <span className="text-xs">Popular:</span>
                    {["AI Tools", "Dev Tools", "Analytics", "Design"].map((q) => (
                        <button
                            key={q}
                            type="button"
                            onClick={() => router.push(`/tools?q=${encodeURIComponent(q)}`)}
                            className="rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium hover:border-violet-400/50 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                        >
                            {q}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}
