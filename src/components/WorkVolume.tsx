"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { type CSSProperties, useEffect, useRef } from "react";
import { openCatalog } from "@/components/MediaCatalog";
import Arrow from "@/components/ui/Arrow";
import SectionLabel from "@/components/ui/SectionLabel";
import Words from "@/components/ui/Words";
import { artistCredits, blurDataUrl, catalog, outlets, releases, workAreas, workVideos, ytZoom } from "@/data/site";
import { useLang } from "@/i18n/LangProvider";

gsap.registerPlugin(ScrollTrigger);

const pad = (value: number) => String(value).padStart(2, "0");

/* Miniatura liviana en 16:9 (siempre existe), suficiente para el muro */
const wallThumb = (videoId: string) => `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`;

const half = Math.ceil(workVideos.length / 2);
const wallRows = [workVideos.slice(0, half), workVideos.slice(half)];

function WallRow({ ids, reverse }: { ids: string[]; reverse?: boolean }) {
  const strip = (copy: number) => (
    <ul className="flex shrink-0">
      {ids.map((videoId) => (
        <li
          key={`${copy}-${videoId}`}
          className="relative mx-1 aspect-video w-36 shrink-0 overflow-hidden rounded-lg bg-ink-sunk md:mx-1.5 md:w-60 md:rounded-xl"
        >
          <Image
            src={wallThumb(videoId)}
            alt=""
            fill
            sizes="(min-width: 768px) 240px, 144px"
            placeholder="blur"
            blurDataURL={blurDataUrl}
            style={{ scale: ytZoom(videoId) }}
            className="media-dim object-cover"
          />
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className="marquee"
      style={{ "--marquee-duration": "90s", animationDirection: reverse ? "reverse" : undefined } as CSSProperties}
    >
      {strip(0)}
      {strip(1)}
    </div>
  );
}

/*
  Volumen de trabajo: muro con todos los videos publicados y conteo por área.
  Cada área abre su lista ya filtrada en el catálogo de medios.
*/
export default function WorkVolume({ index = "03" }: { index?: string }) {
  const { t, href } = useLang();
  const sectionRef = useRef<HTMLElement>(null);

  const counts = workAreas.map((area) =>
    area.filter
      ? catalog.filter((item) => item.tags.includes(area.filter!)).length
      : releases.filter((item) => item.byFran).length,
  );

  const proof = [
    { value: { es: "N.º 1", en: "#1" }, label: { es: "en radio en Chile", en: "on Chilean radio" } },
    { value: String(outlets.length), label: { es: "medios nacionales", en: "national outlets" } },
    { value: String(artistCredits.length), label: { es: "artistas", en: "artists" } },
    { value: "10", label: { es: "países de gira", en: "touring countries" } },
    { value: "2007", label: { es: "en la música desde", en: "making music since" } },
  ];

  /* Los números suben desde cero al entrar; sin movimiento reducido quedan fijos */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-count]", section).forEach((element) => {
        const target = Number(element.dataset.count);
        const counter = { value: 0 };
        gsap.to(counter, {
          value: target,
          duration: 1.6,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 90%", once: true },
          onUpdate: () => {
            element.textContent = pad(Math.round(counter.value));
          },
        });
        element.textContent = pad(0);
      });
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="volumen" className="overflow-hidden py-24 md:py-36">
      <div className="shell">
        <div className="mb-12 grid gap-6 md:mb-16 md:grid-cols-12 md:items-end md:gap-8">
          <div className="md:col-span-8">
            <SectionLabel index={index}>{t({ es: "Volumen de trabajo", en: "Body of work" })}</SectionLabel>
            <h2 data-split className="display mt-6 text-[clamp(2.1rem,6vw,5.75rem)]">
              <Words
                text={t({
                  es: `${workVideos.length} trabajos publicados`,
                  en: `${workVideos.length} released works`,
                })}
              />
            </h2>
          </div>
          <p className="max-w-sm text-bone/60 md:col-span-4 md:justify-self-end" data-fade>
            {t({
              es: "Producción, radio, televisión y prensa. Elige un área para ver su lista completa.",
              en: "Production, radio, TV and press. Pick an area to see the full list.",
            })}
          </p>
        </div>
      </div>

      <div
        className="marquee-wrap flex flex-col gap-2 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)] md:gap-3"
        aria-hidden="true"
      >
        {wallRows.map((ids, row) => (
          <WallRow key={row} ids={ids} reverse={row === 1} />
        ))}
      </div>

      <div className="shell">
        <ul className="mt-12 grid grid-cols-2 border-l border-t border-line md:mt-16 lg:grid-cols-5">
          {workAreas.map((area, position) => {
            const content = (
              <>
                <span
                  data-count={counts[position]}
                  className="display tabular block text-[clamp(3rem,7vw,6rem)] leading-none transition-colors duration-500 group-hover:text-signal"
                >
                  {pad(counts[position])}
                </span>
                <span className="mt-6 block text-lg font-medium tracking-[-0.01em]">{t(area.label)}</span>
                <span className="mt-2 block text-pretty text-sm leading-relaxed text-bone/55">{t(area.detail)}</span>
                <span className="label mt-auto flex items-center gap-2 pt-6 !text-bone/70 group-hover:!text-bone">
                  {area.filter ? t({ es: "Ver lista", en: "See list" }) : t({ es: "Escuchar", en: "Listen" })}
                  <Arrow
                    className="size-3 transition-transform duration-500 group-hover:translate-x-0.5"
                    direction="right"
                  />
                </span>
              </>
            );
            const tileClass =
              "group flex h-full min-h-[15rem] w-full flex-col p-5 text-left transition-colors duration-500 hover:bg-bone/[0.03] md:min-h-[18rem] md:p-7";
            return (
              <li
                key={area.label.es}
                className={`border-b border-r border-line ${position === workAreas.length - 1 ? "col-span-2 lg:col-span-1" : ""}`}
              >
                {area.filter ? (
                  <button type="button" onClick={() => openCatalog(area.filter!)} className={tileClass}>
                    {content}
                  </button>
                ) : (
                  <Link href={href(area.href!)} className={tileClass}>
                    {content}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-5 md:mt-12">
          {proof.map((item) => (
            <li key={item.label.es} className="flex items-baseline gap-2.5">
              <span className="display text-2xl md:text-3xl">{typeof item.value === "string" ? item.value : t(item.value)}</span>
              <span className="label">{t(item.label)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
