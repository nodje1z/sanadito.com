export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <a href="/" className="brand-logo text-2xl hover:opacity-80 transition-opacity">SɅNɅDITO®</a>
          <div className="w-px h-8 bg-white/10" />
          <span className="font-bebas-neue text-white/60 tracking-wider">HECHO EN MDE</span>
        </div>
        {/* Hide links on mobile, show on md and up */}
        <div className="hidden md:flex gap-8 font-bebas-neue tracking-wider text-white/60">
          <a 
            href="/terminos" 
            className="hover:text-white transition-colors"
          >
            TÉRMINOS Y CONDICIONES
          </a>
          <a 
            href="/privacidad" 
            className="hover:text-white transition-colors"
          >
            POLÍTICA DE PRIVACIDAD
          </a>
        </div>
      </div>
    </footer>
  )
}