export default function Services() {
  const servicios = [
    {
      titulo: 'Comedores Industriales y Corporativos',
      descripcion:
        'Ofrecemos un servicio integral de comedor directamente en tus instalaciones. Nuestra cocina está completamente equipada y lista para operar en sitio, donde preparamos y servimos alimentos con un montaje decorativo y atención personalizada para tu equipo. Nos enfocamos en brindar una experiencia culinaria eficiente, higiénica y adaptada a tus necesidades.',
      imagen: '/images/comedor-industrial.jpg',
    },
    {
      titulo: 'Solución de Comedor Listo para Servir',
      descripcion:
        'Gestionamos tu comedor corporativo sin necesidad de contar con una cocina instalada en sitio. Desde nuestra cocina central, enviamos diariamente alimentos preparados, garantizando frescura, calidad y una operación eficiente en tus instalaciones.',
      imagen: '/images/comedor-tradicional.jpg',
    },
    {
      titulo: 'Alimentos Empacados para Turnos Nocturnos o Remotos',
      descripcion:
        'Producción y entrega de alimentos empacados (box lunch, cenas listas, kits de desayuno) para personal en horarios especiales o en ubicaciones donde no se puede instalar un comedor.',
      imagen: '/images/comedor-remoto.jpg',
    },
    {
      titulo: 'Catering Empresarial',
      descripcion:
        'Brindamos servicio de catering para eventos corporativos y especiales como posadas, congresos, conciertos y más. Ofrecemos coffee breaks, box lunches, banquetes y menús personalizados, adaptados a las necesidades y el estilo de cada ocasión.',
      imagen: '/images/catering-eventos.jpg',
    },
  ];

  return (
    <section id="servicios" className="bg-[#F8F5EC] py-16 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#691C1C] mb-12">Nuestros servicios</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {servicios.map((servicio, i) => (
            <div
              key={i}
              className="bg-white border rounded-lg shadow-md p-6 text-left flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div>
                <h3 className="text-lg font-semibold text-[#691C1C]">{servicio.titulo}</h3>
                <p className="text-sm text-gray-700 mt-2">{servicio.descripcion}</p>
              </div>
              <img
                src={servicio.imagen}
                alt={servicio.titulo}
                className="mt-4 rounded-lg object-cover w-full h-40"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
