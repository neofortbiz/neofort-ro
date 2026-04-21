import { getTranslations } from 'next-intl/server';

const BASE = 'https://www.neofort.ro';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isRo = locale === 'ro';
  return {
    title: isRo ? 'Politica de Confidentialitate | NEOFORT' : 'Privacy Policy | NEOFORT',
    description: isRo
      ? 'Politica de confidentialitate si protectia datelor cu caracter personal — NEOFORT.'
      : 'Privacy policy and personal data protection — NEOFORT.',
    alternates: {
      canonical: `${BASE}/${locale}/gdpr`,
      languages: { ro: `${BASE}/ro/gdpr`, en: `${BASE}/en/gdpr`, 'x-default': `${BASE}/ro/gdpr` },
    },
    robots: { index: false, follow: false },
  };
}

const H2 = ({ children }) => (
  <h2 style={{
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    fontSize: 20,
    fontWeight: 500,
    color: '#1a1a1a',
    marginBottom: 12,
    marginTop: 36,
    letterSpacing: '0.03em',
  }}>{children}</h2>
);

const P = ({ children }) => (
  <p style={{
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    fontSize: 15,
    fontWeight: 300,
    color: '#4a4a4a',
    lineHeight: 1.8,
    marginBottom: 12,
  }}>{children}</p>
);

export default async function GdprPage({ params }) {
  const { locale } = await params;
  const isRo = locale === 'ro';

  return (
    <>
      <section style={{ background: '#1a1a1a', padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{
          fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
          fontSize: 36,
          fontWeight: 300,
          color: '#fff',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}>
          {isRo ? 'Politica de Confidentialitate' : 'Privacy Policy'}
        </h1>
        <p style={{ color: '#e3d0a8', fontSize: 14, marginTop: 8, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
          {isRo ? 'Ultima actualizare: Aprilie 2025' : 'Last updated: April 2025'}
        </p>
      </section>

      <section style={{ background: '#fff', padding: '48px 20px 80px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          {isRo ? (
            <>
              <P>Societatea NEOFORT BIZ SRL, cu sediul in Str. Theodor Aman Pictor 11, sector 1, Bucuresti, este operatorul datelor dumneavoastra cu caracter personal in conformitate cu Regulamentul (UE) 2016/679 (GDPR) si Legea nr. 190/2018.</P>

              <H2>1. Datele colectate</H2>
              <P>Prin intermediul formularului de contact colectam urmatoarele date: nume si prenume, adresa de email, numar de telefon, subiect si continutul mesajului. Aceste date sunt colectate exclusiv in scopul raspunderii la solicitarile dumneavoastra.</P>

              <H2>2. Scopul prelucrarii</H2>
              <P>Datele colectate sunt utilizate pentru: raspunderea la solicitari si intrebari, trimiterea de informatii despre proiectele si serviciile noastre (cu acordul dumneavoastra), indeplinirea obligatiilor contractuale si legale.</P>

              <H2>3. Temeiul juridic</H2>
              <P>Prelucrarea datelor se bazeaza pe: consimtamantul dumneavoastra expres (art. 6 alin. 1 lit. a GDPR), executarea unui contract sau masuri precontractuale (art. 6 alin. 1 lit. b GDPR), obligatii legale (art. 6 alin. 1 lit. c GDPR).</P>

              <H2>4. Durata pastrarii datelor</H2>
              <P>Datele dumneavoastra sunt pastrate pe durata necesara indeplinirii scopurilor pentru care au fost colectate, dar nu mai mult de 3 ani de la ultima interactiune, cu exceptia cazurilor in care legea prevede altfel.</P>

              <H2>5. Drepturile dumneavoastra</H2>
              <P>Conform GDPR, beneficiati de urmatoarele drepturi: dreptul de acces la date, dreptul la rectificare, dreptul la stergere ("dreptul de a fi uitat"), dreptul la restrictionarea prelucrarii, dreptul la portabilitatea datelor, dreptul la opozitie, dreptul de a nu face obiectul unei decizii automate.</P>
              <P>Pentru exercitarea acestor drepturi, ne puteti contacta la: office@neofort.ro sau la adresa sediului nostru.</P>

              <H2>6. Securitatea datelor</H2>
              <P>Implementam masuri tehnice si organizatorice adecvate pentru protejarea datelor dumneavoastra impotriva accesului neautorizat, modificarii, dezvaluirii sau distrugerii.</P>

              <H2>7. Cookie-uri</H2>
              <P>Site-ul nostru foloseste exclusiv cookie-uri tehnice necesare functionarii corecte. Nu folosim cookie-uri de tracking, publicitate sau analiza fara consimtamantul dumneavoastra explicit.</P>

              <H2>8. Reclamatii</H2>
              <P>Daca considerati ca datele dumneavoastra au fost prelucrate in mod ilegal, aveti dreptul de a depune o plangere la Autoritatea Nationala de Supraveghere a Prelucrarii Datelor cu Caracter Personal (ANSPDCP): www.dataprotection.ro</P>
            </>
          ) : (
            <>
              <P>NEOFORT BIZ SRL, headquartered at 11 Theodor Aman Pictor St., sector 1, Bucharest, is the controller of your personal data in accordance with Regulation (EU) 2016/679 (GDPR).</P>

              <H2>1. Data Collected</H2>
              <P>Through the contact form we collect: full name, email address, phone number, subject and message content. This data is collected exclusively for the purpose of responding to your requests.</P>

              <H2>2. Purpose of Processing</H2>
              <P>The data collected is used for: responding to requests and inquiries, sending information about our projects and services (with your consent), fulfilling contractual and legal obligations.</P>

              <H2>3. Legal Basis</H2>
              <P>Data processing is based on: your explicit consent (Art. 6(1)(a) GDPR), performance of a contract (Art. 6(1)(b) GDPR), legal obligations (Art. 6(1)(c) GDPR).</P>

              <H2>4. Data Retention</H2>
              <P>Your data is retained for the period necessary to fulfill the purposes for which it was collected, but no longer than 3 years from the last interaction, unless the law provides otherwise.</P>

              <H2>5. Your Rights</H2>
              <P>Under GDPR, you have the following rights: right of access, right to rectification, right to erasure, right to restriction of processing, right to data portability, right to object, right not to be subject to automated decision-making.</P>
              <P>To exercise these rights, contact us at: office@neofort.ro or at our registered address.</P>

              <H2>6. Data Security</H2>
              <P>We implement appropriate technical and organizational measures to protect your data against unauthorized access, modification, disclosure or destruction.</P>

              <H2>7. Cookies</H2>
              <P>Our website uses only technical cookies necessary for correct operation. We do not use tracking, advertising or analytics cookies without your explicit consent.</P>

              <H2>8. Complaints</H2>
              <P>If you believe your data has been processed unlawfully, you have the right to lodge a complaint with the relevant supervisory authority in your country.</P>
            </>
          )}
        </div>
      </section>
    </>
  );
}
