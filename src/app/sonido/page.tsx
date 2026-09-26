import type { Metadata } from "next";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import ReleaseGrid from "@/components/ReleaseGrid";

export const metadata: Metadata = {
  title: "Música",
  description:
    "Catálogo de Fran G Genuino: Ella Baila Sola, Venimos de Abajo, Lejos de Ti, Champagne, Caribe y más.",
  alternates: { canonical: "/sonido" },
};

export default function SonidoPage() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <PageHeader
          eyebrow="Fran G Genuino"
          title="Música"
          intro="Catálogo de Fran G Genuino como artista: singles, colaboraciones y videos oficiales."
          meta={[
            { label: "Solista desde", value: "2007" },
            { label: "Colaboraciones", value: "GO, Arte Elegante, Hermanos Bernal" },
          ]}
        />
        <ReleaseGrid index="01" label="Videos oficiales" onlyFran />
        <ClosingCTA index="02" />
      </main>
      <Footer />
    </>
  );
}
