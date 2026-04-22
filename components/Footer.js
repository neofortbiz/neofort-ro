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

        {/* Social media icons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 20 }}>
          <a href="https://www.facebook.com/profile.php?id=100067676927533" target="_blank" rel="noopener noreferrer" aria-label="Facebook NEOFORT" style={{ color: '#1a1a1a', textDecoration: 'none', opacity: 0.7 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="https://ro.linkedin.com/company/neofort-biz" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn NEOFORT" style={{ color: '#1a1a1a', textDecoration: 'none', opacity: 0.7 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/neofortimobiliare" target="_blank" rel="noopener noreferrer" aria-label="Instagram NEOFORT" style={{ color: '#1a1a1a', textDecoration: 'none', opacity: 0.7 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
        </div>

        <p style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: 12, fontWeight: 300, color: '#555' }}>
          ©2025 NEOFORT BUCURESTI
        </p>
      </div>
    </footer>
  );
}
