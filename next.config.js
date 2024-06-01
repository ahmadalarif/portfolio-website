/**
 * @type {import('next').NextConfig}
 */
const { i18n } = require("./next-i18next.config");

const { localePath, ...nextI18n } = i18n;


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: nextI18n,
};



module.exports = nextConfig
