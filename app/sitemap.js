const BASE = 'https://www.neofort.ro';

export default function sitemap() {
  const pages = [
    { ro: '', en: '', priority: 1.0, changeFrequency: 'weekly' },
    { ro: '/servicii', en: '/services', priority: 0.8, changeFrequency: 'monthly' },
    { ro: '/contact', en: '/contact', priority: 0.8, changeFrequency: 'monthly' },
    { ro: '/gdpr', en: '/gdpr', priority: 0.3, changeFrequency: 'yearly' },
  ];

  const entries = [];
  for (const page of pages) {
    entries.push({
      url: `${BASE}/ro${page.ro}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          ro: `${BASE}/ro${page.ro}`,
          en: `${BASE}/en${page.en}`,
        },
      },
    });
    entries.push({
      url: `${BASE}/en${page.en}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          ro: `${BASE}/ro${page.ro}`,
          en: `${BASE}/en${page.en}`,
        },
      },
    });
  }
  return entries;
}
