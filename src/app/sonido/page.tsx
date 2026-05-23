import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SoundShowcase from "@/components/SoundShowcase";

export default function SonidoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <SoundShowcase />
      </main>
      <Footer />
    </>
  );
}
