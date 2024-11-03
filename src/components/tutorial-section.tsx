import { QrCode, FlaskConical, Shield, PlayCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// Inline the video component since it's simple
function TutorialVideo() {
  'use client'
  return (
    <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
      <iframe
        className="w-full h-full" // Replace with actual video URL
        src="about:blank"
        title="Sanadito Tutorial de Uso"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

// Inline the numbered list since it's just for animations
function NumberedList({ items }: { items: string[] }) {
  'use client'
  return (
    <ol className="space-y-6 text-zinc-600 numbers-container">
      {items.map((item, index) => (
        <li key={index} className="flex gap-6 group">
          <span className="number-animate font-bebas-neue text-3xl transition-transform">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-lg">{item}</span>
        </li>
      ))}
    </ol>
  )
}

// Main section component can be server-side
export function TutorialSection() {
  return (
    <section className="section-animate py-32 px-4 bg-zinc-50 text-black relative overflow-hidden" id="tutorial">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_var(--tw-gradient-stops))] from-zinc-50 via-white to-zinc-50" />
      <div className="max-w-5xl mx-auto relative">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 text-sm font-medium bg-black/5 px-6 py-3 rounded-full mb-4">
            <PlayCircle className="w-4 h-4" />
            <span className="font-bebas-neue tracking-wider">APRENDE A USARLO</span>
          </div>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
            Obtén los mejores resultados siguiendo estos sencillos pasos
          </p>
        </div>
        
        <TutorialVideo />
        
        <Card className="mt-16 border-none shadow-[0_15px_30px_-5px_rgba(0,0,0,0.1)] bg-white/70 backdrop-blur-sm">
          <CardContent className="p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-bebas-neue text-2xl mb-8 flex items-center gap-3 text-black tracking-wider">
                  <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center">
                    <QrCode className="w-5 h-5" />
                  </div>
                  MODO DE USO
                </h3>
                <NumberedList items={[
                  "Rocía generosamente sobre el piercing (2-3 veces/día)",
                  "Deja que actúe (30 segundos)",
                  "Seca suavemente con papel limpio"
                ]} />
              </div>
              <div className="space-y-6">
                <h3 className="font-bebas-neue text-2xl mb-8 flex items-center gap-3 text-black tracking-wider">
                  <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center">
                    <FlaskConical className="w-5 h-5" />
                  </div>
                  INGREDIENTES
                </h3>
                <p className="text-lg text-zinc-600">
                  Solución estéril de cloruro de sodio 0.9%<br />
                  <span className="text-zinc-400">(Salina de grado médico)</span>
                </p>
                <div className="inline-flex items-center gap-2.5 mt-8 border border-black/5 px-4 py-3 rounded-xl bg-gradient-to-r from-black/[0.02] to-black/[0.01]">
                  <Shield className="w-4 h-4 text-zinc-400" />
                  <span className="font-bebas-neue tracking-wide text-zinc-500">RECOMENDADO POR EXPERTOS</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}