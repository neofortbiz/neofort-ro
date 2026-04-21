export const locales = ['ro', 'en'];
export const defaultLocale = 'ro';
export const localePrefix = 'always';

export const pathnames = {
  '/': '/',
  '/servicii': {
    ro: '/servicii',
    en: '/services',
  },
  '/contact': {
    ro: '/contact',
    en: '/contact',
  },
  '/gdpr': {
    ro: '/gdpr',
    en: '/gdpr',
  },
};

export const routing = {
  locales,
  defaultLocale,
  localePrefix,
  pathnames,
};
