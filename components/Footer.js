import { useTranslations } from 'next-intl';
import { Link } from '../i18n/navigation';

export default function Footer({ locale }) {
  const t = useTranslations('footer');

  return (
    <footer style={{ background: '#111', color: '#e0e0e0', paddingTop: 48, paddingBottom: 24 }}>
      <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 20px' }}>
        {/* Top row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, marginBottom: 32, justifyContent: 'center' }}>
          {/* Brand */}
          <div style={{ minWidth: 200 }}>
            <div style={{ fontFamily: 'brandon-grot-w01-light, sans-serif', fontSize: 20, fontWeight: 700, color: '#e3d0a8', marginBottom: 8, letterSpacing: '0.05em' }}>
              NEOFORT
            </div>
            <div style={{ fontFamily: 'avenir-lt-w01_35-light1475496, sans-serif', fontSize: 13, color: '#bbb', lineHeight: 1.6 }}>
              construcții · consultanță · crowdfunding
            </div>
          </div>

          {/* Contact */}
          <div style={{ minWidth: 200 }}>
            <div style={{ fontFamily: 'avenir-lt-w01_35-light1475496, sans-serif', fontSize: 14, color: '#e0e0e0', marginBottom: 8 }}>
              {t('tel')}
            </div>
            <div style={{ fontFamily: 'avenir-lt-w01_35-light1475496, sans-serif', fontSize: 13, color: '#bbb', lineHeight: 1.7 }}>
              {t('adresa')}
            </div>
          </div>

          {/* Links */}
          <div style={{ minWidth: 160, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Link href="/" locale={locale} style={{ fontFamily: 'avenir-lt-w01_35-light1475496, sans-serif', fontSize: 13, color: '#bbb' }}>Home</Link>
            <Link href="/servicii" locale={locale} style={{ fontFamily: 'avenir-lt-w01_35-light1475496, sans-serif', fontSize: 13, color: '#bbb' }}>Servicii</Link>
            <Link href="/contact" locale={locale} style={{ fontFamily: 'avenir-lt-w01_35-light1475496, sans-serif', fontSize: 13, color: '#bbb' }}>Contact</Link>
            <Link href="/gdpr" locale={locale} style={{ fontFamily: 'avenir-lt-w01_35-light1475496, sans-serif', fontSize: 13, color: '#bbb' }}>GDPR</Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid #222', paddingTop: 16, textAlign: 'center' }}>
          <span style={{ fontFamily: 'avenir-lt-w01_35-light1475496, sans-serif', fontSize: 13, color: '#999' }}>
            {t('copyright')}
          </span>
        </div>
      </div>
    </footer>
  );
}
