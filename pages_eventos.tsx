import Head from 'next/head'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'

interface Event {
  id: string
  summary: string
  description: string
  start: { dateTime: string }
  htmlLink: string
}

export default function Events() {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    fetch('/api/events')
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error loading events:', error))
  }, [])

  return (
    <Layout>
      <Head>
        <title>Eventos - EpicKon</title>
      </Head>

      <main className="container mx-auto px-4 py-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-blue-600 mb-8 text-center font-bangers"
        >
          Próximos Eventos
        </motion.h1>

        {events.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <img src="/evento.jpg" alt="No hay eventos" className="mx-auto rounded-lg shadow-lg" />
            <p className="mt-4 text-xl text-gray-600">No hay eventos programados en este momento.</p>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {events.map((event) => (
              <motion.div 
                key={event.id}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-blue-600 mb-2">{event.summary}</h2>
                  <p className="text-gray-600 mb-4">
                    {new Date(event.start.dateTime).toLocaleString('es-ES', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric'
                    })}
                  </p>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <a
                    href={event.htmlLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
                  >
                    Más detalles
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </main>
    </Layout>
  )
}