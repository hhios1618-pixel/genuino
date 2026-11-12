"use client";

import Arrow from "@/components/ui/Arrow";
import SectionLabel from "@/components/ui/SectionLabel";
import Words from "@/components/ui/Words";
import { altius, techCases, techCredentials, techProof } from "@/data/site";
import { useLang } from "@/i18n/LangProvider";

/* Respaldo: cifras, casos y credenciales publicados por Altius Ignite */
export default function TechProof({ index }: { index: string }) {
  const { t } = useLang();

  return (
    <section className="border-t border-line py-24 md:py-36">
      <div className="shell">
        <SectionLabel index={index}>{t({ es: "Respaldo", en: "Track record" })}</SectionLabel>
        <h2 data-split className="display mt-6 text-[clamp(2.1rem,6vw,5.75rem)]">
          <Words text={t({ es: "Ya funciona", en: "Already working" })} />
        </h2>

        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line pt-8 md:grid-cols-4 md:gap-8" data-stagger>
          {techProof.map((fact) => (
            <div key={t(fact.label)}>
              <dt className="sr-only">{t(fact.label)}</dt>
              <dd>
                <p className="display tabular text-[clamp(2rem,5vw,4.5rem)] text-gold">{fact.value}</p>
                <p className="mt-3 text-pretty text-sm leading-snug text-bone/75">{t(fact.label)}</p>
                <p className="label mt-2">{t(fact.source)}</p>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-20 grid gap-12 md:mt-28 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <p className="label">{t({ es: "Casos", en: "Clients" })}</p>
            <p className="mt-4 max-w-xs text-pretty text-bone/60">
              {t({
                es: "Del comercio en Bolivia a la cumbia chilena: cada marca con su propio estilo.",
                en: "From retail in Bolivia to Chilean cumbia: every brand with its own style.",
              })}
            </p>
            <a
              href={altius.casesHref}
              target="_blank"
              rel="noopener"
              className="group mt-6 inline-flex items-center gap-2 py-2 text-bone/80 hover:text-bone"
            >
              <span className="u-link">{t({ es: "Ver todos los casos en Altius", en: "See every case on Altius" })}</span>
              <Arrow className="size-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
          <ul className="border-t border-line md:col-span-8" data-stagger>
            {techCases.map((item) => (
              <li key={item.name} className="grid gap-1 border-b border-line py-5 sm:grid-cols-12 sm:gap-6">
                <p className="text-lg font-medium tracking-[-0.02em] sm:col-span-5">
                  {item.name} <span className="label ml-2 align-middle">{t(item.place)}</span>
                </p>
                <p className="text-pretty text-bone/60 sm:col-span-7">{t(item.detail)}</p>
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-16 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4" aria-label={t({ es: "Credenciales", en: "Credentials" })}>
          {techCredentials.map((credential) => (
            <li key={t(credential)} className="rounded-full border border-line px-5 py-3 text-sm text-bone/75">
              {t(credential)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
