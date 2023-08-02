// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */

import "./src/env.mjs";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["@acme/api"],
  // We already do linting on GH actions
  eslint: {
    ignoreDuringBuilds: !!process.env.CI,
  },
};

export default config;
