"use client";

import { ArrowRight, Check } from "lucide-react";
import { FormEvent, useState } from "react";
import { contactChannels, serviceOptions } from "@/data/site";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    // Future Supabase hook: send payload to an insert action or route handler here.
    console.log("Genuino contact request", payload);
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <section id="contacto" className="py-20 md:py-28">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#d8b76b]">
            Contacto
          </p>
          <h2 className="mt-5 max-w-xl text-3xl font-medium tracking-[-0.03em] text-white md:text-4xl">
            Hablemos si el proyecto necesita direccion, exposicion y resultado.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-white/62">
            Cuéntanos si necesitas producir una cancion, crear melodias y letras,
            desarrollar videoclip, abrir entrevistas en medios o posicionar tu carrera.
            Respondemos con una ruta clara, no con una plantilla.
          </p>

          <div className="mt-10 grid gap-3">
            {contactChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <div key={channel.label} className="flex items-center gap-4 rounded-2xl border hairline bg-white/[0.03] p-4">
                  <div className="grid size-10 place-items-center rounded-full border border-[#d8b76b]/24 bg-[#d8b76b]/8 text-[#d8b76b]">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/42">{channel.label}</p>
                    <p className="mt-1 text-sm text-white/74">{channel.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="cinematic-panel rounded-[2rem] p-5 md:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-white/66">
              Nombre
              <input
                required
                name="name"
                className="h-12 rounded-2xl border border-white/10 bg-[#050505]/72 px-4 text-white outline-none transition placeholder:text-white/24 focus:border-[#d8b76b]/60"
                placeholder="Tu nombre"
              />
            </label>
            <label className="grid gap-2 text-sm text-white/66">
              Email
              <input
                required
                type="email"
                name="email"
                className="h-12 rounded-2xl border border-white/10 bg-[#050505]/72 px-4 text-white outline-none transition placeholder:text-white/24 focus:border-[#d8b76b]/60"
                placeholder="nombre@email.com"
              />
            </label>
            <label className="grid gap-2 text-sm text-white/66 sm:col-span-2">
              Proyecto
              <input
                required
                name="project"
                className="h-12 rounded-2xl border border-white/10 bg-[#050505]/72 px-4 text-white outline-none transition placeholder:text-white/24 focus:border-[#d8b76b]/60"
                placeholder="Cancion, EP, marca, videoclip, demo..."
              />
            </label>
            <label className="grid gap-2 text-sm text-white/66 sm:col-span-2">
              Tipo de servicio
              <select
                required
                name="service"
                className="h-12 rounded-2xl border border-white/10 bg-[#050505]/72 px-4 text-white outline-none transition focus:border-[#d8b76b]/60"
                defaultValue=""
              >
                <option value="" disabled>
                  Selecciona una opcion
                </option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm text-white/66 sm:col-span-2">
              Mensaje
              <textarea
                required
                name="message"
                rows={6}
                className="resize-none rounded-2xl border border-white/10 bg-[#050505]/72 p-4 text-white outline-none transition placeholder:text-white/24 focus:border-[#d8b76b]/60"
                placeholder="Cuéntanos el contexto, referencias, tiempos y objetivo del proyecto."
              />
            </label>
          </div>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-white/42">
              Preparado para registrar consultas en Supabase.
            </p>
            <button
              type="submit"
              className="premium-cta inline-flex h-13 items-center justify-center gap-3 rounded-full px-7 text-sm font-semibold text-[#080706] transition hover:-translate-y-0.5"
            >
              Abrir conversacion <ArrowRight size={16} />
            </button>
          </div>

          {sent ? (
            <div className="mt-5 flex items-center gap-3 rounded-2xl border border-[#d8b76b]/28 bg-[#d8b76b]/10 p-4 text-sm text-[#f8e7b3]">
              <Check size={17} /> Consulta recibida. Simulacion lista para integrar.
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
}
