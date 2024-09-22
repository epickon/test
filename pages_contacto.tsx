import Head from 'next/head'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contacto - EpicKon</title>
      </Head>

      <main className="container mx-auto px-4 py-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-blue-600 mb-8 text-center font-bangers"
        >
          Formulario de Contacto
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSf9YqwvLOFWAib8vxHANG2AXro_wf4Qs3XHic91Jfyy8RjvEg/viewform?embedded=true" 
            width="100%" 
            height="800" 
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0}
          >
            Cargando…
          </iframe>
        </motion.div>
      </main>
    </Layout>
  )
}