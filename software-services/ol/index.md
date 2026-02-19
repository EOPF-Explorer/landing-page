---
title: OpenLayers Integration
layout: page
---

<script setup>
import { ref, onMounted } from 'vue'
import { checkWebGLSupport } from '../index.js'
/** @type {import("vue").Ref<boolean|null>} */
const webglSupport = ref(null)

onMounted(() => {
  // Check WebGL support using common utility
  webglSupport.value = checkWebGLSupport()
})
</script>

## OpenLayers Integration <img src="/assets/openlayers-logo.png" alt="OpenLayers Logo" style="height:100px;vertical-align:middle;margin-left:0.5rem;float:right;" />

### Overview

This guide demonstrates how to integrate OpenLayers with EOPF's Zarr-formatted satellite data using the experimental GeoZarr support in OpenLayers. Each example is presented on a separate page for optimal performance.

<div v-if="webglSupport === false">

::: warning :warning: **WebGL Not Supported**
Your browser doesn't support WebGL, which is required for GeoZarr visualization. Please use a modern browser with WebGL enabled.
:::

</div>

::: info **<i class="mdi mdi-target"></i> What You'll Learn**
This page describes the resources to use OpenLayers with EOPF's Sentinel data with interactive examples that demonstrate real-world applications of OpenLayers with EOPF's Sentinel-2 data, covering everything from basic setup to advanced image processing techniques.

**Sample Data** used here are avalable in [the Sentinel-2 L2A collection in STAC Browser](https://api.explorer.eopf.copernicus.eu/browser/external/api.explorer.eopf.copernicus.eu/stac/collections/sentinel-2-l2a)
:::

### Quick Start

::: info **<i class="mdi mdi-rocket-launch"></i> Get Started in 5 Minutes**
Ready to dive in? Start with the [Basic Setup example](./basic) to see OpenLayers and EOPF Zarr data working together, then explore the other examples to learn advanced techniques.
:::

### Installation


<div class="grid">
  <div class="s12 m6">

::: info NPM (Recommended)

```bash
npm install ol stac-js@^0.1.2
```
:::

  </div>
  <div class="s12 m6">

::: info CDN (Quick Testing)
```html
<script src="https://cdn.jsdelivr.net/npm/ol/dist/ol.js"></script>
```
:::

  </div>
</div>
<br>

::: warning **Experimental**
GeoZarr source requires `ol` v10.8.0 or later. The GeoZarr source functionality is still experimental, conforming to the evolving GeoZarr specification.
:::

### Next Steps

1. **Start with Examples**: Work through each [examples](#interactive-examples) to understand the capabilities
2. **Explore EOPF Data**: Browse available datasets in the [STAC Browser](https://api.explorer.eopf.copernicus.eu/browser)
3. **Custom Applications**: Build your own Sentinel data applications
4. **Community**: Join [discussions](https://discourse.eopf.copernicus.eu/c/eopf-explorer/17) and contribute to the growing EOPF ecosystem

For more advanced features and the latest updates, follow the [OpenLayers development](https://github.com/openlayers/openlayers) and [EOPF Explorer project](https://github.com/EOPF-Explorer) on GitHub.

<FeaturesGallery
  background="transparent"
  sectionTitle="Interactive Examples"
  :cards="[
    {
      title: '1. Basic Map Setup and band combination',
      content: 'Learn the fundamental configuration needed to load and display EOPF Zarr data with OpenLayers.',
      features: [
        'Minimal configuration',
        'OSM base layer integration', 
        'Automatic extent fitting',
        'WebGL rendering'
      ],
      link: {
        text: 'View Example',
        href: './basic',
        target:'_self'
      }
    },
    {
      title: '2. NDVI Calculation',
      content: 'Perform real-time vegetation index calculations directly in the browser using WebGL expressions.',
      features: [
        'Real-time NDVI calculation',
        'Vegetation classification',
        'Agricultural applications', 
        'Environmental monitoring'
      ],
      link: {
        text: 'View Example',
        href: './ndvi',
        target:'_self'
      }
    },
    {
      title: '3. STAC Catalog Integration',
      content: 'Search and visualize Sentinel data from EOPF\'s STAC catalog using spatial-temporal filters.',
      features: [
        'STAC API integration',
        'Spatial-temporal search',
        'Scene footprints display',
        'Interactive data discovery'
      ],
      link: {
        text: 'View Example',
        href: './stac',
        target:'_self'
      }
    }
  ]"
/>
