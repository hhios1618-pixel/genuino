"use client";

import Link from "next/link";
import { type Lang, localePath, locales } from "@/i18n";
import { useLang, usePagePath } from "@/i18n/LangProvider";

const names: Record<Lang, string> = { es: "Español", en: "English" };

/*
  Cambio de idioma que mantiene la página: /proyectos ↔ /en/proyectos.
  Celular: un círculo con el idioma al que se cambia. Desde sm: ES / EN con el actual marcado.
*/
export default function LangSwitch() {
  const { lang, t } = useLang();
  const path = usePagePath();
  const other = locales.find((option) => option !== lang) ?? lang;
  // Escrito en el idioma de destino: lo lee quien busca ese idioma
  const switchLabel = t({ es: "View this site in English", en: "Ver el sitio en español" });

  return (
    <>
      <Link
        href={localePath(other, path)}
        hrefLang={other}
        lang={other}
        aria-label={switchLabel}
        title={switchLabel}
        className="label grid size-11 place-items-center rounded-full border border-bone/20 !text-bone/80 transition-colors duration-500 hover:border-bone/60 hover:!text-bone sm:hidden"
      >
        {other.toUpperCase()}
      </Link>

      <ul
        aria-label={t({ es: "Idioma", en: "Language" })}
        className="hidden h-11 items-center rounded-full border border-bone/20 p-1 sm:flex"
      >
        {locales.map((option) => {
          const active = option === lang;
          return (
            <li key={option} className="h-full">
              <Link
                href={localePath(option, path)}
                hrefLang={option}
                lang={option}
                aria-current={active ? "true" : undefined}
                title={names[option]}
                className={`label flex h-full min-w-11 items-center justify-center rounded-full px-2.5 transition-colors duration-500 ${
                  active ? "bg-bone/[0.12] !text-bone" : "!text-bone/50 hover:!text-bone"
                }`}
              >
                <span className="sr-only">{names[option]}</span>
                <span aria-hidden="true">{option.toUpperCase()}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
