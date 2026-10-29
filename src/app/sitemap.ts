import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

const routes: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/servicios", priority: 0.9 },
  { path: "/proyectos", priority: 0.9 },
  { path: "/sonido", priority: 0.75 },
  { path: "/video", priority: 0.75 },
  { path: "/perfil", priority: 0.75 },
  { path: "/contacto", priority: 0.75 },
  { path: "/privacidad", priority: 0.2 },
  { path: "/terminos", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority,
  }));
}
