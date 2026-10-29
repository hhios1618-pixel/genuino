import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Archivo, Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import ExperienceLayer from "@/components/ExperienceLayer";
import JsonLd from "@/components/JsonLd";
import { siteName, siteUrl } from "@/lib/seo";
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

const description =
  "Genuino Family, productora fundada por Fran G Genuino. Producción musical, videoclips y gestión de medios en radio, televisión y prensa. Chile.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Genuino Family — Productora musical",
    template: "%s — Genuino Family",
  },
  description,
  keywords: [
    "Genuino Family",
    "Fran G Genuino",
    "productora musical Chile",
    "booking radial Chile",
    "gestión de medios música",
    "producción musical urbana",
    "videoclips Chile",
    "Antonio Ríos",
    "Diego Smith",
  ],
  authors: [{ name: "Genuino Family" }],
  creator: "Fran G Genuino",
  publisher: "Genuino Family",
  category: "Music production",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  // Search Console: el token se carga en Vercel; con verificación por DNS puede quedar vacío
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  openGraph: {
    title: "Genuino Family — Productora musical",
    description,
    url: "/",
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
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Genuino Family — Productora musical",
    description,
    images: ["/brand/og.png"],
  },
};

// Google Analytics 4: solo se carga si el ID existe en el entorno (Vercel → Environment Variables)
const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        <JsonLd />
        <ExperienceLayer>{children}</ExperienceLayer>
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
