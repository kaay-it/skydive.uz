import Link from "next/link";
import { Container } from "@/components/container";
import { NewsCard } from "@/components/news-card";
import { boardMembers, disciplines, federation, news, stats } from "@/lib/data";

const statColors = ["text-brand-600", "text-teal-600", "text-accent-600", "text-pink-600"];

export default function HomePage() {
  const latestNews = news.slice(0, 3);
  const president = boardMembers[0];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-500 to-teal-500">
        <div className="bg-hero-grid absolute inset-0 opacity-30" style={{ backgroundSize: "22px 22px" }} />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-pink-400/25 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 h-64 w-64 rounded-full bg-accent-400/20 blur-3xl" />

        <Container className="relative flex flex-col items-start gap-6 py-24 sm:py-32">
          <span className="rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-wider text-white">
            Официальная федерация парашютного спорта
          </span>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl">
            {federation.tagline}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            {federation.description}
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/about"
              className="rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-600/30 transition-colors hover:bg-accent-600"
            >
              О федерации
            </Link>
            <Link
              href="/contacts"
              className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Совершить первый прыжок
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-900/10 bg-white">
        <Container className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center sm:text-left">
              <div className={`text-3xl font-bold sm:text-4xl ${statColors[i % statColors.length]}`}>
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-ink-900/60">{stat.label}</div>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-ink-950 sm:text-3xl">Дисциплины парашютного спорта</h2>
              <p className="mt-2 max-w-xl text-sm text-ink-900/60">
                Федерация курирует развитие всех официальных дисциплин парашютного спорта в стране.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {disciplines.map((d) => (
              <div key={d.title} className="rounded-2xl border border-ink-900/10 p-6">
                <h3 className="text-lg font-semibold text-ink-950">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-900/70">{d.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-gradient-to-br from-teal-500 to-brand-600 p-10 text-center shadow-xl shadow-brand-600/10 sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h2 className="text-xl font-bold text-white sm:text-2xl">Слово президента федерации</h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/90">
                «{president.bio} Мы открыты для новых спортсменов, клубов и партнёров — приходите покорять небо
                вместе с нами.» — {president.name}, {president.role}
              </p>
            </div>
            <Link
              href="/about"
              className="shrink-0 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition-colors hover:bg-white/90"
            >
              Руководство федерации
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-ink-950 sm:text-3xl">Новости</h2>
              <p className="mt-2 text-sm text-ink-900/60">Последние события из жизни федерации</p>
            </div>
            <Link href="/news" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
              Все новости →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestNews.map((item) => (
              <NewsCard key={item.slug} item={item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
