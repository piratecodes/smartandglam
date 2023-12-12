/** @type {import('next-sitemap').IConfig} */

const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;
module.exports = {
    siteUrl,
    generateRobotsTxt: true, // (optional)
    sourceDir: '.next',
    robotsTxtOptions: {
      policies: [
        {
          userAgent: "*",
          disallow: ["/404", "/500"],
        },
        { userAgent: "*", allow: "/" },
      ],
      additionalSitemaps: [
        `${siteUrl}/sitemap.xml`,
        // `${siteUrl}/server-sitemap.xml`,
      ],
    },
    // ...other options
  }