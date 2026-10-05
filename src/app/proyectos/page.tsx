import type { Metadata } from "next";
import CaseStack from "@/components/CaseStack";
import ClosingCTA from "@/components/ClosingCTA";
import FieldPhotos from "@/components/FieldPhotos";
import Footer from "@/components/Footer";
import MediaCatalog from "@/components/MediaCatalog";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Reels from "@/components/Reels";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Producción general, colaboraciones y gestión de medios de Genuino Family: Antonio Ríos, Diego Smith y GO.",
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
            { label: "Medios", value: "TVN, Chilevisión, Vía X y radio" },
            { label: "Periodo", value: "2023 — hoy" },
          ]}
        />
        <CaseStack
          index="01"
          showAllLink={false}
          title="Destacados"
          intro="Casos con producción general, dirección de singles y campañas en televisión, radio y prensa."
        />
        <MediaCatalog index="02" />
        <Reels index="03" />
        <FieldPhotos index="04" />
        <ClosingCTA index="05" />
      </main>
      <Footer />
    </>
  );
}
