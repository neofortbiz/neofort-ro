import { useTranslations } from 'next-intl';
import { Link } from '../i18n/navigation';

export default function Footer({ locale }) {
  const t = useTranslations('footer');
  const isRo = locale === 'ro';

  return (
    <footer role="contentinfo">

      {/* Sectiunea Program — fundal aqua */}
      <div style={{
        background: '#e8f1f2',
        padding: '56px 20px 52px',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
          fontSize: 14,
          fontWeight: 600,
          color: '#1a1a1a',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: 24,
        }}>
          {isRo ? 'Program' : 'Schedule'}
        </h2>

        <p style={{
          fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
          fontSize: 14,
          fontWeight: 300,
          color: '#4a4a4a',
          lineHeight: 1.9,
          marginBottom: 36,
        }}>
          {isRo ? 'Luni-Vineri: 10.00 - 18.00' : 'Monday-Friday: 10:00 - 18:00'}<br />
          {isRo ? 'Sambata - Duminica: Inchis' : 'Saturday - Sunday: Closed'}
        </p>

        {/* Butoane GDPR */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
          <Link
            href="/gdpr"
            locale={locale}
            style={{
              display: 'inline-block',
              padding: '12px 28px',
              border: '1px solid #1a1a1a',
              fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
              fontSize: 13,
              fontWeight: 400,
              color: '#1a1a1a',
              letterSpacing: '0.04em',
              borderRadius: 100,
              textDecoration: 'none',
              background: 'transparent',
            }}
          >
            {isRo ? 'Politica GDPR' : 'Privacy Policy'}
          </Link>
          <Link
            href="/cookies"
            locale={locale}
            style={{
              display: 'inline-block',
              padding: '12px 28px',
              background: '#1a1a1a',
              fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
              fontSize: 13,
              fontWeight: 400,
              color: '#fff',
              letterSpacing: '0.04em',
              borderRadius: 100,
              textDecoration: 'none',
              border: '1px solid #1a1a1a',
            }}
          >
            {isRo ? 'Politica Cookies' : 'Cookie Policy'}
          </Link>
        </div>
      </div>

      {/* Sectiunea Contact — fundal alb */}
      <div style={{
        background: '#fff',
        borderTop: '1px solid #efefef',
        padding: '36px 20px 28px',
        textAlign: 'center',
      }}>
        <a
          href="tel:+40215280660"
          style={{
            display: 'block',
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            fontSize: 14,
            fontWeight: 300,
            color: '#1a1a1a',
            textDecoration: 'none',
            marginBottom: 8,
          }}
        >
          {t('tel')}
        </a>

        <address style={{
          fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
          fontSize: 13,
          fontWeight: 300,
          color: '#4a4a4a',
          fontStyle: 'normal',
          lineHeight: 1.7,
          marginBottom: 20,
        }}>
          11 Strada Theodor Aman Pictor<br />
          {isRo ? 'Bucuresti, 010776' : 'Bucharest, 010776'}<br />
          Romania
        </address>

        <p style={{
          fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
          fontSize: 12,
          fontWeight: 300,
          color: '#999',
        }}>
          {t('copyright')}
        </p>
      </div>

    </footer>
  );
}
