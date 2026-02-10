---
title: 3D Globe
layout: page
---

<script setup>
import { onMounted, useTemplateRef, nextTick, ref } from "vue";
import Tutorial from '../../.vitepress/components/Tutorial.vue';
import "@eox/map";
import "@eox/map/dist/eox-map-globe.js";
import { LonLat, GlobusRgbTerrain } from "@openglobus/og";

/** @type {import('vue').Ref<import("@eox/map").EOxMap>} */
const mapRef = useTemplateRef("mapRef");
const isTouring = ref(false);
const status = ref("Click on a location to fly there");
const projection = ref("globe");

const cities = [
  { name: "Austrain Alps", coords: [12.41,47.04], alt: 20000 },
  { name: "Milano Cortina Winter Olympics", coords: [9.12,45.26], alt: 20000 },
  { name: "Norwegian Fjords", coords: [6.5, 61.0], alt: 20000 },
  { name: "Icelandic Highlands", coords: [-18.0, 64.5], alt: 20000 },
  { name: "Carpathian Mountains", coords: [25.0, 45.5], alt: 20000 }
];

const layers = [
  {
    type: "Tile",
    properties: { 
      id: "basemap",
      title: "OpenStreetMap" 
    },
    source: { 
      type: "OSM",
      crossOrigin: "anonymous",
    }
  },
  {
    type: "Tile",
    properties: {
      id: "mosaic",
      title: "Sentinel-2 Mosaic"
    },
    source: {
      type: "XYZ",
      url: 'https://api.explorer.eopf.copernicus.eu/openeo/services/xyz/456c1e23-47f2-4567-98cf-dcde378a05f7/tiles/{z}/{x}/{y}?time=["2026-01-22","2026-01-23"]',
      crossOrigin: "anonymous",
    }
  }
];

onMounted(() => {
  nextTick(() => {
    if (mapRef.value) {
      //@ts-expect-error
      mapRef.value.layers = layers;
      mapRef.value.center = [15, 48];
      mapRef.value.zoom = 4;
      
      nextTick(() => {
        if (mapRef.value.globe) {
          const globe = mapRef.value.globe;
          const terrain = new GlobusRgbTerrain(null, {heightFactor: 5})
          globe.planet.setTerrain(terrain);
        }
      });
    }
  });
});

/**
 * Flies the globe camera to a specific city location
 * @param {(typeof cities)[number]} city - The city object containing name, coordinates, and altitude
 * @returns {void}
 */
function flyToCity(city) {
  // Access the underlying OpenGlobus instance from eox-map
  const globe = mapRef.value?.globe;
  if (!globe || isTouring.value) return;
  
  isTouring.value = true;
  status.value = `Flying to ${city.name}...`;
  const planet = globe.planet;

  planet.flyLonLat(
    new LonLat(city.coords[0], city.coords[1], city.alt),
    new LonLat(city.coords[0], city.coords[1], 0), // Look at ground
    4000,
  )
  setTimeout(()=>{
    status.value = `Arrived at ${city.name}`;
    isTouring.value = false;
  },4000)
  
}

/**
 * Toggles the map projection between 3D globe and 2D Web Mercator
 * @returns {void}
 */
function toggleProjection() {
  projection.value = projection.value === "globe" ? "EPSG:3857" : "globe";
  if (mapRef.value) {
    mapRef.value.projection = projection.value;
  }
}
</script>

## 3D Globe Visualization

Switching from a 2D map to a 3D globe in **EOxElements** is as simple as changing the projection. By importing the globe extension, `eox-map` gains the ability to render OpenLayers layers on a 3D Earth using the **OpenGlobus** engine.

<Tutorial height="600px">
 <template #description>

#### Globe Integration

- **Seamless Switching**: Use the `projection` attribute to toggle modes.
- **Layer Sync**: OpenLayers tile layers are automatically projected onto the globe.
- **Zero Config**: No complex 3D engine initialization required.
 </template>

  <template #controls>
    <div class="grid small-space">
      <div class="s12">
        <button 
          @click="toggleProjection" 
          class="button border round small"
          style="margin-bottom: 1rem; width: 100%;"
        >
          <span>Switch to {{ projection === 'globe' ? '2D' : '3D' }}</span>
        </button>
        <h6 class="no-margin">3D Locations</h6>
        <p class="small-text">{{ status }}</p>
        <div class="row scroll">
          <button 
            v-for="city in cities"
            :key="city.name"
            @click="flyToCity(city)"
            :disabled="isTouring"
            class="chip fill surface-variant"
          >
            <span>{{ city.name }}</span>
          </button>
        </div>
      </div>
    </div>
  </template>

  <template #demo>
    <ClientOnly>
      <eox-map
        ref="mapRef"
        :projection="projection"
        style="width: 100%; height: 100%;"
      ></eox-map>
    </ClientOnly>
  </template>

  <template #code>

::: code-group

```html [index.html]
<!-- Set projection to 'globe' -->
<eox-map 
  projection="globe"
  style="width: 100%; height: 600px;"
></eox-map>
```

```javascript [config.js]
import "@eox/map/dist/eox-map-globe.js";
import { GlobusTerrain } from "@openglobus/og";

const map = document.querySelector("eox-map");

// Define standard OpenLayers layers
map.layers = [
  {
    type: "Tile",
    properties: { 
      id: "basemap",
      title: "OpenStreetMap" 
    },
    source: { 
      type: "OSM",
    }
  },
  {
    type: "Tile",
    properties: {
      id: "mosaic",
      title: "Sentinel-2 Mosaic"
    },
    source: {
      type: "XYZ",
      url: 'https://api.explorer.eopf.copernicus.eu/openeo/services/xyz/456c1e23-47f2-4567-98cf-dcde378a05f7/tiles/{z}/{x}/{y}?time=["2026-01-22","2026-01-23"]'
    }
  }
];

const terrain = new GlobusTerrain("terrain", {
   name: "Earth Terrain",
   url: "https://terrain.openglobus.org/public/eu10",
   maxZoom: 15
});
map.globe.planet.setTerrain(terrain);
```

:::

  </template>
</Tutorial>

### Key Concepts: Hybrid Architecture

The 3D visualization in **EOxElements** employs a powerful hybrid architecture combining **OpenLayers** and **OpenGlobus**:

1.  **Dual Engines**: The component maintains an OpenLayers map instance for layer state and logic, while using OpenGlobus for 3D rendering.
2.  **Adaptive Rendering**:
    *   **Native Rendering**: Where possible (e.g., standard XYZ, WMS), layers are rendered directly by OpenGlobus for maximum performance and quality.
    *   **Fallback Rendering**: Complex OpenLayers layers (like GeoZarr or VectorTile) that OpenGlobus doesn't support natively are rendered to a texture (canvas) by OpenLayers and then projected onto the 3D globe.


<nav class="surface-variant large-padding center-align">
  <a href="./advanced" class="button border">← Layer Config</a>
  <span class="padding"><strong>3 of 4</strong> - 3D Globe</span>
  <a href="./story" class="button border">Next: Storytelling →</a>
</nav>
