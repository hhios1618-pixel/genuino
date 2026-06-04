"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowUpRight, Check, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { services } from "@/data/site";

const ease = [0.22, 1, 0.36, 1] as const;

const contentVariants: Variants = {
  closed: { height: 0, opacity: 0 },
  open: { height: "auto", opacity: 1, transition: { duration: 0.42, ease } },
  exit: { height: 0, opacity: 0, transition: { duration: 0.28, ease } },
};

export default function Services() {
  const [open, setOpen] = useState<string | null>(null);

  function toggle(title: string) {
    setOpen((prev) => (prev === title ? null : title));
  }

  return (
    <section id="servicios" className="py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-12 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end" data-reveal>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#d8b76b]">
              Servicios
            </p>
            <h2 className="mt-5 text-3xl font-medium text-white md:text-4xl">
              Producción, imagen y estrategia con criterio de estudio.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/58 md:justify-self-end">
            Una oferta clara para artistas y equipos que necesitan resolver sonido,
            contenido y dirección sin perder identidad.
          </p>
        </div>

        <div className="divide-y divide-white/[0.07]" data-reveal>
          {services.map((service, index) => {
            const Icon = service.icon;
            const isOpen = open === service.title;

            return (
              <div key={service.title}>
                <button
                  type="button"
                  onClick={() => toggle(service.title)}
                  className="group flex w-full items-center gap-5 py-6 text-left transition duration-200 hover:pl-1 md:py-7"
                  aria-expanded={isOpen}
                >
                  <span className="w-7 shrink-0 text-xs tabular-nums text-white/22">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className={`mr-1 grid size-10 shrink-0 place-items-center rounded-full border transition duration-300 ${
                    isOpen
                      ? "border-[#d8b76b]/40 bg-[#d8b76b]/10 text-[#d8b76b]"
                      : "border-white/10 text-white/40 group-hover:border-white/20 group-hover:text-white/70"
                  }`}>
                    <Icon size={17} strokeWidth={1.8} />
                  </span>

                  <span className="flex-1">
                    <span className={`block text-lg font-medium transition duration-200 md:text-xl ${
                      isOpen ? "text-[#f4d489]" : "text-white group-hover:text-white/90"
                    }`}>
                      {service.title}
                    </span>
                    <span className="mt-0.5 block text-xs uppercase tracking-[0.22em] text-white/30">
                      {service.kicker}
                    </span>
                  </span>

                  <span className={`ml-auto shrink-0 grid size-8 place-items-center rounded-full border transition duration-300 ${
                    isOpen
                      ? "border-[#d8b76b]/40 text-[#d8b76b]"
                      : "border-white/10 text-white/30 group-hover:border-white/20"
                  }`}>
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="content"
                      variants={contentVariants}
                      initial="closed"
                      animate="open"
                      exit="exit"
                      className="overflow-hidden"
                    >
                      <div className="grid gap-8 pb-8 pl-[4.75rem] md:grid-cols-[1fr_auto]">
                        <div>
                          <p className="text-base leading-8 text-white/62">{service.detail}</p>
                          <ul className="mt-6 space-y-2">
                            {service.deliverables.map((item) => (
                              <li key={item} className="flex items-start gap-3 text-sm leading-6 text-white/52">
                                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#d8b76b]/12 text-[#d8b76b]">
                                  <Check size={12} strokeWidth={2.2} />
                                </span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex items-end">
                          <a
                            href="/contacto"
                            className="inline-flex h-11 items-center gap-2 rounded-full border border-[#d8b76b]/30 bg-[#d8b76b]/8 px-5 text-sm font-medium text-[#f4d489] transition hover:border-[#d8b76b]/60 hover:bg-[#d8b76b]/14"
                          >
                            Cotizar <ArrowUpRight size={14} />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
