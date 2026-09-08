import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Discipline } from "@/lib/data";

export function DisciplineCard({ discipline }: { discipline: Discipline }) {
  return (
    <Link
      href={`/disciplines/${discipline.slug}`}
      className="group overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={discipline.image}
          alt={discipline.title}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent" />
        <h3 className="absolute inset-x-0 bottom-0 p-4 text-lg font-semibold text-white">{discipline.title}</h3>
      </div>
      <p className="p-4 text-sm leading-relaxed text-ink-900/70">{discipline.description}</p>
    </Link>
  );
}
