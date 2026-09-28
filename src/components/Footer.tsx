import Image from "next/image";
import Link from "next/link";
import LocalTime from "@/components/ui/LocalTime";
import { contact, legalLinks, navItems } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line pt-20 md:pt-28">
      <div className="shell grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-12 md:gap-14">
        <div className="col-span-2 md:col-span-5">
          <Link href="/" aria-label="Genuino Family, inicio" className="inline-block">
            <Image
              src="/brand/genuino-family.png"
              alt="Genuino Family"
              width={720}
              height={905}
              className="h-28 w-auto sm:h-36 md:h-44"
            />
          </Link>
          <p className="mt-6 max-w-xs text-bone/60 md:mt-8">Producción musical, audiovisual y gestión de medios.</p>
        </div>

        <nav className="col-span-1 md:col-span-2" aria-label="Pie de página">
          <p className="label mb-5">Sitio</p>
          <ul className="grid gap-2.5">
            {[...navItems, { label: "Contacto", href: "/contacto" }].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="u-link text-bone/75 transition-colors hover:text-bone">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="order-last col-span-2 md:order-none md:col-span-3">
          <p className="label mb-5">Escríbenos</p>
          <ul className="grid gap-2.5">
            <li>
              <a href={`mailto:${contact.email}`} className="u-link text-bone/75 hover:text-bone">
                {contact.email}
              </a>
            </li>
            {[contact.instagram, contact.youtube].map((channel) => (
              <li key={channel.href}>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noreferrer"
                  className="u-link text-bone/75 hover:text-bone"
                >
                  {channel.label} <span className="text-bone/40">{channel.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-1 md:col-span-2">
          <p className="label mb-5">Base</p>
          <p className="text-bone/75">{contact.base}</p>
          <p className="mt-2 flex items-center gap-2 text-sm text-bone/45 md:text-base">
            <span className="on-air !size-1.5 shrink-0" />
            <span>
              <LocalTime /> en Chile
            </span>
          </p>
        </div>
      </div>

      <div className="shell mt-20 flex flex-col gap-4 border-t border-line py-6 text-sm text-bone/40 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Genuino Family. Todos los derechos reservados.</p>
        <ul className="flex flex-wrap gap-6">
          {legalLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="u-link hover:text-bone">
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/portal" className="u-link hover:text-bone">
              Acceso clientes
            </Link>
          </li>
        </ul>
      </div>

      <p
        className="display pointer-events-none select-none whitespace-nowrap pb-[3vw] pt-[5vw] text-center text-[8.6vw] leading-none text-graphite"
        aria-hidden="true"
      >
        Genuino Family
      </p>
    </footer>
  );
}
