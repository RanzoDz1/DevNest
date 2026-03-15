import Link from "next/link"
import { Search } from "lucide-react"

export default function NotFound() {
    return (
        <div className="container flex flex-col items-center justify-center py-32 text-center">
            <div className="h-20 w-20 rounded-2xl bg-muted flex items-center justify-center mb-6">
                <Search className="h-9 w-9 text-muted-foreground" />
            </div>
            <h1 className="font-display text-5xl font-bold mb-3">404</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-sm">
                This page doesn&apos;t exist. Maybe the tool you&apos;re looking for is still on its way.
            </p>
            <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-bold text-white hover:from-violet-700 hover:to-indigo-700 transition-all"
            >
                Back to DevNest
            </Link>
        </div>
    )
}
