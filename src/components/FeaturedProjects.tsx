import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/site";

export default function FeaturedProjects() {
  return (
    <section id="proyectos" className="border-y hairline bg-[#090908] py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-12 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end" data-reveal>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#d8b76b]">
              Trayectoria y posicionamiento
            </p>
            <h2 data-reveal-title className="mt-5 text-3xl font-medium text-white md:text-5xl">
              Prueba social: red, catalogo y colaboraciones.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-white/58">
            La pagina tiene que explicar por que un artista deberia trabajar con
            Genuino: porque hay escena, contactos, contenido, criterio de estudio y
            experiencia moviendo canciones.
          </p>
        </div>

        <div className="grid auto-rows-[minmax(420px,auto)] gap-5 lg:grid-cols-12" data-stagger>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              href={project.href.startsWith("#") ? "/proyectos" : project.href}
              wide={index === 2}
              className={`${
                index === 0 ? "lg:col-span-5" : ""
              } ${index === 1 ? "lg:col-span-7" : ""} ${index === 2 ? "lg:col-span-12" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
