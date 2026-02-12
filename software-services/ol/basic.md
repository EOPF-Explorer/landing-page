---
title: OpenLayers - Basic Setup
layout: page
---


<script setup>
import { ref, onMounted, nextTick } from "vue"
import Map from "ol/Map.js"
import { getView, withExtentCenter, withHigherResolutions, withLowerResolutions, withZoom } from "ol/View.js"
import WebGLTileLayer from "ol/layer/WebGLTile.js"
import TileLayer from "ol/layer/Tile.js"
import GeoZarr from "ol/source/GeoZarr.js"
import XYZ from "ol/source/XYZ.js"
import "ol/ol.css"
import { checkWebGLSupport } from "../index"

import Tutorial from "../../.vitepress/components/Tutorial.vue"

/** @type {import("vue").Ref<boolean | null>} */
const webglSupport = ref(null)
const mapRef = ref()
let map = null

// EOPF Zarr URL (root store only, no group path)
const zarrUrl = "https://s3.explorer.eopf.copernicus.eu/esa-zarr-sentinel-explorer-fra/tests-output/sentinel-2-l2a-staging/S2A_MSIL2A_20251227T100441_N0511_R122_T33TVF_20251227T121715.zarr"


onMounted(() => {
  // Check WebGL support using common utility
  webglSupport.value = checkWebGLSupport()

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
        group: "measurements/reflectance",
        bands: ["b04", "b03", "b02"],
      })

      map = new Map({
        layers: [
          new TileLayer({
            source: new XYZ({
              url: "https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg"
            }),
          }),
          new WebGLTileLayer({
            source,
            style: {
              gamma: 1.5,
              color: [
                "color",
                ["interpolate", ["linear"], ["band", 1], 0, 0, 0.5, 255],
                ["interpolate", ["linear"], ["band", 2], 0, 0, 0.5, 255],
                ["interpolate", ["linear"], ["band", 3], 0, 0, 0.5, 255],
                [
                  "case",
                  ["==", ["+", ["band", 1], ["band", 2], ["band", 3]], 0],
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
      console.error("Failed to initialize map:", error)
    }
  }
}
</script>

## OpenLayers - Basic Map Setup <img src="/assets/openlayers-logo.png" alt="OpenLayers Logo" style="height:100px; vertical-align:middle; margin-left:8px; float:right;" />

This example shows the minimal configuration needed to load and display EOPF Zarr data with OpenLayers.

<div v-if="webglSupport === false" class="border warning">

⚠️ **WebGL Not Supported**: Your browser doesn"t support WebGL, which is required for GeoZarr visualization. Please use a modern browser with WebGL enabled.

</div>

<Tutorial v-if="webglSupport">
  
  <template #description>
    <p>This example demonstrates basic OpenLayers configuration with:</p>
    <ul>
      <li><strong>OSM Base Layer</strong> - Provides geographic context</li>
      <li><strong>GeoZarr Source</strong> - Loads Sentinel-2 reflectance data</li>
      <li><strong>Gamma Correction</strong> - Brightens the image for better visibility</li>
      <li><strong>Auto-fit View</strong> - Automatically centers and zooms to data extent</li>
      <li><strong>Transparency Handling</strong> - Makes zero values transparent</li>
    </ul>
  </template>


  <template #demo>
    <div ref="mapRef" style="width: 100%; height: 100%;"></div>
  </template>

  <template #code>
  
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
import WebGLTileLayer from "ol/layer/WebGLTile.js";
import TileLayer from "ol/layer/Tile.js";
import GeoZarr from "ol/source/GeoZarr.js";
import XYZ from "ol/source/XYZ.js";

// EOPF Zarr URL from STAC Browser (root store only, no group path)
const zarrUrl =
  "https://s3.explorer.eopf.copernicus.eu/esa-zarr-sentinel-explorer-fra/tests-output/sentinel-2-l2a-staging/S2A_MSIL2A_20251227T100441_N0511_R122_T33TVF_20251227T121715.zarr";

// Create GeoZarr source
const source = new GeoZarr({
  url: zarrUrl,
  group: "measurements/reflectance", // Zarr group path
  bands: ["b04", "b03", "b02"], // RGB band mapping (Red, Green, Blue)
});

// Initialize map with base layer
const map = new Map({
  layers: [
    // Base layer for geographic context
    new TileLayer({
      source: new XYZ({
        url: "https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg"
      }),
    }),
    // Satellite data layer
    new WebGLTileLayer({
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
            ["==", ["+", ["band", 1], ["band", 2], ["band",
            3]], 0],
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
    "ol": "^10.8.0"
  }
}
```

:::
  
  </template>
</Tutorial>

### Key Features

- **Automatic Extent Fitting**: The map automatically centers on the data
- **WebGL Rendering**: Hardware-accelerated rendering for smooth performance
- **Multiscales Support**: Leverages [Multiscales Zarr conventions](https://github.com/zarr-conventions/multiscales) for pyramid levels access
- **Transparency**: Zero values are rendered as transparent

### Configuration Details

**Band Mapping**

- `bands: ["b04", "b03", "b02"]` maps to Red, Green, Blue channels
- Sentinel-2 bands correspond to: B04 (Red), B03 (Green), B02 (Blue)

**Style Expressions**

- `["interpolate", ["linear"], ...]` scales reflectance values (0-1) to display values (0-255)
- `gamma: 1.5` applies brightness correction
- Conditional alpha creates transparency for no-data pixels

**View Configuration**

- `withExtentCenter()` automatically fits the view to data bounds
- `withLowerResolutions(1)` and `withHigherResolutions(2)` enable zoom levels beyond the native resolution
- `withZoom(2)` sets a reasonable initial zoom level

### Next Steps

Continue to the [NDVI example](./ndvi) to see infrared band combinations for vegetation analysis.

<div class="surface-variant large-padding center-align">
  <div></div>
  <span class="padding"><strong>1 of 3</strong> - Basic Setup</span>
  <a href="./ndvi" class="button border">Next: NDVI →</a>
</div>
