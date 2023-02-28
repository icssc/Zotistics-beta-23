const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Permissions-Policy",
    value: "",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self' 'unsafe-eval'; " +
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.googletagmanager.com ; " +
      "connect-src 'self' api.peterportal.org vitals.vercel-insights.com *.google-analytics.com *.analytics.google.com *.googletagmanager.com; " +
      "style-src 'self' 'unsafe-inline' fonts.googleapis.com; " +
      "font-src fonts.gstatic.com; " +
      "img-src 'self' *.google-analytics.com *.googletagmanager.com data:;",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
          /** @type {import('@mdx-js/loader').Options} */
          options: {},
        },
      ],
    });

    return config;
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
