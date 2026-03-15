import Link from "next/link"
import { Layers, Twitter, Github } from "lucide-react"
import { siteConfig } from "@/config/site"

export function Footer() {
    return (
        <footer className="border-t border-border bg-muted/30">
            <div className="container py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600">
                                <Layers className="h-3.5 w-3.5 text-white" />
                            </div>
                            <span className="font-display text-lg font-bold gradient-text">{siteConfig.name}</span>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-[220px]">
                            {siteConfig.tagline}. Curated for builders.
                        </p>
                        <div className="flex items-center gap-2 mt-4">
                            <Link
                                href={siteConfig.links.twitter}
                                target="_blank"
                                className="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-border hover:bg-muted hover:border-violet-400/50 transition-colors"
                            >
                                <Twitter className="h-3.5 w-3.5" />
                            </Link>
                            <Link
                                href={siteConfig.links.github}
                                target="_blank"
                                className="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-border hover:bg-muted hover:border-violet-400/50 transition-colors"
                            >
                                <Github className="h-3.5 w-3.5" />
                            </Link>
                        </div>
                    </div>

                    {/* Footer link groups */}
                    {siteConfig.footerLinks.map((group) => (
                        <div key={group.label}>
                            <h4 className="text-sm font-semibold mb-3">{group.label}</h4>
                            <ul className="space-y-2">
                                {group.links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted-foreground hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} {siteConfig.name}. Open source. MIT Licensed.
                    </p>
                    <p className="text-xs text-muted-foreground">
                        Built with{" "}
                        <span className="text-violet-500">♥</span>{" "}
                        for developers
                    </p>
                </div>
            </div>
        </footer>
    )
}
