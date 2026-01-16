---
title: RGB Visualization with Titiler
layout: page
---

<style scoped>
/* Import common CSS first to avoid FOUC */
@import url("../software.css");
</style>

<script setup>
import { ref, onMounted, nextTick, watch } from 'vue'
import Map from 'ol/Map.js'
import View from 'ol/View.js'
import TileLayer from 'ol/layer/Tile.js'
import { OSM, XYZ } from 'ol/source.js'
import { fromLonLat } from 'ol/proj.js'
import 'ol/ol.css'
import { createCopyUrlFunction } from '../index'

const mapContainer = ref(null)
const map = ref(null)
const selectedBands = ref('rgb-true')
const tileLayer = ref(null)
const copyButtonText = ref('📋 Copy URL')
const copyButtonClass = ref('copy-button')

const bandCombinations = {
  'rgb-true': {
    name: 'True Color (RGB)',
    description: 'Natural color composite using red, green, and blue bands',
    variables: [
      '/measurements/reflectance:b04',
      '/measurements/reflectance:b03', 
      '/measurements/reflectance:b02'
    ],
    rescale: '0,1',
    colorFormula: 'gamma rgb 1.3, sigmoidal rgb 6 0.1, saturation 1.2'
  },
  'rgb-false': {
    name: 'False Color Infrared',
    description: 'False color composite highlighting vegetation using NIR, red, and green bands',
    variables: [
      '/measurements/reflectance:b08',
      '/measurements/reflectance:b04',
      '/measurements/reflectance:b03'
    ],
    rescale: '0,0.3',
    colorFormula: 'gamma rgb 1.2, saturation 1.1'
  },
  'swir-color': {
    name: 'SWIR False Color',
    description: 'Short-wave infrared composite for geology and urban analysis',
    variables: [
      '/measurements/reflectance:b11',
      '/measurements/reflectance:b08',
      '/measurements/reflectance:b04'
    ],
    rescale: '0,0.4',
    colorFormula: 'gamma rgb 1.5, saturation 1.3'
  }
}

const sampleItem = 'S2B_MSIL2A_20251024T101029_N0511_R022_T32TQR_20251024T122954'
const collection = 'sentinel-2-l2a'
const baseUrl = 'https://api.explorer.eopf.copernicus.eu/raster'

function buildTileUrl() {
  const combo = bandCombinations[selectedBands.value]
  const params = new URLSearchParams()
  
  combo.variables.forEach(variable => {
    params.append('variables', variable)
  })
  
  params.set('rescale', combo.rescale)
  params.set('color_formula', combo.colorFormula)
  
  return `${baseUrl}/collections/${collection}/items/${sampleItem}/tiles/WebMercatorQuad/{z}/{x}/{y}.png?${params.toString()}`
}

function updateTileLayer() {
  if (!map.value || !tileLayer.value) return
  
  const newUrl = buildTileUrl()
  console.log('Updating tile layer with URL:', newUrl)
  
  // Create new source instead of updating URL to avoid caching issues
  const newSource = new XYZ({
    url: newUrl,
    crossOrigin: 'anonymous',
    maxZoom: 18
  })
  
  tileLayer.value.setSource(newSource)
}

function copyUrl() {
  const copyFunction = createCopyUrlFunction(buildTileUrl)
  copyFunction(copyButtonText, copyButtonClass)
}

// Watch for band combination changes with debouncing
watch(selectedBands, () => {
  // Add a small delay to prevent rapid updates
  setTimeout(() => {
    updateTileLayer()
  }, 100)
}, { flush: 'post' })

onMounted(() => {
  nextTick(() => {
    initializeMap()
  })
})

function initializeMap() {
  if (!mapContainer.value) return
  
  // Get initial URL from reactive function
  const initialUrl = buildTileUrl()
  console.log('Initializing map with tile URL:', initialUrl)
  
  tileLayer.value = new TileLayer({
    source: new XYZ({
      url: initialUrl,
      crossOrigin: 'anonymous',
      maxZoom: 18
    }),
    opacity: 0.9
  })
  
  // Create map with just OSM base layer first
  map.value = new Map({
    target: mapContainer.value,
    layers: [
      new TileLayer({
        source: new OSM()
      })
    ],
    view: new View({
      center: fromLonLat([12.35, 45.44]), // Venice area
      zoom: 13
    })
  })
  
  // Add the Titiler layer after a delay to see if that helps
  setTimeout(() => {
    console.log('Adding Titiler layer...')
    map.value.addLayer(tileLayer.value)
  }, 1000)
}


</script>

<style scoped>
/* Page-specific styles */
.band-info {
  background: #fff;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  padding: 16px;
  margin-top: 12px;
}

.band-info h4 {
  margin: 0 0 8px 0;
  color: #24292e;
}

.band-info p {
  margin: 0 0 12px 0;
  color: #586069;
  font-size: 14px;
}

.band-variables {
  background: #f6f8fa;
  padding: 12px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 12px;
  white-space: pre-line;
  color: #24292e;
}
</style>

## TiTiler - RGB Visualization <img src="https://user-images.githubusercontent.com/10407788/172718020-c2378b7e-a0d4-406e-924c-8ffe54e61596.png" alt="Titiler Logo" style="height:100px;vertical-align:middle;margin-left:0.5rem;float:right;" />

This example demonstrates how to create RGB band combinations using Titiler's tile service with EOPF Sentinel-2 data. The server handles all image processing and returns optimized tiles for web mapping applications.

### Interactive Example

<div class="controls">
  <div class="control-group">
    <label for="band-select">Band Combination:</label>
    <select id="band-select" v-model="selectedBands">
      <option value="rgb-true">True Color RGB</option>
      <option value="rgb-false">False Color Infrared</option>
      <option value="swir-color">SWIR False Color</option>
    </select>
  </div>
  
  <div class="band-info" v-if="bandCombinations[selectedBands]">
    <p>{{ bandCombinations[selectedBands].description }}</p>
    <div class="band-variables">{{ bandCombinations[selectedBands].variables.join('\n') }}</div>
  </div>
</div>

<div ref="mapContainer" class="map-container"></div>

<div class="url-section">
  <h3>🔗 Generated Tile URL</h3>
  <p>This is the URL pattern that OpenLayers uses to fetch tiles from Titiler:</p>
  <div class="url-display">{{ buildTileUrl() }}</div>
  <button :class="copyButtonClass" @click="copyUrl()">
    {{ copyButtonText }}
  </button>
</div>

### Key Concepts

**Variable Format**

Titiler uses specific paths to reference bands in Zarr data in the form of `group:variable`. For Sentinel-2 reflectance data, the relevant group is `/measurements/reflectance`. Example band paths:

```
/measurements/reflectance:b04  # Red band (10m resolution)
/measurements/reflectance:b11  # SWIR band (20m resolution)
```

**Color Enhancement**

The `color_formula` parameter applies color corrections:

- **Gamma correction**: `gamma rgb 1.3` - Brightens mid-tones
- **Sigmoidal contrast**: `sigmoidal rgb 6 0.1` - Enhances contrast
- **Saturation**: `saturation 1.2` - Boosts color intensity

**Rescaling**

The `rescale` parameter normalizes reflectance values:

- `0,1` - Full reflectance range (0-100%)
- `0,0.3` - Compressed range for better contrast

### Implementation Code

::: code-group

```javascript [OpenLayers Integration]
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import { fromLonLat } from "ol/proj";

// Titiler tile URL with band variables
const tileUrl =
  "https://api.explorer.eopf.copernicus.eu/raster/collections/sentinel-2-l2a/items/S2B_MSIL2A_20251024T101029_N0511_R022_T32TQR_20251024T122954/tiles/WebMercatorQuad/{z}/{x}/{y}.png?" +
  "variables=/measurements/reflectance:b04&" +
  "variables=/measurements/reflectance:b03&" +
  "variables=/measurements/reflectance:b02&" +
  "rescale=0,1&" +
  "color_formula=gamma rgb 1.3, sigmoidal rgb 6 0.1, saturation 1.2";

const map = new Map({
  target: "map",
  layers: [
    new TileLayer({
      source: new XYZ({
        url: tileUrl,
        crossOrigin: "anonymous",
      }),
    }),
  ],
  view: new View({
    center: fromLonLat([12.3, 45.8]),
    zoom: 11,
  }),
});
```

```javascript [Leaflet Integration]
import L from 'leaflet';

// Create Leaflet map
const map = L.map('map').setView([45.8, 12.3], 11);

// Add base layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Build Titiler URL
const tileUrl =
  "https://api.explorer.eopf.copernicus.eu/raster/collections/sentinel-2-l2a/items/S2B_MSIL2A_20251024T101029_N0511_R022_T32TQR_20251024T122954/tiles/WebMercatorQuad/{z}/{x}/{y}.png?" +
  "variables=/measurements/reflectance:b04&" +
  "variables=/measurements/reflectance:b03&" +
  "variables=/measurements/reflectance:b02&" +
  "rescale=0,1&" +
  "color_formula=gamma rgb 1.3, sigmoidal rgb 6 0.1, saturation 1.2";

// Add Titiler layer
const sentinelLayer = L.tileLayer(tileUrl, {
  opacity: 0.8,
  attribution: 'Data: Copernicus Sentinel-2 | Processing: EOPF'
});

sentinelLayer.addTo(map);
```

```javascript [API Direct Usage]
// Direct API calls for custom processing
const baseUrl = 'https://api.explorer.eopf.copernicus.eu/raster';
const collection = 'sentinel-2-l2a';
const itemId = 'S2B_MSIL2A_20251218T110359_N0511_R094_T32VLK_20251218T115223';

async function getTileInfo() {
  const response = await fetch(
    `${baseUrl}/collections/${collection}/items/${itemId}/tiles`
  );
  const tilesets = await response.json();
  console.log('Available tilesets:', tilesets);
  return tilesets;
}

async function getItemMetadata() {
  const response = await fetch(
    `${baseUrl}/collections/${collection}/items/${itemId}`
  );
  const metadata = await response.json();
  console.log('Item metadata:', metadata);
  return metadata;
}

// Build custom tile URL
function buildTileUrl(variables, rescale, colorFormula) {
  const params = new URLSearchParams();
  
  variables.forEach(variable => {
    params.append('variables', variable);
  });
  
  params.set('rescale', rescale);
  params.set('color_formula', colorFormula);
  
  return `${baseUrl}/collections/${collection}/items/${itemId}/tiles/WebMercatorQuad/{z}/{x}/{y}.png?${params.toString()}`;
}

// Usage
const trueColorUrl = buildTileUrl(
  ['/measurements/reflectance:b04', '/measurements/reflectance:b03', '/measurements/reflectance:b02'],
  '0,1',
  'gamma rgb 1.3, sigmoidal rgb 6 0.1, saturation 1.2'
);
```

:::

### API Parameters

| Parameter       | Description                      | Example                         |
| --------------- | -------------------------------- | ------------------------------- |
| `variables`     | Band path in Zarr structure      | `/measurements/reflectance:b04` |
| `rescale`       | Min,max values for normalization | `0,1` or `0,0.3`                |
| `color_formula` | Color enhancement pipeline       | `gamma rgb 1.3, saturation 1.2` |
| `format`        | Output image format              | `png` (default), `webp`, `jpeg` |

<div class="info">
💡 <strong>Tip</strong>: Use the <a href="https://api.explorer.eopf.copernicus.eu/raster/api.html" target="_blank">interactive API documentation</a> to explore all available parameters and test different combinations.
</div>

### Next Steps

- **NDVI Calculations**: Learn [server-side vegetation index calculations](./ndvi)
- **Spatial Operations**: Explore [cropping and spatial filtering](./crop)
- **STAC Integration**: Browse available datasets in the [STAC Browser](https://api.explorer.eopf.copernicus.eu/browser)

<div class="warning">
⚠️ <strong>Performance Note</strong>: Titiler generates tiles on-demand. Initial requests may be slower while tiles are computed and cached.
</div>

<div class="navigation">
  <div></div>
  <span><strong>1 of 3</strong> - RGB Visualization</span>
  <a href="./ndvi" class="button border">Next: Vegetation Indices →</a>
</div>
