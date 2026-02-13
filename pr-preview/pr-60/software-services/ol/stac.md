---
url: /pr-preview/pr-60/software-services/ol/stac.md
---

## OpenLayers - STAC Integration&#x20;

This example demonstrates how to integrate OpenLayers with EOPF's STAC (SpatioTemporal Asset Catalog) API to search and visualize Sentinel-2 data using spatial-temporal filters

::: warning  **:warning: WebGL Not Supported**
Your browser doesn't support WebGL, which is required for this example.
:::

### Features

* **Spatial Search**: Draw bounding box on the map to define search area
* **Temporal Filtering**: Select date range for time-based search
* **STAC Integration**: Query EOPF's STAC catalog using STAC API
* **Scene Visualization**: Display footprints and load RGB imagery automatically

\<template #controls>

::: tip :bulb: TIP
**Draw a bounding box** on the map to define your search area
:::

\<template #demo>




Search Results ({{ searchResults.length }})
Scene footprints are displayed in orange. Satellite imagery will load progressively.




No results found for the selected area and time range. Try expanding your search criteria.





\<template #code>

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
