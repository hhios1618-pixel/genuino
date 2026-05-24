import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Manifesto from "@/components/Manifesto";

export const metadata: Metadata = {
  title: "Servicios | Genuino Music",
  description:
    "Producción musical urbana, mezcla, mastering, dirección artística, videoclips, prensa y desarrollo de artistas desde Genuino Family.",
};

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Services />
        <Manifesto />
      </main>
      <Footer />
    </>
  );
}
