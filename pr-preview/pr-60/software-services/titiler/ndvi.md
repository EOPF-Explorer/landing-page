---
url: /pr-preview/pr-60/software-services/titiler/ndvi.md
---

## TiTiler - Vegetation Indices&#x20;

\<template #controls>





{{ expr.name }}


Vegetation Index




Description
{{ expressions\[selectedExpression].description }}
{{ expressions\[selectedExpression].formula }}






{{ cm.name }} - {{ cm.description }}


Color Map



Rescale Range


Min: {{ customRescaleMin.toFixed(2) }}


Max: {{ customRescaleMax.toFixed(2) }}



\<tc-range-slider
ref="rescaleSlider"
:value1="customRescaleMin"
:value2="customRescaleMax"
min="-1"
max="1"
step="0.01"
@change="handleRescaleChange"
/>





\<template #demo>





Generated Expression


{{ buildTileUrl() }}

\<button class="border small" @click="copyUrl">
Copy URL










\<template #code>

::: code-group

```javascript [Map Setup]
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import XYZ from 'ol/source/XYZ.js';
import { fromLonLat } from 'ol/proj.js';

const baseUrl = "https://api.explorer.eopf.copernicus.eu/raster";
const collection = "sentinel-2-l2a";
const itemId = "S2B_MSIL2A_20251123T101239_N0511_R022_T32TQR_20251123T105704";

// Vegetation index expressions
const expressions = {
  ndvi: {
    expression: "(/measurements/reflectance:b08-/measurements/reflectance:b04)/(/measurements/reflectance:b08+/measurements/reflectance:b04)",
    rescale: "-0.3,0.8",
    colormap: "ylgn"
  },
  evi: {
    expression: "2.5*((/measurements/reflectance:b08-/measurements/reflectance:b04)/(/measurements/reflectance:b08+6.0*/measurements/reflectance:b04-7.5*/measurements/reflectance:b02+1.0))",
    rescale: "-0.3,1.5",
    colormap: "viridis"
  },
  ndwi: {
    expression: "(/measurements/reflectance:b03-/measurements/reflectance:b08)/(/measurements/reflectance:b03+/measurements/reflectance:b08)",
    rescale: "-1,1",
    colormap: "blues"
  },
  nbr: {
    expression: "(/measurements/reflectance:b08-/measurements/reflectance:b12)/(/measurements/reflectance:b08+/measurements/reflectance:b12)",
    rescale: "-1,1",
    colormap: "rdpu"
  }
};

// Build tile URL with expression and parameters
function buildTileUrl(expression, rescaleMin, rescaleMax, colormap) {
  const expr = expressions[expression];
  const params = new URLSearchParams();
  
  params.set('expression', expr.expression);
  params.set('rescale', `${rescaleMin},${rescaleMax}`);
  params.set('colormap_name', colormap);
  
  return `${baseUrl}/collections/${collection}/items/${itemId}/tiles/WebMercatorQuad/{z}/{x}/{y}.png?${params.toString()}`;
}

// Initialize OpenLayers map with Titiler layer
function initializeMap(container, expression = 'ndvi', rescaleMin = -0.3, rescaleMax = 0.8, colormap = 'ylgn') {
  const tileLayer = new TileLayer({
    source: new XYZ({
      url: buildTileUrl(expression, rescaleMin, rescaleMax, colormap),
      crossOrigin: 'anonymous',
      maxZoom: 18
    }),
    opacity: 0.9
  });
  
  const map = new Map({
    target: container,
    layers: [
      new TileLayer({
        source: new XYZ({
          url: "https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg"
        })
      }),
      tileLayer
    ],
    view: new View({
      center: fromLonLat([12.3, 45.2]), // Venice area
      zoom: 11,
    }),
  });
  
  return { map, tileLayer };
}

// Update tile layer with new parameters
function updateTileLayer(tileLayer, expression, rescaleMin, rescaleMax, colormap) {
  const newSource = new XYZ({
    url: buildTileUrl(expression, rescaleMin, rescaleMax, colormap),
    crossOrigin: 'anonymous',
    maxZoom: 18
  });
  tileLayer.setSource(newSource);
}
```

```html [HTML]
<div id="app">
  <div class="controls" style="padding: 16px; background: #f6f8fa; margin-bottom: 16px;">
    <div style="margin-bottom: 12px;">
      <label style="font-weight: bold; display: block; margin-bottom: 8px;">Vegetation Index:</label>
      <select v-model="selectedExpression" style="width: 100%; padding: 8px;">
        <option value="ndvi">NDVI (Normalized Difference Vegetation Index)</option>
        <option value="evi">EVI (Enhanced Vegetation Index)</option>
        <option value="ndwi">NDWI (Normalized Difference Water Index)</option>
        <option value="nbr">NBR (Normalized Burn Ratio)</option>
      </select>
    </div>
    
    <div style="margin-bottom: 12px;">
      <label style="font-weight: bold; display: block; margin-bottom: 8px;">Colormap:</label>
      <select v-model="selectedColormap" style="width: 100%; padding: 8px;">
        <option value="ylgn">Yellow-Green</option>
        <option value="viridis">Viridis</option>
        <option value="plasma">Plasma</option>
        <option value="blues">Blues</option>
        <option value="rdpu">Red-Purple</option>
        <option value="spectral">Spectral</option>
      </select>
    </div>
    
    <div style="margin-bottom: 12px;">
      <label style="font-weight: bold; display: block; margin-bottom: 8px;">Rescale Range:</label>
      <div style="display: flex; gap: 24px; margin-bottom: 8px;">
        <span>Min: {{ customRescaleMin.toFixed(2) }}</span>
        <span>Max: {{ customRescaleMax.toFixed(2) }}</span>
      </div>
      <tc-range-slider
        ref="rescaleSlider"
        :value1="customRescaleMin"
        :value2="customRescaleMax"
        min="-1"
        max="1"
        step="0.01"
        @change="handleRescaleChange"
      ></tc-range-slider>
    </div>
  </div>
  <div ref="mapContainer" style="width: 100%; height: 500px;"></div>
</div>
```

```javascript [Vue.js Integration]
import { createApp } from 'vue';
import { ref, watch, onMounted, nextTick, useTemplateRef } from 'vue';
import 'toolcool-range-slider';

createApp({
  setup() {
    const rescaleSliderRef = useTemplateRef('rescaleSlider');
    const mapContainer = ref(null);
    
    const selectedExpression = ref('ndvi');
    const customRescaleMin = ref(-0.3);
    const customRescaleMax = ref(0.8);
    const selectedColormap = ref('ylgn');
    
    let map = null;
    let tileLayer = null;
    
    function handleRescaleChange(event) {
      customRescaleMin.value = parseFloat(event.detail.value1);
      customRescaleMax.value = parseFloat(event.detail.value2);
    }
    
    function resetRescale() {
      const expr = expressions[selectedExpression.value];
      const [min, max] = expr.rescale.split(',').map(Number);
      customRescaleMin.value = min;
      customRescaleMax.value = max;
      selectedColormap.value = expr.colormap;
      
      // Update slider
      if (rescaleSliderRef.value) {
        rescaleSliderRef.value.value1 = min;
        rescaleSliderRef.value.value2 = max;
      }
    }
    
    onMounted(() => {
      nextTick(() => {
        const result = initializeMap(
          mapContainer.value,
          selectedExpression.value,
          customRescaleMin.value,
          customRescaleMax.value,
          selectedColormap.value
        );
        map = result.map;
        tileLayer = result.tileLayer;
        
        // Initialize range slider
        if (rescaleSliderRef.value) {
          rescaleSliderRef.value.setAttribute('min', '-1');
          rescaleSliderRef.value.setAttribute('max', '1');
          rescaleSliderRef.value.setAttribute('step', '0.01');
        }
      });
    });
    
    // Watch for changes with debouncing
    watch(selectedExpression, () => {
      resetRescale();
      setTimeout(() => {
        if (tileLayer) {
          updateTileLayer(
            tileLayer,
            selectedExpression.value,
            customRescaleMin.value,
            customRescaleMax.value,
            selectedColormap.value
          );
        }
      }, 100);
    }, { flush: 'post' });
    
    watch([customRescaleMin, customRescaleMax, selectedColormap], () => {
      setTimeout(() => {
        if (tileLayer) {
          updateTileLayer(
            tileLayer,
            selectedExpression.value,
            customRescaleMin.value,
            customRescaleMax.value,
            selectedColormap.value
          );
        }
      }, 100);
    }, { flush: 'post' });
    
    return {
      mapContainer,
      rescaleSliderRef,
      selectedExpression,
      customRescaleMin,
      customRescaleMax,
      selectedColormap,
      handleRescaleChange
    };
  }
}).mount('#app');
```

```javascript [Direct API Usage]
// Titiler API endpoints for direct usage

const baseUrl = "https://api.explorer.eopf.copernicus.eu/raster";
const collection = "sentinel-2-l2a";
const itemId = "S2B_MSIL2A_20251123T101239_N0511_R022_T32TQR_20251123T105704";

// 1. Get Tile with NDVI Expression
const ndviExpression = "(/measurements/reflectance:b08-/measurements/reflectance:b04)/(/measurements/reflectance:b08+/measurements/reflectance:b04)";
const tileUrl = `${baseUrl}/collections/${collection}/items/${itemId}/tiles/WebMercatorQuad/{z}/{x}/{y}.png?expression=${encodeURIComponent(ndviExpression)}&rescale=-0.3,0.8&colormap_name=ylgn`;

// 2. Get Statistics for an Area
async function getVegetationStats(geometry) {
  const response = await fetch(
    `${baseUrl}/collections/${collection}/items/${itemId}/statistics`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        expression: ndviExpression,
        geometry: geometry, // GeoJSON Polygon
        rescale: "-1,1"
      }),
    }
  );
  
  const stats = await response.json();
  console.log("NDVI Statistics:", stats);
  // Returns: { min, max, mean, count, sum, std, median, ... }
  return stats;
}

// 3. Get Item Metadata
async function getItemInfo() {
  const response = await fetch(
    `${baseUrl}/collections/${collection}/items/${itemId}/info`
  );
  const info = await response.json();
  console.log("Available bands:", Object.keys(info));
  return info;
}

// 4. Preview with Custom Expression
async function getPreviewImage(width = 512, height = 512) {
  const url = `${baseUrl}/collections/${collection}/items/${itemId}/preview.png?expression=${encodeURIComponent(ndviExpression)}&rescale=-0.3,0.8&colormap_name=ylgn&width=${width}&height=${height}`;
  
  const response = await fetch(url);
  const blob = await response.blob();
  return URL.createObjectURL(blob);
}

// Example usage
const exampleGeometry = {
  "type": "Polygon",
  "coordinates": [[
    [12.3, 45.2],
    [12.4, 45.2],
    [12.4, 45.3],
    [12.3, 45.3],
    [12.3, 45.2]
  ]]
};

getVegetationStats(exampleGeometry).then(stats => {
  console.log(`Mean NDVI: ${stats.mean.toFixed(3)}`);
  console.log(`Std Dev: ${stats.std.toFixed(3)}`);
});
```

```json [package.json]
{
  "dependencies": {
    "ol": "^10.2.1",
    "vue": "^3.4.0",
    "toolcool-range-slider": "^4.0.28"
  }
}
```

:::

### Common Vegetation Indices

| Index    | Formula                                            | Use Case                                            | Typical Range |
| -------- | -------------------------------------------------- | --------------------------------------------------- | ------------- |
| **NDVI** | (NIR - Red) / (NIR + Red)                          | General vegetation health                           | -1 to 1       |
| **EVI**  | 2.5 × ((NIR - Red) / (NIR + 6×Red - 7.5×Blue + 1)) | Enhanced sensitivity, less atmospheric interference | 0 to 2        |
| **NDWI** | (Green - NIR) / (Green + NIR)                      | Water body detection                                | -1 to 1       |
| **NBR**  | (NIR - SWIR2) / (NIR + SWIR2)                      | Burn scar detection                                 | -1 to 1       |

::: tip :bulb: Performance Tip
Server-side calculations are cached, so subsequent requests for the same expression and parameters load much faster.
:::

### Key Concepts

**Server-Side Expressions**

Titiler processes mathematical expressions on the server using band references:

```javascript
// NDVI calculation
expression = "(B08 - B04) / (B08 + B04)";

// URL-encoded for API
expression =
  "(/measurements/reflectance:b08-/measurements/reflectance:b04)/(/measurements/reflectance:b08+/measurements/reflectance:b04)";
```

**Band References in Expressions**

* **NIR Band**: `/measurements/reflectance:b08` (10m resolution)
* **Red Band**: `/measurements/reflectance:b04` (10m resolution)
* **Green Band**: `/measurements/reflectance:b03` (10m resolution)
* **Blue Band**: `/measurements/reflectance:b02` (10m resolution)
* **SWIR Bands**: `/measurements/reflectance:b11`, `/measurements/reflectance:b12` (20m resolution)

**Color Mapping**

The `colormap_name` parameter applies predefined color schemes:

* **ylgn**: Yellow-Green (ideal for vegetation)
* **viridis**: Perceptually uniform (good for scientific data)
* **blues**: Blue gradient (perfect for water indices)

**Value Rescaling**

The `rescale` parameter normalizes index values for optimal visualization:

* **NDVI**: `-0.3,0.8` (optimized vegetation range)
* **EVI**: `-0.3,1.5` (enhanced range for better sensitivity)
* **NDWI**: `-1,1` (water index ranges)

## Next Steps

* **Spatial Operations**: Learn about [cropping and area extraction](./crop)
* **RGB Visualization**: Explore [band combinations and color enhancement](./rgb)
* **Advanced Expressions**: Check the [API documentation](https://api.explorer.eopf.copernicus.eu/raster/api.html) for more complex mathematical operations
