//@ts-expect-error does not export types
import EOX from "@eox/pages-theme-eox";
import "./custom.css";
import EOPFFooter from "../components/EOPFFooter.vue";
import CookieToggles from "../components/CookieToggles.vue";
import { resolveStacItemRedirect } from "../utils/redirects";

/** @type {import('vitepress').Theme} */
export default {
  ...EOX,
  async enhanceApp({ app, router, siteData }) {
    EOX.enhanceApp({ app, router, siteData });
    // replace the default footer with EOPFFooter
    // eslint-disable-next-line vue/no-reserved-component-names
    app.component("Footer", EOPFFooter);
    app.component("CookieToggles", CookieToggles);

    if (!import.meta.env.SSR) {
      // redirect items eopf-explorer link
      const stacRedirect = resolveStacItemRedirect(window.location.pathname);
      if (stacRedirect) {
        window.location.replace(stacRedirect);
        return;
      }

      // Monkey patch customElements.define to prevent "already defined" errors
      const originalDefine = customElements.define;
      customElements.define = function (name, constructor, options) {
        if (!customElements.get(name)) {
          originalDefine.call(customElements, name, constructor, options);
        }
      };

      await import("@eodash/eodash/webcomponent");
      await import("@eox/storytelling");
      await import("@eox/layout");
      await import("@eox/itemfilter");
      await import("@eox/map");
      await import("@eox/map/src/plugins/globe");
      await import("@eox/map/src/plugins/advancedLayersAndSources");
      await import("@eox/chart");
      await import("@eox/jsonform");
      await import("@eox/layercontrol");
    }
  },
};
