import type { Metadata } from "next";

/* Dominio oficial: canonical, sitemap, Open Graph y datos estructurados salen de aquí */
export const siteUrl = "https://www.genuinofamily.cl";
export const siteName = "Genuino Family";

const ogImage = { url: "/brand/og.png", width: 1200, height: 630, alt: siteName };

/*
  Metadatos de cada página. Next no fusiona openGraph entre layout y página,
  así que cada una declara su título, descripción y URL completos para que
  Google, WhatsApp e Instagram muestren la página correcta y no la portada.
*/
export function pageMetadata({
  title,
  description,
  path,
  index = true,
}: {
  title: string;
  description: string;
  path: string;
  index?: boolean;
}): Metadata {
  const fullTitle = `${title} — ${siteName}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    ...(index ? {} : { robots: { index: false, follow: false } }),
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName,
      images: [ogImage],
      type: "website",
      locale: "es_CL",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  };
}
