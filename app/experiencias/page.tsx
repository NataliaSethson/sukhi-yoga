"use client";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar"; 

const momentos = [
  { 
    id: 1, 
    src: "/playa.webp", 
    title: "Expansión frente al mar", // Título más profesional
    desc: "Encontrar el equilibrio en la inmensidad.", // Descripción artística
    size: "md:col-span-2 md:row-span-2" 
  },
  { 
    id: 2, 
    src: "/arte.jpg", 
    title: "Autoconocimiento", 
    desc: "El trazo como reflejo del interior.",
    size: "md:col-span-1 md:row-span-1" 
  },
  { 
    id: 3, 
    src: "/sierras.jpg", 
    title: "Retiro en la Sierra", 
    desc: "Naturaleza, aire puro y escucha.",
    size: "md:col-span-1 md:row-span-2" 
  },
  { 
    id: 4, 
    src: "/arte2.jpg", 
    title: "Exploración Creativa", 
    desc: "Pintura consciente y calma mental.",
    size: "md:col-span-1 md:row-span-1" 
  },
];

export default function PaginaExperiencias() {
  return (
    <div className="bg-[#f5f2ed] min-h-screen font-serif text-[#3a4d3a] flex flex-col">
      
      <Navbar visible={true} />

      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-52 px-6 pb-20 flex-grow"
      >
        <div className="max-w-6xl mx-auto">
          {/* Cabecera */}
          <div className="mb-20 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.6em] text-[#a3bfa3] font-bold">Comunidad Sukhi</span>
            <h2 className="text-5xl md:text-6xl text-[#3a4d3a] leading-tight">Vivir el Yoga</h2>
            <p className="text-xl font-light italic opacity-70 max-w-xl pt-4">
              "Explorar, compartir, sentir. Llevamos la consciencia del yoga a la naturaleza y a la expresión creativa."
            </p>
          </div>

          {/* Mosaico Artístico */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-16 auto-rows-[280px]">
            {momentos.map((foto) => (
              <motion.div
                key={foto.id}
                className={`flex flex-col ${foto.size}`}
              >
                <div className="relative group overflow-hidden rounded-[3rem] shadow-sm bg-[#e0eaf0]/30 h-full">
                  <img 
                    src={foto.src} 
                    alt={foto.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                {/* Texto pegado debajo de la foto con un pequeño ajuste de margen */}
                <div className="mt-6 px-2">
                   <h4 className="text-xl text-[#3a4d3a] mb-1">{foto.title}</h4>
                   <p className="text-[#a3bfa3] text-[9px] uppercase tracking-[0.4em] font-bold font-sans">{foto.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.main>

      {/* FOOTER COMPLETO */}
      <footer className="relative border-t border-[#3a4d3a]/5 mt-32">
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
    </div>
  );
}