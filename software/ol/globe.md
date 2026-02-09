---
title: OpenLayers - 3D Globe with OpenGlobus
layout: page
---

<style scoped>
/* Import common CSS first to avoid FOUC */
@import url("../software.css");
</style>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import Map from 'ol/Map.js'
import { getView, withExtentCenter, withHigherResolutions, withLowerResolutions, withZoom } from 'ol/View.js'
import TileLayer from 'ol/layer/WebGLTile.js'
import GeoZarr from 'ol/source/GeoZarr.js'
import OSM from 'ol/source/OSM.js'
import 'ol/ol.css'
import { checkWebGLSupport } from '../index'

// Cesium and olcs will be imported dynamically on client-side only
let OLCesium = null
let Cesium = null

const webglSupport = ref(null)
const mapRef = ref()
const is3DEnabled = ref(false)
let map = null
let ol3d = null

// EOPF Zarr URL (root store only, no group path)
const zarrUrl = 'https://s3.explorer.eopf.copernicus.eu/esa-zarr-sentinel-explorer-fra/tests-output/sentinel-2-l2a-staging/S2A_MSIL2A_20251227T100441_N0511_R122_T33TVF_20251227T121715.zarr'

// OpenEO XYZ service URL
const openeoServiceId = '456c1e23-47f2-4567-98cf-dcde378a05f7'
const openeoBaseUrl = 'https://api.explorer.eopf.copernicus.eu/openeo/services/xyz'
const timeRange = encodeURIComponent('["2026-01-22","2026-01-23"]')

function buildXYZUrl() {
  return `${openeoBaseUrl}/${openeoServiceId}/tiles/{z}/{x}/{y}?time=${timeRange}`
}

onMounted(() => {
  // Check WebGL support using common utility
  webglSupport.value = checkWebGLSupport()

  if (webglSupport.value) {
    nextTick(() => {
      initializeMap()
    })
  }
})

async function initializeMap() {
  if (mapRef.value) {
    try {
      // Dynamically import Cesium and olcs only on client-side
      if (!Cesium) {
        const cesiumModule = await import('cesium')
        Cesium = cesiumModule // Use the full module namespace
        // Import CSS only in browser
        if (typeof window !== 'undefined') {
          await import('cesium/Build/Cesium/Widgets/widgets.css')
          window.CESIUM_BASE_URL = '/node_modules/cesium/Build/Cesium/'
          window.Cesium = Cesium
        }
      }
      if (!OLCesium) {
        const olcsModule = await import('olcs')
        OLCesium = olcsModule.default
      }
      
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

      // Initialize ol-cesium for 3D globe view
      console.log('Initializing OLCesium...')
      console.log('OpenLayers map layers:', map.getLayers().getArray())
      
      ol3d = new OLCesium({ map })
      
      // Configure the Cesium scene after initialization
      const scene = ol3d.getCesiumScene()
      console.log('Cesium scene:', scene)
      console.log('Cesium canvas:', ol3d.getCesiumScene().canvas)
      
      scene.globe.enableLighting = false
      scene.globe.showGroundAtmosphere = true
      scene.globe.depthTestAgainstTerrain = true // Enable proper occlusion with terrain
      
      // Add terrain - using Cesium World Terrain
      // Load terrain asynchronously
      Cesium.createWorldTerrainAsync({
        requestWaterMask: true, // Show water bodies
        requestVertexNormals: true // Better lighting
      }).then(terrainProvider => {
        scene.terrainProvider = terrainProvider
        console.log('Terrain provider loaded successfully')
      }).catch(error => {
        console.warn('Could not load terrain, using default ellipsoid:', error)
      })
      
      // Add base imagery to Cesium
      scene.imageryLayers.removeAll()
      scene.imageryLayers.addImageryProvider(
        new Cesium.OpenStreetMapImageryProvider({
          url: 'https://tile.openstreetmap.org/'
        })
      )
      console.log('Added OSM base imagery to Cesium')
      
      // Add OpenEO XYZ service layer for Sentinel data on the Cesium globe
      const xyzUrl = buildXYZUrl()
      console.log('OpenEO XYZ URL template:', xyzUrl)
      const xyzProvider = new Cesium.UrlTemplateImageryProvider({
        url: xyzUrl,
        maximumLevel: 18,
        credit: 'Sentinel Data © ESA/Copernicus via OpenEO'
      })
      scene.imageryLayers.addImageryProvider(xyzProvider)
      console.log('Added OpenEO Sentinel layer to Cesium')
      
      // Check which OL layers are being synchronized
      console.log('OLCesium synchronizers:', ol3d)
      const dataProvider = ol3d.getDataSourceDisplay()
      console.log('Cesium data source display:', dataProvider)
      
      // Check if the Cesium container is properly created
      const container = document.querySelector('.ol-viewport')
      console.log('OL viewport:', container)
      const cesiumContainer = document.querySelector('.cesium-viewer')
      console.log('Cesium viewer container:', cesiumContainer)
      
      console.log('OLCesium initialized successfully')
      console.log('Note: WebGLTile layers with GeoZarr may not be synchronized to Cesium automatically')

    } catch (error) {
      console.error('Failed to initialize map:', error)
      console.error('Error stack:', error.stack)
    }
  }
}

function toggle3D() {
  if (ol3d) {
    is3DEnabled.value = !is3DEnabled.value
    console.log('Toggling 3D mode to:', is3DEnabled.value)
    ol3d.setEnabled(is3DEnabled.value)
    
    // Check the state after toggle
    const enabled = ol3d.getEnabled()
    console.log('OLCesium actual enabled state:', enabled)
    
    // Log the canvas visibility
    const scene = ol3d.getCesiumScene()
    const canvas = scene.canvas
    console.log('Cesium canvas display:', window.getComputedStyle(canvas).display)
    console.log('Cesium canvas visibility:', window.getComputedStyle(canvas).visibility)
    console.log('Cesium canvas size:', canvas.width, 'x', canvas.height)
    
    if (is3DEnabled.value) {
      // Force camera to a known good position when enabling 3D
      const camera = scene.camera
      console.log('Camera position before:', camera.position)
      console.log('Camera heading:', camera.heading, 'pitch:', camera.pitch, 'roll:', camera.roll)
      
      // Check what imagery is loaded
      console.log('Imagery layers count:', scene.imageryLayers.length)
      scene.imageryLayers._layers.forEach((layer, idx) => {
        console.log(`Imagery layer ${idx}:`, layer.imageryProvider)
      })
      
      // Check if base imagery provider exists
      if (scene.imageryLayers.length === 0) {
        console.warn('No imagery layers! Adding default base layer...')
        scene.imageryLayers.addImageryProvider(
          new Cesium.OpenStreetMapImageryProvider({
            url: 'https://tile.openstreetmap.org/'
          })
        )
      }
      
      // Set camera to view the data location (southern France, Tile T33TVF)
      camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(4.5, 43.5, 5000000), // lon, lat, height
        orientation: {
          heading: 0,
          pitch: Cesium.Math.toRadians(-90), // Look straight down
          roll: 0
        }
      })
      
      console.log('Camera position after:', camera.position)
      console.log('Rendering mode:', scene.mode)
      console.log('Globe showing:', scene.globe.show)
      console.log('Globe base color:', scene.globe.baseColor)
      console.log('Scene background color:', scene.backgroundColor)
      
      // Force a render
      scene.requestRender()
    }
  } else {
    console.error('ol3d is not initialized')
  }
}

</script>

## OpenLayers - 3D Globe with Direct GeoZarr <img src="/assets/openlayers-logo.png" alt="OpenLayers Logo" style="height:100px; vertical-align:middle; margin-left:8px; float:right;" />

This example demonstrates how to display EOPF Zarr data on an interactive 3D globe using **ol-cesium**, which combines OpenLayers' native GeoZarr support with CesiumJS 3D rendering. No tile server required!

<div v-if="webglSupport === false" class="warning">
⚠️ **WebGL Not Supported**: Your browser doesn't support WebGL, which is required for 3D globe visualization. Please use a modern browser with WebGL enabled.
</div>

### Live Demo

<div v-if="webglSupport" class="demo-section">
  <div class="controls">
    <button @click="toggle3D" class="button" :class="{ 'active': is3DEnabled }">
      {{ is3DEnabled ? '🌍 3D Globe Active' : '🗺️ Switch to 3D Globe' }}
    </button>
  </div>
  
  <div ref="mapRef" class="map-container" style="height: 600px;"></div>
</div>

<div v-if="webglSupport" class="code-section">
  <p>This example demonstrates 3D globe visualization with:</p>
  <ul>
    <li><strong>Direct GeoZarr Access</strong> - No tile server needed!</li>
    <li><strong>Toggle 2D/3D Views</strong> - Switch between flat map and globe</li>
    <li><strong>Same Data Source</strong> - Uses OpenLayers GeoZarr source in 3D</li>
    <li><strong>CesiumJS Rendering</strong> - Powered by Cesium's 3D engine</li>
    <li><strong>Atmospheric Effects</strong> - Realistic Earth atmosphere rendering</li>
  </ul>
  <div class="info-box">
    <strong>💡 Key Advantage:</strong> This approach uses the same GeoZarr source from the 2D examples, eliminating the need for a separate tile server.
  </div>
</div>

### Code Implementation

::: code-group

```html [index.html]
<!DOCTYPE html>
<html>
  <head>
    <title>OL-Cesium EOPF Example</title>
    <link rel="stylesheet" href="node_modules/ol/ol.css" />
    <style>
      #map {
        height: 600px;
        width: 100%;
      }
      .toggle-3d {
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 1000;
      }
    </style>
  </head>
  <body>
    <button class="toggle-3d" onclick="toggle3D()">Toggle 3D</button>
    <div id="map"></div>
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
import OLCesium from "olcs";
import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

// Configure Cesium base URL for assets
window.CESIUM_BASE_URL = "/node_modules/cesium/Build/Cesium/";

// EOPF Zarr URL (same as 2D examples - direct access!)
const zarrUrl =
  "https://s3.explorer.eopf.copernicus.eu/esa-zarr-sentinel-explorer-fra/tests-output/sentinel-2-l2a-staging/S2A_MSIL2A_20251227T100441_N0511_R122_T33TVF_20251227T121715.zarr";

// Create GeoZarr source (direct access, no tile server)
const source = new GeoZarr({
  url: zarrUrl,
  group: "measurements/reflectance",
  bands: ["b04", "b03", "b02"],
});

// Initialize OpenLayers map (exactly like 2D examples)
const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
    new TileLayer({
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
  target: "map",
  view: getView(
    source,
    withLowerResolutions(1),
    withHigherResolutions(2),
    withExtentCenter(),
    withZoom(2)
  ),
});

// Add 3D globe capability with ol-cesium
const ol3d = new OLCesium({
  map,
  sceneOptions: {
    globe: true,
    skyAtmosphere: true,
    skyBox: true,
  },
});

// Toggle between 2D and 3D
let is3D = false;
window.toggle3D = function () {
  is3D = !is3D;
  ol3d.setEnabled(is3D);
};
```

```json [package.json]
{
  "dependencies": {
    "ol": "dev",
    "olcs": "^2.18.0",
    "cesium": "^1.121.0",
    "zarrita": "^0.5.4"
  }
}
```

:::

### Installation and Setup

ol-cesium seamlessly integrates OpenLayers with CesiumJS. Here's how to set it up:

#### Step 1: Install Dependencies

```bash
npm install ol olcs cesium zarrita
```

#### Step 2: Configure Cesium Assets

Cesium requires certain assets (textures, shaders) to be served. Add to your build config:

**Vite Configuration (vite.config.js)**
```javascript
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/cesium/Build/Cesium/Assets/*',
          dest: 'cesium/Assets'
        },
        {
          src: 'node_modules/cesium/Build/Cesium/Workers/*',
          dest: 'cesium/Workers'
        },
        {
          src: 'node_modules/cesium/Build/Cesium/ThirdParty/*',
          dest: 'cesium/ThirdParty'
        },
        {
          src: 'node_modules/cesium/Build/Cesium/Widgets/*',
          dest: 'cesium/Widgets'
        }
      ]
    })
  ],
  define: {
    CESIUM_BASE_URL: JSON.stringify('/cesium')
  }
});
```

#### Step 3: Set Cesium Base URL

In your main.js, before initializing OLCesium:

```javascript
import { buildModuleUrl } from 'cesium';

// Configure Cesium to find its assets
window.CESIUM_BASE_URL = '/cesium';
```

That's it! The GeoZarr source works directly in 3D with no additional configuration.un the server
uvicorn titiler.application.main:app --reload --port 8000
```

Then construct tile URLs like:
```javascript
const tileUrl = `http://localhost:8000/cog/tiles/{z}/{x}/{y}?url=${encodeURIComponent(zarrUrl)}&bands=b04,b03,b02&rescale=0,0.5`
```

#### Option 2: Custom Tile Server

Create a custom service using Python with FastAPI:

```python
from fastapi import FastAPI
from rio_tiler.io import Reader
import zarr

app = FastAPI()

@app.get("/tiles/{z}/{x}/{y}")
async def get_tile(z: int, x: int, y: int, url: str, bands: str):
    # Read from Zarr and return tile
    # Implementation depends on your Zarr structure
    pass
```

#### Option 3: Pre-generate Tiles

For static deployments, pre-generate XYZ tiles from your Zarr data:

```python
import xarray as xr
import rasterio
from rasterio.warp import calculate_default_transform, reproject

# Open Zarr dataset
ds = xr.open_zarr(zarrUrl, group='measurements/reflectance')

# GeDirect GeoZarr Access**: Uses the same source as 2D examples - no tile server needed
- **Seamless 2D/3D Toggle**: Switch between flat map and globe with one click
- **Hardware Accelerated**: WebGL + WebGL2 rendering for smooth performance
- **Shared Data Pipeline**: All OpenLayers layers work in 3D
- **CesiumJS Power**: Full 3D globe with atmosphere, terrain support, and realistic rendering

### Configuration Details

**OLCesium Initialization**

```javascript
const ol3d = new OLCesium({
  map,                    // Your OpenLayers map
  sceneOptions: {
    globe: true,          // Enable globe rendering
    skyAtmosphere: true,  // Atmospheric scattering
    skyBox: true,         // Stars background
  },
});
```

**Toggle 3D View**

```javascript
ol3d.setEnabled(true);   // Switch to 3D globe
ol3d.setEnabled(false);  // Back to 2D map
```

**2D Mode (OpenLayers)**
| Action | Desktop | Touch |
|--------|---------|-------|
| Pan | Left-click + drag | One finger drag |
| Zoom | Mouse wheel | Pinch |
| Rotate | Alt + Shift + drag | Two finger rotate |

**3D Mode (Cesium)**
| Action | Desktop | Touch |
|--------|---------|-------|
| Rotate Globe | Left-click + drag | One finger drag |
| Zoom | Mouse wheel or Right-click + drag | Pinch |
| Tilt | Middle-click + drag or Ctrl + Left-click + drag | Two finger drag up/down |
| Look Around | Right-click + drag | Two finger drag |

### Why ol-cesium?

**Advantages over separate 3D libraries:**
1. **Code Reuse**: Same GeoZarr source works in 2D and 3D
2. **No Tile Server**: Direct Zarr access, no additional infrastructure
3. **Layer Compatibility**: All OpenLayers layers (WebGL, Vector, etc.) work in 3D
4. **Smooth Transitions**: Toggle between 2D/3D without reloading data
5. **Unified API**: Familiar OpenLayers API with 3D enhancementsoom | Mouse wheel | Pinch |
| Tilt | Right-click + drag | Two finger drag up/down |
| Pan | Middle-click + drag | Three finger drag |

### Alternative: OpenLayers with ol-cesium

If you need tighter integration with your existing OpenLayers code, consider [ol-cesium](https://openlayers.org/ol-cesium/), which provides a 3D view for OpenLayers using Cesium:

```javascript
import OLCesium from 'olcs/OLCesium.js';

// Your existing OpenLayers map
const map = new Map({ /* ... */ });

// Add 3D view
const ol3d = new OLCesium({ map });
ol3d.setEnabled(true);
```

### Next Steps

Continue to explore other OpenLayers examples:
- [Basic 2D Setup](./basic) - Standard flat map
- [NDVI Analysis](./ndvi) - Vegetation indices
- [STAC Integration](./stac) - Dynamic catalog loading

<div class="navigation">
  <a href="./stac" class="button border">← Previous: STAC</a>
  <span><strong>4 of 4</strong> - 3D Globe</span>
  <div></div>
</div>
