/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
}

module.exports = {
  // nextConfig,
  i18n: {
    locales: ['en-US', 'es-pe', 'pt-br'],

    defaultLocale: 'es-pe'
  }
}
