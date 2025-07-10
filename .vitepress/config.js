import { defineConfig } from "vitepress";
import baseConfig from "@eox/pages-theme-eox/config";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: baseConfig("eopf"),
  // Change the page config here
  base: "/landing-page/",
  themeConfig: {
    nav: [
      { text: "Documentation", link: "#" },
      { text: "Support", link: "#" },
      {
        text: "Primary action",
        link: "#",
        action: "primary",
      },
    ],
  },
});
