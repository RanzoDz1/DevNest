import { Hero } from "@/components/sections/hero"
import { FeaturedTools } from "@/components/sections/featured-tools"
import { CategorySection } from "@/components/sections/category-section"
import { NewTools } from "@/components/sections/new-tools"
import { SubmitCTA } from "@/components/sections/submit-cta"

export default function HomePage() {
    return (
        <>
            <Hero />
            <FeaturedTools />
            <CategorySection />
            <NewTools />
            <SubmitCTA />
        </>
    )
}
