import { defineConfig } from "astro/config";

const configuredSite = process.env.PUBLIC_SITE_URL?.trim();
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  output: "static",
  ...(isGitHubPages
    ? {
        site: "https://diegolapitz.github.io",
        base: "/entrena-con-lorena",
      }
    : {}),
  devToolbar: {
    enabled: false,
  },
  ...(configuredSite ? { site: configuredSite } : {}),
  vite: {
    build: {
      cssMinify: true,
      emptyOutDir: true,
    },
  },
});
