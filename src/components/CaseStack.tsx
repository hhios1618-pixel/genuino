"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Arrow from "@/components/ui/Arrow";
import SectionLabel from "@/components/ui/SectionLabel";
import Words from "@/components/ui/Words";
import YtEmbed from "@/components/ui/YtEmbed";
import YtImage from "@/components/ui/YtImage";
import { cases } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

type CaseStackProps = {
  index?: string;
  showAllLink?: boolean;
};

export default function CaseStack({ index = "02", showAllLink = true }: CaseStackProps) {
  const listRef = useRef<HTMLOListElement>(null);
  const [playing, setPlaying] = useState<string | null>(null);

  useEffect(() => {
    const list = listRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!list || reduceMotion) return;

    const context = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-case]", list);
      items.forEach((item, position) => {
        const next = items[position + 1];
        if (!next) return;
        gsap.to(item.querySelector("[data-case-card]"), {
          scale: 0.9,
          filter: "brightness(0.45)",
          ease: "none",
          scrollTrigger: {
            trigger: next,
            start: "top bottom",
            end: "top 15%",
            scrub: true,
          },
        });
      });
    }, list);

    return () => context.revert();
  }, []);

  return (
    <section id="casos" className="py-24 md:py-36">
      <div className="shell">
        <div className="mb-14 grid gap-8 md:mb-20 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionLabel index={index}>Selección 2025 — 2026</SectionLabel>
            <h2 data-split className="display mt-6 text-[clamp(3.25rem,9vw,8.5rem)]">
              <Words text="Proyectos" />
            </h2>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <p className="max-w-sm text-bone/60" data-fade>
              Producción general, colaboraciones y gestión de medios.
            </p>
          </div>
        </div>

        <ol ref={listRef} className="relative">
          {cases.map((item, position) => {
            const isPlaying = playing === item.videoId;
            return (
              <li
                key={item.videoId}
                data-case
                className="sticky mb-[8vh] last:mb-0"
                style={{ top: `calc(5.5rem + ${position * 1.1}rem)` }}
              >
                <article
                  data-case-card
                  className="origin-top rounded-[1.75rem] bg-bone/[0.035] p-1.5 ring-1 ring-bone/10 will-change-transform md:rounded-[2.25rem] md:p-2"
                >
                  <div className="relative overflow-hidden rounded-[calc(1.75rem-0.375rem)] bg-ink-sunk md:rounded-[calc(2.25rem-0.5rem)]">
                    <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/8]">
                      {isPlaying ? (
                        <YtEmbed videoId={item.videoId} title={`${item.title} — ${item.artist}`} />
                      ) : (
                        <button
                          type="button"
                          onClick={() => setPlaying(item.videoId)}
                          data-cursor="Play"
                          className="group absolute inset-0 text-left"
                          aria-label={`Reproducir ${item.title}, de ${item.artist}`}
                        >
                          <YtImage
                            videoId={item.videoId}
                            alt=""
                            sizes="(min-width: 1440px) 1440px, 100vw"
                            className="media-dim transition-transform duration-[1.6s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                          />
                          <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,7,6,0.55)_0%,transparent_30%,transparent_45%,rgba(8,7,6,0.92)_100%)]" />

                          <span className="absolute inset-x-5 top-5 flex items-start justify-between gap-4 md:inset-x-8 md:top-7">
                            <span className="label !text-bone/80">
                              {String(position + 1).padStart(2, "0")} / {String(cases.length).padStart(2, "0")}
                            </span>
                            <span className="label !text-bone/80">{item.year}</span>
                          </span>

                          <span className="absolute inset-x-5 bottom-5 grid gap-6 md:inset-x-8 md:bottom-8 lg:grid-cols-12 lg:items-end">
                            <span className="lg:col-span-7">
                              <span className="label block !text-signal">{item.role}</span>
                              <span className="display mt-3 block text-[clamp(2.75rem,7.5vw,7.5rem)]">
                                {item.title}
                                {item.subtitle ? (
                                  <span className="ml-3 align-top font-mono text-[0.625rem] font-normal tracking-[0.08em] text-bone/60 md:text-xs">
                                    {item.subtitle}
                                  </span>
                                ) : null}
                              </span>
                              <span className="mt-3 block text-base text-bone/75 md:text-lg">{item.artist}</span>
                            </span>
                            <span className="hidden lg:col-span-5 lg:block">
                              <span className="block max-w-md text-pretty text-[0.95rem] leading-relaxed text-bone/70">
                                {item.summary}
                              </span>
                              <span className="mt-5 flex flex-wrap gap-2">
                                {item.scope.map((scope) => (
                                  <span
                                    key={scope}
                                    className="rounded-full border border-bone/20 px-3 py-1.5 text-xs text-bone/80"
                                  >
                                    {scope}
                                  </span>
                                ))}
                              </span>
                            </span>
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                </article>
                <p className="mt-4 max-w-xl px-2 text-sm leading-relaxed text-bone/60 lg:hidden">{item.summary}</p>
              </li>
            );
          })}
        </ol>

        {showAllLink ? (
          <div className="mt-16 flex justify-center" data-fade>
            <Link href="/proyectos" className="btn-line group">
              Ver todos los proyectos
              <Arrow className="size-4 transition-transform duration-500 group-hover:translate-x-0.5" direction="right" />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
