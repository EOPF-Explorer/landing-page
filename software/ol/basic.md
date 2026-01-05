---
title: OpenLayers - Basic Setup
layout: page
---

<style>
/* Import common CSS first to avoid FOUC */
@import '../common.css';
</style>

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
  // Load common utilities on client-side only
  if (typeof window !== 'undefined') {
    const script = document.createElement('script')
    script.src = '../common.js'
    document.head.appendChild(script)
  }
  
  // Wait for common utilities to load
  await waitForCommonUtilities()
  
  // Check WebGL support using common utility
  webglSupport.value = window.checkWebGLSupport()

  if (webglSupport.value) {
    nextTick(() => {
      initializeMap()
    })
  }
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

## OpenLayers - Basic Map Setup <img src="/assets/openlayers-logo.png" alt="OpenLayers Logo" style="height:100px; vertical-align:middle; margin-left:8px; float:right;" />

This example shows the minimal configuration needed to load and display EOPF Zarr data with OpenLayers.

<div v-if="webglSupport === false" class="warning">
⚠️ **WebGL Not Supported**: Your browser doesn't support WebGL, which is required for GeoZarr visualization. Please use a modern browser with WebGL enabled.
</div>

### Live Demo

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

### Code Implementation

::: code-group

```html [index.html]
<!DOCTYPE html>
<html>
  <head>
    <title>OpenLayers Basic EOPF Example</title>
    <link rel="stylesheet" href="node_modules/ol/ol.css" />
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
import Map from "ol/Map.js";
import {
  getView,
  withExtentCenter,
  withHigherResolutions,
  withLowerResolutions,
  withZoom,
} from "ol/View.js";
import TileLayer from "ol/layer/WebGLTile.js";
import GeoZarr from "ol/source/GeoZarr.js";
import OSM from "ol/source/OSM.js";

// EOPF Zarr URL from STAC Browser (root store only, no group path)
const zarrUrl =
  "https://s3.explorer.eopf.copernicus.eu/esa-zarr-sentinel-explorer-fra/tests-output/sentinel-2-l2a/S2B_MSIL2A_20251218T110359_N0511_R094_T30SUF_20251218T115223.zarr";

// Create GeoZarr source
const source = new GeoZarr({
  url: zarrUrl,
  group: "measurements/reflectance", // Zarr group path
  bands: ["b04", "b03", "b02"], // RGB band mapping (Red, Green, Blue)
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
        gamma: 1.5, // Gamma correction for brightness
        color: [
          "color",
          // Red channel (Band 4 - Red)
          ["interpolate", ["linear"], ["band", 1], 0, 0, 0.5, 255],
          // Green channel (Band 3 - Green)
          ["interpolate", ["linear"], ["band", 2], 0, 0, 0.5, 255],
          // Blue channel (Band 2 - Blue)
          ["interpolate", ["linear"], ["band", 3], 0, 0, 0.5, 255],
          // Alpha channel (transparency for no-data values)
          [
            "case",
            ["==", ["+", ["band", 1], ["band", 2], ["band", 3]], 0],
            0, // Transparent if all bands are 0
            1, // Opaque otherwise
          ],
        ],
      },
    }),
  ],
  target: "map",
  view: getView(
    source,
    withLowerResolutions(1), // Add 1 lower resolution level
    withHigherResolutions(2), // Add 2 higher resolution levels
    withExtentCenter(), // Center view on data extent
    withZoom(2) // Set initial zoom level
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

### Key Features

- **Automatic Extent Fitting**: The map automatically centers on the data
- **WebGL Rendering**: Hardware-accelerated rendering for smooth performance
- **Multiscales Support**: Leverages [Multiscales Zarr conventions](https://github.com/zarr-conventions/multiscales) for pyramid levels access
- **Transparency**: Zero values are rendered as transparent

### Configuration Details

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

### Next Steps

Continue to the [NDVI example](/integrations/ol/ndvi) to see infrared band combinations for vegetation analysis.

<div class="navigation">
  <div></div>
  <span><strong>1 of 3</strong> - Basic Setup</span>
  <a href="/integrations/ol/ndvi" class="nav-button">Next: NDVI →</a>
</div>
