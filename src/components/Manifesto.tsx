export default function Manifesto() {
  return (
    <section id="concepto" className="border-y hairline bg-[#080807]/70 py-20 md:py-28">
      <div className="section-shell grid gap-10 md:grid-cols-[0.72fr_1.28fr] md:items-start" data-reveal>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#d8b76b]">
            Manifiesto
          </p>
          <h2 data-reveal-title className="mt-5 max-w-sm text-3xl font-medium text-white md:text-4xl">
            Una productora para convertir talento en carrera.
          </h2>
        </div>
        <div className="editorial-serif space-y-7 text-2xl leading-9 text-white/70">
          <p>
            Genuino trabaja desde una pregunta concreta: que necesita este artista
            para estar en el lugar correcto y crecer con herramientas reales. Ahi
            entran la canción, el sonido, el relato, la imagen y la exposición.
          </p>
          <p>
            La productora integra producción musical, melodías, letras, videoclips,
            marketing artístico y gestión de entrevistas en radio y TV. No se trata
            de hacer ruido: se trata de construir presencia, catálogo y movimiento.
          </p>
        </div>
      </div>
    </section>
  );
}
