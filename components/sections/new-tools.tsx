import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import { getNewTools } from "@/lib/data/tools"

export function NewTools() {
    const tools = getNewTools()

    return (
        <section className="container py-16">
            {/* Header */}
            <div className="flex items-end justify-between mb-8">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-1">Just added</p>
                    <h2 className="font-display text-2xl md:text-3xl font-bold">New Arrivals</h2>
                </div>
                <Link
                    href="/tools?sort=newest"
                    className="inline-flex items-center gap-1 text-sm font-medium text-violet-600 dark:text-violet-400 hover:underline"
                >
                    See all new <ArrowRight className="h-4 w-4" />
                </Link>
            </div>

            {/* Horizontal scroll list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {tools.map((tool) => (
                    <div
                        key={tool.slug}
                        className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 card-hover"
                    >
                        <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-xl shadow-sm border border-border/50">
                            <Image src={tool.logo} alt={tool.name} fill className="object-cover" unoptimized />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                                <div>
                                    <h3 className="font-semibold text-sm leading-tight">{tool.name}</h3>
                                    <p className="text-xs text-muted-foreground mt-0.5">{tool.tagline}</p>
                                </div>
                                <a
                                    href={tool.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-shrink-0 inline-flex items-center justify-center h-7 w-7 rounded-lg border border-border hover:border-violet-400/40 hover:bg-muted transition-colors"
                                >
                                    <ArrowUpRight className="h-3.5 w-3.5" />
                                </a>
                            </div>
                            <div className="flex gap-1 mt-2">
                                {tool.tags.slice(0, 2).map((tag) => (
                                    <span key={tag} className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
