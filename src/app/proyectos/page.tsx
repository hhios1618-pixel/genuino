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
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
