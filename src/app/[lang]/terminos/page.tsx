import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { defaultLang, hasLang } from "@/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/terminos">): Promise<Metadata> {
  return pageMetadata((await params).lang, {
    title: { es: "Términos", en: "Terms" },
    description: {
      es: "Términos de uso de Genuino Family para contenido, servicios, enlaces externos y solicitudes comerciales.",
      en: "Genuino Family’s terms of use for content, services, external links and business inquiries.",
    },
    path: "/terminos",
  });
}

const terms = {
  es: [
    "El contenido de este sitio presenta el trabajo, servicios y trayectoria de Genuino Family y Fran G Genuino. Las marcas, canciones, videos e imágenes de terceros pertenecen a sus respectivos titulares.",
    "Las solicitudes enviadas desde el sitio no constituyen una contratación automática. Cada proyecto se confirma mediante propuesta, alcance, tiempos y condiciones acordadas por las partes.",
    "Los enlaces externos a plataformas de música, video o redes sociales se ofrecen como referencia pública de catálogo y actividad profesional.",
    "El portal privado, cuando se habilite para clientes, administración o revisión legal, se utilizará solo para información asociada a proyectos, materiales, acuerdos y entregas autorizadas por las partes.",
  ],
  en: [
    "This site presents the work, services and track record of Genuino Family and Fran G Genuino. Third-party trademarks, songs, videos and images belong to their respective owners.",
    "Sending an inquiry through this site does not create a contract. Every project is confirmed through a proposal setting out scope, timeline and terms agreed by both parties.",
    "External links to music, video and social platforms are provided as a public reference to our catalog and professional activity.",
    "Once enabled for clients, admin or legal review, the private portal will be used only for project-related information, materials, agreements and deliverables authorized by both parties.",
  ],
};

export default async function Page({ params }: PageProps<"/[lang]/terminos">) {
  const { lang: param } = await params;
  const lang = hasLang(param) ? param : defaultLang;

  return (
    <>
      <Navbar />
      <main id="contenido">
        <PageHeader eyebrow="Legal" title={{ es: "Términos y condiciones", en: "Terms & conditions" }} />
        <section className="shell pb-32">
          <div className="max-w-2xl space-y-6 border-t border-line pt-8 text-lg leading-relaxed text-bone/70">
            {terms[lang].map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
