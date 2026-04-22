import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CookieConsent from '../../components/CookieConsent';
import '../globals.css';

const BASE = 'https://www.neofort.ro';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isRo = locale === 'ro';
  return {
    metadataBase: new URL(BASE),
    title: {
      default: 'NEOFORT | București | Ansambluri Rezidențiale',
      template: '%s | NEOFORT',
    },
    description: isRo
      ? 'NEOFORT — grup de companii cu activități în construcții, dezvoltări imobiliare, ansambluri rezidențiale București.'
      : 'NEOFORT — group of companies active in construction, real estate development, residential complexes in Bucharest.',
    alternates: {
      canonical: `${BASE}/${locale}`,
      languages: {
        ro: `${BASE}/ro`,
        en: `${BASE}/en`,
        'x-default': `${BASE}/ro`,
      },
    },
    robots: { index: true, follow: true },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) notFound();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
        <NextIntlClientProvider messages={messages}>
          <Header locale={locale} />
          <main>{children}</main>
          <Footer locale={locale} />
          <CookieConsent locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
