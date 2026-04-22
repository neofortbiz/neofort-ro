'use client';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '../i18n/navigation';
import { useState } from 'react';
import Image from 'next/image';

export default function Header({ locale }) {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const otherLocale = locale === 'ro' ? 'en' : 'ro';
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/servicii', label: t('servicii') },
    { href: '/despre-noi', label: isRo ? 'Despre Noi' : 'About' },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <header style={{
      background: '#fff',
      borderBottom: '1px solid #efefef',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div style={{
        maxWidth: 980,
        margin: '0 auto',
        padding: '14px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link href="/" locale={locale} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Image
            src="/images/Neofort.avif"
            alt="NEOFORT"
            width={64}
            height={64}
            style={{ objectFit: 'contain' }}
          />
          <div>
            <div style={{
              fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
              fontSize: 20,
              fontWeight: 700,
              color: '#1a1a1a',
              letterSpacing: '0.08em',
              lineHeight: 1.2,
            }}>
              NEOFORT
            </div>
            <div style={{
              fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
              fontSize: 11,
              color: '#4a4a4a',
              letterSpacing: '0.03em',
              fontWeight: 300,
            }}>
              {locale === 'ro' ? 'constructii · consultanta · crowdfunding' : 'construction · consultancy · crowdfunding'}
            </div>
          </div>
        </Link>

        {/* Nav desktop */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              locale={locale}
              style={{
                fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                fontSize: 14,
                color: pathname === href ? '#1a1a1a' : '#4a4a4a',
                fontWeight: pathname === href ? 500 : 300,
                letterSpacing: '0.03em',
                transition: 'color 0.2s',
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href={pathname}
            locale={otherLocale}
            style={{
              fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
              fontSize: 12,
              color: '#4a4a4a',
              border: '1px solid #ccc',
              padding: '4px 10px',
              borderRadius: 3,
              letterSpacing: '0.05em',
              fontWeight: 400,
            }}
          >
            {otherLocale.toUpperCase()}
          </Link>
        </nav>
      </div>
    </header>
  );
}
