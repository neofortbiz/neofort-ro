'use client';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '../i18n/navigation';
import { useState } from 'react';
import Image from 'next/image';

const FLAG_LABELS = {
  ro: 'Română',
  en: 'English',
  uk: 'Українська',
};

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

        <Link href="/" locale={locale} style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <Image
            src="/images/Neofort.avif"
            alt="NEOFORT"
            width={64}
            height={64}
            priority
            style={{ objectFit: 'contain' }}
          />
          <div>
            <div style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: 20, fontWeight: 700, color: '#1a1a1a', letterSpacing: '0.08em', lineHeight: 1.2 }}>
              NEOFORT
            </div>
            <div style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: 11, color: '#4a4a4a', letterSpacing: '0.03em', fontWeight: 300 }}>
              {locale === 'ro' ? 'constructii · consultanta · crowdfunding' : locale === 'uk' ? 'будівництво · консалтинг · краудфандинг' : 'construction · consultancy · crowdfunding'}
            </div>
          </div>
        </Link>

        <nav aria-label="Navigare principala" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
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
                textDecoration: 'none',
              }}
            >
              {label}
            </Link>
          ))}

          {/* Drapele pentru switch limba */}
          <div style={{ display: 'flex', gap: 8 }} aria-label="Selectare limba">
            {otherLocales.map(l => (
              <Link
                key={l}
                href={pathname}
                locale={l}
                aria-label={FLAG_LABELS[l]}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 44,
                  height: 44,
                  textDecoration: 'none',
                }}
              >
                <img
                  src={`/flags/${l}.svg`}
                  alt={FLAG_LABELS[l]}
                  width={30}
                  height={20}
                  style={{ display: 'block', borderRadius: 2, border: '1px solid #e0e0e0' }}
                />
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
