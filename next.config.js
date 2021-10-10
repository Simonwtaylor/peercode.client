/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // Will be available on both server and client
    apiURL: 'http://localhost:5001',
  },
}
