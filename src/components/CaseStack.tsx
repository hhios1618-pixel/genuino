"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Arrow from "@/components/ui/Arrow";
import SectionLabel from "@/components/ui/SectionLabel";
import Words from "@/components/ui/Words";
import YtEmbed from "@/components/ui/YtEmbed";
import YtImage from "@/components/ui/YtImage";
import { blurDataUrl, cases } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

type CaseStackProps = {
  index?: string;
  showAllLink?: boolean;
  title?: string;
  intro?: string;
};

const pad = (value: number) => String(value).padStart(2, "0");

const caseSizes = "(min-width: 1440px) 1440px, (min-width: 1024px) 100vw, (min-width: 768px) 52vw, 86vw";
type Appearance = { outlet: string; program: string; minutes: number; videoId: string };

/* Apariciones de un caso de medios: cada una se reproduce en la tarjeta.
   Escritorio: fila de fichas bajo el video. Móvil: lista de una columna. */
function Appearances({
  items,
  active,
  onSelect,
  list = false,
  className = "",
}: {
  items: Appearance[];
  active: string | null;
  onSelect: (videoId: string) => void;
  list?: boolean;
  className?: string;
}) {
  if (list) {
    return (
      <ul aria-label="Apariciones" className={`border-t border-line ${className}`}>
        {items.map((appearance) => {
          const selected = active === appearance.videoId;
          return (
            <li key={appearance.videoId} className="border-b border-line">
              <button
                type="button"
                onClick={() => onSelect(appearance.videoId)}
                aria-pressed={selected}
                aria-label={`Reproducir ${appearance.program}, ${appearance.outlet}, ${appearance.minutes} minutos`}
                className="flex min-h-11 w-full items-center gap-3 py-2 text-left"
              >
                <svg
                  viewBox="0 0 10 12"
                  className={`size-2 shrink-0 ${selected ? "text-signal" : "text-bone/50"}`}
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M0 0v12l10-6z" />
                </svg>
                <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <span className={`label ${selected ? "!text-signal" : ""}`}>{appearance.outlet}</span>
                  <span className={`truncate text-sm ${selected ? "text-bone" : "text-bone/80"}`}>
                    {appearance.program}
                  </span>
                </span>
                <span className="label tabular shrink-0">{appearance.minutes} min</span>
              </button>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <ul aria-label="Apariciones" className={`grid gap-1.5 ${className}`}>
      {items.map((appearance) => {
        const selected = active === appearance.videoId;
        return (
          <li key={appearance.videoId}>
            <button
              type="button"
              onClick={() => onSelect(appearance.videoId)}
              aria-pressed={selected}
              aria-label={`Reproducir ${appearance.program}, ${appearance.outlet}, ${appearance.minutes} minutos`}
              className={`flex h-full min-h-11 w-full flex-col justify-center gap-1 rounded-xl px-3 py-2.5 text-left ring-1 transition-colors duration-500 ${
                selected
                  ? "bg-bone/[0.08] ring-signal"
                  : "ring-bone/10 hover:bg-bone/[0.05] hover:ring-bone/30"
              }`}
            >
              <span className="flex items-center justify-between gap-2">
                <span className={`label flex min-w-0 items-center gap-1.5 ${selected ? "!text-signal" : ""}`}>
                  <svg viewBox="0 0 10 12" className="size-2 shrink-0" fill="currentColor" aria-hidden="true">
                    <path d="M0 0v12l10-6z" />
                  </svg>
                  <span className="truncate">{appearance.outlet}</span>
                </span>
                <span className="label tabular shrink-0 whitespace-nowrap">{appearance.minutes} min</span>
              </span>
              <span className="line-clamp-1 text-sm text-bone/85">{appearance.program}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

const caseMedia =
  "media-dim transition-transform duration-[1.6s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]";

/*
  Escritorio: tarjetas apiladas que se encogen al pasar la siguiente.
  Móvil y tablet: carrusel deslizable con la información dentro de cada tarjeta.
*/
export default function CaseStack({
  index = "02",
  showAllLink = true,
  title = "Proyectos",
  intro = "Producción general, colaboraciones y gestión de medios.",
}: CaseStackProps) {
  const listRef = useRef<HTMLOListElement>(null);
  const [playing, setPlaying] = useState<string | null>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const list = listRef.current;
    if (!list || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const media = gsap.matchMedia();
    media.add("(min-width: 1024px)", () => {
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
    });

    return () => media.revert();
  }, []);

  /* Tarjeta visible en el carrusel: la más cercana al borde izquierdo */
  const onCarouselScroll = () => {
    const list = listRef.current;
    if (!list || list.scrollWidth <= list.clientWidth) return;
    const start = list.scrollLeft + parseFloat(getComputedStyle(list).paddingLeft);
    const items = Array.from(list.children) as HTMLElement[];
    const nearest = items.reduce(
      (best, item, position) =>
        Math.abs(item.offsetLeft - start) < Math.abs(items[best].offsetLeft - start) ? position : best,
      0,
    );
    if (nearest !== current) {
      setCurrent(nearest);
      setPlaying(null);
    }
  };

  const goTo = (position: number) => {
    const list = listRef.current;
    const item = list?.children[position] as HTMLElement | undefined;
    if (!list || !item) return;
    list.scrollTo({ left: item.offsetLeft - parseFloat(getComputedStyle(list).paddingLeft), behavior: "smooth" });
  };

  return (
    <section id="casos" className="py-24 md:py-36">
      <div className="shell">
        <div className="mb-10 grid gap-6 md:mb-20 md:grid-cols-12 md:items-end md:gap-8">
          <div className="md:col-span-8">
            <SectionLabel index={index}>Selección 2025 — 2026</SectionLabel>
            <h2 data-split className="display mt-6 text-[clamp(2.1rem,6vw,5.75rem)]">
              <Words text={title} />
            </h2>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <p className="max-w-sm text-bone/60" data-fade>
              {intro}
            </p>
          </div>
        </div>

        <ol
          ref={listRef}
          onScroll={onCarouselScroll}
          aria-label="Proyectos destacados"
          className="relative -mx-[var(--gutter)] flex snap-x snap-mandatory scroll-px-[var(--gutter)] gap-3 overflow-x-auto px-[var(--gutter)] pb-1 [scrollbar-width:none] sm:gap-4 lg:mx-0 lg:block lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
        >
          {cases.map((item, position) => {
            const videos = item.appearances?.map((appearance) => appearance.videoId) ?? [item.videoId];
            const activeVideo = playing && videos.includes(playing) ? playing : null;
            const activeLabel = item.appearances?.find((appearance) => appearance.videoId === activeVideo);
            return (
              <li
                key={item.videoId}
                data-case
                aria-label={`${pad(position + 1)} de ${pad(cases.length)}: ${item.title}`}
                className="w-[86%] shrink-0 snap-start sm:w-[64%] md:w-[52%] lg:sticky lg:mb-[8vh] lg:w-auto lg:last:mb-0"
                style={{ top: `calc(5.5rem + ${position * 1.1}rem)` }}
              >
                <article
                  data-case-card
                  className="flex h-full origin-top flex-col rounded-[1.5rem] bg-bone/[0.035] p-1.5 ring-1 ring-bone/10 will-change-transform md:rounded-[2.25rem] md:p-2"
                >
                  <div className="relative overflow-hidden rounded-[calc(1.5rem-0.375rem)] bg-ink-sunk md:rounded-[calc(2.25rem-0.5rem)]">
                    <div className="relative aspect-[16/10] lg:aspect-[16/8]">
                      {activeVideo ? (
                        <YtEmbed
                          key={activeVideo}
                          videoId={activeVideo}
                          title={
                            activeLabel
                              ? `${item.title} en ${activeLabel.program}, ${activeLabel.outlet}`
                              : `${item.title} — ${item.artist}`
                          }
                        />
                      ) : (
                        <button
                          type="button"
                          onClick={() => setPlaying(item.videoId)}
                          data-cursor="Play"
                          className="group absolute inset-0 text-left"
                          aria-label={`Reproducir ${item.title}, de ${item.artist}`}
                        >
                          {item.poster ? (
                            <Image
                              src={item.poster}
                              alt=""
                              fill
                              sizes={caseSizes}
                              placeholder="blur"
                              blurDataURL={blurDataUrl}
                              className={`object-cover ${caseMedia}`}
                            />
                          ) : (
                            <YtImage videoId={item.videoId} alt="" sizes={caseSizes} className={caseMedia} />
                          )}
                          <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.55)_0%,transparent_32%)]" />
                          <span className="absolute inset-0 hidden bg-[linear-gradient(180deg,transparent_45%,rgba(0,0,0,0.92)_100%)] lg:block" />

                          <span className="absolute inset-x-4 top-4 flex items-start justify-between gap-4 md:inset-x-8 md:top-7">
                            <span className="label !text-bone/80">
                              {pad(position + 1)} / {pad(cases.length)}
                            </span>
                            <span className="label !text-bone/80">{item.year}</span>
                          </span>

                          <span className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-bone px-3 py-1.5 text-xs font-medium text-ink lg:hidden">
                            <svg viewBox="0 0 10 12" className="size-2.5" fill="currentColor" aria-hidden="true">
                              <path d="M0 0v12l10-6z" />
                            </svg>
                            Reproducir
                          </span>

                          <span className="absolute inset-x-8 bottom-8 hidden gap-6 lg:grid lg:grid-cols-12 lg:items-end">
                            <span className="lg:col-span-7">
                              <span className="label block !text-signal">{item.role}</span>
                              <span className="display mt-3 block text-[clamp(1.9rem,4.6vw,4.5rem)]">
                                {item.title}
                                {item.subtitle ? (
                                  <span className="ml-3 align-top font-mono text-xs font-normal tracking-[0.08em] text-bone/60">
                                    {item.subtitle}
                                  </span>
                                ) : null}
                              </span>
                              <span className="mt-3 block text-lg text-bone/75">{item.artist}</span>
                            </span>
                            <span className="lg:col-span-5">
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

                  {item.appearances ? (
                    <Appearances
                      items={item.appearances}
                      active={activeVideo}
                      onSelect={setPlaying}
                      className="mt-2 hidden lg:grid lg:grid-cols-6"
                    />
                  ) : null}

                  <div className="flex flex-1 flex-col px-3 pb-3 pt-5 sm:px-4 lg:hidden">
                    <p className="label !text-signal">{item.role}</p>
                    <h3 className="display mt-2.5 text-[clamp(1.5rem,6vw,2.25rem)]">
                      {item.title}
                      {item.subtitle ? (
                        <span className="ml-2 align-top font-mono text-[0.625rem] font-normal tracking-[0.08em] text-bone/60">
                          {item.subtitle}
                        </span>
                      ) : null}
                    </h3>
                    <p className="mt-2 text-bone/80">{item.artist}</p>
                    <p className="mt-4 text-pretty text-sm leading-relaxed text-bone/60">{item.summary}</p>
                    {item.appearances ? (
                      <Appearances
                        items={item.appearances}
                        active={activeVideo}
                        onSelect={setPlaying}
                        list
                        className="mt-5"
                      />
                    ) : (
                      <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
                        {item.scope.map((scope) => (
                          <li key={scope} className="rounded-full border border-bone/15 px-2.5 py-1 text-xs text-bone/75">
                            {scope}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              </li>
            );
          })}
        </ol>

        <div className="mt-6 flex items-center gap-5 lg:hidden">
          <p className="label tabular !text-bone" aria-live="polite">
            {pad(current + 1)} <span className="text-bone/40">/ {pad(cases.length)}</span>
          </p>
          <div className="relative h-0.5 flex-1 overflow-hidden bg-bone/15" aria-hidden="true">
            <span
              className="absolute inset-y-0 left-0 bg-gold transition-[width] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              style={{ width: `${((current + 1) / cases.length) * 100}%` }}
            />
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => goTo(current - 1)}
              disabled={current === 0}
              aria-label="Proyecto anterior"
              className="grid size-11 place-items-center rounded-full border border-bone/20 transition-colors duration-500 hover:border-bone disabled:opacity-30"
            >
              <Arrow className="size-3.5" direction="left" />
            </button>
            <button
              type="button"
              onClick={() => goTo(current + 1)}
              disabled={current === cases.length - 1}
              aria-label="Proyecto siguiente"
              className="grid size-11 place-items-center rounded-full border border-bone/20 transition-colors duration-500 hover:border-bone disabled:opacity-30"
            >
              <Arrow className="size-3.5" direction="right" />
            </button>
          </div>
        </div>

        {showAllLink ? (
          <div className="mt-12 flex justify-center md:mt-16" data-fade>
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
