'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export function DistributorForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formError, setFormError] = useState("")
  const router = useRouter()

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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()
      if (!response.ok) throw new Error(result.error || 'Error al enviar el formulario')

      form.reset()
      setIsSubmitting(false)
      router.push('/gracias')
    } catch (error) {
      console.error('Form submission error:', error)
      setFormError("Hubo un error al enviar tu solicitud. Por favor intenta de nuevo.")
      setIsSubmitting(false)
    }
  }

  return (
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
          className="bg-white/5 border-white/10 text-white h-12 focus:bg-white/10 transition-colors touch-target"
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
          className="bg-white/5 border-white/10 text-white h-12 focus:bg-white/10 transition-colors touch-target"
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
          className="bg-white/5 border-white/10 text-white h-12 focus:bg-white/10 transition-colors touch-target"
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
          className="bg-white/5 border-white/10 text-white min-h-[120px] focus:bg-white/10 transition-colors touch-target"
          placeholder="Cuéntanos sobre tu solicitud..."
          required
        />
      </div>
      <Button 
        className={`w-full bg-white text-black hover:bg-white/90 h-12 font-bebas-neue tracking-wider text-lg touch-target
          ${isSubmitting ? 'loading-pulse' : ''}`}
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
            <span>ENVIANDO...</span>
          </div>
        ) : (
          'ENVIAR SOLICITUD'
        )}
      </Button>
    </form>
  )
} 