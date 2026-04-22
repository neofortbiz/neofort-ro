import { Link } from '../i18n/navigation';

export default function Footer({ locale }) {
  const isRo = locale === 'ro';
  const isUk = locale === 'uk';

  const program = isRo
    ? { title: 'Program', lv: 'Luni-Vineri: 10:00 - 18:00', sd: 'Sambata - Duminica: Inchis', gdpr: 'Politica GDPR', cookies: 'Politica Cookies' }
    : isUk
    ? { title: 'Графік роботи', lv: 'Понеділок-П\'ятниця: 10:00 - 18:00', sd: 'Субота - Неділя: Зачинено', gdpr: 'Політика конфіденційності', cookies: 'Політика Cookies' }
    : { title: 'Schedule', lv: 'Monday-Friday: 10:00 - 18:00', sd: 'Saturday - Sunday: Closed', gdpr: 'Privacy Policy', cookies: 'Cookie Policy' };

  const city = isRo ? 'Bucuresti' : isUk ? 'Бухарест' : 'Bucharest';
  const country = isUk ? 'Румунія' : 'Romania';

  return (
    <footer role="contentinfo">
      <div style={{ background: '#e8f1f2', padding: '56px 20px 52px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: 14, fontWeight: 600, color: '#1a1a1a', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 24 }}>
          {program.title}
        </h2>
        <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: 14, fontWeight: 300, color: '#1a1a1a', lineHeight: 1.9, marginBottom: 36 }}>
          {program.lv}<br />{program.sd}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
          <Link href="/gdpr" locale={locale} style={{ display: 'inline-block', padding: '12px 28px', border: '1px solid #1a1a1a', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: 13, fontWeight: 400, color: '#1a1a1a', letterSpacing: '0.04em', borderRadius: 100, textDecoration: 'none', background: 'transparent' }}>
            {program.gdpr}
          </Link>
          <Link href="/cookies" locale={locale} style={{ display: 'inline-block', padding: '12px 28px', background: '#1a1a1a', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: 13, fontWeight: 400, color: '#fff', letterSpacing: '0.04em', borderRadius: 100, textDecoration: 'none', border: '1px solid #1a1a1a' }}>
            {program.cookies}
          </Link>
        </div>
      </div>

      <div style={{ background: '#fff', borderTop: '1px solid #efefef', padding: '36px 20px 28px', textAlign: 'center' }}>
        <a href="tel:+40215280660" style={{ display: 'block', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: 14, fontWeight: 300, color: '#1a1a1a', textDecoration: 'none', marginBottom: 8 }}>
          +40215280660 / +40215280661
        </a>
        <address style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: 13, fontWeight: 300, color: '#4a4a4a', fontStyle: 'normal', lineHeight: 1.7, marginBottom: 20 }}>
          11 Strada Theodor Aman Pictor<br />
          {city}, 010776<br />
          {country}
        </address>
        <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: 12, fontWeight: 300, color: '#555' }}>
          ©2025 NEOFORT BUCURESTI
        </p>
      </div>
    </footer>
  );
}
