import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Archivo, Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { notFound } from "next/navigation";
import ExperienceLayer from "@/components/ExperienceLayer";
import JsonLd from "@/components/JsonLd";
import { defaultLang, hasLang, htmlLang, locales, ogLocale, tr } from "@/i18n";
import { LangProvider } from "@/i18n/LangProvider";
import { alternates, siteName, siteUrl } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

/* Solo existen /es (servido en la raíz) y /en; cualquier otro prefijo es 404 */
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const title = {
  es: "Genuino Family — Productora musical",
  en: "Genuino Family — Music production company",
};

const description = {
  es: "Genuino Family, productora fundada por Fran G Genuino. Producción musical, videoclips y gestión de medios en radio, televisión y prensa. Chile.",
  en: "Genuino Family is a Chilean music production company founded by Fran G Genuino. Music production, music videos and media relations across radio, TV and press.",
};

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang: param } = await params;
  const lang = hasLang(param) ? param : defaultLang;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: tr(lang, title),
      template: "%s — Genuino Family",
    },
    description: tr(lang, description),
    keywords: [
      "Genuino Family",
      "Fran G Genuino",
      ...(lang === "en"
        ? ["Chilean music production company", "radio promotion Chile", "music PR Latin America", "Latin urban music producer"]
        : ["productora musical Chile", "booking radial Chile", "gestión de medios música", "producción musical urbana"]),
      "Antonio Ríos",
      "Diego Smith",
    ],
    authors: [{ name: "Genuino Family" }],
    creator: "Fran G Genuino",
    publisher: "Genuino Family",
    category: "Music production",
    alternates: alternates(lang, "/"),
    robots: {
      index: true,
      follow: true,
    },
    // Search Console: el token se carga en Vercel; con verificación por DNS puede quedar vacío
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
    openGraph: {
      title: tr(lang, title),
      description: tr(lang, description),
      url: lang === defaultLang ? "/" : `/${lang}`,
      siteName,
      images: [
        {
          url: "/brand/og.png",
          width: 1200,
          height: 630,
          alt: "Genuino Family",
        },
      ],
      type: "website",
      locale: ogLocale[lang],
      alternateLocale: locales.filter((other) => other !== lang).map((other) => ogLocale[other]),
    },
    twitter: {
      card: "summary_large_image",
      title: tr(lang, title),
      description: tr(lang, description),
      images: ["/brand/og.png"],
    },
  };
}

// Google Analytics 4: solo se carga si el ID existe en el entorno (Vercel → Environment Variables)
const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLang(lang)) notFound();

  return (
    <html
      lang={htmlLang[lang]}
      className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a href="#contenido" className="skip-link">
          {tr(lang, { es: "Saltar al contenido", en: "Skip to content" })}
        </a>
        <JsonLd lang={lang} />
        <LangProvider lang={lang}>
          <ExperienceLayer>{children}</ExperienceLayer>
        </LangProvider>
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
