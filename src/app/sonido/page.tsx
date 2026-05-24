import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SoundShowcase from "@/components/SoundShowcase";

export const metadata: Metadata = {
  title: "Sonido | Genuino Music",
  description:
    "Catálogo audiovisual, canciones y colaboraciones de Fran G Genuino con foco en sonido urbano, identidad y presencia pública.",
};

export default function SonidoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <SoundShowcase />
      </main>
      <Footer />
    </>
  );
}
