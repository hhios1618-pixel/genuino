"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import Words from "@/components/ui/Words";
import { blurDataUrl, timeline, ytThumb, ytZoom } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

export default function Timeline({ index = "05", label = "El fundador — Fran G Genuino" }: { index?: string; label?: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLOListElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const progress = progressRef.current;
    if (!section || !track || !progress) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const media = gsap.matchMedia();
    media.add("(min-width: 768px)", () => {
      const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);
      const setHeight = () => {
        section.style.height = `${distance() + window.innerHeight}px`;
      };
      setHeight();
      ScrollTrigger.addEventListener("refreshInit", setHeight);

      const scrollTrigger = {
        trigger: section,
        start: "top top",
        end: () => `+=${distance()}`,
        scrub: 0.7,
        invalidateOnRefresh: true,
      };
      gsap.to(track, { x: () => -distance(), ease: "none", scrollTrigger });
      gsap.fromTo(progress, { scaleX: 0 }, { scaleX: 1, ease: "none", scrollTrigger });
      ScrollTrigger.refresh();

      return () => {
        ScrollTrigger.removeEventListener("refreshInit", setHeight);
        section.style.height = "";
      };
    });

    return () => media.revert();
  }, []);

  return (
    <section ref={sectionRef} id="trayectoria" className="relative">
      <div className="flex flex-col justify-center overflow-hidden py-24 md:sticky md:top-0 md:h-[100dvh] md:py-0">
        <div className="shell mb-12 grid gap-6 md:mb-16 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionLabel index={index}>{label}</SectionLabel>
            <h2 data-split className="display mt-6 text-[clamp(2.1rem,6vw,5.75rem)]">
              <Words text="Trayectoria" />
            </h2>
          </div>
          <p className="max-w-sm text-bone/60 md:col-span-4 md:justify-self-end">
            La experiencia detrás de la productora: escenario, estudio y medios.
          </p>
        </div>

        <ol
          ref={trackRef}
          className="flex w-full flex-col px-[var(--gutter)] md:w-max md:flex-row md:pr-[20vw]"
        >
          {timeline.map((item, position) => {
            const isFamily = item.title === "Genuino Family";
            return (
              <li
                key={item.title}
                className={`relative border-l border-line pb-12 pl-6 last:pb-0 md:w-[clamp(18rem,26vw,24rem)] md:shrink-0 md:px-8 md:pb-0 ${
                  position % 2 === 1 ? "md:pt-16" : ""
                }`}
              >
                <span
                  className={`absolute -left-[5px] top-2.5 size-2.5 rounded-full md:top-0 ${
                    isFamily ? "on-air" : "bg-bone/40"
                  }`}
                  aria-hidden="true"
                />
                <p className="flex items-baseline gap-2">
                  <span className={`display tabular text-[clamp(3rem,5.5vw,5rem)] ${isFamily ? "text-signal" : ""}`}>
                    {item.mark}
                  </span>
                  {item.unit ? <span className="label !text-bone/70">{item.unit}</span> : null}
                </p>
                <h3 className="mt-4 text-xl font-medium tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-3 max-w-[20rem] text-pretty text-sm leading-relaxed text-bone/60">{item.body}</p>
                {item.videoId ? (
                  <div className="relative mt-6 aspect-video w-full max-w-[20rem] overflow-hidden rounded-xl bg-ink-sunk">
                    <Image
                      src={ytThumb(item.videoId)}
                      style={{ scale: ytZoom(item.videoId) }}
                      alt=""
                      fill
                      sizes="320px"
                      placeholder="blur"
                      blurDataURL={blurDataUrl}
                      className="media-dim object-cover"
                    />
                  </div>
                ) : null}
              </li>
            );
          })}
        </ol>

        <div className="shell mt-12 hidden md:block">
          <div className="h-px w-full bg-line">
            <div ref={progressRef} className="h-px origin-left scale-x-0 bg-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}
