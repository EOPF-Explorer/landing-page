---
title: NDVI Calculations with Titiler
layout: page
---

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const mapContainer = ref(null)
const map = ref(null)
const selectedExpression = ref('ndvi')
const customRescaleMin = ref(-1)
const customRescaleMax = ref(1)
const selectedColormap = ref('rdylgn')

const expressions = {
  'ndvi': {
    name: 'NDVI (Normalized Difference Vegetation Index)',
    description: 'Classic vegetation index highlighting healthy vegetation',
    expression: '(/measurements/reflectance/r10m:b08-/measurements/reflectance/r10m:b04)/(/measurements/reflectance/r10m:b08%2b/measurements/reflectance/r10m:b04)',
    rescale: '-1,1',
    colormap: 'rdylgn',
    formula: '(NIR - Red) / (NIR + Red) = (B08 - B04) / (B08 + B04)'
  },
  'evi': {
    name: 'EVI (Enhanced Vegetation Index)',
    description: 'Improved vegetation index with reduced atmospheric effects',
    expression: '2.5*((/measurements/reflectance/r10m:b08-/measurements/reflectance/r10m:b04)/(/measurements/reflectance/r10m:b08%2b6*/measurements/reflectance/r10m:b04-7.5*/measurements/reflectance/r10m:b02%2b1))',
    rescale: '0,2',
    colormap: 'viridis',
    formula: '2.5 * ((NIR - Red) / (NIR + 6*Red - 7.5*Blue + 1))'
  },
  'ndwi': {
    name: 'NDWI (Normalized Difference Water Index)',
    description: 'Water body detection and monitoring index',
    expression: '(/measurements/reflectance/r10m:b03-/measurements/reflectance/r10m:b08)/(/measurements/reflectance/r10m:b03%2b/measurements/reflectance/r10m:b08)',
    rescale: '-1,1',
    colormap: 'blues',
    formula: '(Green - NIR) / (Green + NIR) = (B03 - B08) / (B03 + B08)'
  },
  'nbr': {
    name: 'NBR (Normalized Burn Ratio)',
    description: 'Fire scar and burn severity detection',
    expression: '(/measurements/reflectance/r10m:b08-/measurements/reflectance/r20m:b12)/(/measurements/reflectance/r10m:b08%2b/measurements/reflectance/r20m:b12)',
    rescale: '-1,1',
    colormap: 'rdpu',
    formula: '(NIR - SWIR2) / (NIR + SWIR2) = (B08 - B12) / (B08 + B12)'
  }
}

const colormaps = [
  { value: 'rdylgn', name: 'Red-Yellow-Green', description: 'Classic vegetation colormap' },
  { value: 'viridis', name: 'Viridis', description: 'Perceptually uniform colormap' },
  { value: 'plasma', name: 'Plasma', description: 'Purple-pink-yellow gradient' },
  { value: 'blues', name: 'Blues', description: 'Blue gradient for water features' },
  { value: 'rdpu', name: 'Red-Purple', description: 'Red to purple gradient' },
  { value: 'spectral', name: 'Spectral', description: 'Rainbow spectrum' }
]

const sampleItem = 'S2B_MSIL2A_20251218T110359_N0511_R094_T32VLK_20251218T115223'
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

// Function to wait for OpenLayers to load
function waitForOpenLayers() {
  return new Promise((resolve) => {
    if (typeof window.ol !== 'undefined') {
      resolve()
      return
    }
    
    const checkInterval = setInterval(() => {
      if (typeof window.ol !== 'undefined') {
        clearInterval(checkInterval)
        resolve()
      }
    }, 100)
    
    // Timeout after 10 seconds
    setTimeout(() => {
      clearInterval(checkInterval)
      console.error('OpenLayers failed to load within 10 seconds')
      resolve()
    }, 10000)
  })
}

onMounted(async () => {
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
      center: fromLonLat([12.3, 45.8]), // Venice area
      zoom: 11
    })
  })
})

// Watch for changes
import { watch } from 'vue'
watch(selectedExpression, () => {
  resetRescale()
  updateTileLayer()
})
watch([customRescaleMin, customRescaleMax, selectedColormap], updateTileLayer)
</script>

<script>
// Load OpenLayers from CDN if not already loaded
if (typeof window.ol === 'undefined') {
  const script = document.createElement('script')
  script.src = 'https://cdn.jsdelivr.net/npm/ol@9.1.0/dist/ol.js'
  script.async = true
  script.onload = () => {
    console.log('OpenLayers loaded successfully')
  }
  script.onerror = () => {
    console.error('Failed to load OpenLayers')
  }
  document.head.appendChild(script)
  
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'https://cdn.jsdelivr.net/npm/ol@9.1.0/ol.css'
  document.head.appendChild(link)
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

.info {
  background: #d1ecf1;
  border: 1px solid #b6d4fe;
  color: #0c5460;
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

.controls {
  background: #f6f8fa;
  padding: 16px;
  border-top: 1px solid #e1e4e8;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.control-group {
  margin-bottom: 16px;
}

.control-group label {
  display: block;
  font-weight: 600;
  margin-bottom: 8px;
  color: #24292e;
}

.control-group select,
.control-group input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #d1d5da;
  border-radius: 6px;
  font-size: 14px;
}

.rescale-inputs {
  display: grid;
  grid-template-columns: 1fr auto 1fr auto;
  gap: 8px;
  align-items: center;
}

.rescale-inputs input {
  width: auto;
}

.reset-button {
  background: #f1f3f4;
  border: 1px solid #d1d5da;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 12px;
  cursor: pointer;
}

.reset-button:hover {
  background: #e1e4e8;
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

.url-section {
  background: #f6f8fa;
  padding: 20px;
  border-radius: 8px;
  margin: 24px 0;
}

.url-section h3 {
  margin: 0 0 12px 0;
  color: #24292e;
}

.url-display {
  background: #f6f8fa;
  color: #24292e;
  padding: 12px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 11px;
  word-break: break-all;
  margin: 12px 0;
  max-height: 100px;
  overflow-y: auto;
  border: 1px solid #e1e4e8;
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

@media (max-width: 768px) {
  .controls {
    grid-template-columns: 1fr;
  }
}
</style>

# NDVI & Vegetation Indices with Titiler

This example demonstrates how to calculate vegetation indices using Titiler's server-side mathematical expressions. All calculations are performed on the server, returning pre-computed tiles optimized for web display.

## Interactive Example

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
    <h4>{{ expressions[selectedExpression].name }}</h4>
    <p>{{ expressions[selectedExpression].description }}</p>
    <div class="expression-formula">{{ expressions[selectedExpression].formula }}</div>
  </div>
</div>

<div ref="mapContainer" class="map-container"></div>

<div class="url-section">
  <h3>🔗 Generated Expression URL</h3>
  <p>This URL contains the mathematical expression processed by Titiler:</p>
  <div class="url-display">{{ buildTileUrl() }}</div>
  <button class="copy-button" @click="navigator.clipboard?.writeText(buildTileUrl())">
    📋 Copy URL
  </button>
</div>

## Key Concepts

### Server-Side Expressions
Titiler processes mathematical expressions on the server using band references:

```javascript
// NDVI calculation
expression = "(B08 - B04) / (B08 + B04)"

// URL-encoded for API
expression = "(/measurements/reflectance/r10m:b08-/measurements/reflectance/r10m:b04)/(/measurements/reflectance/r10m:b08%2b/measurements/reflectance/r10m:b04)"
```

### Band References in Expressions
- **NIR Band**: `/measurements/reflectance/r10m:b08` (10m resolution)
- **Red Band**: `/measurements/reflectance/r10m:b04` (10m resolution)  
- **Green Band**: `/measurements/reflectance/r10m:b03` (10m resolution)
- **Blue Band**: `/measurements/reflectance/r10m:b02` (10m resolution)
- **SWIR Bands**: `/measurements/reflectance/r20m:b11`, `/measurements/reflectance/r20m:b12` (20m resolution)

### Color Mapping
The `colormap_name` parameter applies predefined color schemes:
- **rdylgn**: Red-Yellow-Green (ideal for vegetation)
- **viridis**: Perceptually uniform (good for scientific data)
- **blues**: Blue gradient (perfect for water indices)

### Value Rescaling
The `rescale` parameter normalizes index values for optimal visualization:
- **NDVI**: `-1,1` (vegetation ranges from -1 to +1)
- **EVI**: `0,2` (enhanced range for better sensitivity)
- **NDWI**: `-1,1` (water index ranges)

## Implementation Code

### Basic Expression Setup

```javascript
import { Map, View } from 'ol'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'

// NDVI expression (URL-encoded)
const ndviExpression = '(/measurements/reflectance/r10m:b08-/measurements/reflectance/r10m:b04)/(/measurements/reflectance/r10m:b08%2b/measurements/reflectance/r10m:b04)'

const tileUrl = `https://api.explorer.eopf.copernicus.eu/raster/collections/sentinel-2-l2a/items/${itemId}/tiles/WebMercatorQuad/{z}/{x}/{y}.png?` +
  `expression=${ndviExpression}&` +
  `rescale=-1,1&` +
  `colormap_name=rdylgn`

const layer = new TileLayer({
  source: new XYZ({
    url: tileUrl,
    crossOrigin: 'anonymous'
  })
})
```

### Dynamic Expression Updates

```javascript
function updateVegetationIndex(expression, rescale, colormap) {
  const params = new URLSearchParams()
  params.set('expression', expression)
  params.set('rescale', rescale)
  params.set('colormap_name', colormap)
  
  const newUrl = `${baseUrl}/collections/${collection}/items/${item}/tiles/WebMercatorQuad/{z}/{x}/{y}.png?${params.toString()}`
  
  tileLayer.getSource().setUrl(newUrl)
}

// Example: Switch to EVI calculation
updateVegetationIndex(
  '2.5*((/measurements/reflectance/r10m:b08-/measurements/reflectance/r10m:b04)/(/measurements/reflectance/r10m:b08%2b6*/measurements/reflectance/r10m:b04-7.5*/measurements/reflectance/r10m:b02%2b1))',
  '0,2',
  'viridis'
)
```

## Common Vegetation Indices

| Index | Formula | Use Case | Typical Range |
|-------|---------|----------|---------------|
| **NDVI** | (NIR - Red) / (NIR + Red) | General vegetation health | -1 to 1 |
| **EVI** | 2.5 × ((NIR - Red) / (NIR + 6×Red - 7.5×Blue + 1)) | Enhanced sensitivity, less atmospheric interference | 0 to 2 |
| **NDWI** | (Green - NIR) / (Green + NIR) | Water body detection | -1 to 1 |
| **NBR** | (NIR - SWIR2) / (NIR + SWIR2) | Burn scar detection | -1 to 1 |

## Interpretation Guide

### NDVI Values
- **< 0**: Water bodies, built-up areas
- **0-0.2**: Bare soil, rock, sand
- **0.2-0.4**: Sparse vegetation, grassland
- **0.4-0.6**: Moderate vegetation
- **> 0.6**: Dense, healthy vegetation

### EVI Advantages
- Reduced atmospheric effects
- Better performance in dense vegetation
- Enhanced sensitivity to vegetation changes

<div class="info">
💡 **Performance Tip**: Server-side calculations are cached, so subsequent requests for the same expression and parameters load much faster.
</div>

## Next Steps

- **Spatial Operations**: Learn about [cropping and area extraction](/integrations/titiler/crop)
- **RGB Visualization**: Explore [band combinations and color enhancement](/integrations/titiler/rgb)
- **Advanced Expressions**: Check the [API documentation](https://api.explorer.eopf.copernicus.eu/raster/api.html) for more complex mathematical operations

<div class="warning">
⚠️ **Expression Complexity**: While Titiler supports complex mathematical expressions, simpler operations typically perform better and cache more effectively.
</div>