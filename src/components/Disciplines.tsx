"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Arrow from "@/components/ui/Arrow";
import SectionLabel from "@/components/ui/SectionLabel";
import Words from "@/components/ui/Words";
import { blurDataUrl, disciplines } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

type DisciplinesProps = {
  index?: string;
  detailed?: boolean;
};

export default function Disciplines({ index = "04", detailed = false }: DisciplinesProps) {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-discipline]", list).forEach((row, position) => {
        ScrollTrigger.create({
          trigger: row,
          start: "top 55%",
          end: "bottom 55%",
          onToggle: (self) => {
            if (self.isActive) setActive(position);
          },
        });
      });
    }, list);

    return () => context.revert();
  }, []);

  return (
    <section id="servicios" className="py-24 md:py-36">
      <div className="shell">
        <div className="mb-16 grid gap-8 md:mb-24 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionLabel index={index}>Música · Audiovisual · Medios · Management</SectionLabel>
            <h2 data-split className="display mt-6 text-[clamp(3.25rem,9vw,8.5rem)]">
              <Words text="Servicios" />
            </h2>
          </div>
          <p className="max-w-sm text-bone/60 md:col-span-4 md:justify-self-end" data-fade>
            Contratables por separado o como proyecto integral.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <div className="rounded-[2rem] bg-bone/[0.035] p-2 ring-1 ring-bone/10">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(2rem-0.5rem)] bg-ink-sunk">
                  {disciplines.map((discipline, position) => (
                    <Image
                      key={discipline.name}
                      src={discipline.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 40vw, 0px"
                      placeholder="blur"
                      blurDataURL={blurDataUrl}
                      style={{ objectPosition: discipline.imagePosition }}
                      className={`object-cover transition-[opacity,scale,filter] duration-[1.1s] ease-[cubic-bezier(0.32,0.72,0,1)] ${
                        active === position
                          ? "scale-100 opacity-100 brightness-90"
                          : "scale-110 opacity-0 brightness-50"
                      }`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-sunk/90 via-transparent to-transparent" />
                  <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
                    <p className="display text-[5.5rem] leading-none text-bone/90">
                      {disciplines[active].index}
                    </p>
                    <p className="label !text-bone/80">{disciplines[active].name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ol ref={listRef} className="border-t border-line lg:col-span-7">
            {disciplines.map((discipline, position) => (
              <li
                key={discipline.name}
                data-discipline
                className={`border-b border-line py-10 transition-opacity duration-700 md:py-14 ${
                  active === position ? "lg:opacity-100" : "lg:opacity-35"
                }`}
              >
                <div className="flex items-baseline justify-between gap-6">
                  <h3 className="display text-[clamp(3rem,7vw,6rem)]">{discipline.name}</h3>
                  <span className="label tabular">{discipline.index}</span>
                </div>
                <p className="mt-4 text-lg text-bone/85 md:text-xl">{discipline.line}</p>
                <p className="mt-5 max-w-xl text-pretty leading-relaxed text-bone/65">{discipline.body}</p>

                {detailed ? (
                  <dl className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
                    {discipline.items.map((item) => (
                      <div key={item.title} className="border-t border-line pt-4">
                        <dt className="font-medium">{item.title}</dt>
                        <dd className="mt-2 text-sm leading-relaxed text-bone/55">{item.detail}</dd>
                      </div>
                    ))}
                  </dl>
                ) : (
                  <ul className="mt-7 flex flex-wrap gap-2">
                    {discipline.items.map((item) => (
                      <li key={item.title} className="rounded-full border border-bone/15 px-3.5 py-1.5 text-sm text-bone/75">
                        {item.title}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </div>

        {!detailed ? (
          <div className="mt-16 flex justify-center" data-fade>
            <Link href="/servicios" className="btn-line group">
              Ver servicios en detalle
              <Arrow className="size-4 transition-transform duration-500 group-hover:translate-x-0.5" direction="right" />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
