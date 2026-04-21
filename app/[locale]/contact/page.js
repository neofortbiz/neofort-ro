import { getTranslations } from 'next-intl/server';
import ContactForm from '../../../components/ContactForm';

const BASE = 'https://www.neofort.ro';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isRo = locale === 'ro';
  return {
    title: isRo ? 'Contact | NEOFORT' : 'Contact | NEOFORT',
    description: isRo
      ? 'Contactează NEOFORT — Str. Theodor Aman Pictor 11, sector 1, București. Tel: +40215280660.'
      : 'Contact NEOFORT — 11 Theodor Aman Pictor St., sector 1, Bucharest. Tel: +40215280660.',
    alternates: {
      canonical: `${BASE}/${locale}/contact`,
      languages: {
        ro: `${BASE}/ro/contact`,
        en: `${BASE}/en/contact`,
        'x-default': `${BASE}/ro/contact`,
      },
    },
  };
}

export default async function ContactPage({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#1a1a1a', padding: '80px 20px 60px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'brandon-grot-w01-light, sans-serif', fontSize: 48, fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {t('title')}
        </h1>
        <p style={{ fontFamily: 'avenir-lt-w01_35-light1475496, sans-serif', fontSize: 16, color: '#e3d0a8', marginTop: 12 }}>
          {t('adresa')} · {t('tel')}
        </p>
      </section>

      {/* Form + Map + Program */}
      <section style={{ background: '#e8f1f2', padding: '60px 20px' }}>
        <div style={{ maxWidth: 940, margin: '0 auto' }}>
          <ContactForm locale={locale} />
        </div>
      </section>

      {/* Program */}
      <section style={{ background: '#fff', padding: '48px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: 940, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'brandon-grot-w01-light, sans-serif', fontSize: 18, textTransform: 'uppercase', color: '#1a1a1a', letterSpacing: '0.1em', marginBottom: 16 }}>
            {t('program_title')}
          </h2>
          <p style={{ fontFamily: 'avenir-lt-w01_35-light1475496, sans-serif', fontSize: 14, color: '#4a4a4a', lineHeight: 1.8 }}>
            {t('program_lv')}<br />
            {t('program_sd')}
          </p>
        </div>
      </section>
    </>
  );
}
