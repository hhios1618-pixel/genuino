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
  title: "Genuino | Productora musical boutique",
  description:
    "Productora musical para artistas, marcas y piezas audiovisuales con identidad sonora, criterio creativo y precision tecnica.",
  keywords: [
    "Genuino",
    "productora musical",
    "produccion musical",
    "mezcla",
    "mastering",
    "direccion artistica",
    "musica para marcas",
  ],
  openGraph: {
    title: "Genuino | Productora musical boutique",
    description:
      "Sonido, produccion, mezcla y direccion creativa para proyectos musicales con identidad real.",
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
