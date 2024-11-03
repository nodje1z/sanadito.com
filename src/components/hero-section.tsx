import { Sparkles, HandIcon, CheckCircle } from "lucide-react"
import { ScrollButton } from "./scroll-button"

interface HeroIconProps {
  icon: React.ReactNode
  label: string
}

function HeroIcon({ icon, label }: HeroIconProps) {
  return (
    <div className="flex flex-col items-center gap-4 group">
      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/10">
        <div className="transition-transform group-hover:scale-110">
          {icon}
        </div>
      </div>
      <span className="font-bebas-neue text-2xl tracking-wider">{label}</span>
    </div>
  )
}

// This can be a server component now
export function HeroSection() {
  return (
    <section className="section-animate relative min-h-[100svh] flex items-center justify-center bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-24 text-center space-y-8 md:space-y-12">
        <div className="inline-flex items-center gap-2 text-sm font-medium bg-white/10 px-4 md:px-6 py-2 md:py-3 rounded-full backdrop-blur-sm border border-white/5 shadow-lg">
          <Sparkles className="w-4 h-4" />
          <span className="font-bebas-neue tracking-wider text-sm md:text-base">SOLUCIÓN ESTÉRIL PROFESIONAL</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bebas-neue tracking-[0.15em] leading-tight">
          SANADITO® ES EL ÚNICO<br className="hidden sm:block" /> CUIDADO QUE TU<br className="hidden sm:block" /> PIERCING NECESITA
        </h1>
        
        <div className="grid grid-cols-3 gap-8 md:gap-16 w-full max-w-2xl mx-auto">
          <HeroIcon icon={<HandIcon className="w-8 h-8" />} label="SIMPLE" />
          <HeroIcon icon={<Sparkles className="w-8 h-8" />} label="LIMPIO" />
          <HeroIcon icon={<CheckCircle className="w-8 h-8" />} label="CONFIABLE" />
        </div>
        
        <ScrollButton />
      </div>
    </section>
  )
} 