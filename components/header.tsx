"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { Container } from "./container";
import { LanguageSwitcher } from "./language-switcher";

const navItems = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/news", key: "news" },
  { href: "/gallery", key: "gallery" },
  { href: "/contacts", key: "contacts" },
] as const;

export function Header() {
  const pathname = usePathname();
  const t = useTranslations("nav");
  const tHeader = useTranslations("header");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-900/10 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 text-ink-950" onClick={() => setOpen(false)}>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-ink-900/10 bg-white p-1 shadow-sm">
            <Image src="/logo.png" alt="Skydive.uz" width={44} height={44} className="h-full w-full object-contain" priority />
          </span>
          <span className="hidden text-sm font-semibold tracking-wide sm:inline sm:text-base">
            Skydive.uz
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  active ? "text-brand-600" : "text-ink-900/70 hover:text-ink-950"
                }`}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md text-ink-950 md:hidden"
          aria-label={tHeader("openMenu")}
          aria-expanded={open}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <nav className="border-t border-ink-900/10 bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    active ? "bg-brand-50 text-brand-600" : "text-ink-900/70 hover:bg-ink-900/5 hover:text-ink-950"
                  }`}
                >
                  {t(item.key)}
                </Link>
              );
            })}
            <div className="px-3 pt-2">
              <LanguageSwitcher />
            </div>
          </Container>
        </nav>
      )}
    </header>
  );
}
