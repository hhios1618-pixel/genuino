import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Genuino Music | Fran G Genuino",
  description:
    "Productora musical y plataforma artistica de Fran G Genuino: produccion urbana, desarrollo de artistas, videoclips, prensa y marketing artistico.",
  keywords: [
    "Genuino",
    "productora musical",
    "produccion musical",
    "mezcla",
    "mastering",
    "direccion artistica",
    "marketing artistico",
    "Fran G Genuino",
    "Genuino Family",
  ],
  openGraph: {
    title: "Genuino Music | Fran G Genuino",
    description:
      "Produccion urbana, desarrollo de artistas, videoclips, prensa y marketing artistico desde Genuino Family.",
    type: "website",
    locale: "es_CL",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
