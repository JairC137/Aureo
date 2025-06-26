import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#691C1C] text-white py-8 px-4 text-center">
      <div className="flex justify-center mb-4">
        <Image src="/icon 3.svg" alt="Logo ÁUREO" width={48} height={48} />
      </div>
      
      <p className="text-sm mb-1">© 2025 ÁUREO Services Group. Todos los derechos reservados.</p>
      <p className="text-xs text-[#f3d8d8] mb-4">Diseño y desarrollo con excelencia.</p>

      <div className="mt-4 flex justify-center gap-6 text-xs flex-wrap">
        <Link href="/aviso-privacidad" className="hover:underline hover:text-[#f3d8d8] transition">
          Aviso de privacidad
        </Link>
        <Link href="/terminos-condiciones" className="hover:underline hover:text-[#f3d8d8] transition">
          Términos y condiciones
        </Link>
        <Link href="#contacto" className="hover:underline hover:text-[#f3d8d8] transition">
          Contacto
        </Link>
      </div>
    </footer>
  )
}
