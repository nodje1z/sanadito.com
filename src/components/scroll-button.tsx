'use client'

import { ChevronDown } from "lucide-react"

export function ScrollButton() {
  return (
    <ChevronDown 
      className="w-8 h-8 mx-auto animate-bounce mt-16 opacity-50 hover:opacity-100 transition-opacity cursor-pointer" 
      onClick={() => {
        const tutorialSection = document.getElementById('tutorial')
        tutorialSection?.scrollIntoView({ behavior: 'smooth' })
      }}
    />
  )
} 