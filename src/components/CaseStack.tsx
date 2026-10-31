"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { type CSSProperties, useEffect, useRef, useState } from "react";
import Arrow from "@/components/ui/Arrow";
import SectionLabel from "@/components/ui/SectionLabel";
import Words from "@/components/ui/Words";
import YtEmbed from "@/components/ui/YtEmbed";
import YtImage from "@/components/ui/YtImage";
import { blurDataUrl, cases } from "@/data/site";
import type { Text } from "@/i18n";
import { useLang } from "@/i18n/LangProvider";

gsap.registerPlugin(ScrollTrigger);

type CaseStackProps = {
  index?: string;
  showAllLink?: boolean;
  title?: Text;
  intro?: Text;
};

const pad = (value: number) => String(value).padStart(2, "0");

const caseSizes = "(min-width: 1440px) 1440px, 100vw";
type Appearance = { outlet: string; program: Text; minutes: number; videoId: string };

/* Apariciones de un caso de medios: cada una se reproduce en la tarjeta.
   Escritorio: fila de fichas bajo el video. Móvil: fila deslizable dentro de la tarjeta. */
function Appearances({
  items,
  active,
  onSelect,
  className = "",
}: {
  items: Appearance[];
  active: string | null;
  onSelect: (videoId: string) => void;
  className?: string;
}) {
  const { t } = useLang();
  const playLabel = (appearance: Appearance) =>
    t({
      es: `Reproducir ${t(appearance.program)}, ${appearance.outlet}, ${appearance.minutes} minutos`,
      en: `Play ${t(appearance.program)}, ${appearance.outlet}, ${appearance.minutes} minutes`,
    });

  return (
    <ul aria-label={t({ es: "Apariciones", en: "Appearances" })} className={`gap-1.5 ${className}`}>
      {items.map((appearance) => {
        const selected = active === appearance.videoId;
        return (
          <li key={appearance.videoId}>
            <button
              type="button"
              onClick={() => onSelect(appearance.videoId)}
              aria-pressed={selected}
              aria-label={playLabel(appearance)}
              className={`flex h-full min-h-11 w-full flex-col justify-center gap-1 rounded-xl px-3 py-2.5 text-left ring-1 transition-colors duration-500 ${
                selected
                  ? "bg-bone/[0.08] ring-signal"
                  : "bg-bone/[0.03] ring-bone/15 hover:bg-bone/[0.06] hover:ring-bone/35"
              }`}
            >
              <span className="flex items-center justify-between gap-2">
                <span className={`label flex min-w-0 items-center gap-1.5 ${selected ? "!text-signal" : "!text-bone/65"}`}>
                  <svg viewBox="0 0 10 12" className="size-2 shrink-0" fill="currentColor" aria-hidden="true">
                    <path d="M0 0v12l10-6z" />
                  </svg>
                  <span className="truncate">{appearance.outlet}</span>
                </span>
                <span className="label tabular shrink-0 whitespace-nowrap">{appearance.minutes} min</span>
              </span>
              <span className="line-clamp-1 text-sm text-bone/90">{t(appearance.program)}</span>
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
  Tarjetas apiladas hacia abajo: cada una queda fija y se encoge cuando la siguiente pasa encima.
  En móvil y tablet la tarjeta ocupa casi toda la pantalla, con la información bajo el video.
*/
export default function CaseStack({
  index = "02",
  showAllLink = true,
  title = { es: "Proyectos", en: "Projects" },
  intro = {
    es: "Producción general, colaboraciones y gestión de medios.",
    en: "Lead production, collaborations and media relations.",
  },
}: CaseStackProps) {
  const { t, href } = useLang();
  const listRef = useRef<HTMLOListElement>(null);
  const [playing, setPlaying] = useState<string | null>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const media = gsap.matchMedia();
    media.add("all", () => {
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

  return (
    <section id="casos" className="py-24 md:py-36">
      <div className="shell">
        <div className="mb-10 grid gap-6 md:mb-20 md:grid-cols-12 md:items-end md:gap-8">
          <div className="md:col-span-8">
            <SectionLabel index={index}>{t({ es: "Selección 2015 — 2026", en: "Selected work 2015 — 2026" })}</SectionLabel>
            <h2 data-split className="display mt-6 text-[clamp(2.1rem,6vw,5.75rem)]">
              <Words text={t(title)} />
            </h2>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <p className="max-w-sm text-bone/60" data-fade>
              {t(intro)}
            </p>
          </div>
        </div>

        <ol
          ref={listRef}
          aria-label={t({ es: "Proyectos destacados", en: "Featured projects" })}
          className="relative"
        >
          {cases.map((item, position) => {
            const videos = item.appearances?.map((appearance) => appearance.videoId) ?? [item.videoId];
            const activeVideo = playing && videos.includes(playing) ? playing : null;
            const activeLabel = item.appearances?.find((appearance) => appearance.videoId === activeVideo);
            return (
              <li
                key={item.videoId}
                data-case
                aria-label={`${pad(position + 1)} ${t({ es: "de", en: "of" })} ${pad(cases.length)}: ${item.title}`}
                className="sticky mb-[6vh] [--case-base:5.25rem] [--case-step:0.5rem] last:mb-0 lg:mb-[8vh] lg:[--case-base:5.5rem] lg:[--case-step:1.1rem]"
                style={
                  {
                    "--case-top": `calc(var(--case-base) + ${position} * var(--case-step))`,
                    top: "var(--case-top)",
                  } as CSSProperties
                }
              >
                <article
                  data-case-card
                  className="flex origin-top flex-col overflow-hidden rounded-[1.5rem] bg-[#090909] p-1.5 ring-1 ring-bone/10 will-change-transform max-lg:h-[min(calc(100svh-var(--case-top)-1rem),46rem)] md:rounded-[2.25rem] md:p-2"
                >
                  <div className="relative overflow-hidden rounded-[calc(1.5rem-0.375rem)] bg-ink-sunk max-lg:min-h-0 max-lg:flex-1 md:rounded-[calc(2.25rem-0.5rem)]">
                    {/* Móvil: la imagen llena el alto libre de la tarjeta. Escritorio: con apariciones,
                        el video cede alto para que las fichas quepan siempre en pantalla */}
                    <div
                      className={`relative w-full max-lg:h-full lg:aspect-[16/8] ${
                        item.appearances ? "lg:max-h-[calc(100svh-var(--case-top)-7rem)] lg:min-h-[20rem]" : ""
                      }`}
                    >
                      {activeVideo ? (
                        <YtEmbed
                          key={activeVideo}
                          videoId={activeVideo}
                          title={
                            activeLabel
                              ? `${item.title} ${t({ es: "en", en: "on" })} ${t(activeLabel.program)}, ${activeLabel.outlet}`
                              : `${item.title} — ${t(item.artist)}`
                          }
                        />
                      ) : (
                        <button
                          type="button"
                          onClick={() => setPlaying(item.videoId)}
                          data-cursor="Play"
                          className="group absolute inset-0 text-left"
                          aria-label={t({ es: `Reproducir ${item.title}, de ${t(item.artist)}`, en: `Play ${item.title} by ${t(item.artist)}` })}
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
                            {t({ es: "Reproducir", en: "Play" })}
                          </span>

                          <span className="absolute inset-x-8 bottom-8 hidden gap-6 lg:grid lg:grid-cols-12 lg:items-end">
                            <span className="lg:col-span-7">
                              <span className="label block !text-signal">{t(item.role)}</span>
                              <span className="display mt-3 block text-[clamp(1.9rem,4.6vw,4.5rem)]">
                                {item.title}
                                {item.subtitle ? (
                                  <span className="ml-3 align-top font-mono text-xs font-normal tracking-[0.08em] text-bone/60">
                                    {item.subtitle}
                                  </span>
                                ) : null}
                              </span>
                              <span className="mt-3 block text-lg text-bone/75">{t(item.artist)}</span>
                            </span>
                            <span className="lg:col-span-5">
                              <span className="block max-w-md text-pretty text-[0.95rem] leading-relaxed text-bone/70">
                                {t(item.summary)}
                              </span>
                              <span className="mt-5 flex flex-wrap gap-2">
                                {item.scope.map((scope) => (
                                  <span
                                    key={scope.es}
                                    className="rounded-full border border-bone/20 px-3 py-1.5 text-xs text-bone/80"
                                  >
                                    {t(scope)}
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

                  <div className="flex shrink-0 flex-col px-3 pb-3 pt-5 sm:px-4 lg:hidden">
                    <p className="label !text-signal">{t(item.role)}</p>
                    <h3 className="display mt-2.5 text-[clamp(1.5rem,6vw,2.25rem)]">
                      {item.title}
                      {item.subtitle ? (
                        <span className="ml-2 align-top font-mono text-[0.625rem] font-normal tracking-[0.08em] text-bone/60">
                          {item.subtitle}
                        </span>
                      ) : null}
                    </h3>
                    <p className="mt-2 text-bone/80">{t(item.artist)}</p>
                    <p className="mt-4 line-clamp-4 text-pretty text-sm leading-relaxed text-bone/60">{t(item.summary)}</p>
                    {item.appearances ? (
                      <Appearances
                        items={item.appearances}
                        active={activeVideo}
                        onSelect={setPlaying}
                        className="-mx-3 flex overflow-x-auto px-3 pt-5 [scrollbar-width:none] sm:-mx-4 sm:px-4 [&::-webkit-scrollbar]:hidden [&>li]:w-[12.5rem] [&>li]:shrink-0"
                      />
                    ) : (
                      <ul className="flex flex-wrap gap-1.5 pt-5">
                        {item.scope.map((scope) => (
                          <li key={scope.es} className="rounded-full border border-bone/15 px-2.5 py-1 text-xs text-bone/75">
                            {t(scope)}
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

        {showAllLink ? (
          <div className="mt-12 flex justify-center md:mt-16" data-fade>
            <Link href={href("/proyectos")} className="btn-line group">
              {t({ es: "Ver todos los proyectos", en: "See all projects" })}
              <Arrow className="size-4 transition-transform duration-500 group-hover:translate-x-0.5" direction="right" />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
