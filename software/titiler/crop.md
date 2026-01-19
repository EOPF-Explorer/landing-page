---
title: Spatial Cropping with Titiler
layout: page
---

<style scoped>
/* Import common CSS first to avoid FOUC */
@import url("../software.css");
</style>

<script setup>
import { ref, onMounted, nextTick, watch, computed } from 'vue'
import Map from 'ol/Map.js'
import View from 'ol/View.js'
import TileLayer from 'ol/layer/Tile.js'
import VectorLayer from 'ol/layer/Vector.js'
import { OSM, Vector as VectorSource, XYZ } from 'ol/source.js'
import { fromLonLat, toLonLat } from 'ol/proj.js'
import { Draw } from 'ol/interaction.js'
import { createBox } from 'ol/interaction/Draw.js'
import { Style, Fill, Stroke } from 'ol/style.js'
import 'ol/ol.css'

const mapContainer = ref(null)
const map = ref(null)
const cropMode = ref('bbox')
const selectedBands = ref('rgb-true')
const cropCoordinates = ref({
  minLon: 12.05,
  minLat: 45.32,
  maxLon: 12.6,
  maxLat: 45.57
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
    expression: '(/measurements/reflectance:b08-/measurements/reflectance:b04)/(/measurements/reflectance:b08+/measurements/reflectance:b04)',
    rescale: '-0.3,0.8',
    colormap: 'rdylgn'
  }
}

const sampleItem = 'S2B_MSIL2A_20251024T101029_N0511_R022_T32TQR_20251024T122954'
const collection = 'sentinel-2-l2a'
const baseUrl = 'https://api.explorer.eopf.copernicus.eu/raster'

const tileLayer = ref(null)
const drawSource = ref(null)
const drawLayer = ref(null)
const drawInteraction = ref(null)

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
  return `${baseUrl}/collections/${collection}/items/${sampleItem}/bbox/${bbox}.png${queryString ? '?' + queryString : ''}`
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

  params.set('max_size', '512')
  
  const queryString = params.toString()
  return `${baseUrl}/collections/${collection}/items/${sampleItem}/bbox/${bbox}.png${queryString ? '?' + queryString : ''}`
}

function enableDrawing() {
  if (!map.value || !drawInteraction.value) return
  
  isDrawing.value = true
  map.value.addInteraction(drawInteraction.value)
}

function disableDrawing() {
  if (!map.value || !drawInteraction.value) return
  
  isDrawing.value = false
  map.value.removeInteraction(drawInteraction.value)
}

function clearDrawing() {
  if (drawSource.value) {
    drawSource.value.clear()
  }
}

function updateCropFromFeature(feature) {
  const geometry = feature.getGeometry()
  const extent = geometry.getExtent()
  
  const [minLon, minLat] = toLonLat([extent[0], extent[1]])
  const [maxLon, maxLat] = toLonLat([extent[2], extent[3]])
  
  cropCoordinates.value = {
    minLon: Math.round(minLon * 1000) / 1000,
    minLat: Math.round(minLat * 1000) / 1000,
    maxLon: Math.round(maxLon * 1000) / 1000,
    maxLat: Math.round(maxLat * 1000) / 1000
  }
}

onMounted(() => {
  nextTick(() => {
    initializeMap()
  })
})

function initializeMap() {
  if (!mapContainer.value) return
  
  // Initialize drawing source and layer
  drawSource.value = new VectorSource()
  drawLayer.value = new VectorLayer({
    source: drawSource.value,
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
  
  // Initialize draw interaction for box drawing
  drawInteraction.value = new Draw({
    source: drawSource.value,
    type: 'Circle',
    geometryFunction: createBox()
  })
  
  drawInteraction.value.on('drawend', (event) => {
    drawSource.value.clear() // Clear previous drawings
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
      drawLayer.value
    ],
    view: new View({
      center: fromLonLat([12.3, 45.45]), // Venice area
      zoom: 11
    })
  })
}
</script>

<style scoped>
/* Page-specific styles - common styles imported from software.css */

.drawing-controls {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.coordinate-inputs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 12px;
}

.coordinate-label {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
  color: var(--on-surface, #24292e);
}

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
  .coordinate-inputs {
    grid-template-columns: 1fr;
  }

  .result-grid {
    grid-template-columns: 1fr;
  }
}
</style>

## TiTiler - Spatial Cropping <img src="https://user-images.githubusercontent.com/10407788/172718020-c2378b7e-a0d4-406e-924c-8ffe54e61596.png" alt="Titiler Logo" style="height:100px;vertical-align:middle;margin-left:0.5rem;float:right;" />

This example demonstrates how to extract specific areas from satellite scenes using Titiler's spatial operations. You can crop data using bounding boxes or draw custom areas directly on the map.

### Interactive Example

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

### Key Concepts

**Spatial Operations**
Titiler supports several spatial operations for data extraction:

**1. Bounding Box Crop**

```
/crop?bbox=minx,miny,maxx,maxy
```

Extracts a rectangular area defined by geographic coordinates.

**2. Feature-Based Crop**

```
/crop?geom={"type":"Polygon","coordinates":[[[...]]]}
```

Crops using complex geometries (polygons, multi-polygons).

**3. Preview Generation**

```
/preview?bbox=minx,miny,maxx,maxy&max_size=512
```

Generates web-friendly previews with size constraints.

**Coordinate Systems**

All coordinates use **WGS84 (EPSG:4326)** longitude/latitude format:

- **Longitude**: East-West position (-180 to +180)
- **Latitude**: North-South position (-90 to +90)

Titiler automatically reprojects to the data's native coordinate system.

**Output Formats**

Cropped data can be returned in multiple formats:

- **GeoTIFF**: Full-resolution georeferenced data
- **PNG**: Web-ready images with transparency
- **JPEG**: Compressed images for smaller file sizes

### Implementation Code

::: code-group

```javascript [Bbox Crop API]
// Using the correct bbox API endpoint
const baseUrl = "https://api.explorer.eopf.copernicus.eu/raster";
const collection = "sentinel-2-l2a";
const itemId = "S2B_MSIL2A_20251123T101239_N0511_R022_T32TQR_20251123T105704";

// Define crop coordinates
const bbox = "12.2,45.7,12.4,45.9"; // minLon,minLat,maxLon,maxLat

// Build crop URL with bbox in path
const cropUrl =
  `${baseUrl}/collections/${collection}/items/${itemId}/bbox/${bbox}/1024x1024.png?` +
  `variables=/measurements/reflectance:b04&` +
  `variables=/measurements/reflectance:b03&` +
  `variables=/measurements/reflectance:b02&` +
  `rescale=0,1&` +
  `color_formula=gamma rgb 1.3, sigmoidal rgb 6 0.1, saturation 1.2`;

// Download cropped image
fetch(cropUrl)
  .then((response) => response.blob())
  .then((blob) => {
    const url = URL.createObjectURL(blob);
    // Display in img element or download
    const img = document.createElement("img");
    img.src = url;
    document.body.appendChild(img);
  });
```

```javascript [NDVI Crop Example]
// Crop with NDVI calculation using bbox API
const bbox = "12.05,45.32,12.6,45.57";
const ndviExpression =
  "(/measurements/reflectance:b08-/measurements/reflectance:b04)/(/measurements/reflectance:b08+/measurements/reflectance:b04)";

const ndviCropUrl =
  `${baseUrl}/collections/${collection}/items/${itemId}/bbox/${bbox}/1024x1024.png?` +
  `expression=${encodeURIComponent(ndviExpression)}&` +
  `rescale=-0.3,0.8&` +
  `colormap_name=rdylgn`;

// Display NDVI crop
fetch(ndviCropUrl)
  .then((response) => response.blob())
  .then((blob) => {
    const url = URL.createObjectURL(blob);
    document.getElementById("ndvi-preview").src = url;
  });

// Alternative with async/await
async function getCropImage(bbox, bandConfig) {
  const params = new URLSearchParams();

  if (bandConfig.variables) {
    bandConfig.variables.forEach((variable) => {
      params.append("variables", variable);
    });
    params.set("rescale", bandConfig.rescale);
    params.set("color_formula", bandConfig.colorFormula);
  } else if (bandConfig.expression) {
    params.set("expression", bandConfig.expression);
    params.set("rescale", bandConfig.rescale);
    params.set("colormap_name", bandConfig.colormap);
  }

  const url = `${baseUrl}/collections/${collection}/items/${itemId}/bbox/${bbox}/1024x1024.png?${params}`;

  try {
    const response = await fetch(url);
    return await response.blob();
  } catch (error) {
    console.error("Crop failed:", error);
    throw error;
  }
}
```

```javascript [Leaflet Integration]
import L from "leaflet";

// Create map with drawing controls
const map = L.map("map").setView([45.8, 12.3], 11);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Rectangle drawing
let drawingRectangle = false;
let currentRectangle = null;
let startPoint = null;

map.on("mousedown", (e) => {
  if (drawingRectangle) {
    startDraw(e.latlng);
  }
});

function startDraw(point) {
  startPoint = point;
  currentRectangle = L.rectangle([point, point], {
    color: "#ff7800",
    weight: 2,
    fillOpacity: 0.1,
  }).addTo(map);

  map.on("mousemove", updateRectangle);
  map.on("mouseup", finishDraw);
}

function updateRectangle(e) {
  if (currentRectangle && startPoint) {
    const bounds = L.latLngBounds([startPoint, e.latlng]);
    currentRectangle.setBounds(bounds);
  }
}

function finishDraw(e) {
  map.off("mousemove", updateRectangle);
  map.off("mouseup", finishDraw);

  if (currentRectangle) {
    const bounds = currentRectangle.getBounds();
    const bbox = `${bounds.getWest()},${bounds.getSouth()},${bounds.getEast()},${bounds.getNorth()}`;

    // Generate crop using bbox API
    const cropUrl =
      `${baseUrl}/collections/${collection}/items/${itemId}/bbox/${bbox}/512x512.png?` +
      `variables=/measurements/reflectance:b04&` +
      `variables=/measurements/reflectance:b03&` +
      `variables=/measurements/reflectance:b02&` +
      `rescale=0,1&` +
      `color_formula=gamma rgb 1.3, sigmoidal rgb 6 0.1, saturation 1.2`;

    // Display preview
    displayCropPreview(cropUrl);
  }

  drawingRectangle = false;
}

// Enable drawing mode
document.getElementById("draw-button").onclick = () => {
  drawingRectangle = true;
  map.getContainer().style.cursor = "crosshair";
};
```

### API Parameters

| Parameter    | Description                         | Example                         |
| ------------ | ----------------------------------- | ------------------------------- |
| `bbox`       | Bounding box as minx,miny,maxx,maxy | `12.2,45.7,12.4,45.9`           |
| `geom`       | GeoJSON geometry for complex shapes | `{"type":"Polygon",...}`        |
| `max_size`   | Maximum output dimension (preview)  | `512`, `1024`                   |
| `format`     | Output format                       | `png`, `jpeg`, `tiff`           |
| `variables`  | Band selection (same as tiles)      | `/measurements/reflectance:b04` |
| `expression` | Mathematical expressions            | NDVI, EVI calculations          |
| `rescale`    | Value normalization                 | `0,1`, `-1,1`                   |

<div class="info">
💡 <strong>Tip</strong>: Use the preview endpoint with `max_size=512` for quick web previews, then the full crop endpoint for high-resolution analysis.
</div>

### Next Steps

- **API Documentation**: Check the [complete API reference](https://api.explorer.eopf.copernicus.eu/raster/api.html) for advanced cropping options

<div class="warning">
⚠️ <strong>Size Limits</strong>: Large crop areas may take longer to process.
</div>

<div class="navigation">
  <a href="./ndvi" class="button border">← Previous: Vegetation Indices</a>
  <span><strong>3 of 3</strong> - Spatial Cropping</span>
  <a href="../titiler" class="button border">Back to overview →</a>
</div>

:::
