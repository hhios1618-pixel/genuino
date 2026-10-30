import { type NextRequest, NextResponse } from "next/server";

/*
  Español sin prefijo (/proyectos) se sirve desde /es por dentro; inglés va con /en a la vista.
  Quien escriba /es/... se redirige a la URL sin prefijo para no duplicar páginas en Google.
*/
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/en" || pathname.startsWith("/en/")) return NextResponse.next();

  const url = request.nextUrl.clone();
  if (pathname === "/es" || pathname.startsWith("/es/")) {
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  url.pathname = `/es${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Fuera: internos de Next, la API y cualquier archivo con extensión (imágenes, videos, robots, sitemap)
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
