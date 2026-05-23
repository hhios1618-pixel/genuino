export default function About() {
  return (
    <section id="sobre" className="border-y hairline bg-[#090908] py-20 md:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="cinematic-panel overflow-hidden rounded-[2rem] p-4">
          <div className="studio-texture relative aspect-[4/3] rounded-[1.5rem] border border-white/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_28%,rgba(216,183,107,0.18),transparent_28%),linear-gradient(180deg,transparent,rgba(0,0,0,0.72))]" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/46">
                Studio still
              </p>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/68">
                Placeholder para retrato de estudio, equipo, sala o artista en
                sesion.
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#d8b76b]">
            Sobre Genuino
          </p>
          <h2 className="mt-5 text-3xl font-medium tracking-[-0.03em] text-white md:text-4xl">
            Criterio artistico y calidad tecnica en el mismo lugar.
          </h2>
          <div className="mt-7 space-y-6 text-base leading-8 text-white/64">
            <p>
              Genuino nace para acompanar proyectos que necesitan algo mas que una
              produccion correcta. Trabajamos con artistas, equipos creativos y
              marcas que buscan una musica con posicion, textura y sentido.
            </p>
            <p>
              El proceso combina escucha, direccion, oficio de estudio y una mirada
              editorial: menos ruido, mejores decisiones, mas identidad. Cada pieza
              se trata como una obra con contexto propio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
