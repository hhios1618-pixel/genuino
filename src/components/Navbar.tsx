"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import GenuinoLogo from "@/components/GenuinoLogo";
import { navItems } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border border-white/10 bg-[#070707]/70 px-4 text-sm text-white/82 shadow-2xl shadow-black/25 backdrop-blur-xl sm:px-5">
        <a href="#inicio" className="flex items-center" aria-label="Ir al inicio">
          <GenuinoLogo
            className="h-12 w-24 text-white transition hover:text-[#f8e7b3]"
          />
          <span className="sr-only">Genuino</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-white/62 transition hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="hidden rounded-full border border-[#d8b76b]/30 bg-[#d8b76b]/10 px-4 py-2 text-[#f8e7b3] transition hover:border-[#d8b76b]/70 hover:bg-[#d8b76b]/16 md:inline-flex"
        >
          Conversemos
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid size-10 place-items-center rounded-full border border-white/10 text-white md:hidden"
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open ? (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-white/10 bg-[#070707]/92 p-2 text-sm text-white/78 shadow-2xl backdrop-blur-xl md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 transition hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
