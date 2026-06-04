import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { artistProfileImages, blurDataUrl } from "@/data/site";

export default function About() {
  const [studio] = artistProfileImages;

  return (
    <section id="sobre" className="border-y hairline bg-[#090908] py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end" data-reveal>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#d8b76b]">
              Perfil artístico
            </p>
            <h2 data-reveal-title className="mt-5 max-w-3xl text-3xl font-medium text-white md:text-5xl">
              Fran G Genuino: artista, productor y gestor desde Valparaíso.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-white/62">
            De Jay G El Genuino a una etapa de catálogo, colaboraciones y productora.
            Reggaeton, trap y merengue urbano con una lectura comercial: sonar bien,
            aparecer bien y crecer con red.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start" data-reveal>
          {/* Única foto profesional */}
          <div className="cinematic-panel overflow-hidden rounded-[2rem] p-3">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.6rem] border border-white/10">
              <Image
                src={studio.src}
                alt={studio.alt}
                fill
                priority
                placeholder="blur"
                blurDataURL={blurDataUrl}
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="glitch-media object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,rgba(0,0,0,0.76))]" />
              <div className="absolute inset-x-6 bottom-6">
                <p className="text-[0.66rem] uppercase tracking-[0.28em] text-[#d8b76b]">
                  Fran G Genuino
                </p>
                <p className="mt-2 text-xl font-medium text-white">Estudio / Producción</p>
              </div>
            </div>
          </div>

          {/* Bio + stats */}
          <div className="flex flex-col gap-8 pt-2 lg:pt-10">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#d8b76b]">
                Artista · Productor · Gestor
              </p>
              <h3 className="mt-5 text-3xl font-medium text-white">
                Una firma urbana con presencia, estudio y red.
              </h3>
              <p className="mt-6 text-base leading-8 text-white/62">
                Artista chileno de Valparaíso con catálogo propio y red activa en Chile
                y LATAM. Booking radial, gestión de videoclips, uniones artísticas y
                dirección creativa desde el primer beat hasta el lanzamiento.
              </p>
              <p className="mt-5 text-base leading-8 text-white/62">
                Genuino Family opera la capa de industria: medios, televisión, radio,
                logística audiovisual y cruces que convierten una canción en presencia real.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Canciones", value: "30+" },
                { label: "Países", value: "4+" },
                { label: "Medios", value: "Radio & TV" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-[0.68rem] uppercase tracking-[0.18em] text-white/42">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(216,183,107,0.10),rgba(255,255,255,0.025))] p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-[#d8b76b]">
                Dirección comercial y artística
              </p>
              <p className="mt-4 text-sm leading-7 text-white/68">
                Producción, marketing artístico, entrevistas, videoclips y desarrollo
                de talentos: hacer que el proyecto suene, se vea y tenga donde crecer.
              </p>
            </div>

            <a
              href="/contacto"
              data-magnetic
              data-cursor="Contacto"
              data-cursor-mode="link"
              className="premium-cta inline-flex h-13 w-fit items-center justify-center gap-3 rounded-full px-7 text-sm font-semibold text-[#090806] transition hover:-translate-y-0.5"
            >
              Activar una producción <ArrowDownRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
