import Image from 'next/image';
import ContactForm from '../../../components/ContactForm';

const BASE = 'https://www.neofort.ro';
const F = "'Helvetica Neue', Helvetica, Arial, sans-serif";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isRo = locale === 'ro';
  return {
    title: isRo ? 'Contact NEOFORT | Bucuresti' : 'Contact NEOFORT | Bucharest',
    description: isRo
      ? 'Contactati NEOFORT pentru consultanta imobiliara, tamplarie PVC si aluminiu, crowdfunding si finantare.'
      : 'Contact NEOFORT for real estate consultancy, PVC and aluminium carpentry, crowdfunding and financing.',
    alternates: {
      canonical: `${BASE}/${locale}/contact`,
      languages: { ro: `${BASE}/ro/contact`, en: `${BASE}/en/contact`, 'x-default': `${BASE}/ro/contact` },
    },
    robots: { index: true, follow: true },
  };
}

export default async function ContactPage({ params }) {
  const { locale } = await params;
  const isRo = locale === 'ro';

  const carduri = [
    {
      title: isRo ? 'CONSULTANTA IMOBILIARA' : 'REAL ESTATE CONSULTANCY',
      img: '/images/Consultanta_Imobiliara.avif',
      imgAlt: 'NEOFORT Consultanta Imobiliara',
      href: 'mailto:info@neofort-biz.ro',
    },
    {
      title: isRo ? 'CROWDFUNDING' : 'CROWDFUNDING',
      img: '/images/NEOFORT_CROWDFUNDING.avif',
      imgAlt: 'NEOFORT Crowdfunding',
      href: 'mailto:dan.calutu@neofort-biz.ro',
    },
    {
      title: isRo ? 'CONSTRUCTIE SI PROIECTARE' : 'CONSTRUCTION & DESIGN',
      img: '/images/Neofort_constructie_si_proiectare.avif',
      imgAlt: 'NEOFORT Constructie si Proiectare',
      href: 'mailto:office@neofort-biz.ro',
    },
    {
      title: isRo ? 'CREDITARE BANCARA SI NEBANCARA' : 'BANK & NON-BANK FINANCING',
      img: '/images/Finantare_bancara_si_nebancara.avif',
      imgAlt: 'NEOFORT Creditare Bancara',
      href: 'mailto:office@neofort-biz.ro',
    },
    {
      title: isRo ? 'TAMPLARIE ALUMINIU SI TERMOPANE PVC' : 'ALUMINIUM & PVC CARPENTRY',
      img: '/images/TAMPLARIE_Aluminiu_si_TERMOPANE_PVC.avif',
      imgAlt: 'NEOFORT Tamplarie',
      href: 'https://www.neofort-biz.ro/ro',
    },
  ];

  return (
    <div style={{ background: '#e8f1f2', minHeight: '100vh' }}>

      {/* Titlu + intro centrat */}
      <div style={{ maxWidth: 980, margin: '0 auto', padding: '80px 20px 60px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: F, fontSize: 20, fontWeight: 300, color: '#1a1a1a', letterSpacing: '0.08em', marginBottom: 30 }}>
          {isRo ? 'CONTACTATI UN REPREZENTANT NEOFORT' : 'CONTACT A NEOFORT REPRESENTATIVE'}
        </h1>
        <p style={{ fontFamily: F, fontSize: 14, fontWeight: 300, color: '#1a1a1a', lineHeight: 1.9, maxWidth: 860, margin: '0 auto 16px' }}>
          {isRo
            ? 'Neofort este un brand asociat cu mai multe domenii de activitate. In aceasta sectiune puteti contacta direct un reprezentant in functie de specificul informatiei solicitate. Prin aceasta sectiune incercam sa devenim mai operativi in receptionarea solicitarilor dumneavoastra.'
            : 'Neofort is a brand associated with multiple fields of activity. In this section you can directly contact a representative depending on the specific information requested.'}
        </p>
        <p style={{ fontFamily: F, fontSize: 14, fontWeight: 300, color: '#1a1a1a' }}>
          <a href="tel:+40215280660" style={{ color: '#1a1a1a', textDecoration: 'none' }}>+4021528060</a>
          {'    '}
          <a href="tel:+40215280661" style={{ color: '#1a1a1a', textDecoration: 'none' }}>+40215280661</a>
        </p>
      </div>

      {/* Carduri landscape — imagine sus, titlu + buton Contact jos pe fond alb */}
      <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 20px 60px', display: 'flex', flexDirection: 'column', gap: 0 }}>
        {carduri.map((card, i) => (
          <div key={i} style={{ background: '#fff', marginBottom: 2 }}>
            {/* Imagine landscape */}
            <div style={{ position: 'relative', width: '100%', height: 374 }}>
              <Image
                src={card.img}
                alt={card.imgAlt}
                fill
                loading={i < 2 ? 'eager' : 'lazy'}
                sizes="980px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            {/* Titlu + buton */}
            <div style={{ padding: '24px 30px', textAlign: 'center' }}>
              <h2 style={{ fontFamily: F, fontSize: 15, fontWeight: 300, color: '#1a1a1a', letterSpacing: '0.08em', marginBottom: 20 }}>
                {card.title}
              </h2>
              <a
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'inline-block',
                  padding: '10px 32px',
                  border: '1px solid #1a1a1a',
                  fontFamily: F,
                  fontSize: 13,
                  fontWeight: 300,
                  color: '#1a1a1a',
                  letterSpacing: '0.05em',
                  borderRadius: 100,
                  textDecoration: 'none',
                }}
              >
                Contact
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Formular */}
      <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 20px 0' }}>
        <p style={{ fontFamily: F, fontSize: 13, fontWeight: 300, color: '#1a1a1a', marginBottom: 30 }}>
          Sediu - Str. Theodor Aman Pictor 11, sector 1, Bucuresti. Tel. +4021528060 +04758090904 +40759030999 +40752443435
        </p>
        <ContactForm locale={locale} />
      </div>

      {/* Harta */}
      <div style={{ maxWidth: 980, margin: '40px auto 0', padding: '0 20px' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8534!2d26.09192!3d44.43562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff3b5e9f9f9f%3A0x6c8c8c8c8c8c8c8c!2s11+Strada+Theodor+Aman+Pictor%2C+Bucure%C8%99ti+010776!5e0!3m2!1sro!2sro!4v1714000000000"
          width="100%"
          height="360"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="NEOFORT locatie harta"
        />
      </div>

      <div style={{ paddingBottom: 80 }} />

    </div>
  );
}
