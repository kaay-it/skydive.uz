import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getContacts, getFederation } from "@/lib/data";
import { Container } from "./container";

const navItems = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/news", key: "news" },
  { href: "/gallery", key: "gallery" },
  { href: "/contacts", key: "contacts" },
] as const;

export async function Footer() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("nav");
  const tFooter = await getTranslations("footer");
  const federation = getFederation(locale);
  const contacts = getContacts(locale);

  return (
    <footer className="border-t border-white/10 bg-gradient-to-br from-brand-700 to-brand-600 text-white/70">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5 text-white">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white p-1">
              <Image src="/logo.png" alt="Skydive.uz" width={40} height={40} className="h-full w-full object-contain" />
            </span>
            <span className="text-sm font-semibold">{federation.shortName}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">{federation.tagline}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">{tFooter("navTitle")}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-white">
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">{tFooter("contactsTitle")}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{contacts.address}</li>
            <li>
              <a href={`tel:${contacts.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-white">
                {contacts.phone}
              </a>
            </li>
            <li>
              <a
                href={`tel:${contacts.phoneSecondary.replace(/\s/g, "")}`}
                className="transition-colors hover:text-white"
              >
                {contacts.phoneSecondary}
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
          <p>{tFooter("officialSite")}</p>
        </Container>
      </div>
    </footer>
  );
}
