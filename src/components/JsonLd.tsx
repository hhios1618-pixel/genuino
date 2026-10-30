import { contact } from "@/data/site";
import { type Lang, localePath } from "@/i18n";
import { siteName, siteUrl } from "@/lib/seo";

const studioId = `${siteUrl}/#studio`;
const founderId = `${siteUrl}/#fran-g-genuino`;

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
