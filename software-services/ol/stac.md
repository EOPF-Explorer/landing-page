---
title: OpenLayers - STAC Catalog Integration
layout: page
---


<script setup>
import { ref, onMounted, nextTick } from 'vue'
import Map from 'ol/Map.js'
import View from 'ol/View.js'
import VectorLayer from 'ol/layer/Vector.js'
import WebGLTileLayer from 'ol/layer/WebGLTile.js'
import TileLayer from 'ol/layer/Tile.js'
import GeoZarr from 'ol/source/GeoZarr.js'
import VectorSource from 'ol/source/Vector.js'
import XYZ from "ol/source/XYZ.js"
import { Draw } from 'ol/interaction.js'
import { createBox } from 'ol/interaction/Draw.js'
import Feature from 'ol/Feature.js'
import { Polygon } from 'ol/geom.js'
import { Style, Stroke, Fill } from 'ol/style.js'
import { transformExtent } from 'ol/proj.js'
import 'ol/ol.css'
import { checkWebGLSupport } from '../index'

/** @type {import('vue').Ref<boolean | null>} */
const webglSupport = ref(null)
const mapRef = ref()

/** @type {import('ol/Map').default | null} */
let map = null
/** @type {import('ol/interaction/Draw').default | null} */
let drawInteraction = null
/** @type {import('ol/layer/Vector').default<import('ol/source/Vector').default> | null} */
let boundingBoxLayer = null
/** @type {import('ol/layer/Vector').default<import('ol/source/Vector').default> | null} */
let footprintsLayer = null
/** @type {Array<import('ol/layer/Layer').default>} */
let currentDataLayers = []

// Search parameters
const startDate = ref('')
const endDate = ref('')
const isSearching = ref(false)
const searched = ref(false)
/** @type {import('vue').Ref<Array<any>>} */
const searchResults = ref([])
/** @type {import('vue').Ref<import('ol/extent').Extent | null>} */
const selectedBbox = ref(null)

onMounted(() => {
  initializeDates();
  webglSupport.value = checkWebGLSupport()

  if (webglSupport.value) {
    nextTick(() => {
      initializeMap()
    })
  }
})

function initializeDates() {
  const today = new Date()
  const priorDate = new Date()
  priorDate.setDate(today.getDate() - 7)

  endDate.value = today.toISOString().split('T')[0]
  startDate.value = priorDate.toISOString().split('T')[0]
}

function initializeMap() {
  if (mapRef.value) {
    try {
      const baseLayer = new TileLayer({
        source: new XYZ({
          url: "https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg"
        }),
      })

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
        layers: [baseLayer, boundingBoxLayer, footprintsLayer],
        target: mapRef.value,
        view: new View({
          center: [260000, 6250000], // Paris in Web Mercator
          zoom: 8
        })
      })

      drawInteraction = new Draw({
        source: bboxSource,
        type: 'Circle',
        geometryFunction: createBox()
      })

      map.addInteraction(drawInteraction)

      drawInteraction.on('drawend', function(event) {
        searched.value = false
        const allFeatures = bboxSource.getFeatures()
        if (allFeatures.length > 1) {
          for (let i = 0; i < allFeatures.length - 1; i++) {
            bboxSource.removeFeature(allFeatures[i])
          }
        }
        const extent = event.feature.getGeometry()?.getExtent()
        if(!extent) return
        const bbox = transformExtent(extent, 'EPSG:3857', 'EPSG:4326')
        selectedBbox.value = bbox
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
  searched.value = true
  searchResults.value = []

  try {
    footprintsLayer?.getSource()?.clear()
     clearDataLayers()

    const [minLon, minLat, maxLon, maxLat] = selectedBbox.value

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
      searchResults.value = []
      alert('STAC search temporarily unavailable. This is a demo showing the interface.')
    }

  } catch (error) {
    console.error('Search error:', error)
    //@ts-expect-error error is unknown
    alert('Search failed: ' + error.message)
  } finally {
    isSearching.value = false
  }
}

/**
 * @param {Array<any>} features
 */
function displayFootprints(features) {
  const footprintsSource = footprintsLayer?.getSource()
  if (!footprintsSource) return
  
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

  if (features.length && map) {
    const extent = footprintsSource.getExtent()
    if(extent){
      map.getView().fit(extent, { padding: [50, 50, 50, 50] })
    }
    
    features.forEach((stacItem, index) => {
      setTimeout(() => {
        loadScene(stacItem)
      }, index * 500)
    })
  }
}

/**
 * @param {any} stacItem
 */
async function loadScene(stacItem) {
  try {
    let zarrAsset = stacItem.assets?.reflectance
    let zarrUrl
    
    if (zarrAsset) {
      zarrUrl = zarrAsset.href
      console.log('Using reflectance asset:', zarrUrl)
    } else {
      // @ts-expect-error link is not typed
      const storeLink = stacItem.links?.find(link => link.rel === 'store')
      if (storeLink) {
        zarrUrl = storeLink.href
      } else {
        console.error('No suitable Zarr data found in STAC item:', stacItem)
        return
      }
    }

    console.log('Loading Zarr data from:', zarrUrl)

    let sourceConfig
    
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

    const dataLayer = new WebGLTileLayer({
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

    map?.addLayer(dataLayer)
    currentDataLayers.push(dataLayer)
    
    console.log('Added layer to map for scene:', stacItem.id)

  } catch (error) {
    console.error('Failed to load scene:', error)
  }
}

function clearDataLayers() {
  currentDataLayers.forEach(layer => {
    map?.removeLayer(layer)
  })
  currentDataLayers = []
}

function clearAll() {
  if (boundingBoxLayer) boundingBoxLayer.getSource()?.clear()
  selectedBbox.value = null
  
  footprintsLayer?.getSource()?.clear()
  
  searchResults.value = []
  
  clearDataLayers()
}

</script>
## OpenLayers - STAC Integration <img src="/assets/openlayers-logo.png" alt="OpenLayers Logo" style="height:100px; vertical-align:middle; margin-left:8px; float:right;" />

This example demonstrates how to integrate OpenLayers with EOPF's STAC (SpatioTemporal Asset Catalog) API to search and visualize Sentinel-2 data using spatial-temporal filters

<Tutorial demoHeight="600px">
 <template #description>
<article class="border" v-if="webglSupport === false">

::: warning  **:warning: WebGL Not Supported**
  Your browser doesn't support WebGL, which is required for this example.
:::

</article>

### Features

- **Spatial Search**: Draw bounding box on the map to define search area
- **Temporal Filtering**: Select date range for time-based search
- **STAC Integration**: Query EOPF's STAC catalog using STAC API
- **Scene Visualization**: Display footprints and load RGB imagery automatically

 </template>

  <template #controls>
   <div class="grid small-space">
     <div class="s12 m4">
       <div class="field label border">
         <input type="date" v-model="startDate" :max="endDate">
         <label>Start Date</label>
       </div>
     </div>
     <div class="s12 m4">
       <div class="field label border">
         <input type="date" v-model="endDate" :min="startDate" :max="new Date().toISOString().split('T')[0]">
         <label>End Date</label>
       </div>
     </div>
     <div class="s12 m4">
       <nav class="no-space">
         <button @click="searchSTAC" :disabled="isSearching || !selectedBbox" class="fill">
           <i v-if="isSearching" class="loader small"></i>
           <span v-else>Search</span>
         </button>
         <button @click="clearAll" class="border">
           Clear
         </button>
       </nav>
     </div>
     <div class="s12">
<div v-if="!selectedBbox" >
          
::: tip :bulb: TIP
**Draw a bounding box** on the map to define your search area
:::

</div>
 <article v-else class="border green small-padding">
   <div class="row no-space middle-align">
    <i>check</i>
   <div class="max">Area selected. Ready to search.</div>
  </div>
 </article>
</div>
</div>
  </template>

  <template #demo>
    <div style="position: relative; width: 100%; height: 100%;">
      <div ref="mapRef" style="width: 100%; height: 100%; min-height: 400px;"></div>
      <div v-if="searchResults.length > 0" class="absolute bottom left right margin surface container rounded elevation-2">
        <div class="padding">
          <h6 class="no-margin">Search Results ({{ searchResults.length }})</h6>
          <p class="small-text">Scene footprints are displayed in orange. Satellite imagery will load progressively.</p>
        </div>
      </div>
      <div v-else-if="searched && selectedBbox && searchResults.length === 0" class="absolute bottom left right margin surface container rounded elevation-2">
         <div class="padding">
          <p class="small-text">No results found for the selected area and time range. Try expanding your search criteria.</p>
        </div>
      </div>
    </div>
  </template>

  <template #code>

::: code-group

```html [HTML]
<div class="demo-container">
  <div class="controls-panel">
    <!-- Date controls -->
    <div class="field">
      <label>Start</label>
      <input type="date" id="startDate" />
    </div>
    <div class="field">
      <label>End</label>
      <input type="date" id="endDate" />
    </div>
    
    <!-- Search button -->
    <button id="searchBtn" onclick="searchSTAC()">
      Search STAC
    </button>
  </div>

  <div id="map" class="map-container"></div>
</div>
```

```javascript [Search Logic]
import Feature from 'ol/Feature.js';
import { Polygon } from 'ol/geom.js';

async function searchSTAC() {
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;
  const btn = document.getElementById('searchBtn');

  if (!selectedBbox || !startDate || !endDate) {
    alert('Please draw a bounding box and select dates');
    return;
  }

  try {
    btn.disabled = true;
    btn.innerText = 'Searching...';

    // Clear previous results
    footprintsLayer.getSource().clear();
    currentDataLayers.forEach(l => map.removeLayer(l));
    currentDataLayers = [];

    // Construct STAC Query
    const [minx, miny, maxx, maxy] = selectedBbox;
    const stacUrl = new URL('https://api.explorer.eopf.copernicus.eu/stac/search');
    stacUrl.searchParams.set('bbox', `${minx},${miny},${maxx},${maxy}`);
    stacUrl.searchParams.set('datetime', `${startDate}T00:00:00Z/${endDate}T23:59:59Z`);
    stacUrl.searchParams.set('collections', 'sentinel-2-l2a');
    stacUrl.searchParams.set('limit', '10');

    // Fetch Results
    const response = await fetch(stacUrl);
    const data = await response.json();
    
    if (data.features?.length > 0) {
      displayFootprints(data.features);
    } else {
      alert('No images found in this area/date range');
    }

  } catch (error) {
    console.error(error);
    alert('Search failed');
  } finally {
    btn.disabled = false;
    btn.innerText = 'Search STAC';
  }
}

function displayFootprints(features) {
  const source = footprintsLayer.getSource();
  
  features.forEach(item => {
    // Create footprint feature
    const feature = new Feature({
      geometry: new Polygon(item.geometry.coordinates)
        .transform('EPSG:4326', 'EPSG:3857')
    });
    source.addFeature(feature);

    // Trigger visual loading
    loadScene(item);
  });

  // Fit map to results
  map.getView().fit(source.getExtent(), { padding: [50,50,50,50] });
}
```

```javascript [Scene Loading]
import WebGLTileLayer from 'ol/layer/WebGLTile.js';
import GeoZarr from 'ol/source/GeoZarr.js';

async function loadScene(stacItem) {
  // 1. Find Zarr URL
  // Find reflectance asset or store link
  let zarrAsset = stacItem.assets?.reflectance
  let zarrUrl
  if (zarrAsset) {
    zarrUrl = zarrAsset.href
    } else {
      const storeLink = stacItem.links?.find(link => link.rel === 'store')
      if (storeLink) {
      zarrUrl = storeLink.href
      } else {
        console.error('No Zarr data found in STAC item:', stacItem)
        return
    }
  }
  // 2. Configure GeoZarr Source (RGB)
  const source = new GeoZarr({
    url: zarrLink.includes('/measurements/reflectance') 
      ? zarrLink.replace('/measurements/reflectance', '') 
      : zarrLink,
    group: 'measurements/reflectance',
    bands: ['b04', 'b03', 'b02'] // Red, Green, Blue
  });

  // 3. Create Layer with Styling
  const layer = new WebGLTileLayer({
    source,
    style: {
      gamma: 1.5,
      color: [
        'color',
        ['interpolate', ['linear'], ['band', 1], 0, 0, 0.5, 255], // Red
        ['interpolate', ['linear'], ['band', 2], 0, 0, 0.5, 255], // Green
        ['interpolate', ['linear'], ['band', 3], 0, 0, 0.5, 255], // Blue
        ['case', ['==', ['+', ['band', 1], ['band', 2], ['band', 3]], 0], 0, 1], // Mask nodata
      ],
    },
  });

  // 4. Add to Map
  map.addLayer(layer);
  currentDataLayers.push(layer);
}
```

```javascript [Map Setup]
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import XYZ from 'ol/source/XYZ.js';
import { Draw } from 'ol/interaction.js';
import { createBox } from 'ol/interaction/Draw.js';
import { transformExtent } from 'ol/proj.js';
import { Style, Stroke, Fill } from 'ol/style.js';

// Global Variables
let map;
let boundingBoxLayer;
let footprintsLayer;
let selectedBbox = null;
let currentDataLayers = [];

function initializeMap() {
  // 1. Base Map
  const baseLayer = new TileLayer({
    source: new XYZ({
      url: "https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg"
    }),
  });

  // 2. Interaction Layer (for drawing bbox)
  const bboxSource = new VectorSource();
  boundingBoxLayer = new VectorLayer({
    source: bboxSource,
    style: new Style({
      stroke: new Stroke({ color: '#3399CC', width: 2, lineDash: [10, 10] }),
      fill: new Fill({ color: 'rgba(51, 153, 204, 0.1)' })
    })
  });

  // 3. Results Layer (for footprints)
  const footprintsSource = new VectorSource();
  footprintsLayer = new VectorLayer({
    source: footprintsSource,
    style: new Style({
      stroke: new Stroke({ color: '#ff6b35', width: 2 }),
      fill: new Fill({ color: 'rgba(255, 107, 53, 0.1)' })
    })
  });

  // 4. Create Map
  map = new Map({
    target: 'map',
    layers: [baseLayer, boundingBoxLayer, footprintsLayer],
    view: new View({
      center: [260000, 6250000], // Paris
      zoom: 8
    })
  });

  // 5. Add Draw Interaction
  const drawInteraction = new Draw({
    source: bboxSource,
    type: 'Circle',
    geometryFunction: createBox()
  });

  map.addInteraction(drawInteraction);

  // Handle Bbox Selection
  drawInteraction.on('drawend', (event) => {
    // Clear previous boxes so only one remains
    bboxSource.clear();
    
    // Note: The new feature is added after this event, so we use the event feature
    const extent = event.feature.getGeometry().getExtent();
    selectedBbox = transformExtent(extent, 'EPSG:3857', 'EPSG:4326');
  });

  // Initialize Dates
  const today = new Date();
  const prior = new Date();
  prior.setDate(today.getDate() - 30);
  document.getElementById('endDate').value = today.toISOString().split('T')[0];
  document.getElementById('startDate').value = prior.toISOString().split('T')[0];
}

// Start Application
initializeMap();
```



```json [package.json]
{
  "dependencies": {
    "ol": "^10.8.0"
  }
}
```
:::

  </template>
</Tutorial>


<nav class="surface-variant large-padding center-align">
  <a href="./ndvi" class="button border">← Previous: NDVI Calculation</a>
  <span class="padding"><strong>3 of 3</strong> - STAC Integration</span>
  <a href="../ol" class="button border">Back to overview →</a>
</nav>


