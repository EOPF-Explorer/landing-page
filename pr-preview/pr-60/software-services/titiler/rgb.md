---
url: /pr-preview/pr-60/software-services/titiler/rgb.md
---

## TiTiler - RGB Visualization&#x20;

This example demonstrates how to create RGB band combinations using Titiler's tile service with EOPF Sentinel-2 data. The server handles all image processing and returns optimized tiles for web mapping applications.

\<template #demo>





Generated Tile URL


{{ buildTileUrl() }}

\<button class="border small" @click="copyUrl">

{{ copyButtonText }}










\<template #code>

::: code-group

```javascript [OpenLayers Integration]
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import { XYZ } from 'ol/source.js';
import { fromLonLat } from 'ol/proj.js';

// Titiler tile URL with band variables
const tileUrl =
  "https://api.explorer.eopf.copernicus.eu/raster/collections/sentinel-2-l2a/items/S2B_MSIL2A_20251024T101029_N0511_R022_T32TQR_20251024T122954/tiles/WebMercatorQuad/{z}/{x}/{y}.png?" +
  "variables=/measurements/reflectance:b04&" +
  "variables=/measurements/reflectance:b03&" +
  "variables=/measurements/reflectance:b02&" +
  "rescale=0,1&" +
  "color_formula=gamma rgb 1.3, sigmoidal rgb 6 0.1, saturation 1.2";

const map = new Map({
  target: "map",
  layers: [
    new TileLayer({
      source: new XYZ({
        url: tileUrl,
        crossOrigin: "anonymous",
      }),
    }),
  ],
  view: new View({
    center: fromLonLat([12.3, 45.8]),
    zoom: 11,
  }),
});
```

```javascript [Leaflet Integration]
import L from 'leaflet';

// Create Leaflet map
const map = L.map('map').setView([45.8, 12.3], 11);

// Add base layer
L.tileLayer('https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg').addTo(map);

// Build Titiler URL
const tileUrl =
  "https://api.explorer.eopf.copernicus.eu/raster/collections/sentinel-2-l2a/items/S2B_MSIL2A_20251024T101029_N0511_R022_T32TQR_20251024T122954/tiles/WebMercatorQuad/{z}/{x}/{y}.png?" +
  "variables=/measurements/reflectance:b04&" +
  "variables=/measurements/reflectance:b03&" +
  "variables=/measurements/reflectance:b02&" +
  "rescale=0,1&" +
  "color_formula=gamma rgb 1.3, sigmoidal rgb 6 0.1, saturation 1.2";

// Add Titiler layer
const sentinelLayer = L.tileLayer(tileUrl, {
  opacity: 0.8,
  attribution: 'Data: Copernicus Sentinel-2 | Processing: EOPF'
});

sentinelLayer.addTo(map);
```

```javascript [API Direct Usage]
// Direct API calls for custom processing
const baseUrl = 'https://api.explorer.eopf.copernicus.eu/raster';
const collection = 'sentinel-2-l2a';
const itemId = 'S2B_MSIL2A_20251218T110359_N0511_R094_T32VLK_20251218T115223';

async function getTileInfo() {
  const response = await fetch(
    `${baseUrl}/collections/${collection}/items/${itemId}/tiles`
  );
  const tilesets = await response.json();
  console.log('Available tilesets:', tilesets);
  return tilesets;
}

async function getItemMetadata() {
  const response = await fetch(
    `${baseUrl}/collections/${collection}/items/${itemId}`
  );
  const metadata = await response.json();
  console.log('Item metadata:', metadata);
  return metadata;
}

// Build custom tile URL
function buildTileUrl(variables, rescale, colorFormula) {
  const params = new URLSearchParams();
  
  variables.forEach(variable => {
    params.append('variables', variable);
  });
  
  params.set('rescale', rescale);
  params.set('color_formula', colorFormula);
  
  return `${baseUrl}/collections/${collection}/items/${itemId}/tiles/WebMercatorQuad/{z}/{x}/{y}.png?${params.toString()}`;
}

// Usage
const trueColorUrl = buildTileUrl(
  ['/measurements/reflectance:b04', '/measurements/reflectance:b03', '/measurements/reflectance:b02'],
  '0,1',
  'gamma rgb 1.3, sigmoidal rgb 6 0.1, saturation 1.2'
);
```

:::

### API Parameters

| Parameter       | Description                      | Example                         |
| --------------- | -------------------------------- | ------------------------------- |
| `variables`     | Band path in Zarr structure      | `/measurements/reflectance:b04` |
| `rescale`       | Min,max values for normalization | `0,1` or `0,0.3`                |
| `color_formula` | Color enhancement pipeline       | `gamma rgb 1.3, saturation 1.2` |
| `format`        | Output image format              | `png` (default), `webp`, `jpeg` |

### Key Concepts

**Variable Format**

Titiler uses specific paths to reference bands in Zarr data in the form of `group:variable`. For Sentinel-2 reflectance data, the relevant group is `/measurements/reflectance`. Example band paths:

```
/measurements/reflectance:b04  # Red band (10m resolution)
/measurements/reflectance:b11  # SWIR band (20m resolution)
```

**Color Enhancement**

The `color_formula` parameter applies color corrections:

* **Gamma correction**: `gamma rgb 1.3` - Brightens mid-tones
* **Sigmoidal contrast**: `sigmoidal rgb 6 0.1` - Enhances contrast
* **Saturation**: `saturation 1.2` - Boosts color intensity

**Rescaling**

The `rescale` parameter normalizes reflectance values:

* `0,1` - Full reflectance range (0-100%)
* `0,0.3` - Compressed range for better contrast

::: tip :bulb: TIP
Use the [interactive API documentation](https://api.explorer.eopf.copernicus.eu/raster/api.html) to explore all available parameters and test different combinations.
:::

### Next Steps

* **NDVI Calculations**: Learn [server-side vegetation index calculations](./ndvi)
* **Spatial Operations**: Explore [cropping and spatial filtering](./crop)
* **STAC Integration**: Browse available datasets in the [STAC Browser](https://api.explorer.eopf.copernicus.eu/browser)

::: warning :warning: **Performance Note**
Titiler generates tiles on-demand. Initial requests may be slower while tiles are computed and cached.
:::
