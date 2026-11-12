import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import TechCTA from "@/components/TechCTA";
import TechPillars from "@/components/TechPillars";
import TechProcess from "@/components/TechProcess";
import TechProof from "@/components/TechProof";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/tecnologia">): Promise<Metadata> {
  return pageMetadata((await params).lang, {
    title: { es: "Tecnología", en: "Technology" },
    description: {
      es: "Altius Ignite, el brazo tecnológico de Genuino Family: sitio, CRM y agentes de IA para artistas, sellos, eventos y marcas.",
      en: "Altius Ignite, the technology arm of Genuino Family: websites, CRM and AI agents for artists, labels, events and brands.",
    },
    path: "/tecnologia",
  });
}

export default function TecnologiaPage() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <PageHeader
          eyebrow={{ es: "Web · CRM · Inteligencia artificial", en: "Web · CRM · Artificial intelligence" }}
          title={{ es: "Tecnología", en: "Technology" }}
          intro={{
            es: "Altius Ignite es el brazo tecnológico de Genuino Family. Construye y opera el software de artistas, sellos, eventos y marcas: sitio, CRM y agentes de IA en un solo lugar.",
            en: "Altius Ignite is the technology arm of Genuino Family. It builds and runs the software behind artists, labels, events and brands: website, CRM and AI agents in one place.",
          }}
          meta={[
            { label: { es: "Partner", en: "Partner" }, value: "Altius Ignite" },
            { label: { es: "Plataforma", en: "Platform" }, value: "Atlas ONE" },
            { label: { es: "Presencia", en: "Presence" }, value: { es: "Chile · Bolivia · Brasil", en: "Chile · Bolivia · Brazil" } },
          ]}
        />
        <TechPillars index="01" />
        <TechProof index="02" />
        <TechProcess index="03" />
        <TechCTA index="04" />
      </main>
      <Footer />
    </>
  );
}
