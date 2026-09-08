import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import type { Locale } from "@/i18n/routing";
import { getContacts } from "@/lib/data";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "contacts" });
  return { title: t("heroTitle") };
}

export default async function ContactsPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  setRequestLocale(locale);

  const t = await getTranslations("contacts");
  const contacts = getContacts(locale);

  const socialLabels: Record<string, string> = {
    instagram: "Instagram",
    telegram: "Telegram",
  };

  return (
    <>
      <PageHero title={t("heroTitle")} description={t("heroDesc")} image="/hero-contacts.jpg" />

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-900/50">
                {t("addressLabel")}
              </h2>
              <p className="mt-1 text-lg text-ink-950">{contacts.address}</p>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-900/50">
                {t("phoneLabel")}
              </h2>
              <a href={`tel:${contacts.phone.replace(/\s/g, "")}`} className="mt-1 block text-lg text-brand-600">
                {contacts.phone}
              </a>
              <a
                href={`tel:${contacts.phoneSecondary.replace(/\s/g, "")}`}
                className="mt-1 block text-lg text-brand-600"
              >
                {contacts.phoneSecondary}
              </a>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-900/50">
                {t("emailLabel")}
              </h2>
              <a href={`mailto:${contacts.email}`} className="mt-1 block text-lg text-brand-600">
                {contacts.email}
              </a>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-900/50">
                {t("hoursLabel")}
              </h2>
              <p className="mt-1 text-lg text-ink-950">{contacts.workingHours}</p>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-900/50">
                {t("socialLabel")}
              </h2>
              <div className="mt-2 flex gap-3">
                {Object.entries(contacts.social).map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-ink-900/15 px-4 py-2 text-sm font-medium text-ink-950 transition-colors hover:border-brand-500 hover:text-brand-600"
                  >
                    {socialLabels[key] ?? key}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-ink-900/10">
            <iframe
              title={t("mapTitle")}
              className="h-full min-h-[320px] w-full"
              loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=69.24%2C41.29%2C69.30%2C41.33&layer=mapnik&marker=41.31%2C69.27"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
