"use client";

import Link from "next/link";
import Arrow from "@/components/ui/Arrow";
import SectionLabel from "@/components/ui/SectionLabel";
import Words from "@/components/ui/Words";
import { useLang } from "@/i18n/LangProvider";

const arms = [
  {
    name: "Genuino Family",
    role: { es: "Creativo", en: "Creative" },
    areas: { es: "Música · Video · Medios · Management", en: "Music · Video · Media · Management" },
    body: {
      es: "Del estudio al lanzamiento: la obra, el videoclip y su llegada a radio, televisión y prensa.",
      en: "From studio to release: the song, the video and its reach across radio, TV and press.",
    },
  },
  {
    name: "Altius Ignite",
    role: { es: "Tecnología", en: "Technology" },
    areas: { es: "Web · CRM · Agentes de IA", en: "Web · CRM · AI agents" },
    body: {
      es: "El software que sostiene la operación: sitio, ficha de cada cliente y agentes que atienden de noche.",
      en: "The software that runs the operation: website, a record for every client and agents that work overnight.",
    },
  },
];

/* Portada: Genuino Family y su brazo tecnológico como un solo ecosistema */
export default function Ecosystem({ index }: { index: string }) {
  const { t, href } = useLang();

  return (
    <section className="border-t border-line py-24 md:py-36">
      <div className="shell">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionLabel index={index}>{t({ es: "Ecosistema", en: "Ecosystem" })}</SectionLabel>
            <h2 data-split className="display mt-6 text-[clamp(2.1rem,6vw,5.75rem)]">
              <Words text={t({ es: "Creatividad y tecnología", en: "Creative and technology" })} />
            </h2>
          </div>
          <p className="max-w-md text-pretty text-bone/60 md:col-span-4" data-fade>
            {t({
              es: "Genuino Family suma a Altius Ignite como su brazo tecnológico para proyectos de innovación y CRM.",
              en: "Genuino Family works with Altius Ignite as its technology arm for innovation and CRM projects.",
            })}
          </p>
        </div>

        <div className="mt-14 grid border-t border-line md:grid-cols-2" data-stagger>
          {arms.map((arm) => (
            <article key={arm.name} className="border-b border-line py-10 md:border-b-0 md:px-8 md:py-12 md:first:border-r md:first:pl-0">
              <p className="label text-gold">{t(arm.role)}</p>
              <h3 className="mt-6 text-[clamp(1.75rem,3vw,2.75rem)] font-medium tracking-[-0.035em]">{arm.name}</h3>
              <p className="label mt-3">{t(arm.areas)}</p>
              <p className="mt-6 max-w-md text-pretty text-bone/65">{t(arm.body)}</p>
            </article>
          ))}
        </div>

        <Link href={href("/tecnologia")} className="btn-line mt-12 w-fit" data-magnetic>
          {t({ es: "Ver capacidades tecnológicas", en: "See technology capabilities" })}
          <Arrow className="size-4" direction="right" />
        </Link>
      </div>
    </section>
  );
}
