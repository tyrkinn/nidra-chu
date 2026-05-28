import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg"],
      manifest: {
        name: "Нидра — йога глубокого покоя",
        short_name: "Нидра",
        description:
          "Минималистичное приложение для практик йога-нидры: ведённые сессии расслабления с иллюстрациями.",
        theme_color: "#2d2740",
        background_color: "#f5efe6",
        display: "standalone",
        orientation: "portrait",
        start_url: "/",
        lang: "ru",
        icons: [
          {
            src: "icon-192.svg",
            sizes: "192x192",
            type: "image/svg+xml",
            purpose: "any maskable",
          },
          {
            src: "icon-512.svg",
            sizes: "512x512",
            type: "image/svg+xml",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,woff2}"],
      },
    }),
  ],
});
