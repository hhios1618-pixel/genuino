import CaseStack from "@/components/CaseStack";
import ClosingCTA from "@/components/ClosingCTA";
import CreditsMarquee from "@/components/CreditsMarquee";
import Disciplines from "@/components/Disciplines";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MediaCatalog from "@/components/MediaCatalog";
import Navbar from "@/components/Navbar";
import Statement from "@/components/Statement";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <Hero />
        <CreditsMarquee />
        <Statement />
        <CaseStack />
        <MediaCatalog />
        <Disciplines />
        <Timeline />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
