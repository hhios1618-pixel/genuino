"use client";

import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import { blurDataUrl, fieldPhotos } from "@/data/site";
import { useLang } from "@/i18n/LangProvider";

export default function FieldPhotos({ index }: { index: string }) {
  const { t } = useLang();

  return (
    <section className="pb-24 md:pb-36">
      <div className="shell mb-8 flex items-baseline justify-between gap-6 border-t border-line pt-6">
        <SectionLabel index={index}>{t({ es: "Detrás de cámara", en: "Behind the scenes" })}</SectionLabel>
        <p className="label">{t({ es: "Fotografía", en: "Photography" })}</p>
      </div>
      <div className="shell">
        <div
          className="-mx-[var(--gutter)] flex snap-x snap-mandatory scroll-px-[var(--gutter)] gap-4 overflow-x-auto px-[var(--gutter)] pb-4 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:gap-x-4 md:gap-y-12 md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden"
          data-stagger
        >
          {fieldPhotos.map((photo) => (
            <figure key={photo.src} className="w-[62vw] shrink-0 snap-start sm:w-[16rem] md:w-auto">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.1rem] bg-ink-sunk">
                <Image
                  src={photo.src}
                  alt={`${t(photo.title)}. ${t(photo.caption)}`}
                  fill
                  sizes="(min-width: 768px) 31vw, 62vw"
                  placeholder="blur"
                  blurDataURL={blurDataUrl}
                  style={{ objectPosition: photo.position }}
                  className="object-cover brightness-90"
                />
              </div>
              <figcaption className="mt-4">
                <p className="font-medium">{t(photo.title)}</p>
                <p className="mt-1 text-sm text-bone/55">{t(photo.caption)}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
