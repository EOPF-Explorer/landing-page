---
url: /pr-preview/pr-130/software-services/eoxelements/globe.md
---

## EOxElements - 3D Globe Visualization

Switching from a 2D map to a 3D globe in **EOxElements** is as simple as changing the projection. By importing the globe extension, `eox-map` gains the ability to render OpenLayers layers on a 3D Earth using the **OpenGlobus** engine.

#### Globe Integration

* **Seamless Switching**: Use the `projection` attribute to toggle modes.
* **Layer Sync**: OpenLayers tile layers are automatically projected onto the globe.
* **Zero Config**: No complex 3D engine initialization required.

::: tip :bulb: TIP
Right click and drag to tilt the globe
:::

\<template #controls>&#xA;&#xA;
\<button
@click="toggleProjection"
class="button border round small"
style="margin-bottom: 1rem; width: 100%;"
\>
Switch to {{ projection === 'globe' ? '2D' : '3D' }}&#xA;
3D Locations&#xA;
\<button
v-for="city in cities"
:key="city.name"
@click="flyToCity(city)"
:disabled="isTouring"
class="chip fill surface-variant"
\>
{{ city.name }}&#xA;&#xA;&#xA;&#xA;&#xA;

\<template #demo>&#xA;&#xA;&#xA;&#xA;

\<template #code>

::: code-group

```html [index.html]
<!-- Set projection to 'globe' -->
<eox-map 
  projection="globe"
  style="width: 100%; height: 600px;"
></eox-map>
```

```javascript-vue [config.js]
import "@eox/map";
import "@eox/map/src/plugins/globe";

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
      id: "sentinel-2",
      title: "Sentinel-2 Milano Cortina"
    },
    source: {
      type: "XYZ",
      url: "https://api.explorer.eopf.copernicus.eu/raster/collections/sentinel-2-l2a/items/{{ items.milanoCortina.id }}/tiles/WebMercatorQuad/{z}/{x}/{y}.png?variables=/measurements/reflectance:b04&variables=/measurements/reflectance:b03&variables=/measurements/reflectance:b02&rescale=0,1",
      crossOrigin: "anonymous",
    }
  }
];

// Enable 3D terrain via globeConfig
map.globeConfig.terrain = true;
```

```python-vue [Python (Jupyter)]
%pip install ipyeoxelements  # run once, then restart kernel

from ipyeoxelements import EOxMap

layers = [
    {
        "type": "Tile",
        "properties": {"id": "basemap", "title": "OpenStreetMap"},
        "source": {
            "type": "XYZ",
            "url": "https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",
            "crossOrigin": "anonymous",
        },
    },
    {
        "type": "Tile",
        "properties": {"id": "sentinel-2", "title": "Sentinel-2 Milano Cortina"},
        "source": {
            "type": "XYZ",
            "url": "https://api.explorer.eopf.copernicus.eu/raster/collections/sentinel-2-l2a/items/{{ items.milanoCortina.id }}/tiles/WebMercatorQuad/{z}/{x}/{y}.png?variables=/measurements/reflectance:b04&variables=/measurements/reflectance:b03&variables=/measurements/reflectance:b02&rescale=0,1",
            "crossOrigin": "anonymous",
        },
    },
]

globe_map = EOxMap(
    layers=layers,
    projection="globe",
    globe_config={"terrain": True},
    center=[12.12, 46.54],
    zoom=10,
    layout={"height": "600px"},
)

display(globe_map)
```

:::

### Key Concepts: Hybrid Architecture

The 3D visualization in **EOxElements** employs a powerful hybrid architecture combining **OpenLayers** and **OpenGlobus**:

1. **Dual Engines**: The component maintains an OpenLayers map instance for layer state and logic, while using OpenGlobus for 3D rendering.
2. **Adaptive Rendering**:
   * **Native Rendering**: Where possible (e.g., standard XYZ, WMS), layers are rendered directly by OpenGlobus for maximum performance and quality.
   * **Fallback Rendering**: Complex OpenLayers layers (like GeoZarr or VectorTile) that OpenGlobus doesn't support natively are rendered to a texture (canvas) by OpenLayers and then projected onto the 3D globe.
