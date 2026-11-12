"use client";

import Link from "next/link";
import Arrow from "@/components/ui/Arrow";
import SectionLabel from "@/components/ui/SectionLabel";
import Words from "@/components/ui/Words";
import { altius } from "@/data/site";
import { useLang } from "@/i18n/LangProvider";

/* Cierre de Tecnología: un solo CTA principal hacia el diagnóstico en Altius */
export default function TechCTA({ index }: { index: string }) {
  const { t, href } = useLang();

  return (
    <section className="border-t border-line py-24 md:py-40">
      <div className="shell">
        <SectionLabel index={index}>{t({ es: "Diagnóstico gratis", en: "Free assessment" })}</SectionLabel>
        <h2 data-split className="display mt-6 text-[clamp(2.1rem,6vw,5.75rem)]">
          <Words text={t({ es: "Cuéntanos el problema", en: "Tell us the problem" })} />
        </h2>

        <div className="mt-10 grid gap-10 border-t border-line pt-8 md:mt-14 md:grid-cols-12 md:items-end md:gap-8" data-fade>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-bone/70 md:col-span-7">
            {t({
              es: "El diagnóstico es gratis y la propuesta llega en 48 horas. Lo atiende directamente el equipo de Altius Ignite.",
              en: "The assessment is free and the proposal arrives within 48 hours. The Altius Ignite team handles it directly.",
            })}
          </p>
          <div className="flex flex-col gap-5 md:col-span-5 md:items-end">
            <a href={altius.href} target="_blank" rel="noopener" className="btn w-fit shrink-0" data-magnetic>
              {t({ es: "Solicitar diagnóstico", en: "Request an assessment" })}
              <span className="btn-icon">
                <Arrow className="size-4" />
              </span>
            </a>
            <p className="text-sm text-bone/55 md:text-right">
              {t({ es: "¿Prefieres partir por Genuino?", en: "Rather start with Genuino?" })}{" "}
              <Link href={href("/contacto")} className="u-link -my-3 inline-block py-3 text-bone/80 hover:text-bone">
                {t({ es: "Escríbenos aquí", en: "Write to us here" })}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
