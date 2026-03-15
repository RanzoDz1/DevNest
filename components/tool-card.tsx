import Link from "next/link"
import Image from "next/image"
import { ExternalLink, ArrowUpRight } from "lucide-react"
import { type Tool } from "@/lib/data/tools"
import { cn } from "@/lib/utils"

interface ToolCardProps {
    tool: Tool
    className?: string
}

export function ToolCard({ tool, className }: ToolCardProps) {
    return (
        <div
            className={cn(
                "group relative rounded-2xl gradient-border bg-card card-hover overflow-hidden p-5",
                className
            )}
        >
            {/* Badges */}
            <div className="absolute top-3 right-3 flex gap-1.5">
                {tool.new && (
                    <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                        NEW
                    </span>
                )}
                {tool.featured && (
                    <span className="inline-flex items-center rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-semibold text-violet-700 dark:bg-violet-900/30 dark:text-violet-400">
                        ★ Featured
                    </span>
                )}
            </div>

            {/* Logo + Name */}
            <div className="flex items-start gap-3 mb-3">
                <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-xl shadow-sm border border-border/50">
                    <Image
                        src={tool.logo}
                        alt={tool.name}
                        fill
                        className="object-cover"
                        unoptimized
                    />
                </div>
                <div className="min-w-0">
                    <h3 className="font-display font-semibold text-base leading-tight truncate">{tool.name}</h3>
                    <p className="text-xs text-muted-foreground truncate">{tool.tagline}</p>
                </div>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
                {tool.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
                {tool.tags.slice(0, 3).map((tag) => (
                    <span
                        key={tag}
                        className="inline-flex items-center rounded-full border border-border/60 bg-muted/60 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
                <Link
                    href={`/tools/${tool.slug}`}
                    className="flex-1 inline-flex items-center justify-center gap-1 rounded-xl border border-border bg-muted/50 px-3 py-2 text-xs font-semibold hover:bg-muted hover:border-violet-400/40 transition-colors"
                >
                    Details
                </Link>
                <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-3 py-2 text-xs font-semibold text-white hover:from-violet-700 hover:to-indigo-700 transition-colors"
                >
                    Visit <ArrowUpRight className="h-3 w-3" />
                </a>
            </div>
        </div>
    )
}
