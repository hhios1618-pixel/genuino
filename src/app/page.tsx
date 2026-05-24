import CollaborationNetwork from "@/components/CollaborationNetwork";
import CareerProof from "@/components/CareerProof";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HomeCarousel from "@/components/HomeCarousel";
import HomeCTA from "@/components/HomeCTA";
import InsideTheBeat from "@/components/InsideTheBeat";
import LaunchDesigner from "@/components/LaunchDesigner";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import StudioTour from "@/components/StudioTour";
import VideoTestimonials from "@/components/VideoTestimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <VideoTestimonials />
        <LaunchDesigner />
        <HomeCarousel />
        <InsideTheBeat />
        <CareerProof />
        <StudioTour />
        <CollaborationNetwork />
        <Services />
        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
