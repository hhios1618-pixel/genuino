import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Manifesto from "@/components/Manifesto";

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
