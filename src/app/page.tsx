import CollaborationNetwork from "@/components/CollaborationNetwork";
import CareerProof from "@/components/CareerProof";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HomeCarousel from "@/components/HomeCarousel";
import HomeCTA from "@/components/HomeCTA";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import VideoTestimonials from "@/components/VideoTestimonials";
import WorkedSongs from "@/components/WorkedSongs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <VideoTestimonials />
        <HomeCarousel />
        <WorkedSongs />
        <CareerProof />
        <CollaborationNetwork />
        <Services />
        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
