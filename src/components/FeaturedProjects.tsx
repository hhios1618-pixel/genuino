import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/site";

export default function FeaturedProjects() {
  return (
    <section id="proyectos" className="border-y hairline bg-[#090908] py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-12 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#d8b76b]">
              Trayectoria y posicionamiento
            </p>
            <h2 className="mt-5 text-3xl font-medium tracking-[-0.03em] text-white md:text-5xl">
              Prueba social: red, catalogo y colaboraciones.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-white/58">
            La pagina tiene que explicar por que un artista deberia trabajar con
            Genuino: porque hay escena, contactos, contenido, criterio de estudio y
            experiencia moviendo canciones.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="group overflow-hidden rounded-[1.6rem] border hairline bg-[#0d0c0a] transition hover:-translate-y-1 hover:border-[#d8b76b]/34"
            >
              <div className="relative aspect-[1.1] overflow-hidden bg-black">
                {project.image.endsWith(".mp4") ? (
                  <video
                    className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.035]"
                    src={project.image}
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="metadata"
                  />
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover opacity-90 transition duration-700 group-hover:scale-[1.035]"
                  />
                )}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.78))]" />
                <div className="absolute inset-x-5 top-5 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-white/58">
                  <span>{project.type}</span>
                  <span>{project.year}</span>
                </div>
                <div className="absolute bottom-5 right-5 grid size-11 place-items-center rounded-full border border-white/14 bg-black/22 text-white backdrop-blur-md transition group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight size={18} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-medium tracking-[-0.02em] text-white">
                  {project.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-white/62">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
