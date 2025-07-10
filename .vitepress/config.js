import { defineConfig } from "vitepress";
import baseConfig from "@eox/pages-theme-eox/config";

export default defineConfig({
  extends: baseConfig("eopf"),
  // Change the page config here
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
