import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Privacidad | Genuino Music",
  description:
    "Política de privacidad de Genuino Music para contacto comercial, datos de proyectos y comunicaciones del estudio.",
};

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <section className="section-shell py-16 md:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#d8b76b]">
            Legal
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-medium text-white md:text-6xl">
            Política de privacidad
          </h1>
          <div className="mt-10 max-w-3xl space-y-6 text-base leading-8 text-white/62">
            <p>
              Genuino Music utiliza la información enviada por formularios o correo
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
