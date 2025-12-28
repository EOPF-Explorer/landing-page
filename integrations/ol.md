---
title: OpenLayers Integration with EOPF Zarr Data
layout: page
---

<script setup>
import { ref, onMounted } from 'vue'

const webglSupport = ref(null)

onMounted(() => {
  // Check WebGL support
  const canvas = document.createElement('canvas')
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
  webglSupport.value = gl !== null
})
</script>

<style scoped>
.warning {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  color: #856404;
  padding: 12px;
  border-radius: 4px;
  margin: 16px 0;
}

.success {
  background: #d4edda;
  border: 1px solid #c3e6cb;
  color: #155724;
  padding: 12px;
  border-radius: 4px;
  margin: 16px 0;
}

.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin: 32px 0;
}

.example-card {
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  padding: 20px;
  background: #fafbfc;
  transition: transform 0.2s, box-shadow 0.2s;
}

.example-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.example-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #24292e;
}

.example-description {
  color: #586069;
  margin-bottom: 16px;
  line-height: 1.5;
}

.example-features {
  list-style: none;
  padding: 0;
  margin-bottom: 16px;
}

.example-features li {
  padding: 4px 0;
  color: #586069;
  font-size: 14px;
}

.example-features li:before {
  content: "✓";
  color: #28a745;
  font-weight: bold;
  margin-right: 8px;
}

.example-link {
  display: inline-block;
  padding: 8px 16px;
  background: #0366d6;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  transition: background 0.2s;
}

.example-link:hover {
  background: #0256cc;
  color: white;
}

.overview-section {
  background: #f6f8fa;
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  padding: 24px;
  margin: 24px 0;
}

.quick-start {
  background: #e7f3ff;
  border: 1px solid #b3d7ff;
  border-radius: 8px;
  padding: 20px;
  margin: 24px 0;
}

.installation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin: 16px 0;
}

.installation-method {
  background: #f8f9fa;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  padding: 16px;
}

.installation-method h4 {
  margin: 0 0 12px 0;
  color: #24292e;
}

pre {
  background: #f6f8fa;
  padding: 12px;
  border-radius: 4px;
  overflow-x: auto;
  font-size: 13px;
  margin: 8px 0;
}

code {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}
</style>

# OpenLayers Integration with EOPF Zarr Data

## Overview

This guide demonstrates how to integrate OpenLayers with EOPF's Zarr-formatted satellite data using the experimental GeoZarr support in OpenLayers 10.7.1-dev. Each example is presented on a separate page for optimal performance.

<div v-if="webglSupport === false" class="warning">
⚠️ **WebGL Not Supported**: Your browser doesn't support WebGL, which is required for GeoZarr visualization. Please use a modern browser with WebGL enabled.
</div>

<div v-if="webglSupport === true" class="success">
✅ **WebGL Supported**: Your browser supports WebGL and can render GeoZarr data.
</div>

<div class="overview-section">
<h3>🎯 What You'll Learn</h3>
<p>These interactive examples demonstrate real-world applications of OpenLayers with EOPF's Sentinel-2 data, covering everything from basic setup to advanced image processing techniques. Each example includes live demonstrations, complete code samples, and detailed explanations.</p>

<p><strong>Sample Data:</strong> Sentinel-2 L2A scene over southern Spain (December 18, 2025) - <a href="https://api.explorer.eopf.copernicus.eu/browser/external/api.explorer.eopf.copernicus.eu/stac/collections/sentinel-2-l2a/items/S2B_MSIL2A_20251218T110359_N0511_R094_T30SUF_20251218T115223">View in STAC Browser</a></p>
</div>

## Interactive Examples

<div class="examples-grid">
  <div class="example-card">
    <div class="example-title">1. Basic Map Setup</div>
    <div class="example-description">
      Learn the fundamental configuration needed to load and display EOPF Zarr data with OpenLayers.
    </div>
    <ul class="example-features">
      <li>Minimal configuration</li>
      <li>OSM base layer integration</li>
      <li>Automatic extent fitting</li>
      <li>WebGL rendering</li>
    </ul>
    <a href="/integrations/ol/basic" class="example-link">View Example →</a>
  </div>

  <div class="example-card">
    <div class="example-title">2. True Color Visualization</div>
    <div class="example-description">
      Create natural-looking imagery with proper band scaling, gamma correction, and color enhancement.
    </div>
    <ul class="example-features">
      <li>RGB band mapping</li>
      <li>Reflectance scaling</li>
      <li>Gamma correction</li>
      <li>Transparency handling</li>
    </ul>
    <a href="/integrations/ol/true-color" class="example-link">View Example →</a>
  </div>

  <div class="example-card">
    <div class="example-title">3. False Color Infrared</div>
    <div class="example-description">
      Enhance vegetation analysis and land cover mapping using infrared bands for better feature discrimination.
    </div>
    <ul class="example-features">
      <li>SWIR band utilization</li>
      <li>Vegetation enhancement</li>
      <li>Land cover analysis</li>
      <li>Spectral interpretation</li>
    </ul>
    <a href="/integrations/ol/false-color" class="example-link">View Example →</a>
  </div>

  <div class="example-card">
    <div class="example-title">4. NDVI Calculation</div>
    <div class="example-description">
      Perform real-time vegetation index calculations directly in the browser using WebGL expressions.
    </div>
    <ul class="example-features">
      <li>Real-time NDVI calculation</li>
      <li>Vegetation classification</li>
      <li>Agricultural applications</li>
      <li>Environmental monitoring</li>
    </ul>
    <a href="/integrations/ol/ndvi" class="example-link">View Example →</a>
  </div>

  <div class="example-card">
    <div class="example-title">5. Interactive Contrast</div>
    <div class="example-description">
      Dynamically adjust image contrast and brightness using interactive controls and style variables.
    </div>
    <ul class="example-features">
      <li>Dynamic contrast stretching</li>
      <li>Interactive sliders</li>
      <li>Real-time updates</li>
      <li>Image enhancement</li>
    </ul>
    <a href="/integrations/ol/contrast" class="example-link">View Example →</a>
  </div>
</div>

## Quick Start

<div class="quick-start">
<h3>🚀 Get Started in 5 Minutes</h3>
<p>Ready to dive in? Start with the <a href="/integrations/ol/basic">Basic Setup example</a> to see OpenLayers and EOPF Zarr data working together, then explore the other examples to learn advanced techniques.</p>
</div>

## Installation

<div class="installation-grid">
  <div class="installation-method">
    <h4>NPM (Recommended)</h4>
    <pre><code>npm install ol@10.7.1-dev stac-js@^0.1.2</code></pre>
    <p>Used in our examples for best performance and build optimization.</p>
  </div>

  <div class="installation-method">
    <h4>CDN (Quick Testing)</h4>
    <pre><code>&lt;script src="https://cdn.jsdelivr.net/npm/ol@10.7.1-dev/dist/ol.js"&gt;&lt;/script&gt;</code></pre>
    <p>Perfect for quick prototypes and testing.</p>
  </div>
</div>

## STAC Browser Integration

### Finding Zarr URLs

1. Visit the [EOPF STAC Browser](https://api.explorer.eopf.copernicus.eu/browser)
2. Search for your desired Sentinel scene
3. Look for assets with type `application/zarr` or `application/zarr+zip`
4. Copy the asset URL for use in your OpenLayers configuration

### Programmatic STAC Access

```javascript
import STAC from 'stac-js';

async function loadZarrFromSTAC(itemId) {
  const stac = new STAC('https://api.explorer.eopf.copernicus.eu/stac');
  
  // Search for items
  const results = await stac.search({
    ids: [itemId],
    collections: ['sentinel-2-l2a']
  });
  
  const item = results.features[0];
  const zarrAsset = Object.values(item.assets)
    .find(asset => asset.type === 'application/zarr');
  
  if (zarrAsset) {
    return zarrAsset.href;
  }
  
  throw new Error('No Zarr asset found');
}

// Usage
loadZarrFromSTAC('S2B_MSIL2A_20251218T110359_N0511_R094_T30SUF_20251218T115223')
  .then(zarrUrl => {
    // Initialize your map with the Zarr URL
    const source = new GeoZarr({
      url: zarrUrl,
      group: 'measurements/reflectance',
      bands: ['b04', 'b03', 'b02'],
    });
  });
```

## Advanced Topics

### Performance Optimization

- **Tile Caching**: Configure appropriate cache sizes
- **Preloading**: Set preload levels for smoother panning
- **Resolution Management**: Use multiscale data effectively

### Styling Techniques

- **Band Math**: Create custom indices and calculations
- **Color Mapping**: Apply scientific color schemes
- **Conditional Rendering**: Show different visualizations based on data values

### Integration Patterns

- **Vector Overlays**: Combine with administrative boundaries
- **Time Series**: Animate temporal data
- **Multi-source**: Blend different satellite datasets

## Browser Compatibility

- **Chrome 80+**: Full support
- **Firefox 75+**: Full support  
- **Safari 14+**: Limited support (some style expressions may not work)
- **Edge 80+**: Full support

## Version Notes

⚠️ **Development Version**: OpenLayers 10.7.1-dev contains experimental GeoZarr support that may change. For production use, wait for the stable 10.8.0 release.

## Next Steps

1. **Start with Examples**: Work through each example to understand the capabilities
2. **Explore EOPF Data**: Browse available datasets in the [STAC Browser](https://api.explorer.eopf.copernicus.eu/browser)
3. **Custom Applications**: Build your own satellite data applications
4. **Community**: Join discussions and contribute to the growing EOPF ecosystem

For more advanced features and the latest updates, follow the [OpenLayers development](https://github.com/openlayers/openlayers) and [EOPF Explorer project](https://github.com/EOPF-Explorer).