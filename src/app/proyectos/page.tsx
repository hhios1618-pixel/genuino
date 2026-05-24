import CollaborationNetwork from "@/components/CollaborationNetwork";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Navbar from "@/components/Navbar";

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
