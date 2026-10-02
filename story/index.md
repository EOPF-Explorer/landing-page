---
layout: page
---

<script setup>

import { onMounted, ref } from 'vue';
import { withBase } from 'vitepress';
import { useData } from 'vitepress';
import { loadModule } from "../.vitepress/utils/load-module";

const { theme } = useData();

// Narratives embed maps (incl. GeoZarr layers) and forms inside the story
const storyModulesLoaded = Promise.all([
    loadModule(() => import("@eox/map"), "eox-map"),
    loadModule(() => import("@eox/map/src/plugins/advancedLayersAndSources")),
    loadModule(() => import("@eox/jsonform"), "eox-jsonform"),
    loadModule(() => import("@eox/storytelling"), "eox-storytelling"),
]);
const storytellingReady = ref(false);

const storyurl = ref('')

onMounted(async () => {
    storytellingReady.value = (await storyModulesLoaded).every(Boolean);
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
    v-if="storytellingReady && storyurl" 
    :markdown-url="storyurl"
    class="full-width"
    style="transform: translateY(var(--vp-nav-height)); margin-top: calc(var(--vp-nav-height) * -1 - 90px - 48px); margin-bottom: var(--vp-nav-height);"
>
</eox-storytelling>
<br/>
<!-- logos section -->
<p style="text-align:start">
Consortium <a style="display:inline" href="https://developmentseed.org/" target="_blank"><img :src="withBase('/media/devseed-logo.svg')" style="width:8.5rem; padding:1rem;display:inline; "/></a><a style="display:inline;" href="https://eox.at/" target="_blank"> <img style="width:8.5rem; padding:1rem; display:inline; " :src="withBase('/media/EOX-logo.svg')"/></a><a style="display:inline;" href="https://thrivegeo.com/" target="_blank"> <img style="width:8.5rem; padding:1rem; display:inline; " :src="withBase('/media/thrivegeo-logo.png')"/></a>
</p>
