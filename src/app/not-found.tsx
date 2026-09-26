import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Arrow from "@/components/ui/Arrow";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="contenido" className="shell flex min-h-[80dvh] flex-col justify-end pb-20 pt-40">
        <p className="label">Error 404</p>
        <h1 className="display mt-6 text-[clamp(4rem,13vw,13rem)]">Página no encontrada</h1>
        <div className="mt-10 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-bone/60">La dirección no existe o fue movida.</p>
          <Link href="/" className="btn w-fit">
            Volver al inicio
            <span className="btn-icon">
              <Arrow className="size-4" direction="right" />
            </span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
