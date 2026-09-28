import Words from "@/components/ui/Words";
import SectionLabel from "@/components/ui/SectionLabel";
import { artistCredits, catalog } from "@/data/site";

const statement =
  "Genuino Family es una productora chilena de música, videoclips y gestión de medios. Llevamos a los artistas a la radio, la televisión y la prensa, del estudio al lanzamiento.";

export default function Statement() {
  return (
    <section className="py-28 md:py-44">
      <div className="shell grid gap-10 md:grid-cols-12">
        <SectionLabel index="01" className="md:col-span-3 md:pt-3">
          Productora
        </SectionLabel>
        <div className="md:col-span-9">
          <p
            data-scrub-words
            className="text-balance text-[clamp(1.85rem,4.1vw,4rem)] font-medium leading-[1.08] tracking-[-0.03em]"
          >
            <Words text={statement} />
          </p>
          <div className="mt-14 grid gap-8 border-t border-line pt-8 sm:grid-cols-3" data-stagger>
            {[
              { value: "2023", label: "Fundada por el artista Fran G Genuino" },
              { value: String(artistCredits.length).padStart(2, "0"), label: "Artistas con los que trabajamos" },
              { value: String(catalog.length).padStart(2, "0"), label: "Trabajos en radio, TV y prensa" },
            ].map((fact) => (
              <div key={fact.label}>
                <p className="display tabular text-[clamp(2.5rem,4.6vw,4.25rem)] text-gold">{fact.value}</p>
                <p className="mt-3 text-sm text-bone/55">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
