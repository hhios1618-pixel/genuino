import type { Metadata, Viewport } from "next";
import { Archivo, Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import ExperienceLayer from "@/components/ExperienceLayer";
import JsonLd from "@/components/JsonLd";
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
  metadataBase: new URL("https://genuino-five.vercel.app"),
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
  openGraph: {
    title: "Genuino Family — Productora musical",
    description,
    url: "https://genuino-five.vercel.app",
    siteName: "Genuino Family",
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
    </html>
  );
}
