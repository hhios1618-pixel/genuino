"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import Words from "@/components/ui/Words";
import { techPillars } from "@/data/site";
import { useLang } from "@/i18n/LangProvider";

/* Las tres piezas de Atlas ONE: sitio, operación y agentes */
export default function TechPillars({ index }: { index: string }) {
  const { t } = useLang();

  return (
    <section className="py-24 md:py-36">
      <div className="shell">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionLabel index={index}>{t({ es: "Capacidades", en: "Capabilities" })}</SectionLabel>
            <h2 data-split className="display mt-6 text-[clamp(2.1rem,6vw,5.75rem)]">
              <Words text={t({ es: "Un solo sistema", en: "One system" })} />
            </h2>
          </div>
          <p className="max-w-md text-pretty text-bone/60 md:col-span-4" data-fade>
            {t({
              es: "Atlas ONE junta sitio, operación y agentes de IA en un solo lugar. Altius lo construye y lo opera contigo.",
              en: "Atlas ONE brings website, operations and AI agents into one place. Altius builds it and runs it with you.",
            })}
          </p>
        </div>

        <ol className="mt-16 grid border-t border-line md:grid-cols-3" data-stagger>
          {techPillars.map((pillar) => (
            <li
              key={pillar.index}
              className="border-b border-line py-10 md:border-b-0 md:border-r md:px-8 md:py-12 md:first:pl-0 md:last:border-r-0"
            >
              <p className="label tabular text-gold">{pillar.index}</p>
              <h3 className="mt-8 text-[clamp(1.6rem,2.6vw,2.25rem)] font-medium tracking-[-0.03em] md:mt-16">{t(pillar.name)}</h3>
              <p className="mt-4 text-pretty text-bone/65">{t(pillar.line)}</p>
              <ul className="mt-8 grid gap-3 border-t border-line pt-6">
                {pillar.items.map((item) => (
                  <li key={t(item)} className="flex gap-3 text-sm text-bone/80">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    {t(item)}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
