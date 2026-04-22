import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

const BASE = 'https://www.neofort.ro';
const F = 'Helvetica Neue, Helvetica, Arial, sans-serif';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isRo = locale === 'ro';
  const isUk = locale === 'uk';
  return {
    title: isRo
      ? 'NEOFORT | Ansambluri Rezidentiale Bucuresti | Constructii Imobiliare'
      : isUk
      ? 'NEOFORT | Житлові комплекси Бухарест | Будівництво нерухомості'
      : 'NEOFORT | Residential Complexes Bucharest | Real Estate Construction',
    description: isRo
      ? 'NEOFORT — 21 ani de excelenta in imobiliare. Peste 85 ansambluri rezidentiale reprezentate in Bucuresti si Ilfov. Consultanta imobiliara, dezvoltare rezidentiala, tamplarie PVC si aluminiu, crowdfunding imobiliar.'
      : isUk
      ? 'NEOFORT — 21 рік досконалості в нерухомості. Понад 85 житлових комплексів у Бухаресті та Ілфові. Консультації з нерухомості, житлова забудова, вікна ПВХ та алюміній, краудфандинг.'
      : 'NEOFORT — 21 years of real estate excellence. Over 85 residential complexes in Bucharest and Ilfov. Real estate consultancy, residential development, PVC and aluminium carpentry, real estate crowdfunding.',
    keywords: isRo
      ? 'ansambluri rezidentiale Bucuresti, imobiliare Bucuresti Ilfov, dezvoltator imobiliar, consultanta imobiliara, tamplarie PVC aluminiu Salamander, NEOFORT, apartamente noi Bucuresti'
      : 'residential complexes Bucharest, real estate Bucharest Ilfov, property developer, real estate consultancy, PVC aluminium carpentry, NEOFORT',
    alternates: {
      canonical: `${BASE}/${locale}`,
      languages: { ro: `${BASE}/ro`, en: `${BASE}/en`, uk: `${BASE}/uk`, 'x-default': `${BASE}/ro` },
    },
    openGraph: {
      title: isRo ? 'NEOFORT | Ansambluri Rezidentiale Bucuresti' : isUk ? 'NEOFORT | Житлові комплекси Бухарест' : 'NEOFORT | Residential Complexes Bucharest',
      description: isRo ? 'Peste 85 ansambluri rezidentiale reprezentate. Consultanta imobiliara, dezvoltare, tamplarie PVC si aluminiu.' : 'Over 85 residential complexes. Real estate consultancy, development, PVC and aluminium carpentry.',
      url: `${BASE}/${locale}`,
      siteName: 'NEOFORT',
      locale: locale === 'ro' ? 'ro_RO' : locale === 'uk' ? 'uk_UA' : 'en_US',
      type: 'website',
      images: [{ url: `/images/hero.avif`, width: 1200, height: 630, alt: 'NEOFORT' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: isRo ? 'NEOFORT | Ansambluri Rezidentiale Bucuresti' : 'NEOFORT | Residential Complexes Bucharest',
      description: isRo ? 'Peste 85 ansambluri rezidentiale in Bucuresti si Ilfov.' : 'Over 85 residential complexes in Bucharest and Ilfov.',
      images: [`/images/hero.avif`],
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
      imgAlt: isRo ? 'NEOFORT proiecte rezidentiale Bucuresti' : 'NEOFORT residential projects Bucharest',
      ariaLabel: isRo ? 'Mai multe detalii despre NEOFORT' : 'More details about NEOFORT',
    },
    {
      title: t('vanzare_title'),
      text: t('vanzare_text'),
      btn: t('vanzare_btn'),
      href: 'https://www.ansamblu-rezidential-nou.ro/vanzari',
      img: '/images/vanzare.avif',
      imgAlt: isRo ? 'Ansambluri rezidentiale NEOFORT vanzare Bucuresti Ilfov' : 'NEOFORT residential complexes for sale Bucharest Ilfov',
      ariaLabel: isRo ? 'Mai multe detalii despre vanzari ansambluri' : 'More details about residential sales',
    },
    {
      title: t('dezvoltare_title'),
      text: t('dezvoltare_text'),
      btn: t('dezvoltare_btn'),
      href: 'https://www.ansamblu-rezidential-nou.ro/contact',
      img: '/images/finalizate.avif',
      imgAlt: isRo ? 'NEOFORT NEW HOMES dezvoltare imobiliara Bucuresti' : 'NEOFORT NEW HOMES real estate development Bucharest',
      ariaLabel: isRo ? 'Mai multe detalii despre dezvoltare imobiliara' : 'More details about real estate development',
    },
    {
      title: t('tamplarie_title'),
      text: t('tamplarie_text'),
      btn: t('tamplarie_btn'),
      href: 'https://www.neofort-biz.ro/ro',
      img: '/images/tamplarie.avif',
      imgAlt: isRo ? 'Neofort BIZ tamplarie PVC aluminiu Salamander' : 'Neofort BIZ PVC aluminium carpentry Salamander',
      ariaLabel: isRo ? 'Mai multe detalii despre tamplarie PVC si aluminiu' : 'More details about PVC and aluminium carpentry',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${BASE}/#organization`,
        name: 'NEOFORT',
        url: BASE,
        logo: { '@type': 'ImageObject', url: `${BASE}/images/Neofort.avif` },
        foundingDate: '2005',
        description: 'NEOFORT este un brand romanesc fondat in 2005, cu activitati in dezvoltare imobiliara, agentie imobiliara, consultanta si sisteme de tamplarie PVC si aluminiu, activ in Bucuresti si Ilfov.',
        areaServed: [{ '@type': 'City', name: 'Bucuresti' }, { '@type': 'AdministrativeArea', name: 'Ilfov' }, { '@type': 'Country', name: 'Romania' }],
        sameAs: ['https://www.facebook.com/profile.php?id=100067676927533', 'https://ro.linkedin.com/company/neofort-biz', 'https://www.instagram.com/neofortimobiliare'],
        subOrganization: [
          {
            '@type': 'Organization',
            '@id': 'https://www.neofort-biz.ro/#organization',
            name: 'NEOFORT BIZ',
            url: 'https://www.neofort-biz.ro',
            taxID: 'RO30324211',
            foundingDate: '2005',
            hasMap: 'https://maps.app.goo.gl/XmVxe2MHK7gNhNab8',
            address: { '@type': 'PostalAddress', streetAddress: 'Strada Theodor Aman Pictor 11', addressLocality: 'Bucuresti', postalCode: '010776', addressCountry: 'RO' },
          },
          {
            '@type': 'Organization',
            '@id': 'https://www.ansamblu-rezidential-nou.ro/#organization',
            name: 'NEOFORT IMO',
            url: 'https://www.ansamblu-rezidential-nou.ro',
            taxID: '53874087',
            foundingDate: '2005',
            hasMap: 'https://maps.app.goo.gl/7GTsRU6uxDJEM92u7',
            address: { '@type': 'PostalAddress', streetAddress: 'Strada Theodor Aman Pictor 11', addressLocality: 'Bucuresti', postalCode: '010776', addressCountry: 'RO' },
          },
          {
            '@type': 'Organization',
            '@id': `${BASE}/#newhomes`,
            name: 'NEOFORT NEW HOMES',
            url: BASE,
            taxID: 'RO42172656',
            foundingDate: '2005',
            hasMap: 'https://maps.app.goo.gl/xnt7rPyQvWBfEWgk8',
            address: { '@type': 'PostalAddress', streetAddress: 'Strada Theodor Aman Pictor 11', addressLocality: 'Bucuresti', postalCode: '010776', addressCountry: 'RO' },
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${BASE}/#website`,
        url: BASE,
        name: 'NEOFORT',
        publisher: { '@id': `${BASE}/#organization` },
        inLanguage: ['ro-RO', 'en-US', 'uk-UA'],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Ce ansambluri rezidentiale are NEOFORT in Bucuresti?', acceptedAnswer: { '@type': 'Answer', text: 'NEOFORT IMO reprezinta peste 85 de ansambluri rezidentiale noi in Bucuresti si Ilfov, atat proiecte proprii cat si de la parteneri dezvoltatori.' } },
          { '@type': 'Question', name: 'Pot cumpara apartament off-plan prin NEOFORT?', acceptedAnswer: { '@type': 'Answer', text: 'Da. NEOFORT IMO este specializata in vanzari off-plan, oferind apartamente la preturi cu potential investitional ridicat, inainte de finalizarea constructiei.' } },
          { '@type': 'Question', name: 'Ce sisteme de tamplarie PVC ofera NEOFORT BIZ?', acceptedAnswer: { '@type': 'Answer', text: 'NEOFORT BIZ monteaza sisteme de tamplarie PVC Salamander si aluminiu, produse la standarde de export european.' } },
          { '@type': 'Question', name: 'Ofera NEOFORT finantare pentru achizitia unui apartament?', acceptedAnswer: { '@type': 'Answer', text: 'Da. NEOFORT ofera consultanta pentru finantare bancara si nebancara, precum si finantare prin crowdfunding imobiliar.' } },
          { '@type': 'Question', name: 'In ce zone din Bucuresti si Ilfov activeaza NEOFORT?', acceptedAnswer: { '@type': 'Answer', text: 'NEOFORT IMO si NEOFORT NEW HOMES acopera toate sectoarele Bucurestiului si judetul Ilfov, cu proiecte in Pipera, Bragadiru, Chiajna, Pantelimon, Voluntari si altele.' } },
          { '@type': 'Question', name: 'Cum pot obtine un studiu de fezabilitate de la NEOFORT?', acceptedAnswer: { '@type': 'Answer', text: 'NEOFORT ofera studii de fezabilitate pentru dezvoltatori si investitori. Contactati echipa prin formularul de pe site sau la office@neofort-biz.ro.' } },
          { '@type': 'Question', name: 'Ce este crowdfunding-ul imobiliar oferit de NEOFORT?', acceptedAnswer: { '@type': 'Answer', text: 'NEOFORT ofera finantare prin crowdfunding pentru dezvoltatori imobiliari, sistem care imparte beneficiile intre creditat si creditor, eliminand intermediarii bancari.' } },
          { '@type': 'Question', name: 'Ofera NEOFORT servicii de proiectare arhitecturala?', acceptedAnswer: { '@type': 'Answer', text: 'Da. Prin parteneriate, NEOFORT ofera solutii complete de proiectare arhitecturala, design interior si landscaping pentru ansambluri rezidentiale noi.' } },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="hero-section" style={{ position: 'relative', minHeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image
          src="/images/hero.avif"
          alt={isRo ? 'NEOFORT ansambluri rezidentiale Bucuresti' : 'NEOFORT residential complexes Bucharest'}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.52)' }} />
        <div className="hero-content" style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '60px 20px', maxWidth: 860, width: '100%' }}>
          <h1 className="hero-title" style={{ fontFamily: F, fontWeight: 300, color: '#fff', letterSpacing: '0.12em', lineHeight: 1.2, marginBottom: 16, textAlign: 'center', width: '100%' }}>
            NEOFORT
          </h1>
          <p className="hero-subtitle" style={{ fontFamily: F, fontWeight: 300, color: '#fff', letterSpacing: '0.05em', marginBottom: 28 }}>
            {t('hero_subtitle')}
          </p>
          <p className="hero-text" style={{ fontFamily: F, fontWeight: 300, color: 'rgba(255,255,255,0.9)', lineHeight: 1.8, maxWidth: 760, margin: '0 auto' }}>
            {t('hero_text')}
          </p>
        </div>
      </section>

      {sectiuni.map((item, i) => (
        <section key={i} aria-labelledby={`section-${i}`} style={{ background: i % 2 === 0 ? '#f7f7f5' : '#fff', padding: '0 0 60px' }}>
          <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 20px' }}>
            <div style={{ position: 'relative', width: '100%', height: 400, marginBottom: 32 }}>
              <Image
                src={item.img}
                alt={item.imgAlt}
                fill
                loading={i === 0 ? 'eager' : 'lazy'}
                sizes="(max-width: 980px) 100vw, 980px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h2 id={`section-${i}`} className="section-title" style={{ fontFamily: F, fontWeight: 300, color: '#1a1a1a', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 16 }}>
              {item.title}
            </h2>
            <p className="section-text" style={{ fontFamily: F, fontWeight: 300, color: '#4a4a4a', lineHeight: 1.75, marginBottom: 24, maxWidth: 760 }}>
              {item.text}
            </p>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.ariaLabel}
              style={{ display: 'inline-block', padding: '12px 32px', border: '1px solid #1a1a1a', fontFamily: F, fontSize: 15, fontWeight: 300, color: '#1a1a1a', letterSpacing: '0.05em', borderRadius: 100, textDecoration: 'none' }}
            >
              {item.btn}
            </a>
          </div>
        </section>
      ))}
    </>
  );
}
