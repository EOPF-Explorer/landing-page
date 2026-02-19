---
title: EOxElements Basic Tutorial
layout: page
---

<script setup>
import { useTemplateRef, onMounted, nextTick } from "vue"

const zarrUrl = 'https://s3.explorer.eopf.copernicus.eu/esa-zarr-sentinel-explorer-fra/tests-output/sentinel-2-l2a/S2B_MSIL2A_20260120T125339_N0511_R138_T27VWL_20260120T131151.zarr';

const layers = [
  {
    type: "Group",
    properties: {
      id: "base",
      title: "Base Layers",
    },
    layers: [
     {
    type: "Group",
    properties: { id: "base", title: "Base Layers" },
    layers: [
      {
        type: "Tile",
        properties: { id: "osm", title: "OpenStreetMap" },
        source: {
          type: "XYZ",
          url: "https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",
        },
      },
    ],
  },
    ],
  },
  {
    type: "Group",
    properties: {
      id: "data",
      title: "Data",
      layerControlExpand: true,
    },
    layers: [
      {
        type: "WebGLTile",
        properties: {
          id: "geozarr",
          title: "Sentinel-2 GeoZarr",
        },
        source: {
          type: "GeoZarr",
          url: zarrUrl,
          group: "measurements/reflectance",
          bands: ["b04", "b03", "b02"],
        },
        style: {
          gamma: 1.5,
          color: [
            "color",
            ["interpolate", ["linear"], ["band", 1], 0, 0, 0.5, 255],
            ["interpolate", ["linear"], ["band", 2], 0, 0, 0.5, 255],
            ["interpolate", ["linear"], ["band", 3], 0, 0, 0.5, 255],
            [
              "case",
              ["==", ["+", ["band", 1], ["band", 2], ["band", 3]], 0],
              0,
              1,
            ],
          ],
        },
      },
    ],
  },
];

const center = [-20.12, 63.54]; 
const zoom = 10;
/** @type {import('vue').Ref<import("@eox/map").EOxMap>} */
const eoxMap = useTemplateRef("eoxMap")
/** @type {import('vue').Ref<import("@eox/layercontrol").EOxLayerControl>} */
const eoxLayercontrol = useTemplateRef("eoxLayercontrol")

onMounted(() => {
  nextTick(() => {
    //@ts-expect-error
    eoxMap.value.layers = layers
    eoxMap.value.zoom = zoom
    eoxMap.value.center = center
    eoxLayercontrol.value.for = "eox-map#map-basic"
  })
})
</script>

## EOxElements - Basic Map Setup 

This tutorial demonstrates how to render a Sentinel-2 GeoZarr product using `eox-map` with `eox-layercontrol`, positioned with `eox-layout`.

<Tutorial>
 <template #description>

This setup includes:

  - **eox-layout**: A responsive 12×12 grid that positions the map and controls.
  - **eox-map**: The core component rendering the map using OpenLayers engine.
  - **eox-layercontrol**: Linked to the map via `for="eox-map#id"` to manage layers.
  - **GeoZarr Source**: Direct loading of Zarr data chunks.

 </template>

  <template #demo>
    <ClientOnly>
    <eox-layout gap="8" style="height: 500px;" class="fill">
      <eox-layout-item x="0" y="0" w="3" h="12">
        <eox-layercontrol
          ref="eoxLayercontrol"
          class="fill small-padding"
        ></eox-layercontrol>
      </eox-layout-item>
      <eox-layout-item x="3" y="0" w="9" h="12">
        <eox-map
          id="map-basic"
          ref="eoxMap"
          class="fill"
          projection="EPSG:3857"
        ></eox-map>
      </eox-layout-item>
    </eox-layout>
    </ClientOnly>
  </template>

  <template #code>
    
::: code-group

```html [index.html]
<!-- Optional: Import components using a CDN -->
<script type="module" src="https://unpkg.com/@eox/map"></script>
<script type="module" src="https://unpkg.com/@eox/layercontrol"></script>
<script type="module" src="https://unpkg.com/@eox/layout"></script>

<!-- Responsive layout using eox-layout (12×12 grid) -->
<eox-layout gap="8" style="width: 100%; height: 100vh;">
  <!-- Layer control: left panel (3 columns wide, full height) -->
  <eox-layout-item x="0" y="0" w="3" h="12">
    <eox-layercontrol
      for="eox-map#my-map" style="width: 100%; height: 100%; display: block;"
      class="fill"
    ></eox-layercontrol>
  </eox-layout-item>

  <!-- Map: main area (9 columns wide, full height) -->
  <eox-layout-item x="3" y="0" w="9" h="12">
    <eox-map
      id="my-map"
      style="width: 100%; height: 100%; display: block;"
      projection="EPSG:3857">
    </eox-map>
  </eox-layout-item>
</eox-layout>

<script type="module" src="config.js"></script>
```

```javascript [config.js]
import "@eox/map";
import "@eox/map/src/plugins/advancedLayersAndSources"

// Layer Configuration Object
export const layers = [
  {
    type: "Group",
    properties: { id: "base", title: "Base Layers" },
    layers: [
      {
        type: "Tile",
        properties: { id: "osm", title: "OpenStreetMap" },
        source: {
          type: "XYZ",
          url: "https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",
          attribution: "Data &copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors, Rendering &copy; <a href=\"https://eox.at\">EOX</a>"
        },
      },
    ],
  },
  {
    type: "Group",
    properties: { id: "data", title: "Data", layerControlExpand: true },
    layers: [
      {
        type: "WebGLTile",
        properties: { id: "geozarr", title: "Sentinel-2 GeoZarr" },
        source: {
          type: "GeoZarr",
          url:"https://s3.explorer.eopf.copernicus.eu/esa-zarr-sentinel-explorer-fra/tests-output/sentinel-2-l2a-staging/S2A_MSIL2A_20251227T100441_N0511_R122_T33TVF_20251227T121715.zarr",
          group: "measurements/reflectance",
          bands: ["b04", "b03", "b02"],
        },
        style: {
          gamma: 1.5,
          color: [
            "color",
            ["interpolate", ["linear"], ["band", 1], 0, 0, 0.5, 255],
            ["interpolate", ["linear"], ["band", 2], 0, 0, 0.5, 255],
            ["interpolate", ["linear"], ["band", 3], 0, 0, 0.5, 255],
            [
              "case",
              ["==", ["+", ["band", 1], ["band", 2], ["band", 3]], 0],
              0,
              1,
            ],
          ],
        },
      },
    ],
  },
];

const map = document.querySelector("#my-map");

  // Assign properties via Object.assign
  Object.assign(map, {
    center: [14.09, 41.1],
    zoom: 10,
    layers,
  });

```

```json[package.json]
{
  "dependencies": {
    "@eox/map": "^2.1.0",
    "@eox/layout": "^1.0.0",
    "@eox/layercontrol": "^1.4.0"
  }
}
```
:::

  </template>
</Tutorial>

### Key Features

- **Grid Layout**: `eox-layout` provides a 12×12 grid with `gap`, responsive values (`w="12/3/3"`), and scroll support
- **Component Linking**: Use `for="eox-map#map-id"` to connect `eox-layercontrol` to any map instance
- **Declarative Configuration**: Define map state as JSON objects via `Object.assign`, no imperative code required
- **Layer Groups**: Organize layers hierarchically — use `layerControlExpand` to auto-expand groups
- **Layer IDs**: Always set `properties.id` so `eox-map` can perform smart layer updates

**GeoZarr Source Configuration**

| Property | Description | Example |
|----------|-------------|---------|
| `type` | Source type identifier | `"GeoZarr"` |
| `url` | URL to .zarr dataset | `"https://...data.zarr"` |
| `group` | Multiscales group path | `"measurements/reflectance"` |
| `bands` | Band identifiers to load | `["b04", "b03", "b02"]` |


**WebGL Style Expressions**

- `["band", n]` - Access band by index (1-based)
- `["interpolate", ["linear"], ...]` - Scale reflectance to display values
- `gamma: 1.5` - Brightness correction for satellite imagery
- `["color", r, g, b, a]` - Combine channels into RGBA output

### Next Steps

Continue to the [Advanced Visualization](./advanced) tutorial to learn about the **layerConfig** pattern for embedding configuration forms directly in layer properties.

For more details and documentation, visit the [EOxElements Documentation](https://eox-a.github.io/EOxElements/).

<nav class="surface-variant large-padding center-align">
  <a href="../eoxelements" class="button border">← Overview</a>
  <span class="padding"><strong>1 of 4</strong> - Basic Tutorial</span>
  <a href="./advanced" class="button border">Next: Layer Config →</a>
</nav>
