---
title: STAC Demo
layout: page
---

<style scoped>
@import url("../software.css");

body {
  margin: 0;
  padding: 0;
}

.demo-container {
  width: 100%;
  min-height: 100vh;
  padding: 0;
  margin: 0;
}

.controls-panel {
  background: #f6f8fa;
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
}

.compact-controls {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap;
}

.control-group.compact {
  flex: 0 0 auto;
  min-width: 180px;
}

.control-group label {
  font-size: 14px;
  font-weight: 500;
  color: #24292e;
  margin-bottom: 4px;
  display: block;
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

.date-display {
  font-size: 12px;
  color: #586069;
  margin-top: 4px;
  font-style: italic;
}

.button-group.compact {
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-top: 18px;
}

.button {
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  background: #2563eb;
  color: white;
  border: none;
}

.button:hover:not(:disabled) {
  background: #1d4ed8;
}

.button:disabled {
  background: #93c5fd;
  cursor: not-allowed;
}

.button.border {
  background: white;
  color: #24292e;
  border: 1px solid #d1d5da;
}

.button.border:hover {
  background: #f6f8fa;
}

.map-container {
  width: 100%;
  height: 500px;
  border-radius: 8px;
  border: 1px solid #e1e4e8;
  background: #f6f8fa;
  position: relative;
  overflow: hidden;
}

.warning {
  padding: 12px 16px;
  background: #fff8e1;
  border: 1px solid #ffd54f;
  border-radius: 8px;
  color: #856404;
  font-size: 14px;
  margin-bottom: 16px;
}

.results-panel {
  margin-top: 16px;
  padding: 16px;
  background: #f0f8ff;
  border: 1px solid #b3d7ff;
  border-radius: 8px;
  color: #0066cc;
  font-size: 14px;
}

.results-panel h3 {
  margin: 0 0 8px 0;
  font-size: 16px;
  color: #24292e;
}

.results-panel p {
  margin: 0;
}

.loading-info {
  margin-top: 12px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  font-size: 13px;
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #24292e;
  z-index: 10;
}

.no-results {
  background: #fff3cd;
  border-color: #ffc107;
  color: #856404;
}
</style>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import Map from 'ol/Map.js'
import View from 'ol/View.js'
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
import 'ol/ol.css'
import { checkWebGLSupport } from '../../software-services/index'

const webglSupport = ref(null)
const mapRef = ref()
let map = null
let drawInteraction = null
let boundingBoxLayer = null
let footprintsLayer = null
let currentDataLayers = []

const startDate = ref('')
const endDate = ref('')
const maxDate = ref('')
const isSearching = ref(false)
const searchResults = ref([])
const selectedBbox = ref(null)
const loadingScenes = ref([])
const loadedScenes = ref([])

onMounted(() => {
  // Hide header/footer/nav elements for iframe embedding
  const style = document.createElement('style')
  style.id = 'stac-demo-hide-chrome'
  style.textContent = `
    header,
    footer,
    nav.top-nav,
    .VPNav,
    .VPSidebar,
    .VPNavBar,
    .top-nav,
    [class*="cookie"],
    [class*="Cookie"] {
      display: none !important;
    }
    body {
      margin: 0 !important;
      padding: 0 !important;
    }
    .VPContent,
    .vp-doc,
    main {
      padding-top: 0 !important;
      margin-top: 0 !important;
      max-width: 100% !important;
    }
  `
  document.head.appendChild(style)

  // Initialize dates and map
  initializeDates()
  webglSupport.value = checkWebGLSupport()

  if (webglSupport.value) {
    nextTick(() => {
      initializeMap()
    })
  }
})

// Restore elements when leaving page
onUnmounted(() => {
  const style = document.getElementById('stac-demo-hide-chrome')
  if (style) {
    style.remove()
  }
})

function initializeDates() {
  const today = new Date()
  const priorDate = new Date()
  priorDate.setDate(today.getDate() - 15)

  maxDate.value = today.toISOString().split('T')[0]
  endDate.value = today.toISOString().split('T')[0]
  startDate.value = priorDate.toISOString().split('T')[0]
}

function initializeMap() {
  if (mapRef.value) {
    try {
      const osmLayer = new TileLayer({
        source: new OSM(),
      })

      const bboxSource = new VectorSource()
      boundingBoxLayer = new VectorLayer({
        source: bboxSource,
        style: new Style({
          stroke: new Stroke({
            color: '#2563eb',
            width: 2,
          }),
          fill: new Fill({
            color: 'rgba(37, 99, 235, 0.1)',
          }),
        }),
      })

      const footprintsSource = new VectorSource()
      footprintsLayer = new VectorLayer({
        source: footprintsSource,
        style: new Style({
          stroke: new Stroke({
            color: '#f97316',
            width: 2,
          }),
          fill: new Fill({
            color: 'rgba(249, 115, 22, 0.15)',
          }),
        }),
      })

      map = new Map({
        layers: [osmLayer, boundingBoxLayer, footprintsLayer],
        target: mapRef.value,
        view: new View({
          center: [260000, 6250000], // Paris area in Web Mercator
          zoom: 8,
        }),
      })

      drawInteraction = new Draw({
        source: bboxSource,
        type: 'Circle',
        geometryFunction: createBox(),
      })

      map.addInteraction(drawInteraction)

      drawInteraction.on('drawstart', () => {
        // Clear previous bbox, footprints, and data layers
        bboxSource.clear()
        footprintsSource.clear()
        clearDataLayers()
        searchResults.value = []
        loadingScenes.value = []
        loadedScenes.value = []
      })

      drawInteraction.on('drawend', (event) => {
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
  loadingScenes.value = []
  loadedScenes.value = []

  try {
    const [minLon, minLat, maxLon, maxLat] = selectedBbox.value

    const stacUrl = new URL('https://api.explorer.eopf.copernicus.eu/stac/search')
    stacUrl.searchParams.set('bbox', `${minLon},${minLat},${maxLon},${maxLat}`)
    stacUrl.searchParams.set('datetime', `${startDate.value}T00:00:00Z/${endDate.value}T23:59:59Z`)
    stacUrl.searchParams.set('collections', 'sentinel-2-l2a')
    stacUrl.searchParams.set('limit', '8')
    
    console.log('Fetching from:', stacUrl.toString())
    
    const response = await fetch(stacUrl)
    if (!response.ok) {
      throw new Error(`STAC API error: ${response.status}`)
    }
    
    const data = await response.json()
    
    if (data.features && data.features.length > 0) {
      searchResults.value = data.features
      displayFootprints(data.features)
    } else {
      searchResults.value = []
    }
  } catch (error) {
    console.error('Search error:', error)
    searchResults.value = []
  } finally {
    isSearching.value = false
  }
}

function displayFootprints(features) {
  const footprintsSource = footprintsLayer.getSource()
  footprintsSource.clear()
  
  features.forEach((stacItem) => {
    if (stacItem.geometry) {
      const feature = new Feature({
        geometry: new Polygon(stacItem.geometry.coordinates).transform('EPSG:4326', 'EPSG:3857')
      })
      
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
    
    // Auto-load all scenes with a slight delay between each
    console.log('Auto-loading all scenes...')
    features.forEach((stacItem, index) => {
      setTimeout(() => {
        loadScene(stacItem)
      }, index * 500)
    })
  }
}

async function loadScene(stacItem) {
  console.log('Loading scene:', stacItem.id)
  
  // Track loading state
  loadingScenes.value.push(stacItem.id)
  
  try {
    // Find Zarr URL from STAC item
    const zarrAsset = stacItem.assets?.reflectance
    let zarrUrl = null
    let sourceConfig
    
    if (zarrAsset) {
      zarrUrl = zarrAsset.href
      console.log('Using reflectance asset:', zarrUrl)
    } else {
      const storeLink = stacItem.links?.find(link => link.rel === 'store')
      if (storeLink) {
        zarrUrl = storeLink.href
        console.log('Using store link:', zarrUrl)
      }
    }

    if (!zarrUrl) {
      console.warn('No Zarr URL found in STAC item:', stacItem.id)
      loadingScenes.value = loadingScenes.value.filter(id => id !== stacItem.id)
      return
    }

    console.log('Loading Zarr data from:', zarrUrl)

    // Configure source based on URL type
    if (zarrAsset && zarrUrl.includes('/measurements/reflectance')) {
      const baseUrl = zarrUrl.replace('/measurements/reflectance', '')
      sourceConfig = {
        url: baseUrl,
        group: 'measurements/reflectance',
        bands: ['b04', 'b03', 'b02']
      }
    } else {
      sourceConfig = {
        url: zarrUrl,
        group: 'measurements/reflectance',
        bands: ['b04', 'b03', 'b02']
      }
    }
    
    console.log('Creating GeoZarr source with config:', sourceConfig)
    
    const source = new GeoZarr(sourceConfig)

    // Create WebGL tile layer with styling
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

    map.addLayer(dataLayer)
    currentDataLayers.push(dataLayer)
    
    console.log('GeoZarr layer added to map for scene:', stacItem.id)
    
    // Mark scene as loaded
    loadedScenes.value.push(stacItem.id)

  } catch (error) {
    console.error('Failed to load scene:', error)
  } finally {
    loadingScenes.value = loadingScenes.value.filter(id => id !== stacItem.id)
  }
}

function clearDataLayers() {
  currentDataLayers.forEach(layer => {
    map.removeLayer(layer)
  })
  currentDataLayers = []
}

function clearAll() {
  boundingBoxLayer.getSource().clear()
  selectedBbox.value = null
  footprintsLayer.getSource().clear()
  searchResults.value = []
  loadingScenes.value = []
  loadedScenes.value = []
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

<div v-if="webglSupport === false" class="warning">
  <strong>⚠️ WebGL Not Supported:</strong> Your browser doesn't support WebGL, which is required for this demo.
</div>

<div class="demo-container" v-else>
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
          <div class="date-display">{{ startDate ? formatDate(startDate + 'T00:00:00Z') : 'Not selected' }}</div>
          <span class="date-icon">📅</span>
        </div>
      </div>
      <div class="control-group compact">
        <label for="end-date">End Date:</label>
        <div class="date-input-container">
          <input 
            id="end-date" 
            type="date" 
            v-model="endDate"
            :min="startDate"
            :max="maxDate"
            title="Select end date for search"
          />
          <div class="date-display">{{ endDate ? formatDate(endDate + 'T00:00:00Z') : 'Not selected' }}</div>
          <span class="date-icon">📅</span>
        </div>
      </div>
      <div class="button-group compact">
        <button 
          @click="searchSTAC" 
          :disabled="isSearching || !selectedBbox"
          class="button"
        >
          {{ isSearching ? 'Searching...' : '🔍 Search' }}
        </button>
        <button 
          @click="clearAll"
          class="button border"
        >
          Clear
        </button>
      </div>
    </div>
    <div v-if="!selectedBbox" class="warning">
      <strong>Draw a bounding box:</strong> Click and drag on the map to define your search area.
    </div>
  </div>

  <div ref="mapRef" class="map-container"></div>

  <div v-if="searchResults.length > 0" class="results-panel">
    <h3>🛰️ Found {{ searchResults.length }} Sentinel-2 scenes</h3>
    <p>Loading satellite imagery automatically...</p>
    <div v-if="loadingScenes.length > 0" class="loading-info">
      ⏳ Loading {{ loadingScenes.length }} scene(s)...
    </div>
    <div v-if="loadedScenes.length > 0" class="loading-info" style="color: #28a745;">
      ✅ {{ loadedScenes.length }} of {{ searchResults.length }} scenes loaded
    </div>
  </div>

  <div v-else-if="!isSearching && selectedBbox" class="results-panel no-results">
    No results found for the selected area and time range. Try expanding your search criteria.
  </div>
</div>
