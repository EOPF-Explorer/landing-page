---
title: Spatial Cropping with Titiler
layout: page
---


<script setup>
import { ref, onMounted, nextTick, computed,watch } from 'vue'
import Map from 'ol/Map.js'
import View from 'ol/View.js'
import TileLayer from 'ol/layer/Tile.js'
import VectorLayer from 'ol/layer/Vector.js'
import { Vector as VectorSource, OSM } from 'ol/source.js'
import { toLonLat, transformExtent } from 'ol/proj.js'
import { Draw } from 'ol/interaction.js'
import { createBox } from 'ol/interaction/Draw.js'
import { Style, Fill, Stroke } from 'ol/style.js'
import 'ol/ol.css'
import Tutorial from '../../.vitepress/components/Tutorial.vue'

const copyUrl = async () => {
  try {
    await navigator.clipboard.writeText(bboxUrl.value)
  } catch (e) {
    alert("failed to copy")
  }
}

/** @type {import('vue').Ref<HTMLElement | null>} */
const mapContainer = ref(null)

/** @type {import('vue').Ref<import('ol/Map').default | null>} */
const map = ref(null)

const selectedBands = ref('rgb-true')
const cropCoordinates = ref({
  minLon: 12.05,
  minLat: 45.32,
  maxLon: 12.6,
  maxLat: 45.57
})
const imageError = ref(false)

/**
 * @typedef {Object} BandCombination
 * @property {string} name
 * @property {string[]} [variables]
 * @property {string} [expression]
 * @property {string} rescale
 * @property {string} [colorFormula]
 * @property {string} [colormap]
 */

/** @type {Record<string, BandCombination>} */
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

/** @type {import('vue').Ref<import('ol/source/Vector').default | null>} */
const drawSource = ref(null)
/** @type {import('vue').Ref<import('ol/layer/Vector').default | null>} */
const drawLayer = ref(null)
/** @type {import('vue').Ref<import('ol/interaction/Draw').default | null>} */
const drawInteraction = ref(null)

// Watch for changes
watch(selectedBands, () => {
   imageError.value = false
})

watch(cropCoordinates, () => {
   imageError.value = false
})

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
    //@ts-expect-error
    params.set('color_formula', combo.colorFormula)
  } else if (combo.expression) {
    params.set('expression', combo.expression)
    params.set('rescale', combo.rescale)
    //@ts-expect-error
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
    //@ts-expect-error
    params.set('color_formula', combo.colorFormula)
  } else if (combo.expression) {
    params.set('expression', combo.expression)
    params.set('rescale', combo.rescale)
    //@ts-expect-error
    params.set('colormap_name', combo.colormap)
  }

  params.set('max_size', '512')
  
  const queryString = params.toString()
  return `${baseUrl}/collections/${collection}/items/${sampleItem}/bbox/${bbox}.png${queryString ? '?' + queryString : ''}`
}

/**
 * @param {import('ol/Feature').default} feature
 */
function updateCropFromFeature(feature) {
  const geometry = feature.getGeometry()
  const extent = geometry?.getExtent()
  
  if (!extent) return

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
  
  drawInteraction.value.on('drawstart', () => {
    drawSource.value?.clear()
  })
  
  drawInteraction.value.on('drawend', (event) => {
    updateCropFromFeature(event.feature)
  })
  
  // set the extent of the map based on the item with a little margin
  const itemBbox = [9, 40, 15, 50]
  const mapExtentBbox = [
    itemBbox[0],
    itemBbox[1],
    itemBbox[2],
    itemBbox[3]
  ]
  const mapExtent = transformExtent(mapExtentBbox, 'EPSG:4326', 'EPSG:3857')

  // Create map constrained to item extent
  map.value = new Map({
    target: mapContainer.value,
    layers: [
      new TileLayer({
        source: new OSM()
      }),
      drawLayer.value
    ],
    view: new View({
      extent: mapExtent,
      center: [0, 0], // Will be updated by fit()
      zoom: 10
    })
  })

  map.value.getView().fit(mapExtent, { padding: [20, 20, 20, 20] })
  
  map.value.addInteraction(drawInteraction.value)
}
</script>

## TiTiler - Spatial Cropping <img src="https://user-images.githubusercontent.com/10407788/172718020-c2378b7e-a0d4-406e-924c-8ffe54e61596.png" alt="Titiler Logo" style="height:100px;vertical-align:middle;margin-left:0.5rem;float:right;" />

This example demonstrates how to extract specific areas from satellite scenes using Titiler's spatial operations. You can crop data using bounding boxes or draw custom areas directly on the map

<Tutorial height="800px">
  <template #description>
    <h3>Features</h3>
    <ul>
       <li><strong>Interactive Drawing</strong>: Draw crop rectangle on map</li>
       <li><strong>Multi-band Processing</strong>: Crop and process RGB or NDVI on the fly</li>
       <li><strong>Dynamic Preview</strong>: Instant preview of cropped area</li>
    </ul>

::: tip 💡 Size Limits: Large crop areas may take longer to process. 
:::

  </template>

  <template #controls>
    <div class="grid small-space">
      <div class="s12">
        <div class="field label border">
          <select v-model="selectedBands">
            <option value="rgb-true">True Color RGB</option>
            <option value="ndvi">NDVI Vegetation Index</option>
          </select>
          <label>Visualization</label>
        </div>
      </div>
      <div class="s12">
        <label class="bold">Crop Area (Lon/Lat)</label>
        <div class="grid small-space">
          <div class="s6">
            <div class="field label border">
              <input type="number" v-model.number="cropCoordinates.minLon" step="0.001">
              <label>Min Lon</label>
            </div>
          </div>
          <div class="s6">
            <div class="field label border">
              <input type="number" v-model.number="cropCoordinates.minLat" step="0.001">
              <label>Min Lat</label>
            </div>
          </div>
          <div class="s6">
            <div class="field label border">
              <input type="number" v-model.number="cropCoordinates.maxLon" step="0.001">
              <label>Max Lon</label>
            </div>
          </div>
          <div class="s6">
            <div class="field label border">
              <input type="number" v-model.number="cropCoordinates.maxLat" step="0.001">
              <label>Max Lat</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <template #demo>
    <div style="position: relative; width: 100%; height: 100%;">
      <div ref="mapContainer" style="width: 100%; height: 100%;"></div>
      <!-- Results Overlay -->
      <div class="absolute bottom left right margin">
        <div class="surface container rounded elevation-2">
            <div class="padding border-bottom">
               <h6 class="no-margin">Crop Preview</h6>
               <div class="grid no-space top-align">
                  <div class="s4">
                    <img :src="previewUrl" alt="Crop Preview" class="responsive rounded border" 
                         @error="imageError = true" @load="imageError = false"
                         v-show="!imageError" />
                  </div>
                  <div class="s8 padding-left">
                     <p class="small-text no-margin">
                        <strong>Preview URL:</strong><br>
                        <code v-if="!imageError">{{ bboxUrl }}</code>
                        <span v-else class="error-text">No data availability for this area</span>
                     </p>
                     <nav class="small-margin-top" v-if="!imageError">
                        <a :href="bboxUrl" target="_blank" class="button small fill">
                          Download High-Res
                        </a>
                         <button class="small border" @click="copyUrl">
                           Copy URL
                        </button>
                     </nav>
                  </div>
               </div>
            </div>
        </div>
      </div>
    </div>
  </template>

  <template #code>

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

// Drawing logic
let currentRectangle = null;
let startPoint = null;
let isDrawing = false;

// Initialize drawing immediately
enableDrawing();

function enableDrawing() {
  map.on("mousedown", startDraw);
  map.getContainer().style.cursor = "crosshair";
}

function startDraw(e) {
  // Remove previous rectangle if any
  if (currentRectangle) {
    map.removeLayer(currentRectangle);
    currentRectangle = null;
  }
  
  startPoint = e.latlng;
  isDrawing = true;
  
  currentRectangle = L.rectangle([startPoint, startPoint], {
    color: "#ff7800",
    weight: 2,
    fillOpacity: 0.1,
  }).addTo(map);

  map.on("mousemove", updateRectangle);
  map.on("mouseup", finishDraw);
}

function updateRectangle(e) {
  if (isDrawing && currentRectangle) {
    const bounds = L.latLngBounds([startPoint, e.latlng]);
    currentRectangle.setBounds(bounds);
  }
}

function finishDraw(e) {
  isDrawing = false;
  map.off("mousemove", updateRectangle);
  map.off("mouseup", finishDraw);

  if (currentRectangle) {
    const bounds = currentRectangle.getBounds();
    const bbox = `${bounds.getWest()},${bounds.getSouth()},${bounds.getEast()},${bounds.getNorth()}`;

    // Update URL or application state
    console.log("New Bbox:", bbox);
  }
}
```

:::

  </template>
</Tutorial>

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


::: tip TIP 💡: Use the preview endpoint with `max_size=512` for quick web previews, then the full crop endpoint for high-resolution analysis.
:::
### Next Steps

- **API Documentation**: Check the [complete API reference](https://api.explorer.eopf.copernicus.eu/raster/api.html) for advanced cropping options


<nav class="surface-variant large-padding center-align">
  <a href="./ndvi" class="button border">← Previous: Vegetation Indices</a>
  <span class="padding"><strong>3 of 3</strong> - Spatial Cropping</span>
  <a href="../titiler" class="button border">Back to overview →</a>
</nav>

