import { notFound } from "next/navigation";

/* Cualquier ruta inexistente cae aquí para mostrar el 404 del sitio, con barra, pie e idioma */
export default function CatchAll() {
  notFound();
}
