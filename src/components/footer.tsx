import Link from "next/link"
import { FloatingHearts } from "@/components/ui/floating-hearts"

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <Link href="/" className="brand-logo text-2xl hover:opacity-80 transition-opacity">
            SɅNɅDITO®
          </Link>
          <div className="w-px h-8 bg-white/10" />
          <FloatingHearts />
        </div>
        <div className="hidden md:flex gap-8 font-bebas-neue tracking-wider text-white/60">
          <Link 
            href="/terminos" 
            className="hover:text-white transition-colors"
          >
            TÉRMINOS Y CONDICIONES
          </Link>
          <Link 
            href="/privacidad" 
            className="hover:text-white transition-colors"
          >
            POLÍTICA DE PRIVACIDAD
          </Link>
        </div>
      </div>
    </footer>
  )
}