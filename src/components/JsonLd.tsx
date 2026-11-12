import { altius, contact, disciplines, techPillars } from "@/data/site";
import { type Lang, localePath } from "@/i18n";
import { siteName, siteUrl } from "@/lib/seo";

const studioId = `${siteUrl}/#studio`;
const founderId = `${siteUrl}/#fran-g-genuino`;
const altiusId = "https://www.altiusignite.com/#organization";

const copy = {
  es: {
    description:
      "Productora musical fundada por Fran G Genuino. Producción musical, videoclips y gestión de medios en radio, televisión y prensa.",
    areaServed: ["Chile", "Latinoamérica"],
    knowsAbout: ["Producción musical", "Videoclips", "Gestión de medios", "Booking radial", "Management de artistas"],
    jobTitle: "Cantante, compositor y productor",
  },
  en: {
    description:
      "Music production company founded by Fran G Genuino. Music production, music videos and media relations across radio, TV and press.",
    areaServed: ["Chile", "Latin America"],
    knowsAbout: ["Music production", "Music videos", "Media relations", "Radio promotion", "Artist management"],
    jobTitle: "Singer, songwriter and producer",
  },
};

export default function JsonLd({ lang }: { lang: Lang }) {
  const text = copy[lang];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: siteName,
        url: siteUrl,
        inLanguage: ["es-CL", "en"],
        publisher: { "@id": studioId },
      },
      {
        "@type": "Organization",
        "@id": studioId,
        name: siteName,
        url: siteUrl,
        description: text.description,
        email: contact.email,
        image: `${siteUrl}/profile/fran-g-studio-console.jpg`,
        address: {
          "@type": "PostalAddress",
          addressCountry: "CL",
          addressRegion: "Valparaíso",
        },
        logo: `${siteUrl}/brand/genuino-family.png`,
        foundingDate: "2023-08",
        founder: { "@id": founderId },
        sameAs: [contact.youtube.href, contact.instagram.href],
        areaServed: text.areaServed,
        knowsAbout: text.knowsAbout,
        /* Servicios que ofrece; Tecnología la presta su brazo tecnológico, Altius Ignite */
        makesOffer: [
          ...disciplines.map((discipline) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: discipline.name[lang],
              description: discipline.line[lang],
              provider: { "@id": studioId },
            },
          })),
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: lang === "es" ? "Tecnología: web, CRM y agentes de IA" : "Technology: web, CRM and AI agents",
              description: techPillars.map((pillar) => pillar.name[lang]).join(" · "),
              url: `${siteUrl}${localePath(lang, "/tecnologia")}`,
              provider: { "@id": altiusId },
            },
          },
        ],
      },
      {
        "@type": "Organization",
        "@id": altiusId,
        name: altius.name,
        url: "https://www.altiusignite.com",
        description:
          lang === "es"
            ? "Brazo tecnológico de Genuino Family: sitio, CRM y agentes de IA con Atlas ONE."
            : "Technology arm of Genuino Family: websites, CRM and AI agents with Atlas ONE.",
      },
      {
        "@type": "Person",
        "@id": founderId,
        name: "Fran G Genuino",
        url: `${siteUrl}${localePath(lang, "/perfil")}`,
        image: `${siteUrl}/profile/fran-g-street-valparaiso.jpg`,
        // Instagram personal de Fran; el de contact.instagram es el de la productora
        sameAs: ["https://instagram.com/franggenuino_"],
        affiliation: { "@id": studioId },
        jobTitle: text.jobTitle,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
