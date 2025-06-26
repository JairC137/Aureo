interface HeroProps {
  title: string
  subtitle: string
  ctaText: string
}

export default function Hero({ title, subtitle, ctaText }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Fondo de video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover z-0"
      >
        <source src="/fondo.mp4" type="video/mp4" />
        Tu navegador no soporta video en HTML5.
      </video>

      {/* Contenido encima del video */}
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="mt-4 text-lg">{subtitle}</p>
        <a
          href="#contacto"
          className="mt-8 inline-block bg-[#B58C38] text-white px-6 py-3 rounded hover:bg-[#8a682a] transition"
        >
          {ctaText}
        </a>
      </div>

      {/* Capa de oscurecimiento opcional */}
      <div className="absolute inset-0 bg-black opacity-50 z-0" />
    </section>
  )
}


