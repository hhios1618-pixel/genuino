"use client";

import { ArrowRight, Check } from "lucide-react";
import { FormEvent, useState } from "react";
import { contactChannels, serviceOptions } from "@/data/site";

export default function Contact() {
  const [sent, setSent] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const project = String(formData.get("project") ?? "");
    const service = String(formData.get("service") ?? "");
    const message = String(formData.get("message") ?? "");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, service, project, notes: message, source: "contact" }),
      });

      if (!response.ok) throw new Error("Lead request failed");
      setSent(true);
      event.currentTarget.reset();
    } catch {
      const subject = encodeURIComponent(`Proyecto para Genuino Music: ${project}`);
      const body = encodeURIComponent(
        `Nombre: ${name}\nEmail: ${email}\nServicio: ${service}\nProyecto: ${project}\n\n${message}`,
      );
      window.location.href = `mailto:contacto@genuino.studio?subject=${subject}&body=${body}`;
      setSent(true);
      event.currentTarget.reset();
    }
  }

  return (
    <section id="contacto" className="py-20 md:py-28">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
        <div data-reveal>
          <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#d8b76b]">
            Contacto
          </p>
          <h2 data-reveal-title className="mt-5 max-w-xl text-3xl font-medium text-white md:text-4xl">
            Hablemos si el proyecto necesita dirección, exposición y una ruta clara.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-white/62">
            Cuéntanos si necesitas producir una canción, crear melodías y letras,
            desarrollar un videoclip, gestionar entrevistas en medios o posicionar tu carrera.
            Respondemos con una propuesta clara para avanzar con sonido, imagen y
            estrategia.
          </p>

          <div className="mt-10 grid gap-3">
            <a
              href="/calculador"
              data-cursor="Diseñar"
              data-cursor-mode="link"
              className="premium-cta inline-flex h-13 items-center justify-center gap-3 rounded-full px-7 text-sm font-semibold text-[#080706]"
            >
              Diseñar lanzamiento <ArrowRight size={16} />
            </a>
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

        <form onSubmit={handleSubmit} className="cinematic-panel rounded-[2rem] p-5 md:p-7" data-reveal>
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
                placeholder="Canción, EP, lanzamiento, videoclip, prensa..."
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
                  Selecciona una opción
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
              Respuesta comercial para producciones y desarrollo artístico.
            </p>
            <button
              type="submit"
              data-magnetic
              data-cursor="Enviar"
              className="premium-cta inline-flex h-13 items-center justify-center gap-3 rounded-full px-7 text-sm font-semibold text-[#080706] transition hover:-translate-y-0.5"
            >
              Abrir conversación <ArrowRight size={16} />
            </button>
          </div>

          {sent ? (
            <div className="mt-5 flex items-center gap-3 rounded-2xl border border-[#d8b76b]/28 bg-[#d8b76b]/10 p-4 text-sm text-[#f8e7b3]">
              <Check size={17} /> Recibimos la consulta con el contexto del proyecto.
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
}
