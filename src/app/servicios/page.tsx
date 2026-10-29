import type { Metadata } from "next";
import ClosingCTA from "@/components/ClosingCTA";
import Disciplines from "@/components/Disciplines";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Process from "@/components/Process";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Servicios",
  description:
    "Producción musical, videoclips, gestión de medios en radio, televisión y prensa, y management de artistas.",
  path: "/servicios",
});

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <PageHeader
          eyebrow="Música · Audiovisual · Medios · Management"
          title="Servicios"
          intro="Servicios para artistas, sellos y equipos de management. Contratables por separado o como proyecto integral."
        />
        <Disciplines
          index="01"
          detailed
          title="Áreas"
          label="Cuatro áreas, un solo equipo"
          intro="Alcance y entregables de cada área."
        />
        <Process index="02" />
        <ClosingCTA index="03" />
      </main>
      <Footer />
    </>
  );
}
