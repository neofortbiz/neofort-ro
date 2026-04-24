import Image from 'next/image';

const BASE = 'https://www.neofort.ro';
const F = "'Helvetica Neue', Helvetica, Arial, sans-serif";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isRo = locale === 'ro';
  const isUk = locale === 'uk';
  return {
    title: isRo ? 'Servicii NEOFORT | Consultanta Imobiliara, Tamplarie PVC, Crowdfunding' : isUk ? 'Послуги NEOFORT' : 'NEOFORT Services',
    description: isRo ? 'Serviciile NEOFORT: consultanta imobiliara, studii de fezabilitate, constructie si proiectare, creditare bancara, finantare crowdfunding, sisteme tamplarie PVC si aluminiu.' : 'NEOFORT services: real estate consultancy, feasibility studies, construction, bank financing, crowdfunding, PVC and aluminium carpentry.',
    alternates: {
      canonical: `${BASE}/${locale}/servicii`,
      languages: { ro: `${BASE}/ro/servicii`, en: `${BASE}/en/servicii`, uk: `${BASE}/uk/servicii`, 'x-default': `${BASE}/ro/servicii` },
    },
    robots: { index: true, follow: true },
  };
}

export default async function ServiciiPage({ params }) {
  const { locale } = await params;
  const isRo = locale === 'ro';
  const isUk = locale === 'uk';

  const servicii = [
    {
      title: isRo ? 'CONSULTANTA IMOBILIARA' : isUk ? 'КОНСУЛЬТАЦІЇ З НЕРУХОМОСТІ' : 'REAL ESTATE CONSULTANCY',
      subtitle: isRo ? 'Vanzari off-plan la preturi cu potential investitional' : isUk ? 'Продажі off-plan за цінами з інвестиційним потенціалом' : 'Off-plan sales at investment potential prices',
      text: isRo ? 'In ultimii 5 ani portofoliul nostru de clienti a fost constituit din cumparatori si investitori ce ne-au acordat un vot consistent de incredere, astfel am atins rezultate remarcabile in zona vanzarilor off-plan. Majoritatea clientilor nostri au cumparat imobile la preturi discountate suficient de mult, incat multi dintre ei au ales revanzarea in detrimentul inchirierii.' : isUk ? 'За останні 5 років наш портфель клієнтів складався з покупців та інвесторів. Більшість клієнтів купували нерухомість за знижченими цінами і обирали перепродаж замість оренди.' : 'Over the last 5 years our clients consisted of buyers and investors. Most purchased at discounted prices, many choosing resale over renting.',
      img: '/images/NEOFORT_CONSULTANTA_IMOBILIARA.avif',
    },
    {
      title: isRo ? 'STUDII DE FEZABILITATE' : isUk ? 'ТЕХНІКО-ЕКОНОМІЧНІ ОБГРУНТУВАННЯ' : 'FEASIBILITY STUDIES',
      subtitle: isRo ? 'Un proiect de succes se bazeaza pe profesionisti' : isUk ? 'Успішний проект базується на професіоналах' : 'A successful project relies on professionals',
      text: isRo ? 'Oferim consultanta in managementul proiectului si studii de fezabilitate pentru dezvoltatori si investitori parteneri. Intr-o piata concurentiala, calculul si studiul atent legat de adresabilitatea si fezabilitatea economica a unui proiect garanteaza intr-o masura decisiva succesul unei dezvoltari imobiliare.' : isUk ? 'Ми надаємо консультації з управління проектами та ТЕО для партнерів-забудовників та інвесторів.' : 'We provide project management consultancy and feasibility studies for developers and investors.',
      img: '/images/NEOFORT_STUDII_DE_FEZABILITATE.avif',
    },
    {
      title: isRo ? 'CONSTRUCTIE SI PROIECTARE' : isUk ? 'БУДІВНИЦТВО ТА ПРОЕКТУВАННЯ' : 'CONSTRUCTION & DESIGN',
      subtitle: isRo ? 'Solutii complete de la proiect la cheie' : isUk ? 'Комплексні рішення від проекту до здачі' : 'Complete solutions from design to turnkey',
      text: isRo ? 'Oferim in parteneriate solutii la cerinte complexe de proiectare arhitecturala, design interior si coordonare executie. Toate garantate de o abordare profesionista bazata pe experienta si expertiza verificata in timp.' : isUk ? 'Ми пропонуємо рішення для архітектурного проектування, інтер\'єрного дизайну та координації виконання.' : 'We offer solutions for architectural design, interior design and execution coordination.',
      img: '/images/NEOFORT_PROIECTARE_ARHITECTURA.avif',
    },
    {
      title: isRo ? 'FINANTARE PRIN CROWDFUNDING' : isUk ? 'ФІНАНСУВАННЯ ЧЕРЕЗ КРАУДФАНДИНГ' : 'CROWDFUNDING FINANCING',
      subtitle: isRo ? 'O creditare inteligenta bazata pe principii de equity' : isUk ? 'Інтелектуальне кредитування на основі принципів акціонерного капіталу' : 'Intelligent financing based on equity principles',
      text: isRo ? 'Asiguram un aport consistent de finantare destinat dezvoltatorilor prin crowdfunding. Acest sistem garanteaza o solutie tangibila, usor de gestionat, cu avantajul de a imparti beneficiile intre creditat si creditor, prin eliminarea intermediarilor.' : isUk ? 'Ми забезпечуємо фінансування для забудовників через краудфандинг, розподіляючи вигоди між позичальником та кредитором.' : 'We provide financing for developers through crowdfunding, sharing benefits between borrower and lender.',
      img: '/images/NEOFORT_FINANTARE_PRIN_CROWDFUNDING.avif',
    },
    {
      title: isRo ? 'CREDITARE BANCARA SI NEBANCARA' : isUk ? 'БАНКІВСЬКЕ ТА НЕБАНКІВСЬКЕ КРЕДИТУВАННЯ' : 'BANK AND NON-BANK FINANCING',
      subtitle: isRo ? 'Solutii rapide si competitive de creditare' : isUk ? 'Швидкі та конкурентні рішення кредитування' : 'Fast and competitive financing solutions',
      text: isRo ? 'Prin parteneri conectati direct cu bancile si IFN-urile din piata, reusim sa gasim solutii inclusiv pentru situatii complicate. Incercam sa gasim solutii usoare si avantajoase pentru obtinerea creditului in timpi si conditii de pret foarte avantajoase.' : isUk ? 'Через партнерів, пов\'язаних з банками та НФУ, знаходимо рішення навіть для складних ситуацій.' : 'Through partners connected with banks and NBFIs, we find solutions even for complicated situations.',
      img: '/images/NEOFORT_CREDITARE_BANCARA_SI_NEBANCARA.avif',
    },
    {
      title: isRo ? 'TAMPLARIE ALUMINIU SI TERMOPANE PVC' : isUk ? 'АЛЮМІНІЄВІ КОНСТРУКЦІЇ ТА ВІКНА ПВХ' : 'ALUMINIUM & PVC DOUBLE GLAZING',
      subtitle: isRo ? 'Pret si calitate greu de egalat' : isUk ? 'Ціна та якість, яку важко перевершити' : 'Price and quality hard to match',
      text: isRo ? 'Activam in sfera furnizarii si montajului de tamplarie PVC si Aluminiu inca din 2005. Am devenit un furnizor notabil de tamplarie PVC Salamander in centrul si sudul tarii, cu exporturi in majoritatea statelor europene.' : isUk ? 'Активні у постачанні та монтажі вікон ПВХ та алюмінію з 2005 року, з експортом по всій Європі.' : 'Active in PVC and Aluminium carpentry since 2005, with exports across Europe.',
      img: '/images/NEOFORT_SISTEME_DE_TAMPLARIE_PVC___ALUMINIU.avif',
    },
  ];

  const heading = isRo ? 'SERVICII' : isUk ? 'ПОСЛУГИ' : 'SERVICES';

  return (
    <>
      {/* Titlu + descriere intro — centrate, uniforme */}
      <section style={{ background: '#fff', padding: '60px 20px 40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: F, fontSize: 22, fontWeight: 200, color: '#1a1a1a', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 32, textAlign: 'center' }}>
          {heading}
        </h1>
        <div style={{ maxWidth: 820, margin: '0 auto', fontFamily: F, fontSize: 14, fontWeight: 300, color: '#1a1a1a', lineHeight: 2, textAlign: 'center' }}>
          {isRo ? (<>Oferim <strong style={{ fontWeight: 600 }}>consultanta imobiliara</strong> in vederea vanzarii de apartamente in ansambluri rezidentiale proprii cat si de la parteneri. Asiguram <strong style={{ fontWeight: 600 }}>studii de fezabilitate</strong> si servicii de <strong style={{ fontWeight: 600 }}>constructie si proiectare</strong> pentru dezvoltatori si investitori. Oferim <strong style={{ fontWeight: 600 }}>servicii de crowdfunding</strong>, precum si <strong style={{ fontWeight: 600 }}>consultanta pentru finantare</strong> bancara si nebancara. Avem o mare acoperire zonala in furnizarea <a href="https://www.neofort-biz.ro/ro" target="_blank" rel="noopener noreferrer" style={{ color: '#1a1a1a', fontWeight: 600 }}>sistemelor de tamplarie aluminiu si termopane PVC</a>.</>) : isUk ? (<>Пропонуємо <strong style={{ fontWeight: 600 }}>консультації з нерухомості</strong>, <strong style={{ fontWeight: 600 }}>техніко-економічні обґрунтування</strong>, послуги <strong style={{ fontWeight: 600 }}>будівництва та проектування</strong>, <strong style={{ fontWeight: 600 }}>краудфандинг</strong>, <strong style={{ fontWeight: 600 }}>фінансові консультації</strong> та <a href="https://www.neofort-biz.ro/ro" target="_blank" rel="noopener noreferrer" style={{ color: '#1a1a1a', fontWeight: 600 }}>системи вікон ПВХ та алюміній</a>.</>) : (<>We offer <strong style={{ fontWeight: 600 }}>real estate consultancy</strong>, <strong style={{ fontWeight: 600 }}>feasibility studies</strong>, <strong style={{ fontWeight: 600 }}>construction & design</strong>, <strong style={{ fontWeight: 600 }}>crowdfunding</strong>, <strong style={{ fontWeight: 600 }}>financing consultancy</strong> and <a href="https://www.neofort-biz.ro/ro" target="_blank" rel="noopener noreferrer" style={{ color: '#1a1a1a', fontWeight: 600 }}>PVC and aluminium carpentry systems</a>.</>)}
        </div>
      </section>

      {/* Grid 3x2 carduri portrait cu text alb peste imagine */}
      <section style={{ background: '#f7f7f5', padding: '30px 20px 40px' }}>
        <div style={{
          maxWidth: 980,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
        }}>
          {servicii.map((service, i) => (
            <div key={i} style={{ position: 'relative', borderRadius: 4, overflow: 'hidden', aspectRatio: '2/7' }}>
              <Image
                src={service.img}
                alt={service.title}
                fill
                loading={i < 3 ? 'eager' : 'lazy'}
                sizes="(max-width: 768px) 100vw, 320px"
                style={{ objectFit: 'cover' }}
              />
              {/* Gradient inchis peste imagine pentru lizibilitate */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.65) 100%)' }} />
              {/* Text alb peste imagine */}
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '20px 16px 24px' }}>
                <h2 style={{ fontFamily: F, fontSize: 13, fontWeight: 600, color: '#fff', letterSpacing: '0.08em', marginBottom: 6, textTransform: 'uppercase' }}>
                  {service.title}
                </h2>
                <p style={{ fontFamily: F, fontSize: 11, fontWeight: 400, color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, marginBottom: 8, fontStyle: 'italic' }}>
                  {service.subtitle}
                </p>
                <p style={{ fontFamily: F, fontSize: 11, fontWeight: 300, color: 'rgba(255,255,255,0.80)', lineHeight: 1.65 }}>
                  {service.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
