'use client';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '../i18n/navigation';
import { useState } from 'react';

export default function Header({ locale }) {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const otherLocale = locale === 'ro' ? 'en' : 'ro';

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/servicii', label: t('servicii') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <header style={{ background: '#fff', borderBottom: '1px solid #f0f0f0' }}>
      <div style={{ maxWidth: 980, margin: '0 auto', padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link href="/" locale={locale}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: 'brandon-grot-w01-light, sans-serif', fontSize: 22, fontWeight: 700, color: '#1a1a1a', letterSpacing: '0.05em' }}>
              NEOFORT
            </span>
            <span style={{ fontFamily: 'avenir-lt-w01_35-light1475496, sans-serif', fontSize: 12, color: '#4a4a4a', letterSpacing: '0.03em' }}>
              construcții · consultanță · crowdfunding
            </span>
          </div>
        </Link>

        {/* Nav desktop */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              locale={locale}
              style={{
                fontFamily: 'avenir-lt-w01_35-light1475496, sans-serif',
                fontSize: 14,
                color: pathname === href ? '#1a1a1a' : '#4a4a4a',
                fontWeight: pathname === href ? 600 : 400,
                transition: 'color 0.2s',
              }}
            >
              {label}
            </Link>
          ))}
          {/* Lang switcher */}
          <Link
            href={pathname}
            locale={otherLocale}
            style={{
              fontFamily: 'avenir-lt-w01_35-light1475496, sans-serif',
              fontSize: 12,
              color: '#4a4a4a',
              border: '1px solid #e3d0a8',
              padding: '3px 8px',
              borderRadius: 3,
              letterSpacing: '0.05em',
            }}
          >
            {otherLocale.toUpperCase()}
          </Link>
        </nav>
      </div>
    </header>
  );
}
