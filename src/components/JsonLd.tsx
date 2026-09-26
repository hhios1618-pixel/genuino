const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://genuino-five.vercel.app/#studio",
      name: "Genuino Family",
      url: "https://genuino-five.vercel.app",
      image: "https://genuino-five.vercel.app/profile/fran-g-studio-console.jpg",
      address: {
        "@type": "PostalAddress",
        addressCountry: "CL",
        addressRegion: "Valparaíso",
      },
      logo: "https://genuino-five.vercel.app/brand/genuino-family.png",
      foundingDate: "2023-08",
      founder: { "@id": "https://genuino-five.vercel.app/#fran-g-genuino" },
      areaServed: ["Chile", "Latinoamérica"],
      knowsAbout: ["Producción musical", "Videoclips", "Gestión de medios", "Booking radial", "Management de artistas"],
    },
    {
      "@type": "Person",
      "@id": "https://genuino-five.vercel.app/#fran-g-genuino",
      name: "Fran G Genuino",
      url: "https://genuino-five.vercel.app/perfil",
      affiliation: {
        "@id": "https://genuino-five.vercel.app/#studio",
      },
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
