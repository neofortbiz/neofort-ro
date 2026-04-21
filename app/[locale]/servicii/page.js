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
    robots: { index: true, follow: true },
  };
}

export default async function ServiciiPage({ params }) {
  const { locale } = await params;
  const isRo = locale === 'ro';

  const services = [
    {
      title: isRo ? 'Consultanta Imobiliara' : 'Real Estate Consultancy',
      subtitle: isRo ? 'Vanzari off-plan la preturi cu potential investitional' : 'Off-plan sales at investment potential prices',
      text: isRo
        ? 'In ultimii 5 ani portofoliul nostru de clienti a fost constituit din cumparatori si investitori ce ne-au acordat un vot consistent de incredere. Am atins rezultate remarcabile in zona vanzarilor off-plan. Majoritatea clientilor nostri au cumparat imobile la preturi discountate suficient de mult, incat multi dintre ei alegand revanzarea in detrimentul inchirierii.'
        : 'Over the last 5 years our client portfolio has consisted of buyers and investors who gave us consistent trust. We achieved remarkable results in off-plan sales. Most clients purchased properties at sufficiently discounted prices that many chose resale over renting.',
      img: '/images/consultanta.avif',
      imgAlt: isRo ? 'NEOFORT consultanta imobiliara Bucuresti' : 'NEOFORT real estate consultancy Bucharest',
    },
    {
      title: isRo ? 'Studii de Fezabilitate' : 'Feasibility Studies',
      subtitle: isRo ? 'Un proiect de succes se bazeaza pe profesionisti' : 'A successful project relies on professionals',
      text: isRo
        ? 'Oferim consultanta in managementul proiectului si studii de fezabilitate pentru dezvoltatori si investitori parteneri. Intr-o piata concurentiala, calculul si studiul atent legat de adresabilitatea si fezabilitatea economica a unui proiect, garanteaza intr-o masura decisiva succesul unei dezvoltari imobiliare. Mizam pe experienta acumulata in ultimii ani si marsam pe strategii preponderent prudentiale.'
        : 'We provide project management consultancy and feasibility studies for developers and partner investors. In a competitive market, careful calculation and study of addressability and economic feasibility decisively guarantees the success of a real estate development.',
      img: '/images/fezabilitate.avif',
      imgAlt: isRo ? 'NEOFORT studii fezabilitate proiecte imobiliare' : 'NEOFORT feasibility studies real estate projects',
    },
    {
      title: isRo ? 'Proiectare Arhitectura' : 'Architectural Design',
      subtitle: isRo ? 'Solutii la cerinte complexe de proiectare' : 'Solutions for complex design requirements',
      text: isRo
        ? 'Jucatorii cu experienta din piata dezvoltarilor imobiliare cunosc cel mai bine rolul proiectarii si arhitecturii intr-o viitoare dezvoltare imobiliara. Componentele cheie: atractivitate, versatilitate, legalitate, vandabilitate si continuitate. Toate acestea generate si garantate de o abordare profesionista bazata pe experienta si expertiza verificata in timp.'
        : 'Experienced players in real estate development know best the role of design and architecture. Key components: attractiveness, versatility, legality, marketability and continuity. All generated and guaranteed by a professional approach based on time-tested experience.',
      img: '/images/arhitectura.avif',
      imgAlt: isRo ? 'NEOFORT proiectare arhitectura ansambluri rezidentiale' : 'NEOFORT architectural design residential complexes',
    },
    {
      title: isRo ? 'Finantare prin Crowdfunding' : 'Crowdfunding Financing',
      subtitle: isRo ? 'O creditare inteligenta bazata pe principii de equity' : 'Intelligent financing based on equity principles',
      text: isRo
        ? 'Asiguram un aport consistent de finantare destinat dezvoltatorilor prin crowdfunding. Acest sistem garanteaza o solutie tangibila de creditare usor de gestionat, cu avantajul de a imparti beneficiile operatiunii intre creditat si creditor, prin eliminarea intermediarilor. Testat cu succes in mai multe proiecte.'
        : 'We provide consistent financing for developers through crowdfunding. This system guarantees a tangible, easily manageable credit solution, with the advantage of sharing benefits between borrower and lender, eliminating intermediaries. Successfully tested in multiple projects.',
      img: '/images/crowdfunding.avif',
      imgAlt: isRo ? 'NEOFORT finantare crowdfunding imobiliar Romania' : 'NEOFORT real estate crowdfunding financing Romania',
    },
    {
      title: isRo ? 'Creditare Bancara si Nebancara' : 'Bank and Non-Bank Financing',
      subtitle: isRo ? 'Solutii rapide si competitive de creditare' : 'Fast and competitive financing solutions',
      text: isRo
        ? 'Sprijinul oferit clientilor in vederea obtinerii de finantare bancara si nebancara este oferit la un nivel superior de competitivitate. Prin parteneri conectati direct cu bancile si IFN-urile din piata, reusim sa gasim solutii inclusiv pentru situatii complicate, in timpi si conditii de pret foarte avantajoase.'
        : 'Support for clients in obtaining bank and non-bank financing is provided at superior competitiveness. Through partners directly connected with banks and NBFIs, we find solutions even for complicated situations at very advantageous timing and price conditions.',
      img: '/images/creditare.avif',
      imgAlt: isRo ? 'NEOFORT creditare bancara imobiliara Bucuresti' : 'NEOFORT bank financing real estate Bucharest',
    },
    {
      title: isRo ? 'Sisteme Tamplarie PVC & Aluminiu' : 'PVC & Aluminium Carpentry',
      subtitle: isRo ? 'Pret si calitate greu de egalat' : 'Price and quality hard to match',
      text: isRo
        ? 'Activam in furnizarea si montajul de tamplarie PVC si Aluminiu inca din 2005. Am devenit furnizor notabil de tamplarie PVC Salamander in centrul si sudul tarii. Tamplaria este produsa la standarde de calitate ce garanteaza exporturi de pana la 30-40%, ajungand in majoritatea statelor europene.'
        : 'We have been active in PVC and Aluminium carpentry supply and installation since 2005. We became a notable Salamander PVC carpentry supplier in central and southern Romania, with quality standards guaranteeing exports of up to 30-40%, reaching most European countries.',
      img: '/images/tamplarie-servicii.avif',
      imgAlt: isRo ? 'Neofort BIZ sisteme tamplarie PVC aluminiu Romania' : 'Neofort BIZ PVC aluminium carpentry systems Romania',
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
          fontSize: 15,
          fontWeight: 300,
          color: 'rgba(255,255,255,0.75)',
          maxWidth: 680,
          margin: '0 auto',
          lineHeight: 1.75,
        }}>
          {isRo
            ? 'Oferim consultanta imobiliara, studii de fezabilitate, proiectare, creditare, crowdfunding si tamplarie PVC si aluminiu.'
            : 'We offer real estate consultancy, feasibility studies, design, financing, crowdfunding and PVC and aluminium carpentry.'}
        </p>

        {/* Rezumat servicii — ca pe site-ul original */}
        <div style={{
          maxWidth: 760,
          margin: '32px auto 0',
          fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
          fontSize: 14,
          fontWeight: 300,
          color: 'rgba(255,255,255,0.65)',
          lineHeight: 2,
          textAlign: 'center',
        }}>
          {isRo ? (
            <>
              Oferim <strong style={{ color: '#e3d0a8', fontWeight: 500 }}>consultanta imobiliara</strong> in vederea vanzarii de apartamente in ansambluri rezidentiale proprii cat si de la parteneri.<br />
              Asiguram <strong style={{ color: '#e3d0a8', fontWeight: 500 }}>studii de fezabilitate</strong> pentru managementul dezvoltarilor imobiliare, plan de marketing si managementul proiectelor.<br />
              Acordam <strong style={{ color: '#e3d0a8', fontWeight: 500 }}>consultanta in proiectare, arhitectura, design interior</strong> si landscaping pentru ansambluri rezidentiale noi.<br />
              Oferim <strong style={{ color: '#e3d0a8', fontWeight: 500 }}>servicii de crowdfunding</strong>, precum si <strong style={{ color: '#e3d0a8', fontWeight: 500 }}>consultanta pentru finantare</strong> bancara si nebancara.<br />
              Avem o mare acoperire zonala in furnizarea <strong style={{ color: '#e3d0a8', fontWeight: 500 }}>sistemelor de tamplarie Salamander</strong>.
            </>
          ) : (
            <>
              We offer <strong style={{ color: '#e3d0a8', fontWeight: 500 }}>real estate consultancy</strong> for apartment sales in own and partner residential complexes.<br />
              We provide <strong style={{ color: '#e3d0a8', fontWeight: 500 }}>feasibility studies</strong> for real estate development management, marketing plans and project management.<br />
              We provide <strong style={{ color: '#e3d0a8', fontWeight: 500 }}>consultancy in design, architecture, interior design</strong> and landscaping for new residential complexes.<br />
              We offer <strong style={{ color: '#e3d0a8', fontWeight: 500 }}>crowdfunding services</strong>, as well as <strong style={{ color: '#e3d0a8', fontWeight: 500 }}>financing consultancy</strong> for bank and non-bank credit.<br />
              We have wide regional coverage in supplying <strong style={{ color: '#e3d0a8', fontWeight: 500 }}>Salamander carpentry systems</strong>.
            </>
          )}
        </div>
      </section>

      {/* Cards grid — 3 coloane verticale ca pe site-ul original */}
      <section style={{ background: '#f7f7f5', padding: '60px 20px 72px' }}>
        <div style={{
          maxWidth: 1160,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
        }}>
          {services.map((service, i) => (
            <article
              key={i}
              aria-labelledby={`service-${i}`}
              style={{
                background: '#1a1a1a',
                overflow: 'hidden',
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Imagine */}
              <div style={{ position: 'relative', width: '100%', height: 240, flexShrink: 0 }}>
                <Image
                  src={service.img}
                  alt={service.imgAlt}
                  fill
                  loading={i < 3 ? 'eager' : 'lazy'}
                  sizes="(max-width: 768px) 100vw, (max-width: 1160px) 33vw, 360px"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: '22px 22px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h2
                  id={`service-${i}`}
                  style={{
                    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                    fontSize: 15,
                    fontWeight: 600,
                    color: '#fff',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: 8,
                    lineHeight: 1.4,
                  }}
                >
                  {service.title}
                </h2>
                <p style={{
                  fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                  fontSize: 13,
                  fontWeight: 400,
                  color: '#e3d0a8',
                  lineHeight: 1.55,
                  marginBottom: 12,
                }}>
                  {service.subtitle}
                </p>
                <p style={{
                  fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                  fontSize: 13,
                  fontWeight: 300,
                  color: '#bbb',
                  lineHeight: 1.75,
                  flex: 1,
                }}>
                  {service.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
