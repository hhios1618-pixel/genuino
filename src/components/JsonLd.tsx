import { contact } from "@/data/site";
import { siteName, siteUrl } from "@/lib/seo";

const studioId = `${siteUrl}/#studio`;
const founderId = `${siteUrl}/#fran-g-genuino`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      url: siteUrl,
      inLanguage: "es-CL",
      publisher: { "@id": studioId },
    },
    {
      "@type": "Organization",
      "@id": studioId,
      name: siteName,
      url: siteUrl,
      description:
        "Productora musical fundada por Fran G Genuino. Producción musical, videoclips y gestión de medios en radio, televisión y prensa.",
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
      areaServed: ["Chile", "Latinoamérica"],
      knowsAbout: ["Producción musical", "Videoclips", "Gestión de medios", "Booking radial", "Management de artistas"],
    },
    {
      "@type": "Person",
      "@id": founderId,
      name: "Fran G Genuino",
      url: `${siteUrl}/perfil`,
      image: `${siteUrl}/profile/fran-g-street-valparaiso.jpg`,
      sameAs: [contact.instagram.href],
      affiliation: { "@id": studioId },
      jobTitle: "Cantante, compositor y productor",
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
