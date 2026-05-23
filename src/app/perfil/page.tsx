import About from "@/components/About";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function PerfilPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <About />
      </main>
      <Footer />
    </>
  );
}
