"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import GenuinoLogo from "@/components/GenuinoLogo";
import { navItems } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-4 md:top-4">
      <nav
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border px-4 text-sm text-white/82 backdrop-blur-2xl transition duration-300 supports-[backdrop-filter]:bg-[#070707]/58 sm:px-5 ${
          scrolled || open
            ? "border-[#d8b76b]/22 bg-[#070707]/86 shadow-2xl shadow-black/42"
            : "border-white/10 bg-[#070707]/72 shadow-2xl shadow-black/25"
        }`}
      >
        <Link href="/" data-cursor="Inicio" data-cursor-mode="link" className="flex items-center" aria-label="Ir al inicio">
          <GenuinoLogo
            decorative
            className="h-12 w-24 text-white transition hover:text-[#f8e7b3]"
          />
          <span className="sr-only">Genuino</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                data-cursor="Ir"
                data-cursor-mode="link"
                aria-current={active ? "page" : undefined}
                className={`group relative rounded-full px-4 py-2 transition duration-300 hover:bg-white/8 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8b76b]/36 ${
                  active ? "text-[#f4d489]" : "text-white/62"
                }`}
              >
                {item.label}
                <span
                  className={`pointer-events-none absolute inset-x-4 bottom-1 h-px origin-left bg-[#d8b76b] transition duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <Link
          href="/calculador"
          data-magnetic
          data-cursor="Diseñar"
          data-cursor-mode="link"
          className="hidden items-center gap-2 rounded-full border border-[#d8b76b]/30 bg-[#d8b76b]/10 px-4 py-2 text-[#f8e7b3] transition duration-300 hover:-translate-y-0.5 hover:border-[#d8b76b]/70 hover:bg-[#d8b76b]/16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8b76b]/36 lg:inline-flex"
        >
          Diseñar lanzamiento
          <ArrowUpRight size={14} />
        </Link>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          data-cursor="Menu"
          className="grid size-10 place-items-center rounded-full border border-white/10 text-white transition hover:border-[#d8b76b]/40 lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open ? (
        <div id="mobile-nav" className="mx-auto mt-2 max-w-7xl rounded-3xl border border-white/10 bg-[#070707]/92 p-2 text-sm text-white/78 shadow-2xl backdrop-blur-xl lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              data-cursor="Ir"
              data-cursor-mode="link"
              aria-current={pathname === item.href ? "page" : undefined}
              className={`block rounded-2xl px-4 py-3 transition hover:bg-white/8 hover:text-white ${
                pathname === item.href ? "text-[#f4d489]" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}
