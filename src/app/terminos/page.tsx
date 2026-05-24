import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Términos | Genuino Music",
  description:
    "Términos de uso de Genuino Music para contenido, servicios, enlaces externos y solicitudes comerciales.",
};

export default function TerminosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <section className="section-shell py-16 md:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#d8b76b]">
            Legal
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-medium text-white md:text-6xl">
            Términos y condiciones
          </h1>
          <div className="mt-10 max-w-3xl space-y-6 text-base leading-8 text-white/62">
            <p>
              El contenido de este sitio presenta el trabajo, servicios y trayectoria
              de Genuino Music, Genuino Family y Fran G Genuino. Las marcas,
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
