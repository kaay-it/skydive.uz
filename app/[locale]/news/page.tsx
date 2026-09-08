import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { NewsCard } from "@/components/news-card";
import type { Locale } from "@/i18n/routing";
import { getNews } from "@/lib/data";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "newsPage" });
  return { title: t("heroTitle") };
}

export default async function NewsPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  setRequestLocale(locale);

  const t = await getTranslations("newsPage");
  const news = getNews(locale);

  return (
    <>
      <PageHero title={t("heroTitle")} description={t("heroDesc")} image="/hero-news.jpg" />
      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((item) => (
              <NewsCard key={item.slug} item={item} locale={locale} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
