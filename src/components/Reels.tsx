"use client";

import Image from "next/image";
import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { blurDataUrl, reels } from "@/data/site";

function Reel({ reel }: { reel: (typeof reels)[number] }) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="w-[62vw] shrink-0 snap-start sm:w-[16rem] lg:w-auto">
      <div className="relative aspect-[9/16] overflow-hidden rounded-[1.1rem] bg-ink-sunk">
        {failed ? (
          <Image
            src={reel.poster}
            alt=""
            fill
            sizes="(min-width: 1024px) 20vw, 62vw"
            placeholder="blur"
            blurDataURL={blurDataUrl}
            className="object-cover brightness-75"
          />
        ) : (
          <video
            className="h-full w-full object-cover"
            src={reel.src}
            poster={reel.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onError={() => setFailed(true)}
            aria-label={`${reel.title}. ${reel.caption}`}
          />
        )}
      </div>
      <figcaption className="mt-4">
        <p className="font-medium">{reel.title}</p>
        <p className="mt-1 text-sm text-bone/55">{reel.caption}</p>
      </figcaption>
    </figure>
  );
}

export default function Reels({ index }: { index: string }) {
  return (
    <section className="pb-24 md:pb-36">
      <div className="shell mb-8 flex items-baseline justify-between gap-6 border-t border-line pt-6">
        <SectionLabel index={index}>Estudio y rodaje</SectionLabel>
        <p className="label">Registro vertical</p>
      </div>
      <div className="shell">
        <div
          className="-mx-[var(--gutter)] flex snap-x snap-mandatory scroll-px-[var(--gutter)] gap-4 overflow-x-auto px-[var(--gutter)] pb-4 [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0"
          data-stagger
        >
          {reels.map((reel) => (
            <Reel key={reel.title} reel={reel} />
          ))}
        </div>
      </div>
    </section>
  );
}
