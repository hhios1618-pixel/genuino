"use client";

import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";
import GenuinoLogo from "@/components/GenuinoLogo";
import { footerLinks, legalLinks, navItems } from "@/data/site";

export default function Footer() {
  const [email, setEmail] = useState("");
  const year = new Date().getFullYear();

  function handleLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent("Quiero recibir novedades de Genuino Music");
    const body = encodeURIComponent(`Correo: ${email}\n\nQuiero recibir novedades del estudio.`);
    window.location.href = `mailto:contacto@genuino.studio?subject=${subject}&body=${body}`;
  }

  return (
    <footer className="border-t hairline bg-[#050505]">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.1fr_0.9fr] md:py-16">
        <div>
          <Link href="/" aria-label="Ir al inicio" className="inline-flex">
            <GenuinoLogo decorative className="h-28 w-48 text-white" />
            <span className="sr-only">Genuino Music</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/56">
            Genuino Family: sonido, medios y desarrollo artistico desde Chile.
            Productora musical, videoclips, booking radial y gestion de medios
            para proyectos urbanos con identidad propia.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/62 transition hover:border-[#d8b76b]/36 hover:text-[#f4d489]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#d8b76b]">
              Mapa
            </p>
            <nav className="mt-5 grid gap-3 text-sm text-white/58" aria-label="Navegación secundaria">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#d8b76b]">
              Novedades
            </p>
            <p className="mt-5 text-sm leading-6 text-white/52">
              Recibe lanzamientos, disponibilidad de estudio y oportunidades de producción.
            </p>
            <form onSubmit={handleLead} className="mt-4 flex rounded-full border border-white/10 bg-white/[0.035] p-1">
              <label className="sr-only" htmlFor="footer-email">
                Email
              </label>
              <input
                id="footer-email"
                required
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="email@dominio.com"
                className="min-w-0 flex-1 rounded-full bg-transparent px-4 text-sm text-white outline-none placeholder:text-white/28"
              />
              <button
                type="submit"
                aria-label="Enviar correo"
                className="grid size-10 shrink-0 place-items-center rounded-full bg-[#d8b76b] text-black transition hover:scale-105"
              >
                <ArrowRight size={16} />
              </button>
            </form>
            <a
              href="mailto:contacto@genuino.studio"
              className="mt-4 inline-flex items-center gap-2 text-sm text-white/58 transition hover:text-[#f4d489]"
            >
              <Mail size={15} /> contacto@genuino.studio
            </a>
            <Link
              href="/portal"
              className="mt-3 block text-sm text-white/42 transition hover:text-[#f4d489]"
            >
              Portal privado: clientes, administración y legal
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8 pb-24 pt-5 md:pb-6">
        <div className="section-shell flex flex-col gap-3 text-xs text-white/38 sm:flex-row sm:items-center sm:justify-start sm:gap-8">
          <p>© {year} Genuino Music / Genuino Family. Valparaíso, Chile.</p>
          <div className="flex gap-4">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-white/70">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
