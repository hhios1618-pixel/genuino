import { ArrowUpRight } from "lucide-react";
import YouTubeFeature from "@/components/YouTubeFeature";
import { collaborationHighlights, mediaCampaignReferences } from "@/data/site";

export default function CollaborationNetwork() {
  const featuredReferences = mediaCampaignReferences.slice(0, 3);
  const compactReferences = mediaCampaignReferences.slice(3);

  return (
    <section className="border-y hairline bg-[#080807] py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-12 grid gap-7 md:grid-cols-[0.95fr_1.05fr] md:items-end" data-reveal>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#d8b76b]">
              Colaboraciones y medios
            </p>
            <h2 data-reveal-title className="mt-5 text-3xl font-medium text-white md:text-4xl">
              Una red que mueve canciones: artista, productor y gestor.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/58 md:justify-self-end">
            Fran G Genuino reúne dos frentes: voz y presencia en pantalla; Genuino
            Family aporta gestión de medios, logística audiovisual y conexión entre
            artistas.
          </p>
        </div>

        <div className="mb-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4" data-stagger>
          {collaborationHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="bento-card min-h-[17rem] rounded-[1.35rem] border hairline bg-[linear-gradient(145deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] p-5"
              >
                <div className="mb-7 grid size-12 place-items-center rounded-full border border-[#d8b76b]/28 bg-[#d8b76b]/10 text-[#f4d489]">
                  <Icon size={21} strokeWidth={1.8} />
                </div>
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#d8b76b]">
                  {item.kicker}
                </p>
                <h3 className="mt-3 text-xl font-medium text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/58">{item.description}</p>
              </article>
            );
          })}
        </div>

        <div className="grid gap-5 lg:grid-cols-3" data-stagger>
          {featuredReferences.map((reference) => (
            <article
              key={reference.videoId}
              className="bento-card overflow-hidden rounded-[1.5rem] border hairline bg-[#0b0a09]"
            >
              <div className="relative aspect-video overflow-hidden bg-black">
                <YouTubeFeature title={reference.title} videoId={reference.videoId} />
              </div>
              <div className="p-5">
                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#d8b76b]/74">
                  Referencia de booking radial
                </p>
                <h3 className="mt-3 text-xl font-medium text-white">{reference.title}</h3>
                <p className="mt-2 text-sm text-white/50">{reference.artist}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4" data-stagger>
          {compactReferences.map((reference) => (
            <a
              key={reference.videoId}
              href={`https://www.youtube.com/watch?v=${reference.videoId}`}
              target="_blank"
              rel="noreferrer"
              data-cursor="YouTube"
              data-cursor-mode="link"
              className="group flex min-h-28 items-center justify-between gap-4 rounded-[1.15rem] border border-white/10 bg-white/[0.026] p-4 transition hover:border-[#d8b76b]/36 hover:bg-white/[0.045]"
            >
              <span>
                <span className="block text-sm font-medium text-white">{reference.title}</span>
                <span className="mt-2 block text-xs leading-5 text-white/48">{reference.artist}</span>
              </span>
              <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/12 text-white/70 transition group-hover:border-[#d8b76b]/34 group-hover:text-[#f4d489]">
                <ArrowUpRight size={17} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
