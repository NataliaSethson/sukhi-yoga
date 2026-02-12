"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface NavbarProps {
  visible: boolean;
  onInicioClick?: () => void;
}

export default function Navbar({ visible, onInicioClick }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 80],
    ["rgba(245, 242, 237, 0)", "rgba(245, 242, 237, 0.9)"]
  );

  const handleInicio = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      if (onInicioClick) onInicioClick();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleExperiencias = (e: React.MouseEvent) => {
    if (pathname !== "/") {
      e.preventDefault();
      router.push("/#experiencias");
    }
  };

  return (
    <motion.nav
      style={{ backgroundColor, backdropFilter: "blur(10px)" }}
      initial={{ opacity: 0, y: -20 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-[150] flex justify-between items-center px-6 md:px-12 py-6 ${
        visible ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <Link href="/" onClick={handleInicio} className="text-xl tracking-[0.25em] uppercase font-serif text-[#3a4d3a]">
        Sukhi Yoga
      </Link>
      
      <div className="flex items-center gap-8 text-[10px] uppercase tracking-[0.3em] text-[#3a4d3a]">
        <Link href="/" onClick={handleInicio} className="hover:opacity-40 transition-opacity hidden sm:block">Inicio</Link>
        <Link href="/#experiencias" onClick={handleExperiencias} className="hover:opacity-40 transition-opacity">Experiencias</Link>
        <Link href="/contacto" className="hover:opacity-40 transition-opacity">Contacto</Link>
      </div>
    </motion.nav>
  );
}