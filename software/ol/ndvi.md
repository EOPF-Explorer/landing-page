---
title: OpenLayers - NDVI Calculation
layout: page
---

<style scoped>
/* Import common CSS first to avoid FOUC */
@import url("../software.css");
</style>

<script setup>
import { ref, onMounted, nextTick, watch } from 'vue'
//@ts-expect-error chroma-js doesn't have types
import { scale as chromaScale } from 'chroma-js'
import Map from 'ol/Map.js'
import { getView, withExtentCenter, withHigherResolutions, withLowerResolutions, withZoom } from 'ol/View.js'
import WebGLTileLayer from 'ol/layer/WebGLTile.js'
import TileLayer from 'ol/layer/Tile.js'
import GeoZarr from 'ol/source/GeoZarr.js'
import XYZ from 'ol/source/XYZ.js'
import 'ol/ol.css'
import { checkWebGLSupport } from '../../software'
import Tutorial from '../../.vitepress/components/Tutorial.vue'

/** @type {import('vue').Ref<boolean | null>} */
const webglSupport = ref(null)
const mapRef = ref()
let map = null
/** @type {WebGLTileLayer | null} */
let ndviLayer = null

// Interactive NDVI controls
const minColor = ref('#8B4513')  // Brown
const maxColor = ref('#00FF00')  // Green  
const minValue = ref(-0.5)
const maxValue = ref(0.7)

const zarrUrl = 'https://s3.explorer.eopf.copernicus.eu/esa-zarr-sentinel-explorer-fra/tests-output/sentinel-2-l2a-staging/S2A_MSIL2A_20251227T100441_N0511_R122_T33TVF_20251227T121715.zarr'

// NDVI color scale configuration  
const segments = 10

function getVariables() {
  /** @type {Record<string, number>} */
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

onMounted(() => {
  // Check WebGL support using common utility
  webglSupport.value = checkWebGLSupport()

  if (webglSupport.value) {
    nextTick(() => {
      initializeMap()
    })
  }
})

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
      ndviLayer = new WebGLTileLayer({
        source: source,
        style: {
          variables: getVariables(),
          color: ['interpolate', ['linear'], ndvi, ...colors()],
        },
      })
      map = new Map({
        layers: [
          new TileLayer({
            source: new XYZ({
              url: 'https://s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpeg'
            }),
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

<Tutorial v-if="webglSupport" height="600px">
  <template #description>
    <p>This example demonstrates NDVI calculation with:</p>
    <ul>
      <li><strong>NIR Band</strong> - Near-infrared (b8a, 842nm)</li>
      <li><strong>Red Band</strong> - Red light (B04, 665nm)</li>
      <li><strong>Real-time Calculation</strong> - NDVI = (NIR - Red) / (NIR + Red)</li>
      <li><strong>Linear Color Scale</strong> - Yellow to green for NDVI range -0.6 to 0.8</li>
    </ul>
  </template>

  <template #controls>
    <div class="margin grid small-space">
      <div class="s12 m6">
        <article class="no-elevate tiny-padding">
          <div class="row no-space middle-align">
            <label class="max bold">Min NDVI</label>
            <label class="small-text">{{ minValue }}</label>
            <input type="color" v-model="minColor">
          </div>
          <div class="tiny-margin top-margin">
             <input type="range" v-model.number="minValue" min="-1.0" max="-0.1" step="0.01" />
             <span></span>
          </div>
        </article>
      </div>
      <div class="s12 m6">
        <article class="no-elevate tiny-padding">
          <div class="row no-space middle-align">
            <label class="max bold">Max NDVI</label>
            <label class="small-text">{{ maxValue }}</label>
            <input type="color" v-model="maxColor" class="circle tiny-margin left-margin">
          </div>
          <div class="tiny-margin top-margin">
             <input type="range" v-model.number="maxValue" min="0.1" max="1.0" step="0.01" />
             <span></span>
          </div>
        </article>
      </div>
    </div>
  </template>

  <template #demo>
    <div ref="mapRef" style="width: 100%; height: 100%;"></div>
  </template>

<template #code>

:::code-group

```html [HTML]
<div id="map" style="width: 100%; height: 500px;"></div>
```

```javascript [JavaScript]
import { scale as chromaScale } from 'chroma-js';
import Map from 'ol/Map.js';
import WebGLTileLayer from 'ol/layer/WebGLTile.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import GeoZarr from 'ol/source/GeoZarr.js';
import XYZ from 'ol/source/XYZ.js';

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
  url: 'https://s3.explorer.eopf.copernicus.eu/esa-zarr-sentinel-explorer-fra/tests-output/sentinel-2-l2a-staging/S2A_MSIL2A_20251227T100441_N0511_R122_T33TVF_20251227T121715.zarr',
  group: 'measurements/reflectance',
  bands: ['b04', 'b8a'], // Red, NIR
});

const layer = new WebGLTileLayer({
  style: {
    variables: getVariables(),
    color: ['interpolate', ['linear'], ndvi, ...colors()],
  },
  source: source,
});

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new XYZ({
        url: 'https://s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpeg'
      }),
    }),
    layer
  ],
  view: new View({
    center: fromLonLat([2.35, 48.85]),
    zoom: 12,
  }),
});
```

```json [package.json]
{
  "dependencies": {
    "ol": "10.7.1-dev.1769880357980",
    "chroma-js": "^3.2.0"
  }
}
```
:::

  </template>
</Tutorial>

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
