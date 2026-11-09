---
url: /software-services/titiler/crop.md
---

## TiTiler - Spatial Cropping

This example demonstrates how to extract specific areas from satellite scenes using Titiler's spatial operations. You can crop data using bounding boxes or draw custom areas directly on the map

::: tip :bulb: TIP
Size Limits: Large crop areas may take longer to process.
:::

\<template #controls>&#xA;&#xA;&#xA;&#xA;
True Color RGB
NDVI Vegetation Index&#xA;
Visualization&#xA;&#xA;&#xA;
Crop Area (Lon/Lat)&#xA;&#xA;&#xA;&#xA;
Min Lon&#xA;&#xA;&#xA;&#xA;&#xA;
Min Lat&#xA;&#xA;&#xA;&#xA;&#xA;
Max Lon&#xA;&#xA;&#xA;&#xA;&#xA;
Max Lat&#xA;&#xA;&#xA;&#xA;&#xA;&#xA;

\<template #demo>&#xA;&#xA;&#xA;&#xA;&#xA;&#xA;
Crop Preview&#xA;&#xA;
\<img :src="previewUrl" alt="Crop Preview" class="responsive rounded border"
@error="imageError = true" @load="imageError = false"
v-show="!imageError" />&#xA;&#xA;&#xA;
Preview URL:
{{ bboxUrl }}
No data availability for this area&#xA;&#xA;&#xA;
Download High-Res&#xA;
\<button class="small border" @click="copyUrl">
Copy URL&#xA;&#xA;&#xA;&#xA;&#xA;&#xA;&#xA;&#xA;&#xA;

\<template #code>

::: code-group

```javascript-vue [Bbox Crop API]
// Using the correct bbox API endpoint
const baseUrl = "https://api.explorer.eopf.copernicus.eu/raster";
const collection = "sentinel-2-l2a";
const itemId = "{{ items.venice.id }}";

// Define crop coordinates
const bbox = "12.2,45.7,12.4,45.9"; // minLon,minLat,maxLon,maxLat

// Build crop URL with bbox in path
const cropUrl =
  `${baseUrl}/collections/${collection}/items/${itemId}/bbox/${bbox}/1024x1024.png?` +
  `assets=reflectance|bands=b04,b03,b02&` +
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
const ndviExpression = "(b08-b04)/(b08+b04)";

const ndviCropUrl =
  `${baseUrl}/collections/${collection}/items/${itemId}/bbox/${bbox}/1024x1024.png?` +
  `assets=${encodeURIComponent(`reflectance|expression=${ndviExpression}`)}&` +
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

  if (bandConfig.bands) {
    params.set("assets", `reflectance|bands=${bandConfig.bands.join(",")}`);
    params.set("rescale", bandConfig.rescale);
    params.set("color_formula", bandConfig.colorFormula);
  } else if (bandConfig.expression) {
    params.set("assets", `reflectance|expression=${bandConfig.expression}`);
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
L.tileLayer("https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg").addTo(map);

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

### Key Concepts

**Spatial Operations**
Titiler supports several spatial operations for data extraction:

**1. Bounding Box Crop**

```
GET .../items/{item}/bbox/{minx},{miny},{maxx},{maxy}.png
```

Extracts a rectangular area defined by geographic coordinates.

**2. Feature-Based Crop**

```
POST .../items/{item}/feature.png
Content-Type: application/json

{
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "Polygon",
    "coordinates": [[[12.3, 45.2], [12.4, 45.2], [12.4, 45.3], [12.3, 45.3], [12.3, 45.2]]]
  }
}
```

Crops using complex geometries (polygons, multi-polygons), sent as a GeoJSON Feature in the request body.

**3. Preview Generation**

```
GET .../items/{item}/bbox/{minx},{miny},{maxx},{maxy}.png?max_size=512
```

Generates web-friendly previews with size constraints.

**Coordinate Systems**

All coordinates use **WGS84 (EPSG:4326)** longitude/latitude format:

* **Longitude**: East-West position (-180 to +180)
* **Latitude**: North-South position (-90 to +90)

Titiler automatically reprojects to the data's native coordinate system.

**Output Formats**

Cropped data can be returned in multiple formats:

* **GeoTIFF**: Full-resolution georeferenced data
* **PNG**: Web-ready images with transparency
* **JPEG**: Compressed images for smaller file sizes

### API Parameters

| Parameter    | Description                                  | Example                                              |
| ------------ | -------------------------------------------- | ---------------------------------------------------- |
| `assets`     | Band selection (same as tiles)               | `assets=reflectance\|bands=b04,b03,b02`              |
| `expression` | Index calculation, set inside `assets`       | `assets=reflectance\|expression=(b08-b04)/(b08+b04)` |
| `rescale`    | Value normalization                          | `0,1`, `-1,1`                                        |
| `max_size`   | Maximum output dimension (preview)           | `512`, `1024`                                        |

The crop area and output format are part of the URL path, not parameters: `.../bbox/12.2,45.7,12.4,45.9.png`.

::: tip :bulb: TIP
Use the preview endpoint with `max_size=512` for quick web previews, then the full crop endpoint for high-resolution analysis.
:::

### Next Steps

* **API Documentation**: Check the [complete API reference](https://api.explorer.eopf.copernicus.eu/raster/api.html) for advanced cropping options
