import Words from "@/components/ui/Words";
import SectionLabel from "@/components/ui/SectionLabel";

const statement =
  "Genuino Family es la productora fundada en 2023 por el artista chileno Fran G Genuino. Desarrolla producción musical, videoclips y gestión de medios en radio, televisión y prensa para artistas nacionales e internacionales.";

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
              { value: "2007", label: "Debut solista de Fran G Genuino" },
              { value: "10", label: "Países en gira" },
              { value: "2023", label: "Fundación de Genuino Family" },
            ].map((fact) => (
              <div key={fact.label}>
                <p className="display tabular text-[clamp(3rem,6vw,5.5rem)]">{fact.value}</p>
                <p className="mt-3 text-sm text-bone/55">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
