import type { Metadata } from "next";
import CaseStack from "@/components/CaseStack";
import ClosingCTA from "@/components/ClosingCTA";
import FieldPhotos from "@/components/FieldPhotos";
import Footer from "@/components/Footer";
import MediaCatalog from "@/components/MediaCatalog";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Reels from "@/components/Reels";
import WorkVolume from "@/components/WorkVolume";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/proyectos">): Promise<Metadata> {
  return pageMetadata((await params).lang, {
    title: { es: "Proyectos", en: "Projects" },
    description: {
      es: "Producción general, colaboraciones y gestión de medios de Genuino Family: Antonio Ríos, Diego Smith y GO.",
      en: "Lead production, collaborations and media relations by Genuino Family for Antonio Ríos, Diego Smith and GO.",
    },
    path: "/proyectos",
  });
}

export default function ProyectosPage() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <PageHeader
          eyebrow="Genuino Family"
          title={{ es: "Proyectos", en: "Projects" }}
          intro={{
            es: "Producción general, colaboraciones y gestión de medios para artistas en Chile.",
            en: "Lead production, collaborations and media relations for artists in Chile.",
          }}
          meta={[
            { label: { es: "Artistas", en: "Artists" }, value: "Antonio Ríos, Diego Smith, GO" },
            { label: { es: "Medios", en: "Media" }, value: { es: "TVN, Chilevisión, Vía X y radio", en: "TVN, Chilevisión, Vía X & radio" } },
            { label: { es: "Periodo", en: "Active" }, value: { es: "2023 — hoy", en: "2023 — now" } },
          ]}
        />
        <CaseStack
          index="01"
          showAllLink={false}
          title={{ es: "Destacados", en: "Featured" }}
          intro={{
            es: "Casos con producción general, dirección de singles y campañas en televisión, radio y prensa.",
            en: "Lead production, single direction and campaigns across TV, radio and press.",
          }}
        />
        <WorkVolume index="02" />
        <MediaCatalog index="03" />
        <Reels index="04" />
        <FieldPhotos index="05" />
        <ClosingCTA index="06" />
      </main>
      <Footer />
    </>
  );
}
