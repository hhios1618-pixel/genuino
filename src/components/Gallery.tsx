import Image from "next/image";
import { blurDataUrl, gallery } from "@/data/site";

export default function Gallery() {
  return (
    <section id="galeria" className="border-y hairline bg-[#080807] py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-12 grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-end" data-reveal>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#d8b76b]">
              Prueba visual
            </p>
            <h2 data-reveal-title className="mt-5 text-3xl font-medium text-white md:text-5xl">
              Estudio, colaboraciones y presencia publica real.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-white/58">
            Un artista no se posiciona con fondos genericos. Se posiciona mostrando
            contexto: cabina, red, prensa, escena, colaboraciones y momentos donde
            la carrera se vuelve visible.
          </p>
        </div>

        <div className="grid auto-rows-[260px] gap-4 md:grid-cols-6" data-stagger>
          {gallery.map((item, index) => (
            <figure
              key={item.label}
              data-cursor={item.kind === "video" ? "Play" : "Ver"}
              data-cursor-mode={item.kind === "video" ? "media" : "link"}
              className={`bento-card group relative overflow-hidden rounded-[1.35rem] border hairline bg-black ${
                index === 0 ? "md:col-span-3 md:row-span-2" : ""
              } ${index === 1 ? "md:col-span-3" : ""} ${
                index > 1 ? "md:col-span-2" : ""
              }`}
            >
              {item.kind === "video" ? (
                <video
                  className="glitch-media h-[112%] w-full object-cover transition duration-700 group-hover:scale-[1.045]"
                  src={item.src}
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="metadata"
                  data-parallax-media
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  placeholder="blur"
                  blurDataURL={blurDataUrl}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="glitch-media object-cover transition duration-700 group-hover:scale-[1.045]"
                  data-parallax-media
                />
              )}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.76))]" />
              <figcaption className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                <span>
                  <span className="block text-lg font-medium text-white">{item.label}</span>
                  <span className="mt-2 block text-xs uppercase tracking-[0.22em] text-[#d8b76b]/72">
                    {item.category}
                  </span>
                </span>
                <span className="rounded-full border border-white/12 bg-black/24 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/52 backdrop-blur-md">
                  Real
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
