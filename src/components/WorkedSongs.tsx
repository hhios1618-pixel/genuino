"use client";

import { ArrowUpRight, ListMusic, Radio, Rows3 } from "lucide-react";
import { useState } from "react";
import { workedSongs } from "@/data/site";

export default function WorkedSongs() {
  const [activeVideoId, setActiveVideoId] = useState(workedSongs[0]?.videoId ?? "");
  const activeSong = workedSongs.find((song) => song.videoId === activeVideoId) ?? workedSongs[0];

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

        {activeSong ? (
          <div className="mb-5 overflow-hidden rounded-[1.5rem] border hairline bg-[#090908]" data-reveal>
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative aspect-video bg-black">
                <iframe
                  key={activeSong.videoId}
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${activeSong.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                  title={activeSong.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="flex flex-col justify-between border-t hairline p-5 lg:border-l lg:border-t-0 lg:p-7">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[#d8b76b]">
                    Reproduciendo en el sitio
                  </p>
                  <h3 className="mt-4 text-3xl font-medium text-white">{activeSong.title}</h3>
                  <p className="mt-2 text-sm text-white/50">{activeSong.artist}</p>
                  <p className="mt-5 text-sm leading-7 text-white/60">{activeSong.outcome}</p>
                </div>
                <a
                  href={activeSong.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex h-11 w-fit items-center justify-center gap-2 rounded-full border border-white/10 px-5 text-sm text-white/62 transition hover:border-[#d8b76b]/36 hover:text-[#f4d489]"
                >
                  Ver en YouTube <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        ) : null}

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
              <article
                key={song.videoId}
                className={`group flex min-h-32 items-center justify-between gap-4 rounded-[1.15rem] border bg-white/[0.026] p-4 transition hover:border-[#d8b76b]/36 hover:bg-white/[0.045] ${
                  activeVideoId === song.videoId ? "border-[#d8b76b]/45" : "border-white/10"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveVideoId(song.videoId)}
                  data-cursor="Play"
                  data-cursor-mode="media"
                  className="min-w-0 flex-1 text-left"
                  aria-label={`Reproducir ${song.title} en el sitio`}
                >
                  <span className="inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.2em] text-[#d8b76b]/76">
                    <Rows3 size={13} />
                    {song.role}
                  </span>
                  <span className="mt-3 block text-base font-medium text-white">{song.title}</span>
                  <span className="mt-2 block text-sm leading-5 text-white/48">{song.artist}</span>
                </button>
                <a
                  href={song.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir ${song.title} en YouTube`}
                  className="grid size-10 shrink-0 place-items-center rounded-full border border-white/12 text-white/70 transition hover:border-[#d8b76b]/34 hover:text-[#f4d489]"
                >
                  <ArrowUpRight size={17} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
