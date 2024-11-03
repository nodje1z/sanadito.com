'use client'

import { useEffect } from 'react'
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center space-y-8">
        <h2 className="text-4xl font-bebas-neue tracking-wider text-white">
          ALGO SALIÓ MAL
        </h2>
        <p className="text-white/60">
          Ha ocurrido un error inesperado. Por favor, intenta de nuevo.
        </p>
        <Button
          onClick={reset}
          className="bg-white text-black hover:bg-white/90"
        >
          INTENTAR DE NUEVO
        </Button>
      </div>
    </div>
  )
} 