"use client";

import { FormEvent, useState } from "react";
import Arrow from "@/components/ui/Arrow";
import { contact, serviceOptions } from "@/data/site";
import { useLang } from "@/i18n/LangProvider";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full border-b border-bone/20 bg-transparent py-3 text-lg text-bone outline-none transition-colors duration-500 placeholder:text-bone/25 focus:border-gold";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [selected, setSelected] = useState<string[]>([]);
  const { lang, t } = useLang();

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
          source: lang === "es" ? "contacto" : `contacto-${lang}`,
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
              <dt className="label">{t({ es: "Correo", en: "Email" })}</dt>
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
              <dt className="label">{t({ es: "Base", en: "Based in" })}</dt>
              <dd className="mt-2 text-xl">{contact.base}</dd>
            </div>
          </dl>
        </aside>

        <form onSubmit={handleSubmit} className="lg:col-span-7 lg:col-start-6">
          <fieldset className="border-t border-line pt-8">
            <legend className="label float-left mb-6 w-full">{t({ es: "Tipo de proyecto", en: "Project type" })}</legend>
            <div className="clear-both flex flex-wrap gap-2">
              {serviceOptions.map((option) => {
                // Se guarda el nombre en español para que la solicitud llegue igual desde ambos idiomas
                const active = selected.includes(option.es);
                return (
                  <button
                    key={option.es}
                    type="button"
                    onClick={() => toggle(option.es)}
                    aria-pressed={active}
                    className={`h-11 rounded-full border px-4 text-sm transition-colors duration-500 ${
                      active
                        ? "border-gold bg-gold text-ink"
                        : "border-bone/20 text-bone/75 hover:border-bone/60 hover:text-bone"
                    }`}
                  >
                    {t(option)}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            <label className="block">
              <span className="label">{t({ es: "Nombre", en: "Name" })}</span>
              <input required name="name" autoComplete="name" className={field} />
            </label>
            <label className="block">
              <span className="label">{t({ es: "Correo", en: "Email" })}</span>
              <input required type="email" name="email" autoComplete="email" className={field} />
            </label>
            <label className="block sm:col-span-2">
              <span className="label">{t({ es: "Artista o proyecto", en: "Artist or project" })}</span>
              <input name="artist" className={field} />
            </label>
            <label className="block sm:col-span-2">
              <span className="label">{t({ es: "Mensaje", en: "Message" })}</span>
              <textarea
                required
                name="message"
                rows={5}
                className={`${field} resize-none`}
                placeholder={t({ es: "Etapa del proyecto, referencias y fechas.", en: "Where the project stands, references and key dates." })}
              />
            </label>
          </div>

          <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xs text-sm text-bone/45" aria-live="polite">
              {status === "sent"
                ? t({ es: "Mensaje recibido. Responderemos por correo.", en: "Message received. We’ll reply by email." })
                : status === "error"
                  ? t({
                      es: `No se pudo enviar. Escríbenos directamente a ${contact.email}.`,
                      en: `Something went wrong. Email us directly at ${contact.email}.`,
                    })
                  : t({
                      es: "Los datos se usan solo para responder esta solicitud.",
                      en: "We only use your details to reply to this inquiry.",
                    })}
            </p>
            <button type="submit" className="btn shrink-0" disabled={status === "sending"} data-magnetic>
              {status === "sending" ? t({ es: "Enviando", en: "Sending" }) : t({ es: "Enviar", en: "Send" })}
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
