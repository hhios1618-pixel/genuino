import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Contacto | Genuino Music",
  description:
    "Contacto comercial de Genuino Music para producción musical, videoclips, entrevistas, marketing artístico y desarrollo de carrera.",
};

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
