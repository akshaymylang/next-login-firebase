const runtimeCaching = require('next-pwa/cache');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
}

const withPWA = require("next-pwa")({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public',
  // customWorkerDir: 'serviceworker',
  runtimeCaching,
  skipWaiting: true
});

module.exports = withPWA(nextConfig)
