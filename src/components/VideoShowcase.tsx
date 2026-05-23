import { Film, Play } from "lucide-react";
import { videos } from "@/data/site";

export default function VideoShowcase() {
  return (
    <section id="video" className="py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#d8b76b]">
              Video showcase
            </p>
            <h2 className="mt-5 text-3xl font-medium tracking-[-0.03em] text-white md:text-4xl">
              Genuino en movimiento: estudio, vivo, relato y presencia.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/54">
            Material real listo para mostrar lo que pasa alrededor de una obra:
            toma, energia, audiencia y direccion audiovisual.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          {videos.map((video, index) => (
            <article
              key={video.title}
              className={`group overflow-hidden rounded-[1.7rem] border hairline bg-[#0b0a09] ${
                index === 1 ? "lg:col-span-7" : "lg:col-span-5"
              }`}
            >
              <div className={`relative ${video.format === "wide" ? "aspect-video" : "aspect-[4/5]"} overflow-hidden bg-black`}>
                <video
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                  src={video.src}
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  aria-label={video.title}
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.34)_60%,rgba(0,0,0,0.68))]" />
                <div className="pointer-events-none absolute inset-x-5 top-5 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/12 bg-black/28 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/62 backdrop-blur-md">
                    {video.meta}
                  </span>
                  <span className="grid size-10 place-items-center rounded-full border border-white/14 bg-white/10 text-white backdrop-blur-md">
                    <Play size={15} fill="currentColor" />
                  </span>
                </div>
                <div className="pointer-events-none absolute bottom-5 left-5 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/54">
                  <Film size={14} />
                  Archivo Genuino
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-white">{video.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/58">{video.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
