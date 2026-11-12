import { altius, artistCredits, catalog, contact, disciplines, outlets, techPillars } from "@/data/site";
import { siteUrl } from "@/lib/seo";

/*
  llms.txt: resumen en texto plano para buscadores y asistentes de IA (ChatGPT, Claude, Perplexity, Gemini).
  Se arma con los mismos datos del sitio para que nunca quede desactualizado.
*/
export const dynamic = "force-static";

const page = (path: string, title: string, note: string) => `- [${title}](${siteUrl}${path}): ${note}`;

export function GET() {
  const body = `# Genuino Family

> Productora musical chilena fundada en 2023 por el artista Fran G Genuino. Producción musical, videoclips, gestión de medios en radio, televisión y prensa, y management de artistas. Base en Valparaíso y Santiago, Chile. Su brazo tecnológico es Altius Ignite (web, CRM y agentes de IA).

Genuino Family ha trabajado con ${artistCredits.join(", ")}. Ha llevado a sus artistas a ${outlets.join(", ")}. Suma ${catalog.length} trabajos publicados en radio, TV, prensa y producción.

## Áreas de servicio

${disciplines.map((d) => `- ${d.name.es}: ${d.line.es}`).join("\n")}
- Tecnología (con Altius Ignite): ${techPillars.map((p) => p.name.es).join(" · ")}.

## Páginas

${[
  page("/", "Inicio", "quiénes son, casos destacados y volumen de trabajo"),
  page("/servicios", "Servicios", "alcance y entregables de música, imagen, medios y management"),
  page("/proyectos", "Proyectos", "producción general, colaboraciones y gestión de medios (Antonio Ríos, Diego Smith, GO)"),
  page("/sonido", "Música", "catálogo de Fran G Genuino"),
  page("/video", "Video", "videoclips y registro de rodaje"),
  page("/perfil", "Fran G Genuino", "trayectoria del fundador, solista desde 2007"),
  page("/tecnologia", "Tecnología", "Altius Ignite, brazo tecnológico: sitio, CRM y agentes de IA con Atlas ONE"),
  page("/contacto", "Contacto", "formulario para proyectos, prensa y booking"),
].join("\n")}

## Contacto

- Correo: ${contact.email}
- Instagram: ${contact.instagram.href}
- YouTube: ${contact.youtube.href}
- Tecnología: ${altius.name} (https://www.altiusignite.com)

## English

Genuino Family is a Chilean music production company founded in 2023 by artist Fran G Genuino: music production, music videos, radio/TV/press relations and artist management. English version: ${siteUrl}/en
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
