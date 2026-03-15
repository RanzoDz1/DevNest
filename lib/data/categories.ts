export type Category = {
    slug: string
    name: string
    description: string
    icon: string
    color: string
    count: number
}

export const categories: Category[] = [
    {
        slug: "ai-ml",
        name: "AI & ML",
        description: "Artificial intelligence and machine learning tools",
        icon: "Sparkles",
        color: "violet",
        count: 8,
    },
    {
        slug: "design",
        name: "Design",
        description: "Design tools and resources for creatives",
        icon: "Palette",
        color: "pink",
        count: 6,
    },
    {
        slug: "dev-tools",
        name: "Dev Tools",
        description: "Tools that make development faster and easier",
        icon: "Code2",
        color: "blue",
        count: 7,
    },
    {
        slug: "productivity",
        name: "Productivity",
        description: "Stay organized and get more done",
        icon: "Zap",
        color: "amber",
        count: 5,
    },
    {
        slug: "marketing",
        name: "Marketing",
        description: "Grow your audience and marketing stack",
        icon: "Megaphone",
        color: "green",
        count: 4,
    },
    {
        slug: "analytics",
        name: "Analytics",
        description: "Track, measure, and understand your data",
        icon: "BarChart3",
        color: "cyan",
        count: 4,
    },
]

export const categoryColorMap: Record<string, string> = {
    violet: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
    pink: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
    blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    amber: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
    green: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    cyan: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",
}
