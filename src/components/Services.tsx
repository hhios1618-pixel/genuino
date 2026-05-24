"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowUpRight, Check, X } from "lucide-react";
import { useEffect, useState } from "react";
import { blurDataUrl, services } from "@/data/site";

type Service = (typeof services)[number];
const easeOutExpo = [0.22, 1, 0.36, 1] as const;

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: index * 0.055, duration: 0.55, ease: easeOutExpo },
  }),
};

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const activeService = services[activeIndex] ?? services[0];
  const ActiveIcon = activeService.icon;

  useEffect(() => {
    if (!selectedService) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedService(null);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedService]);

  return (
    <section id="servicios" className="py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-12 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end" data-reveal>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#d8b76b]">
              Servicios
            </p>
            <h2 data-reveal-title className="mt-5 text-3xl font-medium text-white md:text-4xl">
              Producción, imagen y estrategia con criterio de estudio.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/58 md:justify-self-end">
            Una oferta clara para artistas y equipos que necesitan resolver sonido, contenido y
            dirección sin perder identidad.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.aside
            className="sticky top-28 hidden h-[38rem] overflow-hidden rounded-[1.5rem] border hairline bg-[#080807] lg:block"
            initial={false}
            animate={{ borderColor: "rgba(216, 183, 107, 0.28)" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.title}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.45, ease: easeOutExpo }}
              >
                <Image
                  src={activeService.image}
                  alt={activeService.imageAlt}
                  fill
                  sizes="38vw"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={blurDataUrl}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/34 to-black/10" />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-x-0 bottom-0 p-7">
              <div className="mb-5 flex size-12 items-center justify-center rounded-full border border-[#d8b76b]/34 bg-black/34 text-[#d8b76b] backdrop-blur-xl">
                <ActiveIcon size={21} strokeWidth={1.8} />
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#d8b76b]">
                {activeService.kicker}
              </p>
              <h3 className="mt-4 text-3xl font-medium text-white">{activeService.title}</h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/68">
                {activeService.detail}
              </p>
            </div>
          </motion.aside>

          <motion.div
            className="grid gap-3 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            data-stagger
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = index === activeIndex;

              return (
                <motion.button
                  key={service.title}
                  type="button"
                  custom={index}
                  variants={cardVariants}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setSelectedService(service)}
                  data-cursor="Ver"
                  className="group relative min-h-[18.5rem] overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#090908] p-0 text-left outline-none transition duration-300 hover:border-[#d8b76b]/38 focus-visible:border-[#d8b76b]/70 focus-visible:ring-2 focus-visible:ring-[#d8b76b]/24 md:min-h-[20rem]"
                >
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 32vw"
                    className="object-cover opacity-36 transition duration-700 group-hover:scale-[1.055] group-hover:opacity-52"
                    placeholder="blur"
                    blurDataURL={blurDataUrl}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/72 to-black/18" />
                  <div
                    className={`absolute inset-0 transition duration-300 ${
                      isActive ? "bg-[#d8b76b]/8" : "bg-transparent"
                    }`}
                  />

                  <div className="relative z-10 flex h-full min-h-[18.5rem] flex-col justify-between p-5 md:min-h-[20rem] md:p-6">
                    <div className="flex items-start justify-between gap-5">
                      <div className="grid size-12 place-items-center rounded-full border border-white/14 bg-black/28 text-white backdrop-blur-xl transition group-hover:border-[#d8b76b]/40 group-hover:text-[#d8b76b]">
                        <Icon size={21} strokeWidth={1.8} />
                      </div>
                      <span className="grid size-11 place-items-center rounded-full border border-white/14 bg-white/6 text-white/78 backdrop-blur-xl transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-[#d8b76b]/36 group-hover:text-[#f4d489]">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>

                    <div>
                      <p className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#d8b76b]">
                        {service.kicker}
                      </p>
                      <h3 className="mt-3 text-2xl font-medium text-white">{service.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-white/62">{service.description}</p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedService ? (
          <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
        ) : null}
      </AnimatePresence>
    </section>
  );
}

function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  const Icon = service.icon;

  return (
    <motion.div
      className="fixed inset-0 z-[120] grid place-items-center bg-black/76 px-4 py-8 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="presentation"
    >
      <motion.article
        className="relative grid max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[1.5rem] border border-white/12 bg-[#080807] shadow-[0_34px_120px_rgba(0,0,0,0.68)] md:grid-cols-[0.95fr_1.05fr]"
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 18, scale: 0.98 }}
        transition={{ duration: 0.36, ease: easeOutExpo }}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
      >
        <button
          type="button"
          onClick={onClose}
          data-cursor="link"
          className="absolute right-4 top-4 z-20 grid size-11 place-items-center rounded-full border border-white/14 bg-black/42 text-white backdrop-blur-xl transition hover:border-[#d8b76b]/50 hover:text-[#f3d58a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8b76b]/32"
          aria-label="Cerrar detalle de servicio"
        >
          <X size={18} />
        </button>

        <div className="relative min-h-[20rem] md:min-h-[35rem]">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL={blurDataUrl}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/28 to-black/12" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="mb-5 grid size-13 place-items-center rounded-full border border-[#d8b76b]/34 bg-black/34 text-[#d8b76b] backdrop-blur-xl">
              <Icon size={23} strokeWidth={1.8} />
            </div>
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-[#d8b76b]">
              {service.kicker}
            </p>
          </div>
        </div>

        <div className="overflow-y-auto p-6 md:p-8 lg:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.34em] text-white/38">
            Servicio Genuino
          </p>
          <h3 id="service-modal-title" className="mt-5 text-3xl font-medium text-white md:text-5xl">
            {service.title}
          </h3>
          <p className="mt-6 text-base leading-8 text-white/68">{service.detail}</p>

          <div className="mt-9 border-y border-white/10 py-6">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#d8b76b]">
              Incluye
            </p>
            <ul className="mt-5 grid gap-3">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-white/72">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#d8b76b]/14 text-[#d8b76b]">
                    <Check size={13} strokeWidth={2.2} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="/contacto"
              data-cursor="link"
              className="premium-cta inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-bold uppercase tracking-[0.16em] text-black"
            >
              Cotizar servicio
            </a>
            <button
              type="button"
              onClick={onClose}
              data-cursor="link"
              className="ghost-cta inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-bold uppercase tracking-[0.16em] text-white/82"
            >
              Seguir viendo
            </button>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}
