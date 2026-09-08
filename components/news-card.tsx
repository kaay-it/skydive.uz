import Link from "next/link";
import type { NewsItem } from "@/lib/data";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" });
}

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Link
      href={`/news/${item.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="flex h-36 items-center justify-center bg-gradient-to-br from-brand-500 to-teal-500">
        <span className="text-xs font-semibold uppercase tracking-wider text-white/80">{item.tag}</span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-xs font-medium text-ink-900/50">{formatDate(item.date)}</span>
        <h3 className="text-base font-semibold leading-snug text-ink-950 group-hover:text-brand-600">
          {item.title}
        </h3>
        <p className="line-clamp-3 text-sm text-ink-900/70">{item.excerpt}</p>
        <span className="mt-auto pt-2 text-sm font-medium text-brand-600">Читать далее →</span>
      </div>
    </Link>
  );
}
