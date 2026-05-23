import GenuinoLogo from "@/components/GenuinoLogo";
import { footerLinks } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t hairline bg-[#050505] py-10">
      <div className="section-shell flex flex-col gap-6 text-sm text-white/48 md:flex-row md:items-center md:justify-between">
        <div>
          <GenuinoLogo className="h-24 w-44 text-white" />
          <p className="mt-2">Productora musical boutique. Santiago / remoto.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-[#d8b76b]">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
