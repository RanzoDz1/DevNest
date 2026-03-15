import Link from "next/link"
import {
    Sparkles,
    Palette,
    Code2,
    Zap,
    Megaphone,
    BarChart3,
} from "lucide-react"
import { type Category, categoryColorMap } from "@/lib/data/categories"
import { cn } from "@/lib/utils"

const iconMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="h-5 w-5" />,
    Palette: <Palette className="h-5 w-5" />,
    Code2: <Code2 className="h-5 w-5" />,
    Zap: <Zap className="h-5 w-5" />,
    Megaphone: <Megaphone className="h-5 w-5" />,
    BarChart3: <BarChart3 className="h-5 w-5" />,
}

interface CategoryCardProps {
    category: Category
    className?: string
}

export function CategoryCard({ category, className }: CategoryCardProps) {
    const colorClass = categoryColorMap[category.color] ?? categoryColorMap["violet"]

    return (
        <Link
            href={`/tools?category=${category.slug}`}
            className={cn(
                "group flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 card-hover",
                className
            )}
        >
            {/* Icon */}
            <div
                className={cn(
                    "inline-flex h-10 w-10 items-center justify-center rounded-xl transition-transform group-hover:scale-110",
                    colorClass
                )}
            >
                {iconMap[category.icon]}
            </div>

            {/* Info */}
            <div>
                <div className="flex items-center justify-between mb-1">
                    <h3 className="font-display font-semibold text-sm">{category.name}</h3>
                    <span className="text-xs font-medium text-muted-foreground">{category.count}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {category.description}
                </p>
            </div>
        </Link>
    )
}
