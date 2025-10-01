---
layout: page
---

<script setup>

import { onMounted, ref } from 'vue';
import { withBase } from 'vitepress';

if (!import.meta.env.SSR) {
    if(window && !customElements.get('eox-map')) import("@eox/map");
    if(window && !customElements.get('eox-storytelling')) import("@eox/storytelling");
    if(window && !customElements.get('eox-jsonform')) import("@eox/jsonform");
    if (window) import("@eox/map/src/plugins/advancedLayersAndSources");
}

const storyurl = ref('')

onMounted(() => {
    let storyfile;
    if (window && typeof window !== 'undefined' && 'URLSearchParams' in window) {
        const searchParams = new URLSearchParams(window.location.search);
        storyfile = searchParams.get('id');
        storyurl.value = `https://eopf-explorer.github.io/narratives/${storyfile}.md`;
    }
})
</script>

<eox-storytelling 
    show-nav
    v-if="storyurl" 
    :markdown-url="storyurl"
    class="full-width"
    style="transform: translateY(var(--vp-nav-height)); margin-top: calc(var(--vp-nav-height) * -1 - 90px - 48px); margin-bottom: var(--vp-nav-height);"
>
</eox-storytelling>
