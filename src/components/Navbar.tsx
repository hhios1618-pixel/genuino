"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Arrow from "@/components/ui/Arrow";
import { contact, navItems } from "@/data/site";

const ease = [0.32, 0.72, 0, 1] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const lastY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        setSolid(y > 40);
        setHidden(y > 240 && y > lastY.current);
        lastY.current = y;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const lenis = window.__lenis;
    if (open) lenis?.stop();
    else lenis?.start();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[var(--z-header)] transition-[transform,background-color] duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        } ${solid && !open ? "bg-ink/80 backdrop-blur-xl" : "bg-transparent"}`}
      >
        <nav className="shell flex h-20 items-center justify-between gap-6" aria-label="Principal">
          <Link href="/" className="relative z-10 flex items-center gap-3" aria-label="Genuino Family, inicio">
            <Image
              src="/brand/genuino-mark.png"
              alt=""
              width={640}
              height={470}
              priority
              className="h-7 w-auto"
            />
            <span className="display text-[1.35rem] leading-none tracking-[0.01em]">Genuino</span>
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`group relative flex items-center gap-2 text-sm transition-colors duration-500 ${
                      active ? "text-bone" : "text-bone/55 hover:text-bone"
                    }`}
                  >
                    <span
                      className={`size-1.5 rounded-full bg-signal transition-transform duration-500 ${
                        active ? "scale-100" : "scale-0"
                      }`}
                      aria-hidden="true"
                    />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="relative z-10 flex items-center gap-3">
            <Link
              href="/contacto"
              data-magnetic
              className="hidden h-11 items-center gap-2 rounded-full bg-bone px-5 text-sm font-medium text-ink transition-colors duration-500 hover:bg-signal hover:text-bone sm:inline-flex"
            >
              Contacto
              <Arrow className="size-3.5" />
            </Link>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="relative grid size-11 place-items-center rounded-full border border-bone/20 lg:hidden"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              aria-controls="menu-movil"
            >
              <span
                className={`absolute h-px w-4 bg-bone transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  open ? "rotate-45" : "-translate-y-[3px]"
                }`}
              />
              <span
                className={`absolute h-px w-4 bg-bone transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  open ? "-rotate-45" : "translate-y-[3px]"
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="menu-movil"
            className="fixed inset-0 z-[var(--z-menu)] flex flex-col bg-ink/96 backdrop-blur-2xl lg:hidden"
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.8, ease }}
          >
            <nav className="shell flex flex-1 flex-col justify-center pt-20" aria-label="Menú">
              <ul>
                {[...navItems, { label: "Contacto", href: "/contacto" }].map((item, index) => (
                  <li key={item.href} className="overflow-hidden border-b border-line">
                    <motion.div
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "110%" }}
                      transition={{ duration: 0.8, ease, delay: 0.12 + index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        aria-current={pathname === item.href ? "page" : undefined}
                        className="flex items-baseline justify-between py-3"
                      >
                        <span className="display text-[clamp(3rem,15vw,5.5rem)]">{item.label}</span>
                        <span className="label">0{index + 1}</span>
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </nav>
            <motion.div
              className="shell flex items-end justify-between gap-4 pb-8 pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5 } }}
              exit={{ opacity: 0 }}
            >
              <a href={`mailto:${contact.email}`} className="text-sm text-bone/70">
                {contact.email}
              </a>
              <a href={contact.instagram.href} target="_blank" rel="noreferrer" className="label">
                Instagram
              </a>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
