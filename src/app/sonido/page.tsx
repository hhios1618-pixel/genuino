import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SoundShowcase from "@/components/SoundShowcase";
import StudioTour from "@/components/StudioTour";

export const metadata: Metadata = {
  title: "Sonido | Genuino Music",
  description:
    "Catálogo audiovisual, canciones y colaboraciones de Fran G Genuino con foco en sonido urbano premium, identidad y presencia pública.",
  alternates: {
    canonical: "/sonido",
  },
  keywords: ["sonido urbano premium", "producción urbana premium", "mezcla urbana", "Fran G Genuino"],
};

export default function SonidoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <SoundShowcase />
        <StudioTour />
      </main>
      <Footer />
    </>
  );
}
