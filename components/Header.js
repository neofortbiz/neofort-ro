'use client';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '../i18n/navigation';
import { useState } from 'react';
import Image from 'next/image';

const FLAG_LABELS = { ro: 'Română', en: 'English', uk: 'Українська' };
const F = "'Helvetica Neue', Helvetica, Arial, sans-serif";

export default function Header({ locale }) {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/servicii', label: t('servicii') },
    { href: '/despre-noi', label: locale === 'ro' ? 'Despre Noi' : locale === 'uk' ? 'Про нас' : 'About' },
    { href: '/contact', label: t('contact') },
  ];

  const otherLocales = ['ro', 'en', 'uk'].filter(l => l !== locale);

  return (
    <header style={{ background: '#fff', borderBottom: '1px solid #efefef', position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: 980, margin: '0 auto', padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <Link href="/" locale={locale} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
          <Image src="/images/Neofort.avif" alt="NEOFORT" width={48} height={48} priority style={{ objectFit: 'contain' }} />
          <div>
            <div style={{ fontFamily: F, fontSize: 18, fontWeight: 700, color: '#1a1a1a', letterSpacing: '0.08em', lineHeight: 1.2 }}>NEOFORT</div>
            <div style={{ fontFamily: F, fontSize: 10, color: '#4a4a4a', letterSpacing: '0.02em', fontWeight: 300 }}>
              {locale === 'ro' ? 'constructii · consultanta · crowdfunding' : locale === 'uk' ? 'будівництво · консалтинг' : 'construction · consultancy'}
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }} className="desktop-nav">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} locale={locale} style={{ fontFamily: F, fontSize: 14, color: pathname === href ? '#1a1a1a' : '#4a4a4a', fontWeight: pathname === href ? 500 : 300, letterSpacing: '0.03em', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              {label}
            </Link>
          ))}
          <div style={{ display: 'flex', gap: 6 }}>
            {otherLocales.map(l => (
              <Link key={l} href={pathname} locale={l} aria-label={FLAG_LABELS[l]} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, textDecoration: 'none' }}>
                <img src={`/flags/${l}.svg`} alt={FLAG_LABELS[l]} width={30} height={20} style={{ display: 'block', borderRadius: 2, border: '1px solid #e0e0e0' }} />
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile: drapele + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="mobile-nav">
          {otherLocales.map(l => (
            <Link key={l} href={pathname} locale={l} aria-label={FLAG_LABELS[l]} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, textDecoration: 'none' }}>
              <img src={`/flags/${l}.svg`} alt={FLAG_LABELS[l]} width={26} height={17} style={{ display: 'block', borderRadius: 2, border: '1px solid #e0e0e0' }} />
            </Link>
          ))}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'flex', flexDirection: 'column', gap: 5 }}
          >
            <span style={{ display: 'block', width: 24, height: 2, background: '#1a1a1a', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ display: 'block', width: 24, height: 2, background: '#1a1a1a', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: 24, height: 2, background: '#1a1a1a', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div style={{ background: '#fff', borderTop: '1px solid #efefef', padding: '8px 0 16px' }} className="mobile-menu">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              locale={locale}
              onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '14px 20px', fontFamily: F, fontSize: 15, color: pathname === href ? '#1a1a1a' : '#4a4a4a', fontWeight: pathname === href ? 500 : 300, textDecoration: 'none', borderBottom: '1px solid #f5f5f5' }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-nav { display: none !important; }
        .mobile-menu { display: block; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
