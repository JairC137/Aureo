import Head from 'next/head'

export default function AvisoPrivacidad() {
  return (
    <>
      <Head>
        <title>Aviso de Privacidad | ÁUREO Services Group</title>
      </Head>
      <main className="max-w-4xl mx-auto px-6 py-12 text-[#333]">
        <h1 className="text-3xl font-bold text-[#691C1C] mb-6">Aviso de Privacidad</h1>
        <p className="mb-4">
          En ÁUREO Services Group nos comprometemos a proteger su información personal. Este aviso describe cómo recopilamos,
          usamos, almacenamos y protegemos sus datos conforme a la Ley Federal de Protección de Datos Personales en Posesión
          de los Particulares (LFPDPPP).
        </p>
        <h2 className="text-xl font-semibold text-[#691C1C] mt-6 mb-2">1. Datos personales recabados</h2>
        <p className="mb-4">
          Podemos recopilar nombre, teléfono, correo electrónico, domicilio y otros datos necesarios para brindarle nuestros
          servicios de forma eficiente.
        </p>
        <h2 className="text-xl font-semibold text-[#691C1C] mt-6 mb-2">2. Finalidades del tratamiento</h2>
        <p className="mb-4">
          Sus datos serán utilizados para fines de contacto, facturación, seguimiento de servicio, marketing y cumplimiento
          legal.
        </p>
        <h2 className="text-xl font-semibold text-[#691C1C] mt-6 mb-2">3. Derechos ARCO</h2>
        <p className="mb-4">
          Usted puede ejercer sus derechos de acceso, rectificación, cancelación u oposición (ARCO) enviando un correo a
          <strong> contacto@aureoservices.mx</strong>.
        </p>
        <p className="mt-8 text-sm text-gray-600">Última actualización: junio de 2025.</p>
      </main>
    </>
  )
}
