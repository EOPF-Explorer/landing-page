---
url: /pr-preview/pr-130/software-services/ol.md
---

## OpenLayers Integration&#x20;

### Overview

This guide demonstrates how to integrate OpenLayers with EOPF's Zarr-formatted satellite data using the experimental GeoZarr support in OpenLayers. Each example is presented on a separate page for optimal performance.

::: warning :warning: **WebGL Not Supported**
Your browser doesn't support WebGL, which is required for GeoZarr visualization. Please use a modern browser with WebGL enabled.
:::

::: info&#x20;**&#x20;What You'll Learn**
This page describes the resources to use OpenLayers with EOPF's Sentinel data with interactive examples that demonstrate real-world applications of OpenLayers with EOPF's Sentinel-2 data, covering everything from basic setup to advanced image processing techniques.

**Sample Data** used here are avalable in [the Sentinel-2 L2A collection in STAC Browser](https://api.explorer.eopf.copernicus.eu/browser/external/api.explorer.eopf.copernicus.eu/stac/collections/sentinel-2-l2a)
:::

### Quick Start

::: info&#x20;**&#x20;Get Started in 5 Minutes**
Ready to dive in? Start with the [Basic Setup example](./basic) to see OpenLayers and EOPF Zarr data working together, then explore the other examples to learn advanced techniques.
:::

### Installation

::: info NPM (Recommended)

```bash
npm install ol
```

:::

::: info CDN (Quick Testing)

```html
<script src="https://cdn.jsdelivr.net/npm/ol/dist/ol.js"></script>
```

:::

::: warning **Experimental**
GeoZarr source requires `ol` v10.8.0 or later. The GeoZarr source functionality is still experimental, conforming to the evolving GeoZarr specification.
:::

### Next Steps

1. **Start with Examples**: Work through each [examples](#interactive-examples) to understand the capabilities
2. **Explore EOPF Data**: Browse available datasets in the [STAC Browser](https://api.explorer.eopf.copernicus.eu/browser)
3. **Custom Applications**: Build your own Sentinel data applications
4. **Community**: Join [discussions](https://discourse.eopf.copernicus.eu/c/eopf-explorer/17) and contribute to the growing EOPF ecosystem

For more advanced features and the latest updates, follow the [OpenLayers development](https://github.com/openlayers/openlayers) and [EOPF Explorer project](https://github.com/EOPF-Explorer) on GitHub.

## Interactive Examples

* [1. Basic Map Setup and band combination](/pr-preview/pr-130/software-services/ol/basic)
  * Content: Learn the fundamental configuration needed to load and display EOPF Zarr data with OpenLayers.
  * Features: Minimal configuration, OSM base layer integration, Automatic extent fitting, WebGL rendering
* [2. NDVI Calculation](/pr-preview/pr-130/software-services/ol/ndvi)
  * Content: Perform real-time vegetation index calculations directly in the browser using WebGL expressions.
  * Features: Real-time NDVI calculation, Vegetation classification, Agricultural applications, Environmental monitoring
* [3. STAC Catalog Integration](/pr-preview/pr-130/software-services/ol/stac)
  * Content: Search and visualize Sentinel data from EOPF's STAC catalog using spatial-temporal filters.
  * Features: STAC API integration, Spatial-temporal search, Scene footprints display, Interactive data discovery
