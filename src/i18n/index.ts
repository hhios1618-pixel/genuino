/*
  Idiomas del sitio. Español vive en la raíz (/proyectos) y conserva las URLs de siempre;
  inglés vive bajo /en (/en/proyectos). El proxy reescribe la raíz hacia /es por dentro.
*/
export const locales = ["es", "en"] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = "es";

/* Texto con sus dos versiones. Nombres propios y títulos de canciones quedan como string simple */
export type L = { es: string; en: string };
export type Text = string | L;

export const hasLang = (value: string): value is Lang => (locales as readonly string[]).includes(value);

export const tr = (lang: Lang, text: Text) => (typeof text === "string" ? text : text[lang]);

export const localePath = (lang: Lang, path: string) =>
  lang === defaultLang ? path : path === "/" ? `/${lang}` : `/${lang}${path}`;

/* Ruta sin prefijo de idioma. Acepta /es porque el HTML prerenderizado se genera en /es/... */
export function stripLang(pathname: string) {
  for (const lang of locales) {
    if (pathname === `/${lang}`) return "/";
    if (pathname.startsWith(`/${lang}/`)) return pathname.slice(lang.length + 1);
  }
  return pathname;
}

export const htmlLang: Record<Lang, string> = { es: "es-CL", en: "en" };
export const ogLocale: Record<Lang, string> = { es: "es_CL", en: "en_US" };
