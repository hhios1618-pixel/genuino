import { services } from "@/data/site";

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#d8b76b]">
            Servicios
          </p>
          <h2 className="mt-5 text-3xl font-medium tracking-[-0.03em] text-white md:text-4xl">
            Un estudio para pensar, producir y terminar musica con altura.
          </h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-[1.7rem] border hairline bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="bg-[#0a0a09] p-6 transition hover:bg-[#11100e] md:p-7">
                <div className="mb-8 grid size-11 place-items-center rounded-full border border-[#d8b76b]/24 bg-[#d8b76b]/8 text-[#d8b76b]">
                  <Icon size={19} />
                </div>
                <h3 className="text-lg font-medium text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/58">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
