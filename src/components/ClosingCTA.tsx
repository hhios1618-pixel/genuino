import Link from "next/link";
import Arrow from "@/components/ui/Arrow";
import SectionLabel from "@/components/ui/SectionLabel";
import Words from "@/components/ui/Words";
import { contact } from "@/data/site";

export default function ClosingCTA({ index = "06" }: { index?: string }) {
  return (
    <section className="border-t border-line py-28 md:py-40">
      <div className="shell grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <SectionLabel index={index}>Proyectos, prensa y booking</SectionLabel>
          <h2 data-split className="display mt-6 text-[clamp(2.1rem,6vw,5.75rem)]">
            <Words text="Contacto" />
          </h2>
        </div>

        <div className="flex flex-col justify-end gap-10 md:col-span-7" data-fade>
          <a
            href={`mailto:${contact.email}`}
            className="u-link w-fit text-[clamp(1.75rem,4.2vw,3.75rem)] font-medium leading-none tracking-[-0.035em]"
          >
            {contact.email}
          </a>
          <div className="flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-sm text-bone/60">
              Cada proyecto se evalúa y cotiza según alcance, calendario y equipo.
            </p>
            <Link href="/contacto" className="btn shrink-0" data-magnetic>
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
