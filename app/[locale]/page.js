import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

const BASE = 'https://www.neofort.ro';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });
  const isRo = locale === 'ro';
  return {
    title: 'NEOFORT | București | Ansambluri Rezidențiale NEOFORT',
    description: isRo
      ? 'NEOFORT — brand ce înglobează companii cu activități în construcții, dezvoltări imobiliare, ansambluri rezidențiale, consultanță financiară, crowdfunding.'
      : 'NEOFORT — brand encompassing companies active in construction, real estate development, residential complexes, financial consultancy, crowdfunding.',
    alternates: {
      canonical: `${BASE}/${locale}`,
      languages: { ro: `${BASE}/ro`, en: `${BASE}/en`, 'x-default': `${BASE}/ro` },
    },
  };
}

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'NEOFORT',
            url: 'https://www.neofort.ro',
            telephone: '+40215280660',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Strada Theodor Aman Pictor 11',
              addressLocality: 'București',
              postalCode: '010776',
              addressCountry: 'RO',
            },
          }),
        }}
      />

      {/* HERO */}
      <section style={{
        background: '#1a1a1a',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(/images/hero-neofort.avif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: 700,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '120px 20px 40px',
      }}>
        <h1 style={{ fontFamily: 'brandon-grot-w01-light, sans-serif', fontSize: 72, fontWeight: 700, color: '#fff', lineHeight: 1.25, marginBottom: 16 }}>
          {t('hero_title')}
        </h1>
        <p style={{ fontFamily: 'brandon-grot-w01-light, sans-serif', fontSize: 22, color: '#fff', marginBottom: 32 }}>
          {t('hero_subtitle')}
        </p>
        <p style={{ fontFamily: 'avenir-lt-w01_35-light1475496, sans-serif', fontSize: 18, color: '#fff', maxWidth: 800, lineHeight: 1.7 }}>
          {t('hero_text')}
        </p>
      </section>

      {/* SECTIUNILE — Despre, Vanzare, Dezvoltare, Tamplarie */}
      {[
        {
          title: t('despre_title'),
          text: t('despre_text'),
          btn: t('despre_btn'),
          href: 'https://www.ansamblu-rezidential-nou.ro/despre-neofort',
          imgAlt: 'NEOFORT proiecte rezidențiale',
          reverse: false,
        },
        {
          title: t('vanzare_title'),
          text: t('vanzare_text'),
          btn: t('vanzare_btn'),
          href: 'https://www.ansamblu-rezidential-nou.ro/vanzari',
          imgAlt: 'Ansambluri rezidențiale NEOFORT vânzare',
          reverse: true,
        },
        {
          title: t('dezvoltare_title'),
          text: t('dezvoltare_text'),
          btn: t('dezvoltare_btn'),
          href: 'https://www.ansamblu-rezidential-nou.ro/contact',
          imgAlt: 'NEOFORT NEW HOMES dezvoltare imobiliară',
          reverse: false,
        },
        {
          title: t('tamplarie_title'),
          text: t('tamplarie_text'),
          btn: t('tamplarie_btn'),
          href: 'https://www.neofort-biz.ro/ro',
          imgAlt: 'Neofort BIZ tâmplărie PVC aluminiu',
          reverse: true,
        },
      ].map((item, i) => (
        <section key={i} style={{ background: i % 2 === 0 ? '#f7f7f5' : '#fff', padding: '58px 20px' }}>
          <div style={{ maxWidth: 940, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* Imagine placeholder — înlocuiește cu img real */}
            <div style={{ width: '100%', height: 400, background: '#e3d0a8', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'avenir-lt-w01_35-light1475496, sans-serif', color: '#4a4a4a', fontSize: 14 }}>{item.imgAlt}</span>
            </div>
            <h2 style={{ fontFamily: 'brandon-grot-w01-light, sans-serif', fontSize: 36, color: '#1a1a1a', textTransform: 'uppercase' }}>
              {item.title}
            </h2>
            <p style={{ fontFamily: 'avenir-lt-w01_35-light1475496, sans-serif', fontSize: 18, color: '#4a4a4a', lineHeight: 1.7 }}>
              {item.text}
            </p>
            <div>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '14px 32px',
                  border: '1px solid #1a1a1a',
                  fontFamily: 'avenir-lt-w01_35-light1475496, sans-serif',
                  fontSize: 16,
                  color: '#1a1a1a',
                  borderRadius: 100,
                  transition: 'all 0.3s',
                }}
              >
                {item.btn}
              </a>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
