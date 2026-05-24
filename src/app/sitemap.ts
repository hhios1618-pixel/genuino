import type { MetadataRoute } from "next";

const baseUrl = "https://genuino-five.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/servicios",
    "/proyectos",
    "/sonido",
    "/video",
    "/perfil",
    "/contacto",
    "/calculador",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/calculador" ? 0.9 : 0.75,
  }));
}
