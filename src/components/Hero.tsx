"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Arrow from "@/components/ui/Arrow";
import Words from "@/components/ui/Words";
import YtImage from "@/components/ui/YtImage";
import { heroReel } from "@/data/site";

const SLIDE_MS = 6500;

export default function Hero() {
  const [active, setActive] = useState(0);
  const current = heroReel[active];

  useEffect(() => {
    const timer = window.setTimeout(() => setActive((value) => (value + 1) % heroReel.length), SLIDE_MS);
    return () => window.clearTimeout(timer);
  }, [active]);

  return (
    <section className="relative h-[100dvh] min-h-[40rem] overflow-clip bg-ink-sunk">
      <div className="absolute inset-0" aria-hidden="true">
        {heroReel.map((slide, position) => (
          <div
            key={slide.videoId}
            className={`absolute inset-0 transition-opacity duration-[1.6s] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              active === position ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className={`absolute inset-0 transition-transform ease-linear ${
                active === position ? "scale-100 duration-[8s]" : "scale-[1.08] duration-0"
              }`}
            >
              <YtImage
                videoId={slide.videoId}
                alt=""
                sizes="100vw"
                priority={position === 0}
                className="brightness-[0.9]"
              />
            </div>
          </div>
        ))}
        {/* Solo se oscurecen los bordes: el centro de la imagen queda limpio */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.6)_0%,transparent_22%,transparent_56%,rgba(0,0,0,0.92)_100%)]" />
      </div>

      <div className="shell relative flex h-full flex-col justify-end pb-7 md:pb-10">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h1 className="hero-rise display text-[clamp(2.25rem,4.6vw,5rem)] leading-[0.9]">
              <span className="sr-only">Genuino Family, productora musical</span>
              <span aria-hidden="true">
                <Words text="Genuino" /> <Words text="Family" offset={1} className="text-signal" />
              </span>
            </h1>
            <div
              className="fade-in mt-5 flex flex-col gap-4 border-t border-bone/20 pt-5 sm:flex-row sm:items-center sm:justify-between"
              style={{ "--d": "0.9s" } as React.CSSProperties}
            >
              <p className="max-w-md text-pretty text-[0.95rem] text-bone/80 md:text-base">
                Producción musical, audiovisual y gestión de medios. Chile.
              </p>
              <Link href="/proyectos" className="u-link flex w-fit shrink-0 items-center gap-2 text-sm text-bone">
                Proyectos
                <Arrow className="size-3.5" direction="right" />
              </Link>
            </div>
          </div>

          <div
            className="fade-in lg:col-span-4 lg:col-start-9 lg:justify-self-end"
            style={{ "--d": "1.1s" } as React.CSSProperties}
          >
            <div aria-live="polite" className="min-h-[3.75rem]">
              <p key={current.videoId} className="animate-[fade-up_0.8s_var(--ease-out)_both]">
                <span className="block text-xl font-semibold tracking-[-0.02em] text-gold md:text-2xl">
                  {current.artist}
                </span>
                <span className="label mt-1.5 block !text-bone/70">
                  {current.title} — {current.role}
                </span>
              </p>
            </div>
            <div className="mt-5 flex gap-2" role="tablist" aria-label="Proyectos destacados">
              {heroReel.map((slide, position) => (
                <button
                  key={slide.videoId}
                  type="button"
                  role="tab"
                  aria-selected={active === position}
                  aria-label={`${slide.title}, ${slide.artist}`}
                  onClick={() => setActive(position)}
                  className="group flex w-14 flex-col gap-2 pt-2 text-left md:w-16"
                >
                  <span className="label tabular !text-[0.625rem] group-aria-selected:!text-bone">
                    {String(position + 1).padStart(2, "0")}
                  </span>
                  <span className="relative block h-0.5 w-full overflow-hidden bg-bone/25">
                    {active === position ? (
                      <span
                        className="absolute inset-0 origin-left bg-gold"
                        style={{ animation: `progress ${SLIDE_MS}ms linear forwards` }}
                      />
                    ) : null}
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
