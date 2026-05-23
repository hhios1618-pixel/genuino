import About from "@/components/About";
import Contact from "@/components/Contact";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import SoundShowcase from "@/components/SoundShowcase";
import VideoShowcase from "@/components/VideoShowcase";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <FeaturedProjects />
        <SoundShowcase />
        <Gallery />
        <VideoShowcase />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
