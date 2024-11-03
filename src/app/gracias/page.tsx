import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GraciasPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-8">
        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto">
          <CheckCircle className="w-8 h-8" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bebas-neue tracking-wider">
          GRACIAS POR TU INTERÉS EN DISTRIBUIR SANADITO®
        </h1>
        
        <p className="text-lg text-white/80">
          Hemos recibido tu solicitud y nos pondremos en contacto contigo pronto para discutir los siguientes pasos.
        </p>
        
        <div className="pt-8">
          <Link href="/">
            <Button className="bg-white text-black hover:bg-white/90 font-bebas-neue tracking-wider">
              VOLVER AL INICIO
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
} 