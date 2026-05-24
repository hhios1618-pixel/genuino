import type { Metadata } from "next";
import { Archivo_Black, Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
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

const archivoBlack = Archivo_Black({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://genuino-five.vercel.app"),
  title: "Genuino Music | Fran G Genuino",
  description:
    "Productora musical premium de Fran G Genuino: producción urbana, marketing artístico Chile, videoclips y desarrollo de carrera musical.",
  keywords: [
    "Genuino",
    "productora musical",
    "producción urbana premium",
    "producción musical",
    "mezcla",
    "mastering",
    "dirección artística",
    "marketing artístico",
    "marketing artístico Chile",
    "desarrollo de carrera musical",
    "Fran G Genuino",
    "Genuino Family",
  ],
  authors: [{ name: "Genuino Music" }],
  creator: "Fran G Genuino",
  publisher: "Genuino Music",
  category: "Music production",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Genuino Music | Fran G Genuino",
    description:
      "Producción urbana premium, desarrollo de artistas, videoclips, prensa y marketing artístico desde Genuino Family.",
    url: "https://genuino-five.vercel.app",
    siteName: "Genuino Music",
    images: [
      {
        url: "/profile/fran-g-studio-console.jpg",
        width: 1200,
        height: 1200,
        alt: "Fran G Genuino en estudio",
      },
    ],
    type: "website",
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Genuino Music | Fran G Genuino",
    description:
      "Producción urbana premium, desarrollo de artistas, videoclips, prensa y marketing artístico desde Genuino Family.",
    images: ["/profile/fran-g-studio-console.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${archivoBlack.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd />
        <ExperienceLayer>{children}</ExperienceLayer>
      </body>
    </html>
  );
}
