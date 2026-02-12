"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Home() {
  const [showLanding, setShowLanding] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="bg-[#f5f2ed] min-h-screen font-serif text-[#3a4d3a]">
      
      <Navbar visible={showLanding} onInicioClick={() => setShowLanding(true)} />

      <AnimatePresence mode="wait">
        {!showLanding ? (
          <motion.section
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f5f2ed] px-6 text-center"
          >
            <h1 className="text-6xl md:text-8xl mb-8 tracking-tight text-[#3a4d3a]">Sukhi Yoga</h1>
            <p className="text-xl md:text-2xl font-light italic max-w-3xl mb-12 opacity-90 leading-relaxed text-[#3a4d3a]/80">
              "Un espacio de calma, escucha y transformación donde el cuerpo, la respiración y la mente se encuentran."
            </p>
            <button
              onClick={() => setShowLanding(true)}
              className="group relative border border-[#3a4d3a] px-14 py-5 rounded-full overflow-hidden transition-all duration-500 uppercase text-[10px] tracking-[0.4em]"
            >
              <span className="relative z-10 group-hover:text-[#f5f2ed] transition-colors duration-500">Comenzar el camino</span>
              <div className="absolute inset-0 bg-[#3a4d3a] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
          </motion.section>
        ) : (
          <motion.main 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            {/* HERO SECTION */}
            <section className="pt-40 pb-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="aspect-[4/5] rounded-[3rem] shadow-2xl overflow-hidden border-8 border-white"
              >
                <img src="/sala-yoga.webp" alt="Sala Sukhi Yoga" className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000" />
              </motion.div>
              
              <div className="space-y-10">
                <h2 className="text-5xl md:text-6xl leading-tight text-[#3a4d3a]">Nuestra Propuesta</h2>
                <div className="space-y-6 text-xl font-light leading-relaxed text-[#3a4d3a]/90">
                  <p>En nuestra sala de yoga te ofrecemos un espacio de calma, escucha y transformación. Un lugar donde el cuerpo, la respiración y la mente se encuentran para recuperar el equilibrio y el bienestar.</p>
                  <p>Nuestra propuesta va más allá del ejercicio físico: es un acompañamiento respetuoso hacia el autocuidado, el autoconocimiento y la conexión interior.</p>
                  <p className="italic border-l-2 border-[#d4e1d4] pl-8 py-2 opacity-80 text-lg">
                    "Seas principiante o tengas experiencia, encontrarás un espacio seguro donde avanzar a tu propio ritmo."
                  </p>
                </div>
              </div>
            </section>

            {/* SECCIÓN DISCIPLINAS CON ACENTO AZUL */}
            <section className="py-32 bg-white/40 px-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#e0eaf0]/30 rounded-full blur-3xl -mr-32 -mt-32" />
              
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20 space-y-4">
                  <h3 className="text-[10px] uppercase tracking-[0.6em] opacity-40">Lo que practicamos</h3>
                  <h2 className="text-4xl md:text-5xl">Disciplinas</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-16">
                  {/* Hatha Yoga */}
                  <motion.div whileHover={{ y: -10 }} className="group">
                    <div className="h-80 rounded-[3rem] mb-8 shadow-lg overflow-hidden border-4 border-[#d4e1d4] group-hover:border-[#e0eaf0] transition-colors duration-500">
                      <img src="/hatha-yoga.jpg" alt="Hatha Yoga" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <h4 className="text-2xl mb-4">Hatha Yoga</h4>
                    <p className="text-base opacity-70 leading-relaxed font-light">
                      Práctica consciente y accesible que fortalece el cuerpo, mejora la flexibilidad y cultiva la presencia en el aquí y el ahora.
                    </p>
                  </motion.div>

                  {/* Yoga Kurunta */}
                  <motion.div whileHover={{ y: -10 }} className="group">
                    <div className="h-80 rounded-[3rem] mb-8 shadow-lg overflow-hidden border-4 border-[#d4e1d4] group-hover:border-[#e0eaf0] transition-colors duration-500">
                      <img src="/clase2.jpg" alt="Yoga Kurunta" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <h4 className="text-2xl mb-4">Yoga Kurunta</h4>
                    <p className="text-base opacity-70 leading-relaxed font-light">
                      Uso de cuerdas para profundizar en las posturas, liberar tensiones espinales y explorar el movimiento desde un apoyo seguro.
                    </p>
                  </motion.div>

                  {/* Gestión Emocional */}
                  <motion.div whileHover={{ y: -10 }} className="group">
                    <div className="h-80 rounded-[3rem] mb-8 shadow-lg overflow-hidden border-4 border-[#d4e1d4] group-hover:border-[#e0eaf0] transition-colors duration-500">
                      <img src="/terapeutico.jpg" alt="Gestión Emocional" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <h4 className="text-2xl mb-4">Gestión Emocional</h4>
                    <p className="text-base opacity-70 leading-relaxed font-light">
                      Herramientas para comprender y regular lo que sentimos, favoreciendo una relación amable y equilibrada con nuestra vida cotidiana.
                    </p>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* SECCIÓN FINAL DE INVITACIÓN */}
            <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-12">
              <h2 className="text-4xl md:text-5xl leading-tight">¿Sientes que es el momento de empezar?</h2>
              <p className="text-xl font-light opacity-70 italic leading-relaxed">
                Descubre nuestra comunidad y las experiencias que vivimos fuera de la sala, o escríbenos para resolver cualquier duda.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <a href="/experiencias" className="px-10 py-4 bg-[#3a4d3a] text-[#f5f2ed] rounded-full uppercase text-[9px] tracking-[0.3em] hover:opacity-90 transition-opacity shadow-xl">
                  Ver Experiencias
                </a>
                <a href="/contacto" className="px-10 py-4 border border-[#3a4d3a] text-[#3a4d3a] rounded-full uppercase text-[9px] tracking-[0.3em] hover:bg-[#3a4d3a] hover:text-[#f5f2ed] transition-all">
                  Contactar ahora
                </a>
              </div>
            </section>

            {/* FOOTER GENERAL (Replicado en cada página) */}
            <footer className="relative border-t border-[#3a4d3a]/5">
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
                    <a href="https://facebook.com/..." target="_blank" className="hover:opacity-50 transition-opacity">Facebook</a>
                  </div>
                </div>
              </div>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}