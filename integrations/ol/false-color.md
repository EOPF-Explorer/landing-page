---
title: OpenLayers - False Color Infrared
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
        bands: ['b11', 'b04', 'b03'], // SWIR, Red, Green
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
                ['interpolate', ['linear'], ['band', 1], 0, 0, 0.5, 255], // SWIR as red
                ['interpolate', ['linear'], ['band', 2], 0, 0, 0.5, 255], // Red as green
                ['interpolate', ['linear'], ['band', 3], 0, 0, 0.5, 255], // Green as blue
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

function copyCode() {
  const code = `// False color infrared
const layer = new TileLayer({
  source: new GeoZarr({
    url: zarrUrl,
    group: 'measurements/reflectance', 
    bands: ['b11', 'b04', 'b03'], // SWIR, Red, Green
  }),
  style: {
    gamma: 1.5,
    color: [
      'color',
      ['interpolate', ['linear'], ['band', 1], 0, 0, 0.5, 255], // SWIR as red
      ['interpolate', ['linear'], ['band', 2], 0, 0, 0.5, 255], // Red as green
      ['interpolate', ['linear'], ['band', 3], 0, 0, 0.5, 255], // Green as blue
      [
        'case',
        ['==', ['+', ['band', 1], ['band', 2], ['band', 3]], 0],
        0,
        1,
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

# False Color Infrared

This example demonstrates false color infrared visualization, which is excellent for vegetation analysis and land cover mapping.

<div v-if="webglSupport === false" class="warning">
⚠️ **WebGL Not Supported**: Your browser doesn't support WebGL, which is required for GeoZarr visualization.
</div>

<div v-if="webglSupport === true" class="success">
✅ **WebGL Supported**: Your browser can render false color infrared imagery.
</div>

## Live Demo

<div v-if="webglSupport" class="demo-section">
  <div ref="mapRef" class="map-container"></div>
  
  <div class="code-section">
    <button @click="copyCode" class="copy-button">📋 Copy Code</button>
    <p>This example demonstrates false color infrared with:</p>
    <ul>
      <li><strong>SWIR Band</strong> - Short-Wave Infrared (B11, 1610nm) as Red</li>
      <li><strong>Red Band</strong> - Red light (B04, 665nm) as Green</li>
      <li><strong>Green Band</strong> - Green light (B03, 560nm) as Blue</li>
      <li><strong>Enhanced Contrast</strong> - Better discrimination of land cover types</li>
    </ul>
  </div>
</div>

## Applications

### Vegetation Analysis
- **Healthy vegetation** appears **bright red** due to strong SWIR reflectance
- **Stressed vegetation** appears **darker red** or **brown**
- **Bare soil** appears in **blue/cyan** tones

### Land Cover Mapping
- **Water bodies** appear **dark blue** to **black**
- **Urban areas** show as **gray/white** patterns
- **Agricultural fields** display distinct spectral signatures

### Band Interpretation
- **Red Channel (SWIR B11)**: Sensitive to vegetation moisture content
- **Green Channel (Red B04)**: Standard red reflectance
- **Blue Channel (Green B03)**: Standard green reflectance

## Spectral Characteristics

The SWIR band (1610nm) is particularly useful because:
- Plants strongly reflect SWIR light
- Water strongly absorbs SWIR light
- Different vegetation types have distinct SWIR signatures

<div class="navigation">
  <a href="/integrations/ol/basic" class="nav-button">← Previous: Basic Setup</a>
  <span><strong>2 of 4</strong> - False Color Infrared</span>
  <a href="/integrations/ol/ndvi" class="nav-button">Next: NDVI →</a>
</div>