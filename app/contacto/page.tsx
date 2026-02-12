"use client";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";

// El script SEO lo definimos fuera para limpiar el componente
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "YogaStudio",
  "name": "Sukhi Yoga Burriana",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "El Raval, 5",
    "addressLocality": "Burriana",
    "addressRegion": "Castellón",
    "postalCode": "12530",
    "addressCountry": "ES"
  },
  "telephone": "+34 642 00 27 21",
  "openingHours": "Mo-Th 09:00-21:15, Fr 09:00-13:00"
};

export default function Contacto() {
  return (
    <main className="bg-[#f5f2ed] min-h-screen font-serif text-[#3a4d3a]">
      {/* Script SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Forzamos el Navbar siempre visible en Contacto */}
      <Navbar visible={true} />

      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl text-center mb-16"
        >
          Contacta con Sukhi Yoga
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-10 rounded-[2.5rem] shadow-sm flex flex-col justify-between"
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-sm uppercase tracking-widest opacity-50 mb-4">¿Dónde estamos?</h2>
                <p className="text-xl">El Raval, 5, 12530<br />Burriana, Castelló</p>
                <p className="mt-2 text-[#a3bfa3] font-sans">+34 642 00 27 21</p>
              </div>

              <div>
                <h2 className="text-sm uppercase tracking-widest opacity-50 mb-4">Horarios</h2>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="font-medium">Lunes a Jueves</span>
                    <span className="opacity-80 text-sm">09:00–13:30 | 16:30–21:15</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Viernes</span>
                    <span className="opacity-80 text-sm">09:00–13:00</span>
                  </li>
                  <li className="flex justify-between opacity-40">
                    <span>Sábado y Domingo</span>
                    <span className="text-sm tracking-tighter">Cerrado</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href="https://wa.me/34642002721" 
                className="inline-block w-full text-center bg-[#a3bfa3] text-white px-8 py-4 rounded-full hover:bg-[#3a4d3a] transition-all duration-500 uppercase tracking-widest text-xs"
              >
                Escríbenos por WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Mapa Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="h-[500px] md:h-auto rounded-[2.5rem] overflow-hidden shadow-md"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.939226871631!2d-0.08774642345638555!3d39.88927717153026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd600f934145719d%3A0xe670081d5f3089d7!2sSukhi%20Yoga%20Burriana!5e0!3m2!1ses!2ses!4v1707690000000!5m2!1ses!2ses" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              className="grayscale-[20%] contrast-[1.1]"
            ></iframe>
          </motion.div>

        </div>
      </section>
    </main>
  );
}