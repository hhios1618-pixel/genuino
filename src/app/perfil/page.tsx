import type { Metadata } from "next";
import About from "@/components/About";
import CareerProof from "@/components/CareerProof";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Perfil | Fran G Genuino",
  description:
    "Historia, trayectoria y filosofía de Fran G Genuino: artista, productor y gestor de Genuino Family desde Valparaíso, Chile.",
  alternates: {
    canonical: "/perfil",
  },
  keywords: ["Fran G Genuino", "Genuino Family", "desarrollo de carrera musical", "productor urbano Chile"],
};

export default function PerfilPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <About />
        <CareerProof />
      </main>
      <Footer />
    </>
  );
}
