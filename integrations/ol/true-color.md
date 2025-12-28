---
title: OpenLayers - True Color
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

const zarrUrl = 'https://s3.explorer.eopf.copernicus.eu/esa-zarr-sentinel-explorer-fra/tests-output/sentinel-2-l2a/S2B_MSIL2A_20251218T110359_N0511_R094_T30SUF_20251218T115223.zarr'

onMounted(async () => {
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
        bands: ['b04', 'b03', 'b02'], // Red, Green, Blue
      })

      map = new Map({
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          new TileLayer({
            source,
            style: {
              gamma: 1.5, // Brighten the image
              color: [
                'color',
                ['interpolate', ['linear'], ['band', 1], 0, 0, 0.5, 255], // Red
                ['interpolate', ['linear'], ['band', 2], 0, 0, 0.5, 255], // Green
                ['interpolate', ['linear'], ['band', 3], 0, 0, 0.5, 255], // Blue
                [
                  'case',
                  ['==', ['+', ['band', 1], ['band', 2], ['band', 3]], 0],
                  0, // Transparent for zero values
                  1, // Opaque for non-zero values
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

function copyCode() {
  const code = `// True color with gamma correction and interpolation
const layer = new TileLayer({
  source: new GeoZarr({
    url: zarrUrl,
    group: 'measurements/reflectance',
    bands: ['b04', 'b03', 'b02'], // Red, Green, Blue
  }),
  style: {
    gamma: 1.5, // Brighten the image
    color: [
      'color',
      ['interpolate', ['linear'], ['band', 1], 0, 0, 0.5, 255], // Red
      ['interpolate', ['linear'], ['band', 2], 0, 0, 0.5, 255], // Green
      ['interpolate', ['linear'], ['band', 3], 0, 0, 0.5, 255], // Blue
      [
        'case',
        ['==', ['+', ['band', 1], ['band', 2], ['band', 3]], 0],
        0, // Transparent for zero values
        1, // Opaque for non-zero values
      ],
    ],
  },
});`
  
  navigator.clipboard.writeText(code)
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

pre {
  background: #f6f8fa;
  padding: 16px;
  border-radius: 4px;
  overflow-x: auto;
  font-size: 14px;
  line-height: 1.4;
  margin: 0;
}

code {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}
</style>

# True Color Visualization

This example demonstrates how to create natural-looking imagery by properly scaling Sentinel-2 reflectance values and applying gamma correction.

<div v-if="webglSupport === false" class="warning">
⚠️ **WebGL Not Supported**: Your browser doesn't support WebGL, which is required for GeoZarr visualization.
</div>

<div v-if="webglSupport === true" class="success">
✅ **WebGL Supported**: Your browser can render true color satellite imagery.
</div>

## Live Demo

<div v-if="webglSupport" class="demo-section">
  <div ref="mapRef" class="map-container"></div>
  
  <div class="code-section">
    <button @click="copyCode" class="copy-button">📋 Copy Code</button>
    <p>This example demonstrates true color rendering with:</p>
    <ul>
      <li><strong>Band Selection</strong> - Red (B04), Green (B03), Blue (B02)</li>
      <li><strong>Linear Interpolation</strong> - Maps reflectance values (0-0.5) to RGB (0-255)</li>
      <li><strong>Gamma Correction</strong> - γ = 1.5 for better visual appearance</li>
      <li><strong>Transparency</strong> - Zero values rendered as transparent</li>
    </ul>
  </div>
</div>

## Technical Details

### Reflectance Scaling
Sentinel-2 reflectance values typically range from 0 to ~0.5 (50% reflectance). The `interpolate` function maps these values to the 0-255 RGB range needed for display.

### Gamma Correction
A gamma value of 1.5 brightens darker areas while preserving detail in bright areas, making the imagery more visually appealing.

### Band Mapping
- **Band 1** → Red channel (B04 - 665nm)
- **Band 2** → Green channel (B03 - 560nm)  
- **Band 3** → Blue channel (B02 - 490nm)

<div class="navigation">
  <a href="/integrations/ol/basic" class="nav-button">← Previous: Basic</a>
  <span><strong>2 of 5</strong> - True Color</span>
  <a href="/integrations/ol/false-color" class="nav-button">Next: False Color →</a>
</div>