"use client";

import { FormEvent, useState } from "react";
import Arrow from "@/components/ui/Arrow";
import { contact, serviceOptions } from "@/data/site";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full border-b border-bone/20 bg-transparent py-3 text-lg text-bone outline-none transition-colors duration-500 placeholder:text-bone/25 focus:border-gold";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(option: string) {
    setSelected((current) =>
      current.includes(option) ? current.filter((item) => item !== option) : [...current, option],
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          artist: String(data.get("artist") ?? ""),
          services: selected,
          message: String(data.get("message") ?? ""),
          source: "contacto",
        }),
      });
      if (!response.ok) throw new Error("lead_failed");
      form.reset();
      setSelected([]);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="pb-24 md:pb-36">
      <div className="shell grid gap-16 lg:grid-cols-12">
        <aside className="lg:col-span-4">
          <dl className="grid gap-8">
            <div>
              <dt className="label">Correo</dt>
              <dd className="mt-2">
                <a href={`mailto:${contact.email}`} className="u-link text-xl">
                  {contact.email}
                </a>
              </dd>
            </div>
            {[contact.instagram, contact.youtube].map((channel) => (
              <div key={channel.href}>
                <dt className="label">{channel.label}</dt>
                <dd className="mt-2">
                  <a href={channel.href} target="_blank" rel="noreferrer" className="u-link text-xl">
                    {channel.handle}
                  </a>
                </dd>
              </div>
            ))}
            <div>
              <dt className="label">Base</dt>
              <dd className="mt-2 text-xl">{contact.base}</dd>
            </div>
          </dl>
        </aside>

        <form onSubmit={handleSubmit} className="lg:col-span-7 lg:col-start-6">
          <fieldset className="border-t border-line pt-8">
            <legend className="label float-left mb-6 w-full">Tipo de proyecto</legend>
            <div className="clear-both flex flex-wrap gap-2">
              {serviceOptions.map((option) => {
                const active = selected.includes(option);
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => toggle(option)}
                    aria-pressed={active}
                    className={`h-11 rounded-full border px-4 text-sm transition-colors duration-500 ${
                      active
                        ? "border-gold bg-gold text-ink"
                        : "border-bone/20 text-bone/75 hover:border-bone/60 hover:text-bone"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            <label className="block">
              <span className="label">Nombre</span>
              <input required name="name" autoComplete="name" className={field} />
            </label>
            <label className="block">
              <span className="label">Correo</span>
              <input required type="email" name="email" autoComplete="email" className={field} />
            </label>
            <label className="block sm:col-span-2">
              <span className="label">Artista o proyecto</span>
              <input name="artist" className={field} />
            </label>
            <label className="block sm:col-span-2">
              <span className="label">Mensaje</span>
              <textarea
                required
                name="message"
                rows={5}
                className={`${field} resize-none`}
                placeholder="Etapa del proyecto, referencias y fechas."
              />
            </label>
          </div>

          <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xs text-sm text-bone/45" aria-live="polite">
              {status === "sent"
                ? "Mensaje recibido. Responderemos por correo."
                : status === "error"
                  ? `No se pudo enviar. Escríbenos directamente a ${contact.email}.`
                  : "Los datos se usan solo para responder esta solicitud."}
            </p>
            <button type="submit" className="btn shrink-0" disabled={status === "sending"} data-magnetic>
              {status === "sending" ? "Enviando" : "Enviar"}
              <span className="btn-icon">
                <Arrow className="size-4" direction="right" />
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
