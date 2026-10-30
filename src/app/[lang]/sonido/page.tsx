import type { Metadata } from "next";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import ReleaseGrid from "@/components/ReleaseGrid";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/sonido">): Promise<Metadata> {
  return pageMetadata((await params).lang, {
    title: { es: "Música", en: "Music" },
    description: {
      es: "Catálogo de Fran G Genuino: Ella Baila Sola, Negra Tomasa, Venimos de Abajo, Lejos de Ti, Champagne, Caribe y más.",
      en: "Fran G Genuino’s catalog: Ella Baila Sola, Negra Tomasa, Venimos de Abajo, Lejos de Ti, Champagne, Caribe and more.",
    },
    path: "/sonido",
  });
}

export default function SonidoPage() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <PageHeader
          eyebrow="Fran G Genuino"
          title={{ es: "Música", en: "Music" }}
          intro={{
            es: "Catálogo de Fran G Genuino como artista: singles, colaboraciones y videos oficiales.",
            en: "Fran G Genuino’s work as an artist: singles, collaborations and official videos.",
          }}
          meta={[
            { label: { es: "Solista desde", en: "Solo since" }, value: "2007" },
            { label: { es: "Colaboraciones", en: "Collaborations" }, value: "Antonio Ríos, GO, Arte Elegante, Hermanos Bernal" },
          ]}
        />
        <ReleaseGrid index="01" label={{ es: "Videos oficiales", en: "Official videos" }} onlyFran />
        <ClosingCTA index="02" />
      </main>
      <Footer />
    </>
  );
}
