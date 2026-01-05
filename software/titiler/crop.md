---
title: Spatial Cropping with Titiler
layout: page
---

<script>
// Load common utilities
const script = document.createElement('script')
script.src = '../common.js'
document.head.appendChild(script)

// Load common CSS
const link = document.createElement('link')
link.rel = 'stylesheet'
link.href = '../common.css'
document.head.appendChild(link)
</script>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

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
      '/measurements/reflectance/r10m:b04',
      '/measurements/reflectance/r10m:b03',
      '/measurements/reflectance/r10m:b02'
    ],
    rescale: '0,1',
    colorFormula: 'gamma rgb 1.3, sigmoidal rgb 6 0.1, saturation 1.2'
  },
  'ndvi': {
    name: 'NDVI',
    expression: '(/measurements/reflectance/r10m:b08-/measurements/reflectance/r10m:b04)/(/measurements/reflectance/r10m:b08%2b/measurements/reflectance/r10m:b04)',
    rescale: '-1,1',
    colormap: 'rdylgn'
  }
}

const sampleItem = 'S2B_MSIL2A_20251218T110359_N0511_R094_T32VLK_20251218T115223'
const collection = 'sentinel-2-l2a'
const baseUrl = 'https://api.explorer.eopf.copernicus.eu/raster'

let tileLayer = null
let drawSource = null
let drawLayer = null
let drawInteraction = null

function buildBboxUrl() {
  const combo = bandCombinations[selectedBands.value]
  const params = new URLSearchParams()
  
  // Add bbox
  const bbox = `${cropCoordinates.value.minLon},${cropCoordinates.value.minLat},${cropCoordinates.value.maxLon},${cropCoordinates.value.maxLat}`
  params.set('bbox', bbox)
  
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
  
  return `${baseUrl}/collections/${collection}/items/${sampleItem}/crop?${params.toString()}`
}

function buildPreviewUrl() {
  const combo = bandCombinations[selectedBands.value]
  const params = new URLSearchParams()
  
  // Add bbox
  const bbox = `${cropCoordinates.value.minLon},${cropCoordinates.value.minLat},${cropCoordinates.value.maxLon},${cropCoordinates.value.maxLat}`
  params.set('bbox', bbox)
  params.set('max_size', '512')
  
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
  
  return `${baseUrl}/collections/${collection}/items/${sampleItem}/preview?${params.toString()}`
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

onMounted(async () => {
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
    type: 'Circle',\n    geometryFunction: window.ol.interaction.Draw.createBox()\n  })\n  \n  drawInteraction.on('drawend', (event) => {\n    drawSource.clear() // Clear previous drawings\n    updateCropFromFeature(event.feature)\n    disableDrawing()\n  })\n  \n  // Create map\n  map.value = new Map({\n    target: mapContainer.value,\n    layers: [\n      new TileLayer({\n        source: new OSM()\n      }),\n      drawLayer\n    ],\n    view: new View({\n      center: fromLonLat([12.3, 45.8]), // Venice area\n      zoom: 11\n    })\n  })\n})\n\n// Watch for changes\nimport { watch } from 'vue'\nwatch(cropCoordinates, () => {\n  // Could update a preview layer here if needed\n}, { deep: true })\n</script>\n\n<script>\n// Load OpenLayers from CDN if not already loaded\nif (typeof window.ol === 'undefined') {\n  const script = document.createElement('script')\n  script.src = 'https://cdn.jsdelivr.net/npm/ol@9.1.0/dist/ol.js'\n  script.async = true\n  document.head.appendChild(script)\n  \n  const link = document.createElement('link')\n  link.rel = 'stylesheet'\n  link.href = 'https://cdn.jsdelivr.net/npm/ol@9.1.0/ol.css'\n  document.head.appendChild(link)\n}\n</script>\n\n<style scoped>\n.map-container {\n  width: 100%;\n  height: 500px;\n  margin: 20px 0;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.controls {\n  background: #f8f9fa;\n  padding: 20px;\n  border-radius: 8px;\n  margin: 20px 0;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n\n.control-group {\n  margin-bottom: 16px;\n}\n\n.control-group label {\n  display: block;\n  font-weight: 600;\n  margin-bottom: 8px;\n  color: #24292e;\n}\n\n.control-group select,\n.control-group input {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #d1d5da;\n  border-radius: 6px;\n  font-size: 14px;\n}\n\n.coordinate-inputs {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n}\n\n.coordinate-inputs input {\n  font-size: 12px;\n}\n\n.coordinate-label {\n  font-size: 12px;\n  color: #586069;\n  margin-bottom: 4px;\n}\n\n.drawing-controls {\n  display: flex;\n  gap: 10px;\n  margin-top: 10px;\n}\n\n.btn {\n  padding: 8px 16px;\n  border: 1px solid #d1d5da;\n  border-radius: 6px;\n  background: white;\n  cursor: pointer;\n  font-size: 14px;\n  transition: background 0.2s;\n}\n\n.btn-primary {\n  background: #0366d6;\n  color: white;\n  border-color: #0366d6;\n}\n\n.btn-primary:hover {\n  background: #0256cc;\n}\n\n.btn:hover {\n  background: #f6f8fa;\n}\n\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.crop-results {\n  background: #fff;\n  border: 1px solid #e1e4e8;\n  border-radius: 8px;\n  padding: 20px;\n  margin: 24px 0;\n}\n\n.crop-results h3 {\n  margin: 0 0 16px 0;\n  color: #24292e;\n}\n\n.result-grid {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 20px;\n  align-items: start;\n}\n\n.preview-image {\n  max-width: 100%;\n  border-radius: 6px;\n  border: 1px solid #e1e4e8;\n}\n\n.download-section {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.download-btn {\n  background: #28a745;\n  color: white;\n  text-decoration: none;\n  padding: 10px 16px;\n  border-radius: 6px;\n  text-align: center;\n  font-weight: 500;\n  transition: background 0.2s;\n}\n\n.download-btn:hover {\n  background: #1e7e34;\n  text-decoration: none;\n  color: white;\n}\n\n.url-section {\n  background: #f8f9fa;\n  padding: 20px;\n  border-radius: 8px;\n  margin: 24px 0;\n}\n\n.url-section h3 {\n  margin: 0 0 12px 0;\n  color: #24292e;\n}\n\n.url-display {\n  background: #24292e;\n  color: #f6f8fa;\n  padding: 12px;\n  border-radius: 6px;\n  font-family: monospace;\n  font-size: 11px;\n  word-break: break-all;\n  margin: 12px 0;\n  max-height: 100px;\n  overflow-y: auto;\n}\n\n.copy-button {\n  background: #0366d6;\n  color: white;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 14px;\n}\n\n.copy-button:hover {\n  background: #0256cc;\n}\n\n.info {\n  background: #d1ecf1;\n  border: 1px solid #b6d4fe;\n  color: #0c5460;\n  padding: 12px;\n  border-radius: 4px;\n  margin: 16px 0;\n}\n\n.warning {\n  background: #fff3cd;\n  border: 1px solid #ffeaa7;\n  color: #856404;\n  padding: 12px;\n  border-radius: 4px;\n  margin: 16px 0;\n}\n\ncode {\n  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;\n  background: #f6f8fa;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-size: 0.9em;\n}\n\npre {\n  background: #f6f8fa;\n  padding: 16px;\n  border-radius: 6px;\n  overflow-x: auto;\n  margin: 16px 0;\n}\n\n@media (max-width: 768px) {\n  .controls {\n    grid-template-columns: 1fr;\n  }\n  \n  .result-grid {\n    grid-template-columns: 1fr;\n  }\n}\n</style>\n\n# Spatial Cropping with Titiler\n\nThis example demonstrates how to extract specific areas from satellite scenes using Titiler's spatial operations. You can crop data using bounding boxes or draw custom areas directly on the map.\n\n## Interactive Example\n\n<div class=\"controls\">\n  <div>\n    <div class=\"control-group\">\n      <label for=\"band-select\">Visualization:</label>\n      <select id=\"band-select\" v-model=\"selectedBands\">\n        <option value=\"rgb-true\">True Color RGB</option>\n        <option value=\"ndvi\">NDVI Vegetation Index</option>\n      </select>\n    </div>\n    \n    <div class=\"control-group\">\n      <label>Crop Area (Lon/Lat):</label>\n      <div class=\"coordinate-inputs\">\n        <div>\n          <div class=\"coordinate-label\">Min Longitude</div>\n          <input type=\"number\" v-model.number=\"cropCoordinates.minLon\" step=\"0.001\" />\n        </div>\n        <div>\n          <div class=\"coordinate-label\">Min Latitude</div>\n          <input type=\"number\" v-model.number=\"cropCoordinates.minLat\" step=\"0.001\" />\n        </div>\n        <div>\n          <div class=\"coordinate-label\">Max Longitude</div>\n          <input type=\"number\" v-model.number=\"cropCoordinates.maxLon\" step=\"0.001\" />\n        </div>\n        <div>\n          <div class=\"coordinate-label\">Max Latitude</div>\n          <input type=\"number\" v-model.number=\"cropCoordinates.maxLat\" step=\"0.001\" />\n        </div>\n      </div>\n    </div>\n  </div>\n  \n  <div>\n    <div class=\"control-group\">\n      <label>Interactive Drawing:</label>\n      <p style=\"font-size: 14px; color: #586069; margin: 8px 0;\">Draw a rectangle on the map to define the crop area.</p>\n      <div class=\"drawing-controls\">\n        <button class=\"btn btn-primary\" @click=\"enableDrawing()\" :disabled=\"isDrawing\">\n          {{ isDrawing ? 'Drawing...' : '📏 Draw Rectangle' }}\n        </button>\n        <button class=\"btn\" @click=\"clearDrawing()\">\n          🗑️ Clear\n        </button>\n        <button class=\"btn\" @click=\"disableDrawing()\" v-if=\"isDrawing\">\n          ❌ Cancel\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div ref=\"mapContainer\" class=\"map-container\"></div>\n\n<div class=\"crop-results\">\n  <h3>🖼️ Crop Preview & Download</h3>\n  <div class=\"result-grid\">\n    <div>\n      <img :src=\"buildPreviewUrl()\" alt=\"Crop Preview\" class=\"preview-image\" @error=\"$event.target.style.display='none'\" />\n    </div>\n    <div class=\"download-section\">\n      <a :href=\"buildBboxUrl()\" class=\"download-btn\" target=\"_blank\">\n        📥 Download Full Resolution\n      </a>\n      <a :href=\"buildPreviewUrl()\" class=\"download-btn\" target=\"_blank\">\n        🖼️ Download Preview (512px)\n      </a>\n    </div>\n  </div>\n</div>\n\n<div class=\"url-section\">\n  <h3>🔗 Crop API URL</h3>\n  <p>This URL returns the cropped data as a GeoTIFF or image:</p>\n  <div class=\"url-display\">{{ buildBboxUrl() }}</div>\n  <button class=\"copy-button\" @click=\"navigator.clipboard?.writeText(buildBboxUrl())\">\n    📋 Copy URL\n  </button>\n</div>\n\n## Key Concepts\n\n### Spatial Operations\nTitiler supports several spatial operations for data extraction:\n\n#### 1. Bounding Box Crop\n```\n/crop?bbox=minx,miny,maxx,maxy\n```\nExtracts a rectangular area defined by geographic coordinates.\n\n#### 2. Feature-Based Crop\n```\n/crop?geom={\"type\":\"Polygon\",\"coordinates\":[[[...]]]}\n```\nCrops using complex geometries (polygons, multi-polygons).\n\n#### 3. Preview Generation\n```\n/preview?bbox=minx,miny,maxx,maxy&max_size=512\n```\nGenerates web-friendly previews with size constraints.\n\n### Coordinate Systems\nAll coordinates use **WGS84 (EPSG:4326)** longitude/latitude format:\n- **Longitude**: East-West position (-180 to +180)\n- **Latitude**: North-South position (-90 to +90)\n\nTitiler automatically reprojects to the data's native coordinate system.\n\n### Output Formats\nCropped data can be returned in multiple formats:\n- **GeoTIFF**: Full-resolution georeferenced data\n- **PNG**: Web-ready images with transparency\n- **JPEG**: Compressed images for smaller file sizes\n\n## Implementation Code\n\n### Basic Bounding Box Crop\n\n```javascript\n// Define crop area\nconst bbox = {\n  minLon: 12.2,\n  minLat: 45.7,\n  maxLon: 12.4,\n  maxLat: 45.9\n}\n\n// Build crop URL\nconst cropUrl = `https://api.explorer.eopf.copernicus.eu/raster/collections/sentinel-2-l2a/items/${itemId}/crop?` +\n  `bbox=${bbox.minLon},${bbox.minLat},${bbox.maxLon},${bbox.maxLat}&` +\n  `variables=/measurements/reflectance/r10m:b04&` +\n  `variables=/measurements/reflectance/r10m:b03&` +\n  `variables=/measurements/reflectance/r10m:b02&` +\n  `rescale=0,1`\n\n// Download or display the cropped data\nfetch(cropUrl)\n  .then(response => response.blob())\n  .then(blob => {\n    // Handle the downloaded image/data\n    const url = URL.createObjectURL(blob)\n    // Display or save the cropped result\n  })\n```\n\n### Interactive Drawing with OpenLayers\n\n```javascript\nimport { Draw } from 'ol/interaction'\nimport { Vector as VectorLayer } from 'ol/layer'\nimport { Vector as VectorSource } from 'ol/source'\n\n// Setup drawing interaction\nconst drawSource = new VectorSource()\nconst drawInteraction = new Draw({\n  source: drawSource,\n  type: 'Circle',\n  geometryFunction: ol.interaction.Draw.createBox()\n})\n\n// Handle draw completion\ndrawInteraction.on('drawend', (event) => {\n  const extent = event.feature.getGeometry().getExtent()\n  const [minLon, minLat] = ol.proj.toLonLat([extent[0], extent[1]])\n  const [maxLon, maxLat] = ol.proj.toLonLat([extent[2], extent[3]])\n  \n  // Use coordinates for crop operation\n  const bbox = `${minLon},${minLat},${maxLon},${maxLat}`\n  performCrop(bbox)\n})\n\n// Add to map when drawing is enabled\nmap.addInteraction(drawInteraction)\n```\n\n### Polygon-Based Cropping\n\n```javascript\n// Define a complex polygon geometry\nconst polygon = {\n  \"type\": \"Polygon\",\n  \"coordinates\": [[\n    [12.2, 45.7],\n    [12.4, 45.7],\n    [12.4, 45.9],\n    [12.3, 45.95],\n    [12.2, 45.9],\n    [12.2, 45.7]\n  ]]\n}\n\n// Crop using geometry\nconst cropUrl = `https://api.explorer.eopf.copernicus.eu/raster/collections/sentinel-2-l2a/items/${itemId}/crop?` +\n  `geom=${encodeURIComponent(JSON.stringify(polygon))}&` +\n  `variables=/measurements/reflectance/r10m:b04&` +\n  `rescale=0,1`\n```\n\n## API Parameters\n\n| Parameter | Description | Example |\n|-----------|-------------|----------|\n| `bbox` | Bounding box as minx,miny,maxx,maxy | `12.2,45.7,12.4,45.9` |\n| `geom` | GeoJSON geometry for complex shapes | `{\"type\":\"Polygon\",...}` |\n| `max_size` | Maximum output dimension (preview) | `512`, `1024` |\n| `format` | Output format | `png`, `jpeg`, `tiff` |\n| `variables` | Band selection (same as tiles) | `/measurements/reflectance/r10m:b04` |\n| `expression` | Mathematical expressions | NDVI, EVI calculations |\n| `rescale` | Value normalization | `0,1`, `-1,1` |\n\n## Use Cases\n\n### 1. Agricultural Field Analysis\n```javascript\n// Extract a specific agricultural field\nconst fieldBbox = \"12.234,45.678,12.245,45.689\"\nconst ndviUrl = `${baseUrl}/collections/${collection}/items/${item}/crop?` +\n  `bbox=${fieldBbox}&` +\n  `expression=...ndvi_expression...&` +\n  `colormap_name=rdylgn`\n```\n\n### 2. Urban Area Monitoring\n```javascript\n// Monitor urban development with false color\nconst cityArea = \"12.1,45.6,12.5,46.0\"\nconst urbanUrl = `${baseUrl}/collections/${collection}/items/${item}/crop?` +\n  `bbox=${cityArea}&` +\n  `variables=/measurements/reflectance/r10m:b08,/measurements/reflectance/r10m:b04,/measurements/reflectance/r10m:b03`\n```\n\n### 3. Environmental Impact Assessment\n```javascript\n// Extract area around infrastructure project\nconst projectArea = {...} // Complex polygon\nconst impactUrl = `${baseUrl}/collections/${collection}/items/${item}/crop?` +\n  `geom=${encodeURIComponent(JSON.stringify(projectArea))}`\n```\n\n<div class=\"info\">\n💡 **Tip**: Use the preview endpoint with `max_size=512` for quick web previews, then the full crop endpoint for high-resolution analysis.\n</div>\n\n## Next Steps\n\n- **RGB Visualization**: Learn about [band combinations and color enhancement](/integrations/titiler/rgb)\n- **NDVI Calculations**: Explore [vegetation indices and expressions](/integrations/titiler/ndvi)  \n- **API Documentation**: Check the [complete API reference](https://api.explorer.eopf.copernicus.eu/raster/api.html) for advanced cropping options\n\n<div class=\"warning\">\n⚠️ **Size Limits**: Large crop areas may take longer to process. Consider using the preview endpoint for initial exploration.\n</div>