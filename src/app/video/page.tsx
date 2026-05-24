import type { Metadata } from "next";
import CollaborationNetwork from "@/components/CollaborationNetwork";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import VideoShowcase from "@/components/VideoShowcase";

export const metadata: Metadata = {
  title: "Video | Genuino Music",
  description:
    "Videos oficiales, backstage, contenido social y producción audiovisual de Fran G Genuino y Genuino Family.",
};

export default function VideoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <VideoShowcase />
        <CollaborationNetwork />
      </main>
      <Footer />
    </>
  );
}
