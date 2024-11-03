'use client'

import { useState, useEffect } from "react"
import { NavigationMenu } from "./navigation-menu"

export function NavigationWrapper() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleNavigation(sectionId: string) {
    setIsMenuOpen(false)
    const header = document.querySelector('nav')
    const headerHeight = header?.getBoundingClientRect().height || 0
    const section = document.getElementById(sectionId)
    if (section) {
      const sectionTop = section.offsetTop - headerHeight
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <NavigationMenu 
      isScrolled={isScrolled} 
      isMenuOpen={isMenuOpen} 
      onOpenChange={setIsMenuOpen}
      onNavigation={handleNavigation}
    />
  )
} 