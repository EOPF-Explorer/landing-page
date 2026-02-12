---
url: /pr-preview/pr-60/software-services/titiler/crop.md
---

## TiTiler - Spatial Cropping&#x20;

This example demonstrates how to extract specific areas from satellite scenes using Titiler's spatial operations. You can crop data using bounding boxes or draw custom areas directly on the map

::: tip :bulb: TIP
Size Limits: Large crop areas may take longer to process.
:::

\<template #controls>




True Color RGB
NDVI Vegetation Index

Visualization



Crop Area (Lon/Lat)




Min Lon





Min Lat





Max Lon





Max Lat







\<template #demo>






Crop Preview


\<img :src="previewUrl" alt="Crop Preview" class="responsive rounded border"
@error="imageError = true" @load="imageError = false"
v-show="!imageError" />



Preview URL:
{{ bboxUrl }}
No data availability for this area



Download High-Res

\<button class="small border" @click="copyUrl">
Copy URL










\<template #code>

::: code-group

```javascript [Bbox Crop API]
// Using the correct bbox API endpoint
const baseUrl = "https://api.explorer.eopf.copernicus.eu/raster";
const collection = "sentinel-2-l2a";
const itemId = "S2B_MSIL2A_20251123T101239_N0511_R022_T32TQR_20251123T105704";

// Define crop coordinates
const bbox = "12.2,45.7,12.4,45.9"; // minLon,minLat,maxLon,maxLat

// Build crop URL with bbox in path
const cropUrl =
  `${baseUrl}/collections/${collection}/items/${itemId}/bbox/${bbox}/1024x1024.png?` +
  `variables=/measurements/reflectance:b04&` +
  `variables=/measurements/reflectance:b03&` +
  `variables=/measurements/reflectance:b02&` +
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
const ndviExpression =
  "(/measurements/reflectance:b08-/measurements/reflectance:b04)/(/measurements/reflectance:b08+/measurements/reflectance:b04)";

const ndviCropUrl =
  `${baseUrl}/collections/${collection}/items/${itemId}/bbox/${bbox}/1024x1024.png?` +
  `expression=${encodeURIComponent(ndviExpression)}&` +
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

  if (bandConfig.variables) {
    bandConfig.variables.forEach((variable) => {
      params.append("variables", variable);
    });
    params.set("rescale", bandConfig.rescale);
    params.set("color_formula", bandConfig.colorFormula);
  } else if (bandConfig.expression) {
    params.set("expression", bandConfig.expression);
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
/crop?bbox=minx,miny,maxx,maxy
```

Extracts a rectangular area defined by geographic coordinates.

**2. Feature-Based Crop**

```
/crop?geom={"type":"Polygon","coordinates":[[[...]]]}
```

Crops using complex geometries (polygons, multi-polygons).

**3. Preview Generation**

```
/preview?bbox=minx,miny,maxx,maxy&max_size=512
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

| Parameter    | Description                         | Example                         |
| ------------ | ----------------------------------- | ------------------------------- |
| `bbox`       | Bounding box as minx,miny,maxx,maxy | `12.2,45.7,12.4,45.9`           |
| `geom`       | GeoJSON geometry for complex shapes | `{"type":"Polygon",...}`        |
| `max_size`   | Maximum output dimension (preview)  | `512`, `1024`                   |
| `format`     | Output format                       | `png`, `jpeg`, `tiff`           |
| `variables`  | Band selection (same as tiles)      | `/measurements/reflectance:b04` |
| `expression` | Mathematical expressions            | NDVI, EVI calculations          |
| `rescale`    | Value normalization                 | `0,1`, `-1,1`                   |

::: tip :bulb: TIP
Use the preview endpoint with `max_size=512` for quick web previews, then the full crop endpoint for high-resolution analysis.
:::

### Next Steps

* **API Documentation**: Check the [complete API reference](https://api.explorer.eopf.copernicus.eu/raster/api.html) for advanced cropping options
