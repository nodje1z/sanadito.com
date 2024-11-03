export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-3xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bebas-neue tracking-wider mb-12 text-white">POLÍTICA DE PRIVACIDAD</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-sm text-zinc-400 mb-8">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bebas-neue tracking-wide mb-4 text-white">1. INFORMACIÓN QUE RECOPILAMOS</h2>
            <p className="text-zinc-300">Solo recopilamos la información que nos proporcionas voluntariamente a través del formulario de contacto para distribuidores:</p>
            <ul className="list-disc pl-5 mt-2 text-zinc-300">
              <li>Nombre del estudio</li>
              <li>Ubicación</li>
              <li>Correo electrónico</li>
              <li>Mensaje de solicitud</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bebas-neue tracking-wide mb-4 text-white">2. USO DE LA INFORMACIÓN</h2>
            <p className="text-zinc-300">Utilizamos esta información exclusivamente para:</p>
            <ul className="list-disc pl-5 mt-2 text-zinc-300">
              <li>Responder a tu solicitud de distribución</li>
              <li>Establecer comunicación comercial relacionada con la distribución de SɅNɅDITO®</li>
              <li>Enviar información relevante sobre nuestros productos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bebas-neue tracking-wide mb-4 text-white">3. PROTECCIÓN DE DATOS</h2>
            <p className="text-zinc-300">Implementamos medidas de seguridad para proteger tu información personal. Utilizamos servicios seguros de terceros:</p>
            <ul className="list-disc pl-5 mt-2 text-zinc-300">
              <li>Plunk para el envío de correos electrónicos</li>
              <li>Vercel para el alojamiento web</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bebas-neue tracking-wide mb-4 text-white">4. TUS DERECHOS</h2>
            <p className="text-zinc-300">Tienes derecho a:</p>
            <ul className="list-disc pl-5 mt-2 text-zinc-300">
              <li>Acceder a tu información personal</li>
              <li>Solicitar la rectificación o eliminación de tus datos</li>
              <li>Retirar tu consentimiento en cualquier momento</li>
            </ul>
            <p className="mt-4 text-zinc-300">Para ejercer estos derechos, contáctanos en: hola@sanadito.com</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bebas-neue tracking-wide mb-4 text-white">5. CONTACTO</h2>
            <p className="text-zinc-300">Para cualquier consulta sobre esta política de privacidad, contáctanos en:</p>
            <p className="mt-2 text-zinc-300">Email: hola@sanadito.com</p>
          </section>
        </div>
      </div>
    </div>
  )
} 