import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'

export default function Home() {
  const [socialLinks, setSocialLinks] = useState({ facebook: '', instagram: '', tiktok: '' })

  useEffect(() => {
    fetch('/api/social-links')
      .then(res => res.json())
      .then(data => setSocialLinks(data))
      .catch(error => console.error('Error loading social links:', error))
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-200">
      <Head>
        <title>EPICKON - Eventos y Experiencias Únicas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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

      <main className="container mx-auto px-4 py-8">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-4 font-bangers">
            Bienvenido a EpicKon
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Sumérgete en el mundo de los eventos y descubre una nueva experiencia de entretenimiento
          </p>
          <Link href="#about" className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
            Saber más
          </Link>
        </motion.section>

        <motion.section 
          id="about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-12"
        >
          <h2 className="text-3xl font-bold text-blue-600 mb-4 font-bangers">Sobre EpicKon</h2>
          <p className="text-gray-700 mb-4">
            EpicKon es tu destino para experiencias únicas en eventos. Somos la evolución de KnarGaming,
            expandiéndonos hacia el emocionante mundo de las convenciones que combinan lo mejor de los
            videojuegos, el K-pop y la cultura geek.
          </p>
          <p className="text-gray-700">
            Celebramos las pasiones compartidas a través de experiencias inmersivas y emocionantes que conectan
            generaciones. Desde concursos de cosplay familiar hasta mini torneos retro, ofrecemos un espacio
            inclusivo donde todos pueden disfrutar, crear recuerdos y fortalecer lazos familiares.
          </p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-12"
        >
          <h2 className="text-3xl font-bold text-blue-600 mb-4 font-bangers">Conoce a Rumi</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <Image src="/coneja.png" alt="Rumi, la mascota de EpicKon" width={300} height={300} className="rounded-lg" />
            </div>
            <div className="md:w-1/2 md:pl-6">
              <p className="text-gray-700 mb-4">
                Te presentamos a Rumi, nuestro adorable conejo cibernético. Una mezcla perfecta de tecnología y
                ternura, Rumi está programado para traer alegría y sonrisas a todos nuestros visitantes.
              </p>
              <audio controls className="w-full">
                <source src="https://files.fm/f/zkk6cmn83r" type="audio/mpeg" />
                Tu navegador no soporta el elemento de audio.
              </audio>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="bg-blue-600 text-white py-8">
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