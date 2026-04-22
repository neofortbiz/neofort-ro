const BASE = 'https://www.neofort.ro';

export default function sitemap() {
  const pages = [
    { ro: '', en: '', uk: '', priority: 1.0, changeFrequency: 'weekly' },
    { ro: '/servicii', en: '/services', uk: '/servicii', priority: 0.8, changeFrequency: 'monthly' },
    { ro: '/despre-noi', en: '/despre-noi', uk: '/despre-noi', priority: 0.7, changeFrequency: 'monthly' },
    { ro: '/contact', en: '/contact', uk: '/contact', priority: 0.8, changeFrequency: 'monthly' },
    { ro: '/gdpr', en: '/gdpr', uk: '/gdpr', priority: 0.3, changeFrequency: 'yearly' },
  ];

  const entries = [];
  for (const page of pages) {
    for (const [loc, path] of [['ro', page.ro], ['en', page.en], ['uk', page.uk]]) {
      entries.push({
        url: `${BASE}/${loc}${path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: {
            ro: `${BASE}/ro${page.ro}`,
            en: `${BASE}/en${page.en}`,
            uk: `${BASE}/uk${page.uk}`,
          },
        },
      });
    }
  }
  return entries;
}
