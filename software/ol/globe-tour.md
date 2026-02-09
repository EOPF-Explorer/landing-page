---
title: OpenLayers - 3D Globe Tour Mode (Experimental)
layout: page
---

<style scoped>
/* Import common CSS first to avoid FOUC */
@import url("../software.css");

.tour-controls {
  background: white;
  padding: 15px;
  margin: 15px 0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.control-group {
  margin-bottom: 15px;
}

.control-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.control-group input, .control-group select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.button-group {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.tour-script {
  font-family: monospace;
  background: #f5f5f5;
  padding: 10px;
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
}
</style>

<script setup>
import { ref, onMounted, nextTick, watch } from 'vue'
import Map from 'ol/Map.js'
import { getView, withExtentCenter, withHigherResolutions, withLowerResolutions, withZoom } from 'ol/View.js'
import TileLayer from 'ol/layer/WebGLTile.js'
import GeoZarr from 'ol/source/GeoZarr.js'
import OSM from 'ol/source/OSM.js'
import 'ol/ol.css'
import { checkWebGLSupport } from '../index'

// Cesium and olcs will be imported dynamically on client-side only
let OLCesium = null
let Cesium = null

const webglSupport = ref(null)
const mapRef = ref()
const is3DEnabled = ref(true)
let map = null
let ol3d = null
let tourInterval = null

// XYZ URL parameters
const openeoServiceId = ref('456c1e23-47f2-4567-98cf-dcde378a05f7')
const timeStart = ref('2026-01-22')
const timeEnd = ref('2026-01-23')
const cloudCover = ref('')
const additionalParams = ref('')

// Track current layer parameters to avoid unnecessary updates
let currentLayerParams = {
  serviceId: '456c1e23-47f2-4567-98cf-dcde378a05f7',
  timeStart: '2026-01-22',
  timeEnd: '2026-01-23',
  cloudCover: '',
  additionalParams: ''
}

// Camera controls
const longitude = ref(4.5)
const latitude = ref(43.5)
const altitude = ref(5000000)
const heading = ref(0)
const pitch = ref(-90)
const roll = ref(0)

// Tour controls
const isTourActive = ref(false)
const tourSpeed = ref(1000) // milliseconds per step
const tourScript = ref([
  { 
    lon: 4.5, lat: 43.5, alt: 5000000, heading: 0, pitch: -90, duration: 2,
    serviceId: '456c1e23-47f2-4567-98cf-dcde378a05f7',
    timeStart: '2026-01-22', timeEnd: '2026-01-23'
  },
  { 
    lon: 6.8, lat: 45.8, alt: 100000, heading: 45, pitch: -45, duration: 3,
    serviceId: '456c1e23-47f2-4567-98cf-dcde378a05f7',
    timeStart: '2026-01-23', timeEnd: '2026-01-24'
  },
  { 
    lon: 6.8, lat: 45.8, alt: 50000, heading: 135, pitch: -30, duration: 2,
    serviceId: '456c1e23-47f2-4567-98cf-dcde378a05f7',
    timeStart: '2026-01-23', timeEnd: '2026-01-24'
  },
  { 
    lon: 6.8, lat: 45.8, alt: 50000, heading: 225, pitch: -30, duration: 2,
    serviceId: '456c1e23-47f2-4567-98cf-dcde378a05f7',
    timeStart: '2026-01-23', timeEnd: '2026-01-24'
  },
  { 
    lon: 6.8, lat: 45.8, alt: 50000, heading: 315, pitch: -30, duration: 2,
    serviceId: '456c1e23-47f2-4567-98cf-dcde378a05f7',
    timeStart: '2026-01-23', timeEnd: '2026-01-24'
  },
  // Close orbit around Mont Blanc (6.8°E, 45.8°N) - camera circling while looking at summit
  { 
    lon: 6.95, lat: 45.8, alt: 12000, heading: 270, pitch: -15, duration: 0,
    serviceId: '456c1e23-47f2-4567-98cf-dcde378a05f7',
    timeStart: '2026-01-23', timeEnd: '2026-01-24'
  },
  { 
    lon: 6.91, lat: 45.91, alt: 10000, heading: 225, pitch: -20, duration: 0,
    serviceId: '456c1e23-47f2-4567-98cf-dcde378a05f7',
    timeStart: '2026-01-23', timeEnd: '2026-01-24'
  },
  { 
    lon: 6.8, lat: 45.95, alt: 12000, heading: 180, pitch: -15, duration: 0,
    serviceId: '456c1e23-47f2-4567-98cf-dcde378a05f7',
    timeStart: '2026-01-23', timeEnd: '2026-01-24'
  },
  { 
    lon: 6.69, lat: 45.91, alt: 10000, heading: 135, pitch: -20, duration: 0,
    serviceId: '456c1e23-47f2-4567-98cf-dcde378a05f7',
    timeStart: '2026-01-23', timeEnd: '2026-01-24'
  },
  { 
    lon: 6.65, lat: 45.8, alt: 12000, heading: 90, pitch: -15, duration: 0,
    serviceId: '456c1e23-47f2-4567-98cf-dcde378a05f7',
    timeStart: '2026-01-23', timeEnd: '2026-01-24'
  },
  { 
    lon: 6.69, lat: 45.69, alt: 10000, heading: 45, pitch: -20, duration: 0,
    serviceId: '456c1e23-47f2-4567-98cf-dcde378a05f7',
    timeStart: '2026-01-23', timeEnd: '2026-01-24'
  },
  { 
    lon: 6.8, lat: 45.65, alt: 12000, heading: 0, pitch: -15, duration: 0,
    serviceId: '456c1e23-47f2-4567-98cf-dcde378a05f7',
    timeStart: '2026-01-23', timeEnd: '2026-01-24'
  },
  { 
    lon: 6.91, lat: 45.69, alt: 10000, heading: 315, pitch: -20, duration: 0,
    serviceId: '456c1e23-47f2-4567-98cf-dcde378a05f7',
    timeStart: '2026-01-23', timeEnd: '2026-01-24'
  },
  { 
    lon: 2.3, lat: 48.9, alt: 1000000, heading: 0, pitch: -60, duration: 3,
    serviceId: '456c1e23-47f2-4567-98cf-dcde378a05f7',
    timeStart: '2026-01-22', timeEnd: '2026-01-23'
  },
  // 15. Lon: 12.1702, Lat: 46.5315, Alt: 3050m Camera: H=282.97°, P=-22.7°, Duration=3s Time: 2026-01-22 to 2026-01-23
  {
    lon: 12.1702, lat: 46.5315, alt: 3050, heading: 282.97, pitch: -22.7, duration: 3,
    serviceId: '456c1e23-47f2-4567-98cf-dcde378a05f7',
    timeStart: '2026-01-22', timeEnd: '2026-01-23'
  }
])
const currentTourStep = ref(0)

// Markers/Pinpoints
const markers = ref([])
const markerName = ref('')
const markerLon = ref(6.8)
const markerLat = ref(45.8)

// EOPF Zarr URL (root store only, no group path)
const zarrUrl = 'https://s3.explorer.eopf.copernicus.eu/esa-zarr-sentinel-explorer-fra/tests-output/sentinel-2-l2a-staging/S2A_MSIL2A_20251227T100441_N0511_R122_T33TVF_20251227T121715.zarr'

const openeoBaseUrl = 'https://api.explorer.eopf.copernicus.eu/openeo/services/xyz'

function buildXYZUrl() {
  const timeRange = encodeURIComponent(`["${timeStart.value}","${timeEnd.value}"]`)
  let url = `${openeoBaseUrl}/${openeoServiceId.value}/tiles/{z}/{x}/{y}?time=${timeRange}`
  
  if (cloudCover.value) {
    url += `&cloud_cover=${cloudCover.value}`
  }
  
  if (additionalParams.value) {
    url += `&${additionalParams.value}`
  }
  
  return url
}

function updateXYZLayer() {
  if (!ol3d || !is3DEnabled.value) return
  
  const scene = ol3d.getCesiumScene()
  const layers = scene.imageryLayers
  
  // Update current layer parameters
  currentLayerParams = {
    serviceId: openeoServiceId.value,
    timeStart: timeStart.value,
    timeEnd: timeEnd.value,
    cloudCover: cloudCover.value,
    additionalParams: additionalParams.value
  }
  
  // Remove old Sentinel layer (keep OSM base)
  if (layers.length > 1) {
    layers.remove(layers.get(1))
  }
  
  // Add new layer with updated URL
  const xyzUrl = buildXYZUrl()
  console.log('Updating XYZ layer:', xyzUrl)
  const xyzProvider = new Cesium.UrlTemplateImageryProvider({
    url: xyzUrl,
    maximumLevel: 18,
    credit: 'Sentinel Data © ESA/Copernicus via OpenEO'
  })
  layers.addImageryProvider(xyzProvider)
}

function setCameraPosition() {
  if (!ol3d || !is3DEnabled.value) return
  
  const scene = ol3d.getCesiumScene()
  const camera = scene.camera
  
  camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(
      longitude.value,
      latitude.value,
      altitude.value
    ),
    orientation: {
      heading: Cesium.Math.toRadians(heading.value),
      pitch: Cesium.Math.toRadians(pitch.value),
      roll: Cesium.Math.toRadians(roll.value)
    }
  })
  
  console.log('Camera set to:', { 
    lon: longitude.value, 
    lat: latitude.value, 
    alt: altitude.value,
    heading: heading.value,
    pitch: pitch.value,
    roll: roll.value
  })
}

function flyToCameraPosition() {
  if (!ol3d || !is3DEnabled.value) return
  
  const scene = ol3d.getCesiumScene()
  const camera = scene.camera
  
  camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(
      longitude.value,
      latitude.value,
      altitude.value
    ),
    orientation: {
      heading: Cesium.Math.toRadians(heading.value),
      pitch: Cesium.Math.toRadians(pitch.value),
      roll: Cesium.Math.toRadians(roll.value)
    },
    duration: 2
  })
}

function getCurrentCameraPosition() {
  if (!ol3d || !is3DEnabled.value) return
  
  const scene = ol3d.getCesiumScene()
  const camera = scene.camera
  const position = camera.positionCartographic
  
  longitude.value = parseFloat(Cesium.Math.toDegrees(position.longitude).toFixed(4))
  latitude.value = parseFloat(Cesium.Math.toDegrees(position.latitude).toFixed(4))
  altitude.value = parseFloat(position.height.toFixed(0))
  heading.value = parseFloat(Cesium.Math.toDegrees(camera.heading).toFixed(2))
  pitch.value = parseFloat(Cesium.Math.toDegrees(camera.pitch).toFixed(2))
  roll.value = parseFloat(Cesium.Math.toDegrees(camera.roll).toFixed(2))
}

function addCurrentPositionToTour() {
  tourScript.value.push({
    lon: longitude.value,
    lat: latitude.value,
    alt: altitude.value,
    heading: heading.value,
    pitch: pitch.value,
    duration: 3,
    serviceId: openeoServiceId.value,
    timeStart: timeStart.value,
    timeEnd: timeEnd.value,
    cloudCover: cloudCover.value,
    additionalParams: additionalParams.value
  })
}

function startTour() {
  if (isTourActive.value) {
    stopTour()
    return
  }
  
  if (!ol3d || !is3DEnabled.value) {
    alert('Please enable 3D mode first')
    return
  }
  
  isTourActive.value = true
  currentTourStep.value = 0
  executeTourStep()
}

function executeTourStep() {
  if (!isTourActive.value || currentTourStep.value >= tourScript.value.length) {
    stopTour()
    return
  }
  
  const step = tourScript.value[currentTourStep.value]
  const scene = ol3d.getCesiumScene()
  const camera = scene.camera
  
  console.log(`Tour step ${currentTourStep.value + 1}/${tourScript.value.length}:`, step)
  
  // Update XYZ layer only if parameters have changed
  if (step.serviceId) {
    const newParams = {
      serviceId: step.serviceId,
      timeStart: step.timeStart || timeStart.value,
      timeEnd: step.timeEnd || timeEnd.value,
      cloudCover: step.cloudCover || '',
      additionalParams: step.additionalParams || ''
    }
    
    // Check if any parameter has changed
    const paramsChanged = 
      newParams.serviceId !== currentLayerParams.serviceId ||
      newParams.timeStart !== currentLayerParams.timeStart ||
      newParams.timeEnd !== currentLayerParams.timeEnd ||
      newParams.cloudCover !== currentLayerParams.cloudCover ||
      newParams.additionalParams !== currentLayerParams.additionalParams
    
    if (paramsChanged) {
      openeoServiceId.value = newParams.serviceId
      timeStart.value = newParams.timeStart
      timeEnd.value = newParams.timeEnd
      cloudCover.value = newParams.cloudCover
      additionalParams.value = newParams.additionalParams
      updateXYZLayer()
    }
  }
  
  camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(step.lon, step.lat, step.alt),
    orientation: {
      heading: Cesium.Math.toRadians(step.heading || 0),
      pitch: Cesium.Math.toRadians(step.pitch || -90),
      roll: 0
    },
    duration: step.duration || 2,
    complete: () => {
      currentTourStep.value++
      if (isTourActive.value) {
        setTimeout(executeTourStep, tourSpeed.value)
      }
    }
  })
}

function stopTour() {
  isTourActive.value = false
  currentTourStep.value = 0
}

function clearTourScript() {
  tourScript.value = []
}

function addMarker() {
  if (!ol3d || !is3DEnabled.value) {
    alert('Please enable 3D mode first')
    return
  }
  
  if (!markerName.value.trim()) {
    alert('Please enter a name for the marker')
    return
  }
  
  const scene = ol3d.getCesiumScene()
  
  const entity = scene.entities.add({
    position: Cesium.Cartesian3.fromDegrees(markerLon.value, markerLat.value),
    point: {
      pixelSize: 10,
      color: Cesium.Color.RED,
      outlineColor: Cesium.Color.WHITE,
      outlineWidth: 2
    },
    label: {
      text: markerName.value,
      font: '14px sans-serif',
      fillColor: Cesium.Color.WHITE,
      outlineColor: Cesium.Color.BLACK,
      outlineWidth: 2,
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      pixelOffset: new Cesium.Cartesian2(0, -15),
      disableDepthTestDistance: Number.POSITIVE_INFINITY
    }
  })
  
  markers.value.push({
    id: entity.id,
    name: markerName.value,
    lon: markerLon.value,
    lat: markerLat.value,
    entity: entity
  })
  
  console.log('Marker added:', markerName.value, markerLon.value, markerLat.value)
  markerName.value = ''
}

function removeMarker(index) {
  if (!ol3d || !is3DEnabled.value) return
  
  const marker = markers.value[index]
  const scene = ol3d.getCesiumScene()
  scene.entities.removeById(marker.id)
  markers.value.splice(index, 1)
}

function clearMarkers() {
  if (!ol3d || !is3DEnabled.value) return
  
  const scene = ol3d.getCesiumScene()
  markers.value.forEach(marker => {
    scene.entities.removeById(marker.id)
  })
  markers.value = []
}

function addMarkerAtCurrentPosition() {
  if (!ol3d || !is3DEnabled.value) return
  
  getCurrentCameraPosition()
  markerLon.value = longitude.value
  markerLat.value = latitude.value
}

function flyToMarker(marker) {
  if (!ol3d || !is3DEnabled.value) return
  
  const scene = ol3d.getCesiumScene()
  const camera = scene.camera
  
  camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(marker.lon, marker.lat, 50000),
    orientation: {
      heading: 0,
      pitch: Cesium.Math.toRadians(-45),
      roll: 0
    },
    duration: 2
  })
}

onMounted(() => {
  webglSupport.value = checkWebGLSupport()

  if (webglSupport.value) {
    nextTick(() => {
      initializeMap()
    })
  }
})

async function initializeMap() {
  if (mapRef.value) {
    try {
      // Dynamically import Cesium and olcs only on client-side
      if (!Cesium) {
        Cesium = await import('cesium')
        await import('cesium/Build/Cesium/Widgets/widgets.css')
        window.CESIUM_BASE_URL = '/node_modules/cesium/Build/Cesium/'
        window.Cesium = Cesium
      }
      if (!OLCesium) {
        const olcsModule = await import('olcs')
        OLCesium = olcsModule.default
      }
      
      const source = new GeoZarr({
        url: zarrUrl,
        group: 'measurements/reflectance',
        bands: ['b04', 'b03', 'b02'],
      })

      map = new Map({
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          new TileLayer({
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
          }),
        ],
        target: mapRef.value,
        view: getView(
          source,
          withLowerResolutions(1),
          withHigherResolutions(2),
          withExtentCenter(),
          withZoom(2),
        ),
      })

      ol3d = new OLCesium({ map })
      
      const scene = ol3d.getCesiumScene()
      scene.globe.enableLighting = false
      scene.globe.showGroundAtmosphere = true
      
      // Add base imagery to Cesium BEFORE enabling 3D
      scene.imageryLayers.removeAll()
      scene.imageryLayers.addImageryProvider(
        new Cesium.OpenStreetMapImageryProvider({
          url: 'https://tile.openstreetmap.org/'
        })
      )
      
      // Add OpenEO XYZ service layer
      const xyzUrl = buildXYZUrl()
      const xyzProvider = new Cesium.UrlTemplateImageryProvider({
        url: xyzUrl,
        maximumLevel: 18,
        credit: 'Sentinel Data © ESA/Copernicus via OpenEO'
      })
      scene.imageryLayers.addImageryProvider(xyzProvider)
      
      // Use setTimeout to enable 3D and set camera after a brief delay
      setTimeout(() => {
        ol3d.setEnabled(true)
        
        // Set initial camera position
        const camera = scene.camera
        camera.setView({
          destination: Cesium.Cartesian3.fromDegrees(4.5, 43.5, 5000000),
          orientation: {
            heading: 0,
            pitch: Cesium.Math.toRadians(-90),
            roll: 0
          }
        })
        
        // Add terrain after 3D is enabled
        Cesium.createWorldTerrainAsync({
          requestWaterMask: true,
          requestVertexNormals: true
        }).then(terrainProvider => {
          scene.terrainProvider = terrainProvider
        }).catch(error => {
          console.warn('Could not load terrain:', error)
        })
      }, 500)

    } catch (error) {
      console.error('Failed to initialize map:', error)
    }
  }
}

</script>

## 3D Globe Tour Mode - Experimental <img src="/assets/openlayers-logo.png" alt="OpenLayers Logo" style="height:100px; vertical-align:middle; margin-left:8px; float:right;" />

This experimental page demonstrates advanced camera control and automated tours on the 3D globe, plus dynamic XYZ layer parameter control.

<div v-if="webglSupport === false" class="warning">
⚠️ **WebGL Not Supported**: Your browser doesn't support WebGL, which is required for 3D globe visualization.
</div>

### Live Demo

<div v-if="webglSupport" style="display: grid; grid-template-columns: 1fr 400px; gap: 20px;">
  <div ref="mapRef" class="map-container" style="height: 600px;"></div>
  
  <div class="tour-controls" style="height: 600px; overflow-y: auto;">
  
  <h3 style="margin-top: 0;">XYZ Layer Parameters</h3>
  
  <div class="control-group">
    <label>Service ID</label>
    <input v-model="openeoServiceId" type="text" />
  </div>
  
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
    <div class="control-group">
      <label>Time Start</label>
      <input v-model="timeStart" type="date" />
    </div>
    
    <div class="control-group">
      <label>Time End</label>
      <input v-model="timeEnd" type="date" />
    </div>
  </div>
  
  <div class="control-group">
    <label>Cloud Cover (0-100, optional)</label>
    <input v-model="cloudCover" type="number" min="0" max="100" placeholder="Leave empty for no filter" />
  </div>
  
  <div class="control-group">
    <label>Additional Parameters (e.g., param1=value1&param2=value2)</label>
    <input v-model="additionalParams" type="text" placeholder="custom=value" />
  </div>
  
  <button @click="updateXYZLayer" class="button">🔄 Update Layer</button>
  
  <hr style="margin: 20px 0;">
  
  <h3>Camera Position Control</h3>
  
  <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px;">
    <div class="control-group">
      <label>Longitude</label>
      <input v-model.number="longitude" type="number" step="0.1" />
    </div>
    
    <div class="control-group">
      <label>Latitude</label>
      <input v-model.number="latitude" type="number" step="0.1" />
    </div>
    
    <div class="control-group">
      <label>Altitude (m)</label>
      <input v-model.number="altitude" type="number" step="1000" />
    </div>
  </div>
  
  <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px;">
    <div class="control-group">
      <label>Heading (°)</label>
      <input v-model.number="heading" type="number" step="1" min="-180" max="180" />
    </div>
    
    <div class="control-group">
      <label>Pitch (°)</label>
      <input v-model.number="pitch" type="number" step="1" min="-90" max="0" />
    </div>
    
    <div class="control-group">
      <label>Roll (°)</label>
      <input v-model.number="roll" type="number" step="1" min="-180" max="180" />
    </div>
  </div>
  
  <div class="button-group">
    <button @click="setCameraPosition" class="button">📍 Set Position (Instant)</button>
    <button @click="flyToCameraPosition" class="button">✈️ Fly To Position</button>
    <button @click="getCurrentCameraPosition" class="button">📸 Get Current Position</button>
  </div>
  
  <hr style="margin: 20px 0;">
  
  <h3>Markers / Pinpoints</h3>
  
  <div class="control-group">
    <label>Marker Name</label>
    <input v-model="markerName" type="text" placeholder="e.g., Mont Blanc" />
  </div>
  
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
    <div class="control-group">
      <label>Longitude</label>
      <input v-model.number="markerLon" type="number" step="0.0001" />
    </div>
    
    <div class="control-group">
      <label>Latitude</label>
      <input v-model.number="markerLat" type="number" step="0.0001" />
    </div>
  </div>
  
  <div class="button-group">
    <button @click="addMarker" class="button">📍 Add Marker</button>
    <button @click="addMarkerAtCurrentPosition" class="button">📍 Use Current Pos</button>
    <button @click="clearMarkers" class="button">🗑️ Clear All</button>
  </div>
  
  <div v-if="markers.length > 0" class="control-group">
    <label>Active Markers ({{ markers.length }})</label>
    <div class="tour-script">
      <div v-for="(marker, idx) in markers" :key="marker.id" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; padding-bottom: 8px; border-bottom: 1px solid #ddd;">
        <div style="flex: 1; cursor: pointer;" @click="flyToMarker(marker)">
          <strong>{{ marker.name }}</strong><br>
          <span style="font-size: 0.85em; color: #666;">{{ marker.lon.toFixed(4) }}°, {{ marker.lat.toFixed(4) }}°</span>
        </div>
        <button @click="removeMarker(idx)" class="button" style="padding: 4px 8px; font-size: 0.9em;">❌</button>
      </div>
    </div>
  </div>
  
  <hr style="margin: 20px 0;">
  
  <h3>Tour Mode</h3>
  
  <div class="control-group">
    <label>Tour Speed (ms between steps)</label>
    <input v-model.number="tourSpeed" type="number" step="100" min="0" />
  </div>
  
  <div class="button-group">
    <button @click="startTour" class="button" :class="{ 'active': isTourActive }">
      {{ isTourActive ? '⏹️ Stop Tour' : '▶️ Start Tour' }}
    </button>
    <button @click="addCurrentPositionToTour" class="button">➕ Add Current to Tour</button>
    <button @click="clearTourScript" class="button">🗑️ Clear Tour</button>
  </div>
  
  <div class="control-group">
    <label>Tour Script ({{ tourScript.length }} steps)</label>
    <div class="tour-script">
      <div v-for="(step, idx) in tourScript" :key="idx" :style="{ fontWeight: currentTourStep === idx && isTourActive ? 'bold' : 'normal', marginBottom: '8px', paddingBottom: '8px', borderBottom: idx < tourScript.length - 1 ? '1px solid #ddd' : 'none' }">
        <div><strong>{{ idx + 1 }}.</strong> Lon: {{ step.lon }}, Lat: {{ step.lat }}, Alt: {{ step.alt }}m</div>
        <div style="font-size: 0.9em; color: #666;">Camera: H={{ step.heading }}°, P={{ step.pitch }}°, Duration={{ step.duration }}s</div>
        <div v-if="step.serviceId" style="font-size: 0.85em; color: #888;">Time: {{ step.timeStart }} to {{ step.timeEnd }}</div>
      </div>
    </div>
  </div>
  
</div>

</div>

### Features

**XYZ Layer Control:**
- Modify time range for temporal data
- Add cloud cover filtering
- Include custom parameters in tile requests
- Real-time layer updates without page reload

**Camera Control:**
- **Position**: Set longitude, latitude, and altitude
- **Orientation**: Control heading (rotation), pitch (tilt), and roll
- **Instant or Animated**: Jump to position or fly smoothly
- **Capture Current**: Get current camera state for tour planning

**Tour Mode:**
- Create scripted camera paths
- Circular orbits around points of interest (e.g., mountains)
- Automated flyovers of multiple locations
- Configurable speed and duration per step
- Add positions interactively while exploring

### Example Tour Scripts

**Orbit Mont Blanc:**
```javascript
// Circle around Mont Blanc at 6.8°E, 45.8°N
const orbitSteps = []
for (let angle = 0; angle < 360; angle += 45) {
  orbitSteps.push({
    lon: 6.8,
    lat: 45.8,
    alt: 50000,
    heading: angle,
    pitch: -30,
    duration: 2,
    serviceId: '456c1e23-47f2-4567-98cf-dcde378a05f7',
    timeStart: '2026-01-22',
    timeEnd: '2026-01-23'
  })
}
```

**Temporal Tour (changing time for each location):**
```javascript
const temporalTour = [
  {
    lon: 2.3, lat: 48.9, alt: 500000,
    heading: 0, pitch: -60, duration: 3,
    timeStart: '2026-01-01', timeEnd: '2026-01-02'
  },
  {
    lon: 2.3, lat: 48.9, alt: 500000,
    heading: 0, pitch: -60, duration: 3,
    timeStart: '2026-01-15', timeEnd: '2026-01-16'
  },
  {
    lon: 2.3, lat: 48.9, alt: 500000,
    heading: 0, pitch: -60, duration: 3,
    timeStart: '2026-02-01', timeEnd: '2026-02-02'
  }
]
```

**European Capital Tour:**
```javascript
const capitals = [
  { name: 'Paris', lon: 2.3, lat: 48.9 },
  { name: 'Berlin', lon: 13.4, lat: 52.5 },
  { name: 'Rome', lon: 12.5, lat: 41.9 },
  { name: 'Madrid', lon: -3.7, lat: 40.4 }
]

const tour = capitals.map(city => ({
  lon: city.lon,
  lat: city.lat,
  alt: 500000,
  heading: 0,
  pitch: -60,
  duration: 3,
  serviceId: '456c1e23-47f2-4567-98cf-dcde378a05f7',
  timeStart: '2026-01-22',
  timeEnd: '2026-01-23'
}))
```

### Tips

- **Heading**: 0° = North, 90° = East, 180° = South, 270° = West
- **Pitch**: -90° = straight down, -45° = oblique, 0° = horizon
- **Altitude**: Typical ranges: 50km for detailed view, 500km for regional, 5000km for continental
- Use "Get Current Position" while exploring to capture interesting viewpoints
- Adjust tour speed to match your presentation pace

<div class="navigation">
  <a href="./globe" class="button border">← Back to Basic Globe</a>
  <span><strong>Experimental</strong> - Tour Mode</span>
  <div></div>
</div>
