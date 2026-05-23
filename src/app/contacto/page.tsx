import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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
