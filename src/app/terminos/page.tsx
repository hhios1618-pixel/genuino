import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Términos",
  description:
    "Términos de uso de Genuino Family para contenido, servicios, enlaces externos y solicitudes comerciales.",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <PageHeader eyebrow="Legal" title="Términos y condiciones" />
        <section className="shell pb-32">
          <div className="max-w-2xl space-y-6 border-t border-line pt-8 text-lg leading-relaxed text-bone/70">
            <p>
              El contenido de este sitio presenta el trabajo, servicios y trayectoria
              de Genuino Family y Fran G Genuino. Las marcas,
              canciones, videos e imágenes de terceros pertenecen a sus respectivos
              titulares.
            </p>
            <p>
              Las solicitudes enviadas desde el sitio no constituyen una contratación
              automática. Cada proyecto se confirma mediante propuesta, alcance,
              tiempos y condiciones acordadas por las partes.
            </p>
            <p>
              Los enlaces externos a plataformas de música, video o redes sociales
              se ofrecen como referencia pública de catálogo y actividad profesional.
            </p>
            <p>
              El portal privado, cuando se habilite para clientes, administración o
              revisión legal, se utilizará solo para información asociada a proyectos,
              materiales, acuerdos y entregas autorizadas por las partes.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
