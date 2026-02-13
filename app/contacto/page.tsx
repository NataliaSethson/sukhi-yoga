"use client";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar"; 

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
    <main className="bg-[#f5f2ed] min-h-screen font-serif text-[#3a4d3a] flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar visible={true} />

      {/* Contenido Principal */}
      <section className="flex-grow pt-52 pb-20 px-6 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl mb-6">Contacto</h1>
          <p className="text-xl font-light italic opacity-60">Estamos en el corazón de Burriana para acompañarte.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          
          {/* Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-12 rounded-[3rem] shadow-sm flex flex-col justify-between border border-[#3a4d3a]/5"
          >
            <div className="space-y-10">
              <div>
                <h2 className="text-[10px] uppercase tracking-[0.4em] text-[#a3bfa3] mb-4 font-bold">Ubicación</h2>
                <p className="text-2xl">El Raval, 5<br />12530 Burriana, Castelló</p>
                <p className="mt-4 text-[#a3bfa3] font-sans text-lg">+34 642 00 27 21</p>
              </div>

              <div>
                <h2 className="text-[10px] uppercase tracking-[0.4em] text-[#a3bfa3] mb-4 font-bold">Nuestros Horarios</h2>
                <ul className="space-y-4 text-lg">
                  <li className="flex justify-between border-b border-[#f5f2ed] pb-2">
                    <span className="font-medium">Lunes a Jueves</span>
                    <span className="opacity-70 text-sm">09:00–13:30 | 16:30–21:15</span>
                  </li>
                  <li className="flex justify-between border-b border-[#f5f2ed] pb-2">
                    <span className="font-medium">Viernes</span>
                    <span className="opacity-70 text-sm">09:00–13:00</span>
                  </li>
                  <li className="flex justify-between opacity-30">
                    <span>Sábados y Domingos</span>
                    <span className="text-sm">Talleres especiales</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href="https://wa.me/34642002721" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-[#3a4d3a] text-[#f5f2ed] px-8 py-5 rounded-full hover:bg-[#a3bfa3] hover:text-white transition-all duration-500 uppercase tracking-[0.3em] text-[10px]"
              >
                Enviar un WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Mapa Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="h-[500px] md:h-auto rounded-[3rem] overflow-hidden shadow-md border-8 border-white"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.841571279581!2d-0.08472532345524316!3d39.88899898741006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd600f77239f605b%3A0xc07a8277252033c7!2sCarrer%20del%20Raval%2C%205%2C%2012530%20Borriana%2C%20Castell%C3%B3!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              className="grayscale-[30%] hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* FOOTER (Copiado de la Home para consistencia) */}
      <footer className="relative border-t border-[#3a4d3a]/5 mt-auto">
        <div className="absolute inset-0 bg-[#e0eaf0]/20 -z-10" />
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-16 text-[#3a4d3a]">
          <div className="space-y-4">
            <h3 className="text-xl uppercase tracking-widest">Sukhi Yoga</h3>
            <p className="text-sm font-light opacity-60 italic">Paz, escucha y transformación en Burriana.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.4em] opacity-40 font-sans font-bold">Ubicación</h4>
            <p className="text-sm font-light leading-relaxed">El Raval, 5<br />12530 Burriana, Castelló</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.4em] opacity-40 font-sans font-bold">Conecta</h4>
            <div className="flex gap-6 text-sm font-light underline underline-offset-4 decoration-[#3a4d3a]/20">
              <a href="https://instagram.com/sukhiyogabr" target="_blank" className="hover:opacity-50 transition-opacity">Instagram</a>
              <a href="https://www.facebook.com/profile.php?id=61552917985018" target="_blank" className="hover:opacity-50 transition-opacity">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}