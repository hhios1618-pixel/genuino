"use client";

import Words from "@/components/ui/Words";
import SectionLabel from "@/components/ui/SectionLabel";
import { artistCredits, catalog } from "@/data/site";
import { useLang } from "@/i18n/LangProvider";

const statement = {
  es: "Genuino Family es una productora chilena de música, videoclips y gestión de medios. Llevamos a los artistas a la radio, la televisión y la prensa, del estudio al lanzamiento.",
  en: "Genuino Family is a Chilean production company for music, music videos and media relations. We take artists from the studio to radio, TV and the press, all the way to release day.",
};

export default function Statement() {
  const { t } = useLang();

  return (
    <section className="py-28 md:py-44">
      <div className="shell grid gap-10 md:grid-cols-12">
        <SectionLabel index="01" className="md:col-span-3 md:pt-3">
          {t({ es: "Productora", en: "Production company" })}
        </SectionLabel>
        <div className="md:col-span-9">
          <p
            data-scrub-words
            className="text-balance text-[clamp(1.85rem,4.1vw,4rem)] font-medium leading-[1.08] tracking-[-0.03em]"
          >
            <Words text={t(statement)} />
          </p>
          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-line pt-7 sm:mt-14 sm:gap-8 sm:pt-8" data-stagger>
            {[
              { value: "2023", label: t({ es: "Fundada por el artista Fran G Genuino", en: "Founded by artist Fran G Genuino" }) },
              {
                value: String(artistCredits.length).padStart(2, "0"),
                label: t({ es: "Artistas con los que trabajamos", en: "Artists we work with" }),
              },
              {
                value: String(catalog.length).padStart(2, "0"),
                label: t({ es: "Trabajos en radio, TV y prensa", en: "Projects across radio, TV and press" }),
              },
            ].map((fact) => (
              <div key={fact.label}>
                <p className="display tabular text-[clamp(1.6rem,4.6vw,4.25rem)] text-gold">{fact.value}</p>
                <p className="mt-2 text-pretty text-xs leading-snug text-bone/55 sm:mt-3 sm:text-sm">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
