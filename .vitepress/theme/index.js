import EOX from "@eox/pages-theme-eox";
import "./custom.css";

// https://vitepress.dev/guide/custom-theme#theme-interface
/** @type {import('vitepress').Theme} */
export default {
  ...EOX,
  async enhanceApp({ app, router, siteData }) {
    EOX.enhanceApp({ app, router, siteData });
    
    if (!import.meta.env.SSR) {
      await import("@eodash/eodash/webcomponent");
      await import("@eox/storytelling");
      await import("@eox/itemfilter");
    }
  },
};

