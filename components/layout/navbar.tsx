"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect, useRef } from "react"
import { Menu, X, Layers } from "lucide-react"
import { ThemeToggle } from "@/components/layout/theme-toggle"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function Navbar() {
    const pathname = usePathname()
    const [mobileOpen, setMobileOpen] = useState(false)
    const [hidden, setHidden] = useState(false)
    const lastY = useRef(0)

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            setHidden(y > 100 && y > lastY.current);
            lastY.current = y;
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md transition-transform duration-300"
            style={{ transform: hidden ? "translateY(-100%)" : "translateY(0)" }}
        >
            <div className="container flex h-16 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 shadow-md group-hover:shadow-violet-500/30 transition-shadow">
                        <Layers className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-display text-xl font-bold gradient-text">{siteConfig.name}</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {siteConfig.nav.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                                pathname === item.href
                                    ? "bg-accent text-accent-foreground"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Right side */}
                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <Link
                        href="/submit"
                        className="hidden md:inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:from-violet-700 hover:to-indigo-700 hover:shadow-violet-500/25 transition-all"
                    >
                        + Submit Tool
                    </Link>
                    {/* Mobile menu toggle */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
                    <nav className="container flex flex-col gap-1 py-4">
                        {siteConfig.nav.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className={cn(
                                    "px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                                    pathname === item.href
                                        ? "bg-accent text-accent-foreground"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                )}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="/submit"
                            onClick={() => setMobileOpen(false)}
                            className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white"
                        >
                            + Submit Tool
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    )
}
