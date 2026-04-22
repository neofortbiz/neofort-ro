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
      ? 'Послуги NEOFORT: консультації з нерухомості, техніко-економічні обґрунтування, будівництво, банківське кредитування, краудфандинг, системи вікон ПВХ та алюміній.'
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

  const row1 = [
    {
      title: isRo ? 'CONSULTANTA IMOBILIARA' : isUk ? 'КОНСУЛЬТАЦІЇ З НЕРУХОМОСТІ' : 'REAL ESTATE CONSULTANCY',
      subtitle: isRo ? 'Vanzari off-plan la preturi cu potential investitional' : isUk ? 'Продажі off-plan за цінами з інвестиційним потенціалом' : 'Off-plan sales at investment potential prices',
      text: isRo
        ? 'In ultimii 5 ani portofoliul nostru de clienti a fost constituit din cumparatori si investitori ce ne-au acordat un vot consistent de incredere, astfel am atins rezultate remarcabile in zona vanzarilor off-plan. Majoritatea clientilor nostri au cumparat imobile, indiferent de proiect sau zona, la preturi discountate suficient de mult, incat multi dintre ei alegand revanzarea in detrimentul inchirierii.'
        : isUk
        ? 'За останні 5 років наш портфель клієнтів складався з покупців та інвесторів, які надавали нам стабільну довіру. Більшість наших клієнтів купували нерухомість за достатньо знижченими цінами, що багато хто обирав перепродаж замість оренди.'
        : 'Over the last 5 years our client portfolio consisted of buyers and investors who gave us consistent trust. Most clients purchased at sufficiently discounted prices that many chose resale over renting.',
      img: '/images/Consultanta_Imobiliara.avif',
      imgAlt: isRo ? 'NEOFORT consultanta imobiliara Bucuresti' : 'NEOFORT real estate consultancy Bucharest',
      width: 306,
    },
    {
      title: isRo ? 'STUDII DE FEZABILITATE' : isUk ? 'ТЕХНІКО-ЕКОНОМІЧНІ ОБГРУНТУВАННЯ' : 'FEASIBILITY STUDIES',
      subtitle: isRo ? 'Un proiect de succes se bazeaza pe profesionisti' : isUk ? 'Успішний проект базується на професіоналах' : 'A successful project relies on professionals',
      text: isRo
        ? 'Oferim consultanta in managementul proiectului si studii de fezabilitate pentru dezvoltatori si investitori parteneri. Intr-o piata concurentiala, calculul si studiul atent legat de adresabilitatea si fezabilitatea economica a unui proiect garanteaza intr-o masura decisiva succesul unei dezvoltari imobiliare. Mizam pe experienta acumulata in ultimii ani si marsam pe strategii preponderent prudentiale.'
        : isUk
        ? 'Ми надаємо консультації з управління проектами та техніко-економічні обґрунтування для партнерів-забудовників та інвесторів. На конкурентному ринку ретельний аналіз адресованості та економічної доцільності проекту вирішальним чином гарантує успіх.'
        : 'We provide project management consultancy and feasibility studies for developers and partner investors. In a competitive market, careful study of addressability and economic feasibility decisively guarantees the success of a real estate development.',
      img: '/images/Studii_de_fezabilitate.avif',
      imgAlt: isRo ? 'NEOFORT studii fezabilitate proiecte imobiliare' : 'NEOFORT feasibility studies real estate projects',
      width: 307,
    },
    {
      title: isRo ? 'CONSTRUCTIE SI PROIECTARE' : isUk ? 'БУДІВНИЦТВО ТА ПРОЕКТУВАННЯ' : 'CONSTRUCTION & DESIGN',
      subtitle: isRo ? 'Solutii complete de la proiect la cheie' : isUk ? 'Комплексні рішення від проекту до здачі' : 'Complete solutions from design to turnkey',
      text: isRo
        ? 'Jucatorii cu experienta din piata dezvoltarilor imobiliare cunosc cel mai bine rolul proiectarii si constructiei intr-o viitoare dezvoltare. Oferim in parteneriate solutii la cerinte complexe de proiectare arhitecturala, design interior si coordonare executie. Toate garantate de o abordare profesionista bazata pe experienta si expertiza verificata in timp.'
        : isUk
        ? 'Досвідчені гравці на ринку нерухомості найкраще знають роль проектування та будівництва. Ми пропонуємо партнерські рішення для складних вимог до архітектурного проектування, інтер\'єрного дизайну та координації виконання.'
        : 'Experienced players in real estate development know best the role of design and construction. We offer partnership solutions for complex architectural design, interior design and execution coordination.',
      img: '/images/Neofort_constructie_si_proiectare.avif',
      imgAlt: isRo ? 'NEOFORT constructie si proiectare imobiliara' : 'NEOFORT construction and architectural design',
      width: 307,
    },
  ];

  const row2 = [
    {
      title: isRo ? 'FINANTARE PRIN CROWDFUNDING' : isUk ? 'ФІНАНСУВАННЯ ЧЕРЕЗ КРАУДФАНДИНГ' : 'CROWDFUNDING FINANCING',
      subtitle: isRo ? 'O creditare inteligenta bazata pe principii de equity' : isUk ? 'Інтелектуальне кредитування на основі принципів акціонерного капіталу' : 'Intelligent financing based on equity principles',
      text: isRo
        ? 'Asiguram un aport consistent de finantare destinat dezvoltatorilor prin crowdfunding. Acest sistem de finantare garanteaza o solutie tangibila in a asigura o creditare usor de gestionat. Acest tip de creditare are avantajul de a imparti beneficiile operatiunii de creditare intre creditat si creditor, prin eliminarea puntilor de intermediari. Acest tip de creditare a fost testat cu succes in mai multe proiecte.'
        : isUk
        ? 'Ми забезпечуємо стабільне фінансування для забудовників через краудфандинг. Ця система гарантує реальне рішення для легко керованого кредитування, розподіляючи вигоди між позичальником та кредитором, усуваючи посередників.'
        : 'We provide consistent financing for developers through crowdfunding. This system guarantees a tangible, easily manageable credit solution, sharing benefits between borrower and lender, eliminating intermediaries.',
      img: '/images/NEOFORT_CROWDFUNDING.avif',
      imgAlt: isRo ? 'NEOFORT finantare crowdfunding imobiliar' : 'NEOFORT crowdfunding real estate financing',
      width: 306,
    },
    {
      title: isRo ? 'CREDITARE BANCARA SI NEBANCARA' : isUk ? 'БАНКІВСЬКЕ ТА НЕБАНКІВСЬКЕ КРЕДИТУВАННЯ' : 'BANK AND NON-BANK FINANCING',
      subtitle: isRo ? 'Asiguram solutii rapide si competitive de creditare' : isUk ? 'Забезпечуємо швидкі та конкурентні рішення кредитування' : 'Fast and competitive financing solutions',
      text: isRo
        ? 'Sprijinul oferit clientilor si investitorilor cumparatori in vederea obtinerii de finantare bancara si nebancara este oferit la un nivel superior de competitivitate. Prin parteneri conectati direct cu bancile si IFN-urile din piata, reusim sa gasim solutii inclusiv pentru situatii complicate. Practic incercam sa gasim solutii usoare si avantajoase pentru un client, de a obtine creditul in timpi si in conditii de pret foarte avantajoase.'
        : isUk
        ? 'Підтримка клієнтів та інвесторів у отриманні банківського та небанківського фінансування надається на вищому рівні конкурентоспроможності. Через партнерів, безпосередньо пов\'язаних з банками та НФУ, ми знаходимо рішення навіть для складних ситуацій.'
        : 'Support for clients in obtaining bank and non-bank financing at superior competitiveness. Through partners directly connected with banks and NBFIs, we find solutions even for complicated situations.',
      img: '/images/Finantare_bancara_si_nebancara.avif',
      imgAlt: isRo ? 'NEOFORT creditare bancara nebancara' : 'NEOFORT bank non-bank financing',
      width: 307,
    },
    {
      title: isRo ? 'TAMPLARIE ALUMINIU SI TERMOPANE PVC' : isUk ? 'АЛЮМІНІЄВІ КОНСТРУКЦІЇ ТА ВІКНА ПВХ' : 'ALUMINIUM & PVC DOUBLE GLAZING',
      subtitle: isRo ? 'La un pret si o calitate a produselor si serviciilor greu de egalat' : isUk ? 'Ціна та якість продуктів і послуг, яку важко перевершити' : 'Price and quality hard to match',
      text: isRo
        ? 'Activam in sfera furnizararii si montajului de tamplarie PVC si Aluminiu inca din 2005. In timp am devenit un furnizor notabil de tamplarie PVC Salamander din centrul si sudul tarii. Tamplaria este produsa in una dintre cele mai mari fabrici de profil din tara la standarde de calitate ce garanteaza o pondere a exporturilor de pana la 30-40%. Tamplaria furnizata de noi a ajuns in majoritatea statelor europene.'
        : isUk
        ? 'Ми активні у сфері постачання та монтажу вікон ПВХ та алюмінію з 2005 року. З часом ми стали помітним постачальником вікон ПВХ Salamander у центральній та південній Румунії, з експортом по всій Європі.'
        : 'Active in PVC and Aluminium carpentry supply and installation since 2005. We became a notable Salamander PVC carpentry supplier in central and southern Romania, with quality standards guaranteeing exports of up to 30-40% reaching most European countries.',
      img: '/images/TAMPLARIE_Aluminiu_si_TERMOPANE_PVC.avif',
      imgAlt: isRo ? 'NEOFORT tamplarie aluminiu termopane PVC' : 'NEOFORT aluminium PVC double glazing',
      width: 307,
    },
  ];

  const Card = ({ service, index }) => (
    <article
      aria-labelledby={`svc-${index}`}
      style={{ position: 'relative', width: service.width, height: 840, flexShrink: 0, overflow: 'hidden', background: '#1a1a1a' }}
    >
      <Image
        src={service.img}
        alt={service.imgAlt}
        fill
        loading={index < 3 ? 'eager' : 'lazy'}
        sizes="307px"
        style={{ objectFit: 'cover', opacity: 0.75 }}
      />
      <div style={{ position: 'absolute', top: 338, left: 40, right: 40, bottom: 41 }}>
        <h2 id={`svc-${index}`} style={{ fontFamily: F, fontSize: 18, fontWeight: 400, color: '#fff', letterSpacing: '0.02em', lineHeight: 1.75, marginBottom: 14 }}>
          {service.title}
        </h2>
        <p style={{ fontFamily: F, fontSize: 14, fontWeight: 400, color: '#fff', lineHeight: 1.79, marginBottom: 14 }}>
          {service.subtitle}
        </p>
        <p style={{ fontFamily: F, fontSize: 14, fontWeight: 300, color: '#fff', lineHeight: 1.79 }}>
          {service.text}
        </p>
      </div>
    </article>
  );

  const heading = isRo ? 'SERVICII' : isUk ? 'ПОСЛУГИ' : 'SERVICES';

  return (
    <>
      <section style={{ background: '#fff', padding: '80px 20px 40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: F, fontSize: 22, fontWeight: 200, color: '#1a1a1a', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 32 }}>
          {heading}
        </h1>
        <div style={{ maxWidth: 820, margin: '0 auto', fontFamily: F, fontSize: 14, fontWeight: 300, color: '#1a1a1a', lineHeight: 2 }}>
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
              Забезпечуємо <strong style={{ fontWeight: 600 }}>техніко-економічні обґрунтування</strong> та послуги <strong style={{ fontWeight: 600 }}>будівництва та проектування</strong> для забудовників та інвесторів.<br />
              Пропонуємо <strong style={{ fontWeight: 600 }}>послуги краудфандингу</strong>, а також <strong style={{ fontWeight: 600 }}>консультації з фінансування</strong> банківського та небанківського.<br />
              Маємо широке регіональне охоплення у постачанні <a href="https://www.neofort-biz.ro/ro" target="_blank" rel="noopener noreferrer" style={{ color: '#1a1a1a', fontWeight: 600 }}>систем алюмінієвих конструкцій та вікон ПВХ</a>.
            </>
          ) : (
            <>
              We offer <strong style={{ fontWeight: 600 }}>real estate consultancy</strong> for apartment sales in own and partner residential complexes.<br />
              We provide <strong style={{ fontWeight: 600 }}>feasibility studies</strong> and <strong style={{ fontWeight: 600 }}>construction & design</strong> services for developers and investors.<br />
              We offer <strong style={{ fontWeight: 600 }}>crowdfunding services</strong>, as well as <strong style={{ fontWeight: 600 }}>financing consultancy</strong> for bank and non-bank credit.<br />
              We have wide regional coverage in supplying <a href="https://www.neofort-biz.ro/ro" target="_blank" rel="noopener noreferrer" style={{ color: '#1a1a1a', fontWeight: 600 }}>aluminium and PVC double glazing systems</a>.
            </>
          )}
        </div>
      </section>
      <section style={{ background: '#f7f7f5', padding: '30px 0 0' }}>
        <div style={{ display: 'flex', gap: 30, justifyContent: 'center' }}>
          {row1.map((service, i) => <Card key={i} service={service} index={i} />)}
        </div>
        <div style={{ display: 'flex', gap: 30, justifyContent: 'center', paddingTop: 30, paddingBottom: 30 }}>
          {row2.map((service, i) => <Card key={i + 3} service={service} index={i + 3} />)}
        </div>
      </section>
    </>
  );
}
