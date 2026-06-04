"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Radio } from "lucide-react";
import { useRef, useState } from "react";
import { workedSongs } from "@/data/site";

export default function WorkedSongs() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [active, setActive] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeItem = workedSongs.find((s) => s.videoId === active);

  return (
    <section id="trabajos-medios" className="border-y hairline bg-[#060606] py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-12 grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end" data-reveal>
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.34em] text-[#d8b76b]">
              <Radio size={15} />
              Radios y medios en Chile
            </p>
            <h2 className="mt-5 max-w-4xl text-3xl font-medium text-white md:text-4xl">
              Canciones trabajadas para sonar, circular y abrir puertas.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/58 lg:justify-self-end">
            Catálogo de gestión con artistas, roles y links. Hacé click en cualquier
            fila para abrir el video.
          </p>
        </div>

        {/* Video player */}
        <AnimatePresence>
          {active && activeItem ? (
            <motion.div
              key={active}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mb-2 overflow-hidden"
            >
              <div className="overflow-hidden rounded-[1.5rem] border hairline bg-[#090908]">
                <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
                  <div className="relative aspect-video bg-black">
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={`https://www.youtube.com/embed/${activeItem.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                      title={activeItem.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <div className="flex flex-col justify-between border-t hairline p-6 lg:border-l lg:border-t-0 lg:p-8">
                    <div>
                      <p className="text-[0.66rem] uppercase tracking-[0.28em] text-[#d8b76b]">
                        {activeItem.role}
                      </p>
                      <h3 className="mt-4 text-2xl font-medium text-white">{activeItem.title}</h3>
                      <p className="mt-2 text-sm text-white/48">{activeItem.artist}</p>
                      <p className="mt-5 text-sm leading-7 text-white/58">{activeItem.outcome}</p>
                    </div>
                    <div className="mt-6 flex items-center gap-3">
                      <a
                        href={activeItem.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-10 items-center gap-2 rounded-full border border-white/10 px-4 text-xs text-white/58 transition hover:border-[#d8b76b]/36 hover:text-[#f4d489]"
                      >
                        YouTube <ArrowUpRight size={13} />
                      </a>
                      <button
                        type="button"
                        onClick={() => setActive(null)}
                        className="inline-flex h-10 items-center gap-2 rounded-full border border-white/10 px-4 text-xs text-white/40 transition hover:border-white/20 hover:text-white/60"
                      >
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        {/* List */}
        <div ref={containerRef} className="relative" data-reveal>
          {/* Hover thumbnail — desktop only */}
          <AnimatePresence>
            {hovered && !active ? (
              <motion.div
                key={hovered}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-none absolute right-0 top-0 z-10 hidden aspect-video w-72 overflow-hidden rounded-2xl border border-white/10 shadow-2xl lg:block"
              >
                <img
                  src={`https://i.ytimg.com/vi/${hovered}/maxresdefault.jpg`}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </motion.div>
            ) : null}
          </AnimatePresence>

          {workedSongs.map((song, index) => (
            <motion.button
              key={song.videoId}
              type="button"
              onClick={() => setActive(active === song.videoId ? null : song.videoId)}
              onMouseEnter={() => setHovered(song.videoId)}
              onMouseLeave={() => setHovered(null)}
              data-cursor="Play"
              data-cursor-mode="media"
              className={`group flex w-full items-center gap-4 border-b px-0 py-5 text-left transition duration-200 last:border-b-0 hover:pl-2 md:gap-8 md:py-6 ${
                active === song.videoId
                  ? "border-[#d8b76b]/20"
                  : "border-white/[0.06] hover:border-white/10"
              }`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="w-8 shrink-0 text-xs tabular-nums text-white/22 md:w-10">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="min-w-0 flex-1">
                <span className={`block text-base font-medium transition duration-200 ${
                  active === song.videoId ? "text-[#f4d489]" : "text-white group-hover:text-[#f8e7b3]"
                }`}>
                  {song.title}
                </span>
                <span className="mt-1 block text-sm text-white/42">{song.artist}</span>
              </span>

              <span className="hidden shrink-0 text-[0.68rem] uppercase tracking-[0.2em] text-white/32 sm:block md:w-44">
                {song.role}
              </span>

              <span className={`ml-auto shrink-0 grid size-8 place-items-center rounded-full border transition duration-200 ${
                active === song.videoId
                  ? "border-[#d8b76b]/50 text-[#f4d489]"
                  : "border-white/10 text-white/30 group-hover:border-white/20 group-hover:text-white/60"
              }`}>
                <ArrowUpRight size={13} />
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
