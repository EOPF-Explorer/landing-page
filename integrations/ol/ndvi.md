---
title: OpenLayers - NDVI Calculation
layout: page
---

<script setup>
import { ref, onMounted, nextTick, watch } from 'vue'
import { scale as chromaScale } from 'chroma-js'
import Map from 'ol/Map.js'
import { getView, withExtentCenter, withHigherResolutions, withLowerResolutions, withZoom } from 'ol/View.js'
import TileLayer from 'ol/layer/WebGLTile.js'
import GeoZarr from 'ol/source/GeoZarr.js'
import OSM from 'ol/source/OSM.js'
import 'ol/ol.css'

const webglSupport = ref(null)
const mapRef = ref()
let map = null
let ndviLayer = null

// Interactive NDVI controls
const minColor = ref('#8B4513')  // Brown
const maxColor = ref('#00FF00')  // Green  
const minValue = ref(-0.5)
const maxValue = ref(0.7)

const zarrUrl = 'https://s3.explorer.eopf.copernicus.eu/esa-zarr-sentinel-explorer-fra/tests-output/sentinel-2-l2a/S2B_MSIL2A_20251218T110359_N0511_R094_T30SUF_20251218T115223.zarr'

// NDVI color scale configuration  
const segments = 10
const defaultMinColor = '#8B4513'  // Brown
const defaultMaxColor = '#00FF00'  // Green
const defaultMinValue = -0.5
const defaultMaxValue = 0.7

function getVariables() {
  const variables = {}
  const scale = chromaScale([minColor.value, maxColor.value]).mode('lab')
  const delta = (maxValue.value - minValue.value) / segments

  for (let i = 0; i <= segments; ++i) {
    const color = scale(i / segments).rgb()
    const value = minValue.value + i * delta
    variables[`value${i}`] = value
    variables[`red${i}`] = color[0]
    variables[`green${i}`] = color[1]
    variables[`blue${i}`] = color[2]
  }
  return variables
}

function colors() {
  const stops = []
  for (let i = 0; i <= segments; ++i) {
    stops[i * 2] = ['var', `value${i}`]
    const red = ['var', `red${i}`]
    const green = ['var', `green${i}`]
    const blue = ['var', `blue${i}`]
    stops[i * 2 + 1] = ['color', red, green, blue]
  }
  return stops
}

// NDVI calculation expression
const ndvi = [
  '/',
  ['-', ['band', 2], ['band', 1]], // NIR - Red
  ['+', ['band', 2], ['band', 1]], // NIR + Red
]

function updateColors() {
  if (ndviLayer) {
    ndviLayer.updateStyleVariables(getVariables())
  }
}

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

// Watch for changes to update colors
watch([minColor, maxColor, minValue, maxValue], updateColors)

function initializeMap() {
  if (mapRef.value) {
    try {
      const source = new GeoZarr({
        url: zarrUrl,
        group: 'measurements/reflectance',
        bands: ['b04', 'b8a'], // Red, NIR
      })
      ndviLayer = new TileLayer({
        source: source,
        style: {
          variables: getVariables(),
          color: ['interpolate', ['linear'], ndvi, ...colors()],
        },
      })
      map = new Map({
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          ndviLayer,
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

.controls {
  background: #f8f9fa;
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
}

.controls table {
  width: 100%;
  border-collapse: collapse;
}

.controls td {
  padding: 8px 12px;
  vertical-align: middle;
}

.controls td:first-child {
  font-weight: 500;
  white-space: nowrap;
}

.controls input[type="range"] {
  width: 100%;
  margin: 0 8px;
}

.controls input[type="color"] {
  width: 40px;
  height: 30px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
}

.controls .data {
  text-align: center;
  font-family: monospace;
  font-size: 14px;
  min-width: 50px;
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

## Live Demo

<div v-if="webglSupport" class="demo-section">
  <div ref="mapRef" class="map-container"></div>
  
  <div class="code-section">
    <p>This example demonstrates NDVI calculation with:</p>
    <ul>
      <li><strong>NIR Band</strong> - Near-infrared (b8a, 842nm)</li>
      <li><strong>Red Band</strong> - Red light (B04, 665nm)</li>
      <li><strong>Real-time Calculation</strong> - NDVI = (NIR - Red) / (NIR + Red)</li>
      <li><strong>Linear Color Scale</strong> - Yellow to green for NDVI range -0.6 to 0.8</li>
    </ul>
  </div>
</div>

<div class="controls">
  <h3>NDVI Visualization Controls</h3>
  <table>
    <tr>
      <td>Min NDVI</td>
      <td><input type="range" v-model.number="minValue" min="-1.0" max="-0.1" step="0.01" /></td>
      <td class="data">{{ minValue.toFixed(1) }}</td>
      <td><input type="color" v-model="minColor" /></td>
    </tr>
    <tr>
      <td>Max NDVI</td>
      <td><input type="range" v-model.number="maxValue" min="0.1" max="1.0" step="0.01" /></td>
      <td class="data">{{ maxValue.toFixed(1) }}</td>
      <td><input type="color" v-model="maxColor" /></td>
    </tr>
  </table>
</div>

:::code-group

```html [HTML]
<div id="map" style="width: 100%; height: 500px;"></div>
```

```javascript [JavaScript]
import { scale as chromaScale } from 'chroma-js';
import Map from 'ol/Map.js';
import TileLayer from 'ol/layer/WebGLTile.js';
import View from 'ol/View.js';
import { fromLonLat } from 'ol/proj.js';
import { GeoZarr } from 'ol-zarr';

const segments = 10;
const defaultMinColor = '#8B4513';  // Brown
const defaultMaxColor = '#00FF00';  // Green
const defaultMinValue = -0.5;
const defaultMaxValue = 0.7;

function getVariables() {
  const variables = {};
  const scale = chromaScale([defaultMinColor, defaultMaxColor]).mode('lab');
  const delta = (defaultMaxValue - defaultMinValue) / segments;

  for (let i = 0; i <= segments; ++i) {
    const color = scale(i / segments).rgb();
    const value = defaultMinValue + i * delta;
    variables[`value${i}`] = value;
    variables[`red${i}`] = color[0];
    variables[`green${i}`] = color[1];
    variables[`blue${i}`] = color[2];
  }
  return variables;
}

function colors() {
  const stops = [];
  for (let i = 0; i <= segments; ++i) {
    stops[i * 2] = ['var', `value${i}`];
    const red = ['var', `red${i}`];
    const green = ['var', `green${i}`];
    const blue = ['var', `blue${i}`];
    stops[i * 2 + 1] = ['color', red, green, blue];
  }
  return stops;
}

const ndvi = [
  '/',
  ['-', ['band', 2], ['band', 1]], // NIR - Red
  ['+', ['band', 2], ['band', 1]], // NIR + Red
];

const source = new GeoZarr({
  url: 'https://sentinel2-data.s3.amazonaws.com/tiles/32/S/KJ/2023/8/7/0/zarr',
  group: 'measurements/reflectance',
  bands: ['b04', 'b8a'], // Red, NIR
});

const layer = new TileLayer({
  style: {
    variables: getVariables(),
    color: ['interpolate', ['linear'], ndvi, ...colors()],
  },
  source: source,
});

const map = new Map({
  target: 'map',
  layers: [layer],
  view: new View({
    center: fromLonLat([2.35, 48.85]),
    zoom: 12,
  }),
});
```

```json [package.json]
{
  "dependencies": {
    "ol": "dev",
    "zarrita": "^0.5.4",
    "chroma-js": "^3.2.0"
  }
}
```

:::

## Interpretation

<div class="ndvi-legend">
  <h3>NDVI Value Legend</h3>
  <div class="legend-item">
    <div class="legend-color" style="background: linear-gradient(to right, yellow, lime);"></div>
    <span><strong>Yellow to Green</strong> - Linear scale from NDVI -0.6 (yellow) to 0.8 (green)</span>
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

<div class="navigation">
  <a href="/integrations/ol/basic" class="nav-button">← Previous: Basic Map Setup and band combination</a>
  <span><strong>2 of 3</strong> - NDVI Calculation</span>
  <a href="/integrations/ol/stac" class="nav-button">Next: STAC Integration →</a>
</div>