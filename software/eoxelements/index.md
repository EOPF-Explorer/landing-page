---
title: EOxElements Integration
layout: page
---

## EOxElements Integration <img src="/media/EOxElements.png" alt="EOxElements Logo" style="height:100px;vertical-align:middle;margin-left:0.5rem;float:right;" />

### Overview

**EOxElements** is a comprehensive suite of [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) designed specifically for Earth Observation (EO) data visualization. By encapsulating complex specific logic into declarative HTML tags. it enables developers to build powerful geospatial applications with minimal code.

This integration uses the EOPF Explorer GeoZarr standard to stream Sentinel-2 data directly from the cloud to the browser (Client-Side Rendering), leveraging [OpenLayers](/software/ol) WebGL for high-performance, pixel-level visualization without server-side tile generation.

::: info **🎯 What You'll Learn**
This integration guide covers building interactive geospatial applications using EOxElements with EOPF's GeoZarr-formatted Sentinel-2 data. Learn to create declarative map configurations, dynamic visualizations, and storytelling experiences using web components that work in any framework.

**Sample Data** used here are available in [the Sentinel-2 L2A collection in STAC Browser](https://api.explorer.eopf.copernicus.eu/browser/external/api.explorer.eopf.copernicus.eu/stac/collections/sentinel-2-l2a)
:::

### Quick Start

::: info **🚀 Get Started in 5 Minutes**
Ready to dive in? Start with the [Basic Tutorial](./basic) to render a Sentinel-2 GeoZarr layer with controls, then explore advanced JSON Forms integration and storytelling layouts.
:::

### Installation

<div class="grid">
  <div class="s12 m6">

::: info NPM (Recommended)
```bash
npm install @eox/map @eox/layercontrol @eox/drawtools
npm install @eox/jsonform @eox/timecontrol @eox/layout
```
:::

  </div>
  <div class="s12 m6">

::: info CDN (Quick Testing)
```html
<script type="module" src="https://unpkg.com/@eox/map"></script>
<script type="module" src="https://unpkg.com/@eox/layercontrol"></script>
```
:::

  </div>
</div>
<br/>

::: warning ⚠️ **GeoZarr Support**
GeoZarr source requires `@eox/map` v2.1.0-dev.1 that is built on top of OpenLayers experimental release. The release will stabilize 
:::

### Key Concepts

**Declarative Map Configuration**

EOxElements uses a JSON-based configuration approach. Instead of writing imperative code, you define your map state as data:

```javascript
// Configure layers, sources, and styles declaratively
const layers = [{
  type: "WebGLTile",
  source: {
    type: "GeoZarr",
    url: "https://path/to/data.zarr",
    group: "measurements/reflectance",
    bands: ["b04", "b03", "b02"]
  },
  style: { gamma: 1.5 }
}];
```

**Web Components Architecture**

EOxElements components work in any framework (Vue, React, Angular, vanilla JS):

- **`<eox-map>`** - Core map component wrapping OpenLayers
- **`<eox-layercontrol>`** - Layer visibility, opacity, and ordering controls
- **`<eox-drawtools>`** - Vector drawing and editing tools
- **`<eox-jsonform>`** - Dynamic forms from JSON Schema
- **`<eox-timecontrol>`** - Temporal dimension navigation
- **`<eox-layout>`** - Flexible layout manager for storytelling

**Component Linking**

Link controls to maps using the `for` attribute:

```html
<eox-layercontrol for="#my-map"></eox-layercontrol>
<eox-map id="my-map"></eox-map>
```

### Next Steps

1. **Start with Examples**: Work through each [tutorial](#integration-examples) to understand the capabilities
2. **Explore EOPF Data**: Browse available datasets in the [STAC Browser](https://api.explorer.eopf.copernicus.eu/browser)
3. **Read Component Docs**: Visit the [EOxElements Storybook](https://eox-a.github.io/EOxElements/) for API reference
4. **Build Applications**: Create your own EO applications with declarative configurations
5. **Community**: Join [discussions](https://discourse.eopf.copernicus.eu/c/eopf-explorer/17) and contribute to the growing EOPF ecosystem

For more information, visit the [EOxElements GitHub repository](https://github.com/EOX-A/EOxElements) and the [EOPF Explorer project](https://github.com/EOPF-Explorer).

<FeaturesGallery
  background="transparent"
  sectionTitle="Integration Examples"
  :cards="[
    {
      title: '1. Basic Usage',
      content: 'Learn the fundamentals of rendering GeoZarr data with a layer control and drawing tools.',
      features: [
        'Layer Control',
        'Draw Tools',
        'GeoZarr Source Configuration',
        'Basic Map Setup'
      ],
      link: {
        text: 'View Tutorial',
        href: './basic'
      }
    },
    {
      title: '2. Advanced Visualization',
      content: 'Create interactive dashboards with JSON Forms to control band combinations and arithmetic indices.',
      features: [
        'JSON Forms Integration',
        'Dynamic Band Combinations',
        'Spectral Indices (NDVI/NDWI)',
        'Time Control'
      ],
      link: {
        text: 'View Tutorial',
        href: './advanced'
      }
    },
    {
      title: '3. 3D Globe Visualization',
      content: 'Experience 3D visualization with terrain rendering, camera tours, and seamless 2D/3D projection switching.',
      features: [
        'Hybrid 3D Engine',
        'Terrain Visualization',
        'Interactive Tours',
        'Projection Switching'
      ],
      link: {
        text: 'View Tutorial',
        href: './globe'
      }
    },
    {
      title: '4. Storytelling',
      content: 'Build immersive map tours and stories using EOxLayout and globe projections.',
      features: [
        'Interactive Map Tour',
        'Globe Projection (EPSG:4326)',
        'Sidebar Layout',
        'Animation Control'
      ],
      link: {
        text: 'View Tutorial',
        href: './story'
      }
    }
  ]"
/>
