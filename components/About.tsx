import Image from 'next/image'

export default function About() {
  return (
    <section id="nosotros" className="bg-[#F8F5EC] scroll-mt-24 py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div>
          <h2 className="text-4xl font-bold text-[#691C1C] mb-4">
            ¿Quiénes somos?
          </h2>
          <div className="w-16 h-1 bg-[#B58C38] rounded mb-6"></div>
          <p className="text-[#333] text-lg leading-relaxed">
            En <strong>AUREO Services Group</strong> combinamos pasión, sabor y atención impecable para brindar
            experiencias gastronómicas únicas. Nuestro compromiso con la calidad y la excelencia
            nos ha consolidado como un referente en catering, comedores industriales y organización de eventos.
          </p>
        </div>

        {/* Imagen */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/about.svg"
            alt="Equipo de cocina ÁUREO"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}
