import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { contact } from "@/data/site";
import { defaultLang, hasLang } from "@/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/privacidad">): Promise<Metadata> {
  return pageMetadata((await params).lang, {
    title: { es: "Privacidad", en: "Privacy" },
    description: {
      es: "Política de privacidad de Genuino Family para contacto comercial, datos de proyectos y comunicaciones del estudio.",
      en: "Genuino Family’s privacy policy for business inquiries, project data and studio communications.",
    },
    path: "/privacidad",
  });
}

const privacy = {
  es: [
    "Genuino Family utiliza la información enviada por formularios o correo únicamente para responder solicitudes comerciales, coordinar proyectos y mantener comunicaciones relacionadas con producción musical, contenido audiovisual y desarrollo artístico.",
    `No vendemos datos personales. La información puede incluir nombre, correo, detalles del proyecto, referencias y preferencias de servicio. Puedes solicitar actualización o eliminación escribiendo a ${contact.email}.`,
    "Si se habilitan accesos privados para clientes, administración o área legal, esos datos deberán tratarse como información de proyecto y mantenerse restringidos a las personas autorizadas.",
    "Usamos Google Analytics para medir de forma agregada cuántas personas visitan el sitio y qué páginas recorren. No lo usamos para identificarte ni para publicidad.",
    "Este sitio puede enlazar a plataformas externas como YouTube, Instagram o Vimeo, sujetas a sus propias políticas de privacidad.",
  ],
  en: [
    "Genuino Family uses the information you send through our forms or by email only to answer business inquiries, coordinate projects and keep in touch about music production, video content and artist development.",
    `We never sell personal data. That information may include your name, email, project details, references and service preferences. To update or delete it, email ${contact.email}.`,
    "If private access is set up for clients, admin or legal, that data is treated as project information and restricted to authorized people only.",
    "We use Google Analytics to measure, in aggregate, how many people visit the site and which pages they view. We do not use it to identify you or for advertising.",
    "This site may link to external platforms such as YouTube, Instagram or Vimeo, which are covered by their own privacy policies.",
  ],
};

export default async function Page({ params }: PageProps<"/[lang]/privacidad">) {
  const { lang: param } = await params;
  const lang = hasLang(param) ? param : defaultLang;

  return (
    <>
      <Navbar />
      <main id="contenido">
        <PageHeader eyebrow="Legal" title={{ es: "Política de privacidad", en: "Privacy policy" }} />
        <section className="shell pb-32">
          <div className="max-w-2xl space-y-6 border-t border-line pt-8 text-lg leading-relaxed text-bone/70">
            {privacy[lang].map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
