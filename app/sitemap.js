const BASE = 'https://www.neofort.ro';
const LOCALES = ['ro', 'en'];

const PATHS = {
  '/': { ro: '/', en: '/' },
  '/servicii': { ro: '/servicii', en: '/services' },
  '/contact': { ro: '/contact', en: '/contact' },
};

export default function sitemap() {
  const entries = [];

  for (const [key, paths] of Object.entries(PATHS)) {
    for (const locale of LOCALES) {
      const path = paths[locale];
      entries.push({
        url: `${BASE}/${locale}${path === '/' ? '' : path}`,
        lastModified: new Date(),
        changeFrequency: key === '/' ? 'weekly' : 'monthly',
        priority: key === '/' ? 1.0 : 0.8,
        alternates: {
          languages: {
            ro: `${BASE}/ro${paths.ro === '/' ? '' : paths.ro}`,
            en: `${BASE}/en${paths.en === '/' ? '' : paths.en}`,
          },
        },
      });
    }
  }

  return entries;
}
