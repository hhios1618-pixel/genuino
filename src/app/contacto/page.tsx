import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Contacto | Genuino Music",
  description:
    "Contacto comercial de Genuino Music para producción urbana premium, videoclips, entrevistas, marketing artístico Chile y desarrollo de carrera.",
  alternates: {
    canonical: "/contacto",
  },
  keywords: ["contacto productora musical", "producción urbana premium", "marketing artístico Chile", "desarrollo de carrera musical"],
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
