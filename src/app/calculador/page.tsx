import type { Metadata } from "next";
import Footer from "@/components/Footer";
import LaunchDesigner from "@/components/LaunchDesigner";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Diseñador de lanzamiento | Genuino Music",
  description:
    "Calculador interactivo para diseñar un lanzamiento urbano con beat, mezcla vocal, master, video y marketing artístico en Chile.",
  alternates: {
    canonical: "/calculador",
  },
  keywords: [
    "producción urbana premium",
    "marketing artístico Chile",
    "desarrollo de carrera musical",
    "calculador lanzamiento musical",
  ],
};

export default function CalculadorPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <LaunchDesigner />
      </main>
      <Footer />
    </>
  );
}
