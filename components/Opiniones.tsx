import { FaGoogle, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

function renderStars(rating: number) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.25 && rating % 1 < 0.75
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} className="text-[#FFD700]" />
      ))}
      {hasHalfStar && <FaStarHalfAlt className="text-[#FFD700]" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} className="text-[#FFD700]" />
      ))}
    </>
  )
}

export default function Opiniones() {
  return (
    <section id="opiniones" className="bg-[#F8F5EC] scroll-mt-24 py-16 text-center">
      <h2 className="text-3xl font-bold text-[#691C1C] mb-4">Lo que dicen nuestros clientes</h2>

      <div className="flex justify-center items-center gap-1 text-[#FFD700] mb-2">
        {renderStars(4.2)}
      </div>

      <p className="text-sm text-gray-600 mb-6">
        Calificación promedio: <strong>4.2 / 5.0</strong> basada en opiniones <strong>reales</strong>
      </p>

      <p className="text-lg text-[#444] mb-6 max-w-2xl mx-auto">
        Estamos orgullosos de brindar un servicio excepcional. Consulta las opiniones <strong>reales</strong> de nuestros clientes en Google.
      </p>

      <a
        href="https://maps.app.goo.gl/UuKVFijduv1nwJRi6"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#DAA520] hover:bg-[#b8860b] text-white font-semibold py-3 px-6 rounded-lg transition"
      >
        <FaGoogle size={20} />
        Ver opiniones en Google
      </a>
    </section>
  )
}
