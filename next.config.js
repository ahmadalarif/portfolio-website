// next.config.js
/**
 * @type {import('next').NextConfig}
 */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n, // This will spread the i18n configuration from next-i18next.config.js
};

module.exports = nextConfig;