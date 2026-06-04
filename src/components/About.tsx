"use client";

import Image from "next/image";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { artistProfileImages, blurDataUrl } from "@/data/site";

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const raw = useMotionValue(0);
  const spring = useSpring(raw, { stiffness: 60, damping: 18 });

  useEffect(() => {
    if (inView) raw.set(target);
  }, [inView, raw, target]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
    });
  }, [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

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
              Fran G Genuino: artista, productor y gestor desde Chile.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-white/62">
            Francisco Javier Valdés Aguilera. Nacido en Santiago en los 80, músico
            desde los 14 años, solista desde 2007, y productor ejecutivo en Genuino
            Family desde agosto de 2023.
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
          <div className="flex flex-col gap-8 pt-2 lg:pt-6">
            <div className="space-y-5">
              <p className="text-base leading-8 text-white/68">
                Su cercanía con la música nació en la escuela Balmaceda 1215, donde
                la música clásica, la balada, el hip hop y el pop dejaron huella. En
                la adolescencia formó el grupo <strong className="text-white/90">JF2</strong>, que
                editó el disco <em className="text-[#d8b76b]">Lirical Templo</em> bajo
                <strong className="text-white/90"> Warner Music</strong>, con distribución en Chile, USA y España y canciones en radios y televisión.
              </p>
              <p className="text-base leading-8 text-white/68">
                Desde 2007 como solista, su trayectoria lo llevó a colaborar con artistas de distintos géneros y a recorrer <strong className="text-white/90">USA, Suecia, Dinamarca, Perú, Argentina, Uruguay, Bolivia, México, Canadá y Colombia</strong>. Canciones como <em className="text-[#d8b76b]">Amor bonito, Caribe, Ella baila sola, Venimos de abajo y Champagne</em> posicionaron su nombre en la escena nacional e internacional.
              </p>
              <p className="text-base leading-8 text-white/68">
                En agosto de 2023 abre un nuevo capítulo: productor general, artístico y ejecutivo con <strong className="text-white/90">Genuino Family</strong>, compañía de logística, booking, marketing digital y promoción en medios para artistas chilenos e internacionales.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Países", target: 10, suffix: "+" },
                { label: "Años activo", target: 20, suffix: "+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <p className="text-2xl font-semibold text-white">
                    <AnimatedNumber target={stat.target} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-[0.68rem] uppercase tracking-[0.18em] text-white/42">
                    {stat.label}
                  </p>
                </div>
              ))}
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-semibold text-white">Radio</p>
                <p className="mt-2 text-[0.68rem] uppercase tracking-[0.18em] text-white/42">& TV</p>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(216,183,107,0.10),rgba(255,255,255,0.025))] p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-[#d8b76b]">
                Genuino Family
              </p>
              <p className="mt-4 text-sm leading-7 text-white/68">
                El concepto del negocio íntegro y contundente: logística, negociación,
                booking, marketing artístico y empresarial, y promoción en medios para
                dar vida original a tu proyecto musical.
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
