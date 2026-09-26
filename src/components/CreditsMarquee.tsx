import { artistCredits, outlets } from "@/data/site";

function Row() {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden="true">
      {artistCredits.map((name) => (
        <li key={name} className="flex items-center">
          <span className="display whitespace-nowrap px-[0.35em] text-[clamp(2.75rem,7vw,6.5rem)] text-bone/90">
            {name}
          </span>
          <span className="on-air mx-[1.5vw] !size-2.5" />
        </li>
      ))}
    </ul>
  );
}

export default function CreditsMarquee() {
  return (
    <section className="border-y border-line py-8 md:py-10" aria-labelledby="creditos">
      <div className="shell mb-6 flex flex-wrap items-baseline justify-between gap-4">
        <h2 id="creditos" className="label">
          Artistas
        </h2>
        <p className="label">Medios — {outlets.join(" · ")}</p>
      </div>
      <p className="sr-only">{artistCredits.join(", ")}</p>
      <div className="marquee-wrap overflow-hidden">
        <div className="marquee" style={{ "--marquee-duration": "55s" } as React.CSSProperties}>
          <Row />
          <Row />
        </div>
      </div>
    </section>
  );
}
