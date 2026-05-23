import { ArrowDownRight, Play } from "lucide-react";
import { media } from "@/data/site";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[92svh] overflow-hidden pt-28">
      <div className="absolute inset-0 opacity-75">
        <video
          className="animate-slow-pan absolute inset-[-4%] h-[108%] w-[108%] object-cover"
          src={media.liveSession}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Registro audiovisual de Genuino en vivo"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.94),rgba(5,5,5,0.56)_46%,rgba(5,5,5,0.9)),linear-gradient(180deg,rgba(5,5,5,0.28),rgba(5,5,5,0.74))]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      <div className="section-shell relative z-10 grid min-h-[calc(92svh-7rem)] items-end gap-10 pb-14 md:grid-cols-[1.02fr_0.78fr] md:pb-20">
        <div className="animate-lift-in max-w-3xl" data-reveal>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.36em] text-[#d8b76b]">
            Fran G Genuino / Genuino Family
          </p>
          <h1 className="max-w-3xl text-[clamp(3.25rem,9vw,6.7rem)] font-medium leading-[0.95] text-white">
            Genuino
          </h1>
          <p className="editorial-serif mt-7 max-w-2xl text-balance text-2xl leading-8 text-white/78 md:text-3xl">
            Produccion urbana, marketing artistico y desarrollo de carrera para
            artistas que necesitan canciones, imagen, prensa y posicionamiento real.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#proyectos"
              data-magnetic
              data-cursor="Explorar"
              className="premium-cta inline-flex h-13 items-center justify-center gap-3 rounded-full px-7 text-sm font-semibold text-[#090806] transition hover:-translate-y-0.5"
            >
              Ver catalogo y prueba social <ArrowDownRight size={16} />
            </a>
            <a
              href="#contacto"
              data-magnetic
              data-cursor="Contacto"
              className="ghost-cta inline-flex h-13 items-center justify-center gap-3 rounded-full px-7 text-sm font-medium text-white/90 transition hover:-translate-y-0.5 hover:border-[#d8b76b]/50"
            >
              Desarrollar mi carrera
            </a>
          </div>
        </div>

        <div className="cinematic-panel relative mb-2 overflow-hidden rounded-[2rem] p-4" data-reveal>
          <div className="aspect-[4/5] overflow-hidden rounded-[1.45rem] border border-white/10 bg-[#090909]">
            <div className="relative h-full">
              <video
                className="glitch-media absolute inset-0 h-full w-full object-cover"
                src={media.studioSession}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Sesion de estudio Genuino"
                data-parallax
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(216,183,107,0.12),transparent_28%),linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.84))]" />
              <div className="absolute inset-x-6 top-6 flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-white/48">
                <span>Studio footage</span>
                <span>Genuino actual</span>
              </div>
              <div className="absolute inset-0 grid place-items-center">
                <div className="grid size-16 place-items-center rounded-full border border-white/18 bg-white/10 text-white backdrop-blur-md">
                  <Play size={20} fill="currentColor" />
                </div>
              </div>
              <div className="absolute inset-x-6 bottom-6">
                <div className="waveform h-14 rounded-full border border-white/10 bg-white/[0.03]" />
                <p className="mt-4 text-sm leading-6 text-white/62">
                  Sesiones reales, piezas sociales y registros de performance
                  convertidos en presencia artistica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
