import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/site";

export default function FeaturedProjects() {
  return (
    <section id="proyectos" className="border-y hairline bg-[#090908] py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#d8b76b]">
              Proyectos destacados
            </p>
            <h2 className="mt-5 text-3xl font-medium tracking-[-0.03em] text-white md:text-4xl">
              Obras con textura, direccion y memoria.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/54">
            Cards preparadas para imagen, video o embeds de lanzamientos. Cambia
            los placeholders por material real cuando el catalogo este listo.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-[1.6rem] border hairline bg-[#0d0c0a]">
              <div className={`relative aspect-[1.18] bg-gradient-to-br ${project.palette}`}>
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.16),transparent_34%),repeating-linear-gradient(90deg,rgba(255,255,255,0.05)_0_1px,transparent_1px_22px)]" />
                <div className="absolute inset-x-5 top-5 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-white/50">
                  <span>Media</span>
                  <span>{project.year}</span>
                </div>
                <div className="absolute bottom-5 right-5 grid size-11 place-items-center rounded-full border border-white/14 bg-black/20 text-white backdrop-blur-md transition group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight size={18} />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-medium text-white">{project.title}</h3>
                  <span className="shrink-0 rounded-full border border-white/10 px-3 py-1 text-xs text-white/52">
                    {project.year}
                  </span>
                </div>
                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[#d8b76b]/78">
                  {project.type}
                </p>
                <p className="mt-5 text-sm leading-7 text-white/58">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
