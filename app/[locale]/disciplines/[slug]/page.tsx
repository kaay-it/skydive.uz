import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/container";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getDiscipline, getDisciplines } from "@/lib/data";

export function generateStaticParams() {
  return getDisciplines("ru").map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const discipline = getDiscipline(params.locale as Locale, params.slug);
  return { title: discipline ? discipline.title : "" };
}

export default async function DisciplinePage({ params }: { params: { locale: string; slug: string } }) {
  const locale = params.locale as Locale;
  setRequestLocale(locale);

  const t = await getTranslations("disciplinePage");
  const discipline = getDiscipline(locale, params.slug);
  if (!discipline) notFound();

  return (
    <article>
      <div className="relative h-64 overflow-hidden sm:h-80">
        <Image src={discipline.image} alt={discipline.title} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/30 to-ink-950/10" />
        <Container className="relative flex h-full flex-col justify-end pb-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">{discipline.title}</h1>
        </Container>
      </div>

      <Container className="max-w-3xl py-16">
        <Link href="/about" className="text-sm font-medium text-brand-600 hover:text-brand-700">
          {t("back")}
        </Link>

        <div className="mt-8 space-y-4">
          {discipline.details.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-ink-900/80">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </article>
  );
}
