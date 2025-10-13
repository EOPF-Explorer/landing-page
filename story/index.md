---
layout: page
footer: false
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
<br/>
<!-- logos section -->
<p style="text-align:start">
powered by <a style="display:inline" href="https://developmentseed.org/" target="_blank"><img :src="withBase('/media/devseed-logo.svg')" style="width:8.5rem; padding:1rem;display:inline; "/></a> <a style="display:inline;" href="https://eox.at/" target="_blank"> <img style="width:8.5rem; padding:1rem; display:inline; " :src="withBase('/media/EOX-logo.svg')"/></a>
</p>

<footer class="full-width large-padding" style="background: #003047">
  <div class="holder large-padding vertical-margin large-margin small-text">
    <div class="grid white-text">
      <div class="s12 m6 l3">
        <img :src="theme.logo.dark" style="max-height: 36px" />
        <p class="alt-text right-padding">The Earth Observation Processor Framework (EOPF) Sentinel Zarr Explorer is funded by the European Space Agency through the Copernicus Space Component programme.</p>
      </div>
      <div class="s12 m6 l3">
        <h6>Menu</h6>
        <p v-for="nav in theme.nav"><a :href="nav.link" class="link">{{nav.text}}</a></p>
      </div>
      <div class="s12 m6 l3">
        <h6>Credits</h6>
        <p><a href="https://www.esa.int/" target="_blank" class="link">European Space Agency (ESA)</a></p>
        <p><a href="https://explorer.eopf.copernicus.eu/image-credits/" target="_blank" class="link">Image and Video Credits</a></p>
        <p><a href="https://explorer.eopf.copernicus.eu/privacy-policy/" target="_blank" class="link">Privacy Policy</a></p>
      </div>
      <div class="s12 m6 l3">
        <h6>Useful links</h6>
        <p><a href="https://github.com/EOPF-Explorer" target="_blank" class="link">Our resources on GitHub</a></p>
        <p><a href="https://eopf-toolkit.github.io/eopf-101/" target="_blank" class="link">EOPF Toolkit</a></p>
        <p><a href="https://zarr.eopf.copernicus.eu/" target="_blank" class="link">EOPF Sentinel Zarr Samples</a></p>
      </div>
    </div>
    <LogoSection
      :logos='[
        {
          alt: "Programme of the European Union Logo",
          image: "/media/eu-logo-white.png",
          link: "https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/programmes",
        },
        {
          alt: "Copernicus Logo",
          image: "/media/copernicus-logo-white.png",
          link: "https://www.copernicus.eu/en",
        },
        {
          alt: "EOF Logo",
          image: "/media/eof-logo-white.png",
          link: "https://eof.esa.int/",
        },
        {
          alt: "ESA Co-funded Logo",
          image: "/media/esa-cofunded-white.png",
          link: "https://www.esa.int/",
        },
      ]'
      :baseHeight="6"
    />
  </div>
</footer>