// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://home-services-geo.vercel.app/', // replace with your live domain
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 5000,
  outDir: './out', // must match your export folder for `output: 'export'`
  exclude: ['/api/*', '/404', '/500'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://home-services-geo.vercel.app/sitemap.xml', // replace with your actual domain
    ],
  },
};
