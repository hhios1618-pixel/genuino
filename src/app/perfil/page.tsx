import About from "@/components/About";
import CareerProof from "@/components/CareerProof";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function PerfilPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <About />
        <CareerProof />
      </main>
      <Footer />
    </>
  );
}
