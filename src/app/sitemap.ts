import type { MetadataRoute } from "next";
import { localePath, locales } from "@/i18n";
import { siteUrl } from "@/lib/seo";

const routes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/servicios", priority: 0.9 },
  { path: "/proyectos", priority: 0.9 },
  { path: "/sonido", priority: 0.75 },
  { path: "/video", priority: 0.75 },
  { path: "/perfil", priority: 0.75 },
  { path: "/contacto", priority: 0.75 },
  { path: "/privacidad", priority: 0.2 },
  { path: "/terminos", priority: 0.2 },
];

const absolute = (path: string) => `${siteUrl}${path === "/" ? "" : path}`;

/* Cada página en español y en inglés, enlazadas entre sí con hreflang */
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap(({ path, priority }) =>
    locales.map((lang) => ({
      url: absolute(localePath(lang, path)),
      lastModified: new Date(),
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((other) => [other === "es" ? "es-CL" : other, absolute(localePath(other, path))]),
        ),
      },
    })),
  );
}
