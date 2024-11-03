export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-3xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bebas-neue tracking-wider mb-12 text-white">TÉRMINOS Y CONDICIONES</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-sm text-zinc-400 mb-8">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bebas-neue tracking-wide mb-4 text-white">1. ACEPTACIÓN</h2>
            <p className="text-zinc-300">Al utilizar este sitio web y/o solicitar ser distribuidor de SɅNɅDITO®, aceptas estos términos y condiciones en su totalidad.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bebas-neue tracking-wide mb-4 text-white">2. PRODUCTO</h2>
            <p className="text-zinc-300">SɅNɅDITO® es una solución estéril de cloruro de sodio 0.9% destinada al cuidado de piercings. El producto:</p>
            <ul className="list-disc pl-5 mt-2 text-zinc-300">
              <li>Debe utilizarse siguiendo las instrucciones proporcionadas</li>
              <li>Es para uso externo únicamente</li>
              <li>No sustituye el consejo o tratamiento médico profesional</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bebas-neue tracking-wide mb-4 text-white">3. DISTRIBUCIÓN</h2>
            <p className="text-zinc-300">Para ser distribuidor:</p>
            <ul className="list-disc pl-5 mt-2 text-zinc-300">
              <li>Debes ser un estudio de piercings profesional o comercio autorizado</li>
              <li>La solicitud está sujeta a aprobación</li>
              <li>Nos reservamos el derecho de rechazar cualquier solicitud</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bebas-neue tracking-wide mb-4 text-white">4. PROPIEDAD INTELECTUAL</h2>
            <p className="text-zinc-300">SɅNɅDITO® y todos sus elementos visuales y de marca son propiedad exclusiva nuestra. No está permitido:</p>
            <ul className="list-disc pl-5 mt-2 text-zinc-300">
              <li>Usar nuestras marcas sin autorización</li>
              <li>Copiar o reproducir el contenido del sitio</li>
              <li>Modificar o alterar la presentación del producto</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bebas-neue tracking-wide mb-4 text-white">5. LIMITACIÓN DE RESPONSABILIDAD</h2>
            <p className="text-zinc-300">No nos hacemos responsables de:</p>
            <ul className="list-disc pl-5 mt-2 text-zinc-300">
              <li>Uso inadecuado del producto</li>
              <li>Reacciones adversas por no seguir las instrucciones</li>
              <li>Daños derivados del incumplimiento de estas condiciones</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bebas-neue tracking-wide mb-4 text-white">6. MODIFICACIONES</h2>
            <p className="text-zinc-300">Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios serán efectivos inmediatamente después de su publicación en el sitio web.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bebas-neue tracking-wide mb-4 text-white">7. CONTACTO</h2>
            <p className="text-zinc-300">Para cualquier consulta sobre estos términos, contáctanos en:</p>
            <p className="mt-2 text-zinc-300">Email: hola@sanadito.com</p>
          </section>
        </div>
      </div>
    </div>
  )
} 