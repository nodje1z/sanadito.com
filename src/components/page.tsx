'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ChevronDown, QrCode, Sparkles, Shield, HandIcon, CheckCircle } from "lucide-react"
import { useState, useEffect } from "react"

export default function Component() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="brand-logo text-2xl">SɅNɅDITO®</span>
          <div className="flex gap-6">
            <a href="#tutorial" className="text-white/80 hover:text-white transition">TUTORIAL</a>
            <a href="#distribuidores" className="text-white/80 hover:text-white transition">DISTRIBUIDORES</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black text-white">
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-24 text-center space-y-8">
          <div className="inline-flex items-center gap-2 text-sm font-medium bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>SOLUCIÓN ESTÉRIL PROFESIONAL</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bebas-neue tracking-[0.15em] leading-tight">
            SANADITO® ES EL ÚNICO CUIDADO QUE TU PIERCING NECESITA
          </h1>
          <div className="grid grid-cols-3 gap-8 md:gap-16 w-full max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-3">
              <HandIcon className="w-8 h-8" />
              <span className="font-bebas-neue text-2xl tracking-wider">SIMPLE</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Sparkles className="w-8 h-8" />
              <span className="font-bebas-neue text-2xl tracking-wider">LIMPIO</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <CheckCircle className="w-8 h-8" />
              <span className="font-bebas-neue text-2xl tracking-wider">CONFIABLE</span>
            </div>
          </div>
          <ChevronDown className="w-8 h-8 mx-auto animate-bounce mt-12" />
        </div>
      </section>

      {/* Video Tutorial Section */}
      <section className="py-24 px-4 bg-white text-black relative overflow-hidden" id="tutorial">
        <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bebas-neue tracking-[0.1em]">VIDEO TUTORIAL</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Aprende a utilizar SANADITO® de manera correcta para obtener los mejores resultados
            </p>
          </div>
          <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full"
              src="about:blank"
              title="Sanadito Tutorial de Uso"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <Card className="mt-12 border-2">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-xl mb-4 flex items-center gap-2 text-black">
                    <QrCode className="w-5 h-5" />
                    MODO DE USO
                  </h3>
                  <ol className="space-y-4 text-gray-600">
                    <li className="flex gap-4">
                      <span className="font-bold text-black">01</span>
                      <span>Rocía generosamente sobre el piercing (2-3 veces/día)</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-bold text-black">02</span>
                      <span>Deja que actúe (30 segundos)</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-bold text-black">03</span>
                      <span>Seca suavemente con papel limpio</span>
                    </li>
                  </ol>
                </div>
                <div className="space-y-4">
                  <h3 className="font-bold text-xl mb-4 text-black">INGREDIENTES</h3>
                  <p className="text-gray-600">Solución estéril de cloruro de sodio 0.9% (Salina de grado médico)</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Shield className="w-4 h-4" />
                    <span>Recomendado por expertos profesionales</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Distributor Form Section */}
      <section className="py-24 px-4 bg-black text-white relative" id="distribuidores">
        <div className="absolute inset-0 bg-grid-white/[0.02] -z-0" />
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">CONVIÉRTETE EN DISTRIBUIDOR</h2>
              <p className="text-lg text-white/80">
                Únete a nuestra red de distribuidores profesionales y ofrece a tus clientes el mejor cuidado para piercings
              </p>
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Producto Profesional</h3>
                    <p className="text-sm text-white/60">Solución estéril de grado médico</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Soporte Dedicado</h3>
                    <p className="text-sm text-white/60">Atención personalizada para distribuidores</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="studio-name" className="text-white">
                      Nombre del Estudio
                    </Label>
                    <Input
                      id="studio-name"
                      className="bg-white/5 border-white/10 text-white h-12"
                      placeholder="Tu estudio de piercings"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-white">
                      Ubicación
                    </Label>
                    <Input
                      id="location"
                      className="bg-white/5 border-white/10 text-white h-12"
                      placeholder="Ciudad, País"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Correo Electrónico
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      className="bg-white/5 border-white/10 text-white h-12"
                      placeholder="contacto@estudio.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">
                      Mensaje
                    </Label>
                    <Textarea
                      id="message"
                      className="bg-white/5 border-white/10 text-white min-h-[120px]"
                      placeholder="Cuéntanos sobre tu estudio..."
                    />
                  </div>
                  <Button className="w-full bg-white text-black hover:bg-white/90 h-12" type="submit">
                    ENVIAR SOLICITUD
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white border-t border-white/10 py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="brand-logo text-xl">SɅNɅDITO®</span>
            <span className="font-bebas-neue text-white/60 text-sm tracking-wider">HECHO EN MDE</span>
          </div>
          <div className="flex gap-8 text-sm text-white/60">
            <a href="#" className="hover:text-white transition">Términos y Condiciones</a>
            <a href="#" className="hover:text-white transition">Política de Privacidad</a>
          </div>
        </div>
      </footer>
    </div>
  )
}