import SectionLabel from "@/components/ui/SectionLabel";
import YouTubeFeature from "@/components/YouTubeFeature";
import { releases } from "@/data/site";

type ReleaseGridProps = {
  index: string;
  label: string;
  onlyFran?: boolean;
};

export default function ReleaseGrid({ index, label, onlyFran = false }: ReleaseGridProps) {
  const items = onlyFran ? releases.filter((release) => release.byFran) : releases;
  const [featured, ...rest] = items;

  return (
    <section className="pb-24 md:pb-36">
      <div className="shell">
        <div className="mb-8 flex items-baseline justify-between gap-6 border-t border-line pt-6">
          <SectionLabel index={index}>{label}</SectionLabel>
          <p className="label tabular">{String(items.length).padStart(2, "0")} videos</p>
        </div>

        <article className="mb-20 md:mb-28">
          <div data-clip className="relative aspect-video overflow-hidden rounded-[1.25rem] bg-ink-sunk md:rounded-[1.75rem]">
            <YouTubeFeature title={`${featured.title} — ${featured.artist}`} videoId={featured.videoId} sizes="100vw" priority />
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-12">
            <h2 className="display text-[clamp(1.9rem,4.2vw,4rem)] md:col-span-7">{featured.title}</h2>
            <div className="md:col-span-5 md:pt-3 md:text-right">
              <p className="text-bone/85">{featured.artist}</p>
              <p className="label mt-2">{featured.note}</p>
            </div>
          </div>
        </article>

        <ul className="grid gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-24">
          {rest.map((release, position) => (
            <li key={release.videoId} className={position % 2 === 1 ? "md:mt-28" : ""} data-fade>
              <div className="relative aspect-video overflow-hidden rounded-[1.1rem] bg-ink-sunk">
                <YouTubeFeature title={`${release.title} — ${release.artist}`} videoId={release.videoId} />
              </div>
              <div className="mt-5 flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.025em] md:text-3xl">{release.title}</h3>
                  <p className="mt-1.5 text-bone/60">{release.artist}</p>
                </div>
                <p className="label max-w-[45%] pt-2 text-right">{release.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
