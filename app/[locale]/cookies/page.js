const BASE = 'https://www.neofort.ro';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isRo = locale === 'ro';
  return {
    title: isRo ? 'Politica Cookies | NEOFORT' : 'Cookie Policy | NEOFORT',
    description: isRo
      ? 'Politica de utilizare a cookie-urilor pe site-ul NEOFORT.'
      : 'Cookie usage policy on the NEOFORT website.',
    alternates: {
      canonical: `${BASE}/${locale}/cookies`,
      languages: { ro: `${BASE}/ro/cookies`, en: `${BASE}/en/cookies`, 'x-default': `${BASE}/ro/cookies` },
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

export default async function CookiesPage({ params }) {
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
          {isRo ? 'Politica Cookies' : 'Cookie Policy'}
        </h1>
        <p style={{ color: '#e3d0a8', fontSize: 14, marginTop: 8, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
          {isRo ? 'Ultima actualizare: Aprilie 2025' : 'Last updated: April 2025'}
        </p>
      </section>

      <section style={{ background: '#fff', padding: '48px 20px 80px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          {isRo ? (
            <>
              <P>Acest site foloseste cookie-uri in conformitate cu Regulamentul (UE) 2016/679 (GDPR), Legea nr. 506/2004 privind prelucrarea datelor cu caracter personal in sectorul comunicatiilor electronice si Legea nr. 190/2018. Prin continuarea navigarii pe acest site, acceptati utilizarea cookie-urilor in conditiile descrise mai jos.</P>

              <H2>1. Ce sunt cookie-urile?</H2>
              <P>Cookie-urile sunt fisiere text de mici dimensiuni pe care un site le stocheaza in browserul dumneavoastra atunci cand il vizitati. Acestea permit site-ului sa va recunoasca dispozitivul si sa retina anumite informatii despre preferintele sau actiunile dumneavoastra.</P>

              <H2>2. Ce tipuri de cookie-uri folosim?</H2>
              <P><strong>Cookie-uri strict necesare (tehnice):</strong> Sunt indispensabile pentru functionarea corecta a site-ului. Fara acestea, anumite functionalitati nu ar putea fi furnizate. Aceste cookie-uri nu necesita consimtamantul dumneavoastra conform art. 5 alin. (3) din Directiva 2002/58/CE.</P>
              <P><strong>Cookie-uri functionale:</strong> Permit site-ului sa retina alegerile dumneavoastra (de exemplu, limba preferata) pentru a va oferi o experienta imbunatatita. Stocarea acestora necesita consimtamantul dumneavoastra.</P>
              <P><strong>Cookie-uri analitice:</strong> Ne ajuta sa intelegem cum interactioneaza vizitatorii cu site-ul nostru, permitandu-ne sa imbunatatim continutul si functionalitatea. Aceste cookie-uri colecteaza date anonime sau pseudonimizate.</P>
              <P>In prezent, site-ul neofort.ro utilizeaza exclusiv cookie-uri tehnice strict necesare. Nu utilizam cookie-uri de publicitate comportamentala.</P>

              <H2>3. Cookie-uri specifice utilizate</H2>
              <P><strong>next-locale</strong> — retine preferinta de limba a utilizatorului (ro/en). Durata: sesiune. Tip: functional strict necesar.</P>
              <P><strong>__vercel_live_token</strong> — utilizat de infrastructura Vercel pentru gestionarea sesiunii de previzualizare. Durata: sesiune. Tip: tehnic.</P>

              <H2>4. Temeiul juridic</H2>
              <P>Utilizarea cookie-urilor strict necesare se bazeaza pe interesul legitim al operatorului conform art. 6 alin. (1) lit. f) GDPR, intrucat acestea sunt esentiale pentru furnizarea serviciului solicitat. Utilizarea oricaror alte tipuri de cookie-uri se bazeaza pe consimtamantul dumneavoastra explicit, conform art. 6 alin. (1) lit. a) GDPR.</P>

              <H2>5. Durata de stocare</H2>
              <P>Cookie-urile de sesiune sunt sterse automat la inchiderea browserului. Cookie-urile persistente raman pe dispozitivul dumneavoastra pentru perioada specificata la punctul 3.</P>

              <H2>6. Drepturile dumneavoastra</H2>
              <P>Aveti dreptul de a va retrage consimtamantul in orice moment, fara a afecta legalitatea prelucrarii efectuate anterior retragerii. Puteti controla si sterge cookie-urile direct din setarile browserului dumneavoastra. Retineti ca dezactivarea anumitor cookie-uri poate afecta functionarea site-ului.</P>

              <H2>7. Cum puteti controla cookie-urile</H2>
              <P>Majoritatea browserelor moderne va permit sa controlati cookie-urile prin setarile lor. Puteti seta browserul sa respinga cookie-urile, sa va notifice atunci cand sunt primite sau sa stergeti cookie-urile existente. Consultati documentatia browserului dumneavoastra pentru instructiuni specifice.</P>

              <H2>8. Modificari ale politicii</H2>
              <P>Ne rezervam dreptul de a actualiza aceasta politica periodic. Orice modificare va fi publicata pe aceasta pagina cu mentionarea datei ultimei actualizari. Va recomandam sa verificati periodic aceasta pagina.</P>

              <H2>9. Contact</H2>
              <P>Pentru orice intrebari legate de utilizarea cookie-urilor, ne puteti contacta la: office@neofort.ro sau la adresa: Str. Theodor Aman Pictor 11, sector 1, Bucuresti.</P>
              <P>Aveti de asemenea dreptul de a depune o plangere la Autoritatea Nationala de Supraveghere a Prelucrarii Datelor cu Caracter Personal (ANSPDCP): www.dataprotection.ro</P>
            </>
          ) : (
            <>
              <P>This website uses cookies in accordance with Regulation (EU) 2016/679 (GDPR) and applicable Romanian legislation. By continuing to browse this site, you accept the use of cookies under the conditions described below.</P>

              <H2>1. What are cookies?</H2>
              <P>Cookies are small text files that a website stores in your browser when you visit it. They allow the website to recognize your device and remember certain information about your preferences or actions.</P>

              <H2>2. Types of cookies we use</H2>
              <P><strong>Strictly necessary (technical) cookies:</strong> Essential for the correct functioning of the website. Without these, certain functionalities could not be provided. These cookies do not require your consent under Art. 5(3) of Directive 2002/58/EC.</P>
              <P><strong>Functional cookies:</strong> Allow the website to remember your choices (e.g., preferred language) to provide an improved experience. Their storage requires your consent.</P>
              <P><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website, allowing us to improve content and functionality. These cookies collect anonymous or pseudonymized data.</P>
              <P>Currently, neofort.ro uses only strictly necessary technical cookies. We do not use behavioral advertising cookies.</P>

              <H2>3. Specific cookies used</H2>
              <P><strong>next-locale</strong> — retains the user&apos;s language preference (ro/en). Duration: session. Type: strictly necessary functional.</P>
              <P><strong>__vercel_live_token</strong> — used by Vercel infrastructure for preview session management. Duration: session. Type: technical.</P>

              <H2>4. Legal basis</H2>
              <P>The use of strictly necessary cookies is based on the legitimate interest of the controller under Art. 6(1)(f) GDPR, as these are essential for providing the requested service. The use of any other types of cookies is based on your explicit consent under Art. 6(1)(a) GDPR.</P>

              <H2>5. Storage duration</H2>
              <P>Session cookies are automatically deleted when you close your browser. Persistent cookies remain on your device for the period specified in section 3.</P>

              <H2>6. Your rights</H2>
              <P>You have the right to withdraw your consent at any time without affecting the lawfulness of processing carried out prior to withdrawal. You can control and delete cookies directly from your browser settings.</P>

              <H2>7. How to control cookies</H2>
              <P>Most modern browsers allow you to control cookies through their settings. You can set your browser to reject cookies, notify you when cookies are received, or delete existing cookies. Consult your browser documentation for specific instructions.</P>

              <H2>8. Policy changes</H2>
              <P>We reserve the right to update this policy periodically. Any changes will be published on this page with the date of the last update.</P>

              <H2>9. Contact</H2>
              <P>For any questions regarding the use of cookies, you can contact us at: office@neofort.ro or at: 11 Theodor Aman Pictor St., sector 1, Bucharest, Romania.</P>
            </>
          )}
        </div>
      </section>
    </>
  );
}
