import Image from "next/image";
import { ArrowDownRight, Clapperboard, Radio, Sparkles } from "lucide-react";
import { artistProfileImages, blurDataUrl, media } from "@/data/site";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[92svh] overflow-hidden pt-28">
      <div className="absolute inset-0 opacity-80">
        <video
          className="animate-slow-pan absolute inset-[-4%] h-[108%] w-[108%] object-cover"
          src={media.sueltateBackstage}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Backstage de Sueltate Ma"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.95),rgba(5,5,5,0.66)_48%,rgba(5,5,5,0.82)),linear-gradient(180deg,rgba(5,5,5,0.2),rgba(5,5,5,0.76))]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      <div className="section-shell relative z-10 grid min-h-[calc(92svh-7rem)] items-end gap-10 pb-14 md:grid-cols-[1.02fr_0.78fr] md:pb-20">
        <div className="animate-lift-in max-w-3xl" data-reveal>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.36em] text-[#d8b76b]">
            Fran G Genuino / Genuino Family
          </p>
          <h1 className="max-w-3xl text-[clamp(3.25rem,9vw,6.7rem)] font-medium leading-[0.95] text-white">
            Genuino
          </h1>
          <p className="editorial-serif mt-7 max-w-2xl text-balance text-2xl leading-8 text-white/78 md:text-3xl">
            Produccion urbana, marketing artistico y desarrollo de carrera para
            artistas que necesitan canciones, imagen, prensa y posicionamiento real.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="/proyectos"
              data-magnetic
              data-cursor="Explorar"
              data-cursor-mode="link"
              className="premium-cta inline-flex h-13 items-center justify-center gap-3 rounded-full px-7 text-sm font-semibold text-[#090806] transition hover:-translate-y-0.5"
            >
              Ver trabajos <ArrowDownRight size={16} />
            </a>
            <a
              href="/contacto"
              data-magnetic
              data-cursor="Contacto"
              data-cursor-mode="link"
              className="ghost-cta inline-flex h-13 items-center justify-center gap-3 rounded-full px-7 text-sm font-medium text-white/90 transition hover:-translate-y-0.5 hover:border-[#d8b76b]/50"
            >
              Desarrollar mi carrera
            </a>
          </div>
        </div>

        <div className="cinematic-panel relative mb-2 overflow-hidden rounded-[2rem] p-4" data-reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.45rem] border border-white/10 bg-[#090909]">
            <Image
              src={artistProfileImages[0].src}
              alt={artistProfileImages[0].alt}
              fill
              priority
              placeholder="blur"
              blurDataURL={blurDataUrl}
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="glitch-media object-cover"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_18%,rgba(216,183,107,0.16),transparent_30%),linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.86))]" />
            <div className="absolute inset-x-6 top-6 flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-white/54">
              <span>Studio evidence</span>
              <span>Fran G</span>
            </div>
            <div className="absolute inset-x-6 bottom-6">
              <div className="mb-4 flex gap-2">
                {[
                  { label: "Produccion", icon: Sparkles },
                  { label: "Medios", icon: Radio },
                  { label: "Video", icon: Clapperboard },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <span
                      key={item.label}
                      className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/28 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/64 backdrop-blur-md"
                    >
                      <Icon size={12} />
                      {item.label}
                    </span>
                  );
                })}
              </div>
              <p className="text-sm leading-6 text-white/66">
                No solo estudio: direccion, red y material real para sostener un
                lanzamiento desde la cancion hasta la pantalla.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
