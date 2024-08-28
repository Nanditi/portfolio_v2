import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import UnoCSS from "unocss/astro";
import mdx from "@astrojs/mdx";
import embeds from "astro-embed/integration";

// https://astro.build/config
export default defineConfig({
  // used to generate images
  site: 'https://nanditi.com',
  trailingSlash: "ignore",
  integrations: [
    sitemap(),
    UnoCSS({
      injectReset: true,
    }),
    embeds({
      services: {
        LinkPreview: false,
      },
    }),
    mdx(),
  ],
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
});
