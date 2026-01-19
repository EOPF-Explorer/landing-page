---
title: Titiler Integration
layout: page
---

<style scoped>
/* Import common CSS first to avoid FOUC */
@import "./software.css";

.large-space {
  block-size: 0rem !important;
}
</style>

<script setup>
import { ref, onMounted } from 'vue'

const apiStatus = ref(null)
const loading = ref(true)

onMounted(async () => {
  // Check API availability
  try {
    const response = await fetch('https://api.explorer.eopf.copernicus.eu/raster/_mgmt/ping')
    apiStatus.value = response.ok
  } catch (error) {
    apiStatus.value = false
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
/* Page-specific styles for Titiler integration main page - only keeping actually used classes */
</style>

## Titiler Integration <img src="https://user-images.githubusercontent.com/10407788/172718020-c2378b7e-a0d4-406e-924c-8ffe54e61596.png" alt="Titiler Logo" style="height:100px;vertical-align:middle;margin-left:0.5rem;float:right;" />

### Overview

This guide demonstrates how to use Titiler-EOPF, a specialized tile server that provides on-the-fly visualization of EOPF's Zarr-formatted satellite data. Unlike client-side processing, Titiler handles complex calculations server-side and delivers optimized tiles for web mapping applications.

<div v-if="loading" class="info">
🔄 <strong>Checking <a href="https://api.explorer.eopf.copernicus.eu/raster" target="_blank">API</a> Status</strong>: Verifying Titiler service availability...
</div>

<div v-else-if="apiStatus === false" class="warning">
⚠️ <strong><a href="https://api.explorer.eopf.copernicus.eu/raster" target="_blank">API Unavailable</a></strong>: The Titiler service appears to be temporarily unavailable. Some examples may not work as expected.
</div>

<div v-else-if="apiStatus === true" class="success">
✅ <strong><a href="https://api.explorer.eopf.copernicus.eu/raster" target="_blank">API Available</a></strong>: Titiler service is running and ready for integration.
</div>

<div class="overview-section">
<strong>🎯 What You'll Learn</strong>
<p>This integration guide covers server-side tile generation using EOPF's Titiler service, enabling you to build responsive web applications without handling complex data processing in the browser. Each example demonstrates practical implementation patterns for real-world applications.</p>

<p><strong>Sample Data</strong> used here are available in <a href="https://api.explorer.eopf.copernicus.eu/browser/external/api.explorer.eopf.copernicus.eu/stac/collections/sentinel-2-l2a">the Sentinel-2 L2A collection in STAC Browser</a></p>
</div>

### Quick Start

<div class="quick-start">
<strong>🚀 Get Started in 5 Minutes</strong>
<p>Ready to dive in? Start with the <a href="/titiler/rgb">RGB Visualization example</a> to see Titiler serving EOPF tiles in a web map, then explore NDVI calculations and spatial cropping techniques.</p>
</div>

⚠️ **Early Implementation**: This Titiler integration represents an early implementation of EOPF data services. Data availability, API stability, and library alignment will evolve over time as the platform matures.

### API Documentation

<div class="installation-grid">
  <div class="installation-method">
    <strong>Interactive API Docs</strong>
    <p><a href="https://api.explorer.eopf.copernicus.eu/raster/api.html" target="_blank">Swagger UI Documentation</a></p>
    <p>Complete API reference with interactive examples and endpoint testing.</p>
  </div>

  <div class="installation-method">
    <strong>Base URL</strong>
    <pre><a href="https://api.explorer.eopf.copernicus.eu/raster/" target="_blank">https://api.explorer.eopf.copernicus.eu/raster/</a></pre>
    <p>All tile endpoints use this base URL for production integration.</p>
  </div>
</div>

### Key Concepts

**Server-Side Processing**

Titiler-EOPF performs all data processing server-side, including:

- **On-the-fly tile generation** from Zarr datasets
- **Mathematical expressions** for band combinations and indices
- **Color enhancement** with gamma correction and contrast adjustment
- **Spatial operations** like cropping and reprojection

**Variable Naming Convention**

Band references use the format:

```
/measurements/reflectance:b04
```

- `measurements/reflectance` - Multiscales group path in Zarr structure
- `b04` - Specific band identifier (Red band)

**URL Structure**

Tile endpoints follow this pattern:

```
/raster/collections/{collection}/items/{item}/tiles/WebMercatorQuad/{z}/{x}/{y}.png
```

### Deployment Options

**1. [EOPF Explorer TiTiler](https://api.explorer.eopf.copernicus.eu/raster/) (Recommended)**

- **Pre-configured** with STAC catalog integration
- **Production-ready** endpoints with optimized performance
- **No authentication** required for public data
- **Automatic updates** with latest EOPF data

**2. Self-Hosted Instance**

For custom deployments, see the [titiler-eopf repository](https://github.com/EOPF-Explorer/titiler-eopf) for:

- Docker Compose setup instructions
- Kubernetes/Helm deployment guides
- Environment configuration examples
- Custom data source integration

### Next Steps

1. **Start with Examples**: Work through each [example](#integration-examples) to understand the capabilities
2. **Explore API Documentation**: Use the [interactive Swagger UI](https://api.explorer.eopf.copernicus.eu/raster/api.html) to test endpoints
3. **Browse EOPF Data**: Find datasets in the [STAC Browser](https://api.explorer.eopf.copernicus.eu/browser)
4. **Build Applications**: Integrate Titiler tiles into your web mapping projects
5. **Community**: Join [discussions](https://discourse.eopf.copernicus.eu/c/eopf-explorer/17) and contribute to the growing EOPF ecosystem

For the latest updates and advanced features, follow the [Titiler-EOPF project](https://github.com/EOPF-Explorer/titiler-eopf) and [EOPF Explorer platform](https://github.com/EOPF-Explorer) on GitHub.

<FeaturesGallery
  background="transparent"
  sectionTitle="Integration Examples"
  :cards="[
    {
      title: '1. RGB Band Combinations',
      content: 'Learn to create true color and false color visualizations using Titiler\'s tile endpoints with OpenLayers or Leaflet.',
      features: [
        'True color RGB (B04, B03, B02)',
        'False color infrared composites',
        'Color enhancement formulas',
        'Web mapping integration'
      ],
      link: {
        text: 'View Example',
        href: './titiler/rgb'
      }
    },
    {
      title: '2. Vegetation Indices',
      content: 'Calculate vegetation indices server-side using mathematical expressions and visualize with custom color schemes.',
      features: [
        'Real-time NDVI calculation',
        'Server-side expressions',
        'Custom color mapping',
        'Environmental monitoring'
      ],
      link: {
        text: 'View Example',
        href: './titiler/ndvi'
      }
    },
    {
      title: '3. Spatial Cropping',
      content: 'Extract specific areas from satellite scenes using bounding box and feature-based spatial operations.',
      features: [
        'Bounding box cropping',
        'Polygon-based extraction',
        'Coordinate system handling',
        'Export capabilities'
      ],
      link: {
        text: 'View Example',
        href: './titiler/crop'
      }
    }
  ]"
/>


