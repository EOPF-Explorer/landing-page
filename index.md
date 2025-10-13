---
layout: home
hero:
  text: EOPF Sentinel Zarr Explorer
  tagline: Cloud-native data access and visualisation for the Earth Observation Processor Framework
  # image:
  #   src: http://picsum.photos/800/600
  #   alt: Hero Image
  background: 
    src: /assets/globe-hero.jpg
    alt: Background Image
  actions:
    - theme: brand
      text: Explore Data
      link: /sentinelexplorer/?template=explore&indicator=sentinel-2-l2a
    - theme: brand
      text: Read Example Story
      link: /story/?id=ndvi
footer: false
---

<FeatureSection
  icon="monitor-screenshot"
  image="media/exploration-journey.png"
  landing
  tagline="Building Visualisation Capacity"
>

Cloud-native and visualisation-enhanced EOPF Sentinel products power many aspects of Earth observation data discovery and analysis. Begin by exploring data catalogs through standard clients like [STAC Browser](https://api.explorer.eopf.copernicus.eu/browser) that reveal Sentinel scenes at a glance.

To screen products more closely, you can [experiment](/sentinelexplorer/?template=explore&indicator=sentinel-2-l2a) with band combinations, color formulations, and custom arithmetic expressions to unlock spectral, polarization or any variables insights.

Sophisticated analysis workflows can be built from [openEO](https://openeo.org/) clients for prototyping, dynamic web maps with on-the-fly reprojection, and interactive time-series exploration.

Compelling [showcases](story/?id=ndvi) demonstrate real-world applications – from flood delineation and burnt area mapping to spectral indices and collaborative workspaces – all powered by cloud-native visualization technologies.
</FeatureSection>


<div class="story-wrapper">
<div class="story-col">

<h4> Dynamic Data Visualisation and Storytelling</h4>
<br>
<p>
Experience how EOPF Sentinel Zarr powers effortless exploration of Sentinel data and embedding of visualisations into stories and feature maps, straight from the products in cloud storage.
</p>
<!-- <button style="margin-top:20px">NDVI Story</button> -->
</div>

<div class="story-col" >
<client-only>
  <eox-itemfilter
    :items="items"
    titleProperty="title"
    imageProperty="image"
    subTitleProperty="subtitle"
    resultType="cards"
    @select="handleResultClick"
    style="--select-filter-max-items: 10;--_margin:0px;--card-height:25rem"
    class="large-margin bottom-margin"
  >
    <h6 slot="filterstitle" class="large large-margin vertical-margin top-padding"></h6>
    <h6 slot="resultstitle" class="large large-margin vertical-margin top-padding"></h6>
  </eox-itemfilter>
</client-only>
</div>
</div>

<div class="large-space"></div>


<FeatureSection
  icon="mdi-compass"
  image="media/cloudless.png"
  landing
  primaryButton="Open Explorer"
  primaryLink="/todo"
  tagline="Explore sentinel data in real time"
  title="Sentinels Browser"
>
Use the interactive viewer to explore Sentinel-1 radar or Sentinel-2 optical imagery. Change color maps, adjust contrast, and zoom in instantly- powered by Zarr dynamic tiling.
</FeatureSection>


<h4 class="center-align">Why Zarr</h4>
<Table
:headers="['Features', 'Zarr','SAFE']"
:data="tableData"/>

<div class="large-space"></div>


### Frequently Asked Questions
<br />
<details open>
  <summary>
    <p class="bold">+ What is EOPF?</p>
  </summary>
    <p class="small-text">The European Space Agency (ESA) is spearheading a significant modernization of its Earth observation data processing through the <a href="https://eopf.copernicus.eu/" target="_blank" class="link">Earth Observation Processor Framework (EOPF)</a> initiative. The initiative represents a fundamental shift away from traditional, download-based data processing pipelines and towards a more flexible and efficient cloud-based environment.</p>
</details>
<details>
  <summary>
    <p class="bold">+ What is Zarr?</p>
  </summary>
    <p class="small-text"><a href="https://zarr.dev/" target="_blank" class="link">Zarr</a> is a container format for storage of large N-dimensional typed arrays. The development of Zarr is motivated by the need for a simple, transparent, open, and community-driven format that supports high-throughput distributed I/O on different storage systems. </p>
</details>
<details>
  <summary>
    <p class="bold">+ What is GeoZarr?</p>
  </summary>
    <p class="small-text"><a href="https://github.com/zarr-developers/geozarr-spec" target="_blank" class="link">GeoZarr</a> is an emerging convention to represent geo-spatial data in the Zarr container format.</p>
</details>
<details>
  <summary>
    <p class="bold">+ What is Web-Optimized Zarr?</p>
  </summary>
    <p class="small-text"><a href="https://developmentseed.org/geozarr-examples/web-optimized-zarr.html" target="_blank" class="link">Web-optimized Zarr (WOZ)</a> provides a set of additional recommendations on top of the GeoZarr specification for optimal browser-based analysis and visualization. The specific recommendations are still under development.</p>
</details>
<details>
  <summary>
    <p class="bold">+ How are you engaged in open-source communities?</p>
  </summary>
    <p class="small-text">Technical contributors on our EOPF Sentinel Zarr Explorer are also actively engaged in the ongoing Zarr, GeoZarr and Web-Optimized Zarr community efforts and closely connected to other organisations that contribute. We seek to use the community-developed conventions as basis for our data model and thereby further their maturity and fitness for purpose.</p>
</details>
<details>
  <summary>
    <p class="bold">+ Will all EOPF Sentinel Zarr data be web-optimised?</p>
  </summary>
    <p class="small-text">The objective of this project is to demonstrate the benefits and prove the fitness for purpose of acessing Sentinel products as web-optimised Zarr. We hope that the success of our effort will drive a new value-added distribution format. Please follow our project for updates on our goals and outcome and share your questions and comments.</p>
</details>
<details>
  <summary>
    <p class="bold">+ How is this project related to the EOPF Sentinel Zarr Samples?</p>
  </summary>
    <p class="small-text">The <a href="https://zarr.eopf.copernicus.eu/" target="_blank" class="link">EOPF Sentinel Zarr Samples</a> platform provides reference Sentinels products in the harmonised EOPF data format.</p>
    <p class="small-text">We are closely following this reference, providing feedback based on our learning from review and client implementation, and using the sample products as a basis for our web-optimised version.</p>
</details>
<br />
<br />
<br />

<!-- logos section -->
<p style="text-align:start">
powered by <a style="display:inline" href="https://developmentseed.org/" target="_blank"><img :src="withBase('/media/devseed-logo.svg')" style="width:8.5rem; padding:1rem;display:inline; "/></a> <a style="display:inline;" href="https://eox.at/" target="_blank"> <img style="width:8.5rem; padding:1rem; display:inline; " :src="withBase('/media/EOX-logo.svg')"/></a>
</p>


<CTASection style="margin-bottom:0px"
  title="Join the discussion!"
  tagline="We welcome your feedback and contributions."
  primaryButton="Visit the EOPF Forum"
  primaryLink="https://discourse.eopf.copernicus.eu/"
  dark
/>

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

<script setup>
import Table from "./.vitepress/components/Table.vue"
import { useData } from 'vitepress';
import { ref, onMounted } from 'vue';
import { withBase, useRouter } from 'vitepress';
import { trackEvent } from "@eox/pages-theme-eox/src/helpers.js";

const { theme } = useData();

const router = useRouter();
const items = ref([]);

// disbaled for now, will be enabled when more stories are added
// const filterProps = [{
//   "keys": [
//     "title",
//     "subtitle",
//     "theme"
//   ],
//   "title": "By keyword",
//   "type": "text",
//   "placeholder": "Search in title or subtitle",
//   "expanded": true
// }, {
//   "key": 'theme',
//   "title": 'By theme',
//   expanded: true
// }
// ];

onMounted(async () => {
  try {
    const response = await fetch('https://eopf-explorer.github.io/narratives/narratives.json');
    const results = await response.json();
    results.forEach((res)=>{res.image = 'https://eopf-explorer.github.io/narratives/'+res.image});
    items.value = results;
  } catch (error) {
    console.error('Error fetching JSON:', error);
  }
});

// Click event handler
const handleResultClick = (evt) => {
  const sections = evt.detail.file.split("/");
  const filename = sections[sections.length-1].split(".")[0];
  trackEvent(['stories', 'select', filename]);
  router.go(withBase(`/story?id=${filename}`));
};
const tick = `<button class="transparent square"><img src="${withBase('/assets/checkmark.svg')}"/></button>`
const cross = `<button class="transparent square"><img src="${withBase('/assets/crossmark.svg')}"/></button>`

const tableData = [
  {
    summary: {
      'Features': 'Data Structure',
      'SAFE': cross,
      'Zarr': tick,
    },
    content: `Learn more: Sentinel SAFE format (SentiWiki) Zarr Documentation ,ESA EOPF GitHub – Data Model`,
  },
  {
    summary: {
      'Features': 'Access',
      'SAFE': cross,
      'Zarr': tick,
    },
    content: 'Detailed information about access methods and their implications...,',
  },
  {
    summary: {
      'Features': 'Performance',
      'SAFE': cross,
      'Zarr': tick,
    },
    content: 'Performance benchmarks and technical details...',
  },
  {
    summary: {
      'Features': 'Scalability',
      'SAFE': cross,
      'Zarr': tick,
    },
    content: 'Scalability comparison and use cases...',
  },
  {
    summary: {
      'Features': 'Metadata Handling',
      'SAFE': cross,
      'Zarr': tick,
    },
    content: 'Metadata structure examples and parsing information...',
  },
  {
    summary: {
      'Features': 'Cloud Readiness',
      'SAFE': cross,
      'Zarr': tick,
    },
    content: 'Cloud deployment strategies and best practices...',
  },
  {
    summary: {
      'Features': 'Visualization',
      'SAFE': cross,
      'Zarr': tick,
    },
    content: 'Visualization tools and integration examples...',
  },
  {
    summary: {
      'Features': 'Interoperability',
      'SAFE': cross,
      'Zarr': tick,
    },
    content: 'Integration examples and ecosystem compatibility...',
  }
]
</script>
<style>
  eox-itemfilter {
    --form-flex-direction: row;
    --filter-display:none
  }
  @media (max-width: 768px) {
    eox-itemfilter {
      --form-flex-direction: column;
      --filter-display:none
    }
  }
.story-wrapper {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.story-col {
  flex: 1;
  flex-direction: auto;
  align-items: center;
  justify-content: flex-start;
}

@media (max-width: 768px) {
  .story-wrapper {
    flex-direction: column;
  }
  
  .story-col {
    width: 100%;
    margin-bottom: 0;
  }
}

@media (max-width: 480px) {
  .story-wrapper {
    padding: 10px;
    gap: 10px;
  }
}
</style>
