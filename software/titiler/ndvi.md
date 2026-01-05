---
title: NDVI Calculations with Titiler
layout: page
---

<style>
/* Import common CSS first to avoid FOUC */
@import '../common.css';
</style>

<script setup>
import { ref, onMounted, nextTick, watch } from 'vue'

const mapContainer = ref(null)
const map = ref(null)
const selectedExpression = ref('ndvi')
const customRescaleMin = ref(-0.3)
const customRescaleMax = ref(0.8)
const selectedColormap = ref('ylgn')

const expressions = {
  'ndvi': {
    name: 'NDVI (Normalized Difference Vegetation Index)',
    description: 'Classic vegetation index highlighting healthy vegetation',
    expression: '(/measurements/reflectance:b08-/measurements/reflectance:b04)/(/measurements/reflectance:b08+/measurements/reflectance:b04)',
    rescale: '-0.3,0.8',
    colormap: 'ylgn',
    formula: '(NIR - Red) / (NIR + Red) = (B08 - B04) / (B08 + B04)'
  },
  'evi': {
    name: 'EVI (Enhanced Vegetation Index)',
    description: 'Improved vegetation index with reduced atmospheric effects',
    expression: '2.5*((/measurements/reflectance:b08-/measurements/reflectance:b04)/(/measurements/reflectance:b08+6.0*/measurements/reflectance:b04-7.5*/measurements/reflectance:b02+1.0))',
    rescale: '-0.3,1.5',
    colormap: 'viridis',
    formula: '2.5 * ((NIR - Red) / (NIR + 6*Red - 7.5*Blue + 1))'
  },
  'ndwi': {
    name: 'NDWI (Normalized Difference Water Index)',
    description: 'Water body detection and monitoring index',
    expression: '(/measurements/reflectance:b03-/measurements/reflectance:b08)/(/measurements/reflectance:b03+/measurements/reflectance:b08)',
    rescale: '-1,1',
    colormap: 'blues',
    formula: '(Green - NIR) / (Green + NIR) = (B03 - B08) / (B03 + B08)'
  },
  'nbr': {
    name: 'NBR (Normalized Burn Ratio)',
    description: 'Fire scar and burn severity detection',
    expression: '(/measurements/reflectance:b08-/measurements/reflectance:b12)/(/measurements/reflectance:b08+/measurements/reflectance:b12)',
    rescale: '-1,1',
    colormap: 'rdpu',
    formula: '(NIR - SWIR2) / (NIR + SWIR2) = (B08 - B12) / (B08 + B12)'
  }
}

const colormaps = [
  { value: 'ylgn', name: 'Yellow-Green', description: 'Classic vegetation colormap' },
  { value: 'viridis', name: 'Viridis', description: 'Perceptually uniform colormap' },
  { value: 'plasma', name: 'Plasma', description: 'Purple-pink-yellow gradient' },
  { value: 'blues', name: 'Blues', description: 'Blue gradient for water features' },
  { value: 'rdpu', name: 'Red-Purple', description: 'Red to purple gradient' },
  { value: 'spectral', name: 'Spectral', description: 'Rainbow spectrum' }
]

const sampleItem = 'S2B_MSIL2A_20251123T101239_N0511_R022_T32TQR_20251123T105704'
const collection = 'sentinel-2-l2a'
const baseUrl = 'https://api.explorer.eopf.copernicus.eu/raster'

let tileLayer = null

function buildTileUrl() {
  const expr = expressions[selectedExpression.value]
  const params = new URLSearchParams()
  
  params.set('expression', expr.expression)
  
  // Use custom rescale if different from default
  const rescaleRange = `${customRescaleMin.value},${customRescaleMax.value}`
  params.set('rescale', rescaleRange)
  
  params.set('colormap_name', selectedColormap.value)
  
  return `${baseUrl}/collections/${collection}/items/${sampleItem}/tiles/WebMercatorQuad/{z}/{x}/{y}.png?${params.toString()}`
}

function updateTileLayer() {
  if (!map.value || !tileLayer) return
  
  const newUrl = buildTileUrl()
  tileLayer.getSource().setUrl(newUrl)
}

function resetRescale() {
  const expr = expressions[selectedExpression.value]
  const [min, max] = expr.rescale.split(',').map(Number)
  customRescaleMin.value = min
  customRescaleMax.value = max
  selectedColormap.value = expr.colormap
}

// Use shared OpenLayers loading utility from common.js
function waitForOpenLayers() {
  return window.waitForOpenLayers()
}

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

onMounted(async () => {
  // Load common utilities on client-side only
  if (typeof window !== 'undefined') {
    const script = document.createElement('script')
    script.src = '../common.js'
    document.head.appendChild(script)
  }
  
  // Wait for common utilities to load
  await waitForCommonUtilities()

  // Wait for OpenLayers to be available
  await waitForOpenLayers()
  
  if (typeof window.ol === 'undefined') {
    console.error('OpenLayers not loaded')
    return
  }
  
  const { Map, View } = window.ol
  const { Tile: TileLayer } = window.ol.layer
  const { OSM, XYZ } = window.ol.source
  const { fromLonLat } = window.ol.proj
  
  // Initialize tile layer
  const initialUrl = buildTileUrl()
  tileLayer = new TileLayer({
    source: new XYZ({
      url: initialUrl,
      crossOrigin: 'anonymous'
    }),
    opacity: 0.9
  })
  
  // Create map
  map.value = new Map({
    target: mapContainer.value,
    layers: [
      new TileLayer({
        source: new OSM()
      }),
      tileLayer
    ],
    view: new View({
      center: fromLonLat([12.3, 45.2]), // Venice area
      zoom: 11
    })
  })
})

// Watch for changes
watch(selectedExpression, () => {
  resetRescale()
  updateTileLayer()
})
watch([customRescaleMin, customRescaleMax, selectedColormap], updateTileLayer)
</script>

<style scoped>
/* Page-specific styles only - common styles imported above */

/* Specific rescale input layout for this page */

.rescale-inputs {
  display: grid;
  grid-template-columns: 1fr auto 1fr auto;
  gap: 8px;
  align-items: center;
}

.rescale-inputs input {
  width: auto;
}

.expression-info {
  background: #fff;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  padding: 16px;
  margin-top: 20px;
  grid-column: 1 / -1;
}

.expression-info h4 {
  margin: 0 0 8px 0;
  color: #24292e;
}

.expression-info p {
  margin: 0 0 12px 0;
  color: #586069;
  font-size: 14px;
}

.expression-formula {
  background: #f6f8fa;
  padding: 12px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 14px;
  color: #24292e;
  border-left: 3px solid #28a745;
}

@media (max-width: 768px) {
  .controls {
    grid-template-columns: 1fr;
  }
}
</style>

## TiTiler - Vegetation Indices <img src="https://user-images.githubusercontent.com/10407788/172718020-c2378b7e-a0d4-406e-924c-8ffe54e61596.png" alt="Titiler Logo" style="height:100px;vertical-align:middle;margin-left:0.5rem;float:right;" />

This example demonstrates how to calculate vegetation indices using Titiler's server-side mathematical expressions. All calculations are performed on the server, returning pre-computed tiles optimized for web display.

### Interactive Example

<div class="controls">
  <div>
    <div class="control-group">
      <label for="expression-select">Vegetation Index:</label>
      <select id="expression-select" v-model="selectedExpression">
        <option value="ndvi">NDVI - Vegetation Health</option>
        <option value="evi">EVI - Enhanced Vegetation</option>
        <option value="ndwi">NDWI - Water Detection</option>
        <option value="nbr">NBR - Burn Ratio</option>
      </select>
    </div>
    <div class="control-group">
      <label>Value Range (Rescale):</label>
      <div class="rescale-inputs">
        <input type="number" v-model.number="customRescaleMin" step="0.1" />
        <span>to</span>
        <input type="number" v-model.number="customRescaleMax" step="0.1" />
        <button class="reset-button" @click="resetRescale()">Reset</button>
      </div>
    </div>
  </div>
  
  <div>
    <div class="control-group">
      <label for="colormap-select">Color Scheme:</label>
      <select id="colormap-select" v-model="selectedColormap">
        <option v-for="cm in colormaps" :key="cm.value" :value="cm.value">
          {{ cm.name }} - {{ cm.description }}
        </option>
      </select>
    </div>
  </div>
  
  <div class="expression-info" v-if="expressions[selectedExpression]">
    <strong>{{ expressions[selectedExpression].name }}</strong>
    <p>{{ expressions[selectedExpression].description }}</p>
    <div class="expression-formula">{{ expressions[selectedExpression].formula }}</div>
  </div>
</div>

<div ref="mapContainer" class="map-container"></div>

<div class="url-section">
  <strong>🔗 Generated Expression URL</strong>
  <p>This URL contains the mathematical expression processed by Titiler:</p>
  <div class="url-display">{{ buildTileUrl() }}</div>
  <button class="copy-button" @click="navigator.clipboard?.writeText(buildTileUrl())">
    📋 Copy URL
  </button>
</div>

### Key Concepts

**Server-Side Expressions**

Titiler processes mathematical expressions on the server using band references:

```javascript
// NDVI calculation
expression = "(B08 - B04) / (B08 + B04)";

// URL-encoded for API
expression =
  "(/measurements/reflectance:b08-/measurements/reflectance:b04)/(/measurements/reflectance:b08+/measurements/reflectance:b04)";
```

**Band References in Expressions**

- **NIR Band**: `/measurements/reflectance:b08` (10m resolution)
- **Red Band**: `/measurements/reflectance:b04` (10m resolution)
- **Green Band**: `/measurements/reflectance:b03` (10m resolution)
- **Blue Band**: `/measurements/reflectance:b02` (10m resolution)
- **SWIR Bands**: `/measurements/reflectance:b11`, `/measurements/reflectance:b12` (20m resolution)

**Color Mapping**

The `colormap_name` parameter applies predefined color schemes:

- **ylgn**: Yellow-Green (ideal for vegetation)
- **viridis**: Perceptually uniform (good for scientific data)
- **blues**: Blue gradient (perfect for water indices)

**Value Rescaling**

The `rescale` parameter normalizes index values for optimal visualization:

- **NDVI**: `-0.3,0.8` (optimized vegetation range)
- **EVI**: `-0.3,1.5` (enhanced range for better sensitivity)
- **NDWI**: `-1,1` (water index ranges)

### Implementation Code

::: code-group

```javascript [OpenLayers Setup]
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import { fromLonLat } from "ol/proj";

// Wait for OpenLayers to load
await window.waitForOpenLayers();

// NDVI expression (URL-encoded)
const ndviExpression =
  "(/measurements/reflectance:b08-/measurements/reflectance:b04)/(/measurements/reflectance:b08+/measurements/reflectance:b04)";

const baseUrl = "https://api.explorer.eopf.copernicus.eu/raster";
const collection = "sentinel-2-l2a";
const itemId = "S2B_MSIL2A_20251123T101239_N0511_R022_T32TQR_20251123T105704";

const tileUrl =
  `${baseUrl}/collections/${collection}/items/${itemId}/tiles/WebMercatorQuad/{z}/{x}/{y}.png?` +
  `expression=${ndviExpression}&` +
  `rescale=-0.3,0.8&` +
  `colormap_name=ylgn`;

const map = new Map({
  target: "map",
  layers: [
    new TileLayer({ source: new OSM() }), // Base layer
    new TileLayer({
      source: new XYZ({
        url: tileUrl,
        crossOrigin: "anonymous",
      }),
      opacity: 0.9,
    }),
  ],
  view: new View({
    center: fromLonLat([12.3, 45.8]),
    zoom: 11,
  }),
});
```

```javascript [Dynamic Updates]
function updateVegetationIndex(expression, rescale, colormap) {
  const params = new URLSearchParams();
  params.set("expression", expression);
  params.set("rescale", rescale);
  params.set("colormap_name", colormap);

  const newUrl = `${baseUrl}/collections/${collection}/items/${itemId}/tiles/WebMercatorQuad/{z}/{x}/{y}.png?${params.toString()}`;

  tileLayer.getSource().setUrl(newUrl);
}

// Predefined vegetation indices
const indices = {
  ndvi: {
    expression:
      "(/measurements/reflectance:b08-/measurements/reflectance:b04)/(/measurements/reflectance:b08+/measurements/reflectance:b04)",
    rescale: "-0.3,0.8",
    colormap: "ylgn",
  },
  evi: {
    expression:
      "2.5*((/measurements/reflectance:b08-/measurements/reflectance:b04)/(/measurements/reflectance:b08+6.0*/measurements/reflectance:b04-7.5*/measurements/reflectance:b02+1.0))",
    rescale: "-0.3,1.5",
    colormap: "viridis",
  },
  ndwi: {
    expression:
      "(/measurements/reflectance:b03-/measurements/reflectance:b08)/(/measurements/reflectance:b03+/measurements/reflectance:b08)",
    rescale: "-1,1",
    colormap: "blues",
  },
};

// Switch to EVI
const evi = indices.evi;
updateVegetationIndex(evi.expression, evi.rescale, evi.colormap);
```

```javascript [Vue.js Integration]
import { ref, onMounted, watch } from "vue";

const selectedIndex = ref("ndvi");
const customRescaleMin = ref(-0.3);
const customRescaleMax = ref(0.8);
const selectedColormap = ref("ylgn");

function buildTileUrl() {
  const index = indices[selectedIndex.value];
  const params = new URLSearchParams();

  params.set("expression", index.expression);
  params.set("rescale", `${customRescaleMin.value},${customRescaleMax.value}`);
  params.set("colormap_name", selectedColormap.value);

  return `${baseUrl}/collections/${collection}/items/${itemId}/tiles/WebMercatorQuad/{z}/{x}/{y}.png?${params.toString()}`;
}

// Reactive updates
watch(
  [selectedIndex, customRescaleMin, customRescaleMax, selectedColormap],
  () => {
    updateTileLayer();
  }
);

onMounted(async () => {
  await window.waitForOpenLayers();
  initializeMap();
});
```

```javascript [API Direct Usage]
// Direct API calls for vegetation analysis
const baseUrl = "https://api.explorer.eopf.copernicus.eu/raster";

async function calculateNDVI(collection, itemId, bbox = null) {
  const expression =
    "(/measurements/reflectance:b08-/measurements/reflectance:b04)/(/measurements/reflectance:b08+/measurements/reflectance:b04)";

  const params = new URLSearchParams({
    expression: expression,
    rescale: "-0.3,0.8",
    colormap_name: "ylgn",
  });

  if (bbox) {
    params.set("bbox", bbox.join(","));
  }

  const response = await fetch(
    `${baseUrl}/collections/${collection}/items/${itemId}/tiles/WebMercatorQuad/{z}/{x}/{y}.png?${params.toString()}`
  );

  return response.url;
}

// Get vegetation statistics for area
async function getVegetationStats(collection, itemId, geometry) {
  const response = await fetch(
    `${baseUrl}/collections/${collection}/items/${itemId}/statistics`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        expression:
          "(/measurements/reflectance:b08-/measurements/reflectance:b04)/(/measurements/reflectance:b08+/measurements/reflectance:b04)",
        geometry: geometry,
      }),
    }
  );

  return await response.json();
}

// Usage
const ndviUrl = await calculateNDVI(
  "sentinel-2-l2a",
  "S2B_MSIL2A_20251123T101239_N0511_R022_T32TQR_20251123T105704"
);
console.log("NDVI tile URL:", ndviUrl);
```

:::

### Common Vegetation Indices

| Index    | Formula                                            | Use Case                                            | Typical Range |
| -------- | -------------------------------------------------- | --------------------------------------------------- | ------------- |
| **NDVI** | (NIR - Red) / (NIR + Red)                          | General vegetation health                           | -1 to 1       |
| **EVI**  | 2.5 × ((NIR - Red) / (NIR + 6×Red - 7.5×Blue + 1)) | Enhanced sensitivity, less atmospheric interference | 0 to 2        |
| **NDWI** | (Green - NIR) / (Green + NIR)                      | Water body detection                                | -1 to 1       |
| **NBR**  | (NIR - SWIR2) / (NIR + SWIR2)                      | Burn scar detection                                 | -1 to 1       |

<div class="info">
💡 <strong>Performance Tip</strong>: Server-side calculations are cached, so subsequent requests for the same expression and parameters load much faster.
</div>

## Next Steps

- **Spatial Operations**: Learn about [cropping and area extraction](./crop)
- **RGB Visualization**: Explore [band combinations and color enhancement](./rgb)
- **Advanced Expressions**: Check the [API documentation](https://api.explorer.eopf.copernicus.eu/raster/api.html) for more complex mathematical operations

<div class="navigation">
  <div></div>
  <a href="./rgb" class="nav-button">← Previous: RGB Visualization</a>
  <span><strong>2 of 3</strong> - Vegetation Indices</span>
  <a href="./crop" class="nav-button">Next: Spatial Operations →</a>
</div>
