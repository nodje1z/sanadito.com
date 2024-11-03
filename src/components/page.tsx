'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ChevronDown, QrCode, Sparkles, Shield, HandIcon, CheckCircle, PlayCircle, FlaskConical, Users, Headset } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

// Add a custom hook for intersection observer
function useIntersectionObserver() {
  useEffect(() => {
    const sections = document.querySelectorAll('.section-animate');
    
    const sectionsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '-50px 0px'
    });

    sections.forEach(section => {
      sectionsObserver.observe(section);
    });

    const numbers = document.querySelectorAll('.number-animate');
    const numbersObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          numbers.forEach((number, index) => {
            number.classList.add('animate', `animate-${index + 1}`);
          });
          numbersObserver.disconnect();
        }
      });
    }, {
      threshold: 0.8,
      rootMargin: '-10% 0px'
    });

    const numbersContainer = document.querySelector('.numbers-container');
    if (numbersContainer) {
      numbersObserver.observe(numbersContainer);
    }

    return () => {
      sectionsObserver.disconnect();
      numbersObserver.disconnect();
    };
  }, []);
}

export default function Component() {
  useIntersectionObserver();

  const [isScrolled, setIsScrolled] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formError, setFormError] = useState("")
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setFormError("")

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = {
      studioName: formData.get('studioName'),
      location: formData.get('location'),
      email: formData.get('email'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/distributor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Error al enviar el formulario')
      }

      // Clear form before redirect
      form.reset()
      setIsSubmitting(false)
      
      // Redirect after form is reset
      router.push('/gracias')
    } catch (error) {
      console.error('Form submission error:', error)
      setFormError("Hubo un error al enviar tu solicitud. Por favor intenta de nuevo.")
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <a href="/" className="brand-logo text-2xl hover:opacity-80 transition-opacity">SɅNɅDITO®</a>
          <div className="flex gap-8">
            <a href="#tutorial" className="font-bebas-neue text-lg tracking-wider text-white/80 hover:text-white transition-colors">TUTORIAL</a>
            <a href="#distribuidores" className="font-bebas-neue text-lg tracking-wider text-white/80 hover:text-white transition-colors">DISTRIBUIDORES</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-animate relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-24 text-center space-y-12">
          <div className="inline-flex items-center gap-2 text-sm font-medium bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm border border-white/5 shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span className="font-bebas-neue tracking-wider">SOLUCIÓN ESTÉRIL PROFESIONAL</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bebas-neue tracking-[0.15em] leading-tight">
            SANADITO® ES EL ÚNICO<br />CUIDADO QUE TU PIERCING<br />NECESITA
          </h1>
          <div className="grid grid-cols-3 gap-8 md:gap-16 w-full max-w-2xl mx-auto pt-8">
            <div className="flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/10">
                <HandIcon className="w-8 h-8 transition-transform group-hover:scale-110" />
              </div>
              <span className="font-bebas-neue text-2xl tracking-wider">SIMPLE</span>
            </div>
            <div className="flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/10">
                <Sparkles className="w-8 h-8 transition-transform group-hover:scale-110" />
              </div>
              <span className="font-bebas-neue text-2xl tracking-wider">LIMPIO</span>
            </div>
            <div className="flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/10">
                <CheckCircle className="w-8 h-8 transition-transform group-hover:scale-110" />
              </div>
              <span className="font-bebas-neue text-2xl tracking-wider">CONFIABLE</span>
            </div>
          </div>
          <ChevronDown 
            className="w-8 h-8 mx-auto animate-bounce mt-16 opacity-50 hover:opacity-100 transition-opacity cursor-pointer" 
            onClick={() => {
              const tutorialSection = document.getElementById('tutorial');
              tutorialSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </div>
      </section>

      {/* Video Tutorial Section */}
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
          <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
            <iframe
              className="w-full h-full"
              src="about:blank"
              title="Sanadito Tutorial de Uso"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
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
                  <ol className="space-y-6 text-zinc-600 numbers-container">
                    <li className="flex gap-6 group">
                      <span className="number-animate font-bebas-neue text-3xl transition-transform">01</span>
                      <span className="text-lg">Rocía generosamente sobre el piercing (2-3 veces/día)</span>
                    </li>
                    <li className="flex gap-6 group">
                      <span className="number-animate font-bebas-neue text-3xl transition-transform">02</span>
                      <span className="text-lg">Deja que actúe (30 segundos)</span>
                    </li>
                    <li className="flex gap-6 group">
                      <span className="number-animate font-bebas-neue text-3xl transition-transform">03</span>
                      <span className="text-lg">Seca suavemente con papel limpio</span>
                    </li>
                  </ol>
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

      {/* Distributor Form Section - Enhanced */}
      <section className="section-animate py-32 px-4 bg-black text-white relative" id="distribuidores">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black" />
        <div className="max-w-6xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 text-sm font-medium bg-white/10 px-6 py-3 rounded-full">
                <Users className="w-4 h-4" />
                <span className="font-bebas-neue tracking-wider">ÚNETE A NOSOTROS</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bebas-neue tracking-[0.1em]">
                CONVIÉRTETE EN<br />DISTRIBUIDOR
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">
                Únete a nuestra red de distribuidores profesionales y ofrece a tus clientes el mejor cuidado para piercings
              </p>
              <div className="grid gap-6 pt-4">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-white/10">
                    <Shield className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bebas-neue text-xl mb-2 tracking-wider">Producto Profesional</h3>
                    <p className="text-white/60 leading-relaxed">Solución estéril de grado médico, respaldada por profesionales del sector</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-white/10">
                    <Headset className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bebas-neue text-xl mb-2 tracking-wider">Soporte Dedicado</h3>
                    <p className="text-white/60 leading-relaxed">Atención personalizada y soporte continuo para todos nuestros distribuidores</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-white/[0.02] border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formError && (
                    <div className="p-3 text-sm bg-red-500/10 border border-red-500/20 rounded-lg text-red-500">
                      {formError}
                    </div>
                  )}
                  <div className="space-y-2">
                    <Label htmlFor="studio-name" className="text-white/80 font-bebas-neue tracking-wider text-base">
                      Nombre del Estudio
                    </Label>
                    <Input
                      id="studio-name"
                      name="studioName"
                      className="bg-white/5 border-white/10 text-white h-12 focus:bg-white/10 transition-colors"
                      placeholder="Tu estudio de piercings"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-white/80 font-bebas-neue tracking-wider text-base">
                      Ubicación
                    </Label>
                    <Input
                      id="location"
                      name="location"
                      className="bg-white/5 border-white/10 text-white h-12 focus:bg-white/10 transition-colors"
                      placeholder="Ciudad, País"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white/80 font-bebas-neue tracking-wider text-base">
                      Correo Electrónico
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      className="bg-white/5 border-white/10 text-white h-12 focus:bg-white/10 transition-colors"
                      placeholder="contacto@estudio.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white/80 font-bebas-neue tracking-wider text-base">
                      Mensaje
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      className="bg-white/5 border-white/10 text-white min-h-[120px] focus:bg-white/10 transition-colors"
                      placeholder="Cuéntanos sobre tu solicitud..."
                      required
                    />
                  </div>
                  <Button 
                    className="w-full bg-white text-black hover:bg-white/90 h-12 font-bebas-neue tracking-wider text-lg" 
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'ENVIANDO...' : 'ENVIAR SOLICITUD'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer className="bg-black text-white border-t border-white/10 py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <span className="brand-logo text-2xl">SɅNɅDITO®</span>
            <div className="w-px h-8 bg-white/10" />
            <span className="font-bebas-neue text-white/60 tracking-wider">HECHO EN MDE</span>
          </div>
          <div className="flex gap-8 font-bebas-neue tracking-wider text-white/60">
            <a href="#" className="hover:text-white transition-colors">TÉRMINOS Y CONDICIONES</a>
            <a href="#" className="hover:text-white transition-colors">POLÍTICA DE PRIVACIDAD</a>
          </div>
        </div>
      </footer>
    </div>
  )
}