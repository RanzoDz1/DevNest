export const siteConfig = {
    name: "DevNest",
    tagline: "Discover the best developer tools",
    description:
        "DevNest is a curated directory of the best tools, resources, and products for developers, designers, and indie hackers. Find what you need to build faster.",
    url: "https://devnest.dev",
    ogImage: "/og.png",
    links: {
        twitter: "https://twitter.com/devnest",
        github: "https://github.com/devnest",
        discord: "https://discord.gg/devnest",
    },
    nav: [
        { label: "Browse Tools", href: "/tools" },
        { label: "Categories", href: "/categories" },
        { label: "About", href: "/about" },
    ],
    footerLinks: [
        {
            label: "Explore",
            links: [
                { label: "All Tools", href: "/tools" },
                { label: "Categories", href: "/categories" },
                { label: "New Arrivals", href: "/tools?sort=newest" },
                { label: "Most Popular", href: "/tools?sort=popular" },
            ],
        },
        {
            label: "Company",
            links: [
                { label: "About", href: "/about" },
                { label: "Submit a Tool", href: "/submit" },
                { label: "Contact", href: "/about#contact" },
            ],
        },
        {
            label: "Legal",
            links: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
            ],
        },
    ],
}

export type SiteConfig = typeof siteConfig
