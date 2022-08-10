module.exports = {
  reactStrictMode: true,
  redirects: async () => [
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'www.blanchardinternational.co.in' }],
      destination: 'https://blanchardinternational.co.in/:path*',
      permanent: true
    },
    {
      source: '/blog/accelerate-the-growth-of-your-organization-by-practising-important-coaching-skills',
      destination: '/accelerate-the-growth-of-your-organization-by-practising-important-coaching-skills',
      permanent: true,
    },

    {
      source: '/blog/how-can-your-personal-development-impact-your-organization',
      destination: '/how-can-your-personal-development-impact-your-organization',
      permanent: true,
    },

    {
      source: '/blog/serving-customers-at-a-higher-level-using-the-care-model',
      destination: '/serving-customers-at-a-higher-level-using-the-care-model',
      permanent: true,
    },

    {
      source: '/blog/what-to-look-for-when-choosing-a-leadership-training-program',
      destination: '/what-to-look-for-when-choosing-a-leadership-training-program',
      permanent: true,
    },

    {
      source: '/events-workshops/program-experience-webinar1/',
      destination: '/events-workshops',
      permanent: true,
    }

  ]
}
