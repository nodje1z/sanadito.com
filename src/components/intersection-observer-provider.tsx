'use client'

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function IntersectionObserverProvider({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  useIntersectionObserver()
  return <>{children}</>
} 