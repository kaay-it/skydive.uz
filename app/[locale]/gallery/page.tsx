import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { InstagramEmbed } from "@/components/instagram-embed";
import type { Locale } from "@/i18n/routing";
import { getContacts, instagramPosts } from "@/lib/data";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "gallery" });
  return { title: t("heroTitle") };
}

export default async function GalleryPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  setRequestLocale(locale);

  const t = await getTranslations("gallery");
  const contacts = getContacts(locale);

  return (
    <>
      <PageHero title={t("heroTitle")} description={t("heroDesc")} image="/hero-gallery.jpg" />
      <section className="py-16">
        <Container>
          <div className="mb-10 flex flex-col items-center gap-4 rounded-2xl bg-gradient-to-br from-brand-50 to-teal-50 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-sm text-ink-900/70">{t("bannerText")}</p>
            <a
              href={contacts.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              {t("subscribeButton")}
            </a>
          </div>

          {instagramPosts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {instagramPosts.map((url) => (
                <InstagramEmbed key={url} url={url} fallbackLabel={t("openOnInstagram")} />
              ))}
            </div>
          ) : (
            <p className="text-center text-sm text-ink-900/50">{t("emptyState")}</p>
          )}
        </Container>
      </section>
    </>
  );
}
