import { getTranslations } from 'next-intl/server';

const BASE = 'https://www.neofort.ro';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isRo = locale === 'ro';
  return {
    title: isRo ? 'Servicii | NEOFORT' : 'Services | NEOFORT',
    description: isRo
      ? 'Serviciile NEOFORT — consultanță imobiliară, management proiecte rezidențiale, tâmplărie PVC și aluminiu, crowdfunding.'
      : 'NEOFORT services — real estate consultancy, residential project management, PVC and aluminium carpentry, crowdfunding.',
    alternates: {
      canonical: `${BASE}/${locale}/${locale === 'ro' ? 'servicii' : 'services'}`,
      languages: {
        ro: `${BASE}/ro/servicii`,
        en: `${BASE}/en/services`,
        'x-default': `${BASE}/ro/servicii`,
      },
    },
  };
}

export default async function ServiciiPage({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'servicii' });

  const services = [
    {
      title: locale === 'ro' ? 'Consultanță Imobiliară' : 'Real Estate Consultancy',
      text: locale === 'ro'
        ? 'Studii de fezabilitate, management de proiect și consultanță în toate etapele dezvoltării imobiliare.'
        : 'Feasibility studies, project management and consultancy at all stages of real estate development.',
    },
    {
      title: locale === 'ro' ? 'Vânzări Rezidențiale' : 'Residential Sales',
      text: locale === 'ro'
        ? 'Reprezentarea și vânzarea ansamblurilor rezidențiale aflate în construcție sau finalizate.'
        : 'Representation and sale of residential complexes under construction or completed.',
    },
    {
      title: locale === 'ro' ? 'Tâmplărie PVC & Aluminiu' : 'PVC & Aluminium Carpentry',
      text: locale === 'ro'
        ? 'Furnizare și montaj de tâmplărie PVC, aluminiu, sisteme de umbrire și automatizări.'
        : 'Supply and installation of PVC, aluminium carpentry, shading systems and automations.',
    },
    {
      title: locale === 'ro' ? 'Crowdfunding Imobiliar' : 'Real Estate Crowdfunding',
      text: locale === 'ro'
        ? 'Soluții de finanțare inovative pentru proiecte rezidențiale prin crowdfunding.'
        : 'Innovative financing solutions for residential projects through crowdfunding.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#1a1a1a', padding: '80px 20px 60px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'brandon-grot-w01-light, sans-serif', fontSize: 48, fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {t('title')}
        </h1>
        <p style={{ fontFamily: 'avenir-lt-w01_35-light1475496, sans-serif', fontSize: 18, color: '#e3d0a8', marginTop: 16 }}>
          {t('subtitle')}
        </p>
      </section>

      {/* Services list */}
      <section style={{ background: '#fff', padding: '60px 20px' }}>
        <div style={{ maxWidth: 940, margin: '0 auto', display: 'grid', gap: 32 }}>
          {services.map((s, i) => (
            <div key={i} style={{ borderBottom: '1px solid #f0f0f0', paddingBottom: 32 }}>
              <h2 style={{ fontFamily: 'brandon-grot-w01-light, sans-serif', fontSize: 28, color: '#1a1a1a', marginBottom: 12, textTransform: 'uppercase' }}>
                {s.title}
              </h2>
              <p style={{ fontFamily: 'avenir-lt-w01_35-light1475496, sans-serif', fontSize: 17, color: '#4a4a4a', lineHeight: 1.7 }}>
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
