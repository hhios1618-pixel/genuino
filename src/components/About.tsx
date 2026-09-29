import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import { blurDataUrl, profileImages } from "@/data/site";

const facts = [
  { label: "Nombre", value: "Francisco Javier Valdés Aguilera" },
  { label: "Origen", value: "Santiago de Chile" },
  { label: "Solista desde", value: "2007" },
  { label: "Sello", value: "Warner Music, con JF2" },
  { label: "Gira", value: "10 países" },
  { label: "Genuino Family", value: "Fundador, 2023" },
];

export default function About() {
  return (
    <section className="pb-24 md:pb-36">
      <div className="shell grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <div data-clip className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-ink-sunk">
              <Image
                src={profileImages.street.src}
                alt={profileImages.street.alt}
                fill
                priority
                sizes="(min-width: 1024px) 38vw, 100vw"
                placeholder="blur"
                blurDataURL={blurDataUrl}
                className="object-cover grayscale-[0.35] contrast-[1.05]"
              />
            </div>
            <p className="label mt-4">Valparaíso</p>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <SectionLabel index="01">Biografía</SectionLabel>

          <div className="mt-10 space-y-6 text-pretty text-lg leading-relaxed text-bone/75" data-stagger>
            <p className="text-2xl leading-snug text-bone md:text-[1.75rem]">
              Fran G Genuino es cantante, compositor y productor chileno. Fundó Genuino Family en
              agosto de 2023.
            </p>
            <p>
              Se formó en Balmaceda 1215, entre la música clásica, la balada, el hip hop y el pop.
              En la adolescencia integró el grupo JF2, que editó el disco <em>Lirical Templo</em> con
              Warner Music, distribuido en Chile, Estados Unidos y España.
            </p>
            <p>
              Inició su carrera solista en 2007. Ha colaborado con artistas de distintos géneros y se
              ha presentado en Estados Unidos, Suecia, Dinamarca, Perú, Argentina, Uruguay, Bolivia,
              México, Canadá y Colombia. Su catálogo incluye <em>Amor bonito</em>, <em>Caribe</em>,{" "}
              <em>Ella baila sola</em>, <em>Venimos de abajo</em> y <em>Champagne</em>.
            </p>
            <p>
              Como productor general y ejecutivo de Genuino Family trabaja en logística, booking,
              marketing y promoción en medios para artistas chilenos e internacionales, entre ellos
              Antonio Ríos, Diego Smith y GO.
            </p>
          </div>

          <dl className="mt-14 grid grid-cols-2 border-t border-line sm:grid-cols-3" data-stagger>
            {facts.map((fact) => (
              <div key={fact.label} className="border-b border-line py-5 pr-4">
                <dt className="label">{fact.label}</dt>
                <dd className="mt-2 text-bone/90">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <figure className="mt-14" data-fade>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.1rem] bg-ink-sunk">
              <Image
                src={profileImages.studio.src}
                alt={profileImages.studio.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                placeholder="blur"
                blurDataURL={blurDataUrl}
                className="object-cover object-[50%_35%] grayscale-[0.35] contrast-[1.05]"
              />
            </div>
            <figcaption className="label mt-4">Estudio</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
