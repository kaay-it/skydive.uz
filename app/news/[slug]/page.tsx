import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { news } from "@/lib/data";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" });
}

export function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = news.find((n) => n.slug === params.slug);
  return { title: item ? item.title : "Новость" };
}

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const item = news.find((n) => n.slug === params.slug);
  if (!item) notFound();

  return (
    <article className="py-16">
      <Container className="max-w-3xl">
        <Link href="/news" className="text-sm font-medium text-brand-600 hover:text-brand-700">
          ← Все новости
        </Link>

        <span className="mt-6 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-600">
          {item.tag}
        </span>
        <h1 className="mt-4 text-3xl font-bold leading-tight text-ink-950 sm:text-4xl">{item.title}</h1>
        <p className="mt-3 text-sm text-ink-900/50">{formatDate(item.date)}</p>

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
