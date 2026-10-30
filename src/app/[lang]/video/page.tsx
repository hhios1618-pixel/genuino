import type { Metadata } from "next";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import ReleaseGrid from "@/components/ReleaseGrid";
import Reels from "@/components/Reels";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/video">): Promise<Metadata> {
  return pageMetadata((await params).lang, {
    title: "Video",
    description: {
      es: "Videoclips, producciones y registro de rodaje de Genuino Family y Fran G Genuino.",
      en: "Music videos, productions and behind-the-scenes footage from Genuino Family and Fran G Genuino.",
    },
    path: "/video",
  });
}

export default function VideoPage() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <PageHeader
          eyebrow={{ es: "Audiovisual", en: "Visuals" }}
          title="Video"
          intro={{
            es: "Videoclips producidos o gestionados por Genuino Family, y registro de estudio y rodaje.",
            en: "Music videos produced or managed by Genuino Family, plus footage from the studio and on set.",
          }}
        />
        <ReleaseGrid index="01" label={{ es: "Videoclips", en: "Music videos" }} />
        <Reels index="02" />
        <ClosingCTA index="03" />
      </main>
      <Footer />
    </>
  );
}
