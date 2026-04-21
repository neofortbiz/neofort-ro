import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

const BASE = 'https://www.neofort.ro';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isRo = locale === 'ro';
  return {
    title: 'NEOFORT | Bucuresti | Ansambluri Rezidentiale NEOFORT',
    description: isRo
      ? 'NEOFORT — brand ce inglobeaza companii cu activitati in constructii, dezvoltari imobiliare, ansambluri rezidentiale, consultanta financiara, crowdfunding. Peste 85 ansambluri rezidentiale reprezentate.'
      : 'NEOFORT — brand encompassing companies in construction, real estate development, residential complexes, financial consultancy, crowdfunding. Over 85 residential complexes represented.',
    alternates: {
      canonical: `${BASE}/${locale}`,
      languages: { ro: `${BASE}/ro`, en: `${BASE}/en`, 'x-default': `${BASE}/ro` },
    },
  };
}

export default async function HomePage({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });
  const isRo = locale === 'ro';

  const sectiuni = [
    {
      title: t('despre_title'),
      text: t('despre_text'),
      btn: t('despre_btn'),
      href: 'https://www.ansamblu-rezidential-nou.ro/despre-neofort',
      img: '/images/despre-noi.avif',
      imgAlt: isRo ? 'NEOFORT proiecte rezidentiale' : 'NEOFORT residential projects',
    },
    {
      title: t('vanzare_title'),
      text: t('vanzare_text'),
      btn: t('vanzare_btn'),
      href: 'https://www.ansamblu-rezidential-nou.ro/vanzari',
      img: '/images/vanzare.avif',
      imgAlt: isRo ? 'Ansambluri rezidentiale NEOFORT vanzare' : 'NEOFORT residential complexes for sale',
    },
    {
      title: t('dezvoltare_title'),
      text: t('dezvoltare_text'),
      btn: t('dezvoltare_btn'),
      href: 'https://www.ansamblu-rezidential-nou.ro/contact',
      img: '/images/finalizate.avif',
      imgAlt: isRo ? 'NEOFORT NEW HOMES dezvoltare imobiliara' : 'NEOFORT NEW HOMES real estate development',
    },
    {
      title: t('tamplarie_title'),
      text: t('tamplarie_text'),
      btn: t('tamplarie_btn'),
      href: 'https://www.neofort-biz.ro/ro',
      img: '/images/tamplarie.avif',
      imgAlt: isRo ? 'Neofort BIZ tamplarie PVC aluminiu' : 'Neofort BIZ PVC aluminium carpentry',
    },
  ];

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
              addressLocality: 'Bucuresti',
              postalCode: '010776',
              addressCountry: 'RO',
            },
          }),
        }}
      />

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image
          src="/images/hero.avif"
          alt="NEOFORT ansambluri rezidentiale Bucuresti"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,0.52)',
        }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '60px 20px', maxWidth: 860 }}>
          <h1 style={{
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            fontSize: 72,
            fontWeight: 300,
            color: '#fff',
            letterSpacing: '0.12em',
            lineHeight: 1.2,
            marginBottom: 16,
          }}>
            NEOFORT
          </h1>
          <p style={{
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            fontSize: 20,
            fontWeight: 300,
            color: '#fff',
            letterSpacing: '0.05em',
            marginBottom: 28,
          }}>
            {t('hero_subtitle')}
          </p>
          <p style={{
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            fontSize: 16,
            fontWeight: 300,
            color: 'rgba(255,255,255,0.9)',
            lineHeight: 1.8,
            maxWidth: 760,
            margin: '0 auto',
          }}>
            {t('hero_text')}
          </p>
        </div>
      </section>

      {/* SECTIUNI */}
      {sectiuni.map((item, i) => (
        <section key={i} style={{
          background: i % 2 === 0 ? '#f7f7f5' : '#fff',
          padding: '0 0 60px',
        }}>
          <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 20px' }}>
            {/* Imagine */}
            <div style={{ position: 'relative', width: '100%', height: 400, marginBottom: 32 }}>
              <Image
                src={item.img}
                alt={item.imgAlt}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h2 style={{
              fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
              fontSize: 32,
              fontWeight: 300,
              color: '#1a1a1a',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}>
              {item.title}
            </h2>
            <p style={{
              fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
              fontSize: 17,
              fontWeight: 300,
              color: '#4a4a4a',
              lineHeight: 1.75,
              marginBottom: 24,
              maxWidth: 760,
            }}>
              {item.text}
            </p>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '12px 32px',
                border: '1px solid #1a1a1a',
                fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                fontSize: 15,
                fontWeight: 300,
                color: '#1a1a1a',
                letterSpacing: '0.05em',
                borderRadius: 100,
                transition: 'all 0.3s',
              }}
            >
              {item.btn}
            </a>
          </div>
        </section>
      ))}
    </>
  );
}
