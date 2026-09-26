import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Privacidad",
  description:
    "Política de privacidad de Genuino Family para contacto comercial, datos de proyectos y comunicaciones del estudio.",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <PageHeader eyebrow="Legal" title="Política de privacidad" />
        <section className="shell pb-32">
          <div className="max-w-2xl space-y-6 border-t border-line pt-8 text-lg leading-relaxed text-bone/70">
            <p>
              Genuino Family utiliza la información enviada por formularios o correo
              únicamente para responder solicitudes comerciales, coordinar proyectos
              y mantener comunicaciones relacionadas con producción musical,
              contenido audiovisual y desarrollo artístico.
            </p>
            <p>
              No vendemos datos personales. La información puede incluir nombre,
              correo, detalles del proyecto, referencias y preferencias de servicio.
              Puedes solicitar actualización o eliminación escribiendo a
              contacto@genuino.studio.
            </p>
            <p>
              Si se habilitan accesos privados para clientes, administración o área
              legal, esos datos deberán tratarse como información de proyecto y
              mantenerse restringidos a las personas autorizadas.
            </p>
            <p>
              Este sitio puede enlazar a plataformas externas como YouTube,
              Instagram o Vimeo, sujetas a sus propias políticas de privacidad.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
