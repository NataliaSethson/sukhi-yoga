"use client";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar"; 

const momentos = [
  { 
    id: 1, 
    src: "/playa.webp", 
    title: "Yoga en la Orilla", 
    desc: "Silencio y presencia frente al mar.",
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
    <div className="bg-[#f5f2ed] min-h-screen font-serif text-[#3a4d3a]">
      
      <Navbar visible={true} />

      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-32 px-6 pb-20"
      >
        <div className="max-w-6xl mx-auto">
          {/* Cabecera */}
          <div className="mb-16 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.6em] text-[#a3bfa3] font-bold">Comunidad Sukhi</span>
            <h2 className="text-5xl md:text-6xl text-[#3a4d3a] leading-tight">Vivir el Yoga</h2>
            <p className="text-xl font-light italic opacity-70 max-w-xl pt-4">
              "Entendemos la práctica como un camino que se expande: del movimiento en la sierra a la introspección a través del arte."
            </p>
          </div>

          {/* Mosaico Artístico */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]">
            {momentos.map((foto) => (
              <motion.div
                key={foto.id}
                whileHover={{ y: -5 }}
                className={`relative group overflow-hidden rounded-[3rem] shadow-sm bg-[#e0eaf0]/30 ${foto.size}`}
              >
                <div className="absolute inset-0 bg-[#e0eaf0]/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
                
                <img 
                  src={foto.src} 
                  alt={foto.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 bg-gradient-to-t from-[#3a4d3a]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <h4 className="text-white text-xl mb-1">{foto.title}</h4>
                   <p className="text-white/80 text-[10px] uppercase tracking-widest">{foto.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <footer className="mt-32 pt-20 border-t border-[#3a4d3a]/10 relative">
          <div className="absolute inset-0 bg-[#e0eaf0]/40 -z-10" />
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 opacity-50 text-[10px] tracking-[0.4em] uppercase">
            <p>© 2026 Sukhi Yoga</p>
            <div className="flex gap-6">
               <span>Playa</span>
               <span className="text-[#a3bfa3]">•</span>
               <span>Autoconocimiento</span>
               <span className="text-[#a3bfa3]">•</span>
               <span>Sierra</span>
            </div>
            <p>Burriana</p>
          </div>
        </footer>
      </motion.main>
    </div>
  );
}