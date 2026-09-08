import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import type { Locale } from "@/i18n/routing";
import { getBoardMembers, getDisciplines, getFederation, getStats } from "@/lib/data";

const statColors = ["text-brand-600", "text-teal-600", "text-accent-600", "text-pink-600"];
const statTints = ["bg-brand-50", "bg-teal-50", "bg-accent-50", "bg-pink-50"];

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "about" });
  return { title: t("heroTitle") };
}

export default async function AboutPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  setRequestLocale(locale);

  const t = await getTranslations("about");
  const federation = getFederation(locale);
  const stats = getStats(locale);
  const disciplines = getDisciplines(locale);
  const boardMembers = getBoardMembers(locale);

  return (
    <>
      <PageHero title={t("heroTitle")} description={t("heroDesc")} />

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-ink-950">{t("missionTitle")}</h2>
            <p className="mt-3 leading-relaxed text-ink-900/70">{federation.description}</p>
            <p className="mt-4 leading-relaxed text-ink-900/70">
              {t("foundedText", { year: federation.founded })}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={stat.label} className={`rounded-2xl p-5 ${statTints[i % statTints.length]}`}>
                <div className={`text-2xl font-bold ${statColors[i % statColors.length]}`}>{stat.value}</div>
                <div className="mt-1 text-xs text-ink-900/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-ink-900/10 bg-ink-50/50 py-16">
        <Container>
          <h2 className="text-xl font-bold text-ink-950">{t("disciplinesTitle")}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {disciplines.map((d) => (
              <div key={d.title} className="rounded-2xl border border-ink-900/10 bg-white p-6">
                <h3 className="text-lg font-semibold text-ink-950">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-900/70">{d.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-ink-900/10 py-16">
        <Container>
          <h2 className="text-xl font-bold text-ink-950">{t("leadershipTitle")}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {boardMembers.map((member) => (
              <div key={member.name} className="rounded-2xl border border-ink-900/10 p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 via-teal-400 to-accent-400 text-lg font-bold text-white">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink-950">{member.name}</h3>
                <p className="text-sm font-medium text-brand-600">{member.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-900/70">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
