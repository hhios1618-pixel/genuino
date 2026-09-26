import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  title: "Acceso clientes",
  description: "Área privada de Genuino Family para clientes, administración y equipo legal.",
  alternates: { canonical: "/portal" },
  robots: { index: false, follow: false },
};

export default function PortalPage() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <PageHeader
          eyebrow="Área privada"
          title="Acceso clientes"
          intro="Espacio de trabajo para artistas, administración y asesoría legal: versiones, documentos y entregas de cada proyecto. El acceso se habilita por invitación."
        />
        <section className="shell pb-32">
          <div className="flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-bone/60">Para solicitar acceso, escribe a</p>
            <a
              href={`mailto:${contact.email}?subject=${encodeURIComponent("Solicitud de acceso al portal")}`}
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
