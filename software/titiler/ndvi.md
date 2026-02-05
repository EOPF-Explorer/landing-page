---
title: NDVI Calculations with Titiler
layout: page
---

<script setup>
import { ref, onMounted, nextTick, watch, useTemplateRef } from 'vue'
import Map from 'ol/Map.js'
import View from 'ol/View.js'
import TileLayer from 'ol/layer/Tile.js'
import XYZ from 'ol/source/XYZ.js'
import { fromLonLat } from 'ol/proj.js'
import 'ol/ol.css'
import Tutorial from '../../.vitepress/components/Tutorial.vue'
import 'toolcool-range-slider'

/**
 * @typedef {Object} VegetationIndex
 * @property {string} name
 * @property {string} description
 * @property {string} expression
 * @property {string} rescale
 * @property {string} colormap
 * @property {string} formula
 */

/**
 * @typedef {Object} ColormapOption
 * @property {string} value
 * @property {string} name
 * @property {string} description
 */

const rescaleSliderRef = useTemplateRef('rescaleSlider')
/** @type {import('vue').Ref<HTMLElement | null>} */
const mapContainer = ref(null)
/** @type {import('vue').Ref<import('ol/Map').default | null>} */
const map = ref(null)
const selectedExpression = ref('ndvi')
const customRescaleMin = ref(-0.3)
const customRescaleMax = ref(0.8)
const selectedColormap = ref('ylgn')

/** @type {Record<string, VegetationIndex>} */
const expressions = {
  'ndvi': {
    name: 'NDVI (Normalized Difference Vegetation Index)',
    description: 'Classic vegetation index highlighting healthy vegetation',
    expression: '(/measurements/reflectance:b08-/measurements/reflectance:b04)/(/measurements/reflectance:b08+/measurements/reflectance:b04)',
    rescale: '-0.3,0.8',
    colormap: 'ylgn',
    formula: '(NIR - Red) / (NIR + Red) = (B08 - B04) / (B08 + B04)'
  },
  'evi': {
    name: 'EVI (Enhanced Vegetation Index)',
    description: 'Improved vegetation index with reduced atmospheric effects',
    expression: '2.5*((/measurements/reflectance:b08-/measurements/reflectance:b04)/(/measurements/reflectance:b08+6.0*/measurements/reflectance:b04-7.5*/measurements/reflectance:b02+1.0))',
    rescale: '-0.3,1.5',
    colormap: 'viridis',
    formula: '2.5 * ((NIR - Red) / (NIR + 6*Red - 7.5*Blue + 1))'
  },
  'ndwi': {
    name: 'NDWI (Normalized Difference Water Index)',
    description: 'Water body detection and monitoring index',
    expression: '(/measurements/reflectance:b03-/measurements/reflectance:b08)/(/measurements/reflectance:b03+/measurements/reflectance:b08)',
    rescale: '-1,1',
    colormap: 'blues',
    formula: '(Green - NIR) / (Green + NIR) = (B03 - B08) / (B03 + B08)'
  },
  'nbr': {
    name: 'NBR (Normalized Burn Ratio)',
    description: 'Fire scar and burn severity detection',
    expression: '(/measurements/reflectance:b08-/measurements/reflectance:b12)/(/measurements/reflectance:b08+/measurements/reflectance:b12)',
    rescale: '-1,1',
    colormap: 'rdpu',
    formula: '(NIR - SWIR2) / (NIR + SWIR2) = (B08 - B12) / (B08 + B12)'
  }
}

/** @type {ColormapOption[]} */
const colormaps = [
  { value: 'ylgn', name: 'Yellow-Green', description: 'Classic vegetation colormap' },
  { value: 'viridis', name: 'Viridis', description: 'Perceptually uniform colormap' },
  { value: 'plasma', name: 'Plasma', description: 'Purple-pink-yellow gradient' },
  { value: 'blues', name: 'Blues', description: 'Blue gradient for water features' },
  { value: 'rdpu', name: 'Red-Purple', description: 'Red to purple gradient' },
  { value: 'spectral', name: 'Spectral', description: 'Rainbow spectrum' }
]

const sampleItem = 'S2B_MSIL2A_20251024T101029_N0511_R022_T32TQR_20251024T122954'
const collection = 'sentinel-2-l2a'
const baseUrl = 'https://api.explorer.eopf.copernicus.eu/raster'

/** @type {import('vue').Ref<import('ol/layer/Tile').default | null>} */
const tileLayer = ref(null)

/**
 * Copies the current tile URL to clipboard
 * @returns {Promise<void>}
 */
const copyUrl = async () => {
  try {
    await navigator.clipboard.writeText(buildTileUrl())
  } catch (e) {
    alert('Failed to copy')
  }
}

/**
 * Builds the Titiler tile URL with current vegetation index settings
 * @returns {string} The complete tile URL for the map
 */
function buildTileUrl() {
  const expr = expressions[selectedExpression.value]
  const params = new URLSearchParams()
  
  params.set('expression', expr.expression)
  
  // Use custom rescale if different from default
  const rescaleRange = `${customRescaleMin.value},${customRescaleMax.value}`
  params.set('rescale', rescaleRange)
  
  params.set('colormap_name', selectedColormap.value)
  
  return `${baseUrl}/collections/${collection}/items/${sampleItem}/tiles/WebMercatorQuad/{z}/{x}/{y}.png?${params.toString()}`
}

/**
 * Updates the tile layer with new URL parameters
 */
function updateTileLayer() {
  if (!map.value || !tileLayer.value) return
  
  const newUrl = buildTileUrl()
  
  // Create new source instead of updating URL to avoid caching issues
  const newSource = new XYZ({
    url: newUrl,
    crossOrigin: 'anonymous',
    maxZoom: 18
  })
  
  tileLayer.value.setSource(newSource)
}

/**
 * Resets rescale values to the default for selected vegetation index
 */
function resetRescale() {
  const expr = expressions[selectedExpression.value]
  const [min, max] = expr.rescale.split(',').map(Number)
  customRescaleMin.value = min
  customRescaleMax.value = max
  selectedColormap.value = expr.colormap
  
  // Update slider values
  if (rescaleSliderRef.value) {
    rescaleSliderRef.value.value1 = min
    rescaleSliderRef.value.value2 = max
  }
}
/**
 * Handles range slider change event
 * @param {CustomEvent<{value1: string, value2: string}>} event - The change event from tc-range-slider
 */
function handleRescaleChange(event) {
  customRescaleMin.value = parseFloat(event.detail.value1)
  customRescaleMax.value = parseFloat(event.detail.value2)
}

onMounted(() => {
  nextTick(() => {
    initializeMap()
    
    // Initialize range slider
    if (rescaleSliderRef.value) {
      rescaleSliderRef.value.setAttribute('min', '-1')
      rescaleSliderRef.value.setAttribute('max', '1')
      rescaleSliderRef.value.setAttribute('value1', customRescaleMin.value)
      rescaleSliderRef.value.setAttribute('value2', customRescaleMax.value)
      rescaleSliderRef.value.setAttribute('step', '0.01')
    }
  })
})

/**
 * Initializes the OpenLayers map with Titiler layer
 */
function initializeMap() {
  if (!mapContainer.value) return
  
  const initialUrl = buildTileUrl()
  
  tileLayer.value = new TileLayer({
    source: new XYZ({
      url: initialUrl,
      crossOrigin: 'anonymous',
      maxZoom: 18
    }),
    opacity: 0.9
  })
  
  // Create map with terrain base layer
  map.value = new Map({
    target: mapContainer.value,
    layers: [
      new TileLayer({
        source: new XYZ({
          url: 'https://s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpeg'
        })
      })
    ],
    view: new View({
      center: fromLonLat([12.3, 45.2]), // Venice area
      zoom: 11
    })
  })
  
  // Add the Titiler layer after a delay to prevent loops
  setTimeout(() => {
    console.log('Adding Titiler layer...')
    if(!tileLayer.value) return;
    map.value?.addLayer(tileLayer.value)
  }, 1000)
}

// Watch for changes with debouncing
watch(selectedExpression, () => {
  resetRescale()
  // Add a small delay to prevent rapid updates
  setTimeout(() => {
    updateTileLayer()
  }, 100)
}, { flush: 'post' })

watch([customRescaleMin, customRescaleMax, selectedColormap], () => {
  // Add a small delay to prevent rapid updates
  setTimeout(() => {
    updateTileLayer()
  }, 100)
}, { flush: 'post' })
</script>



## TiTiler - Vegetation Indices <img src="https://user-images.githubusercontent.com/10407788/172718020-c2378b7e-a0d4-406e-924c-8ffe54e61596.png" alt="Titiler Logo" style="height:100px;vertical-align:middle;margin-left:0.5rem;float:right;" />

<Tutorial height="800px">
  <template #description>
    <p>This example demonstrates how to calculate vegetation indices using Titiler's server-side mathematical expressions. All calculations are performed on the server, returning pre-computed tiles optimized for web display.</p>
  </template>

  <template #controls>
    <div class="grid small-space">
      <div class="s12">
        <div class="field label border">
          <select v-model="selectedExpression">
            <option v-for="(expr, key) in expressions" :key="key" :value="key">
              {{ expr.name }}
            </option>
          </select>
          <label>Vegetation Index</label>
        </div>
      </div>
      <div class="s12" v-if="expressions[selectedExpression]">
        <article class="surface-variant padding no-elevate">
          <div class="bold">Description</div>
          <p class="medium-text">{{ expressions[selectedExpression].description }}</p>
          <pre class="medium-text"><code>{{ expressions[selectedExpression].formula }}</code></pre>
        </article>
      </div>
      <div class="s12">
        <div class="field label border">
          <select v-model="selectedColormap">
            <option v-for="cm in colormaps" :key="cm.value" :value="cm.value">
              {{ cm.name }} - {{ cm.description }}
            </option>
          </select>
          <label>Color Map</label>
        </div>
      </div>
      <div class="s12">
        <label class="bold medium-text">Rescale Range</label>
        <div class="grid small-space">
          <div class="s6 center-align small-text">
            Min: {{ customRescaleMin.toFixed(2) }}
          </div>
          <div class="s6 center-align small-text">
            Max: {{ customRescaleMax.toFixed(2) }}
          </div>
        </div>
        <div class="small-margin top-margin">
          <tc-range-slider
            ref="rescaleSlider"
            :value1="customRescaleMin"
            :value2="customRescaleMax"
            min="-1"
            max="1"
            step="0.01"
            @change="handleRescaleChange"
          />
        </div>
      </div>
    </div>
  </template>

  <template #demo>
    <div class="relative" style="width: 100%; height: 100%;">
      <div ref="mapContainer" style="width: 100%; height: 100%;"></div>
      <div class="absolute bottom left right margin">
        <article class="surface round small-elevate">
          <div class="padding border-bottom">
            <h6 class="no-margin">Generated Expression</h6>
            <div class="grid no-space top-align">
              <div class="s12">
                <pre class="scroll small-text"><code>{{ buildTileUrl() }}</code></pre>
                <nav class="small-margin top-align right-align">
                  <button class="border small" @click="copyUrl">
                    Copy URL
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </template>

  <template #code>

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
          url: 'https://s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpeg'
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

::: info 💡 Performance Tip
Server-side calculations are cached, so subsequent requests for the same expression and parameters load much faster.
:::
</template>
</Tutorial>


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

- **NIR Band**: `/measurements/reflectance:b08` (10m resolution)
- **Red Band**: `/measurements/reflectance:b04` (10m resolution)
- **Green Band**: `/measurements/reflectance:b03` (10m resolution)
- **Blue Band**: `/measurements/reflectance:b02` (10m resolution)
- **SWIR Bands**: `/measurements/reflectance:b11`, `/measurements/reflectance:b12` (20m resolution)

**Color Mapping**

The `colormap_name` parameter applies predefined color schemes:

- **ylgn**: Yellow-Green (ideal for vegetation)
- **viridis**: Perceptually uniform (good for scientific data)
- **blues**: Blue gradient (perfect for water indices)

**Value Rescaling**

The `rescale` parameter normalizes index values for optimal visualization:

- **NDVI**: `-0.3,0.8` (optimized vegetation range)
- **EVI**: `-0.3,1.5` (enhanced range for better sensitivity)
- **NDWI**: `-1,1` (water index ranges)

## Next Steps

- **Spatial Operations**: Learn about [cropping and area extraction](./crop)
- **RGB Visualization**: Explore [band combinations and color enhancement](./rgb)
- **Advanced Expressions**: Check the [API documentation](https://api.explorer.eopf.copernicus.eu/raster/api.html) for more complex mathematical operations

<div class="navigation surface-variant large-padding center-align">
  <a href="./rgb" class="button border">← Previous: RGB Visualization</a>
  <span class="padding"><strong>2 of 3</strong> - Vegetation Indices</span>
  <a href="./crop" class="button border">Next: Spatial Cropping →</a>
</div>
