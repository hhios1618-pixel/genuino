"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import Words from "@/components/ui/Words";
import { techProcess } from "@/data/site";
import { useLang } from "@/i18n/LangProvider";

export default function TechProcess({ index }: { index: string }) {
  const { t } = useLang();

  return (
    <section className="border-t border-line py-24 md:py-36">
      <div className="shell">
        <SectionLabel index={index}>{t({ es: "Cómo se trabaja", en: "How it works" })}</SectionLabel>
        <h2 data-split className="display mt-6 text-[clamp(2.1rem,6vw,5.75rem)]">
          <Words text={t({ es: "De punta a punta", en: "End to end" })} />
        </h2>
        <ol className="mt-16 grid border-t border-line md:grid-cols-4" data-stagger>
          {techProcess.map((step) => (
            <li key={step.index} className="border-b border-line py-8 md:border-b-0 md:border-r md:px-6 md:py-10 md:first:pl-0 md:last:border-r-0">
              <p className="label tabular">{step.index}</p>
              <h3 className="mt-10 text-2xl font-medium tracking-[-0.025em] md:mt-20">{t(step.title)}</h3>
              <p className="mt-3 text-pretty text-bone/60">{t(step.body)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
