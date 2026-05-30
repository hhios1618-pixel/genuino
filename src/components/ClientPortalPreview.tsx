"use client";

import { LockKeyhole, MessageSquareText, Play, Send, ShieldCheck, UploadCloud } from "lucide-react";
import { FormEvent, useState } from "react";
import type { ReactNode } from "react";
import { clientPortalDemos, portalAccessRoles } from "@/data/site";

export default function ClientPortalPreview() {
  const [active, setActive] = useState(0);
  const [unlocked, setUnlocked] = useState(false);
  const project = clientPortalDemos[active] ?? clientPortalDemos[0];

  function handleAccess(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setUnlocked(true);
  }

  return (
    <section className="py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-12 grid gap-7 md:grid-cols-[0.9fr_1.1fr] md:items-end" data-reveal>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#d8b76b]">
              Portal de clientes
            </p>
            <h1 data-reveal-title className="mt-5 max-w-4xl text-4xl font-medium leading-[0.98] text-white md:text-6xl">
              Maquetas privadas, administración y carpeta legal del proyecto.
            </h1>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/60 md:justify-self-end">
            MVP preparado para evolucionar con login real, archivos privados, roles
            para equipo administrativo y acceso legal cuando el proyecto lo necesite.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]" data-reveal>
          <aside className="cinematic-panel rounded-[1.5rem] p-5 md:p-7">
            <div className="mb-6 grid size-13 place-items-center rounded-full border border-[#d8b76b]/28 bg-[#d8b76b]/10 text-[#d8b76b]">
              <LockKeyhole size={22} />
            </div>
            <h2 className="text-2xl font-medium text-white">Acceso cliente</h2>
            <p className="mt-4 text-sm leading-7 text-white/58">
              Vista privada para revisar versiones, dejar feedback y mantener ordenados
              artistas, producción, administración y asesoría legal.
            </p>

            <form onSubmit={handleAccess} className="mt-7 grid gap-3">
              <input
                required
                type="email"
                className="h-12 rounded-2xl border border-white/10 bg-[#050505]/72 px-4 text-sm text-white outline-none placeholder:text-white/24 focus:border-[#d8b76b]/60"
                placeholder="email del proyecto"
              />
              <input
                required
                className="h-12 rounded-2xl border border-white/10 bg-[#050505]/72 px-4 text-sm text-white outline-none placeholder:text-white/24 focus:border-[#d8b76b]/60"
                placeholder="código de acceso"
              />
              <button
                type="submit"
                data-magnetic
                data-cursor="Entrar"
                data-cursor-mode="link"
                className="premium-cta inline-flex h-13 items-center justify-center gap-3 rounded-full px-7 text-sm font-semibold text-[#090806]"
              >
                Ver demo privado <ShieldCheck size={16} />
              </button>
            </form>

            {unlocked ? (
              <p className="mt-5 rounded-2xl border border-[#d8b76b]/28 bg-[#d8b76b]/10 p-4 text-sm leading-6 text-[#f8e7b3]">
                Demo desbloqueado. En producción este acceso debe conectarse a autenticación,
                roles y storage privado.
              </p>
            ) : null}
          </aside>

          <div className={`relative overflow-hidden rounded-[1.7rem] border hairline bg-[#090908] ${unlocked ? "" : "opacity-82"}`}>
            <div className="border-b border-white/10 p-5 md:flex md:items-center md:justify-between md:gap-6 md:p-7">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#d8b76b]">{project.status}</p>
                <h2 className="mt-3 text-3xl font-medium text-white">{project.title}</h2>
                <p className="mt-2 text-sm text-white/46">{project.artist}</p>
              </div>
              <div className="mt-5 flex gap-2 md:mt-0">
                {clientPortalDemos.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActive(index)}
                    className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em] transition ${
                      active === index
                        ? "border-[#d8b76b]/50 bg-[#d8b76b]/12 text-[#f8e7b3]"
                        : "border-white/10 text-white/48 hover:border-white/24"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-5 p-5 md:p-7 xl:grid-cols-[1fr_0.86fr]">
              <div className="rounded-[1.3rem] border border-white/10 bg-black/30 p-5">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    data-cursor="Play"
                    data-cursor-mode="media"
                    className="grid size-14 place-items-center rounded-full border border-[#d8b76b]/34 bg-[#d8b76b]/12 text-[#f8e7b3]"
                    aria-label="Reproducir maqueta"
                  >
                    <Play size={18} fill="currentColor" />
                  </button>
                  <p className="text-sm text-white/50">{project.duration}</p>
                </div>
                <div className="flex h-24 items-end gap-1 rounded-[1rem] border border-white/10 bg-[#050505] p-4">
                  {Array.from({ length: 44 }, (_, index) => (
                    <span
                      key={index}
                      className="flex-1 rounded-full bg-[#d8b76b]/70"
                      style={{ height: `${22 + ((index * 17) % 64)}%` }}
                    />
                  ))}
                </div>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  <PortalAction icon={<MessageSquareText size={17} />} label="Comentar marca" />
                  <PortalAction icon={<UploadCloud size={17} />} label="Subir referencia" />
                </div>
              </div>

              <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.026] p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-[#d8b76b]">Feedback</p>
                <div className="mt-5 grid gap-3">
                  {project.comments.map((comment) => (
                    <article key={`${comment.time}-${comment.body}`} className="rounded-[1rem] border border-white/10 bg-black/22 p-4">
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <p className="text-sm font-medium text-white">{comment.author}</p>
                        <p className="font-mono text-xs text-[#d8b76b]">{comment.time}</p>
                      </div>
                      <p className="text-sm leading-6 text-white/58">{comment.body}</p>
                    </article>
                  ))}
                </div>
                <div className="mt-5 flex rounded-full border border-white/10 bg-black/24 p-1">
                  <input
                    className="min-w-0 flex-1 rounded-full bg-transparent px-4 text-sm text-white outline-none placeholder:text-white/28"
                    placeholder="Nuevo comentario en 01:24"
                  />
                  <button type="button" className="grid size-10 shrink-0 place-items-center rounded-full bg-[#d8b76b] text-black">
                    <Send size={15} />
                  </button>
                </div>
              </div>
            </div>

            {!unlocked ? (
              <div className="absolute inset-0 grid place-items-center bg-black/28 backdrop-blur-[2px]">
                <div className="rounded-full border border-white/12 bg-black/40 px-5 py-3 text-sm font-medium text-white/72 backdrop-blur-xl">
                  Ingresa datos para ver la demo
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3" data-stagger>
          {portalAccessRoles.map((role) => (
            <article
              key={role.title}
              className="rounded-[1.15rem] border border-white/10 bg-white/[0.026] p-5"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-[#d8b76b]">{role.title}</p>
              <p className="mt-4 text-sm leading-7 text-white/58">{role.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortalAction({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <button
      type="button"
      className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/10 text-sm text-white/64 transition hover:border-[#d8b76b]/36 hover:text-[#f8e7b3]"
    >
      {icon}
      {label}
    </button>
  );
}
