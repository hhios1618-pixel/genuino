import { ArrowUpRight, ListMusic, Radio, Rows3 } from "lucide-react";
import { workedSongs } from "@/data/site";

export default function WorkedSongs() {
  return (
    <section id="trabajos-medios" className="border-y hairline bg-[#060606] py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-12 grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end" data-reveal>
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.34em] text-[#d8b76b]">
              <Radio size={15} />
              Radios y medios en Chile
            </p>
            <h2 data-reveal-title className="mt-5 max-w-4xl text-3xl font-medium text-white md:text-5xl">
              Canciones trabajadas para sonar, circular y abrir puertas.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/60 lg:justify-self-end">
            Catálogo compacto de gestión con links, artistas y roles claros. Los casos
            principales cuentan la historia; esta lista muestra el volumen y la ruta
            de trabajo.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.34fr_0.66fr]" data-reveal>
          <div className="rounded-[1.35rem] border hairline bg-[linear-gradient(145deg,rgba(216,183,107,0.11),rgba(255,255,255,0.025))] p-6">
            <div className="mb-6 grid size-12 place-items-center rounded-full border border-[#d8b76b]/28 bg-[#d8b76b]/10 text-[#f4d489]">
              <ListMusic size={21} />
            </div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#d8b76b]">
              Archivo en expansión
            </p>
            <h3 className="mt-4 text-2xl font-medium text-white">Archivo de trabajos</h3>
            <p className="mt-4 text-sm leading-7 text-white/58">
              La estructura queda lista para sumar carpetas completas: título,
              artista, rol de Genuino, hito y link oficial.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2" data-stagger>
            {workedSongs.map((song) => (
              <a
                key={song.videoId}
                href={song.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="YouTube"
                data-cursor-mode="link"
                className="group flex min-h-32 items-center justify-between gap-4 rounded-[1.15rem] border border-white/10 bg-white/[0.026] p-4 transition hover:border-[#d8b76b]/36 hover:bg-white/[0.045]"
              >
                <span>
                  <span className="inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.2em] text-[#d8b76b]/76">
                    <Rows3 size={13} />
                    {song.role}
                  </span>
                  <span className="mt-3 block text-base font-medium text-white">{song.title}</span>
                  <span className="mt-2 block text-sm leading-5 text-white/48">{song.artist}</span>
                </span>
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/12 text-white/70 transition group-hover:border-[#d8b76b]/34 group-hover:text-[#f4d489]">
                  <ArrowUpRight size={17} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
