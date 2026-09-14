import { defineConfig } from "astro/config";

const configuredSite = process.env.PUBLIC_SITE_URL?.trim();

export default defineConfig({
  output: "static",
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
