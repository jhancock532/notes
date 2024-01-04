/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: { unoptimized: true },
  basePath: process.env.BUILD_ENV === 'local' ? '/notes' : undefined,
  sassOptions: {
    // allow all scss files access to these files
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@use "sass:math"; @use "variables" as *; @use "mixins" as *;`,
  },
};

module.exports = nextConfig;
