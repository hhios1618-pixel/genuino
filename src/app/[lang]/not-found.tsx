"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Arrow from "@/components/ui/Arrow";
import { useLang } from "@/i18n/LangProvider";

export default function NotFound() {
  const { t, href } = useLang();

  return (
    <>
      <Navbar />
      <main id="contenido" className="shell flex min-h-[80dvh] flex-col justify-end pb-20 pt-40">
        <p className="label">Error 404</p>
        <h1 className="display mt-6 text-[clamp(2rem,7vw,7rem)]">
          {t({ es: "Página no encontrada", en: "Page not found" })}
        </h1>
        <div className="mt-10 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-bone/60">
            {t({ es: "La dirección no existe o fue movida.", en: "This page doesn’t exist or has moved." })}
          </p>
          <Link href={href("/")} className="btn w-fit">
            {t({ es: "Volver al inicio", en: "Back to home" })}
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
