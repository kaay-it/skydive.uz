import { Container } from "./container";

export function PageHero({ title, description }: { title: string; description?: string }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-500 to-teal-500">
      <div className="bg-hero-grid absolute inset-0 opacity-30" style={{ backgroundSize: "22px 22px" }} />
      <Container className="relative py-14 sm:py-16">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">{title}</h1>
        {description && <p className="mt-3 max-w-2xl text-base text-white/85">{description}</p>}
      </Container>
    </div>
  );
}
