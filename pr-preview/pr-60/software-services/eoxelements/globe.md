---
url: /pr-preview/pr-60/software-services/eoxelements/globe.md
---

## 3D Globe Visualization &#x20;

Switching from a 2D map to a 3D globe in **EOxElements** is as simple as changing the projection. By importing the globe extension, `eox-map` gains the ability to render OpenLayers layers on a 3D Earth using the **OpenGlobus** engine.

#### Globe Integration

* **Seamless Switching**: Use the `projection` attribute to toggle modes.
* **Layer Sync**: OpenLayers tile layers are automatically projected onto the globe.
* **Zero Config**: No complex 3D engine initialization required.

::: tip :bulb: TIP
Right click and drag to tilt the globe
:::

\<template #controls>


\<button
@click="toggleProjection"
class="button border round small"
style="margin-bottom: 1rem; width: 100%;"
\>
Switch to {{ projection === 'globe' ? '2D' : '3D' }}

3D Locations

\<button
v-for="city in cities"
:key="city.name"
@click="flyToCity(city)"
:disabled="isTouring"
class="chip fill surface-variant"
\>
{{ city.name }}






\<template #demo>





\<template #code>

::: code-group

```html [index.html]
<!-- Set projection to 'globe' -->
<eox-map 
  projection="globe"
  style="width: 100%; height: 600px;"
></eox-map>
```

```javascript [config.js]
import "@eox/map";
import "@eox/map/src/plugins/globe";
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
      type: "XYZ",
      url: "https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",
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
      url: 'https://api.explorer.eopf.copernicus.eu/openeo/services/xyz/456c1e23-47f2-4567-98cf-dcde378a05f7/tiles/{z}/{x}/{y}?time=["2025-12-31","2026-01-23"]&cloud_cover=30',
      crossOrigin: "anonymous",
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

### Key Concepts: Hybrid Architecture

The 3D visualization in **EOxElements** employs a powerful hybrid architecture combining **OpenLayers** and **OpenGlobus**:

1. **Dual Engines**: The component maintains an OpenLayers map instance for layer state and logic, while using OpenGlobus for 3D rendering.
2. **Adaptive Rendering**:
   * **Native Rendering**: Where possible (e.g., standard XYZ, WMS), layers are rendered directly by OpenGlobus for maximum performance and quality.
   * **Fallback Rendering**: Complex OpenLayers layers (like GeoZarr or VectorTile) that OpenGlobus doesn't support natively are rendered to a texture (canvas) by OpenLayers and then projected onto the 3D globe.
