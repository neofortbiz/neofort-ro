import Image from 'next/image';

const BASE = 'https://www.neofort.ro';
const F = "'Helvetica Neue', Helvetica, Arial, sans-serif";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isRo = locale === 'ro';
  const isUk = locale === 'uk';
  return {
    title: isRo
      ? 'Servicii NEOFORT | Consultanta Imobiliara, Tamplarie PVC, Crowdfunding'
      : isUk
      ? 'Послуги NEOFORT | Консультації з нерухомості, Вікна ПВХ, Краудфандинг'
      : 'NEOFORT Services | Real Estate Consultancy, PVC Carpentry, Crowdfunding',
    description: isRo
      ? 'Serviciile NEOFORT: consultanta imobiliara, studii de fezabilitate, constructie si proiectare, creditare bancara, finantare crowdfunding, sisteme tamplarie PVC si aluminiu.'
      : isUk
      ? 'Послуги NEOFORT: консультації з нерухомості, ТЕО, будівництво, банківське кредитування, краудфандинг, системи вікон ПВХ та алюміній.'
      : 'NEOFORT services: real estate consultancy, feasibility studies, construction & design, bank financing, crowdfunding, PVC and aluminium carpentry systems.',
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
      text: isRo
        ? 'In ultimii 5 ani portofoliul nostru de clienti a fost constituit din cumparatori si investitori ce ne-au acordat un vot consistent de incredere, astfel am atins rezultate remarcabile in zona vanzarilor off-plan. Majoritatea clientilor nostri au cumparat imobile la preturi discountate suficient de mult, incat multi dintre ei au ales revanzarea in detrimentul inchirierii.'
        : isUk
        ? 'За останні 5 років наш портфель клієнтів складався з покупців та інвесторів, які надавали нам стабільну довіру. Більшість клієнтів купували нерухомість за достатньо знижченими цінами і обирали перепродаж замість оренди.'
        : 'Over the last 5 years our client portfolio consisted of buyers and investors who gave us consistent trust. Most clients purchased at sufficiently discounted prices that many chose resale over renting.',
      img: '/images/NEOFORT_CONSULTANTA_IMOBILIARA.avif',
    },
    {
      title: isRo ? 'STUDII DE FEZABILITATE' : isUk ? 'ТЕХНІКО-ЕКОНОМІЧНІ ОБГРУНТУВАННЯ' : 'FEASIBILITY STUDIES',
      subtitle: isRo ? 'Un proiect de succes se bazeaza pe profesionisti' : isUk ? 'Успішний проект базується на професіоналах' : 'A successful project relies on professionals',
      text: isRo
        ? 'Oferim consultanta in managementul proiectului si studii de fezabilitate pentru dezvoltatori si investitori parteneri. Intr-o piata concurentiala, calculul si studiul atent legat de adresabilitatea si fezabilitatea economica a unui proiect garanteaza intr-o masura decisiva succesul unei dezvoltari imobiliare.'
        : isUk
        ? 'Ми надаємо консультації з управління проектами та ТЕО для партнерів-забудовників та інвесторів. На конкурентному ринку ретельний аналіз економічної доцільності вирішальним чином гарантує успіх проекту.'
        : 'We provide project management consultancy and feasibility studies for developers and partner investors. In a competitive market, careful study of addressability and economic feasibility decisively guarantees success.',
      img: '/images/NEOFORT_STUDII_DE_FEZABILITATE.avif',
    },
    {
      title: isRo ? 'CONSTRUCTIE SI PROIECTARE' : isUk ? 'БУДІВНИЦТВО ТА ПРОЕКТУВАННЯ' : 'CONSTRUCTION & DESIGN',
      subtitle: isRo ? 'Solutii complete de la proiect la cheie' : isUk ? 'Комплексні рішення від проекту до здачі' : 'Complete solutions from design to turnkey',
      text: isRo
        ? 'Oferim in parteneriate solutii la cerinte complexe de proiectare arhitecturala, design interior si coordonare executie. Toate garantate de o abordare profesionista bazata pe experienta si expertiza verificata in timp.'
        : isUk
        ? 'Ми пропонуємо партнерські рішення для складних вимог до архітектурного проектування, інтер\'єрного дизайну та координації виконання, гарантовані професійним підходом.'
        : 'We offer partnership solutions for complex architectural design, interior design and execution coordination, guaranteed by a professional approach.',
      img: '/images/NEOFORT_PROIECTARE_ARHITECTURA.avif',
    },
    {
      title: isRo ? 'FINANTARE PRIN CROWDFUNDING' : isUk ? 'ФІНАНСУВАННЯ ЧЕРЕЗ КРАУДФАНДИНГ' : 'CROWDFUNDING FINANCING',
      subtitle: isRo ? 'O creditare inteligenta bazata pe principii de equity' : isUk ? 'Інтелектуальне кредитування на основі принципів акціонерного капіталу' : 'Intelligent financing based on equity principles',
      text: isRo
        ? 'Asiguram un aport consistent de finantare destinat dezvoltatorilor prin crowdfunding. Acest sistem garanteaza o solutie tangibila, usor de gestionat, cu avantajul de a imparti beneficiile intre creditat si creditor, prin eliminarea intermediarilor.'
        : isUk
        ? 'Ми забезпечуємо стабільне фінансування для забудовників через краудфандинг, розподіляючи вигоди між позичальником та кредитором, усуваючи посередників.'
        : 'We provide consistent financing for developers through crowdfunding, sharing benefits between borrower and lender while eliminating intermediaries.',
      img: '/images/NEOFORT_FINANTARE_PRIN_CROWDFUNDING.avif',
    },
    {
      title: isRo ? 'CREDITARE BANCARA SI NEBANCARA' : isUk ? 'БАНКІВСЬКЕ ТА НЕБАНКІВСЬКЕ КРЕДИТУВАННЯ' : 'BANK AND NON-BANK FINANCING',
      subtitle: isRo ? 'Solutii rapide si competitive de creditare' : isUk ? 'Швидкі та конкурентні рішення кредитування' : 'Fast and competitive financing solutions',
      text: isRo
        ? 'Prin parteneri conectati direct cu bancile si IFN-urile din piata, reusim sa gasim solutii inclusiv pentru situatii complicate. Incercam sa gasim solutii usoare si avantajoase pentru obtinerea creditului in timpi si conditii de pret foarte avantajoase.'
        : isUk
        ? 'Через партнерів, безпосередньо пов\'язаних з банками та НФУ, ми знаходимо рішення навіть для складних ситуацій у найкоротші терміни та на найвигідніших умовах.'
        : 'Through partners directly connected with banks and NBFIs, we find solutions even for complicated situations at very advantageous price and time conditions.',
      img: '/images/NEOFORT_CREDITARE_BANCARA_SI_NEBANCARA.avif',
    },
    {
      title: isRo ? 'TAMPLARIE ALUMINIU SI TERMOPANE PVC' : isUk ? 'АЛЮМІНІЄВІ КОНСТРУКЦІЇ ТА ВІКНА ПВХ' : 'ALUMINIUM & PVC DOUBLE GLAZING',
      subtitle: isRo ? 'Pret si calitate greu de egalat' : isUk ? 'Ціна та якість, яку важко перевершити' : 'Price and quality hard to match',
      text: isRo
        ? 'Activam in sfera furnizarii si montajului de tamplarie PVC si Aluminiu inca din 2005. Am devenit un furnizor notabil de tamplarie PVC Salamander in centrul si sudul tarii, cu exporturi in majoritatea statelor europene.'
        : isUk
        ? 'Ми активні у сфері постачання та монтажу вікон ПВХ та алюмінію з 2005 року, ставши помітним постачальником Salamander у центральній та південній Румунії з експортом по всій Європі.'
        : 'Active in PVC and Aluminium carpentry supply and installation since 2005. We became a notable Salamander PVC supplier in central and southern Romania with exports across Europe.',
      img: '/images/NEOFORT_SISTEME_DE_TAMPLARIE_PVC___ALUMINIU.avif',
    },
  ];

  const heading = isRo ? 'SERVICII' : isUk ? 'ПОСЛУГИ' : 'SERVICES';

  return (
    <>
      <section style={{ background: '#fff', padding: '80px 20px 40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: F, fontSize: 22, fontWeight: 200, color: '#1a1a1a', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 32 }}>
          {heading}
        </h1>
        <div style={{ maxWidth: 820, margin: '0 auto', fontFamily: F, fontSize: 14, fontWeight: 300, color: '#1a1a1a', lineHeight: 2, textAlign: 'justify' }}>
          {isRo ? (
            <>
              Oferim <strong style={{ fontWeight: 600 }}>consultanta imobiliara</strong> in vederea vanzarii de apartamente in ansambluri rezidentiale proprii cat si de la parteneri.<br />
              Asiguram <strong style={{ fontWeight: 600 }}>studii de fezabilitate</strong> si servicii de <strong style={{ fontWeight: 600 }}>constructie si proiectare</strong> pentru dezvoltatori si investitori.<br />
              Oferim <strong style={{ fontWeight: 600 }}>servicii de crowdfunding</strong>, precum si <strong style={{ fontWeight: 600 }}>consultanta pentru finantare</strong> bancara si nebancara.<br />
              Avem o mare acoperire zonala in furnizarea <a href="https://www.neofort-biz.ro/ro" target="_blank" rel="noopener noreferrer" style={{ color: '#1a1a1a', fontWeight: 600 }}>sistemelor de tamplarie aluminiu si termopane PVC</a>.
            </>
          ) : isUk ? (
            <>
              Пропонуємо <strong style={{ fontWeight: 600 }}>консультації з нерухомості</strong> щодо продажу квартир у власних та партнерських житлових комплексах.<br />
              Забезпечуємо <strong style={{ fontWeight: 600 }}>техніко-економічні обґрунтування</strong> та послуги <strong style={{ fontWeight: 600 }}>будівництва та проектування</strong>.<br />
              Пропонуємо <strong style={{ fontWeight: 600 }}>послуги краудфандингу</strong> та <strong style={{ fontWeight: 600 }}>консультації з фінансування</strong>.<br />
              Широке регіональне охоплення у постачанні <a href="https://www.neofort-biz.ro/ro" target="_blank" rel="noopener noreferrer" style={{ color: '#1a1a1a', fontWeight: 600 }}>систем алюмінієвих конструкцій та вікон ПВХ</a>.
            </>
          ) : (
            <>
              We offer <strong style={{ fontWeight: 600 }}>real estate consultancy</strong> for apartment sales in own and partner residential complexes.<br />
              We provide <strong style={{ fontWeight: 600 }}>feasibility studies</strong> and <strong style={{ fontWeight: 600 }}>construction & design</strong> services.<br />
              We offer <strong style={{ fontWeight: 600 }}>crowdfunding services</strong> and <strong style={{ fontWeight: 600 }}>financing consultancy</strong>.<br />
              Wide regional coverage in supplying <a href="https://www.neofort-biz.ro/ro" target="_blank" rel="noopener noreferrer" style={{ color: '#1a1a1a', fontWeight: 600 }}>aluminium and PVC double glazing systems</a>.
            </>
          )}
        </div>
      </section>

      <section style={{ background: '#f7f7f5', padding: '30px 20px 30px' }}>
        <div style={{ maxWidth: 980, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>
          {servicii.map((service, i) => (
            <div key={i} style={{ position: 'relative', width: '100%', borderRadius: 4, overflow: 'hidden', background: '#1a1a1a' }}>
              <div style={{ position: 'relative', width: '100%', paddingBottom: '60%' }}>
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  loading={i < 2 ? 'eager' : 'lazy'}
                  sizes="(max-width: 768px) 100vw, 980px"
                  style={{ objectFit: 'cover', opacity: 0.7 }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 20%, rgba(0,0,0,0.85) 100%)' }} />
              </div>
              <div style={{ padding: '24px 24px 28px' }}>
                <h2 style={{ fontFamily: F, fontSize: 18, fontWeight: 500, color: '#1a1a1a', letterSpacing: '0.05em', marginBottom: 8 }}>
                  {service.title}
                </h2>
                <p style={{ fontFamily: F, fontSize: 14, fontWeight: 400, color: '#333', lineHeight: 1.6, marginBottom: 8 }}>
                  {service.subtitle}
                </p>
                <p style={{ fontFamily: F, fontSize: 14, fontWeight: 300, color: '#4a4a4a', lineHeight: 1.75, textAlign: 'justify' }}>
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
