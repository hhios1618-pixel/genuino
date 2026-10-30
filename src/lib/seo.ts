import type { Metadata } from "next";
import { defaultLang, hasLang, type L, type Lang, localePath, locales, ogLocale, tr } from "@/i18n";

/* Dominio oficial: canonical, sitemap, Open Graph y datos estructurados salen de aquí */
export const siteUrl = "https://www.genuinofamily.cl";
export const siteName = "Genuino Family";

const ogImage = { url: "/brand/og.png", width: 1200, height: 630, alt: siteName };

/* Canonical propio por idioma y hreflang hacia la otra versión; x-default es la versión en español */
export function alternates(lang: Lang, path: string): Metadata["alternates"] {
  return {
    canonical: localePath(lang, path),
    languages: {
      ...Object.fromEntries(locales.map((other) => [other === "es" ? "es-CL" : other, localePath(other, path)])),
      "x-default": localePath(defaultLang, path),
    },
  };
}

/*
  Metadatos de cada página. Next no fusiona openGraph entre layout y página,
  así que cada una declara su título, descripción y URL completos para que
  Google, WhatsApp e Instagram muestren la página correcta y no la portada.
*/
export function pageMetadata(
  param: string,
  {
    title,
    description,
    path,
    index = true,
  }: {
    title: string | L;
    description: L;
    path: string;
    index?: boolean;
  },
): Metadata {
  const lang = hasLang(param) ? param : defaultLang;
  const pageTitle = tr(lang, title);
  const fullTitle = `${pageTitle} — ${siteName}`;
  return {
    title: pageTitle,
    description: tr(lang, description),
    alternates: alternates(lang, path),
    ...(index ? {} : { robots: { index: false, follow: false } }),
    openGraph: {
      title: fullTitle,
      description: tr(lang, description),
      url: localePath(lang, path),
      siteName,
      images: [ogImage],
      type: "website",
      locale: ogLocale[lang],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: tr(lang, description),
      images: [ogImage.url],
    },
  };
}
