import Link from "next/link"
import { ArrowRight, Rocket } from "lucide-react"

export function SubmitCTA() {
    return (
        <section className="container py-16">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 p-12 text-center text-white">
                {/* Background circles */}
                <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/5 blur-2xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-white/5 blur-2xl pointer-events-none" />

                <div className="relative z-10">
                    <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-white/15 backdrop-blur-sm mb-4 mx-auto">
                        <Rocket className="h-7 w-7" />
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
                        Know a great tool?
                    </h2>
                    <p className="text-violet-100 text-lg max-w-md mx-auto mb-8">
                        Submit it to DevNest and help thousands of developers discover it.
                        It&apos;s free and takes less than 2 minutes.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <Link
                            href="/submit"
                            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-violet-700 hover:bg-violet-50 transition-colors shadow-lg"
                        >
                            Submit a Tool <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href="/tools"
                            className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm px-6 py-3 text-sm font-semibold hover:bg-white/20 transition-colors"
                        >
                            Browse all tools
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
