import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['ro', 'en'],
  defaultLocale: 'ro',
  localePrefix: 'always',
  pathnames: {
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
  },
});
