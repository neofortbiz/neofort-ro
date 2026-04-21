import { getTranslations } from 'next-intl/server';

const BASE = 'https://www.neofort.ro';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isRo = locale === 'ro';
  return {
    title: isRo ? 'Politica GDPR | NEOFORT' : 'GDPR Policy | NEOFORT',
    description: isRo
      ? 'Politica de confidențialitate și protecția datelor cu caracter personal — NEOFORT.'
      : 'Privacy policy and personal data protection — NEOFORT.',
    alternates: {
      canonical: `${BASE}/${locale}/gdpr`,
      languages: {
        ro: `${BASE}/ro/gdpr`,
        en: `${BASE}/en/gdpr`,
        'x-default': `${BASE}/ro/gdpr`,
      },
    },
    robots: { index: false, follow: false },
  };
}

export default async function GdprPage({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'gdpr' });
  const isRo = locale === 'ro';

  return (
    <>
      <section style={{ background: '#1a1a1a', padding: '80px 20px 60px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'brandon-grot-w01-light, sans-serif', fontSize: 40, fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {t('title')}
        </h1>
      </section>

      <section style={{ background: '#fff', padding: '60px 20px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', fontFamily: 'avenir-lt-w01_35-light1475496, sans-serif', fontSize: 15, color: '#4a4a4a', lineHeight: 1.8 }}>
          {isRo ? (
            <>
              <h2 style={{ fontFamily: 'brandon-grot-w01-light, sans-serif', fontSize: 22, color: '#1a1a1a', marginBottom: 16, marginTop: 32 }}>
                1. Identitatea operatorului
              </h2>
              <p>
                NEOFORT BIZ SRL, cu sediul în Str. Theodor Aman Pictor 11, sector 1, București,
                prelucrează datele dumneavoastră cu caracter personal în conformitate cu Regulamentul (UE) 2016/679 (GDPR).
              </p>
              <h2 style={{ fontFamily: 'brandon-grot-w01-light, sans-serif', fontSize: 22, color: '#1a1a1a', marginBottom: 16, marginTop: 32 }}>
                2. Datele colectate
              </h2>
              <p>
                Prin intermediul formularului de contact colectăm: nume, adresă de email, număr de telefon, subiect și mesaj.
                Aceste date sunt utilizate exclusiv pentru a răspunde solicitărilor dumneavoastră.
              </p>
              <h2 style={{ fontFamily: 'brandon-grot-w01-light, sans-serif', fontSize: 22, color: '#1a1a1a', marginBottom: 16, marginTop: 32 }}>
                3. Drepturile dumneavoastră
              </h2>
              <p>
                Aveți dreptul de acces, rectificare, ștergere, restricționare a prelucrării, portabilitate
                și opoziție. Pentru exercitarea acestor drepturi ne puteți contacta la: office@neofort.ro
              </p>
              <h2 style={{ fontFamily: 'brandon-grot-w01-light, sans-serif', fontSize: 22, color: '#1a1a1a', marginBottom: 16, marginTop: 32 }}>
                4. Cookies
              </h2>
              <p>
                Site-ul folosește cookie-uri tehnice necesare funcționării. Nu folosim cookie-uri de tracking
                sau publicitate fără consimțământul dumneavoastră explicit.
              </p>
            </>
          ) : (
            <>
              <h2 style={{ fontFamily: 'brandon-grot-w01-light, sans-serif', fontSize: 22, color: '#1a1a1a', marginBottom: 16, marginTop: 32 }}>
                1. Data Controller Identity
              </h2>
              <p>
                NEOFORT BIZ SRL, headquartered at 11 Theodor Aman Pictor St., sector 1, Bucharest,
                processes your personal data in accordance with Regulation (EU) 2016/679 (GDPR).
              </p>
              <h2 style={{ fontFamily: 'brandon-grot-w01-light, sans-serif', fontSize: 22, color: '#1a1a1a', marginBottom: 16, marginTop: 32 }}>
                2. Data Collected
              </h2>
              <p>
                Through the contact form we collect: name, email address, phone number, subject and message.
                This data is used exclusively to respond to your requests.
              </p>
              <h2 style={{ fontFamily: 'brandon-grot-w01-light, sans-serif', fontSize: 22, color: '#1a1a1a', marginBottom: 16, marginTop: 32 }}>
                3. Your Rights
              </h2>
              <p>
                You have the right of access, rectification, erasure, restriction of processing, portability
                and objection. To exercise these rights contact us at: office@neofort.ro
              </p>
              <h2 style={{ fontFamily: 'brandon-grot-w01-light, sans-serif', fontSize: 22, color: '#1a1a1a', marginBottom: 16, marginTop: 32 }}>
                4. Cookies
              </h2>
              <p>
                This site uses technical cookies necessary for operation. We do not use tracking
                or advertising cookies without your explicit consent.
              </p>
            </>
          )}
        </div>
      </section>
    </>
  );
}
