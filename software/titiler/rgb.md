---
title: RGB Visualization with Titiler
layout: page
---

<script setup>
import { ref, onMounted, nextTick } from 'vue'

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
      '/measurements/reflectance:b04',
      '/measurements/reflectance:b03'
    ],
    rescale: '0,0.4',
    colorFormula: 'gamma rgb 1.5, saturation 1.3'
  }
}

const sampleItem = 'S2B_MSIL2A_20251123T101239_N0511_R022_T32TQR_20251123T105704'
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
  tileLayer.value.getSource().setUrl(newUrl)
}

function copyUrl() {
  const url = buildTileUrl()
  
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url)
      .then(() => {
        copyButtonText.value = '✅ Copied!'
        copyButtonClass.value = 'copy-button copied'
        setTimeout(() => {
          copyButtonText.value = '📋 Copy URL'
          copyButtonClass.value = 'copy-button'
        }, 2000)
      })
      .catch((err) => {
        console.error('Failed to copy: ', err)
        copyButtonText.value = '❌ Failed'
        setTimeout(() => {
          copyButtonText.value = '📋 Copy URL'
        }, 2000)
      })
  } else {
    // Fallback for older browsers
    const textArea = document.createElement('textarea')
    textArea.value = url
    document.body.appendChild(textArea)
    textArea.select()
    try {
      document.execCommand('copy')
      copyButtonText.value = '✅ Copied!'
      copyButtonClass.value = 'copy-button copied'
    } catch (err) {
      console.error('Fallback copy failed: ', err)
      copyButtonText.value = '❌ Failed'
    }
    document.body.removeChild(textArea)
    setTimeout(() => {
      copyButtonText.value = '📋 Copy URL'
      copyButtonClass.value = 'copy-button'
    }, 2000)
  }
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
  // Wait for OpenLayers to be available
  await waitForOpenLayers()
  
  if (typeof window.ol === 'undefined') {
    console.error('OpenLayers not loaded')
    return
  }
  
  const { Map, View } = window.ol
  const { Tile: TileLayer, Vector: VectorLayer } = window.ol.layer
  const { OSM, XYZ } = window.ol.source
  const { fromLonLat } = window.ol.proj
  
  // Initialize tile layer
  const initialUrl = buildTileUrl()
  tileLayer.value = new TileLayer({
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
      tileLayer.value
    ],
    view: new View({
      center: fromLonLat([12.35, 45.44]), // Venice area
      zoom: 13
    })
  })
})

// Watch for band combination changes
import { watch } from 'vue'
watch(selectedBands, updateTileLayer)
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
  margin: 20px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
}

.controls {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
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

.control-group select {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #d1d5da;
  border-radius: 6px;
  font-size: 14px;
}

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
  font-size: 12px;
  word-break: break-all;
  margin: 12px 0;
  border: 1px solid #e1e4e8;
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
  transition: background 0.2s;
}

.copy-button:hover {
  background: #0256cc;
}

.copy-button.copied {
  background: #28a745;
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
.copy {
  display: block !important;
  opacity: 1 !important;
}

/* Style the copy button */
.copy {
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
.copy::before {
  content: "📋";
  font-size: 16px;
}

/* Alternative CSS-only clipboard icon */
.copy::after {
  content: "";
  display: block;
  width: 16px;
  height: 16px;
  background: currentColor;
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z'/%3E%3C/svg%3E") no-repeat center;
  mask-size: contain;
  position: absolute;
}

.copied::before {
  content: "✓";
  font-size: 16px;
  color: green;
  position: absolute;
}

/* Hide language labels under tabs */
span.lang {
  display: none !important;
}
</style>

# RGB Visualization with Titiler

This example demonstrates how to create RGB band combinations using Titiler's tile service with EOPF Sentinel-2 data. The server handles all image processing and returns optimized tiles for web mapping applications.

## Interactive Example

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
    <h4>{{ bandCombinations[selectedBands].name }}</h4>
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

## Key Concepts

### Variable Format

Titiler uses specific paths to reference bands in Zarr data in the form of `group:variable`. For Sentinel-2 reflectance data, the relevant group is `/measurements/reflectance`. Example band paths:

```
/measurements/reflectance:b04  # Red band (10m resolution)
/measurements/reflectance:b11  # SWIR band (20m resolution)
```

### Color Enhancement

The `color_formula` parameter applies color corrections:

- **Gamma correction**: `gamma rgb 1.3` - Brightens mid-tones
- **Sigmoidal contrast**: `sigmoidal rgb 6 0.1` - Enhances contrast
- **Saturation**: `saturation 1.2` - Boosts color intensity

### Rescaling

The `rescale` parameter normalizes reflectance values:

- `0,1` - Full reflectance range (0-100%)
- `0,0.3` - Compressed range for better contrast

## Implementation Code

### Basic OpenLayers Integration

```javascript
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import { fromLonLat } from "ol/proj";

// Titiler tile URL with band variables
const tileUrl =
  "https://api.explorer.eopf.copernicus.eu/raster/collections/sentinel-2-l2a/items/S2B_MSIL2A_20251218T110359_N0511_R094_T32VLK_20251218T115223/tiles/WebMercatorQuad/{z}/{x}/{y}.png?" +
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

### Dynamic Band Switching

```javascript
function updateBandCombination(variables, rescale, colorFormula) {
  const params = new URLSearchParams();

  variables.forEach((variable) => {
    params.append("variables", variable);
  });

  params.set("rescale", rescale);
  params.set("color_formula", colorFormula);

  const newUrl = `${baseUrl}/collections/${collection}/items/${item}/tiles/WebMercatorQuad/{z}/{x}/{y}.png?${params.toString()}`;

  tileLayer.getSource().setUrl(newUrl);
}
```

## API Parameters

| Parameter       | Description                      | Example                         |
| --------------- | -------------------------------- | ------------------------------- |
| `variables`     | Band path in Zarr structure      | `/measurements/reflectance:b04` |
| `rescale`       | Min,max values for normalization | `0,1` or `0,0.3`                |
| `color_formula` | Color enhancement pipeline       | `gamma rgb 1.3, saturation 1.2` |
| `format`        | Output image format              | `png` (default), `webp`, `jpeg` |

<div class="info">
💡 <strong>Tip</strong>: Use the <a href="https://api.explorer.eopf.copernicus.eu/raster/api.html" target="_blank">interactive API documentation</a> to explore all available parameters and test different combinations.
</div>

## Next Steps

- **NDVI Calculations**: Learn [server-side vegetation index calculations](/integrations/titiler/ndvi)
- **Spatial Operations**: Explore [cropping and spatial filtering](/integrations/titiler/crop)
- **STAC Integration**: Browse available datasets in the [STAC Browser](https://api.explorer.eopf.copernicus.eu/browser)

<div class="warning">
⚠️ <strong>Performance Note</strong>: Titiler generates tiles on-demand. Initial requests may be slower while tiles are computed and cached.
</div>
