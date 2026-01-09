---
title: OpenLayers Integration
layout: page
---

<style>
/* Import common CSS first to avoid FOUC */
@import url("/.vitepress/theme/software-common.css");
</style>

<script setup>
import { ref, onMounted } from 'vue'

const webglSupport = ref(null)

onMounted(async () => {
  // Load common utilities on client-side only
  if (typeof window !== 'undefined') {
    const script = document.createElement('script')
    script.src = '/.vitepress/theme/software-common.js'
    document.head.appendChild(script)
  }
  
  // Wait for common utilities to load
  await waitForCommonUtilities()
  
  // Check WebGL support using common utility
  webglSupport.value = window.checkWebGLSupport()
})

// Helper function to wait for common utilities to load
function waitForCommonUtilities() {
  return new Promise((resolve) => {
    const checkUtilities = () => {
      if (window.checkWebGLSupport && window.waitForOpenLayers) {
        resolve()
      } else {
        setTimeout(checkUtilities, 50)
      }
    }
    checkUtilities()
  })
}
</script>

## OpenLayers Integration <img src="/assets/openlayers-logo.png" alt="OpenLayers Logo" style="height:100px;vertical-align:middle;margin-left:0.5rem;float:right;" />

### Overview

This guide demonstrates how to integrate OpenLayers with EOPF's Zarr-formatted satellite data using the experimental GeoZarr support in OpenLayers 10.7.1-dev. Each example is presented on a separate page for optimal performance.

<div v-if="webglSupport === false" class="warning">
⚠️ **WebGL Not Supported**: Your browser doesn't support WebGL, which is required for GeoZarr visualization. Please use a modern browser with WebGL enabled.
</div>

<div class="overview-section">
<strong>🎯 What You'll Learn</strong>
<p>This page describes the resources to use OpenLayers with EOPF's Sentinel data with interactive examples that demonstrate real-world applications of OpenLayers with EOPF's Sentinel-2 data, covering everything from basic setup to advanced image processing techniques.</p>

<p><strong>Sample Data</strong> used here are avalable in <a href="https://api.explorer.eopf.copernicus.eu/browser/external/api.explorer.eopf.copernicus.eu/stac/collections/sentinel-2-l2a">the Sentinel-2 L2A collection in STAC Browser</a></p>
</div>

### Quick Start

<div class="quick-start">
<strong>🚀 Get Started in 5 Minutes</strong>
<p>Ready to dive in? Start with the <a href="./ol/basic">Basic Setup example</a> to see OpenLayers and EOPF Zarr data working together, then explore the other examples to learn advanced techniques.</p>
</div>

### Installation

<div class="installation-grid">
  <div class="installation-method">
    <strong>NPM (Recommended)</strong>
    <pre><code>npm install ol@dev stac-js@^0.1.2</code></pre>
    <p>Used in our examples for best performance and build optimization.</p>
  </div>

  <div class="installation-method">
    <strong>CDN (Quick Testing)</strong>
    <pre><code>&lt;script src="https://cdn.jsdelivr.net/npm/ol@dev/dist/ol.js"&gt;&lt;/script&gt;</code></pre>
    <p>Perfect for quick prototypes and testing.</p>
  </div>
</div>

⚠️ **Development Version**: OpenLayers tag **dev** (10.7.1-dev) contains experimental unreleased GeoZarr support that may change. For production use, wait for the stable 10.8.0 release.

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
        href: './ol/basic'
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
        href: './ol/ndvi'
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
        href: './ol/stac'
      }
    }
  ]"
  style="margin-top: -6rem;"
/>
