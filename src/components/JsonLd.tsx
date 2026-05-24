const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MusicRecordingStudio",
      "@id": "https://genuino-five.vercel.app/#studio",
      name: "Genuino Music",
      url: "https://genuino-five.vercel.app",
      image: "https://genuino-five.vercel.app/profile/fran-g-studio-console.jpg",
      address: {
        "@type": "PostalAddress",
        addressCountry: "CL",
        addressRegion: "Valparaíso",
      },
      areaServed: ["Chile", "Latinoamérica"],
      makesOffer: [
        "Producción urbana premium",
        "Marketing artístico Chile",
        "Desarrollo de carrera musical",
        "Mezcla y mastering",
        "Videoclips y contenido",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://genuino-five.vercel.app/#fran-g-genuino",
      name: "Fran G Genuino",
      url: "https://genuino-five.vercel.app/perfil",
      affiliation: {
        "@id": "https://genuino-five.vercel.app/#studio",
      },
      jobTitle: "Productor musical y director artístico",
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
