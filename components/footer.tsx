import Link from "next/link";
import { Container } from "./container";
import { contacts, federation, navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950 text-white/70">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-accent-500 text-sm font-bold text-ink-950">
              SU
            </span>
            <span className="text-sm font-semibold">{federation.shortName}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">{federation.tagline}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Навигация</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Контакты</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{contacts.address}</li>
            <li>
              <a href={`tel:${contacts.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-white">
                {contacts.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contacts.email}`} className="transition-colors hover:text-white">
                {contacts.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {federation.name}
          </p>
          <p>Официальный сайт федерации</p>
        </Container>
      </div>
    </footer>
  );
}
