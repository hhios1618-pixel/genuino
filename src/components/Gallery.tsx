import { gallery } from "@/data/site";

export default function Gallery() {
  return (
    <section id="galeria" className="border-y hairline bg-[#080807] py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#d8b76b]">
            Galeria visual
          </p>
          <h2 className="mt-5 text-3xl font-medium tracking-[-0.03em] text-white md:text-4xl">
            Espacios para estudio, sesiones, artistas y detras de camara.
          </h2>
        </div>
        <div className="grid auto-rows-[210px] gap-4 md:grid-cols-4">
          {gallery.map((item, index) => (
            <figure
              key={item.label}
              className={`group relative overflow-hidden rounded-[1.4rem] border hairline bg-gradient-to-br ${item.tone} ${
                index === 0 || index === 5 ? "md:col-span-2" : ""
              } ${index === 1 ? "md:row-span-2" : ""}`}
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.13),transparent_38%),repeating-linear-gradient(0deg,rgba(255,255,255,0.04)_0_1px,transparent_1px_20px)] transition duration-500 group-hover:scale-105" />
              <figcaption className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-3 text-sm text-white/76">
                <span>{item.label}</span>
                <span className="rounded-full border border-white/12 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/42">
                  Imagen
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
