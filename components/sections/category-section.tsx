import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { categories } from "@/lib/data/categories"
import { CategoryCard } from "@/components/category-card"

export function CategorySection() {
    return (
        <section className="border-y border-border bg-muted/20">
            <div className="container py-16">
                {/* Header */}
                <div className="flex items-end justify-between mb-8">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-1">Browse by</p>
                        <h2 className="font-display text-2xl md:text-3xl font-bold">Categories</h2>
                    </div>
                    <Link
                        href="/categories"
                        className="inline-flex items-center gap-1 text-sm font-medium text-violet-600 dark:text-violet-400 hover:underline"
                    >
                        All categories <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    {categories.map((cat) => (
                        <CategoryCard key={cat.slug} category={cat} />
                    ))}
                </div>
            </div>
        </section>
    )
}
