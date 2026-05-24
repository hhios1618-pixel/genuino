import { Film, Play } from "lucide-react";
import YouTubeFeature from "@/components/YouTubeFeature";
import { officialProductions, videos } from "@/data/site";

export default function VideoShowcase() {
  const [featuredProduction, ...secondaryProductions] = officialProductions;

  return (
    <section id="video" className="py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end" data-reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#d8b76b]">
              Vitrina audiovisual
            </p>
            <h2 data-reveal-title className="mt-5 text-3xl font-medium text-white md:text-4xl">
              Fran G Genuino: catálogo, presencia y obra en pantalla.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/54">
            Producciones donde Fran G Genuino participa directamente, presentadas
            como una vitrina pública de trayectoria, colaboración y criterio.
          </p>
        </div>

        <div className="mb-12 overflow-hidden rounded-[2rem] border hairline bg-[#0b0a09] shadow-2xl shadow-black/35" data-reveal>
          <div className="grid lg:grid-cols-[1.45fr_0.55fr]">
            <div className="relative aspect-video overflow-hidden bg-black">
              <YouTubeFeature
                title={featuredProduction.title}
                videoId={featuredProduction.videoId}
                featured
              />
            </div>
            <div className="flex flex-col justify-between p-6 md:p-8">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#d8b76b]">
                  Producción destacada
                </p>
                <h3 className="mt-5 text-2xl font-medium text-white md:text-3xl">
                  {featuredProduction.title}
                </h3>
                <p className="mt-3 text-sm uppercase tracking-[0.18em] text-white/42">
                  {featuredProduction.artist}
                </p>
                <p className="mt-6 text-sm leading-7 text-white/62">
                  {featuredProduction.description}
                </p>
              </div>
              <p className="mt-8 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm leading-6 text-white/50">
                Pulsa la portada para reproducir el video completo dentro de esta página.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16 grid gap-5 md:grid-cols-2" data-stagger>
          {secondaryProductions.map((production) => (
            <article
              key={production.videoId}
              className="bento-card overflow-hidden rounded-[1.6rem] border hairline bg-[#0b0a09]"
              data-cursor="Play"
              data-cursor-mode="media"
            >
              <div className="relative aspect-video overflow-hidden bg-black">
                <YouTubeFeature title={production.title} videoId={production.videoId} />
              </div>
              <div className="p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-medium text-white">{production.title}</h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#d8b76b]/72">
                      {production.artist}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-white/10 px-3 py-1 text-xs text-white/46">
                    {production.year}
                  </span>
                </div>
                <p className="mt-5 text-sm leading-7 text-white/58">
                  {production.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mb-8 max-w-2xl" data-reveal>
          <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#d8b76b]">
            Backstage y contenido social
          </p>
          <h3 className="mt-4 text-2xl font-medium text-white">
            Energía actual desde el estudio, el vivo y la calle.
          </h3>
        </div>

        <div className="grid gap-5 lg:grid-cols-12" data-stagger>
          {videos.map((video, index) => (
            <article
              key={video.title}
              data-cursor="Play"
              data-cursor-mode="media"
              className={`bento-card group overflow-hidden rounded-[1.7rem] border hairline bg-[#0b0a09] ${
                index === 1 ? "lg:col-span-7" : "lg:col-span-5"
              }`}
            >
              <div className={`relative ${video.format === "wide" ? "aspect-video" : "aspect-[4/5]"} overflow-hidden bg-black`}>
                <video
                  className="glitch-media h-[112%] w-full object-cover transition duration-700 group-hover:scale-[1.045]"
                  src={video.src}
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  aria-label={video.title}
                  data-parallax-media
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
