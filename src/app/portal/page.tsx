import type { Metadata } from "next";
import ClientPortalPreview from "@/components/ClientPortalPreview";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Portal de clientes | Genuino Music",
  description:
    "Área privada MVP para clientes de Genuino Music con maquetas seguras, reproductor de audio y comentarios en marcas de tiempo.",
  alternates: {
    canonical: "/portal",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function PortalPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <ClientPortalPreview />
      </main>
      <Footer />
    </>
  );
}
