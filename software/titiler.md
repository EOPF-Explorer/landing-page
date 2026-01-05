---
title: Titiler Integration
layout: page
---

<script>
// Load common utilities  
const script = document.createElement('script')
script.src = './common.js'
document.head.appendChild(script)

// Load common CSS
const link = document.createElement('link')
link.rel = 'stylesheet'
link.href = './common.css'
document.head.appendChild(link)
</script>
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

.info {
  background: #d1ecf1;
  border: 1px solid #b6d4fe;
  color: #0c5460;
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

/* Ensure VitePress copy buttons are visible */
.copy {
  display: block !important;
  opacity: 1 !important;
}

/* Style the copy button */
.copy {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 40px;
  height: 40px;
  background-color: var(--vp-code-copy-code-bg, #f6f8fa);
  border: 1px solid var(--vp-code-copy-code-border-color, #e1e4e8);
  border-radius: 4px;
  cursor: pointer;
  z-index: 2;
  display: flex !important;
  align-items: center;
  justify-content: center;
}

/* Add clipboard icon */
.copy::before {
  content: "📋";
  font-size: 16px;
}

/* Alternative CSS-only clipboard icon */
.copy::after {
  content: "";
  display: block;
  width: 16px;
  height: 16px;
  background: currentColor;
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z'/%3E%3C/svg%3E") no-repeat center;
  mask-size: contain;
  position: absolute;
}

.copied::before {
  content: "✓";
  font-size: 16px;
  color: green;
  position: absolute;
}

/* Hide language labels under tabs */
span.lang {
  display: none !important;
}

a {
  color: #0366d6;
}
</style>

# Titiler Integration with EOPF Zarr Data

## Overview

This guide demonstrates how to use Titiler-EOPF, a specialized tile server that provides on-the-fly visualization of EOPF's Zarr-formatted satellite data. Unlike client-side processing, Titiler handles complex calculations server-side and delivers optimized tiles for web mapping applications.

<div v-if="loading" class="info">
🔄 <strong>Checking API Status</strong>: Verifying Titiler service availability...
</div>

<div v-else-if="apiStatus === false" class="warning">
⚠️ <strong>API Unavailable</strong>: The Titiler service appears to be temporarily unavailable. Some examples may not work as expected.
</div>

<div v-else-if="apiStatus === true" class="success">
✅ <strong>API Available</strong>: Titiler service is running and ready for integration.
</div>

<div class="overview-section">
<h3>🎯 What You'll Learn</h3>
<p>This integration guide covers server-side tile generation using EOPF's Titiler service, enabling you to build responsive web applications without handling complex data processing in the browser. Each example demonstrates practical implementation patterns for real-world applications.</p>

<p><strong>Sample Data</strong> used here are available in <a href="https://api.explorer.eopf.copernicus.eu/browser/external/api.explorer.eopf.copernicus.eu/stac/collections/sentinel-2-l2a">the Sentinel-2 L2A collection in STAC Browser</a></p>
</div>

## Quick Start

<div class="quick-start">
<h3>🚀 Get Started in 5 Minutes</h3>
<p>Ready to dive in? Start with the <a href="/titiler/rgb">RGB Visualization example</a> to see Titiler serving EOPF tiles in a web map, then explore NDVI calculations and spatial cropping techniques.</p>
</div>

## API Documentation

<div class="installation-grid">
  <div class="installation-method">
    <h4>Interactive API Docs</h4>
    <p><a href="https://api.explorer.eopf.copernicus.eu/raster/api.html" target="_blank">Swagger UI Documentation</a></p>
    <p>Complete API reference with interactive examples and endpoint testing.</p>
  </div>

  <div class="installation-method">
    <h4>Base URL</h4>
    <pre><code>https://api.explorer.eopf.copernicus.eu/raster/</code></pre>
    <p>All tile endpoints use this base URL for production integration.</p>
  </div>
</div>

## Key Concepts

### Server-Side Processing
Titiler-EOPF performs all data processing server-side, including:
- **On-the-fly tile generation** from Zarr datasets
- **Mathematical expressions** for band combinations and indices
- **Color enhancement** with gamma correction and contrast adjustment
- **Spatial operations** like cropping and reprojection

### Variable Naming Convention
Band references use the format:
```
/measurements/reflectance:b04
```
- `measurements/reflectance` - Multiscales group path in Zarr structure
- `b04` - Specific band identifier (Red band)

### URL Structure
Tile endpoints follow this pattern:
```
/raster/collections/{collection}/items/{item}/tiles/WebMercatorQuad/{z}/{x}/{y}.png
```

## Deployment Options

### 1. EOPF Explorer Platform (Recommended)
- **Pre-configured** with STAC catalog integration
- **Production-ready** endpoints with optimized performance
- **No authentication** required for public data
- **Automatic updates** with latest EOPF data

### 2. Self-Hosted Instance
For custom deployments, see the [titiler-eopf repository](https://github.com/EOPF-Explorer/titiler-eopf) for:
- Docker Compose setup instructions
- Kubernetes/Helm deployment guides
- Environment configuration examples
- Custom data source integration

## Integration Examples

<div class="examples-grid">
  <div class="example-card">
    <div class="example-title">1. RGB Band Combinations</div>
    <div class="example-description">
      Learn to create true color and false color visualizations using Titiler's tile endpoints with OpenLayers or Leaflet.
    </div>
    <ul class="example-features">
      <li>True color RGB (B04, B03, B02)</li>
      <li>False color infrared composites</li>
      <li>Color enhancement formulas</li>
      <li>Web mapping integration</li>
    </ul>
    <a href="./titiler/rgb" class="example-link">View Example →</a>
  </div>

  <div class="example-card">
    <div class="example-title">2. NDVI & Vegetation Indices</div>
    <div class="example-description">
      Calculate vegetation indices server-side using mathematical expressions and visualize with custom color schemes.
    </div>
    <ul class="example-features">
      <li>Real-time NDVI calculation</li>
      <li>Server-side expressions</li>
      <li>Custom color mapping</li>
      <li>Environmental monitoring</li>
    </ul>
    <a href="./titiler/ndvi" class="example-link">View Example →</a>
  </div>

  <div class="example-card">
    <div class="example-title">3. Spatial Cropping</div>
    <div class="example-description">
      Extract specific areas from satellite scenes using bounding box and feature-based spatial operations.
    </div>
    <ul class="example-features">
      <li>Bounding box cropping</li>
      <li>Polygon-based extraction</li>
      <li>Coordinate system handling</li>
      <li>Export capabilities</li>
    </ul>
    <a href="./titiler/crop" class="example-link">View Example →</a>
  </div>
</div>

## Version Notes

⚠️ **Early Implementation**: This Titiler integration represents an early implementation of EOPF data services. Data availability, API stability, and library alignment will evolve over time as the platform matures.

## Next Steps

1. **Start with Examples**: Work through each [example](#integration-examples) to understand the capabilities
2. **Explore API Documentation**: Use the [interactive Swagger UI](https://api.explorer.eopf.copernicus.eu/raster/api.html) to test endpoints
3. **Browse EOPF Data**: Find datasets in the [STAC Browser](https://api.explorer.eopf.copernicus.eu/browser)
4. **Build Applications**: Integrate Titiler tiles into your web mapping projects
5. **Community**: Join [discussions](https://discourse.eopf.copernicus.eu/c/eopf-explorer/17) and contribute to the growing EOPF ecosystem

For the latest updates and advanced features, follow the [Titiler-EOPF project](https://github.com/EOPF-Explorer/titiler-eopf) and [EOPF Explorer platform](https://github.com/EOPF-Explorer) on GitHub.