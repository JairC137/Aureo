import Head from 'next/head'

export default function TerminosCondiciones() {
  return (
    <>
      <Head>
        <title>Términos y Condiciones | ÁUREO Services Group</title>
      </Head>
      <main className="max-w-4xl mx-auto px-6 py-12 text-[#333]">
        <h1 className="text-3xl font-bold text-[#691C1C] mb-6">Términos y Condiciones</h1>
        <p className="mb-4">
          Este sitio web y los servicios ofrecidos por ÁUREO Services Group están sujetos a los siguientes términos y
          condiciones. Al utilizar este sitio, usted acepta los presentes términos.
        </p>
        <h2 className="text-xl font-semibold text-[#691C1C] mt-6 mb-2">1. Uso del sitio</h2>
        <p className="mb-4">
          El contenido del sitio es para su uso personal y no comercial. Queda prohibida su reproducción sin autorización
          expresa.
        </p>
        <h2 className="text-xl font-semibold text-[#691C1C] mt-6 mb-2">2. Responsabilidad</h2>
        <p className="mb-4">
          No garantizamos la disponibilidad continua del sitio. Nos reservamos el derecho de modificar o interrumpir
          cualquier parte sin previo aviso.
        </p>
        <h2 className="text-xl font-semibold text-[#691C1C] mt-6 mb-2">3. Modificaciones</h2>
        <p className="mb-4">
          Nos reservamos el derecho de cambiar estos términos en cualquier momento. Se recomienda revisar esta sección
          periódicamente.
        </p>
        <p className="mt-8 text-sm text-gray-600">Última actualización: junio de 2025.</p>
      </main>
    </>
  )
}
