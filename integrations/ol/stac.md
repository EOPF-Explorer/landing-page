---
title: OpenLayers - STAC Catalog Integration
layout: page
---

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import Map from 'ol/Map.js'
import View, { getView, withExtentCenter, withHigherResolutions, withLowerResolutions, withZoom } from 'ol/View.js'
import TileLayer from 'ol/layer/WebGLTile.js'
import VectorLayer from 'ol/layer/Vector.js'
import GeoZarr from 'ol/source/GeoZarr.js'
import VectorSource from 'ol/source/Vector.js'
import OSM from 'ol/source/OSM.js'
import { Draw } from 'ol/interaction.js'
import { createBox } from 'ol/interaction/Draw.js'
import { Feature } from 'ol'
import { Polygon } from 'ol/geom.js'
import { Style, Stroke, Fill } from 'ol/style.js'
import { transformExtent } from 'ol/proj.js'
import * as ol from 'ol'
import 'ol/ol.css'

const webglSupport = ref(null)
const mapRef = ref()
const searchResultsRef = ref()
let map = null
let drawInteraction = null
let boundingBoxLayer = null
let footprintsLayer = null
let currentDataLayers = []

// Search parameters
const startDate = ref('')
const endDate = ref('')
const isSearching = ref(false)
const searchResults = ref([])
const selectedBbox = ref(null)

onMounted(async () => {
  // Check WebGL support
  const canvas = document.createElement('canvas')
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
  webglSupport.value = gl !== null

  // Set default dates (last 30 days)
  const today = new Date()
  const thirtyDaysAgo = new Date(today.getTime() - (30 * 24 * 60 * 60 * 1000))
  
  endDate.value = today.toISOString().split('T')[0]
  startDate.value = thirtyDaysAgo.toISOString().split('T')[0]

  if (webglSupport.value) {
    nextTick(() => {
      initializeMap()
    })
  }
})

function initializeMap() {
  if (mapRef.value) {
    try {
      // Create base layers
      const osmLayer = new TileLayer({
        source: new OSM(),
      })

      // Vector layer for bounding box drawing
      const bboxSource = new VectorSource()
      boundingBoxLayer = new VectorLayer({
        source: bboxSource,
        style: new Style({
          stroke: new Stroke({
            color: '#3399CC',
            width: 2,
            lineDash: [10, 10]
          }),
          fill: new Fill({
            color: 'rgba(51, 153, 204, 0.1)'
          })
        })
      })

      // Vector layer for search result footprints
      const footprintsSource = new VectorSource()
      footprintsLayer = new VectorLayer({
        source: footprintsSource,
        style: new Style({
          stroke: new Stroke({
            color: '#ff6b35',
            width: 2
          }),
          fill: new Fill({
            color: 'rgba(255, 107, 53, 0.1)'
          })
        })
      })

      map = new Map({
        layers: [osmLayer, boundingBoxLayer, footprintsLayer],
        target: mapRef.value,
        view: new View({
          center: [260000, 6250000], // Paris in Web Mercator
          zoom: 8
        })
      })

      // Add draw interaction for bounding box selection
      drawInteraction = new Draw({
        source: bboxSource,
        type: 'Circle',
        geometryFunction: createBox()
      })

      map.addInteraction(drawInteraction)

      // Handle draw end event
      drawInteraction.on('drawend', function(event) {
        // Clear previous bbox - the new feature is automatically added by the interaction
        const allFeatures = bboxSource.getFeatures()
        if (allFeatures.length > 1) {
          // Remove all but the last feature (the newly drawn one)
          for (let i = 0; i < allFeatures.length - 1; i++) {
            bboxSource.removeFeature(allFeatures[i])
          }
        }
        
        // Get the drawn extent
        const extent = event.feature.getGeometry().getExtent()
        const bbox = transformExtent(extent, 'EPSG:3857', 'EPSG:4326')
        selectedBbox.value = bbox
        
        console.log('Selected bbox:', bbox)
      })

    } catch (error) {
      console.error('Failed to initialize map:', error)
    }
  }
}

async function searchSTAC() {
  if (!selectedBbox.value) {
    alert('Please draw a bounding box on the map first')
    return
  }

  if (!startDate.value || !endDate.value) {
    alert('Please select start and end dates')
    return
  }

  isSearching.value = true
  searchResults.value = []

  try {
    // Clear previous footprints and data layers
    footprintsLayer.getSource().clear()
    clearDataLayers()

    const [minLon, minLat, maxLon, maxLat] = selectedBbox.value

    // Search parameters
    const searchParams = {
      bbox: [minLon, minLat, maxLon, maxLat],
      datetime: `${startDate.value}T00:00:00Z/${endDate.value}T23:59:59Z`,
      collections: ['sentinel-2-l2a'], // Assuming this is the collection name in EOPF STAC
      limit: 10
    }

    console.log('Searching with parameters:', searchParams)

    // Create STAC search URL and perform direct fetch
    try {
      const stacUrl = new URL('https://api.explorer.eopf.copernicus.eu/stac/search')
      stacUrl.searchParams.set('bbox', `${minLon},${minLat},${maxLon},${maxLat}`)
      stacUrl.searchParams.set('datetime', `${startDate.value}T00:00:00Z/${endDate.value}T23:59:59Z`)
      stacUrl.searchParams.set('collections', 'sentinel-2-l2a')
      stacUrl.searchParams.set('limit', '10')
      
      console.log('Fetching from:', stacUrl.toString())
      
      const response = await fetch(stacUrl)
      if (!response.ok) {
        throw new Error(`STAC API error: ${response.status}`)
      }
      
      const searchResponse = await response.json()
      
      if (searchResponse.features && searchResponse.features.length > 0) {
        searchResults.value = searchResponse.features
        displayFootprints(searchResponse.features)
      } else {
        console.log('No results found')
        searchResults.value = []
      }
    } catch (stacError) {
      console.error('STAC API error:', stacError)
      // Fallback: create mock search results for demonstration
      searchResults.value = []
      alert('STAC search temporarily unavailable. This is a demo showing the interface.')
    }

  } catch (error) {
    console.error('Search error:', error)
    alert('Search failed: ' + error.message)
  } finally {
    isSearching.value = false
  }
}

function displayFootprints(features) {
  const footprintsSource = footprintsLayer.getSource()
  
  features.forEach((stacItem, index) => {
    if (stacItem.geometry) {
      // Create feature from STAC item geometry
      const feature = new Feature({
        geometry: new Polygon(stacItem.geometry.coordinates).transform('EPSG:4326', 'EPSG:3857')
      })
      
      // Add metadata to feature
      feature.setProperties({
        id: stacItem.id,
        datetime: stacItem.properties.datetime,
        collection: stacItem.collection,
        stacItem: stacItem
      })
      
      footprintsSource.addFeature(feature)
    }
  })

  // Fit view to footprints
  if (features.length > 0) {
    const extent = footprintsSource.getExtent()
    map.getView().fit(extent, { padding: [50, 50, 50, 50] })
    
    // Auto-load all scenes after displaying footprints
    console.log('Auto-loading all scenes...')
    features.forEach((stacItem, index) => {
      // Add slight delay between loading scenes to avoid overwhelming the system
      setTimeout(() => {
        loadScene(stacItem)
      }, index * 500)
    })
  }
}

async function loadScene(stacItem) {
  try {
    // Find reflectance asset or fallback to other Zarr assets
    let zarrAsset = stacItem.assets?.reflectance
    let zarrUrl
    
    if (zarrAsset) {
      zarrUrl = zarrAsset.href
      console.log('Using reflectance asset:', zarrUrl)
    } else {
      // Fallback: look for other Zarr assets or use the store link
      const storeLink = stacItem.links?.find(link => link.rel === 'store')
      if (storeLink) {
        zarrUrl = storeLink.href
        console.log('Using store link:', zarrUrl)
      } else {
        console.error('No suitable Zarr data found in STAC item:', stacItem)
        return
      }
    }

    console.log('Loading Zarr data from:', zarrUrl)

    // Simple configuration - use the Zarr URL directly
    let sourceConfig
    
    if (zarrAsset && zarrUrl.includes('/measurements/reflectance')) {
      // Direct reflectance asset - remove the group path and use group parameter
      const baseUrl = zarrUrl.replace('/measurements/reflectance', '')
      sourceConfig = {
        url: baseUrl,
        group: 'measurements/reflectance',
        bands: ['b04', 'b03', 'b02']
      }
    } else {
      // Store link - use with group parameter
      sourceConfig = {
        url: zarrUrl,
        group: 'measurements/reflectance',
        bands: ['b04', 'b03', 'b02']
      }
    }
    
    console.log('Creating GeoZarr source with config:', sourceConfig)
    
    const source = new GeoZarr(sourceConfig)

    // Create tile layer with WebGL styling like the basic example
    const dataLayer = new TileLayer({
      source,
      style: {
        gamma: 1.5,
        color: [
          'color',
          ['interpolate', ['linear'], ['band', 1], 0, 0, 0.5, 255],
          ['interpolate', ['linear'], ['band', 2], 0, 0, 0.5, 255],
          ['interpolate', ['linear'], ['band', 3], 0, 0, 0.5, 255],
          [
            'case',
            ['==', ['+', ['band', 1], ['band', 2], ['band', 3]], 0],
            0,
            1,
          ],
        ],
      },
    })

    // Add the layer to map
    map.addLayer(dataLayer)
    currentDataLayers.push(dataLayer)
    
    console.log('Added layer to map for scene:', stacItem.id)

  } catch (error) {
    console.error('Failed to load scene:', error)
  }
}

function clearDataLayers() {
  currentDataLayers.forEach(layer => {
    map.removeLayer(layer)
  })
  currentDataLayers = []
}

function clearAll() {
  // Clear bbox
  boundingBoxLayer.getSource().clear()
  selectedBbox.value = null
  
  // Clear footprints
  footprintsLayer.getSource().clear()
  
  // Clear search results
  searchResults.value = []
  
  // Clear data layers
  clearDataLayers()
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit', 
    year: 'numeric'
  })
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

.error {
  background: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
  padding: 12px;
  border-radius: 4px;
  margin: 16px 0;
}

.demo-container {
  margin: 24px 0;
}

.controls-panel {
  background: #f8f9fa;
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

.controls-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 20px;
}

.compact-controls {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.control-group {
  display: flex;
  flex-direction: column;
}

.control-group.compact {
  flex: 0 0 auto;
  min-width: 180px;
}

.button-group.compact {
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-top: 18px; /* Align with input fields */
}

.control-group label {
  font-weight: 500;
  margin-bottom: 4px;
  color: #24292e;
}

.date-input-container {
  position: relative;
  display: inline-block;
  width: 100%;
}

.control-group input {
  padding: 8px 35px 8px 12px;
  border: 1px solid #d1d5da;
  border-radius: 4px;
  font-size: 14px;
  background: white;
  color: #24292e;
  min-width: 150px;
  width: 100%;
}

.control-group input:focus {
  outline: none;
  border-color: #0366d6;
  box-shadow: 0 0 0 2px rgba(3, 102, 214, 0.1);
}

.control-group input[type="date"] {
  cursor: pointer;
  font-family: inherit;
}

.date-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
  color: #6c757d;
}

.button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn {
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.2s;
}

.btn-primary {
  background: #0366d6;
  color: white;
}

.btn-primary:hover {
  background: #0256cc;
}

.btn-primary:disabled {
  background: #94a3b8;
  cursor: not-allowed;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background: #5a6268;
}

.map-container {
  height: 500px;
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  margin: 20px 0;
}

.results-panel {
  background: #f8f9fa;
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  margin-top: 16px;
}

.result-card {
  background: white;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  padding: 16px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.result-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.result-title {
  font-weight: 600;
  font-size: 14px;
  color: #24292e;
  margin-bottom: 8px;
}

.result-meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 12px;
  font-size: 13px;
  color: #586069;
}

.result-actions {
  display: flex;
  gap: 8px;
}

.btn-small {
  padding: 6px 12px;
  font-size: 12px;
}

.date-display {
  font-size: 12px;
  color: #586069;
  margin-top: 4px;
  font-style: italic;
}

.loading-info {
  margin-top: 12px;
  padding: 10px;
  background: #f0f8ff;
  border: 1px solid #b3d7ff;
  border-radius: 4px;
  color: #0066cc;
}

.instructions {
  background: #e7f3ff;
  border: 1px solid #b3d7ff;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
}

.steps-list {
  margin: 16px 0;
  padding-left: 20px;
}

.steps-list li {
  margin: 8px 0;
}

code {
  background: #f6f8fa;
  padding: 2px 4px;
  border-radius: 3px;
  font-family: 'SFMono-Regular', Consolas, monospace;
  font-size: 13px;
}

pre {
  background: #f6f8fa;
  padding: 16px;
  border-radius: 6px;
  overflow-x: auto;
  font-size: 13px;
  margin: 16px 0;
  border: 1px solid #e1e4e8;
}
</style>

# STAC Catalog Integration

This example demonstrates how to integrate OpenLayers with EOPF's STAC (SpatioTemporal Asset Catalog) API to search and visualize Sentinel-2 data using spatial-temporal filters.

<div class="warning" v-if="webglSupport === false">
  <strong>⚠️ WebGL Not Supported:</strong> Your browser doesn't support WebGL, which is required for this example.
</div>

## Features

- **Spatial Search**: Draw bounding box on the map to define search area
- **Temporal Filtering**: Select date range for time-based search
- **STAC Integration**: Query EOPF's STAC catalog using stac-js
- **Scene Visualization**: Display footprints and load RGB imagery
- **Interactive Results**: Browse and load up to 10 matching scenes

<div class="demo-container">

  <div class="controls-panel">
    <div class="compact-controls">
      <div class="control-group compact">
        <label for="start-date">Start Date:</label>
        <div class="date-input-container">
          <input 
            id="start-date" 
            type="date" 
            v-model="startDate"
            :max="endDate"
            title="Select start date for search"
          />
          <span class="date-icon">📅</span>
        </div>
        <div class="date-display">{{ startDate ? formatDate(startDate + 'T00:00:00Z') : 'Not selected' }}</div>
      </div>
      <div class="control-group compact">
        <label for="end-date">End Date:</label>
        <div class="date-input-container">
          <input 
            id="end-date" 
            type="date" 
            v-model="endDate"
            :min="startDate"
            :max="new Date().toISOString().split('T')[0]"
            title="Select end date for search"
          />
          <span class="date-icon">📅</span>
        </div>
        <div class="date-display">{{ endDate ? formatDate(endDate + 'T00:00:00Z') : 'Not selected' }}</div>
      </div>
      <div class="button-group compact">
        <button 
          @click="searchSTAC" 
          :disabled="isSearching || !selectedBbox"
          class="btn btn-primary"
        >
          {{ isSearching ? 'Searching...' : 'Search STAC' }}
        </button>
        <button 
          @click="clearAll"
          class="btn btn-secondary"
        >
          Clear All
        </button>
      </div>
    </div>
    <div v-if="!selectedBbox" class="warning">
      <strong>Draw a bounding box:</strong> Click and drag on the map to define your search area.
    </div>
  </div>

  <div ref="mapRef" class="map-container"></div>

  <div v-if="searchResults.length > 0" class="results-panel">
    <h3>Search Results ({{ searchResults.length }} scenes found)</h3>
    <p>Loading satellite imagery automatically...</p>
    <div class="loading-info">
      <em>Scene footprints are displayed in orange. Satellite imagery will load progressively.</em>
    </div>
  </div>

  <div v-else-if="!isSearching && selectedBbox" class="results-panel">
    <p>No results found for the selected area and time range. Try expanding your search criteria.</p>
  </div>
</div>

## Implementation Details

### STAC API Integration

The search uses direct HTTP requests to query the EOPF STAC catalog:

```javascript
const stacUrl = new URL("https://api.explorer.eopf.copernicus.eu/stac/search");
stacUrl.searchParams.set("bbox", `${minLon},${minLat},${maxLon},${maxLat}`);
stacUrl.searchParams.set(
  "datetime",
  `${startDate}T00:00:00Z/${endDate}T23:59:59Z`
);
stacUrl.searchParams.set("collections", "sentinel-2-l2a");
stacUrl.searchParams.set("limit", "10");

const response = await fetch(stacUrl);
const searchResponse = await response.json();
```

### Loading Zarr Data

When a scene is selected, the code extracts the reflectance asset URL and creates a GeoZarr source:

```javascript
const reflectanceAsset = stacItem.assets?.reflectance;
const zarrUrl = reflectanceAsset.href;

const source = new GeoZarr({
  url: zarrUrl,
  bands: ["b04", "b03", "b02"], // RGB bands
});
```

### Key Libraries Used

- **Fetch API**: Direct HTTP requests to STAC catalog
- **OpenLayers**: Mapping and visualization
- **GeoZarr source**: Cloud-optimized Zarr data loading

## Code Examples

### Complete Vue Component Setup

```vue
<script setup>
import { ref, onMounted, nextTick } from "vue";
import Map from "ol/Map.js";
import TileLayer from "ol/layer/WebGLTile.js";
import VectorLayer from "ol/layer/Vector.js";
import GeoZarr from "ol/source/GeoZarr.js";
import VectorSource from "ol/source/Vector.js";
import OSM from "ol/source/OSM.js";
import { Draw } from "ol/interaction.js";

// Search STAC catalog
async function searchSTAC() {
  const [minLon, minLat, maxLon, maxLat] = selectedBbox.value;

  const stacUrl = new URL(
    "https://api.explorer.eopf.copernicus.eu/stac/search"
  );
  stacUrl.searchParams.set("bbox", `${minLon},${minLat},${maxLon},${maxLat}`);
  stacUrl.searchParams.set(
    "datetime",
    `${startDate.value}T00:00:00Z/${endDate.value}T23:59:59Z`
  );
  stacUrl.searchParams.set("collections", "sentinel-2-l2a");
  stacUrl.searchParams.set("limit", "10");

  const response = await fetch(stacUrl);
  const searchResponse = await response.json();
  // Process results...
}
</script>
```

### Error Handling

The example includes comprehensive error handling:

- STAC API connection issues
- Missing Zarr assets in STAC items
- WebGL compatibility checks
- Search parameter validation

## Next Steps

1. **Customize Collections**: Modify the search to include different satellite collections
2. **Advanced Filtering**: Add cloud cover percentage or other metadata filters
3. **Batch Loading**: Implement loading multiple scenes simultaneously
4. **Export Functionality**: Add options to export search results or images
5. **Performance Optimization**: Implement caching and progressive loading

This example provides a foundation for building sophisticated Earth observation applications that combine STAC metadata discovery with interactive visualization capabilities.
