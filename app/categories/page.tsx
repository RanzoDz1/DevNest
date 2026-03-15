import { categories } from "@/lib/data/categories"
import { CategoryCard } from "@/components/category-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Categories",
    description: "Browse tools by category on DevNest.",
}

export default function CategoriesPage() {
    return (
        <div className="container py-16">
            {/* Header */}
            <div className="text-center mb-12">
                <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-2">Organized for you</p>
                <h1 className="font-display text-4xl font-bold mb-3">Browse Categories</h1>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    Find the right tools by exploring our curated categories. From AI to analytics, we&apos;ve got you covered.
                </p>
            </div>

            {/* Category grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {categories.map((cat) => (
                    <CategoryCard key={cat.slug} category={cat} className="p-6" />
                ))}
            </div>

            {/* Stats strip */}
            <div className="mt-16 rounded-2xl border border-border bg-muted/30 p-8">
                <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                        <div className="font-display text-3xl font-bold gradient-text">24+</div>
                        <div className="text-sm text-muted-foreground mt-1">Tools listed</div>
                    </div>
                    <div>
                        <div className="font-display text-3xl font-bold gradient-text">6</div>
                        <div className="text-sm text-muted-foreground mt-1">Categories</div>
                    </div>
                    <div>
                        <div className="font-display text-3xl font-bold gradient-text">Free</div>
                        <div className="text-sm text-muted-foreground mt-1">To submit</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
