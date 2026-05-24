import Image from "next/image";
import { ArrowUpRight, Radio, Sparkles } from "lucide-react";
import { blurDataUrl, careerMilestones, proofStats } from "@/data/site";

export default function CareerProof() {
  const [featured, ...items] = careerMilestones;

  return (
    <section className="bg-[#050505] py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-12 grid gap-7 md:grid-cols-[0.92fr_1.08fr] md:items-end" data-reveal>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#d8b76b]">
              Trayectoria verificable
            </p>
            <h2 data-reveal-title className="mt-5 text-3xl font-medium text-white md:text-5xl">
              De catálogo propio a red de medios y colaboraciones.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/58 md:justify-self-end">
            La trayectoria se entiende mejor desde hechos concretos: lanzamientos,
            videos oficiales, cruces con artistas y trabajo real de amplificación.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-12" data-stagger>
          <a
            href={featured.href}
            target="_blank"
            rel="noreferrer"
            data-cursor="YouTube"
            data-cursor-mode="link"
            className="bento-card group relative min-h-[34rem] overflow-hidden rounded-[1.7rem] border hairline bg-black lg:col-span-7"
          >
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              placeholder="blur"
              blurDataURL={blurDataUrl}
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="glitch-media object-cover transition duration-700 group-hover:scale-[1.045]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.28),rgba(0,0,0,0.72)),linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.84))]" />
            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/14 bg-black/28 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/64 backdrop-blur-md">
              <Sparkles size={13} />
              {featured.eyebrow}
            </div>
            <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8">
              <p className="text-xs uppercase tracking-[0.3em] text-[#d8b76b]">{featured.year}</p>
              <h3 className="mt-4 max-w-2xl text-4xl font-medium text-white md:text-6xl">
                {featured.title}
              </h3>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/66">{featured.body}</p>
            </div>
          </a>

          <div className="grid gap-5 lg:col-span-5">
            <div className="grid grid-cols-2 gap-3">
              {proofStats.map((stat) => (
                <div
                  key={stat.label}
                  className="min-h-28 rounded-[1.15rem] border border-white/10 bg-white/[0.035] p-4"
                >
                  <p className="text-2xl font-semibold text-white md:text-3xl">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase leading-5 tracking-[0.18em] text-white/42">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {items.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="Abrir"
                data-cursor-mode="link"
                className="group grid min-h-36 grid-cols-[8rem_1fr] overflow-hidden rounded-[1.2rem] border border-white/10 bg-[#0b0a09] transition hover:border-[#d8b76b]/34"
              >
                <div className="relative bg-black">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    placeholder="blur"
                    blurDataURL={blurDataUrl}
                    sizes="8rem"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/16" />
                </div>
                <div className="flex min-w-0 flex-col justify-between p-4">
                  <div>
                    <p className="flex items-center gap-2 text-[0.66rem] uppercase tracking-[0.2em] text-[#d8b76b]/74">
                      <Radio size={13} />
                      {item.eyebrow}
                    </p>
                    <h3 className="mt-2 text-lg font-medium text-white">{item.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/52">{item.body}</p>
                  </div>
                  <span className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/42">
                    {item.year} <ArrowUpRight size={14} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
