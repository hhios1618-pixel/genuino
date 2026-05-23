import { ArrowUpRight, Music2 } from "lucide-react";
import { tracks } from "@/data/site";

export default function SoundShowcase() {
  return (
    <section id="sonido" className="py-20 md:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#d8b76b]">
            Catalogo y repertorio
          </p>
          <h2 className="mt-5 max-w-xl text-3xl font-medium tracking-[-0.03em] text-white md:text-5xl">
            Canciones que funcionan como carta de presentacion.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/62">
            Un productor musical serio no inventa maquetas para decorar una web.
            Muestra canciones, colaboraciones y piezas publicas que explican su
            lectura de mercado, sonido y audiencia.
          </p>
        </div>

        <div className="rounded-[2rem] border hairline bg-[#080807] p-3">
          {tracks.map((track, index) => (
            <a
              key={track.title}
              href={track.href}
              target="_blank"
              rel="noreferrer"
              className="group grid gap-4 rounded-[1.45rem] border border-transparent p-5 transition hover:border-[#d8b76b]/28 hover:bg-white/[0.035] sm:grid-cols-[auto_1fr_auto] sm:items-center"
            >
              <div className="grid size-12 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-[#d8b76b]">
                <Music2 size={18} />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs text-white/34">
                    0{index + 1}
                  </span>
                  <h3 className="text-2xl font-medium tracking-[-0.02em] text-white">
                    {track.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm text-[#d8b76b]/76">{track.role}</p>
                <p className="mt-4 text-sm leading-6 text-white/52">{track.mood}</p>
              </div>
              <span className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/10 px-4 text-sm text-white/62 transition group-hover:border-[#d8b76b]/40 group-hover:text-[#f8e7b3]">
                Abrir pieza <ArrowUpRight size={15} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
