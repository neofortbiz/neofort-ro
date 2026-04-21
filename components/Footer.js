import { useTranslations } from 'next-intl';
import { Link } from '../i18n/navigation';

export default function Footer({ locale }) {
  const t = useTranslations('footer');
  const isRo = locale === 'ro';

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/servicii', label: isRo ? 'Servicii' : 'Services' },
    { href: '/contact', label: 'Contact' },
    { href: '/gdpr', label: isRo ? 'Confidentialitate' : 'Privacy' },
  ];

  return (
    <footer
      role="contentinfo"
      style={{ background: '#111', color: '#e0e0e0' }}
    >
      {/* Main footer */}
      <div style={{
        maxWidth: 980,
        margin: '0 auto',
        padding: '56px 20px 40px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: 48,
      }}>

        {/* Col 1 — Brand */}
        <div>
          <div style={{
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            fontSize: 22,
            fontWeight: 600,
            color: '#e3d0a8',
            letterSpacing: '0.1em',
            marginBottom: 12,
          }}>
            NEOFORT
          </div>
          <p style={{
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            fontSize: 13,
            fontWeight: 300,
            color: '#bbb',
            lineHeight: 1.7,
            marginBottom: 20,
          }}>
            {isRo
              ? 'Grup de companii cu activitati in constructii, imobiliare si furnizare tamplarie PVC si aluminiu.'
              : 'Group of companies active in construction, real estate and PVC and aluminium carpentry supply.'}
          </p>
          <div style={{
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            fontSize: 12,
            color: '#888',
            lineHeight: 1.6,
          }}>
            {isRo ? 'Experienta din 2004' : 'Experience since 2004'}
          </div>
        </div>

        {/* Col 2 — Contact */}
        <div>
          <div style={{
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            fontSize: 11,
            fontWeight: 600,
            color: '#e0e0e0',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: 20,
          }}>
            {isRo ? 'Contact' : 'Contact'}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a
              href="tel:+40215280660"
              style={{
                fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                fontSize: 14,
                color: '#e0e0e0',
                fontWeight: 300,
                textDecoration: 'none',
              }}
            >
              +40 215 280 660
            </a>
            <a
              href="tel:+40215280661"
              style={{
                fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                fontSize: 14,
                color: '#bbb',
                fontWeight: 300,
                textDecoration: 'none',
              }}
            >
              +40 215 280 661
            </a>
            <a
              href="mailto:office@neofort.ro"
              style={{
                fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                fontSize: 14,
                color: '#bbb',
                fontWeight: 300,
                textDecoration: 'none',
              }}
            >
              office@neofort.ro
            </a>
            <address style={{
              fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
              fontSize: 13,
              color: '#999',
              fontStyle: 'normal',
              fontWeight: 300,
              lineHeight: 1.6,
              marginTop: 4,
            }}>
              Str. Theodor Aman Pictor 11<br />
              Sector 1, Bucuresti 010776<br />
              Romania
            </address>
          </div>
        </div>

        {/* Col 3 — Links + Program */}
        <div>
          <div style={{
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            fontSize: 11,
            fontWeight: 600,
            color: '#e0e0e0',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: 20,
          }}>
            {isRo ? 'Navigare' : 'Navigation'}
          </div>
          <nav aria-label={isRo ? 'Navigare footer' : 'Footer navigation'}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  locale={locale}
                  style={{
                    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                    fontSize: 14,
                    fontWeight: 300,
                    color: '#bbb',
                    textDecoration: 'none',
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>
          <div style={{
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            fontSize: 11,
            fontWeight: 600,
            color: '#e0e0e0',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: 12,
          }}>
            {isRo ? 'Program' : 'Hours'}
          </div>
          <div style={{
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            fontSize: 13,
            fontWeight: 300,
            color: '#bbb',
            lineHeight: 1.7,
          }}>
            {isRo ? 'Luni — Vineri: 10:00 — 18:00' : 'Mon — Fri: 10:00 — 18:00'}<br />
            <span style={{ color: '#888' }}>{isRo ? 'Sambata — Duminica: Inchis' : 'Sat — Sun: Closed'}</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid #222' }}>
        <div style={{
          maxWidth: 980,
          margin: '0 auto',
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 8,
        }}>
          <span style={{
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            fontSize: 12,
            fontWeight: 300,
            color: '#666',
          }}>
            {t('copyright')}
          </span>
          <span style={{
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            fontSize: 12,
            fontWeight: 300,
            color: '#666',
          }}>
            {isRo ? 'Toate drepturile rezervate' : 'All rights reserved'}
          </span>
        </div>
      </div>
    </footer>
  );
}
