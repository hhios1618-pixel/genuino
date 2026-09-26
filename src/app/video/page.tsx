import type { Metadata } from "next";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import ReleaseGrid from "@/components/ReleaseGrid";
import Reels from "@/components/Reels";

export const metadata: Metadata = {
  title: "Video",
  description: "Videoclips, producciones y registro de rodaje de Genuino Family y Fran G Genuino.",
  alternates: { canonical: "/video" },
};

export default function VideoPage() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <PageHeader
          eyebrow="Audiovisual"
          title="Video"
          intro="Videoclips producidos o gestionados por Genuino Family, y registro de estudio y rodaje."
        />
        <ReleaseGrid index="01" label="Videoclips" />
        <Reels index="02" />
        <ClosingCTA index="03" />
      </main>
      <Footer />
    </>
  );
}
