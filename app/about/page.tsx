import Link from "next/link"
import { Layers, Github, Twitter, Heart, Zap, Globe, Users } from "lucide-react"
import { siteConfig } from "@/config/site"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About",
    description: "Learn about DevNest — the curated developer tools directory.",
}

export default function AboutPage() {
    return (
        <div className="container py-16 max-w-4xl">
            {/* Header */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 mb-6 shadow-lg shadow-violet-500/20 mx-auto">
                    <Layers className="h-8 w-8 text-white" />
                </div>
                <h1 className="font-display text-4xl font-bold mb-4">About DevNest</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    A curated, community-driven directory of the best tools for developers,
                    designers, and indie hackers. No noise. Just great tools.
                </p>
            </div>

            {/* Mission */}
            <div className="rounded-3xl border border-border bg-card p-10 mb-10">
                <h2 className="font-display text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                    The internet is flooded with tools. Finding the right one for your project shouldn&apos;t take hours of research,
                    browsing Reddit threads, or sifting through ad-heavy listicles.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                    DevNest exists to cut through the noise. Every tool we list has been reviewed and curated to ensure
                    it genuinely solves real problems for builders. We value quality over quantity.
                </p>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-5 mb-10">
                {[
                    { icon: Heart, title: "Community Driven", desc: "Tools are submitted and vetted by real builders, not ad-driven lists." },
                    { icon: Zap, title: "Fast & Focused", desc: "No clutter, no infinite scrolling. Find what you need in seconds." },
                    { icon: Globe, title: "Open Source", desc: "DevNest is open source. Anyone can contribute tools, fixes, or feedback." },
                ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="rounded-2xl border border-border bg-card p-6">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 dark:bg-violet-900/30 mb-3">
                            <Icon className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                        </div>
                        <h3 className="font-display font-semibold mb-2">{title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                ))}
            </div>

            {/* Stats */}
            <div className="rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 p-10 text-white mb-10">
                <h2 className="font-display text-2xl font-bold mb-6 text-center">By the Numbers</h2>
                <div className="grid grid-cols-3 gap-6 text-center">
                    {[
                        { val: "24+", label: "Tools Listed" },
                        { val: "6", label: "Categories" },
                        { val: "100%", label: "Free to Use" },
                    ].map(({ val, label }) => (
                        <div key={label}>
                            <div className="text-3xl font-bold mb-1">{val}</div>
                            <div className="text-violet-200 text-sm">{label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact / CTA */}
            <div id="contact" className="text-center">
                <h2 className="font-display text-2xl font-bold mb-3">Get Involved</h2>
                <p className="text-muted-foreground max-w-lg mx-auto mb-6">
                    Have a tool to share? Found a bug? Want to contribute? We&apos;d love to hear from you.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                    <Link
                        href="/submit"
                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-bold text-white hover:from-violet-700 hover:to-indigo-700 transition-all shadow-lg shadow-violet-500/20"
                    >
                        Submit a Tool
                    </Link>
                    <Link
                        href={siteConfig.links.github}
                        target="_blank"
                        className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-muted transition-colors"
                    >
                        <Github className="h-4 w-4" />
                        View on GitHub
                    </Link>
                    <Link
                        href={siteConfig.links.twitter}
                        target="_blank"
                        className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-muted transition-colors"
                    >
                        <Twitter className="h-4 w-4" />
                        Follow us
                    </Link>
                </div>
            </div>
        </div>
    )
}
