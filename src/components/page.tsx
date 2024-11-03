'use client'

import { useState, useEffect } from "react"
import { NavigationWrapper } from "./navigation-wrapper"
import { HeroSection } from "./hero-section"
import { TutorialSection } from "./tutorial-section"
import { DistributorSection } from "./distributor-section"
import { Footer } from "./footer"
import { IntersectionObserverProvider } from "./intersection-observer-provider"

export default function Page() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const handleSplashComplete = () => setShowContent(true)
    window.addEventListener('splashComplete', handleSplashComplete)
    return () => window.removeEventListener('splashComplete', handleSplashComplete)
  }, [])

  return (
    <IntersectionObserverProvider>
      <div className={`min-h-screen bg-white transition-opacity duration-300 ${
        showContent ? 'opacity-100' : 'opacity-0'
      }`}>
        <NavigationWrapper />
        <HeroSection />
        <TutorialSection />
        <DistributorSection />
        <Footer />
      </div>
    </IntersectionObserverProvider>
  )
}