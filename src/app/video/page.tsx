import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import VideoShowcase from "@/components/VideoShowcase";

export default function VideoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <VideoShowcase />
      </main>
      <Footer />
    </>
  );
}
