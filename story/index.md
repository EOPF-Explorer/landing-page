---
layout: page
---

<script setup>

import { onMounted, ref } from 'vue';
import { withBase } from 'vitepress';
import { useData } from 'vitepress';

const { theme } = useData();

if (!import.meta.env.SSR) {
    if(window && !customElements.get('eox-map')) import("@eox/map");
    if(window && !customElements.get('eox-storytelling')) import("@eox/storytelling");
    if(window && !customElements.get('eox-jsonform')) import("@eox/jsonform");
    if (window) import("@eox/map/src/plugins/advancedLayersAndSources");
}

/**
 * Patch: enable setStyle() for WebGLTile layers during eox-map tour step transitions.
 *
 * eox-map's updateLayer (generate.js) only calls setStyle for Vector/VectorTile.
 * When a tour step reuses a WebGLTile layer by id but changes the style, the new
 * style is stored in _jsonDefinition but never applied to the OL layer.
 *
 * This hook intercepts the `layers` setter on every <eox-map> and, after the
 * normal update runs, iterates the map's layers and calls setStyle() on any
 * WebGLTile layer whose current style differs from the definition.
 *
 * TODO: remove once https://github.com/EOX-A/EOxElements merges the upstream fix.
 */
function patchWebGLTileStyle() {
  if (import.meta.env.SSR) return;
  customElements.whenDefined("eox-map").then(() => {
    const EoxMapClass = customElements.get("eox-map");
    const proto = EoxMapClass.prototype;
    const desc = Object.getOwnPropertyDescriptor(proto, "layers")
               || Object.getOwnPropertyDescriptor(EoxMapClass, "layers");
    if (!desc || !desc.set) return;

    const origSet = desc.set;
    desc.set = function (newLayers) {
      origSet.call(this, newLayers);
      // After the normal setter runs, fix WebGLTile styles
      if (!this.map) return;
      this.map.getLayers().forEach((olLayer) => {
        const def = olLayer.get("_jsonDefinition");
        if (def?.type !== "WebGLTile" || !def.style) return;
        if (typeof olLayer.setStyle === "function") {
          try {
            const current = JSON.stringify(olLayer.getStyle?.());
            const wanted = JSON.stringify(def.style);
            if (current !== wanted) {
              olLayer.setStyle(def.style);
            }
          } catch (_) { /* style not comparable, skip */ }
        }
      });
    };
    Object.defineProperty(proto, "layers", desc);
  });
}
patchWebGLTileStyle();

const storyurl = ref('')

onMounted(() => {
    let storyfile;
    if (window && typeof window !== 'undefined' && 'URLSearchParams' in window) {
        const searchParams = new URLSearchParams(window.location.search);
        storyfile = searchParams.get('id');
        // Load from local public/narratives/ folder for testing
        storyurl.value = withBase(`/narratives/${storyfile}.md`);
    }
})
</script>

<eox-storytelling 
    show-nav
    v-if="storyurl" 
    :markdown-url="storyurl"
    class="full-width"
    style="transform: translateY(var(--vp-nav-height)); margin-top: calc(var(--vp-nav-height) * -1 - 90px - 48px); margin-bottom: var(--vp-nav-height);">
</eox-storytelling>
<br/>
<!-- logos section -->
<p style="text-align:start">
Consortium <a style="display:inline" href="https://developmentseed.org/" target="_blank"><img :src="withBase('/media/devseed-logo.svg')" style="width:8.5rem; padding:1rem;display:inline; "/></a> <a style="display:inline;" href="https://eox.at/" target="_blank"> <img style="width:8.5rem; padding:1rem; display:inline; " :src="withBase('/media/EOX-logo.svg')"/></a>
</p>
