'use client'

import { Heart } from "lucide-react"
import { useState } from "react"

function FloatingHeart({ onAnimationEnd, index }: { onAnimationEnd: () => void; index: number }) {
  // Create a spread pattern using both index and random values
  const horizontalOffset = Math.random() * 30 - 15 + (index * 15 - 15) // Spread hearts horizontally
  const verticalOffset = Math.random() * 10 + (index * 5) // Stagger initial vertical positions
  
  return (
    <Heart 
      className="absolute bottom-0 text-red-500 w-4 h-4 animate-tiktok-heart" 
      style={{
        left: `calc(50% + ${horizontalOffset}px)`,
        bottom: `${verticalOffset}px`,
      }}
      onAnimationEnd={onAnimationEnd}
      fill="currentColor"
    />
  )
}

export function FloatingHearts() {
  const [hearts, setHearts] = useState<number[]>([])

  const addHeart = () => {
    // Add multiple hearts for a burst effect
    const numberOfHearts = 3
    const newHearts = Array.from({ length: numberOfHearts }, () => Date.now() + Math.random())
    setHearts(prev => [...prev, ...newHearts])
  }

  const removeHeart = (id: number) => {
    setHearts(prev => prev.filter(heartId => heartId !== id))
  }

  return (
    <div className="relative">
      <button 
        onClick={addHeart}
        className="font-bebas-neue text-white/60 tracking-wider hover:text-white/80 transition-colors"
      >
        HECHO EN MDE
      </button>
      {hearts.map((id, index) => (
        <FloatingHeart 
          key={id} 
          index={index % 3} // Cycle through 3 positions
          onAnimationEnd={() => removeHeart(id)} 
        />
      ))}
    </div>
  )
} 