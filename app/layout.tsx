import type { Metadata } from "next";
import "./globals.css";
import WspFloat from "../components/WspFloat";

export const metadata: Metadata = {
  title: "Sukhi Yoga Burriana",
  description: "Espacio de yoga, calma y bienestar en el corazón del Raval.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased selection:bg-[#3a4d3a] selection:text-[#f5f2ed]">
        {children}
        <WspFloat />
      </body>
    </html>
  );
}
