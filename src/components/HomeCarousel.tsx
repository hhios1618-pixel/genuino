"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PlayableVideo from "@/components/PlayableVideo";
import { blurDataUrl, careerMilestones, tracks } from "@/data/site";

const slides = [
  {
    eyebrow: "Gira / Suecia",
    title: "Lejos de ti",
    body: "Registro internacional junto a Hermanos Bernal, conectado con una etapa de gira por Dinamarca y Suecia.",
    image: "https://i.ytimg.com/vi/uKG4RBnhghE/maxresdefault.jpg",
    kind: "image",
    href: "/video",
  },
  {
    eyebrow: careerMilestones[1].eyebrow,
    title: careerMilestones[1].title,
    body: careerMilestones[1].body,
    image: careerMilestones[1].image,
    kind: "image",
    href: "/video",
  },
  {
    eyebrow: careerMilestones[2].eyebrow,
    title: careerMilestones[2].title,
    body: careerMilestones[2].body,
    image: careerMilestones[2].image,
    kind: "image",
    href: "/video",
  },
  {
    eyebrow: tracks[0].duration,
    title: tracks[0].title,
    body: tracks[0].mood,
    image: `https://i.ytimg.com/vi/${tracks[0].videoId}/maxresdefault.jpg`,
    kind: "image",
    href: "/sonido",
  },
];

export default function HomeCarousel() {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  function move(direction: number) {
    setActive((current) => (current + direction + slides.length) % slides.length);
  }

  return (
    <section className="border-y hairline bg-[#080807] py-16 md:py-20">
      <div className="section-shell">
        <div className="mb-8 flex items-end justify-between gap-6" data-reveal>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#d8b76b]">
              Selección viva
            </p>
            <h2 data-reveal-title className="mt-4 max-w-3xl text-3xl font-medium text-white md:text-5xl">
              Sonido, imagen y movimiento.
            </h2>
          </div>
          <div className="hidden gap-3 md:flex">
            <button
              type="button"
              onClick={() => move(-1)}
              data-cursor="Prev"
              data-cursor-mode="link"
              className="grid size-12 place-items-center rounded-full border border-white/12 text-white/72 transition hover:border-[#d8b76b]/50 hover:text-[#f8e7b3]"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              data-cursor="Next"
              data-cursor-mode="link"
              className="grid size-12 place-items-center rounded-full border border-white/12 text-white/72 transition hover:border-[#d8b76b]/50 hover:text-[#f8e7b3]"
              aria-label="Siguiente"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid overflow-hidden rounded-[2rem] border hairline bg-[#0b0a09] lg:grid-cols-[1.2fr_0.8fr]" data-reveal>
          <div className="relative min-h-[460px] overflow-hidden bg-black">
            {slide.kind === "video" ? (
              <PlayableVideo
                src={slide.image}
                label={slide.title}
                className="absolute inset-0"
                videoClassName="h-[112%]"
                overlayClassName="bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.78))]"
              />
            ) : (
              <Link
                href={slide.href}
                data-cursor="Ver"
                data-cursor-mode="link"
                className="group absolute inset-0"
                aria-label={`Ver ${slide.title}`}
              >
                <Image
                  src={slide.image}
                  alt={`Imagen de ${slide.title}`}
                  fill
                  placeholder="blur"
                  blurDataURL={blurDataUrl}
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="glitch-media object-cover transition duration-700 group-hover:scale-[1.04]"
                  data-parallax-media
                />
                <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.78))]" />
              </Link>
            )}
          </div>

          <div className="flex flex-col justify-between p-6 md:p-9">
            <div data-parallax-text>
              <p className="text-xs uppercase tracking-[0.28em] text-[#d8b76b]">{slide.eyebrow}</p>
              <h3 className="mt-5 text-3xl font-medium text-white md:text-5xl">{slide.title}</h3>
              <p className="editorial-serif mt-6 text-2xl leading-8 text-white/68">{slide.body}</p>
            </div>
            <div className="mt-10 flex items-center justify-between gap-5">
              <div className="flex gap-2">
                {slides.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActive(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      active === index ? "w-10 bg-[#d8b76b]" : "w-4 bg-white/20"
                    }`}
                    aria-label={`Ver slide ${index + 1}`}
                  />
                ))}
              </div>
              <Link
                href={slide.href}
                data-magnetic
                data-cursor="Abrir"
                data-cursor-mode="link"
                className="premium-cta inline-flex h-12 items-center justify-center gap-3 rounded-full px-6 text-sm font-semibold text-[#090806]"
              >
                Entrar <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
