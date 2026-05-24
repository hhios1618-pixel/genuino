import type { Metadata } from "next";
import CollaborationNetwork from "@/components/CollaborationNetwork";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Proyectos | Genuino Music",
  description:
    "Videoclips, colaboraciones, gestión de medios y lanzamientos destacados de Fran G Genuino y Genuino Family en Chile.",
  alternates: {
    canonical: "/proyectos",
  },
  keywords: ["videoclips urbanos Chile", "producción urbana premium", "Genuino Family", "Fran G Genuino"],
};

export default function ProyectosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <FeaturedProjects />
        <CollaborationNetwork />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
