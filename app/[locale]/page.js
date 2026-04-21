import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

const BASE = 'https://www.neofort.ro';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isRo = locale === 'ro';
  return {
    title: isRo
      ? 'NEOFORT | Ansambluri Rezidentiale Bucuresti | Constructii Imobiliare'
      : 'NEOFORT | Residential Complexes Bucharest | Real Estate Construction',
    description: isRo
      ? 'NEOFORT — 21 ani de excelenta in imobiliare. Peste 85 ansambluri rezidentiale reprezentate in Bucuresti. Consultanta imobiliara, dezvoltare rezidentiala, tamplarie PVC si aluminiu, crowdfunding imobiliar.'
      : 'NEOFORT — 21 years of real estate excellence. Over 85 residential complexes represented in Bucharest. Real estate consultancy, residential development, PVC and aluminium carpentry, real estate crowdfunding.',
    keywords: isRo
      ? 'ansambluri rezidentiale Bucuresti, imobiliare Bucuresti, dezvoltator imobiliar, consultanta imobiliara, tamplarie PVC aluminiu, NEOFORT'
      : 'residential complexes Bucharest, real estate Bucharest, property developer, real estate consultancy, PVC aluminium carpentry, NEOFORT',
    alternates: {
      canonical: `${BASE}/${locale}`,
      languages: {
        ro: `${BASE}/ro`,
        en: `${BASE}/en`,
        'x-default': `${BASE}/ro`,
      },
    },
    openGraph: {
      title: isRo ? 'NEOFORT | Ansambluri Rezidentiale Bucuresti' : 'NEOFORT | Residential Complexes Bucharest',
      description: isRo
        ? 'Peste 85 ansambluri rezidentiale reprezentate. Consultanta imobiliara, dezvoltare, tamplarie PVC si aluminiu.'
        : 'Over 85 residential complexes represented. Real estate consultancy, development, PVC and aluminium carpentry.',
      url: `${BASE}/${locale}`,
      siteName: 'NEOFORT',
      locale: isRo ? 'ro_RO' : 'en_US',
      type: 'website',
      images: [{
        url: `${BASE}/images/hero.avif`,
        width: 1200,
        height: 630,
        alt: isRo ? 'NEOFORT ansambluri rezidentiale Bucuresti' : 'NEOFORT residential complexes Bucharest',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: isRo ? 'NEOFORT | Ansambluri Rezidentiale Bucuresti' : 'NEOFORT | Residential Complexes Bucharest',
      description: isRo ? 'Peste 85 ansambluri rezidentiale reprezentate in Bucuresti.' : 'Over 85 residential complexes represented in Bucharest.',
      images: [`${BASE}/images/hero.avif`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
    },
  };
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${BASE}/#organization`,
      name: 'NEOFORT',
      url: BASE,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE}/images/logo-neofort.jpg`,
        width: 200,
        height: 200,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+40215280660',
        contactType: 'customer service',
        availableLanguage: ['Romanian', 'English'],
      },
      sameAs: [
        'https://www.neofort-biz.ro',
        'https://www.ansamblu-rezidential-nou.ro',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${BASE}/#localbusiness`,
      name: 'NEOFORT',
      description: 'Grup de companii cu activitati in constructii, dezvoltari imobiliare si furnizare tamplarie PVC si aluminiu, cu o experienta de peste 21 de ani.',
      url: BASE,
      telephone: '+40215280660',
      email: 'office@neofort.ro',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Strada Theodor Aman Pictor 11',
        addressLocality: 'Bucuresti',
        addressRegion: 'Ilfov',
        postalCode: '010776',
        addressCountry: 'RO',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 44.4430327,
        longitude: 26.0886870,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '10:00',
          closes: '18:00',
        },
      ],
      priceRange: '$$',
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE}/#website`,
      url: BASE,
      name: 'NEOFORT',
      description: 'Site oficial NEOFORT — ansambluri rezidentiale Bucuresti',
      inLanguage: ['ro', 'en'],
      publisher: { '@id': `${BASE}/#organization` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${BASE}/ro#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Acasa',
          item: `${BASE}/ro`,
        },
      ],
    },
  ],
};

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
      imgAlt: isRo
        ? 'NEOFORT grup companii constructii imobiliare Bucuresti'
        : 'NEOFORT group of companies real estate construction Bucharest',
      ariaLabel: isRo ? 'Afla mai multe despre NEOFORT' : 'Learn more about NEOFORT',
    },
    {
      title: t('vanzare_title'),
      text: t('vanzare_text'),
      btn: t('vanzare_btn'),
      href: 'https://www.ansamblu-rezidential-nou.ro/vanzari',
      img: '/images/vanzare.avif',
      imgAlt: isRo
        ? 'Ansambluri rezidentiale NEOFORT la vanzare Bucuresti'
        : 'NEOFORT residential complexes for sale Bucharest',
      ariaLabel: isRo ? 'Vezi ansamblurile rezidentiale disponibile la vanzare' : 'View available residential complexes for sale',
    },
    {
      title: t('dezvoltare_title'),
      text: t('dezvoltare_text'),
      btn: t('dezvoltare_btn'),
      href: 'https://www.ansamblu-rezidential-nou.ro/contact',
      img: '/images/finalizate.avif',
      imgAlt: isRo
        ? 'NEOFORT NEW HOMES dezvoltare imobiliara proiecte rezidentiale Bucuresti'
        : 'NEOFORT NEW HOMES real estate development residential projects Bucharest',
      ariaLabel: isRo ? 'Contacteaza NEOFORT pentru dezvoltare imobiliara' : 'Contact NEOFORT for real estate development',
    },
    {
      title: t('tamplarie_title'),
      text: t('tamplarie_text'),
      btn: t('tamplarie_btn'),
      href: 'https://www.neofort-biz.ro/ro',
      img: '/images/tamplarie.avif',
      imgAlt: isRo
        ? 'Neofort BIZ fabrica tamplarie PVC aluminiu sisteme nZEB Bucuresti'
        : 'Neofort BIZ PVC aluminium carpentry factory nZEB systems Bucharest',
      ariaLabel: isRo ? 'Viziteaza site-ul Neofort BIZ tamplarie PVC si aluminiu' : 'Visit Neofort BIZ PVC and aluminium carpentry website',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO — LCP element, priority load */}
      <section
        aria-label={isRo ? 'Sectiune principala NEOFORT' : 'NEOFORT main section'}
        style={{ position: 'relative', minHeight: 580, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Image
          src="/images/hero.avif"
          alt={isRo ? 'Ansamblu rezidential NEOFORT Bucuresti - blocuri moderne' : 'NEOFORT residential complex Bucharest - modern buildings'}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.52)' }} aria-hidden="true" />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '60px 20px', maxWidth: 860 }}>
          <h1 style={{
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            fontSize: 'clamp(42px, 8vw, 80px)',
            fontWeight: 300,
            color: '#fff',
            letterSpacing: '0.12em',
            lineHeight: 1.15,
            marginBottom: 16,
          }}>
            NEOFORT
          </h1>
          <p style={{
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            fontSize: 'clamp(16px, 2.5vw, 22px)',
            fontWeight: 300,
            color: '#fff',
            letterSpacing: '0.04em',
            marginBottom: 24,
          }}>
            {t('hero_subtitle')}
          </p>
          <p style={{
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            fontSize: 'clamp(14px, 1.8vw, 17px)',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.88)',
            lineHeight: 1.85,
            maxWidth: 720,
            margin: '0 auto',
          }}>
            {t('hero_text')}
          </p>
        </div>
      </section>

      {/* SECTIUNI */}
      {sectiuni.map((item, i) => (
        <section
          key={i}
          aria-labelledby={`sectiune-title-${i}`}
          style={{
            background: i % 2 === 0 ? '#f7f7f5' : '#fff',
            paddingBottom: 64,
            paddingTop: 60,
          }}
        >
          <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 20px' }}>
            {/* Imagine */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: 400,
              marginBottom: 36,
              overflow: 'hidden',
              borderRadius: 2,
            }}>
              <Image
                src={item.img}
                alt={item.imgAlt}
                fill
                loading="lazy"
                sizes="(max-width: 980px) 100vw, 980px"
                style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
              />
            </div>

            <h2
              id={`sectiune-title-${i}`}
              style={{
                fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                fontSize: 'clamp(22px, 3vw, 32px)',
                fontWeight: 300,
                color: '#1a1a1a',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: 16,
              }}
            >
              {item.title}
            </h2>

            <p style={{
              fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
              fontSize: 17,
              fontWeight: 300,
              color: '#4a4a4a',
              lineHeight: 1.8,
              marginBottom: 28,
              maxWidth: 720,
            }}>
              {item.text}
            </p>

            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.ariaLabel}
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
                transition: 'background 0.25s, color 0.25s',
                textDecoration: 'none',
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
