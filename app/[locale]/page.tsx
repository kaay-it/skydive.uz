import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/container";
import { DisciplineCard } from "@/components/discipline-card";
import { NewsCard } from "@/components/news-card";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getBoardMembers, getDisciplines, getFederation, getNews, getStats } from "@/lib/data";

const statColors = ["text-brand-600", "text-teal-600", "text-accent-600", "text-pink-600"];

export default async function HomePage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  setRequestLocale(locale);

  const t = await getTranslations("home");
  const tc = await getTranslations("common");
  const federation = getFederation(locale);
  const stats = getStats(locale);
  const disciplines = getDisciplines(locale);
  const news = getNews(locale);
  const president = getBoardMembers(locale)[0];
  const latestNews = news.slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-brand-700">
        <Image
          src="/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/95 via-ink-950/70 to-ink-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />

        <Container className="relative flex flex-col items-start gap-6 py-24 sm:py-32">
          <span className="rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-wider text-white">
            {t("badge")}
          </span>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl">
            {federation.tagline}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            {federation.description}
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/about"
              className="rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-600/30 transition-colors hover:bg-accent-600"
            >
              {t("ctaAbout")}
            </Link>
            <Link
              href="/contacts"
              className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {t("ctaFirstJump")}
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-900/10 bg-white">
        <Container className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center sm:text-left">
              <div className={`text-3xl font-bold sm:text-4xl ${statColors[i % statColors.length]}`}>
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-ink-900/60">{stat.label}</div>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-ink-950 sm:text-3xl">{t("disciplinesTitle")}</h2>
              <p className="mt-2 max-w-xl text-sm text-ink-900/60">{t("disciplinesSubtitle")}</p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {disciplines.map((d) => (
              <DisciplineCard key={d.slug} discipline={d} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-gradient-to-br from-teal-500 to-brand-600 p-10 text-center shadow-xl shadow-brand-600/10 sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h2 className="text-xl font-bold text-white sm:text-2xl">{t("presidentTitle")}</h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/90">
                {t("presidentQuote", { bio: president.bio, name: president.name, role: president.role })}
              </p>
            </div>
            <Link
              href="/about"
              className="shrink-0 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition-colors hover:bg-white/90"
            >
              {t("presidentCta")}
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-ink-950 sm:text-3xl">{t("newsTitle")}</h2>
              <p className="mt-2 text-sm text-ink-900/60">{t("newsSubtitle")}</p>
            </div>
            <Link href="/news" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
              {tc("allNews")}
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestNews.map((item) => (
              <NewsCard key={item.slug} item={item} locale={locale} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
