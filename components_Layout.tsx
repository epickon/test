import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [socialLinks, setSocialLinks] = useState({ facebook: '', instagram: '', tiktok: '' })

  useEffect(() => {
    fetch('/api/social-links')
      .then(res => res.json())
      .then(data => setSocialLinks(data))
      .catch(error => console.error('Error loading social links:', error))
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-100 to-blue-200">
      <header className="sticky top-0 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow-md">
        <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.png" alt="EpicKon Logo" width={100} height={50} />
          </Link>
          <div className="space-x-4">
            <Link href="/" className="text-blue-600 hover:text-blue-800 transition">Inicio</Link>
            <Link href="/galeria" className="text-blue-600 hover:text-blue-800 transition">Galería</Link>
            <Link href="/eventos" className="text-blue-600 hover:text-blue-800 transition">Eventos</Link>
            <Link href="/contacto" className="text-blue-600 hover:text-blue-800 transition">Contacto</Link>
          </div>
        </nav>
      </header>

      {children}

      <footer className="bg-blue-600 text-white py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            ¿Apasionado por los videojuegos, el K-pop y la cultura geek? ¡Descubre más sobre nuestros próximos eventos!
          </p>
          <div className="flex justify-center space-x-6 mb-4">
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="text-3xl hover:text-blue-300 transition" />
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-3xl hover:text-blue-300 transition" />
            </a>
            <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <FaTiktok className="text-3xl hover:text-blue-300 transition" />
            </a>
          </div>
          <p>&copy; 2024 EpicKon. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}