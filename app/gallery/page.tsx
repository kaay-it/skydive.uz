import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { InstagramEmbed } from "@/components/instagram-embed";
import { contacts, instagramPosts } from "@/lib/data";

export const metadata: Metadata = { title: "Галерея" };

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Галерея"
        description="Фото и видео с соревнований, сборов и прыжков — прямо из нашего Instagram."
      />
      <section className="py-16">
        <Container>
          <div className="mb-10 flex flex-col items-center gap-4 rounded-2xl bg-gradient-to-br from-brand-50 to-teal-50 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-sm text-ink-900/70">
              Полная лента — фото и видео с каждого сбора и соревнования — в нашем Instagram.
            </p>
            <a
              href={contacts.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Подписаться в Instagram
            </a>
          </div>

          {instagramPosts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {instagramPosts.map((url) => (
                <InstagramEmbed key={url} url={url} />
              ))}
            </div>
          ) : (
            <p className="text-center text-sm text-ink-900/50">
              Публикации скоро появятся здесь — а пока загляните в наш Instagram.
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
