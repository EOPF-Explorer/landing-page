---
title: Spatial Cropping with Titiler
layout: page
---

<style>
/* Import common CSS first to avoid FOUC */
@import '../common.css';
</style>

<script setup>
import { ref, onMounted, nextTick, watch, computed } from 'vue'

const mapContainer = ref(null)
const map = ref(null)
const cropMode = ref('bbox')
const selectedBands = ref('rgb-true')
const cropCoordinates = ref({
  minLon: 12.2,
  minLat: 45.7,
  maxLon: 12.4,
  maxLat: 45.9
})
const cropLayer = ref(null)
const isDrawing = ref(false)

const bandCombinations = {
  'rgb-true': {
    name: 'True Color RGB',
    variables: [
      '/measurements/reflectance:b04',
      '/measurements/reflectance:b03',
      '/measurements/reflectance:b02'
    ],
    rescale: '0,1',
    colorFormula: 'gamma rgb 1.3, sigmoidal rgb 6 0.1, saturation 1.2'
  },
  'ndvi': {
    name: 'NDVI',
    expression: '(/measurements/reflectance:b08-/measurements/reflectance:b04)/(/measurements/reflectance:b08%2b/measurements/reflectance:b04)',
    rescale: '-1,1',
    colormap: 'rdylgn'
  }
}

const sampleItem = 'S2B_MSIL2A_20251123T101239_N0511_R022_T32TQR_20251123T105704'
const collection = 'sentinel-2-l2a'
const baseUrl = 'https://api.explorer.eopf.copernicus.eu/raster'

let tileLayer = null
let drawSource = null
let drawLayer = null
let drawInteraction = null

// Watch for changes
watch(selectedBands, () => {
  // Vue will automatically update template expressions that use buildBboxUrl() and buildPreviewUrl()
  // No additional action needed as template bindings are reactive
})

watch(cropCoordinates, () => {
  // Vue will automatically update template expressions that use buildBboxUrl() and buildPreviewUrl()
  // No additional action needed as template bindings are reactive
}, { deep: true })

// Computed properties for reactive URLs
const bboxUrl = computed(() => {
  return buildBboxUrl()
})

const previewUrl = computed(() => {
  return buildPreviewUrl()
})

function buildBboxUrl() {
  const combo = bandCombinations[selectedBands.value]
  const params = new URLSearchParams()
  
  // Bbox coordinates in the URL path
  const bbox = `${cropCoordinates.value.minLon},${cropCoordinates.value.minLat},${cropCoordinates.value.maxLon},${cropCoordinates.value.maxLat}`
  
  // Add band parameters
  if (combo.variables) {
    combo.variables.forEach(variable => {
      params.append('variables', variable)
    })
    params.set('rescale', combo.rescale)
    params.set('color_formula', combo.colorFormula)
  } else if (combo.expression) {
    params.set('expression', combo.expression)
    params.set('rescale', combo.rescale)
    params.set('colormap_name', combo.colormap)
  }
  
  const queryString = params.toString()
  return `${baseUrl}/collections/${collection}/items/${sampleItem}/bbox/${bbox}/1024x1024.png${queryString ? '?' + queryString : ''}`
}

function buildPreviewUrl() {
  const combo = bandCombinations[selectedBands.value]
  const params = new URLSearchParams()
  
  // Bbox coordinates in the URL path
  const bbox = `${cropCoordinates.value.minLon},${cropCoordinates.value.minLat},${cropCoordinates.value.maxLon},${cropCoordinates.value.maxLat}`
  
  // Add band parameters
  if (combo.variables) {
    combo.variables.forEach(variable => {
      params.append('variables', variable)
    })
    params.set('rescale', combo.rescale)
    params.set('color_formula', combo.colorFormula)
  } else if (combo.expression) {
    params.set('expression', combo.expression)
    params.set('rescale', combo.rescale)
    params.set('colormap_name', combo.colormap)
  }
  
  const queryString = params.toString()
  return `${baseUrl}/collections/${collection}/items/${sampleItem}/bbox/${bbox}/512x512.png${queryString ? '?' + queryString : ''}`
}

function enableDrawing() {
  if (!map.value || !drawInteraction) return
  
  isDrawing.value = true
  map.value.addInteraction(drawInteraction)
}

function disableDrawing() {
  if (!map.value || !drawInteraction) return
  
  isDrawing.value = false
  map.value.removeInteraction(drawInteraction)
}

function clearDrawing() {
  if (drawSource) {
    drawSource.clear()
  }
}

function updateCropFromFeature(feature) {
  const geometry = feature.getGeometry()
  const extent = geometry.getExtent()
  
  const { toLonLat } = window.ol.proj
  
  const [minLon, minLat] = toLonLat([extent[0], extent[1]])
  const [maxLon, maxLat] = toLonLat([extent[2], extent[3]])
  
  cropCoordinates.value = {
    minLon: Math.round(minLon * 1000) / 1000,
    minLat: Math.round(minLat * 1000) / 1000,
    maxLon: Math.round(maxLon * 1000) / 1000,
    maxLat: Math.round(maxLat * 1000) / 1000
  }
}

// Function to wait for OpenLayers to load
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
  const { Tile: TileLayer, Vector: VectorLayer } = window.ol.layer
  const { OSM, Vector: VectorSource } = window.ol.source
  const { fromLonLat } = window.ol.proj
  const { Draw } = window.ol.interaction
  const { Style, Fill, Stroke } = window.ol.style
  
  // Initialize drawing source and layer
  drawSource = new VectorSource()
  drawLayer = new VectorLayer({
    source: drawSource,
    style: new Style({
      fill: new Fill({
        color: 'rgba(255, 255, 255, 0.2)'
      }),
      stroke: new Stroke({
        color: 'rgba(0, 123, 255, 0.8)',
        width: 2,
        lineDash: [5, 5]
      })
    })
  })
  
  // Initialize draw interaction
  drawInteraction = new Draw({
    source: drawSource,
    type: 'Circle',
    geometryFunction: window.ol.interaction.Draw.createBox()
  })
  
  drawInteraction.on('drawend', (event) => {
    drawSource.clear() // Clear previous drawings
    updateCropFromFeature(event.feature)
    disableDrawing()
  })
  
  // Create map
  map.value = new Map({
    target: mapContainer.value,
    layers: [
      new TileLayer({
        source: new OSM()
      }),
      drawLayer
    ],
    view: new View({
      center: fromLonLat([12.3, 45.45]), // Venice area
      zoom: 11
    })
  })
})
</script>

<style scoped>
/* Page-specific styles only - common styles imported above */

/* Crop-specific drawing controls */
.drawing-controls {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

/* Crop-specific button styles */
.crop-results {
  background: #fff;
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  padding: 20px;
  margin: 24px 0;
}

.crop-results h3 {
  margin: 0 0 16px 0;
  color: #24292e;
}

.result-grid {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;
  align-items: start;
}

.preview-image {
  max-width: 100%;
  border-radius: 6px;
  border: 1px solid #e1e4e8;
}

.download-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.download-btn {
  background: #28a745;
  color: white;
  text-decoration: none;
  padding: 10px 16px;
  border-radius: 6px;
  text-align: center;
  font-weight: 500;
  transition: background 0.2s;
}

.download-btn:hover {
  background: #1e7e34;
  text-decoration: none;
  color: white;
}

@media (max-width: 768px) {
  .controls {
    grid-template-columns: 1fr;
  }

  .result-grid {
    grid-template-columns: 1fr;
  }
}
</style>

# Spatial Cropping with Titiler

This example demonstrates how to extract specific areas from satellite scenes using Titiler's spatial operations. You can crop data using bounding boxes or draw custom areas directly on the map.

## Interactive Example

<div class="controls">
  <div>
    <div class="control-group">
      <label for="band-select">Visualization:</label>
      <select id="band-select" v-model="selectedBands">
        <option value="rgb-true">True Color RGB</option>
        <option value="ndvi">NDVI Vegetation Index</option>
      </select>
    </div>
    <div class="control-group">
      <label>Crop Area (Lon/Lat):</label>
      <div class="coordinate-inputs">
        <div>
          <div class="coordinate-label">Min Longitude</div>
          <input type="number" v-model.number="cropCoordinates.minLon" step="0.001" />
        </div>
        <div>
          <div class="coordinate-label">Min Latitude</div>
          <input type="number" v-model.number="cropCoordinates.minLat" step="0.001" />
        </div>
        <div>
          <div class="coordinate-label">Max Longitude</div>
          <input type="number" v-model.number="cropCoordinates.maxLon" step="0.001" />
        </div>
        <div>
          <div class="coordinate-label">Max Latitude</div>
          <input type="number" v-model.number="cropCoordinates.maxLat" step="0.001" />
        </div>
      </div>
    </div>
  </div>

  <div>
    <div class="control-group">
      <label>Interactive Drawing:</label>
      <p style="font-size: 14px; color: #586069; margin: 8px 0;">Draw a rectangle on the map to define the crop area.</p>
      <div class="drawing-controls">
        <button class="btn btn-primary" @click="enableDrawing()" :disabled="isDrawing">
          {{ isDrawing ? 'Drawing...' : '📏 Draw Rectangle' }}
        </button>
        <button class="btn" @click="clearDrawing()">
          🗑️ Clear
        </button>
        <button class="btn" @click="disableDrawing()" v-if="isDrawing">
          ❌ Cancel
        </button>
      </div>
    </div>
  </div>
</div>

<div ref="mapContainer" class="map-container"></div>

<div class="crop-results">
  <h3>🖼️ Crop Preview & Download</h3>
  <div class="result-grid">
    <div>
      <img :src="previewUrl" alt="Crop Preview" class="preview-image" @error="$event.target.style.display='none'" />
    </div>
    <div class="download-section">
      <a :href="bboxUrl" class="download-btn" target="_blank">
        📥 Download Full Resolution
      </a>
      <a :href="previewUrl" class="download-btn" target="_blank">
        🖼️ Download Preview (512px)
      </a>
    </div>
  </div>
</div>

<div class="url-section">
  <h3>🔗 Crop API URL</h3>
  <p>This URL returns the cropped data as a GeoTIFF or image:</p>
  <div class="url-display">{{ bboxUrl }}</div>
  <button class="copy-button" @click="navigator.clipboard?.writeText(bboxUrl)">
    📋 Copy URL
  </button>
</div>

## Key Concepts

### Spatial Operations
Titiler supports several spatial operations for data extraction:

#### 1. Bounding Box Crop
```
/crop?bbox=minx,miny,maxx,maxy
```
Extracts a rectangular area defined by geographic coordinates.

#### 2. Feature-Based Crop
```
/crop?geom={"type":"Polygon","coordinates":[[[...]]]}
```
Crops using complex geometries (polygons, multi-polygons).

#### 3. Preview Generation
```
/preview?bbox=minx,miny,maxx,maxy&max_size=512
```
Generates web-friendly previews with size constraints.

### Coordinate Systems
All coordinates use **WGS84 (EPSG:4326)** longitude/latitude format:
- **Longitude**: East-West position (-180 to +180)
- **Latitude**: North-South position (-90 to +90)

Titiler automatically reprojects to the data's native coordinate system.

### Output Formats
Cropped data can be returned in multiple formats:
- **GeoTIFF**: Full-resolution georeferenced data
- **PNG**: Web-ready images with transparency
- **JPEG**: Compressed images for smaller file sizes

## Implementation Code

### Basic Bounding Box Crop

```javascript
// Define crop area
const bbox = {
  minLon: 12.2,
  minLat: 45.7,
  maxLon: 12.4,
  maxLat: 45.9
}

// Build crop URL
const cropUrl = `https://api.explorer.eopf.copernicus.eu/raster/collections/sentinel-2-l2a/items/${itemId}/crop?` +
  `bbox=${bbox.minLon},${bbox.minLat},${bbox.maxLon},${bbox.maxLat}&` +
  `variables=/measurements/reflectance:b04&` +
  `variables=/measurements/reflectance:b03&` +
  `variables=/measurements/reflectance:b02&` +
  `rescale=0,1`

// Download or display the cropped data
fetch(cropUrl)
  .then(response => response.blob())
  .then(blob => {
    // Handle the downloaded image/data
    const url = URL.createObjectURL(blob)
    // Display or save the cropped result
  })
```

### Interactive Drawing with OpenLayers

```javascript
import { Draw } from 'ol/interaction'
import { Vector as VectorLayer } from 'ol/layer'
import { Vector as VectorSource } from 'ol/source'

// Setup drawing interaction
const drawSource = new VectorSource()
const drawInteraction = new Draw({
  source: drawSource,
  type: 'Circle',
  geometryFunction: ol.interaction.Draw.createBox()
})

// Handle draw completion
drawInteraction.on('drawend', (event) => {
  const extent = event.feature.getGeometry().getExtent()
  const [minLon, minLat] = ol.proj.toLonLat([extent[0], extent[1]])
  const [maxLon, maxLat] = ol.proj.toLonLat([extent[2], extent[3]])
  
  // Use coordinates for crop operation
  const bbox = `${minLon},${minLat},${maxLon},${maxLat}`
  performCrop(bbox)
})

// Add to map when drawing is enabled
map.addInteraction(drawInteraction)
```

### Polygon-Based Cropping

```javascript
// Define a complex polygon geometry
const polygon = {
  "type": "Polygon",
  "coordinates": [[
    [12.2, 45.7],
    [12.4, 45.7],
    [12.4, 45.9],
    [12.3, 45.95],
    [12.2, 45.9],
    [12.2, 45.7]
  ]]
}

// Crop using geometry
const cropUrl = `https://api.explorer.eopf.copernicus.eu/raster/collections/sentinel-2-l2a/items/${itemId}/crop?` +
  `geom=${encodeURIComponent(JSON.stringify(polygon))}&` +
  `variables=/measurements/reflectance:b04&` +
  `rescale=0,1`
```

## API Parameters

| Parameter | Description | Example |
|-----------|-------------|----------|
| `bbox` | Bounding box as minx,miny,maxx,maxy | `12.2,45.7,12.4,45.9` |
| `geom` | GeoJSON geometry for complex shapes | `{"type":"Polygon",...}` |
| `max_size` | Maximum output dimension (preview) | `512`, `1024` |
| `format` | Output format | `png`, `jpeg`, `tiff` |
| `variables` | Band selection (same as tiles) | `/measurements/reflectance:b04` |
| `expression` | Mathematical expressions | NDVI, EVI calculations |
| `rescale` | Value normalization | `0,1`, `-1,1` |

## Use Cases

### 1. Agricultural Field Analysis
```javascript
// Extract a specific agricultural field
const fieldBbox = "12.234,45.678,12.245,45.689"
const ndviUrl = `${baseUrl}/collections/${collection}/items/${item}/crop?` +
  `bbox=${fieldBbox}&` +
  `expression=...ndvi_expression...&` +
  `colormap_name=rdylgn`
```

### 2. Urban Area Monitoring
```javascript
// Monitor urban development with false color
const cityArea = "12.1,45.6,12.5,46.0"
const urbanUrl = `${baseUrl}/collections/${collection}/items/${item}/crop?` +
  `bbox=${cityArea}&` +
  `variables=/measurements/reflectance:b08,/measurements/reflectance:b04,/measurements/reflectance:b03`
```

### 3. Environmental Impact Assessment
```javascript
// Extract area around infrastructure project
const projectArea = {...} // Complex polygon
const impactUrl = `${baseUrl}/collections/${collection}/items/${item}/crop?` +
  `geom=${encodeURIComponent(JSON.stringify(projectArea))}`
```

<div class="info">
💡 **Tip**: Use the preview endpoint with `max_size=512` for quick web previews, then the full crop endpoint for high-resolution analysis.
</div>

## Next Steps

- **RGB Visualization**: Learn about [band combinations and color enhancement](/integrations/titiler/rgb)
- **NDVI Calculations**: Explore [vegetation indices and expressions](/integrations/titiler/ndvi)  
- **API Documentation**: Check the [complete API reference](https://api.explorer.eopf.copernicus.eu/raster/api.html) for advanced cropping options

<div class="warning">
⚠️ **Size Limits**: Large crop areas may take longer to process. Consider using the preview endpoint for initial exploration.
</div>
