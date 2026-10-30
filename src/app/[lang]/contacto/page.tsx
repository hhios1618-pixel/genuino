import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/contacto">): Promise<Metadata> {
  return pageMetadata((await params).lang, {
    title: { es: "Contacto", en: "Contact" },
    description: {
      es: "Contacto de Genuino Family para proyectos musicales, audiovisuales, prensa y booking.",
      en: "Get in touch with Genuino Family about music, video, press and booking projects.",
    },
    path: "/contacto",
  });
}

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <PageHeader
          eyebrow={{ es: "Proyectos, prensa y booking", en: "Projects, press & booking" }}
          title={{ es: "Contacto", en: "Contact" }}
          intro={{
            es: "Cada proyecto se evalúa y cotiza según alcance, calendario y equipo.",
            en: "Every project is scoped and quoted on its own, based on reach, timeline and crew.",
          }}
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
