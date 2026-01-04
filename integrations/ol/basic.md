---
title: OpenLayers - Basic Setup
layout: page
---

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import Map from 'ol/Map.js'
import { getView, withExtentCenter, withHigherResolutions, withLowerResolutions, withZoom } from 'ol/View.js'
import TileLayer from 'ol/layer/WebGLTile.js'
import GeoZarr from 'ol/source/GeoZarr.js'
import OSM from 'ol/source/OSM.js'
import 'ol/ol.css'

const webglSupport = ref(null)
const mapRef = ref()
let map = null

// EOPF Zarr URL (root store only, no group path)
const zarrUrl = 'https://s3.explorer.eopf.copernicus.eu/esa-zarr-sentinel-explorer-fra/tests-output/sentinel-2-l2a/S2B_MSIL2A_20251218T110359_N0511_R094_T30SUF_20251218T115223.zarr'

onMounted(async () => {
  // Check WebGL support
  const canvas = document.createElement('canvas')
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
  webglSupport.value = gl !== null

  if (webglSupport.value) {
    nextTick(() => {
      initializeMap()
    })
  }
})

function initializeMap() {
  if (mapRef.value) {
    try {
      const source = new GeoZarr({
        url: zarrUrl,
        group: 'measurements/reflectance',
        bands: ['b04', 'b03', 'b02'],
      })

      map = new Map({
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          new TileLayer({
            source,
            style: {
              gamma: 1.5,
              color: [
                'color',
                ['interpolate', ['linear'], ['band', 1], 0, 0, 0.5, 255],
                ['interpolate', ['linear'], ['band', 2], 0, 0, 0.5, 255],
                ['interpolate', ['linear'], ['band', 3], 0, 0, 0.5, 255],
                [
                  'case',
                  ['==', ['+', ['band', 1], ['band', 2], ['band', 3]], 0],
                  0,
                  1,
                ],
              ],
            },
          }),
        ],
        target: mapRef.value,
        view: getView(
          source,
          withLowerResolutions(1),
          withHigherResolutions(2),
          withExtentCenter(),
          withZoom(2),
        ),
      })
    } catch (error) {
      console.error('Failed to initialize map:', error)
    }
  }
}

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

.demo-section {
  margin: 24px 0;
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  overflow: hidden;
}

.map-container {
  width: 100%;
  height: 500px;
  position: relative;
}

.code-section {
  background: #f6f8fa;
  padding: 16px;
  border-top: 1px solid #e1e4e8;
}

.copy-button {
  background: #0366d6;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 12px;
  font-size: 14px;
}

.copy-button:hover {
  background: #0256cc;
}

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 32px 0;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
}

.nav-button {
  padding: 8px 16px;
  background: #0366d6;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
}

.nav-button:hover {
  background: #0256cc;
  color: white;
}

.nav-button:disabled {
  background: #6c757d;
  cursor: not-allowed;
}

pre {
  background: #f6f8fa;
  color: #24292e;
  padding: 16px;
  border-radius: 4px;
  overflow-x: auto;
  font-size: 14px;
  line-height: 1.4;
  margin: 16px 0;
  border: 1px solid #e1e4e8;
}

code {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  background: #f6f8fa;
  color: #24292e;
  padding: 2px 4px;
  border-radius: 3px;
}

/* Light theme syntax highlighting */
pre code {
  background: transparent;
  color: #24292e;
  padding: 0;
}

/* Ensure VitePress copy buttons are visible */
.vp-code-group .copy,
.vp-doc div[class*="language-"] .copy {
  display: block !important;
  opacity: 1 !important;
}

/* Style the copy button */
.vp-code-group .copy,
.vp-doc div[class*="language-"] .copy {
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
.vp-code-group .copy::before,
.vp-doc div[class*="language-"] .copy::before {
  content: "📋";
  font-size: 16px;
}

/* Alternative CSS-only clipboard icon */
.vp-code-group .copy::after,
.vp-doc div[class*="language-"] .copy::after {
  content: "";
  display: block;
  width: 16px;
  height: 16px;
  background: currentColor;
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z'/%3E%3C/svg%3E") no-repeat center;
  mask-size: contain;
  position: absolute;
}

/* Hide language labels under tabs */
.vp-code-group span.lang,
.vp-doc div[class*="language-"] span.lang {
  display: none !important;
}
</style>

# OpenLayers - Basic Map Setup <img src="/assets/openlayers-logo.png" alt="OpenLayers Logo" style="height:100px; vertical-align:middle; margin-left:8px; float:right;" />

This example shows the minimal configuration needed to load and display EOPF Zarr data with OpenLayers.

<div v-if="webglSupport === false" class="warning">
⚠️ **WebGL Not Supported**: Your browser doesn't support WebGL, which is required for GeoZarr visualization. Please use a modern browser with WebGL enabled.
</div>

## Live Demo

<div v-if="webglSupport" class="demo-section">
  <div ref="mapRef" class="map-container"></div>
  
  <div class="code-section">
    <p>This example demonstrates basic OpenLayers configuration with:</p>
    <ul>
      <li><strong>OSM Base Layer</strong> - Provides geographic context</li>
      <li><strong>GeoZarr Source</strong> - Loads Sentinel-2 reflectance data</li>
      <li><strong>Gamma Correction</strong> - Brightens the image for better visibility</li>
      <li><strong>Auto-fit View</strong> - Automatically centers and zooms to data extent</li>
      <li><strong>Transparency Handling</strong> - Makes zero values transparent</li>
    </ul>
  </div>
</div>

## Code Implementation

::: code-group

```html [index.html]
<!DOCTYPE html>
<html>
<head>
  <title>OpenLayers Basic EOPF Example</title>
  <link rel="stylesheet" href="node_modules/ol/ol.css">
  <style>
    .map {
      height: 500px;
      width: 100%;
    }
  </style>
</head>
<body>
  <div id="map" class="map"></div>
  <script type="module" src="main.js"></script>
</body>
</html>
```

```javascript [main.js]
import Map from 'ol/Map.js';
import { getView, withExtentCenter, withHigherResolutions, withLowerResolutions, withZoom } from 'ol/View.js';
import TileLayer from 'ol/layer/WebGLTile.js';
import GeoZarr from 'ol/source/GeoZarr.js';
import OSM from 'ol/source/OSM.js';

// EOPF Zarr URL from STAC Browser (root store only, no group path)
const zarrUrl = 'https://s3.explorer.eopf.copernicus.eu/esa-zarr-sentinel-explorer-fra/tests-output/sentinel-2-l2a/S2B_MSIL2A_20251218T110359_N0511_R094_T30SUF_20251218T115223.zarr';

// Create GeoZarr source
const source = new GeoZarr({
  url: zarrUrl,
  group: 'measurements/reflectance',  // Zarr group path
  bands: ['b04', 'b03', 'b02'],       // RGB band mapping (Red, Green, Blue)
});

// Initialize map with OSM base layer
const map = new Map({
  layers: [
    // Base layer for geographic context
    new TileLayer({
      source: new OSM(),
    }),
    // Satellite data layer
    new TileLayer({
      source,
      style: {
        gamma: 1.5,  // Gamma correction for brightness
        color: [
          'color',
          // Red channel (Band 4 - Red)
          ['interpolate', ['linear'], ['band', 1], 0, 0, 0.5, 255],
          // Green channel (Band 3 - Green) 
          ['interpolate', ['linear'], ['band', 2], 0, 0, 0.5, 255],
          // Blue channel (Band 2 - Blue)
          ['interpolate', ['linear'], ['band', 3], 0, 0, 0.5, 255],
          // Alpha channel (transparency for no-data values)
          [
            'case',
            ['==', ['+', ['band', 1], ['band', 2], ['band', 3]], 0],
            0,  // Transparent if all bands are 0
            1,  // Opaque otherwise
          ],
        ],
      },
    }),
  ],
  target: 'map',
  view: getView(
    source,
    withLowerResolutions(1),   // Add 1 lower resolution level
    withHigherResolutions(2),  // Add 2 higher resolution levels  
    withExtentCenter(),        // Center view on data extent
    withZoom(2),              // Set initial zoom level
  ),
});
```

```json [package.json]
{
  "dependencies": {
    "ol": "dev",
    "zarrita": "^0.5.4"
  }
}
```

:::

## Key Features

- **Automatic Extent Fitting**: The map automatically centers on the data
- **WebGL Rendering**: Hardware-accelerated rendering for smooth performance
- **Multiscales Support**: Leverages Zarr's multi-resolution capabilities
- **Transparency**: Zero values are rendered as transparent

## Configuration Details

**Band Mapping**
- `bands: ['b04', 'b03', 'b02']` maps to Red, Green, Blue channels
- Sentinel-2 bands correspond to: B04 (Red), B03 (Green), B02 (Blue)

**Style Expressions**
- `['interpolate', ['linear'], ...]` scales reflectance values (0-1) to display values (0-255)
- `gamma: 1.5` applies brightness correction
- Conditional alpha creates transparency for no-data pixels

**View Configuration**
- `withExtentCenter()` automatically fits the view to data bounds
- `withLowerResolutions(1)` and `withHigherResolutions(2)` enable zoom levels beyond the native resolution
- `withZoom(2)` sets a reasonable initial zoom level

## Next Steps

Continue to the [NDVI example](/integrations/ol/ndvi) to see infrared band combinations for vegetation analysis.

<div class="navigation">
  <div></div>
  <span><strong>1 of 3</strong> - Basic Setup</span>
  <a href="/integrations/ol/ndvi" class="nav-button">Next: NDVI →</a>
</div>

