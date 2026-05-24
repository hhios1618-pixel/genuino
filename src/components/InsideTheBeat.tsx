import Image from "next/image";
import { ArrowRight, AudioWaveform, Play } from "lucide-react";
import { blurDataUrl, insideBeatSteps } from "@/data/site";

export default function InsideTheBeat() {
  return (
    <section className="relative overflow-hidden border-y hairline bg-[#080807] py-20 md:py-28">
      <div className="absolute inset-0 opacity-70">
        <div className="waveform absolute left-0 right-0 top-24 h-px" />
        <div className="waveform absolute bottom-24 left-0 right-0 h-px" />
      </div>

      <div className="section-shell relative z-10">
        <div className="mb-12 grid gap-7 md:grid-cols-[0.9fr_1.1fr] md:items-end" data-reveal>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#d8b76b]">
              Inside the beat
            </p>
            <h2 data-reveal-title className="mt-5 max-w-3xl text-3xl font-medium text-white md:text-5xl">
              Del mood inicial al lanzamiento con relato, mezcla y pantalla.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/58 md:justify-self-end">
            El proceso no se vende como magia: se diseña, se graba, se ajusta y se
            convierte en una campaña que el artista puede defender.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" data-stagger>
          {insideBeatSteps.map((step, index) => (
            <article
              key={step.title}
              className="bento-card group overflow-hidden rounded-[1.35rem] border hairline bg-[#0b0a09]"
            >
              <div
                className="relative aspect-[4/5] overflow-hidden bg-black"
                data-cursor={index === 1 ? "Play" : "Expand"}
                data-cursor-mode="media"
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  placeholder="blur"
                  blurDataURL={blurDataUrl}
                  className="object-cover opacity-86 transition duration-700 group-hover:scale-[1.055]"
                  data-parallax-media
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.78))]" />
                <div className="absolute left-4 top-4 grid size-11 place-items-center rounded-full border border-white/14 bg-black/28 text-white backdrop-blur-xl">
                  {index === 1 ? <Play size={16} fill="currentColor" /> : <AudioWaveform size={18} />}
                </div>
                <p className="absolute bottom-4 left-4 text-[0.66rem] uppercase tracking-[0.24em] text-[#d8b76b]">
                  {String(index + 1).padStart(2, "0")} / {step.label}
                </p>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-medium text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/58">{step.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/calculador"
            data-magnetic
            data-cursor="Diseñar"
            data-cursor-mode="link"
            className="premium-cta inline-flex h-13 items-center justify-center gap-3 rounded-full px-7 text-sm font-semibold text-[#090806]"
          >
            Diseñar mi lanzamiento <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
