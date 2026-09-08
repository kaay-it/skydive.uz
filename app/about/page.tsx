import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { boardMembers, disciplines, federation, stats } from "@/lib/data";

export const metadata: Metadata = { title: "О федерации" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="О федерации"
        description="История, миссия и структура федерации парашютного спорта Узбекистана."
      />

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-ink-950">Миссия</h2>
            <p className="mt-3 leading-relaxed text-ink-900/70">{federation.description}</p>
            <p className="mt-4 leading-relaxed text-ink-900/70">
              Основанная в {federation.founded} году, федерация объединяет спортивные аэроклубы страны,
              организует подготовку спортсменов и судей, проводит республиканские и региональные
              соревнования, а также представляет Узбекистан на международной арене парашютного спорта.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-brand-50 p-5">
                <div className="text-2xl font-bold text-brand-600">{stat.value}</div>
                <div className="mt-1 text-xs text-ink-900/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-ink-900/10 bg-ink-50/50 py-16">
        <Container>
          <h2 className="text-xl font-bold text-ink-950">Дисциплины</h2>
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
          <h2 className="text-xl font-bold text-ink-950">Руководство федерации</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {boardMembers.map((member) => (
              <div key={member.name} className="rounded-2xl border border-ink-900/10 p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-accent-500 text-lg font-bold text-white">
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
