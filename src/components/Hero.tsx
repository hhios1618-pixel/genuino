import { ArrowDownRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[92svh] overflow-hidden pt-28">
      <div className="absolute inset-0 opacity-75">
        <div className="studio-texture animate-slow-pan absolute inset-[-4%]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.92),rgba(5,5,5,0.42)_54%,rgba(5,5,5,0.84))]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      <div className="section-shell relative z-10 grid min-h-[calc(92svh-7rem)] items-end gap-10 pb-14 md:grid-cols-[1.02fr_0.78fr] md:pb-20">
        <div className="animate-lift-in max-w-3xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.36em] text-[#d8b76b]">
            Productora musical boutique
          </p>
          <h1 className="max-w-3xl text-[clamp(3.25rem,9vw,6.7rem)] font-medium leading-[0.95] tracking-[-0.04em] text-white">
            Genuino
          </h1>
          <p className="mt-7 max-w-2xl text-balance text-lg leading-8 text-white/74 md:text-xl">
            Produccion musical, identidad sonora y direccion creativa para obras
            que necesitan criterio, profundidad y una firma propia.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#proyectos"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#f4f1ea] px-6 text-sm font-medium text-[#090806] transition hover:bg-white"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/14 px-6 text-sm font-medium text-white/88 transition hover:border-[#d8b76b]/50 hover:bg-white/7"
            >
              Conversemos <ArrowDownRight size={16} />
            </a>
          </div>
        </div>

        <div className="cinematic-panel relative mb-2 overflow-hidden rounded-[2rem] p-4">
          <div className="aspect-[4/5] overflow-hidden rounded-[1.45rem] border border-white/10 bg-[#090909]">
            <div className="studio-texture relative h-full">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(216,183,107,0.2),transparent_28%),linear-gradient(180deg,transparent,rgba(0,0,0,0.78))]" />
              <div className="absolute inset-x-6 top-6 flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-white/48">
                <span>Hero video</span>
                <span>Replace / assets</span>
              </div>
              <div className="absolute inset-0 grid place-items-center">
                <div className="grid size-16 place-items-center rounded-full border border-white/18 bg-white/10 text-white backdrop-blur-md">
                  <Play size={20} fill="currentColor" />
                </div>
              </div>
              <div className="absolute inset-x-6 bottom-6">
                <div className="waveform h-14 rounded-full border border-white/10 bg-white/[0.03]" />
                <p className="mt-4 text-sm leading-6 text-white/62">
                  Espacio listo para video de fondo, still de estudio o pieza de
                  campana.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
