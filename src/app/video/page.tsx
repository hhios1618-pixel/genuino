import type { Metadata } from "next";
import CollaborationNetwork from "@/components/CollaborationNetwork";
import Footer from "@/components/Footer";
import InsideTheBeat from "@/components/InsideTheBeat";
import Navbar from "@/components/Navbar";
import VideoShowcase from "@/components/VideoShowcase";

export const metadata: Metadata = {
  title: "Video | Genuino Music",
  description:
    "Videos oficiales, backstage, contenido social y producción audiovisual de Fran G Genuino y Genuino Family.",
  alternates: {
    canonical: "/video",
  },
  keywords: ["videoclips urbanos", "contenido musical", "producción audiovisual musical", "marketing artístico Chile"],
};

export default function VideoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <VideoShowcase />
        <InsideTheBeat />
        <CollaborationNetwork />
      </main>
      <Footer />
    </>
  );
}
