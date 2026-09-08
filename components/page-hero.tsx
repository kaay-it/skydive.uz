import { Container } from "./container";

export function PageHero({ title, description }: { title: string; description?: string }) {
  return (
    <div className="border-b border-ink-900/10 bg-ink-950">
      <Container className="py-14 sm:py-16">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">{title}</h1>
        {description && <p className="mt-3 max-w-2xl text-base text-white/70">{description}</p>}
      </Container>
    </div>
  );
}
