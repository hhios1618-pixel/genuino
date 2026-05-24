import type { Metadata } from "next";
import { Archivo_Black, Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import ExperienceLayer from "@/components/ExperienceLayer";
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
    "Productora musical y plataforma artística de Fran G Genuino: producción urbana, desarrollo de artistas, videoclips, prensa y marketing artístico.",
  keywords: [
    "Genuino",
    "productora musical",
    "producción musical",
    "mezcla",
    "mastering",
    "dirección artística",
    "marketing artístico",
    "Fran G Genuino",
    "Genuino Family",
  ],
  openGraph: {
    title: "Genuino Music | Fran G Genuino",
    description:
      "Producción urbana, desarrollo de artistas, videoclips, prensa y marketing artístico desde Genuino Family.",
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
      "Producción urbana, desarrollo de artistas, videoclips, prensa y marketing artístico desde Genuino Family.",
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
        <ExperienceLayer>{children}</ExperienceLayer>
      </body>
    </html>
  );
}
