import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { contact } from "@/data/site";
import { defaultLang, hasLang, tr } from "@/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/portal">): Promise<Metadata> {
  return pageMetadata((await params).lang, {
    title: { es: "Acceso clientes", en: "Client access" },
    description: {
      es: "Área privada de Genuino Family para clientes, administración y equipo legal.",
      en: "Genuino Family’s private area for clients, admin and legal.",
    },
    path: "/portal",
    index: false,
  });
}

export default async function PortalPage({ params }: PageProps<"/[lang]/portal">) {
  const { lang: param } = await params;
  const lang = hasLang(param) ? param : defaultLang;

  return (
    <>
      <Navbar />
      <main id="contenido">
        <PageHeader
          eyebrow={{ es: "Área privada", en: "Private area" }}
          title={{ es: "Acceso clientes", en: "Client access" }}
          intro={{
            es: "Espacio de trabajo para artistas, administración y asesoría legal: versiones, documentos y entregas de cada proyecto. El acceso se habilita por invitación.",
            en: "A shared workspace for artists, admin and legal counsel: versions, documents and deliverables for every project. Access is by invitation only.",
          }}
        />
        <section className="shell pb-32">
          <div className="flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-bone/60">{tr(lang, { es: "Para solicitar acceso, escribe a", en: "To request access, email" })}</p>
            <a
              href={`mailto:${contact.email}?subject=${encodeURIComponent(
                tr(lang, { es: "Solicitud de acceso al portal", en: "Client portal access request" }),
              )}`}
              className="u-link text-[clamp(1.5rem,3vw,2.5rem)] font-medium tracking-[-0.03em]"
            >
              {contact.email}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
