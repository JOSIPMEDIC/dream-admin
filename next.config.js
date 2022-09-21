/** @type {import('next').NextConfig} */
const withLess = require('next-with-less');

const nextConfig = withLess({
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_API_URL: 'https://jsonplaceholder.typicode.com/',
    NEXT_FACULTY_CODE: 0,
  },
});

module.exports = nextConfig;
