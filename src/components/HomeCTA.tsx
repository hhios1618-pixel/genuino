import { ArrowRight } from "lucide-react";

export default function HomeCTA() {
  return (
    <section className="py-16 md:py-20">
      <div className="section-shell">
        <div className="grid gap-8 rounded-[2rem] border hairline bg-[linear-gradient(135deg,rgba(216,183,107,0.13),rgba(120,199,210,0.055),rgba(255,255,255,0.028))] p-6 md:grid-cols-[1fr_auto] md:items-center md:p-9" data-reveal>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#d8b76b]">
              Ruta directa
            </p>
            <h2 data-reveal-title className="mt-4 max-w-3xl text-3xl font-medium text-white md:text-5xl">
              Si el proyecto tiene que sonar y verse serio, partamos por la direccion.
            </h2>
          </div>
          <a
            href="/contacto"
            data-magnetic
            data-cursor="Contacto"
            data-cursor-mode="link"
            className="premium-cta inline-flex h-13 items-center justify-center gap-3 rounded-full px-7 text-sm font-semibold text-[#090806]"
          >
            Agendar produccion <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
