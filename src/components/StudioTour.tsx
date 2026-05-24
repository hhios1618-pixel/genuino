"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { blurDataUrl, studioGear } from "@/data/site";

export default function StudioTour() {
  const [active, setActive] = useState(0);
  const gear = studioGear[active] ?? studioGear[0];

  function move(direction: number) {
    setActive((current) => (current + direction + studioGear.length) % studioGear.length);
  }

  return (
    <section id="estudio" className="bg-[#050505] py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-12 grid gap-7 md:grid-cols-[0.92fr_1.08fr] md:items-end" data-reveal>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#d8b76b]">
              Studio tour
            </p>
            <h2 data-reveal-title className="mt-5 max-w-3xl text-3xl font-medium text-white md:text-5xl">
              Gear, sala y flujo para terminar canciones con estándar global.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/58 md:justify-self-end">
            Más que una lista técnica: una cadena de decisiones para capturar voz,
            pulir mezcla, crear contenido y sostener el lanzamiento.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-[1.8rem] border hairline bg-[#090908] lg:grid-cols-[1.08fr_0.92fr]" data-reveal>
          <div
            className="relative min-h-[31rem] overflow-hidden bg-black"
            data-cursor="Expand"
            data-cursor-mode="media"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={gear.name}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={gear.image}
                  alt={gear.name}
                  fill
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  placeholder="blur"
                  blurDataURL={blurDataUrl}
                  className="object-cover"
                  data-parallax-media
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.76))]" />
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 rounded-[1.2rem] border border-white/12 bg-black/32 p-4 backdrop-blur-xl">
              <div>
                <p className="text-[0.66rem] uppercase tracking-[0.22em] text-[#d8b76b]">
                  {gear.category}
                </p>
                <p className="mt-2 text-2xl font-medium text-white">{gear.name}</p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => move(-1)}
                  data-cursor="Prev"
                  data-cursor-mode="link"
                  className="grid size-11 place-items-center rounded-full border border-white/12 text-white/76 transition hover:border-[#d8b76b]/44 hover:text-[#f4d489]"
                  aria-label="Equipo anterior"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => move(1)}
                  data-cursor="Next"
                  data-cursor-mode="link"
                  className="grid size-11 place-items-center rounded-full border border-white/12 text-white/76 transition hover:border-[#d8b76b]/44 hover:text-[#f4d489]"
                  aria-label="Equipo siguiente"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between p-6 md:p-9">
            <div>
              <div className="mb-7 grid size-13 place-items-center rounded-full border border-[#d8b76b]/28 bg-[#d8b76b]/10 text-[#f4d489]">
                <SlidersHorizontal size={23} strokeWidth={1.8} />
              </div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#d8b76b]">{gear.category}</p>
              <h3 className="mt-4 text-3xl font-medium text-white md:text-5xl">{gear.name}</h3>
              <p className="editorial-serif mt-6 text-2xl leading-9 text-white/68">{gear.description}</p>
              <div className="mt-8 grid gap-3">
                {gear.specs.map((spec) => (
                  <div key={spec} className="rounded-[1rem] border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-white/68">
                    {spec}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 grid grid-cols-4 gap-2">
              {studioGear.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    active === index ? "bg-[#d8b76b]" : "bg-white/18 hover:bg-white/34"
                  }`}
                  aria-label={`Ver ${item.name}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
