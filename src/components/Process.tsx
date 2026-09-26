import SectionLabel from "@/components/ui/SectionLabel";
import Words from "@/components/ui/Words";
import { process } from "@/data/site";

export default function Process({ index }: { index: string }) {
  return (
    <section className="py-24 md:py-36">
      <div className="shell">
        <SectionLabel index={index}>Metodología</SectionLabel>
        <h2 data-split className="display mt-6 text-[clamp(3.25rem,9vw,8.5rem)]">
          <Words text="Proceso" />
        </h2>
        <ol className="mt-16 grid border-t border-line md:grid-cols-4" data-stagger>
          {process.map((step) => (
            <li key={step.index} className="border-b border-line py-8 md:border-b-0 md:border-r md:px-6 md:py-10 md:first:pl-0 md:last:border-r-0">
              <p className="label tabular">{step.index}</p>
              <h3 className="mt-10 text-2xl font-medium tracking-[-0.025em] md:mt-20">{step.title}</h3>
              <p className="mt-3 text-pretty text-bone/60">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
