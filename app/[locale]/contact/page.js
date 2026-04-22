import ContactForm from '../../../components/ContactForm';

const BASE = 'https://www.neofort.ro';
const F = "'Helvetica Neue', Helvetica, Arial, sans-serif";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isRo = locale === 'ro';
  return {
    title: isRo ? 'Contact NEOFORT | Bucuresti' : 'Contact NEOFORT | Bucharest',
    description: isRo
      ? 'Contactati NEOFORT pentru consultanta imobiliara, tamplarie PVC si aluminiu, crowdfunding si finantare. Str. Theodor Aman Pictor 11, sector 1, Bucuresti.'
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

  return (
    <div style={{ background: '#e8f1f2', minHeight: '100vh' }}>

      {/* Sectiunea cu titlu, text, adresa, formular */}
      <div style={{ maxWidth: 980, margin: '0 auto', padding: '60px 20px 0' }}>

        {/* Titlu aliniat stanga */}
        <h1 style={{
          fontFamily: F,
          fontSize: 20,
          fontWeight: 300,
          color: '#1a1a1a',
          letterSpacing: '0.05em',
          marginBottom: 30,
        }}>
          {isRo ? 'CONTACTATI UN REPREZENTANT NEOFORT' : 'CONTACT A NEOFORT REPRESENTATIVE'}
        </h1>

        {/* Text intro */}
        <p style={{ fontFamily: F, fontSize: 14, fontWeight: 300, color: '#1a1a1a', lineHeight: 1.9, marginBottom: 10, maxWidth: 860 }}>
          {isRo
            ? 'Neofort este un brand asociat cu mai multe domenii de activitate. In aceasta sectiune puteti contacta direct un reprezentant in functie de specificul informatiei solicitate. Prin aceasta sectiune incercam sa devenim mai operativi in receptionarea solicitarilor dumneavoastra.'
            : 'Neofort is a brand associated with multiple fields of activity. In this section you can directly contact a representative depending on the specific information requested.'}
        </p>

        {/* Adresa + telefoane pe un rand */}
        <p style={{ fontFamily: F, fontSize: 13, fontWeight: 300, color: '#1a1a1a', lineHeight: 1.8, marginBottom: 40 }}>
          {isRo
            ? 'Sediu - Str. Theodor Aman Pictor 11, sector 1, Bucuresti.'
            : 'Headquarters - 11 Theodor Aman Pictor St., sector 1, Bucharest.'}
          {' '}Tel.{' '}
          <a href="tel:+40215280660" style={{ color: '#1a1a1a', textDecoration: 'none', fontWeight: 300 }}>+4021528060</a>
          {'  '}
          <a href="tel:+40758090904" style={{ color: '#1a1a1a', textDecoration: 'none', fontWeight: 300 }}>+04758090904</a>
          {'  '}
          <a href="tel:+40759030999" style={{ color: '#1a1a1a', textDecoration: 'none', fontWeight: 300 }}>+40759030999</a>
          {'  '}
          <a href="tel:+40752443435" style={{ color: '#1a1a1a', textDecoration: 'none', fontWeight: 300 }}>+40752443435</a>
        </p>

        {/* Formular */}
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

      {/* Program centrat */}
      <div style={{ textAlign: 'center', padding: '60px 20px 80px' }}>
        <h2 style={{
          fontFamily: F,
          fontSize: 18,
          fontWeight: 300,
          color: '#1a1a1a',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: 20,
        }}>
          PROGRAM
        </h2>
        <p style={{ fontFamily: F, fontSize: 14, fontWeight: 300, color: '#1a1a1a', lineHeight: 2 }}>
          {isRo ? 'Luni-Vineri: 10.00 - 18.00' : 'Monday-Friday: 10:00 - 18:00'}<br />
          {isRo ? 'Sambata - Duminica: Inchis' : 'Saturday - Sunday: Closed'}
        </p>
      </div>

    </div>
  );
}
