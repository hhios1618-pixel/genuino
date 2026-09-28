import Words from "@/components/ui/Words";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  meta?: { label: string; value: string }[];
};

export default function PageHeader({ eyebrow, title, intro, meta }: PageHeaderProps) {
  return (
    <header className="shell pb-16 pt-36 md:pb-24 md:pt-48">
      <p className="label fade-in" style={{ "--d": "0.1s" } as React.CSSProperties}>
        {eyebrow}
      </p>
      <h1 className="hero-rise display mt-6 text-[clamp(2rem,7.5vw,7.5rem)]">
        <Words text={title} />
      </h1>
      {intro || meta ? (
        <div
          className="fade-in mt-10 grid gap-8 border-t border-line pt-8 md:grid-cols-12"
          style={{ "--d": "0.7s" } as React.CSSProperties}
        >
          {intro ? (
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-bone/70 md:col-span-6">{intro}</p>
          ) : null}
          {meta ? (
            <dl className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:col-span-6 md:col-start-7">
              {meta.map((item) => (
                <div key={item.label}>
                  <dt className="label">{item.label}</dt>
                  <dd className="mt-2 text-bone/85">{item.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
      ) : null}
    </header>
  );
}
