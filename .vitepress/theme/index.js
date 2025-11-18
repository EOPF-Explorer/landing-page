//@ts-expect-error does not export types
import EOX from "@eox/pages-theme-eox";
import "./custom.css";

/** @type {import('vitepress').Theme} */
export default {
  ...EOX,
  async enhanceApp({ app, router, siteData }) {
    EOX.enhanceApp({ app, router, siteData });
    //@ts-expect-error special vitepress property
    if (!import.meta.env.SSR) {
      await import("@eodash/eodash/webcomponent");
      await import("@eox/storytelling");
      await import("@eox/layout");
      await import("@eox/itemfilter");
      await import("@eox/map/src/plugins/advancedLayersAndSources");
      await import("@eox/chart");
      await import("@eox/jsonform");
      await import("@eox/layercontrol");
    }
  },
};
