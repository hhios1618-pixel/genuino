import type { Metadata } from "next";
import About from "@/components/About";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Timeline from "@/components/Timeline";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/perfil">): Promise<Metadata> {
  return pageMetadata((await params).lang, {
    title: "Fran G Genuino",
    description: {
      es: "Fran G Genuino: cantante, compositor y productor chileno. Solista desde 2007 y fundador de Genuino Family.",
      en: "Fran G Genuino: Chilean singer, songwriter and producer. Solo artist since 2007 and founder of Genuino Family.",
    },
    path: "/perfil",
  });
}

export default function PerfilPage() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <PageHeader eyebrow={{ es: "Fundador de Genuino Family", en: "Founder of Genuino Family" }} title="Fran G Genuino" />
        <About />
        <Timeline index="02" label={{ es: "Carrera", en: "Career" }} />
        <ClosingCTA index="03" />
      </main>
      <Footer />
    </>
  );
}
