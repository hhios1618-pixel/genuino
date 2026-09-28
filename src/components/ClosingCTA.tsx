import Link from "next/link";
import Arrow from "@/components/ui/Arrow";
import SectionLabel from "@/components/ui/SectionLabel";
import Words from "@/components/ui/Words";
import { contact } from "@/data/site";

export default function ClosingCTA({ index = "06" }: { index?: string }) {
  return (
    <section className="border-t border-line py-24 md:py-40">
      <div className="shell">
        <SectionLabel index={index}>Proyectos, prensa y booking</SectionLabel>
        <h2 data-split className="display mt-6 text-[clamp(2.1rem,6vw,5.75rem)]">
          <Words text="Contacto" />
        </h2>

        <div
          className="mt-10 grid gap-10 border-t border-line pt-8 md:mt-14 md:grid-cols-12 md:items-end md:gap-8"
          data-fade
        >
          <a
            href={`mailto:${contact.email}`}
            className="u-link w-fit text-[clamp(1.5rem,3.6vw,3.25rem)] font-medium leading-none tracking-[-0.035em] md:col-span-7"
          >
            {contact.email}
          </a>
          <div className="flex flex-col gap-6 md:col-span-5 md:items-end md:text-right">
            <p className="max-w-sm text-bone/60">
              Cada proyecto se evalúa y cotiza según alcance, calendario y equipo.
            </p>
            <Link href="/contacto" className="btn w-fit shrink-0" data-magnetic>
              Formulario de contacto
              <span className="btn-icon">
                <Arrow className="size-4" direction="right" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
