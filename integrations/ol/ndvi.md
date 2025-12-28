---
title: OpenLayers - NDVI Calculation
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
        bands: ['b08', 'b04'], // NIR, Red
      })

      map = new Map({
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          new TileLayer({
            source,
            style: {
              color: [
                'case',
                ['>', 
                  ['/', 
                    ['-', ['band', 1], ['band', 2]], 
                    ['+', ['band', 1], ['band', 2]]
                  ], 
                  0.3
                ],
                [0, 200, 0, 255], // Green for vegetation
                [200, 100, 0, 255] // Brown for non-vegetation
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
  const code = `// NDVI calculation
const layer = new TileLayer({
  source: new GeoZarr({
    url: zarrUrl,
    group: 'measurements/reflectance',
    bands: ['b08', 'b04'], // NIR, Red
  }),
  style: {
    color: [
      'case',
      // NDVI > 0.3 = vegetation (green)
      ['>', 
        ['/', 
          ['-', ['band', 1], ['band', 2]], 
          ['+', ['band', 1], ['band', 2]]
        ], 
        0.3
      ],
      [0, 200, 0, 255], // Green for vegetation
      [200, 100, 0, 255] // Brown for non-vegetation
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

# NDVI Calculation

This example demonstrates real-time calculation of the Normalized Difference Vegetation Index (NDVI) directly in the browser using WebGL expressions.

<div v-if="webglSupport === false" class="warning">
⚠️ **WebGL Not Supported**: Your browser doesn't support WebGL, which is required for GeoZarr visualization and NDVI calculation.
</div>

<div v-if="webglSupport === true" class="success">
✅ **WebGL Supported**: Your browser can perform real-time NDVI calculations.
</div>

## Live Demo

<div v-if="webglSupport" class="demo-section">
  <div ref="mapRef" class="map-container"></div>
  
  <div class="code-section">
    <button @click="copyCode" class="copy-button">📋 Copy Code</button>
    <p>This example demonstrates NDVI calculation with:</p>
    <ul>
      <li><strong>NIR Band</strong> - Near-infrared (B08, 842nm)</li>
      <li><strong>Red Band</strong> - Red light (B04, 665nm)</li>
      <li><strong>Real-time Calculation</strong> - NDVI = (NIR - Red) / (NIR + Red)</li>
      <li><strong>Threshold Classification</strong> - Green for vegetation (NDVI > 0.3)</li>
    </ul>
  </div>
</div>

## NDVI Formula

The Normalized Difference Vegetation Index is calculated as:

```
NDVI = (NIR - Red) / (NIR + Red)
```

Where:
- **NIR** = Near-infrared reflectance (Band 8)
- **Red** = Red reflectance (Band 4)

## Interpretation

<div class="ndvi-legend">
  <h3>NDVI Value Legend</h3>
  <div class="legend-item">
    <div class="legend-color" style="background-color: rgb(0, 200, 0);"></div>
    <span><strong>Green</strong> - Healthy vegetation (NDVI > 0.3)</span>
  </div>
  <div class="legend-item">
    <div class="legend-color" style="background-color: rgb(200, 100, 0);"></div>
    <span><strong>Brown</strong> - Non-vegetation or stressed vegetation (NDVI ≤ 0.3)</span>
  </div>
</div>

### NDVI Ranges
- **0.8 to 1.0** - Dense healthy vegetation
- **0.5 to 0.8** - Moderate vegetation
- **0.2 to 0.5** - Sparse vegetation
- **0.0 to 0.2** - Rock, sand, or snow
- **-1.0 to 0.0** - Water, clouds, or snow

## Applications

### Agriculture
- **Crop health monitoring** - Identify stressed areas
- **Yield prediction** - Correlate NDVI with crop productivity
- **Irrigation planning** - Target water application

### Environmental Monitoring
- **Deforestation detection** - Monitor forest cover changes
- **Drought assessment** - Track vegetation stress
- **Phenology studies** - Seasonal vegetation cycles

### Urban Planning
- **Green space assessment** - Quantify urban vegetation
- **Heat island mapping** - Identify cooling vegetation
- **Development impact** - Monitor vegetation loss

## Performance Benefits

Using OpenLayers WebGL expressions for NDVI calculation provides:
- **Real-time processing** - No server-side computation needed
- **Interactive exploration** - Pan and zoom without delays
- **Scalable visualization** - Hardware-accelerated rendering

<div class="navigation">
  <a href="/integrations/ol/false-color" class="nav-button">← Previous: False Color</a>
  <span><strong>3 of 4</strong> - NDVI Calculation</span>
  <a href="/integrations/ol/contrast" class="nav-button">Next: Contrast →</a>
</div>