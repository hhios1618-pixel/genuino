import type { Metadata } from "next";
import Footer from "@/components/Footer";
import InsideTheBeat from "@/components/InsideTheBeat";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import StudioTour from "@/components/StudioTour";
import Manifesto from "@/components/Manifesto";
import VideoTestimonials from "@/components/VideoTestimonials";

export const metadata: Metadata = {
  title: "Servicios | Genuino Music",
  description:
    "Producción urbana premium, mezcla, mastering, dirección artística, videoclips, marketing artístico Chile y desarrollo de carrera musical.",
  alternates: {
    canonical: "/servicios",
  },
  keywords: ["producción urbana premium", "mezcla y mastering urbano", "marketing artístico Chile", "desarrollo de carrera musical"],
};

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Services />
        <VideoTestimonials />
        <StudioTour />
        <InsideTheBeat />
        <Manifesto />
      </main>
      <Footer />
    </>
  );
}
