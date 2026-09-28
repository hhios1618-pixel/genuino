"use client";

import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Arrow from "@/components/ui/Arrow";
import SectionLabel from "@/components/ui/SectionLabel";
import Words from "@/components/ui/Words";
import YtEmbed from "@/components/ui/YtEmbed";
import { blurDataUrl, catalog, catalogFilters, type CatalogFilter, ytThumb, ytZoom, ytWatch } from "@/data/site";

const ease = [0.32, 0.72, 0, 1] as const;
/* En móvil se muestran estas filas antes de "Ver todos" */
const MOBILE_LIMIT = 6;

export default function MediaCatalog({ index = "03" }: { index?: string }) {
  const [filter, setFilter] = useState<CatalogFilter>("Todo");
  const [hovered, setHovered] = useState<string | null>(null);
  const [open, setOpen] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const items = filter === "Todo" ? catalog : catalog.filter((item) => item.tags.includes(filter));

  useEffect(() => {
    const list = listRef.current;
    const preview = previewRef.current;
    if (!list || !preview || !window.matchMedia("(pointer: fine)").matches) return;

    const moveX = gsap.quickTo(preview, "x", { duration: 0.6, ease: "power3.out" });
    const moveY = gsap.quickTo(preview, "y", { duration: 0.6, ease: "power3.out" });
    const onMove = (event: PointerEvent) => {
      const rect = list.getBoundingClientRect();
      moveX(event.clientX - rect.left);
      moveY(event.clientY - rect.top);
    };
    list.addEventListener("pointermove", onMove);
    return () => list.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section id="catalogo" className="py-24 md:py-36">
      <div className="shell">
        <div className="mb-12 grid gap-8 md:mb-16 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionLabel index={index}>Radio, televisión y prensa</SectionLabel>
            <h2 data-split className="display mt-6 text-[clamp(2.1rem,6vw,5.75rem)]">
              <Words text="Medios" />
            </h2>
          </div>
          <p className="max-w-sm text-bone/60 md:col-span-4 md:justify-self-end" data-fade>
            Canciones y artistas gestionados por Genuino Family en medios de Chile.
          </p>
        </div>

        <div
          className="-mx-[var(--gutter)] mb-6 flex gap-2 overflow-x-auto px-[var(--gutter)] [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
          role="group"
          aria-label="Filtrar por tipo de trabajo"
        >
          {catalogFilters.map((option) => {
            const count =
              option === "Todo" ? catalog.length : catalog.filter((item) => item.tags.includes(option)).length;
            const active = filter === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => {
                  setFilter(option);
                  setOpen(null);
                  setExpanded(false);
                }}
                aria-pressed={active}
                className={`flex h-10 shrink-0 items-center gap-2 rounded-full border px-4 text-sm transition-colors duration-500 ${
                  active
                    ? "border-gold bg-gold text-ink"
                    : "border-bone/15 text-bone/70 hover:border-bone/50 hover:text-bone"
                }`}
              >
                {option}
                <span className={`font-mono text-[0.625rem] ${active ? "text-ink/60" : "text-bone/40"}`}>
                  {String(count).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>

        <div
          ref={listRef}
          className="relative border-t border-line"
          onPointerLeave={() => setHovered(null)}
        >
          <div
            ref={previewRef}
            className="pointer-events-none absolute left-0 top-0 z-20 hidden md:block"
            aria-hidden="true"
          >
            <div
              className={`relative aspect-video w-[19rem] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl bg-ink-sunk shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] transition-[opacity,scale] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                hovered && !open ? "scale-100 opacity-100" : "scale-75 opacity-0"
              }`}
            >
              {catalog.map((item) => (
                <Image
                  key={item.videoId}
                  src={ytThumb(item.videoId)}
                  style={{ scale: ytZoom(item.videoId) }}
                  alt=""
                  fill
                  sizes="304px"
                  placeholder="blur"
                  blurDataURL={blurDataUrl}
                  className={`object-cover transition-opacity duration-300 ${
                    hovered === item.videoId ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>

          <ul>
            <AnimatePresence initial={false} mode="popLayout">
              {items.map((item, position) => {
                const isOpen = open === item.videoId;
                return (
                  <motion.li
                    key={item.videoId}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease }}
                    className={`border-b border-line ${position >= MOBILE_LIMIT && !expanded ? "hidden md:block" : ""}`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : item.videoId)}
                      onPointerEnter={() => setHovered(item.videoId)}
                      aria-expanded={isOpen}
                      className="group relative grid w-full grid-cols-[2.25rem_1fr_auto] items-center gap-x-4 gap-y-1 py-5 text-left md:grid-cols-12 md:gap-6 md:py-7"
                    >
                      <span
                        className="absolute inset-0 origin-bottom scale-y-0 bg-bone/[0.03] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-y-100"
                        aria-hidden="true"
                      />
                      <span className="label tabular relative md:col-span-1">
                        {String(position + 1).padStart(2, "0")}
                      </span>
                      <span className="relative text-lg font-medium tracking-[-0.02em] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-2 md:col-span-5 md:text-2xl">
                        {item.title}
                      </span>
                      <span className="relative col-start-2 row-start-2 text-sm text-bone/55 md:col-span-3 md:col-start-auto md:row-start-auto md:text-base">
                        {item.artist}
                      </span>
                      <span className="label relative hidden md:col-span-2 md:block">{item.work}</span>
                      <span
                        className={`relative col-start-3 row-span-2 row-start-1 grid size-9 place-items-center justify-self-end rounded-full border transition-all duration-500 md:col-span-1 md:col-start-auto md:row-span-1 md:row-start-auto ${
                          isOpen
                            ? "rotate-90 border-signal bg-signal text-bone"
                            : "border-bone/20 text-bone/70 group-hover:border-bone group-hover:text-bone"
                        }`}
                      >
                        <Arrow className="size-3.5" direction="right" />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.7, ease }}
                          className="overflow-hidden"
                        >
                          <div className="grid gap-6 pb-8 md:grid-cols-12">
                            <div className="relative aspect-video overflow-hidden rounded-2xl bg-ink-sunk md:col-span-8 md:col-start-2">
                              <YtEmbed videoId={item.videoId} title={`${item.title} — ${item.artist}`} />
                            </div>
                            <div className="flex flex-col justify-end gap-4 md:col-span-3">
                              <p className="label">{item.work}</p>
                              <a
                                href={ytWatch(item.videoId)}
                                target="_blank"
                                rel="noreferrer"
                                className="u-link w-fit text-sm text-bone/80"
                              >
                                Abrir en YouTube
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </motion.li>
                );
              })}
            </AnimatePresence>
          </ul>
        </div>

        {items.length > MOBILE_LIMIT && !expanded ? (
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="btn-line mt-8 w-full justify-center md:hidden"
          >
            Ver los {items.length} trabajos
            <Arrow className="size-4" direction="down" />
          </button>
        ) : null}
      </div>
    </section>
  );
}
