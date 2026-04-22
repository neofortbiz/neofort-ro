import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['ro', 'en', 'uk'],
  defaultLocale: 'ro',
  localePrefix: 'always',
});
