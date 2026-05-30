import Link from "next/link";
import { ArrowUpRight, Network } from "lucide-react";
import { collaborationHighlights } from "@/data/site";

export default function CollaborationNetwork() {
  return (
    <section className="border-y hairline bg-[#080807] py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-12 grid gap-7 md:grid-cols-[0.95fr_1.05fr] md:items-end" data-reveal>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#d8b76b]">
              Colaboraciones y medios
            </p>
            <h2 data-reveal-title className="mt-5 text-3xl font-medium text-white md:text-4xl">
              Una red que convierte canciones en presencia publica.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/58 md:justify-self-end">
            Fran G Genuino aparece como artista y cantante. Genuino Family opera la
            otra capa: medios, television, radio, logistica audiovisual y cruces entre
            artistas, productores y equipos de negocio.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" data-stagger>
          {collaborationHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="bento-card min-h-[17rem] rounded-[1.35rem] border hairline bg-[linear-gradient(145deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] p-5"
              >
                <div className="mb-7 grid size-12 place-items-center rounded-full border border-[#d8b76b]/28 bg-[#d8b76b]/10 text-[#f4d489]">
                  <Icon size={21} strokeWidth={1.8} />
                </div>
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#d8b76b]">
                  {item.kicker}
                </p>
                <h3 className="mt-3 text-xl font-medium text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/58">{item.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-[1.2rem] border border-white/10 bg-white/[0.026] p-5 md:flex-row md:items-center md:justify-between">
          <div className="flex max-w-3xl gap-4">
            <div className="mt-1 grid size-10 shrink-0 place-items-center rounded-full border border-[#d8b76b]/24 bg-[#d8b76b]/8 text-[#d8b76b]">
              <Network size={18} />
            </div>
            <p className="text-sm leading-7 text-white/58">
              La red se entiende por capas: preparación del artista, coordinación del
              equipo, llegada a medios y lectura comercial para cada lanzamiento.
            </p>
          </div>
          <Link
            href="/proyectos#trabajos-medios"
            data-cursor="Ver"
            data-cursor-mode="link"
            className="ghost-cta inline-flex h-12 shrink-0 items-center justify-center gap-3 rounded-full px-6 text-sm font-medium text-white/90"
          >
            Ver trabajos en medios <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
