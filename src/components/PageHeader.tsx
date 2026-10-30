"use client";

import Words from "@/components/ui/Words";
import type { Text } from "@/i18n";
import { useLang } from "@/i18n/LangProvider";

type PageHeaderProps = {
  eyebrow: Text;
  title: Text;
  intro?: Text;
  meta?: { label: Text; value: Text }[];
};

export default function PageHeader({ eyebrow, title, intro, meta }: PageHeaderProps) {
  const { t } = useLang();

  return (
    <header className="shell pb-16 pt-36 md:pb-24 md:pt-48">
      <p className="label fade-in" style={{ "--d": "0.1s" } as React.CSSProperties}>
        {t(eyebrow)}
      </p>
      <h1 className="hero-rise display mt-6 text-[clamp(2rem,7.5vw,7.5rem)]">
        <Words text={t(title)} />
      </h1>
      {intro || meta ? (
        <div
          className="fade-in mt-10 grid gap-8 border-t border-line pt-8 md:grid-cols-12"
          style={{ "--d": "0.7s" } as React.CSSProperties}
        >
          {intro ? (
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-bone/70 md:col-span-6">{t(intro)}</p>
          ) : null}
          {meta ? (
            <dl className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:col-span-6 md:col-start-7">
              {meta.map((item) => (
                <div key={t(item.label)}>
                  <dt className="label">{t(item.label)}</dt>
                  <dd className="mt-2 text-bone/85">{t(item.value)}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
      ) : null}
    </header>
  );
}
