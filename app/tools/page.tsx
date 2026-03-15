"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Search, SlidersHorizontal, Sparkles, Palette, Code2, Zap, Megaphone, BarChart3 } from "lucide-react"
import { tools as allTools, type Tool } from "@/lib/data/tools"
import { categories } from "@/lib/data/categories"
import { ToolCard } from "@/components/tool-card"
import { cn } from "@/lib/utils"

const iconMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="h-4 w-4" />,
    Palette: <Palette className="h-4 w-4" />,
    Code2: <Code2 className="h-4 w-4" />,
    Zap: <Zap className="h-4 w-4" />,
    Megaphone: <Megaphone className="h-4 w-4" />,
    BarChart3: <BarChart3 className="h-4 w-4" />,
}

export default function ToolsPage() {
    const searchParams = useSearchParams()
    const [query, setQuery] = useState(searchParams.get("q") ?? "")
    const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") ?? "all")
    const [sort, setSort] = useState(searchParams.get("sort") ?? "default")
    const [filtered, setFiltered] = useState<Tool[]>(allTools)

    useEffect(() => {
        let result = [...allTools]

        // Filter by query
        if (query.trim()) {
            const q = query.toLowerCase()
            result = result.filter(
                (t) =>
                    t.name.toLowerCase().includes(q) ||
                    t.tagline.toLowerCase().includes(q) ||
                    t.tags.some((tag) => tag.toLowerCase().includes(q))
            )
        }

        // Filter by category
        if (selectedCategory !== "all") {
            result = result.filter((t) => t.category === selectedCategory)
        }

        // Sort
        if (sort === "newest") {
            result = result.sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime())
        } else if (sort === "az") {
            result = result.sort((a, b) => a.name.localeCompare(b.name))
        } else if (sort === "popular") {
            result = result.filter((t) => t.popular).concat(result.filter((t) => !t.popular))
        } else if (sort === "featured") {
            result = result.filter((t) => t.featured).concat(result.filter((t) => !t.featured))
        }

        setFiltered(result)
    }, [query, selectedCategory, sort])

    return (
        <div className="container py-10">
            {/* Page header */}
            <div className="mb-8">
                <h1 className="font-display text-3xl font-bold mb-2">Browse Tools</h1>
                <p className="text-muted-foreground">
                    Showing <span className="font-semibold text-foreground">{filtered.length}</span> tools
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar */}
                <aside className="lg:w-56 flex-shrink-0">
                    <div className="sticky top-20 space-y-6">
                        {/* Search */}
                        <div>
                            <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 block">Search</label>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <input
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Filter tools..."
                                    className="w-full rounded-xl border border-border bg-background py-2.5 pl-9 pr-3 text-sm outline-none focus:border-violet-400/70 focus:ring-2 focus:ring-violet-400/20 transition-all"
                                />
                            </div>
                        </div>

                        {/* Categories */}
                        <div>
                            <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 block">
                                <SlidersHorizontal className="h-3 w-3 inline mr-1" />
                                Category
                            </label>
                            <div className="space-y-1">
                                <button
                                    onClick={() => setSelectedCategory("all")}
                                    className={cn(
                                        "w-full flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-left transition-colors",
                                        selectedCategory === "all"
                                            ? "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300"
                                            : "hover:bg-muted text-muted-foreground"
                                    )}
                                >
                                    All Tools
                                    <span className="ml-auto text-xs text-muted-foreground">{allTools.length}</span>
                                </button>
                                {categories.map((cat) => (
                                    <button
                                        key={cat.slug}
                                        onClick={() => setSelectedCategory(cat.slug)}
                                        className={cn(
                                            "w-full flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-left transition-colors",
                                            selectedCategory === cat.slug
                                                ? "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300"
                                                : "hover:bg-muted text-muted-foreground"
                                        )}
                                    >
                                        <span>{iconMap[cat.icon]}</span>
                                        {cat.name}
                                        <span className="ml-auto text-xs text-muted-foreground">{cat.count}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Sort */}
                        <div>
                            <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 block">Sort by</label>
                            <select
                                value={sort}
                                onChange={(e) => setSort(e.target.value)}
                                className="w-full rounded-xl border border-border bg-background py-2.5 px-3 text-sm outline-none focus:border-violet-400/70 transition-all"
                            >
                                <option value="default">Default</option>
                                <option value="newest">Newest</option>
                                <option value="popular">Most Popular</option>
                                <option value="featured">Featured First</option>
                                <option value="az">A → Z</option>
                            </select>
                        </div>
                    </div>
                </aside>

                {/* Grid */}
                <div className="flex-1">
                    {filtered.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                            {filtered.map((tool) => (
                                <ToolCard key={tool.slug} tool={tool} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-24 text-center">
                            <div className="h-16 w-16 rounded-2xl bg-muted flex items-center justify-center mb-4">
                                <Search className="h-7 w-7 text-muted-foreground" />
                            </div>
                            <h3 className="font-display text-lg font-semibold mb-1">No tools found</h3>
                            <p className="text-muted-foreground text-sm max-w-xs">
                                Try adjusting your search or removing the category filter.
                            </p>
                            <button
                                onClick={() => { setQuery(""); setSelectedCategory("all"); setSort("default") }}
                                className="mt-4 text-sm text-violet-600 dark:text-violet-400 font-medium hover:underline"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
