import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

const BASE = 'https://www.neofort.ro';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isRo = locale === 'ro';
  return {
    title: isRo
      ? 'Servicii NEOFORT | Consultanta Imobiliara, Tamplarie PVC, Crowdfunding'
      : 'NEOFORT Services | Real Estate Consultancy, PVC Carpentry, Crowdfunding',
    description: isRo
      ? 'Serviciile NEOFORT: consultanta imobiliara, studii de fezabilitate, proiectare arhitectura, creditare bancara, finantare crowdfunding, sisteme tamplarie PVC si aluminiu.'
      : 'NEOFORT services: real estate consultancy, feasibility studies, architectural design, bank financing, crowdfunding, PVC and aluminium carpentry systems.',
    alternates: {
      canonical: `${BASE}/${locale}/${locale === 'ro' ? 'servicii' : 'services'}`,
      languages: {
        ro: `${BASE}/ro/servicii`,
        en: `${BASE}/en/services`,
        'x-default': `${BASE}/ro/servicii`,
      },
    },
    openGraph: {
      title: isRo ? 'Servicii NEOFORT Bucuresti' : 'NEOFORT Services Bucharest',
      description: isRo
        ? 'Consultanta imobiliara, studii fezabilitate, proiectare, creditare, crowdfunding, tamplarie PVC.'
        : 'Real estate consultancy, feasibility studies, design, financing, crowdfunding, PVC carpentry.',
      url: `${BASE}/${locale}/${locale === 'ro' ? 'servicii' : 'services'}`,
      type: 'website',
    },
    robots: { index: true, follow: true },
  };
}

export default async function ServiciiPage({ params }) {
  const { locale } = await params;
  const isRo = locale === 'ro';

  const services = [
    {
      title: isRo ? 'Consultanta Imobiliara' : 'Real Estate Consultancy',
      text: isRo
        ? 'Oferim consultanta specializata in toate etapele unei tranzactii imobiliare — de la identificarea oportunitatilor de investitie, analiza de piata, negociere si pana la finalizarea contractelor. Experienta noastra de 21 de ani in piata imobiliara din Bucuresti garanteaza decizii informate si rezultate optime.'
        : 'We provide specialized consultancy at all stages of a real estate transaction — from identifying investment opportunities, market analysis, negotiation to contract finalization. Our 21 years of experience in the Bucharest real estate market guarantees informed decisions and optimal results.',
      img: '/images/consultanta.avif',
      imgAlt: isRo ? 'NEOFORT consultanta imobiliara Bucuresti' : 'NEOFORT real estate consultancy Bucharest',
    },
    {
      title: isRo ? 'Studii de Fezabilitate' : 'Feasibility Studies',
      text: isRo
        ? 'Elaboram studii de fezabilitate complete pentru proiecte rezidentiale si comerciale. Analizam viabilitatea economica, tehnica si juridica a investitiei, oferind o imagine clara asupra rentabilitatii si riscurilor proiectului. Am realizat studii pentru 41 de ansambluri rezidentiale in ultimii 14 ani.'
        : 'We prepare comprehensive feasibility studies for residential and commercial projects. We analyze the economic, technical and legal viability of the investment, providing a clear picture of project profitability and risks. We have completed studies for 41 residential complexes in the last 14 years.',
      img: '/images/fezabilitate.avif',
      imgAlt: isRo ? 'NEOFORT studii fezabilitate proiecte imobiliare' : 'NEOFORT feasibility studies real estate projects',
    },
    {
      title: isRo ? 'Proiectare si Arhitectura' : 'Design and Architecture',
      text: isRo
        ? 'Coordonam procesul de proiectare arhitecturala pentru ansambluri rezidentiale, de la conceptul initial pana la proiectul tehnic detaliat. Colaboram cu birouri de arhitectura de top pentru a crea locuinte moderne, eficiente energetic si cu o estetica urbana contemporana.'
        : 'We coordinate the architectural design process for residential complexes, from initial concept to detailed technical project. We collaborate with top architecture firms to create modern, energy-efficient homes with contemporary urban aesthetics.',
      img: '/images/arhitectura.avif',
      imgAlt: isRo ? 'NEOFORT proiectare arhitectura ansambluri rezidentiale' : 'NEOFORT architectural design residential complexes',
    },
    {
      title: isRo ? 'Creditare Bancara si Nebancara' : 'Bank and Non-Bank Financing',
      text: isRo
        ? 'Facilitam accesul la finantare bancara si nebancara pentru achizitia de locuinte sau pentru investitii imobiliare. Colaboram cu principalele institutii financiare din Romania pentru a identifica cele mai avantajoase solutii de creditare adaptate nevoilor fiecarui client.'
        : 'We facilitate access to bank and non-bank financing for home purchases or real estate investments. We collaborate with the main financial institutions in Romania to identify the most advantageous financing solutions tailored to each client.',
      img: '/images/creditare.avif',
      imgAlt: isRo ? 'NEOFORT creditare bancara imobiliara Bucuresti' : 'NEOFORT bank financing real estate Bucharest',
    },
    {
      title: isRo ? 'Finantare prin Crowdfunding' : 'Crowdfunding Financing',
      text: isRo
        ? 'Oferim solutii inovatoare de finantare prin crowdfunding imobiliar, permitand investitii accesibile in proiecte rezidentiale de calitate. Platforma noastra conecteaza investitori cu proiecte validate, transparente si cu randamente competitive pe piata imobiliara romaneasca.'
        : 'We offer innovative real estate crowdfunding financing solutions, enabling accessible investments in quality residential projects. Our platform connects investors with validated, transparent projects with competitive returns in the Romanian real estate market.',
      img: '/images/crowdfunding.avif',
      imgAlt: isRo ? 'NEOFORT finantare crowdfunding imobiliar Romania' : 'NEOFORT real estate crowdfunding financing Romania',
    },
    {
      title: isRo ? 'Sisteme de Tamplarie PVC si Aluminiu' : 'PVC and Aluminium Carpentry Systems',
      text: isRo
        ? 'Prin Neofort BIZ, furnizam si montam sisteme complete de tamplarie PVC si aluminiu, sisteme de umbrire, automatizari si solutii nZEB pentru eficienta energetica maxima. Cu un istoric din 2005, am echipat fatade la zeci de blocuri, sute de case si mii de apartamente din Romania.'
        : 'Through Neofort BIZ, we supply and install complete PVC and aluminium carpentry systems, shading systems, automations and nZEB solutions for maximum energy efficiency. With a history since 2005, we have equipped facades on dozens of buildings, hundreds of houses and thousands of apartments in Romania.',
      img: '/images/tamplarie-servicii.avif',
      imgAlt: isRo ? 'Neofort BIZ sisteme tamplarie PVC aluminiu nZEB Romania' : 'Neofort BIZ PVC aluminium carpentry nZEB systems Romania',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: isRo ? 'Servicii NEOFORT' : 'NEOFORT Services',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.title,
      description: s.text.substring(0, 160),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section style={{ background: '#1a1a1a', padding: '72px 20px 56px', textAlign: 'center' }}>
        <h1 style={{
          fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: 300,
          color: '#fff',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: 16,
        }}>
          {isRo ? 'Servicii' : 'Services'}
        </h1>
        <p style={{
          fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
          fontSize: 16,
          fontWeight: 300,
          color: '#e3d0a8',
          letterSpacing: '0.04em',
          maxWidth: 600,
          margin: '0 auto',
          lineHeight: 1.7,
        }}>
          {isRo
            ? 'Solutii complete pentru investitii imobiliare, constructii si tamplarie in Romania'
            : 'Complete solutions for real estate investments, construction and carpentry in Romania'}
        </p>
      </section>

      {/* Services list */}
      {services.map((service, i) => (
        <section
          key={i}
          aria-labelledby={`service-title-${i}`}
          style={{
            background: i % 2 === 0 ? '#fff' : '#f7f7f5',
            paddingTop: 60,
            paddingBottom: 64,
          }}
        >
          <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 20px' }}>
            <div style={{
              position: 'relative',
              width: '100%',
              height: 380,
              marginBottom: 36,
              overflow: 'hidden',
              borderRadius: 2,
            }}>
              <Image
                src={service.img}
                alt={service.imgAlt}
                fill
                loading={i === 0 ? 'eager' : 'lazy'}
                sizes="(max-width: 980px) 100vw, 980px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h2
              id={`service-title-${i}`}
              style={{
                fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                fontSize: 'clamp(20px, 2.8vw, 28px)',
                fontWeight: 400,
                color: '#1a1a1a',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: 16,
              }}
            >
              {service.title}
            </h2>
            <p style={{
              fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
              fontSize: 16,
              fontWeight: 300,
              color: '#4a4a4a',
              lineHeight: 1.85,
              maxWidth: 760,
            }}>
              {service.text}
            </p>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{ background: '#1a1a1a', padding: '56px 20px', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
          fontSize: 24,
          fontWeight: 300,
          color: '#fff',
          letterSpacing: '0.06em',
          marginBottom: 16,
        }}>
          {isRo ? 'Contactati-ne pentru o consultatie gratuita' : 'Contact us for a free consultation'}
        </h2>
        <a
          href={`/${locale}/contact`}
          style={{
            display: 'inline-block',
            padding: '14px 40px',
            border: '1px solid #e3d0a8',
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            fontSize: 15,
            fontWeight: 300,
            color: '#e3d0a8',
            letterSpacing: '0.06em',
            borderRadius: 100,
            textDecoration: 'none',
          }}
        >
          {isRo ? 'Contactati-ne' : 'Contact us'}
        </a>
      </section>
    </>
  );
}
