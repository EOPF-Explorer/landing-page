---
url: /pr-preview/pr-60/software-services/ol/ndvi.md
---

## OpenLayers - NDVI Calculation&#x20;

This example demonstrates real-time calculation of the Normalized Difference Vegetation Index (NDVI) directly in the browser using WebGL expressions.

::: warning :warning: **WebGL Not Supported**
Your browser doesn't support WebGL, which is required for GeoZarr visualization and NDVI calculation.
:::

\<template #controls>




Min NDVI:
{{ minValue.toFixed(2) }}


Max NDVI:
{{ maxValue.toFixed(2) }}



\<tc-range-slider
ref="rangeSlider"
value1="-0.5"
value2="0.7"
step="0.01"
@change="handleRangeChange"
/>





\<template #demo>



\<template #code>

:::code-group

```html [HTML]
<div id="controls" style="padding: 16px; background: #f6f8fa; margin-bottom: 16px;">
  <div style="display: flex; gap: 24px; align-items: center; margin-bottom: 12px;">
    <div>
      <label style="font-weight: bold;">Min NDVI:</label>
      <span id="minValue">-0.50</span>
    </div>
    <div>
      <label style="font-weight: bold;">Max NDVI:</label>
      <span id="maxValue">0.70</span>
    </div>
  </div>
  <tc-range-slider
    id="ndviSlider"
    value1="-0.5"
    value2="0.7"
    min="-1"
    max="1"
    step="0.01"
  ></tc-range-slider>
</div>
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
import 'toolcool-range-slider';

const segments = 10;
let minColor = '#8B4513';  // Brown
let maxColor = '#00FF00';  // Green
let minValue = -0.5;
let maxValue = 0.7;

function getVariables() {
  const variables = {};
  const scale = chromaScale([minColor, maxColor]).mode('lab');
  const delta = (maxValue - minValue) / segments;

  for (let i = 0; i <= segments; ++i) {
    const color = scale(i / segments).rgb();
    const value = minValue + i * delta;
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
        url: "https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg"
      }),
    }),
    layer
  ],
  view: new View({
    center: fromLonLat([2.35, 48.85]),
    zoom: 12,
  }),
});

// Handle range slider changes
const slider = document.getElementById('ndviSlider');
const minValueSpan = document.getElementById('minValue');
const maxValueSpan = document.getElementById('maxValue');

slider.addEventListener('change', (event) => {
  minValue = parseFloat(event.detail.value1);
  maxValue = parseFloat(event.detail.value2);
  minValueSpan.textContent = minValue.toFixed(2);
  maxValueSpan.textContent = maxValue.toFixed(2);
  layer.updateStyleVariables(getVariables());
});
```

```json [package.json]
{
  "dependencies": {
    "ol": "^10.8.0",
    "chroma-js": "^3.2.0",
    "toolcool-range-slider": "^4.0.28"
  }
}
```

:::

### Interpretation

**NDVI Ranges**

* **0.8 to 1.0** - Dense healthy vegetation
* **0.5 to 0.8** - Moderate vegetation
* **0.2 to 0.5** - Sparse vegetation
* **0.0 to 0.2** - Rock, sand, or snow
* **-1.0 to 0.0** - Water, clouds, or snow

### Applications

* **Agriculture**
  * **Crop health monitoring** - Identify stressed areas
  * **Yield prediction** - Correlate NDVI with crop productivity
  * **Irrigation planning** - Target water application

* **Environmental Monitoring**
  * **Deforestation detection** - Monitor forest cover changes
  * **Drought assessment** - Track vegetation stress
  * **Phenology studies** - Seasonal vegetation cycles

* **Urban Planning**
  * **Green space assessment** - Quantify urban vegetation
  * **Heat island mapping** - Identify cooling vegetation
  * **Development impact** - Monitor vegetation loss
