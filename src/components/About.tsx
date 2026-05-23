import Image from "next/image";
import { ArrowDownRight, Award, Mic2, Users } from "lucide-react";
import { artistProfileImages } from "@/data/site";

export default function About() {
  const [studio, collab, redCarpet, hall] = artistProfileImages;

  return (
    <section id="sobre" className="border-y hairline bg-[#090908] py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end" data-reveal>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#d8b76b]">
              Perfil artistico
            </p>
            <h2 className="mt-5 max-w-3xl text-3xl font-medium text-white md:text-5xl">
              Fran G Genuino: una firma urbana con presencia, estudio y red.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-white/62">
            Artista chileno de Valparaiso, Fran G Genuino viene de la escena urbana
            y de una evolucion clara: de Jay G El Genuino a una etapa de catalogo,
            colaboraciones y productora. Reggaeton, trap y merengue urbano conviven
            con una lectura comercial: sonar bien, aparecer bien y crecer con red.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-12" data-stagger>
          <article className="cinematic-panel overflow-hidden rounded-[2rem] p-3 lg:col-span-7">
            <div className="relative min-h-[560px] overflow-hidden rounded-[1.6rem] border border-white/10">
              <Image
                src={studio.src}
                alt={studio.alt}
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="glitch-media object-cover"
                data-parallax
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.16),rgba(0,0,0,0.72)),linear-gradient(180deg,transparent_45%,rgba(0,0,0,0.88))]" />
              <div className="absolute left-5 top-5 rounded-full border border-white/14 bg-black/28 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/62 backdrop-blur-md">
                {studio.label}
              </div>
              <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8">
                <p className="text-xs uppercase tracking-[0.28em] text-[#d8b76b]">
                  Fran G Genuino
                </p>
                <h3 className="mt-4 max-w-xl text-3xl font-medium text-white md:text-5xl">
                  Voz, direccion y oficio al centro de la produccion.
                </h3>
                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "Cabina", value: "Voz y toma", icon: Mic2 },
                    { label: "Escena", value: "Presencia publica", icon: Award },
                    { label: "Red", value: "Colaboraciones", icon: Users },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur-md">
                        <Icon className="text-[#d8b76b]" size={18} />
                        <p className="mt-4 text-[10px] uppercase tracking-[0.22em] text-white/40">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm font-medium text-white">{item.value}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </article>

          <aside className="grid gap-5 lg:col-span-5">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {[collab, redCarpet, hall].map((image, index) => (
                <figure
                  key={image.src}
                  data-cursor="Ver"
                  className={`bento-card relative overflow-hidden rounded-[1.5rem] border hairline bg-black ${
                    index === 0 ? "min-h-[300px]" : "min-h-[220px]"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 38vw, (min-width: 640px) 50vw, 100vw"
                    className="glitch-media object-cover"
                    data-parallax
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.74))]" />
                  <figcaption className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 text-sm text-white">
                    <span>{image.label}</span>
                    <span className="rounded-full border border-white/12 bg-black/22 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/48 backdrop-blur-md">
                      Perfil
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </aside>
        </div>

        <div className="mt-10 grid gap-6 rounded-[2rem] border hairline bg-[linear-gradient(135deg,rgba(216,183,107,0.12),rgba(255,255,255,0.035))] p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8" data-reveal>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#d8b76b]">
              Direccion comercial y artistica
            </p>
            <p className="editorial-serif mt-3 max-w-2xl text-2xl leading-8 text-white">
              Produccion, marketing artistico, entrevistas, videoclips y desarrollo
              de talentos: hacer que el proyecto suene, se vea y tenga donde crecer.
            </p>
          </div>
          <a
            href="#contacto"
            data-magnetic
            data-cursor="Contacto"
            className="premium-cta inline-flex h-13 items-center justify-center gap-3 rounded-full px-7 text-sm font-semibold text-[#090806] transition hover:-translate-y-0.5"
          >
            Activar una produccion <ArrowDownRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
