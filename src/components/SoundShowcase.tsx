"use client";

import { Pause, Play, Volume2 } from "lucide-react";
import { useState } from "react";
import { tracks } from "@/data/site";

export default function SoundShowcase() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const selected = tracks[active];

  return (
    <section id="sonido" className="py-20 md:py-28">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#d8b76b]">
            Sound showcase
          </p>
          <h2 className="mt-5 max-w-xl text-3xl font-medium tracking-[-0.03em] text-white md:text-4xl">
            Una escucha cuidada para demos, masters y piezas de marca.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/62">
            Esta seccion queda preparada para conectar audio real, embeds de
            plataformas o archivos privados. Por ahora simula una seleccion
            curada con estados visuales.
          </p>
        </div>

        <div className="cinematic-panel rounded-[2rem] p-5 md:p-6">
          <div className="rounded-[1.5rem] border border-white/10 bg-[#080807] p-5 md:p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-white/42">
                  Reproduciendo
                </p>
                <h3 className="mt-2 text-2xl font-medium text-white">{selected.title}</h3>
                <p className="mt-1 text-sm text-[#d8b76b]/78">{selected.role}</p>
              </div>
              <button
                type="button"
                onClick={() => setPlaying((value) => !value)}
                className="grid size-14 place-items-center rounded-full bg-[#f4f1ea] text-[#080706] transition hover:bg-white"
                aria-label={playing ? "Pausar demo" : "Reproducir demo"}
              >
                {playing ? <Pause size={19} fill="currentColor" /> : <Play size={19} fill="currentColor" />}
              </button>
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-4">
              <div className="waveform h-24 rounded-2xl opacity-90" />
              <div className="mt-4 flex items-center justify-between gap-4 text-xs text-white/48">
                <span>00:00</span>
                <span>{selected.duration}</span>
              </div>
            </div>

            <div className="mt-5 grid gap-3">
              {tracks.map((track, index) => (
                <button
                  key={track.title}
                  type="button"
                  onClick={() => {
                    setActive(index);
                    setPlaying(true);
                  }}
                  className={`flex items-center justify-between gap-4 rounded-2xl border px-4 py-3 text-left transition ${
                    active === index
                      ? "border-[#d8b76b]/40 bg-[#d8b76b]/10"
                      : "border-white/8 bg-white/[0.025] hover:border-white/18"
                  }`}
                >
                  <span>
                    <span className="block text-sm font-medium text-white">{track.title}</span>
                    <span className="mt-1 block text-xs text-white/46">{track.mood}</span>
                  </span>
                  <span className="flex items-center gap-2 text-xs text-white/50">
                    <Volume2 size={14} /> {track.duration}
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
