'use client'

import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import Link from "next/link"

interface NavigationMenuProps {
  isScrolled: boolean
  isMenuOpen: boolean
  onOpenChange: (open: boolean) => void
  onNavigation: (sectionId: string) => void
}

export function NavigationMenu({ 
  isScrolled, 
  isMenuOpen, 
  onOpenChange, 
  onNavigation 
}: NavigationMenuProps) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="brand-logo text-2xl text-white hover:opacity-80 transition-opacity">
          SɅNɅDITO®
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <a 
            href="#tutorial" 
            className="font-bebas-neue text-lg tracking-wider text-white/80 hover:text-white transition-colors"
          >
            TUTORIAL
          </a>
          <a 
            href="#distribuidores" 
            className="font-bebas-neue text-lg tracking-wider text-white/80 hover:text-white transition-colors"
          >
            DISTRIBUIDORES
          </a>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isMenuOpen} onOpenChange={onOpenChange}>
          <SheetTrigger className="md:hidden p-2">
            <Menu className="w-6 h-6 text-white" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-black/95 backdrop-blur-sm border-white/10">
            <SheetTitle className="font-bebas-neue text-2xl tracking-wider text-white mb-8">
              MENÚ
            </SheetTitle>
            <div className="flex flex-col gap-8">
              <button 
                onClick={() => onNavigation('tutorial')}
                className="font-bebas-neue text-2xl tracking-wider text-white/80 hover:text-white transition-colors text-left"
              >
                TUTORIAL
              </button>
              <button 
                onClick={() => onNavigation('distribuidores')}
                className="font-bebas-neue text-2xl tracking-wider text-white/80 hover:text-white transition-colors text-left"
              >
                DISTRIBUIDORES
              </button>
              <div className="h-px bg-white/10" />
              <Link 
                href="/terminos" 
                onClick={() => onOpenChange(false)}
                className="font-bebas-neue text-lg tracking-wider text-white/60 hover:text-white transition-colors"
              >
                TÉRMINOS Y CONDICIONES
              </Link>
              <Link 
                href="/privacidad" 
                onClick={() => onOpenChange(false)}
                className="font-bebas-neue text-lg tracking-wider text-white/60 hover:text-white transition-colors"
              >
                POLÍTICA DE PRIVACIDAD
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
} 