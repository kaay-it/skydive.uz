import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/container";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getNews, getNewsItem } from "@/lib/data";

const dateLocales: Record<Locale, string> = { ru: "ru-RU", en: "en-US", uz: "uz-UZ" };

function formatDate(iso: string, locale: Locale) {
  return new Date(iso).toLocaleDateString(dateLocales[locale], { day: "numeric", month: "long", year: "numeric" });
}

export function generateStaticParams() {
  return getNews("ru").map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const item = getNewsItem(params.locale as Locale, params.slug);
  return { title: item ? item.title : "" };
}

export default async function NewsDetailPage({ params }: { params: { locale: string; slug: string } }) {
  const locale = params.locale as Locale;
  setRequestLocale(locale);

  const t = await getTranslations("newsPage");
  const item = getNewsItem(locale, params.slug);
  if (!item) notFound();

  return (
    <article className="py-16">
      <Container className="max-w-3xl">
        <Link href="/news" className="text-sm font-medium text-brand-600 hover:text-brand-700">
          {t("backToNews")}
        </Link>

        <span className="mt-6 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-600">
          {item.tag}
        </span>
        <h1 className="mt-4 text-3xl font-bold leading-tight text-ink-950 sm:text-4xl">{item.title}</h1>
        <p className="mt-3 text-sm text-ink-900/50">{formatDate(item.date, locale)}</p>

        <div className="mt-8 space-y-4">
          {item.content.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-ink-900/80">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </article>
  );
}
