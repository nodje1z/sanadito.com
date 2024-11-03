import { NavigationWrapper } from "./navigation-wrapper"
import { HeroSection } from "./hero-section"
import { TutorialSection } from "./tutorial-section"
import { DistributorSection } from "./distributor-section"
import { Footer } from "./footer"
import { IntersectionObserverProvider } from "./intersection-observer-provider"

// This can now be a server component
export default function Page() {
  return (
    <IntersectionObserverProvider>
      <div className="min-h-screen bg-white">
        <NavigationWrapper />
        <HeroSection />
        <TutorialSection />
        <DistributorSection />
        <Footer />
      </div>
    </IntersectionObserverProvider>
  )
}