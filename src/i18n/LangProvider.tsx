"use client";

import { usePathname } from "next/navigation";
import { createContext, useContext, type ReactNode } from "react";
import { defaultLang, type Lang, localePath, stripLang, type Text, tr } from "@/i18n";

const LangContext = createContext<Lang>(defaultLang);

/* El layout recibe el idioma de la URL y lo deja disponible para todos los componentes */
export function LangProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
}

export function useLang() {
  const lang = useContext(LangContext);
  return {
    lang,
    t: (text: Text) => tr(lang, text),
    href: (path: string) => localePath(lang, path),
  };
}

/* Ruta actual sin idioma: igual en servidor (/es/...) y navegador (/...), así no hay desfase al hidratar */
export function usePagePath() {
  return stripLang(usePathname() ?? "/");
}
