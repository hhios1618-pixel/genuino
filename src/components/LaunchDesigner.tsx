"use client";

import { ArrowRight, CalendarDays, Check, Loader2, Sparkles, WalletCards } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { launchDesignerServices } from "@/data/site";

type LeadStatus = "idle" | "sending" | "sent" | "error";

export default function LaunchDesigner() {
  const [selected, setSelected] = useState<string[]>(["beat", "vocal-mix", "master"]);
  const [releaseType, setReleaseType] = useState("Single");
  const [deadline, setDeadline] = useState("30 días");
  const [budget, setBudget] = useState("$500 - $1.000");
  const [status, setStatus] = useState<LeadStatus>("idle");

  const selectedServices = useMemo(
    () => launchDesignerServices.filter((service) => selected.includes(service.id)),
    [selected],
  );
  const estimate = selectedServices.reduce((sum, service) => sum + service.price, 0);
  const days = Math.max(...selectedServices.map((service) => service.days), 0);
  const packageName = selected.includes("video") || selected.includes("marketing")
    ? "Lanzamiento 360"
    : selected.includes("beat")
      ? "Producción de single"
      : "Finalización sonora";

  function toggleService(id: string) {
    setSelected((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      artist: String(formData.get("artist") ?? ""),
      releaseType,
      deadline,
      budget,
      services: selectedServices.map((service) => service.label),
      packageName,
      estimate,
      notes: String(formData.get("notes") ?? ""),
      source: "launch-designer",
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Lead request failed");
      setStatus("sent");
      event.currentTarget.reset();
    } catch {
      const subject = encodeURIComponent(`Lead calificado: ${payload.artist || payload.name}`);
      const body = encodeURIComponent(
        `Nombre: ${payload.name}\nEmail: ${payload.email}\nArtista: ${payload.artist}\nTipo: ${releaseType}\nPlazo: ${deadline}\nPresupuesto: ${budget}\nServicios: ${payload.services.join(", ")}\nPaquete sugerido: ${packageName}\nEstimación: USD ${estimate}\n\n${payload.notes}`,
      );
      window.location.href = `mailto:contacto@genuino.studio?subject=${subject}&body=${body}`;
      setStatus("error");
    }
  }

  return (
    <section id="calculador" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(216,183,107,0.14),transparent_31rem),radial-gradient(circle_at_78%_28%,rgba(120,199,210,0.12),transparent_30rem)]" />
      <div className="section-shell relative z-10">
        <div className="mb-12 grid gap-7 md:grid-cols-[0.9fr_1.1fr] md:items-end" data-reveal>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#d8b76b]">
              Diseñador de lanzamiento
            </p>
            <h1 data-reveal-title className="mt-5 max-w-4xl text-4xl font-medium leading-[0.98] text-white md:text-6xl">
              Arma una ruta de single y deja el lead listo para el equipo.
            </h1>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/60 md:justify-self-end">
            Selecciona servicios, define urgencia y recibe una recomendación de
            paquete. La información queda preparada para que Genuino responda con
            foco comercial.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5 lg:grid-cols-[1fr_0.78fr]" data-reveal>
          <div className="grid gap-5">
            <div className="cinematic-panel rounded-[1.5rem] p-5 md:p-7">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full border border-[#d8b76b]/28 bg-[#d8b76b]/10 text-[#d8b76b]">
                  <Sparkles size={18} />
                </span>
                <h2 className="text-xl font-medium text-white">1. Servicios</h2>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {launchDesignerServices.map((service) => {
                  const checked = selected.includes(service.id);

                  return (
                    <label
                      key={service.id}
                      className={`group min-h-36 cursor-pointer rounded-[1.1rem] border p-4 transition ${
                        checked
                          ? "border-[#d8b76b]/48 bg-[#d8b76b]/10"
                          : "border-white/10 bg-white/[0.026] hover:border-[#d8b76b]/30"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleService(service.id)}
                        className="sr-only"
                      />
                      <span className="flex items-start justify-between gap-4">
                        <span>
                          <span className="block text-lg font-medium text-white">{service.label}</span>
                          <span className="mt-3 block text-sm leading-6 text-white/54">{service.detail}</span>
                        </span>
                        <span className={`grid size-7 shrink-0 place-items-center rounded-full border ${checked ? "border-[#d8b76b] bg-[#d8b76b] text-black" : "border-white/16 text-transparent"}`}>
                          <Check size={15} />
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <SelectBlock
                icon={<CalendarDays size={18} />}
                label="Tipo"
                value={releaseType}
                onChange={setReleaseType}
                options={["Single", "EP", "Videoclip", "Campaña"]}
              />
              <SelectBlock
                icon={<CalendarDays size={18} />}
                label="Plazo"
                value={deadline}
                onChange={setDeadline}
                options={["14 días", "30 días", "60 días", "Sin fecha fija"]}
              />
              <SelectBlock
                icon={<WalletCards size={18} />}
                label="Presupuesto"
                value={budget}
                onChange={setBudget}
                options={["Hasta $500", "$500 - $1.000", "$1.000 - $2.500", "$2.500+"]}
              />
            </div>
          </div>

          <aside className="cinematic-panel rounded-[1.5rem] p-5 md:p-7 lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs uppercase tracking-[0.28em] text-[#d8b76b]">Resumen</p>
            <h2 className="mt-4 text-3xl font-medium text-white">{packageName}</h2>
            <p className="mt-4 text-sm leading-7 text-white/58">
              Ruta sugerida para {releaseType.toLowerCase()} con plazo de {deadline.toLowerCase()} y
              presupuesto declarado {budget}.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-[1rem] border border-white/10 bg-black/24 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/42">Desde</p>
                <p className="mt-2 text-2xl font-semibold text-white">USD {estimate}</p>
              </div>
              <div className="rounded-[1rem] border border-white/10 bg-black/24 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/42">Producción</p>
                <p className="mt-2 text-2xl font-semibold text-white">{days || 1}+ días</p>
              </div>
            </div>

            <div className="mt-7 grid gap-3">
              <input
                required
                name="name"
                className="h-12 rounded-2xl border border-white/10 bg-[#050505]/72 px-4 text-sm text-white outline-none placeholder:text-white/24 focus:border-[#d8b76b]/60"
                placeholder="Nombre"
              />
              <input
                required
                type="email"
                name="email"
                className="h-12 rounded-2xl border border-white/10 bg-[#050505]/72 px-4 text-sm text-white outline-none placeholder:text-white/24 focus:border-[#d8b76b]/60"
                placeholder="Email"
              />
              <input
                name="artist"
                className="h-12 rounded-2xl border border-white/10 bg-[#050505]/72 px-4 text-sm text-white outline-none placeholder:text-white/24 focus:border-[#d8b76b]/60"
                placeholder="Nombre artístico"
              />
              <textarea
                name="notes"
                rows={4}
                className="resize-none rounded-2xl border border-white/10 bg-[#050505]/72 p-4 text-sm text-white outline-none placeholder:text-white/24 focus:border-[#d8b76b]/60"
                placeholder="Referencias, estado de la canción, objetivo del lanzamiento..."
              />
            </div>

            <button
              type="submit"
              disabled={selected.length === 0 || status === "sending"}
              data-magnetic
              data-cursor="Enviar"
              data-cursor-mode="link"
              className="premium-cta mt-5 inline-flex h-13 w-full items-center justify-center gap-3 rounded-full px-7 text-sm font-semibold text-[#090806] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "sending" ? <Loader2 className="animate-spin" size={16} /> : <ArrowRight size={16} />}
              Enviar lead calificado
            </button>

            {status === "sent" ? (
              <p className="mt-4 rounded-2xl border border-[#d8b76b]/28 bg-[#d8b76b]/10 p-4 text-sm leading-6 text-[#f8e7b3]">
                Lead recibido. El equipo tiene el resumen para responder con una ruta concreta.
              </p>
            ) : null}
          </aside>
        </form>
      </div>
    </section>
  );
}

function SelectBlock({
  icon,
  label,
  value,
  onChange,
  options,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <label className="cinematic-panel grid gap-3 rounded-[1.25rem] p-5 text-sm text-white/66">
      <span className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-[#d8b76b]">
        {icon}
        {label}
      </span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 rounded-2xl border border-white/10 bg-[#050505]/72 px-4 text-white outline-none focus:border-[#d8b76b]/60"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
