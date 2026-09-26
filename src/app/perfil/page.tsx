import type { Metadata } from "next";
import About from "@/components/About";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Timeline from "@/components/Timeline";

export const metadata: Metadata = {
  title: "Fran G Genuino",
  description:
    "Fran G Genuino: cantante, compositor y productor chileno. Solista desde 2007 y fundador de Genuino Family.",
  alternates: { canonical: "/perfil" },
};

export default function PerfilPage() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <PageHeader eyebrow="Fundador de Genuino Family" title="Fran G Genuino" />
        <About />
        <Timeline index="02" />
        <ClosingCTA index="03" />
      </main>
      <Footer />
    </>
  );
}
