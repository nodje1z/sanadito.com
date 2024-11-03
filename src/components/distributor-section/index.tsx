import { Shield, Users, Headset } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { DistributorForm } from "./form"

export function DistributorSection() {
  return (
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
              <DistributorForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 