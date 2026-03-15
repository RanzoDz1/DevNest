import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight, Tag } from "lucide-react"
import { getToolBySlug, tools } from "@/lib/data/tools"
import { categories } from "@/lib/data/categories"
import { ToolCard } from "@/components/tool-card"
import type { Metadata } from "next"

interface Props {
    params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const tool = getToolBySlug(params.slug)
    if (!tool) return {}
    return { title: tool.name, description: tool.tagline }
}

export function generateStaticParams() {
    return tools.map((t) => ({ slug: t.slug }))
}

export default function ToolDetailPage({ params }: Props) {
    const tool = getToolBySlug(params.slug)
    if (!tool) notFound()

    const category = categories.find((c) => c.slug === tool.category)
    const related = tools
        .filter((t) => t.category === tool.category && t.slug !== tool.slug)
        .slice(0, 3)

    return (
        <div className="container py-10">
            {/* Breadcrumb */}
            <Link
                href="/tools"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-violet-600 dark:hover:text-violet-400 transition-colors mb-8"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to tools
            </Link>

            <div className="grid lg:grid-cols-3 gap-10">
                {/* Main content */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Header */}
                    <div className="flex items-start gap-5">
                        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-2xl shadow border border-border/50">
                            <Image src={tool.logo} alt={tool.name} fill className="object-cover" unoptimized />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                                <h1 className="font-display text-2xl font-bold">{tool.name}</h1>
                                {tool.new && (
                                    <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                                        NEW
                                    </span>
                                )}
                                {tool.featured && (
                                    <span className="inline-flex items-center rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-semibold text-violet-700 dark:bg-violet-900/30 dark:text-violet-400">
                                        ★ Featured
                                    </span>
                                )}
                            </div>
                            <p className="text-muted-foreground">{tool.tagline}</p>
                            {category && (
                                <Link
                                    href={`/tools?category=${category.slug}`}
                                    className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-violet-600 dark:text-violet-400 hover:underline"
                                >
                                    <Tag className="h-3 w-3" />
                                    {category.name}
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Description */}
                    <div className="rounded-2xl border border-border bg-card p-6">
                        <h2 className="font-display text-lg font-semibold mb-3">About</h2>
                        <p className="text-muted-foreground leading-relaxed">{tool.description}</p>
                    </div>

                    {/* Tags */}
                    <div>
                        <h2 className="font-display text-lg font-semibold mb-3">Tags</h2>
                        <div className="flex flex-wrap gap-2">
                            {tool.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="inline-flex items-center rounded-xl border border-border/60 bg-muted/60 px-3 py-1.5 text-sm font-medium text-muted-foreground"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Related tools */}
                    {related.length > 0 && (
                        <div>
                            <h2 className="font-display text-xl font-bold mb-4">Related Tools</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {related.map((t) => (
                                    <ToolCard key={t.slug} tool={t} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Sidebar card */}
                <div className="lg:col-span-1">
                    <div className="sticky top-20 rounded-2xl gradient-border bg-card p-6 space-y-5">
                        <a
                            href={tool.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3 text-sm font-bold text-white hover:from-violet-700 hover:to-indigo-700 transition-all shadow-lg shadow-violet-500/20"
                        >
                            Visit {tool.name} <ArrowUpRight className="h-4 w-4" />
                        </a>

                        <div className="space-y-3 pt-2">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Category</span>
                                <span className="font-medium">{category?.name ?? "—"}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Status</span>
                                <span className="font-medium text-emerald-600">Active</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Popular</span>
                                <span className="font-medium">{tool.popular ? "Yes" : "No"}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Added</span>
                                <span className="font-medium">{new Date(tool.submittedAt).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</span>
                            </div>
                        </div>

                        <div className="pt-2 border-t border-border">
                            <Link
                                href="/submit"
                                className="block w-full text-center text-xs text-muted-foreground hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                            >
                                Got a better tool? Submit it →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
