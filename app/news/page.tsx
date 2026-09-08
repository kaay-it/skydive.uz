import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { NewsCard } from "@/components/news-card";
import { news } from "@/lib/data";

export const metadata: Metadata = { title: "Новости" };

export default function NewsPage() {
  return (
    <>
      <PageHero title="Новости" description="События, результаты соревнований и объявления федерации." />
      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((item) => (
              <NewsCard key={item.slug} item={item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
