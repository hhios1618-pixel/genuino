import type { Metadata } from "next";
import CaseStack from "@/components/CaseStack";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";
import MediaCatalog from "@/components/MediaCatalog";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Reels from "@/components/Reels";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Producción general, colaboraciones y gestión de medios de Genuino Family: Diego Smith, Antonio Ríos, Angie Tu Cumbiera y GO.",
  alternates: { canonical: "/proyectos" },
};

export default function ProyectosPage() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <PageHeader
          eyebrow="Genuino Family"
          title="Proyectos"
          intro="Producción general, colaboraciones y gestión de medios para artistas en Chile."
          meta={[
            { label: "Artistas", value: "Antonio Ríos, Diego Smith, GO" },
            { label: "Medios", value: "Radio, TV y prensa" },
            { label: "Periodo", value: "2023 — hoy" },
          ]}
        />
        <CaseStack
          index="01"
          showAllLink={false}
          title="Destacados"
          intro="Casos con producción general, uniones artísticas y campaña en medios."
        />
        <MediaCatalog index="02" />
        <Reels index="03" />
        <ClosingCTA index="04" />
      </main>
      <Footer />
    </>
  );
}
