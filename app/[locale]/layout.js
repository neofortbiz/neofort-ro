import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '../../i18n/routing';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
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
      ? 'NEOFORT — grup de companii cu activități în construcții, dezvoltări imobiliare, ansambluri rezidențiale București, consultanță financiară.'
      : 'NEOFORT — group of companies active in construction, real estate development, residential complexes in Bucharest, financial consultancy.',
    keywords: isRo
      ? 'ansambluri rezidențiale, imobiliare București, dezvoltator imobiliar, tâmplărie PVC, tâmplărie aluminiu'
      : 'residential complexes, real estate Bucharest, property developer, PVC carpentry, aluminium carpentry',
    alternates: {
      canonical: `${BASE}/${locale}`,
      languages: {
        'ro': `${BASE}/ro`,
        'en': `${BASE}/en`,
        'x-default': `${BASE}/ro`,
      },
    },
    openGraph: {
      siteName: 'NEOFORT',
      locale: isRo ? 'ro_RO' : 'en_US',
      type: 'website',
      images: [{ url: `${BASE}/images/og-neofort.avif`, width: 1200, height: 630 }],
    },
    robots: { index: true, follow: true },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) notFound();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header locale={locale} />
          <main>{children}</main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
