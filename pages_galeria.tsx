import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'

const imageLinks = [
  "https://iili.io/drdN3Ku.jpg",
  "https://iili.io/drdwpN2.jpg",
  "https://iili.io/drdwytS.jpg",
  // ... (add all other image links here)
]

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageLinks.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imageLinks.length) % imageLinks.length)
  }

  return (
    <Layout>
      <Head>
        <title>Galería - EpicKon</title>
      </Head>

      <main className="container mx-auto px-4 py-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-blue-600 mb-8 text-center font-bangers"
        >
          Galería de Eventos
        </motion.h1>

        <div className="relative w-full max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden"
          >
            <Image
              src={imageLinks[currentIndex]}
              alt={`Imagen de evento ${currentIndex + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            aria-label="Imagen anterior"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            aria-label="Imagen siguiente"
          >
            ❯
          </button>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {imageLinks.slice(0, 8).map((link, index) => (
            <div key={index} className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src={link}
                alt={`Miniatura de evento ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="hover:opacity-75 transition-opacity duration-300"
              />
            </div>
          ))}
        </motion.div>
      </main>
    </Layout>
  )
}