export default function sitemap() {
    return [
      {
        url: 'https://easygrantz.com',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
      {
        url: 'https://easygrantz.com/grants',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: 'https://easygrantz.com/microloans',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: 'https://easygrantz.com/contact',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
      },
    ]
  }