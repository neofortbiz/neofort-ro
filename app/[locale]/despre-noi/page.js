const BASE = 'https://www.neofort.ro';
const F = "'Helvetica Neue', Helvetica, Arial, sans-serif";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return {
    title: locale === 'ro'
      ? 'Despre NEOFORT | Brand Imobiliar din 2005 | Bucuresti'
      : locale === 'uk'
      ? 'Про NEOFORT | Бренд нерухомості з 2005 року | Бухарест'
      : 'About NEOFORT | Real Estate Brand Since 2005 | Bucharest',
    description: locale === 'ro'
      ? 'NEOFORT — brand romanesc fondat in 2005 cu 3 entitati: NEOFORT NEW HOMES, NEOFORT IMO si NEOFORT BIZ. Peste 85 ansambluri rezidentiale in Bucuresti si Ilfov.'
      : locale === 'uk'
      ? 'NEOFORT — румунський бренд, заснований у 2005 році з 3 компаніями: NEOFORT NEW HOMES, NEOFORT IMO та NEOFORT BIZ. Понад 85 житлових комплексів у Бухаресті та Ілфові.'
      : 'NEOFORT — Romanian brand founded in 2005 with 3 entities: NEOFORT NEW HOMES, NEOFORT IMO and NEOFORT BIZ. Over 85 residential complexes in Bucharest and Ilfov.',
    alternates: {
      canonical: `${BASE}/${locale}/despre-noi`,
      languages: { ro: `${BASE}/ro/despre-noi`, en: `${BASE}/en/despre-noi`, uk: `${BASE}/uk/despre-noi`, 'x-default': `${BASE}/ro/despre-noi` },
    },
    robots: { index: true, follow: true },
  };
}

export default async function DesprePage({ params }) {
  const { locale } = await params;
  const isRo = locale === 'ro';
  const isUk = locale === 'uk';

  const entitati = [
    {
      name: 'NEOFORT NEW HOMES',
      cui: 'CUI RO42172656',
      desc: isRo
        ? 'Divizia de dezvoltare imobiliara a grupului NEOFORT. Specializata in constructia si comercializarea de ansambluri rezidentiale noi in Bucuresti si Ilfov. Mizam pe calitate, transparenta si livrare la termen.'
        : isUk
        ? 'Підрозділ з розвитку нерухомості групи NEOFORT. Спеціалізується на будівництві та продажу нових житлових комплексів у Бухаресті та Ілфові. Ставимо на якість, прозорість та своєчасну здачу.'
        : 'The real estate development division of NEOFORT group. Specializing in construction and sale of new residential complexes in Bucharest and Ilfov.',
      url: 'https://www.neofort.ro',
      maps: 'https://maps.app.goo.gl/xnt7rPyQvWBfEWgk8',
      urlLabel: isRo ? 'Viziteaza site-ul' : isUk ? 'Відвідати сайт' : 'Visit website',
    },
    {
      name: 'NEOFORT IMO',
      cui: 'CUI 53874087',
      desc: isRo
        ? 'Agentia imobiliara a grupului NEOFORT. Peste 85 ansambluri rezidentiale reprezentate in Bucuresti si Ilfov. Specializata in vanzari off-plan, consultanta imobiliara si investitii imobiliare cu potential ridicat.'
        : isUk
        ? 'Агентство нерухомості групи NEOFORT. Представляє понад 85 житлових комплексів у Бухаресті та Ілфові. Спеціалізується на продажах off-plan, консультаціях з нерухомості та інвестиціях з високим потенціалом.'
        : 'The real estate agency of NEOFORT group. Over 85 residential complexes represented in Bucharest and Ilfov. Specialized in off-plan sales, real estate consultancy and high-potential investments.',
      url: 'https://www.ansamblu-rezidential-nou.ro',
      maps: 'https://maps.app.goo.gl/7GTsRU6uxDJEM92u7',
      urlLabel: isRo ? 'Viziteaza site-ul' : isUk ? 'Відвідати сайт' : 'Visit website',
    },
    {
      name: 'NEOFORT BIZ',
      cui: 'CUI RO30324211',
      desc: isRo
        ? 'Producator si montator de sisteme de tamplarie PVC Salamander si aluminiu. Activ din 2005, furnizor notabil in centrul si sudul Romaniei, cu exporturi in toata Uniunea Europeana.'
        : isUk
        ? 'Виробник та монтажник систем вікон ПВХ Salamander та алюмінію. Активний з 2005 року, відомий постачальник у центральній та південній Румунії, з експортом по всьому Європейському Союзу.'
        : 'Producer and installer of Salamander PVC and aluminium carpentry systems. Active since 2005, notable supplier in central and southern Romania with exports across the EU.',
      url: 'https://www.neofort-biz.ro',
      maps: 'https://maps.app.goo.gl/XmVxe2MHK7gNhNab8',
      urlLabel: isRo ? 'Viziteaza site-ul' : isUk ? 'Відвідати сайт' : 'Visit website',
    },
  ];

  const title = isRo ? 'DESPRE NEOFORT' : isUk ? 'ПРО NEOFORT' : 'ABOUT NEOFORT';
  const intro = isRo
    ? 'NEOFORT este un brand romanesc fondat in 2005, cu activitati in dezvoltare imobiliara, agentie imobiliara, consultanta si sisteme de tamplarie PVC si aluminiu. In 21 de ani de activitate, am reprezentat peste 85 de ansambluri rezidentiale in Bucuresti si Ilfov si am livrat sisteme de tamplarie in toata Europa.'
    : isUk
    ? 'NEOFORT — румунський бренд, заснований у 2005 році, з діяльністю у сфері розвитку нерухомості, агентства нерухомості, консалтингу та систем вікон з ПВХ та алюмінію. За 21 рік діяльності ми представили понад 85 житлових комплексів у Бухаресті та Ілфові та поставили вікна по всій Європі.'
    : 'NEOFORT is a Romanian brand founded in 2005, active in real estate development, estate agency, consultancy and PVC and aluminium carpentry systems. In 21 years, we have represented over 85 residential complexes in Bucharest and Ilfov and delivered carpentry systems across Europe.';

  return (
    <>
      <section style={{ background: '#f7f7f5', padding: '80px 20px 60px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: F, fontSize: 28, fontWeight: 200, color: '#1a1a1a', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 24 }}>
          {title}
        </h1>
        <p style={{ fontFamily: F, fontSize: 16, fontWeight: 300, color: '#4a4a4a', lineHeight: 1.9, maxWidth: 780, margin: '0 auto' }}>
          {intro}
        </p>
      </section>

      <section style={{ background: '#fff', padding: '60px 20px 80px' }}>
        <div style={{ maxWidth: 980, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 48 }}>
          {entitati.map((e, i) => (
            <div key={i} style={{ borderLeft: '3px solid #1a1a1a', paddingLeft: 32 }}>
              <h2 style={{ fontFamily: F, fontSize: 22, fontWeight: 300, color: '#1a1a1a', letterSpacing: '0.08em', marginBottom: 4 }}>
                {e.name}
              </h2>
              <p style={{ fontFamily: F, fontSize: 12, fontWeight: 300, color: '#999', letterSpacing: '0.05em', marginBottom: 16 }}>
                {e.cui}
              </p>
              <p style={{ fontFamily: F, fontSize: 15, fontWeight: 300, color: '#4a4a4a', lineHeight: 1.8, marginBottom: 20, maxWidth: 720 }}>
                {e.desc}
              </p>
              <div style={{ display: 'flex', gap: 16 }}>
                <a href={e.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: F, fontSize: 13, fontWeight: 400, color: '#1a1a1a', textDecoration: 'none', borderBottom: '1px solid #1a1a1a', paddingBottom: 2 }}>
                  {e.urlLabel} →
                </a>
                <a href={e.maps} target="_blank" rel="noopener noreferrer" style={{ fontFamily: F, fontSize: 13, fontWeight: 400, color: '#666', textDecoration: 'none' }}>
                  Google Maps →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
