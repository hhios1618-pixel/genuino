"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import YouTubeFeature from "@/components/YouTubeFeature";
import { tracks } from "@/data/site";

function thumbnail(videoId: string) {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

export default function SoundShowcase() {
  const [active, setActive] = useState(0);
  const selected = tracks[active];

  function move(direction: number) {
    setActive((current) => (current + direction + tracks.length) % tracks.length);
  }

  return (
    <section id="sonido" className="py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#d8b76b]">
              Catalogo audiovisual
            </p>
            <h2 className="mt-5 max-w-3xl text-3xl font-medium tracking-[-0.035em] text-white md:text-5xl">
              Videoclips que muestran sonido, imagen y movimiento real.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-white/58">
            Una productora musical se posiciona con obra visible: portadas, clips,
            colaboraciones, estética de lanzamiento y reproducción inmediata dentro
            del sitio.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border hairline bg-[#080807] shadow-2xl shadow-black/35">
          <div className="grid lg:grid-cols-[1.38fr_0.62fr]">
            <div className="relative aspect-video min-h-[260px] bg-black lg:aspect-auto lg:min-h-[560px]">
              <YouTubeFeature
                key={selected.videoId}
                title={selected.title}
                videoId={selected.videoId}
                featured
              />
            </div>

            <aside className="flex flex-col justify-between border-t hairline p-5 lg:border-l lg:border-t-0 lg:p-7">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#d8b76b]">
                    Clip seleccionado
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/44">
                    {String(active + 1).padStart(2, "0")} / {String(tracks.length).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-4xl font-medium tracking-[-0.04em] text-white md:text-5xl lg:text-4xl xl:text-5xl">
                  {selected.title}
                </h3>
                <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[#d8b76b]/76">
                  {selected.role}
                </p>
                <p className="mt-7 text-base leading-8 text-white/62">{selected.mood}</p>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => move(-1)}
                  className="grid size-12 place-items-center rounded-full border border-white/12 text-white/72 transition hover:border-[#d8b76b]/40 hover:text-[#f8e7b3]"
                  aria-label="Clip anterior"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => move(1)}
                  className="grid size-12 place-items-center rounded-full border border-white/12 text-white/72 transition hover:border-[#d8b76b]/40 hover:text-[#f8e7b3]"
                  aria-label="Clip siguiente"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </aside>
          </div>

          <div className="border-t hairline p-3">
            <div className="flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {tracks.map((track, index) => (
                <button
                  key={track.videoId}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`group relative h-40 min-w-[235px] overflow-hidden rounded-[1.25rem] border text-left transition md:h-48 md:min-w-[310px] ${
                    active === index
                      ? "border-[#d8b76b]/60"
                      : "border-white/10 hover:border-white/24"
                  }`}
                >
                  <Image
                    src={thumbnail(track.videoId)}
                    alt=""
                    fill
                    sizes="320px"
                    className="object-cover opacity-86 transition duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.76))]" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/12 bg-black/24 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/56 backdrop-blur-md">
                    Video musical
                  </span>
                  <span className="absolute right-4 top-4 grid size-9 place-items-center rounded-full border border-white/14 bg-white/10 text-white backdrop-blur-md">
                    <Play size={13} fill="currentColor" />
                  </span>
                  <span className="absolute inset-x-4 bottom-4">
                    <span className="block text-lg font-medium text-white">{track.title}</span>
                    <span className="mt-1 block text-xs uppercase tracking-[0.16em] text-[#d8b76b]/78">
                      {track.role}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
