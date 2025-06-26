'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#contacto', label: 'Contacto' },
    { href: '#opiniones', label: 'Opiniones' },
  ]

  return (
    <nav className="bg-[#F8F5EC] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2 h-20">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/imagologo.svg"
            alt="Logo ÁUREO"
            width={100}
            height={40}
            className="h-10 w-auto"
          />
        </div>

        {/* Links en desktop */}
        <div className="hidden md:flex space-x-6 text-[#691C1C] font-medium text-lg">
          {navItems.map(({ href, label }) => (
            <Link key={href} href={href} className="relative group">
              <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-[#691C1C] after:scale-x-0 group-hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-500 after:ease-in-out">
                {label}
              </span>
            </Link>
          ))}
        </div>

        {/* Botón hamburguesa en móvil */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
            aria-label="Abrir menú"
          >
            <div className="w-6 h-0.5 bg-[#691C1C] mb-1"></div>
            <div className="w-6 h-0.5 bg-[#691C1C] mb-1"></div>
            <div className="w-6 h-0.5 bg-[#691C1C]"></div>
          </button>
        </div>
      </div>

      {/* Overlay oscuro */}
{menuOpen && (
  <div
    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
    onClick={() => setMenuOpen(false)}
  />
)}


      {/* Sidebar móvil */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#F8F5EC] w-3/4 z-50 transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-500 ease-in-out md:hidden`}
      >
        <div className="flex justify-end px-4 pt-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-[#691C1C] text-2xl font-bold"
            aria-label="Cerrar menú"
          >
            ×
          </button>
        </div>
        <div className="flex flex-col px-6 pt-8 space-y-6 text-[#691C1C] font-medium text-lg">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="hover:underline"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
