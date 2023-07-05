import "./src/constants/environment-variables/index.mjs";

/** @type {import("next").NextConfig} */
const nextConfiguration = {
  distDir: "build",
  eslint: {
    dirs: ["pages", "components", "src", "cypress"],
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  reactStrictMode: true,
};

export default nextConfiguration;
