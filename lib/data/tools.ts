export type Tool = {
    slug: string
    name: string
    tagline: string
    description: string
    category: string
    tags: string[]
    url: string
    logo: string
    featured: boolean
    new: boolean
    popular: boolean
    submittedAt: string
}

export const tools: Tool[] = [
    // AI & ML
    {
        slug: "vercel-v0",
        name: "v0 by Vercel",
        tagline: "Generate UI with AI",
        description:
            "v0 is a generative user interface system. It produces React component code you can use in your projects, powered by AI. Describe what you want and get production-ready components.",
        category: "ai-ml",
        tags: ["AI", "UI Generation", "React", "Next.js"],
        url: "https://v0.dev",
        logo: "https://api.dicebear.com/8.x/shapes/svg?seed=v0&backgroundColor=7c3aed",
        featured: true,
        new: false,
        popular: true,
        submittedAt: "2024-01-15",
    },
    {
        slug: "cursor",
        name: "Cursor",
        tagline: "AI-powered code editor",
        description:
            "Cursor is a code editor built for pair programming with AI. It features smart auto-complete, natural language code editing, and a built-in AI chat for debugging and refactoring.",
        category: "ai-ml",
        tags: ["AI", "Code Editor", "Productivity"],
        url: "https://cursor.sh",
        logo: "https://api.dicebear.com/8.x/shapes/svg?seed=cursor&backgroundColor=4f46e5",
        featured: true,
        new: false,
        popular: true,
        submittedAt: "2024-01-20",
    },
    {
        slug: "perplexity",
        name: "Perplexity AI",
        tagline: "AI-powered search engine",
        description:
            "Perplexity is an AI-powered search engine that gives direct, cited answers instead of a list of links. It understands complex questions and provides up-to-date research.",
        category: "ai-ml",
        tags: ["AI", "Search", "Research"],
        url: "https://perplexity.ai",
        logo: "https://api.dicebear.com/8.x/shapes/svg?seed=perplexity&backgroundColor=0ea5e9",
        featured: false,
        new: false,
        popular: true,
        submittedAt: "2024-02-01",
    },
    {
        slug: "claude",
        name: "Claude",
        tagline: "AI assistant by Anthropic",
        description:
            "Claude is an AI assistant focused on being helpful, harmless, and honest. It excels at complex reasoning, writing, coding, and analysis tasks with a large context window.",
        category: "ai-ml",
        tags: ["AI", "Chat", "Writing"],
        url: "https://claude.ai",
        logo: "https://api.dicebear.com/8.x/shapes/svg?seed=claude&backgroundColor=d97706",
        featured: false,
        new: false,
        popular: true,
        submittedAt: "2024-02-10",
    },
    {
        slug: "replicate",
        name: "Replicate",
        tagline: "Run AI models in the cloud",
        description:
            "Replicate lets you run machine learning models with a cloud API, without needing to set up servers. Use thousands of open-source models or deploy your own.",
        category: "ai-ml",
        tags: ["AI", "API", "Machine Learning", "Cloud"],
        url: "https://replicate.com",
        logo: "https://api.dicebear.com/8.x/shapes/svg?seed=replicate&backgroundColor=6366f1",
        featured: false,
        new: true,
        popular: false,
        submittedAt: "2024-03-01",
    },
    {
        slug: "elevenlabs",
        name: "ElevenLabs",
        tagline: "AI voice generation",
        description:
            "ElevenLabs creates the most realistic AI voices. Clone voices, generate speech in 29 languages, and build AI-powered audio experiences for your apps.",
        category: "ai-ml",
        tags: ["AI", "Voice", "Audio", "Text-to-Speech"],
        url: "https://elevenlabs.io",
        logo: "https://api.dicebear.com/8.x/shapes/svg?seed=eleven&backgroundColor=059669",
        featured: false,
        new: true,
        popular: false,
        submittedAt: "2024-03-05",
    },

    // Design
    {
        slug: "figma",
        name: "Figma",
        tagline: "Collaborative design tool",
        description:
            "Figma is a browser-based UI design and prototyping tool with real-time collaboration. It's the industry standard for product design teams, with powerful components and auto-layout.",
        category: "design",
        tags: ["Design", "Prototyping", "Collaboration", "UI"],
        url: "https://figma.com",
        logo: "https://api.dicebear.com/8.x/shapes/svg?seed=figma&backgroundColor=f43f5e",
        featured: true,
        new: false,
        popular: true,
        submittedAt: "2024-01-01",
    },
    {
        slug: "shadcn-ui",
        name: "shadcn/ui",
        tagline: "Beautifully designed components",
        description:
            "Beautifully designed components built with Radix UI and Tailwind CSS that you can copy and paste into your apps. Fully accessible, customizable, and open source.",
        category: "design",
        tags: ["Components", "React", "Tailwind", "Open Source"],
        url: "https://ui.shadcn.com",
        logo: "https://api.dicebear.com/8.x/shapes/svg?seed=shadcn&backgroundColor=18181b",
        featured: true,
        new: false,
        popular: true,
        submittedAt: "2024-01-05",
    },
    {
        slug: "lucide-icons",
        name: "Lucide Icons",
        tagline: "Beautiful & consistent icons",
        description:
            "Lucide is a fork of Feather Icons with more icon variety. It features clean, consistent SVG icons available as React, Vue, and other framework components.",
        category: "design",
        tags: ["Icons", "SVG", "React", "Open Source"],
        url: "https://lucide.dev",
        logo: "https://api.dicebear.com/8.x/shapes/svg?seed=lucide&backgroundColor=f59e0b",
        featured: false,
        new: false,
        popular: false,
        submittedAt: "2024-01-12",
    },
    {
        slug: "coolors",
        name: "Coolors",
        tagline: "Color palette generator",
        description:
            "The super fast color palette generator. Create, save, and share perfect palettes in seconds. Explore millions of color combinations for your next project.",
        category: "design",
        tags: ["Colors", "Design", "Palette"],
        url: "https://coolors.co",
        logo: "https://api.dicebear.com/8.x/shapes/svg?seed=coolors&backgroundColor=8b5cf6",
        featured: false,
        new: false,
        popular: true,
        submittedAt: "2024-01-18",
    },
    {
        slug: "framer",
        name: "Framer",
        tagline: "Website builder for designers",
        description:
            "Build and publish sites with Framer's visual component editor. Feature-rich with animations, CMS, and custom code support — no coding required.",
        category: "design",
        tags: ["No-Code", "Website Builder", "Animation"],
        url: "https://framer.com",
        logo: "https://api.dicebear.com/8.x/shapes/svg?seed=framer&backgroundColor=0ea5e9",
        featured: false,
        new: true,
        popular: false,
        submittedAt: "2024-03-08",
    },

    // Dev Tools
    {
        slug: "vercel",
        name: "Vercel",
        tagline: "Deploy frontend apps instantly",
        description:
            "Vercel is a cloud platform for static sites and serverless functions. Deploy projects from Git with zero configuration, automatic HTTPS, and global CDN.",
        category: "dev-tools",
        tags: ["Hosting", "Deployment", "Serverless", "CDN"],
        url: "https://vercel.com",
        logo: "https://api.dicebear.com/8.x/shapes/svg?seed=vercel&backgroundColor=000000",
        featured: true,
        new: false,
        popular: true,
        submittedAt: "2024-01-02",
    },
    {
        slug: "planetscale",
        name: "PlanetScale",
        tagline: "MySQL-compatible serverless DB",
        description:
            "PlanetScale is a MySQL-compatible serverless database platform. It offers horizontal sharding, non-blocking schema changes, and a generous free tier for developers.",
        category: "dev-tools",
        tags: ["Database", "MySQL", "Serverless"],
        url: "https://planetscale.com",
        logo: "https://api.dicebear.com/8.x/shapes/svg?seed=planetscale&backgroundColor=7c3aed",
        featured: false,
        new: false,
        popular: true,
        submittedAt: "2024-01-08",
    },
    {
        slug: "supabase",
        name: "Supabase",
        tagline: "Open source Firebase alternative",
        description:
            "Supabase is an open source Firebase alternative with a Postgres database, authentication, instant APIs, edge functions, realtime subscriptions, and storage.",
        category: "dev-tools",
        tags: ["Database", "Auth", "Backend", "Open Source"],
        url: "https://supabase.com",
        logo: "https://api.dicebear.com/8.x/shapes/svg?seed=supabase&backgroundColor=3ecf8e",
        featured: true,
        new: false,
        popular: true,
        submittedAt: "2024-01-10",
    },
    {
        slug: "railway",
        name: "Railway",
        tagline: "Deploy anything instantly",
        description:
            "Railway is a deployment platform where you can provision infrastructure, develop with that infrastructure locally, and then deploy to the cloud.",
        category: "dev-tools",
        tags: ["Hosting", "Deployment", "Docker"],
        url: "https://railway.app",
        logo: "https://api.dicebear.com/8.x/shapes/svg?seed=railway&backgroundColor=7000ff",
        featured: false,
        new: false,
        popular: false,
        submittedAt: "2024-01-25",
    },
    {
        slug: "prisma",
        name: "Prisma",
        tagline: "Next-generation ORM for Node.js",
        description:
            "Prisma is an open-source next-generation ORM. It consists of a Prisma Client for auto-generated type-safe queries, a Prisma Migrate for schema migrations, and Prisma Studio.",
        category: "dev-tools",
        tags: ["ORM", "Database", "TypeScript", "Open Source"],
        url: "https://prisma.io",
        logo: "https://api.dicebear.com/8.x/shapes/svg?seed=prisma&backgroundColor=0c344b",
        featured: false,
        new: false,
        popular: true,
        submittedAt: "2024-02-03",
    },
    {
        slug: "biome",
        name: "Biome",
        tagline: "Fast formatter & linter",
        description:
            "Biome is a toolchain for web projects that formats and lints JavaScript, TypeScript, JSX, and JSON. It's a Rust-powered, blazing fast replacement for Prettier and ESLint.",
        category: "dev-tools",
        tags: ["Linter", "Formatter", "TypeScript", "Rust"],
        url: "https://biomejs.dev",
        logo: "https://api.dicebear.com/8.x/shapes/svg?seed=biome&backgroundColor=60a5fa",
        featured: false,
        new: true,
        popular: false,
        submittedAt: "2024-03-10",
    },

    // Productivity
    {
        slug: "linear",
        name: "Linear",
        tagline: "Issue tracking for modern teams",
        description:
            "Linear is a purpose-built tool for planning and building products. Loved by high-performance teams for its speed, clean UI, and powerful automations.",
        category: "productivity",
        tags: ["Project Management", "Issues", "Kanban"],
        url: "https://linear.app",
        logo: "https://api.dicebear.com/8.x/shapes/svg?seed=linear&backgroundColor=5e6ad2",
        featured: true,
        new: false,
        popular: true,
        submittedAt: "2024-01-04",
    },
    {
        slug: "notion",
        name: "Notion",
        tagline: "All-in-one workspace",
        description:
            "Notion is an all-in-one workspace for notes, tasks, wikis, and databases. It's a collaborative tool that replaces many point solutions teams use every day.",
        category: "productivity",
        tags: ["Notes", "Wiki", "Database", "Collaboration"],
        url: "https://notion.so",
        logo: "https://api.dicebear.com/8.x/shapes/svg?seed=notion&backgroundColor=191919",
        featured: false,
        new: false,
        popular: true,
        submittedAt: "2024-01-07",
    },
    {
        slug: "arc-browser",
        name: "Arc Browser",
        tagline: "The browser for power users",
        description:
            "Arc is a Chromium-based browser that reimagines how we work on the web. It offers spaces, easels, and a sidebar that transforms how you browse the internet.",
        category: "productivity",
        tags: ["Browser", "Productivity", "Chromium"],
        url: "https://arc.net",
        logo: "https://api.dicebear.com/8.x/shapes/svg?seed=arc&backgroundColor=ff5c00",
        featured: false,
        new: false,
        popular: false,
        submittedAt: "2024-02-15",
    },
    {
        slug: "raycast",
        name: "Raycast",
        tagline: "Blazingly fast productivity tool",
        description:
            "Raycast is a blazingly fast, totally extendable launcher. It lets you complete tasks, calculate, share common links, and much more with a few keystrokes.",
        category: "productivity",
        tags: ["Launcher", "macOS", "Productivity", "Automation"],
        url: "https://raycast.com",
        logo: "https://api.dicebear.com/8.x/shapes/svg?seed=raycast&backgroundColor=ff6363",
        featured: false,
        new: true,
        popular: true,
        submittedAt: "2024-03-02",
    },

    // Marketing
    {
        slug: "plausible",
        name: "Plausible Analytics",
        tagline: "Privacy-first web analytics",
        description:
            "Plausible is a lightweight, open-source, and privacy-friendly Google Analytics alternative. No cookies, GDPR-compliant, and simple to understand.",
        category: "marketing",
        tags: ["Analytics", "Privacy", "Open Source"],
        url: "https://plausible.io",
        logo: "https://api.dicebear.com/8.x/shapes/svg?seed=plausible&backgroundColor=5850ec",
        featured: false,
        new: false,
        popular: false,
        submittedAt: "2024-01-22",
    },
    {
        slug: "beehiiv",
        name: "Beehiiv",
        tagline: "Newsletter platform for growth",
        description:
            "Beehiiv is the newsletter platform built for growth. Create, send, and monetize newsletters with powerful analytics, referral programs, and paid subscriptions.",
        category: "marketing",
        tags: ["Newsletter", "Email", "Monetization"],
        url: "https://beehiiv.com",
        logo: "https://api.dicebear.com/8.x/shapes/svg?seed=beehiiv&backgroundColor=f59e0b",
        featured: false,
        new: true,
        popular: false,
        submittedAt: "2024-03-04",
    },
    {
        slug: "cal-com",
        name: "Cal.com",
        tagline: "Open source scheduling platform",
        description:
            "Cal.com is an open source scheduling infrastructure for absolutely everyone. Self-host or use the cloud version to schedule meetings without spreadsheets.",
        category: "marketing",
        tags: ["Scheduling", "Open Source", "Calendar"],
        url: "https://cal.com",
        logo: "https://api.dicebear.com/8.x/shapes/svg?seed=cal&backgroundColor=111827",
        featured: false,
        new: false,
        popular: true,
        submittedAt: "2024-02-20",
    },

    // Analytics
    {
        slug: "posthog",
        name: "PostHog",
        tagline: "All-in-one product analytics",
        description:
            "PostHog is the only all-in-one platform for product analytics, feature flags, session recording, experiments, and more. Open source and self-hostable.",
        category: "analytics",
        tags: ["Analytics", "Feature Flags", "Open Source"],
        url: "https://posthog.com",
        logo: "https://api.dicebear.com/8.x/shapes/svg?seed=posthog&backgroundColor=f97316",
        featured: false,
        new: false,
        popular: true,
        submittedAt: "2024-01-30",
    },
    {
        slug: "mixpanel",
        name: "Mixpanel",
        tagline: "Product analytics for teams",
        description:
            "Mixpanel helps you analyze how and why your users engage, convert, and retain. Build reports and dashboards to understand what drives growth.",
        category: "analytics",
        tags: ["Analytics", "Funnels", "Retention"],
        url: "https://mixpanel.com",
        logo: "https://api.dicebear.com/8.x/shapes/svg?seed=mixpanel&backgroundColor=7856ff",
        featured: false,
        new: false,
        popular: false,
        submittedAt: "2024-02-05",
    },
    {
        slug: "datadog",
        name: "Datadog",
        tagline: "Cloud monitoring & security",
        description:
            "Datadog is a monitoring and analytics platform for cloud-scale applications. Monitor metrics, traces, and logs in one unified platform.",
        category: "analytics",
        tags: ["Monitoring", "APM", "Logs", "Cloud"],
        url: "https://datadoghq.com",
        logo: "https://api.dicebear.com/8.x/shapes/svg?seed=datadog&backgroundColor=632ca6",
        featured: false,
        new: false,
        popular: false,
        submittedAt: "2024-02-12",
    },
]

export function getFeaturedTools(): Tool[] {
    return tools.filter((t) => t.featured)
}

export function getNewTools(): Tool[] {
    return tools.filter((t) => t.new)
}

export function getPopularTools(): Tool[] {
    return tools.filter((t) => t.popular)
}

export function getToolsByCategory(category: string): Tool[] {
    return tools.filter((t) => t.category === category)
}

export function getToolBySlug(slug: string): Tool | undefined {
    return tools.find((t) => t.slug === slug)
}

export function searchTools(query: string): Tool[] {
    const q = query.toLowerCase()
    return tools.filter(
        (t) =>
            t.name.toLowerCase().includes(q) ||
            t.tagline.toLowerCase().includes(q) ||
            t.description.toLowerCase().includes(q) ||
            t.tags.some((tag) => tag.toLowerCase().includes(q))
    )
}
