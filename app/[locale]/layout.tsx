import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import "../globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { routing, type Locale } from "@/i18n/routing";
import { getFederation } from "@/lib/data";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale as Locale;
  if (!routing.locales.includes(locale)) return {};
  const federation = getFederation(locale);

  return {
    title: {
      default: federation.name,
      template: `%s — ${federation.shortName}`,
    },
    description: federation.description,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale as Locale;
  if (!routing.locales.includes(locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.variable} flex min-h-screen flex-col font-sans antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
