"use client";

import { artistCredits, outlets } from "@/data/site";
import { useLang } from "@/i18n/LangProvider";

function Row() {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden="true">
      {artistCredits.map((name) => (
        <li key={name} className="flex items-center">
          <span className="display whitespace-nowrap px-[0.4em] text-[clamp(1.9rem,4.4vw,4.25rem)] text-bone">
            {name}
          </span>
          <span className="on-air mx-[1.5vw] !size-2.5" />
        </li>
      ))}
    </ul>
  );
}

export default function CreditsMarquee() {
  const { t } = useLang();

  return (
    <section className="border-y border-line py-8 md:py-10" aria-labelledby="creditos">
      <div className="shell mb-6 flex flex-wrap items-baseline justify-between gap-4">
        <h2 id="creditos" className="label">
          {t({ es: "Artistas", en: "Artists" })}
        </h2>
        <p className="label">
          {t({ es: "Medios", en: "Media" })} — {outlets.join(" · ")}
        </p>
      </div>
      <p className="sr-only">{artistCredits.join(", ")}</p>
      <div className="marquee-wrap overflow-hidden">
        <div className="marquee" style={{ "--marquee-duration": "55s" } as React.CSSProperties}>
          <Row />
          <Row />
        </div>
      </div>
    </section>
  );
}
