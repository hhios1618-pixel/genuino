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
    <section className="relative h-[100dvh] min-h-[40rem] overflow-hidden bg-ink-sunk">
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
                className="brightness-[0.62] saturate-[0.85]"
              />
            </div>
          </div>
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,7,6,0.7)_0%,rgba(8,7,6,0.05)_28%,rgba(8,7,6,0.1)_55%,rgba(8,7,6,0.92)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,6,0.55)_0%,transparent_55%)]" />
      </div>

      <div className="shell relative flex h-full flex-col justify-end pb-8 md:pb-12">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h1 className="hero-rise display text-[clamp(4rem,12.5vw,13.5rem)]">
              <span className="sr-only">Genuino Family, productora musical</span>
              <span aria-hidden="true">
                <Words text="Genuino Family" />
              </span>
            </h1>
            <div
              className="fade-in mt-7 flex flex-col gap-6 border-t border-bone/20 pt-6 sm:flex-row sm:items-center sm:justify-between"
              style={{ "--d": "0.9s" } as React.CSSProperties}
            >
              <p className="max-w-md text-pretty text-base text-bone/75 md:text-lg">
                Producción musical, audiovisual y gestión de medios. Chile.
              </p>
              <Link href="/proyectos" className="u-link flex w-fit items-center gap-2 text-sm text-bone">
                Proyectos
                <Arrow className="size-3.5" direction="right" />
              </Link>
            </div>
          </div>

          <div
            className="fade-in lg:col-span-4 lg:justify-self-end"
            style={{ "--d": "1.1s" } as React.CSSProperties}
          >
            <p className="label" aria-live="polite">
              <span key={current.videoId} className="block animate-[fade-up_0.8s_var(--ease-out)_both]">
                <span className="block text-bone">{current.artist}</span>
                <span className="mt-1 block">
                  {current.title} — {current.role}
                </span>
              </span>
            </p>
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
                  <span className="relative block h-px w-full overflow-hidden bg-bone/25">
                    {active === position ? (
                      <span
                        className="absolute inset-0 origin-left bg-bone"
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
