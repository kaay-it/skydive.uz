import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Галерея" };

const gradients = [
  "from-brand-500 to-teal-400",
  "from-accent-400 to-pink-500",
  "from-teal-400 to-brand-600",
  "from-pink-500 to-brand-500",
  "from-accent-500 to-brand-700",
  "from-brand-400 to-ink-900",
  "from-teal-500 to-accent-400",
  "from-brand-600 to-ink-950",
  "from-pink-400 to-teal-500",
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Галерея"
        description="Фотографии с соревнований, сборов и прыжков. Раздел наполняется — скоро здесь появятся снимки."
      />
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
            {gradients.map((gradient, i) => (
              <div
                key={i}
                className={`flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br ${gradient}`}
              >
                <span className="text-xs font-medium uppercase tracking-wider text-white/70">Фото скоро</span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
