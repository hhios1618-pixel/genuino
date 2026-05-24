"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Quote, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { audiovisualTestimonials, blurDataUrl } from "@/data/site";

export default function VideoTestimonials() {
  const [active, setActive] = useState(0);
  const testimonial = audiovisualTestimonials[active] ?? audiovisualTestimonials[0];

  return (
    <section className="border-y hairline bg-[#070706] py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-12 grid gap-7 md:grid-cols-[0.86fr_1.14fr] md:items-end" data-reveal>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#d8b76b]">
              Validación audiovisual
            </p>
            <h2 data-reveal-title className="mt-5 max-w-3xl text-3xl font-medium text-white md:text-5xl">
              Artistas, colaboraciones y resultados que hablan en pantalla.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/58 md:justify-self-end">
            La confianza se construye con contexto real: sesiones, videos, prensa y
            piezas que muestran cómo trabaja Genuino antes de que el single salga.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            key={testimonial.artist}
            initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[34rem] overflow-hidden rounded-[1.7rem] border hairline bg-black"
            data-cursor="Play"
            data-cursor-mode="media"
          >
            <video
              className="absolute inset-0 h-[112%] w-full object-cover opacity-80"
              src={testimonial.videoSrc}
              poster={testimonial.poster}
              muted
              loop
              playsInline
              autoPlay
              preload="metadata"
              aria-label={`${testimonial.artist}: ${testimonial.title}`}
              data-parallax-media
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.38),rgba(0,0,0,0.78)),linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.88))]" />
            <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/14 bg-black/34 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/62 backdrop-blur-xl">
              <ShieldCheck size={13} />
              {testimonial.proof}
            </div>
            <div className="absolute inset-x-5 bottom-5 rounded-[1.35rem] border border-white/12 bg-black/32 p-5 backdrop-blur-xl md:inset-x-7 md:bottom-7 md:p-7">
              <Quote className="text-[#d8b76b]" size={24} />
              <p className="editorial-serif mt-5 text-2xl leading-9 text-white/78 md:text-3xl">
                {testimonial.quote}
              </p>
              <div className="mt-7 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-2xl font-medium text-white">{testimonial.artist}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.24em] text-[#d8b76b]/72">
                    {testimonial.role}
                  </p>
                </div>
                <a
                  href="/calculador"
                  data-magnetic
                  data-cursor="Diseñar"
                  data-cursor-mode="link"
                  className="premium-cta inline-flex h-12 items-center justify-center gap-3 rounded-full px-6 text-sm font-semibold text-[#090806]"
                >
                  Quiero algo parecido <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-3" data-stagger>
            {audiovisualTestimonials.map((item, index) => (
              <button
                key={item.artist}
                type="button"
                onClick={() => setActive(index)}
                data-cursor="Ver"
                data-cursor-mode="link"
                className={`group grid min-h-36 grid-cols-[7.5rem_1fr] overflow-hidden rounded-[1.25rem] border text-left transition md:grid-cols-[9rem_1fr] ${
                  active === index
                    ? "border-[#d8b76b]/42 bg-[#d8b76b]/8"
                    : "border-white/10 bg-white/[0.026] hover:border-[#d8b76b]/30"
                }`}
              >
                <span className="relative block bg-black">
                  <Image
                    src={item.poster}
                    alt={`Miniatura de ${item.artist}`}
                    fill
                    sizes="9rem"
                    placeholder="blur"
                    blurDataURL={blurDataUrl}
                    className="object-cover opacity-84 transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-black/20" />
                </span>
                <span className="flex min-w-0 flex-col justify-center p-4">
                  <span className="text-[0.66rem] uppercase tracking-[0.22em] text-[#d8b76b]/76">
                    {item.role}
                  </span>
                  <span className="mt-2 text-xl font-medium text-white">{item.artist}</span>
                  <span className="mt-2 text-sm leading-6 text-white/54">{item.title}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
