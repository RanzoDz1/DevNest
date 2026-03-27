import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getFeaturedTools } from "@/lib/data/tools"
import { ToolCard } from "@/components/tool-card"

export function FeaturedTools() {
    const tools = getFeaturedTools()

    return (
        <section className="container py-16">
            {/* Header */}
            <div className="flex items-end justify-between mb-8">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-1">Hand-picked</p>
                    <h2 className="font-display text-2xl md:text-3xl font-bold">Featured Tools</h2>
                </div>
                <Link
                    href="/tools?filter=featured"
                    className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-violet-600 dark:text-violet-400 hover:underline"
                >
                    View all <ArrowRight className="h-4 w-4" />
                </Link>
            </div>

            {/* Marquee Loop */}
            <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent_0,black_64px,black_calc(100%-64px),transparent_100%)] py-4">
                <div className="flex animate-marquee gap-4 pr-4 w-max hover:[animation-play-state:paused]">
                    {[...tools, ...tools, ...tools, ...tools].map((tool, index) => (
                        <div key={`${tool.slug}-${index}`} className="w-[320px] md:w-[380px] shrink-0">
                            <ToolCard tool={tool} />
                        </div>
                    ))}
                </div>
            </div>

            <Link
                href="/tools?filter=featured"
                className="md:hidden mt-6 inline-flex items-center gap-1 text-sm font-medium text-violet-600 dark:text-violet-400"
            >
                View all featured <ArrowRight className="h-4 w-4" />
            </Link>
        </section>
    )
}
