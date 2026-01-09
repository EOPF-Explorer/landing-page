---
title: OpenLayers - NDVI Calculation
layout: page
---

<style>
/* Import common CSS first to avoid FOUC */
@import url("/.vitepress/theme/software-common.css");
</style>

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

function updateNDVI() {
  if (ndviLayer) {
    ndviLayer.updateStyleVariables(getVariables())
  }
}

onMounted(async () => {
  // Load common utilities on client-side only
  if (typeof window !== 'undefined') {
    const script = document.createElement('script')
    script.src = '/.vitepress/theme/software-common.js'
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

// Watch for changes to update colors
// Watch for reactive changes (keep for backwards compatibility)
watch([minColor, maxColor, minValue, maxValue], updateNDVI)

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

## OpenLayers - NDVI Calculation <img src="/assets/openlayers-logo.png" alt="OpenLayers Logo" style="height:100px; vertical-align:middle; margin-left:8px; float:right;" />

This example demonstrates real-time calculation of the Normalized Difference Vegetation Index (NDVI) directly in the browser using WebGL expressions.

<div v-if="webglSupport === false" class="warning">
⚠️ **WebGL Not Supported**: Your browser doesn't support WebGL, which is required for GeoZarr visualization and NDVI calculation.
</div>

### Live Demo

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
  <div class="control-row">
    <label>Min NDVI</label>
    <input type="range" v-model.number="minValue" min="-1.0" max="-0.1" step="0.01" />
    <span class="value-display">{{ minValue.toFixed(1) }}</span>
    <input type="color" v-model="minColor" />
  </div>
  <div class="control-row">
    <label>Max NDVI</label>
    <input type="range" v-model.number="maxValue" min="0.1" max="1.0" step="0.01" />
    <span class="value-display">{{ maxValue.toFixed(1) }}</span>
    <input type="color" v-model="maxColor" />
  </div>
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

### Interpretation

<div class="ndvi-legend">
  <div class="legend-item">
    <div class="legend-color" style="background: linear-gradient(to right, yellow, lime);"></div>
    <span><strong>Yellow to Green</strong> - Linear scale from NDVI -0.6 (yellow) to 0.8 (green)</span>
  </div>
</div>

**NDVI Ranges**

- **0.8 to 1.0** - Dense healthy vegetation
- **0.5 to 0.8** - Moderate vegetation
- **0.2 to 0.5** - Sparse vegetation
- **0.0 to 0.2** - Rock, sand, or snow
- **-1.0 to 0.0** - Water, clouds, or snow

### Applications

- **Agriculture**
  - **Crop health monitoring** - Identify stressed areas
  - **Yield prediction** - Correlate NDVI with crop productivity
  - **Irrigation planning** - Target water application

- **Environmental Monitoring**
  - **Deforestation detection** - Monitor forest cover changes
  - **Drought assessment** - Track vegetation stress
  - **Phenology studies** - Seasonal vegetation cycles

- **Urban Planning**
  - **Green space assessment** - Quantify urban vegetation
  - **Heat island mapping** - Identify cooling vegetation
  - **Development impact** - Monitor vegetation loss

<div class="navigation">
  <a href="./basic" class="button border">← Previous: Basic Map Setup and band combination</a>
  <span><strong>2 of 3</strong> - NDVI Calculation</span>
  <a href="./stac" class="button border">Next: STAC Integration →</a>
</div>