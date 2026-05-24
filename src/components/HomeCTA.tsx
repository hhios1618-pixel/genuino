import Image from "next/image";
import { ArrowRight, CalendarCheck, Clapperboard, Radio, Sparkles } from "lucide-react";
import { blurDataUrl } from "@/data/site";

export default function HomeCTA() {
  return (
    <section className="relative overflow-hidden border-y hairline bg-[#050505] py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_22%,rgba(216,183,107,0.14),transparent_34rem),radial-gradient(circle_at_84%_18%,rgba(120,199,210,0.12),transparent_30rem),linear-gradient(180deg,#050505,#080706_48%,#050505)]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.26),rgba(5,5,5,0.78)_58%,rgba(5,5,5,0.34))]" />
      </div>

      <div className="section-shell relative z-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div data-reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#d8b76b]/28 bg-[#d8b76b]/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-[#f4d489]">
            <Sparkles size={14} />
            Siguiente movimiento
          </p>
          <h2 data-reveal-title className="mt-6 max-w-4xl text-4xl font-medium leading-[0.96] text-white md:text-6xl">
            Lancemos la canción con plan, relato y medios.
          </h2>
          <p className="editorial-serif mt-6 max-w-2xl text-2xl leading-9 text-white/72 md:text-3xl">
            Canción, visuales, narrativa y gestión de medios trabajando como una
            sola campaña para llegar con presencia.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/contacto"
              data-magnetic
              data-cursor="Contacto"
              data-cursor-mode="link"
              className="premium-cta inline-flex h-13 items-center justify-center gap-3 rounded-full px-7 text-sm font-semibold text-[#090806]"
            >
              Hablar del lanzamiento <ArrowRight size={16} />
            </a>
            <a
              href="/video"
              data-cursor="Ver"
              data-cursor-mode="link"
              className="ghost-cta inline-flex h-13 items-center justify-center gap-3 rounded-full px-7 text-sm font-medium text-white/90"
            >
              Ver videoclips
            </a>
          </div>
        </div>

        <div className="relative min-h-[34rem]" data-reveal>
          <div className="absolute left-0 top-4 w-[58%] overflow-hidden rounded-[1.4rem] border border-white/12 bg-black shadow-2xl shadow-black/40">
            <div className="relative aspect-[4/5]">
              <Image
                src="https://i.ytimg.com/vi/Q9wHNUH1eq8/maxresdefault.jpg"
                alt="Ella Baila Sola"
                fill
                placeholder="blur"
                blurDataURL={blurDataUrl}
                sizes="(min-width: 1024px) 30vw, 80vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.72))]" />
              <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-white">
                GO feat. Fran G Genuino
              </p>
            </div>
          </div>

          <div className="absolute right-0 top-20 w-[56%] overflow-hidden rounded-[1.4rem] border border-white/12 bg-black shadow-2xl shadow-black/40">
            <div className="relative aspect-video">
              <Image
                src="https://i.ytimg.com/vi/Ll-l9N5NmlM/maxresdefault.jpg"
                alt="Angie Tu Cumbiera x Antonio Ríos"
                fill
                placeholder="blur"
                blurDataURL={blurDataUrl}
                sizes="(min-width: 1024px) 32vw, 80vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/24" />
            </div>
          </div>

          <div className="absolute bottom-6 right-6 w-[70%] rounded-[1.4rem] border border-white/12 bg-[#0b0a09]/88 p-5 shadow-2xl shadow-black/50 backdrop-blur-xl">
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { label: "Radio y TV", icon: Radio },
                { label: "Video y reels", icon: Clapperboard },
                { label: "Plan de salida", icon: CalendarCheck },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-[1rem] border border-white/10 bg-white/[0.035] p-3">
                    <Icon size={18} className="text-[#d8b76b]" />
                    <p className="mt-3 text-xs font-medium text-white">{item.label}</p>
                  </div>
                );
              })}
            </div>
            <p className="mt-5 text-sm leading-6 text-white/56">
              Producción musical, guion audiovisual, contenido social y gestión de
              medios coordinados desde una misma dirección.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
