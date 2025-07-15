import { defineConfig } from "vitepress";
import baseConfig from "@eox/pages-theme-eox/config";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: baseConfig("eopf"),
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (el) => el.includes("-"),
      },
    },
  },
  // Change the page config here
  base: "/landing-page/",
  themeConfig: {
    nav: [
      { text: "Data Model", link: "/foo" },
      { text: "Browse Sentinels", link: "/sentinelexplorer" },
    ],
  },
});
