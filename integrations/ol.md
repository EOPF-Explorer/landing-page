---
title: OpenLayers Integration
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

a {
  color: #0366d6;
}
</style>

# OpenLayers Integration with EOPF Zarr Data

## Overview

This guide demonstrates how to integrate OpenLayers with EOPF's Zarr-formatted satellite data using the experimental GeoZarr support in OpenLayers 10.7.1-dev. Each example is presented on a separate page for optimal performance.

<div v-if="webglSupport === false" class="warning">
⚠️ **WebGL Not Supported**: Your browser doesn't support WebGL, which is required for GeoZarr visualization. Please use a modern browser with WebGL enabled.
</div>

<div class="overview-section">
<h3>🎯 What You'll Learn</h3>
<p>This page describes the resources to use OpenLayers with EOPF's Sentinel data with interactive examples that demonstrate real-world applications of OpenLayers with EOPF's Sentinel-2 data, covering everything from basic setup to advanced image processing techniques.</p>

<p><strong>Sample Data</strong> used here are avalable in <a href="https://api.explorer.eopf.copernicus.eu/browser/external/api.explorer.eopf.copernicus.eu/stac/collections/sentinel-2-l2a">the Sentinel-2 L2A collection in STAC Browser</a></p>
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
    <pre><code>npm install ol@dev stac-js@^0.1.2</code></pre>
    <p>Used in our examples for best performance and build optimization.</p>
  </div>

  <div class="installation-method">
    <h4>CDN (Quick Testing)</h4>
    <pre><code>&lt;script src="https://cdn.jsdelivr.net/npm/ol@dev/dist/ol.js"&gt;&lt;/script&gt;</code></pre>
    <p>Perfect for quick prototypes and testing.</p>
  </div>
</div>

## Version Notes

⚠️ **Development Version**: OpenLayers tag **dev** (10.7.1-dev) contains experimental unreleased GeoZarr support that may change. For production use, wait for the stable 10.8.0 release.

## Next Steps

1. **Start with Examples**: Work through each [examples](#interactive-examples) to understand the capabilities
2. **Explore EOPF Data**: Browse available datasets in the [STAC Browser](https://api.explorer.eopf.copernicus.eu/browser)
3. **Custom Applications**: Build your own Sentinel data applications
4. **Community**: Join [discussions](https://discourse.eopf.copernicus.eu/c/eopf-explorer/17) and contribute to the growing EOPF ecosystem

For more advanced features and the latest updates, follow the [OpenLayers development](https://github.com/openlayers/openlayers) and [EOPF Explorer project](https://github.com/EOPF-Explorer) on GitHub.

## Interactive Examples

<div class="examples-grid">
  <div class="example-card">
    <div class="example-title">1. Basic Map Setup and band combination</div>
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
    <div class="example-title">3. NDVI Calculation</div>
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
    <div class="example-title">4. Interactive Contrast</div>
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
