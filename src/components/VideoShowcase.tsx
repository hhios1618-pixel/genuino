import { Play } from "lucide-react";
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
              Bloques sobrios para clips, live sessions y procesos.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/54">
            Cada bloque conserva proporciones de video y puede recibir un iframe,
            un archivo local o una portada con reproduccion modal.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {videos.map((video) => (
            <article key={video.title} className="overflow-hidden rounded-[1.7rem] border hairline bg-[#0b0a09]">
              <div className="studio-texture relative aspect-video">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.66))]" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="grid size-14 place-items-center rounded-full border border-white/16 bg-white/10 text-white backdrop-blur-md">
                    <Play size={18} fill="currentColor" />
                  </div>
                </div>
                <span className="absolute left-5 top-5 rounded-full border border-white/12 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/54 backdrop-blur-md">
                  {video.meta}
                </span>
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
