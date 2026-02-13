"use client";
import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  visible: boolean;
  onInicioClick?: () => void;
}

export default function Navbar({ visible, onInicioClick }: NavbarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 80],
    ["rgba(245, 242, 237, 0)", "rgba(245, 242, 237, 0.98)"]
  );

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Experiencias", href: "/experiencias" },
    { name: "Contacto", href: "/contacto" },
  ];

  const handleInicio = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      if (onInicioClick) onInicioClick();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        style={{ backgroundColor, backdropFilter: "blur(12px)" }}
        initial={{ opacity: 0, y: -20 }}
        animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-[150] flex justify-between items-center px-6 md:px-12 py-4 md:py-6 ${
          visible ? "pointer-events-auto" : "pointer-events-none"
        } border-b border-[#3a4d3a]/5`}
      >
        {/* LOGO - Ajustado tamaño en móvil para que no rompa el layout */}
        <Link href="/" onClick={handleInicio} className="z-[160] transition-transform duration-300 hover:scale-105">
          <img 
            src="/logo.png" 
            alt="Sukhi Yoga Logo" 
            className="h-14 md:h-28 w-auto object-contain" 
          />
        </Link>
        
        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.4em] text-[#3a4d3a]">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              onClick={link.href === "/" ? handleInicio : undefined}
              className={`hover:opacity-40 transition-opacity ${pathname === link.href ? "font-bold border-b-2 border-[#3a4d3a]/30" : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* MOBILE BURGER BUTTON */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-[160] p-2 text-[#3a4d3a]"
          aria-label="Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
              className="w-full h-[1.5px] bg-current origin-center"
            />
            <motion.span 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-full h-[1.5px] bg-current"
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
              className="w-full h-[1.5px] bg-current origin-center"
            />
          </div>
        </button>
      </motion.nav>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[140] bg-[#f5f2ed] flex flex-col items-center justify-center gap-12"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.href === "/") handleInicio(e);
                  setIsOpen(false);
                }}
                className="text-2xl uppercase tracking-[0.5em] text-[#3a4d3a] font-light"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}