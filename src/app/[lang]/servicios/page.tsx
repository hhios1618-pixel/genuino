import type { Metadata } from "next";
import ClosingCTA from "@/components/ClosingCTA";
import Disciplines from "@/components/Disciplines";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Process from "@/components/Process";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/servicios">): Promise<Metadata> {
  return pageMetadata((await params).lang, {
    title: { es: "Servicios", en: "Services" },
    description: {
      es: "Producción musical, videoclips, gestión de medios en radio, televisión y prensa, y management de artistas.",
      en: "Music production, music videos, radio, TV and press relations, and artist management.",
    },
    path: "/servicios",
  });
}

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <PageHeader
          eyebrow={{ es: "Música · Audiovisual · Medios · Management", en: "Music · Video · Media · Management" }}
          title={{ es: "Servicios", en: "Services" }}
          intro={{
            es: "Servicios para artistas, sellos y equipos de management. Contratables por separado o como proyecto integral.",
            en: "For artists, labels and management teams. Book a single service or the full package.",
          }}
        />
        <Disciplines
          index="01"
          detailed
          title={{ es: "Áreas", en: "What we do" }}
          label={{ es: "Cuatro áreas, un solo equipo", en: "Four disciplines, one team" }}
          intro={{ es: "Alcance y entregables de cada área.", en: "Scope and deliverables for each discipline." }}
        />
        <Process index="02" />
        <ClosingCTA index="03" />
      </main>
      <Footer />
    </>
  );
}
