import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contacto",
  description:
    "Contacto de Genuino Family para proyectos musicales, audiovisuales, prensa y booking.",
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <PageHeader
          eyebrow="Proyectos, prensa y booking"
          title="Contacto"
          intro="Cada proyecto se evalúa y cotiza según alcance, calendario y equipo."
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
