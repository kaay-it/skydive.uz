"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LanguageSwitcher({ variant = "light" }: { variant?: "light" | "dark" }) {
  const t = useTranslations("languages");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const base =
    variant === "light"
      ? "border-ink-900/15 text-ink-900/70 hover:border-brand-500 hover:text-brand-600"
      : "border-white/20 text-white/70 hover:border-white hover:text-white";
  const activeClass = variant === "light" ? "border-brand-500 text-brand-600" : "border-white text-white";

  return (
    <div className="flex items-center gap-1.5">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => router.replace(pathname, { locale: loc })}
          className={`rounded-full border px-2.5 py-1 text-xs font-semibold uppercase transition-colors ${
            loc === locale ? activeClass : base
          }`}
          aria-current={loc === locale}
        >
          {loc}
        </button>
      ))}
      <span className="sr-only">{t(locale as "ru" | "en" | "uz")}</span>
    </div>
  );
}
