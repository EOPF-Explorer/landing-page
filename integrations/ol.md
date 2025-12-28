---
title: OpenLayers Integration with EOPF Zarr Data
layout: page
---

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import Map from 'ol/Map.js'
import { getView, withExtentCenter, withHigherResolutions, withLowerResolutions, withZoom } from 'ol/View.js'
import TileLayer from 'ol/layer/WebGLTile.js'
import GeoZarr from 'ol/source/GeoZarr.js'
import OSM from 'ol/source/OSM.js'
import 'ol/ol.css'

const webglSupport = ref(null)
const basicMapRef = ref()
const trueColorMapRef = ref()
const falseColorMapRef = ref()
const ndviMapRef = ref()
const contrastMapRef = ref()

// Contrast controls
const contrastMin = ref(0.0)
const contrastMax = ref(0.5)

let basicMap = null
let trueColorMap = null
let falseColorMap = null
let ndviMap = null
let contrastMap = null
let contrastLayer = null

// Sample EOPF Zarr URL - using the same as the official example
const sampleZarrUrl = 'https://s3.explorer.eopf.copernicus.eu/esa-zarr-sentinel-explorer-fra/tests-output/sentinel-2-l2a-staging/S2B_MSIL2A_20251115T091139_N0511_R050_T35SLU_20251115T111807.zarr'

onMounted(async () => {
  // Check WebGL support
  const canvas = document.createElement('canvas')
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
  webglSupport.value = gl !== null

  // Initialize maps if WebGL is supported
  if (webglSupport.value) {
    nextTick(() => {
      initializeMaps()
    })
  }
})

function initializeMaps() {
  // Initialize basic map
  if (basicMapRef.value) {
    try {
      const source = new GeoZarr({
        url: sampleZarrUrl,
        group: 'measurements/reflectance',
        bands: ['b04', 'b03', 'b02'],
      })

      basicMap = new Map({
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
        target: basicMapRef.value,
        view: getView(
          source,
          withLowerResolutions(1),
          withHigherResolutions(2),
          withExtentCenter(),
          withZoom(2),
        ),
      })
    } catch (error) {
      console.error('Failed to initialize basic map:', error)
    }
  }

  // Initialize true color map
  if (trueColorMapRef.value) {
    try {
      const source = new GeoZarr({
        url: sampleZarrUrl,
        group: 'measurements/reflectance',
        bands: ['b04', 'b03', 'b02'],
      })

      trueColorMap = new Map({
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
        target: trueColorMapRef.value,
        view: getView(
          source,
          withLowerResolutions(1),
          withHigherResolutions(2),
          withExtentCenter(),
          withZoom(2),
        ),
      })
    } catch (error) {
      console.error('Failed to initialize true color map:', error)
    }
  }

  // Initialize false color map
  if (falseColorMapRef.value) {
    try {
      const source = new GeoZarr({
        url: sampleZarrUrl,
        group: 'measurements/reflectance',
        bands: ['b11', 'b04', 'b03'],
      })

      falseColorMap = new Map({
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
        target: falseColorMapRef.value,
        view: getView(
          source,
          withLowerResolutions(1),
          withHigherResolutions(2),
          withExtentCenter(),
          withZoom(2),
        ),
      })
    } catch (error) {
      console.error('Failed to initialize false color map:', error)
    }
  }

  // Initialize NDVI map
  if (ndviMapRef.value) {
    try {
      const source = new GeoZarr({
        url: sampleZarrUrl,
        group: 'measurements/reflectance',
        bands: ['b08', 'b04'],
      })

      ndviMap = new Map({
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          new TileLayer({
            source,
            style: {
              color: [
                'case',
                ['>', 
                  ['/', 
                    ['-', ['band', 1], ['band', 2]], 
                    ['+', ['band', 1], ['band', 2]]
                  ], 
                  0.3
                ],
                [0, 200, 0, 255],
                [200, 100, 0, 255]
              ],
            },
          }),
        ],
        target: ndviMapRef.value,
        view: getView(
          source,
          withLowerResolutions(1),
          withHigherResolutions(2),
          withExtentCenter(),
          withZoom(2),
        ),
      })
    } catch (error) {
      console.error('Failed to initialize NDVI map:', error)
    }
  }

  // Initialize contrast map
  if (contrastMapRef.value) {
    try {
      const source = new GeoZarr({
        url: sampleZarrUrl,
        group: 'measurements/reflectance',
        bands: ['b04', 'b03', 'b02'],
      })

      contrastLayer = new TileLayer({
        source,
        style: {
          variables: {
            contrastMin: contrastMin.value,
            contrastMax: contrastMax.value,
          },
          color: [
            'color',
            ['interpolate', ['linear'], ['band', 1], ['var', 'contrastMin'], 0, ['var', 'contrastMax'], 255],
            ['interpolate', ['linear'], ['band', 2], ['var', 'contrastMin'], 0, ['var', 'contrastMax'], 255],
            ['interpolate', ['linear'], ['band', 3], ['var', 'contrastMin'], 0, ['var', 'contrastMax'], 255],
            [
              'case',
              ['==', ['+', ['band', 1], ['band', 2], ['band', 3]], 0],
              0,
              255,
            ],
          ],
        },
      })

      contrastMap = new Map({
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          contrastLayer,
        ],
        target: contrastMapRef.value,
        view: getView(
          source,
          withLowerResolutions(1),
          withHigherResolutions(2),
          withExtentCenter(),
          withZoom(2),
        ),
      })
    } catch (error) {
      console.error('Failed to initialize contrast map:', error)
    }
  }
}

function updateContrast() {
  if (contrastLayer) {
    contrastLayer.updateStyleVariables({
      contrastMin: contrastMin.value,
      contrastMax: contrastMax.value,
    })
  }
}

function copyCode(code) {
  navigator.clipboard.writeText(code).then(() => {
    // Visual feedback could be added here
  })
}

// Code samples for copying
const basicMapCode = `import Map from 'ol/Map.js';
import { getView, withExtentCenter, withHigherResolutions, withLowerResolutions, withZoom } from 'ol/View.js';
import TileLayer from 'ol/layer/WebGLTile.js';
import GeoZarr from 'ol/source/GeoZarr.js';
import OSM from 'ol/source/OSM.js';

// EOPF Zarr URL from STAC Browser
const zarrUrl = '${sampleZarrUrl}';

// Create GeoZarr source
const source = new GeoZarr({
  url: zarrUrl,
  group: 'measurements/reflectance',
  bands: ['b04', 'b03', 'b02'], // RGB
});

// Initialize map with OSM base layer
const map = new Map({
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
  target: 'map',
  view: getView(
    source,
    withLowerResolutions(1),
    withHigherResolutions(2),
    withExtentCenter(),
    withZoom(2),
  ),
});`

const trueColorCode = `// True color with gamma correction and interpolation
const layer = new TileLayer({
  source: new GeoZarr({
    url: zarrUrl,
    group: 'measurements/reflectance',
    bands: ['b04', 'b03', 'b02'],
  }),
  style: {
    gamma: 1.5, // Brighten the image
    color: [
      'color',
      ['interpolate', ['linear'], ['band', 1], 0, 0, 0.5, 255], // Red
      ['interpolate', ['linear'], ['band', 2], 0, 0, 0.5, 255], // Green
      ['interpolate', ['linear'], ['band', 3], 0, 0, 0.5, 255], // Blue
      [
        'case',
        ['==', ['+', ['band', 1], ['band', 2], ['band', 3]], 0],
        0, // Transparent for zero values
        1, // Opaque for non-zero values
      ],
    ],
  },
});`

const falseColorCode = `// False color infrared
const layer = new TileLayer({
  source: new GeoZarr({
    url: zarrUrl,
    group: 'measurements/reflectance', 
    bands: ['b11', 'b04', 'b03'], // SWIR, Red, Green
  }),
  style: {
    gamma: 1.5,
    color: [
      'color',
      ['interpolate', ['linear'], ['band', 1], 0, 0, 0.5, 255], // SWIR as red
      ['interpolate', ['linear'], ['band', 2], 0, 0, 0.5, 255], // Red as green
      ['interpolate', ['linear'], ['band', 3], 0, 0, 0.5, 255], // Green as blue
      [
        'case',
        ['==', ['+', ['band', 1], ['band', 2], ['band', 3]], 0],
        0,
        1,
      ],
    ],
  },
});`

const ndviCode = `// NDVI calculation
const layer = new TileLayer({
  source: new GeoZarr({
    url: zarrUrl,
    group: 'measurements/reflectance',
    bands: ['b08', 'b04'], // NIR, Red
  }),
  style: {
    color: [
      'case',
      // NDVI > 0.3 = vegetation (green)
      ['>', 
        ['/', 
          ['-', ['band', 1], ['band', 2]], 
          ['+', ['band', 1], ['band', 2]]
        ], 
        0.3
      ],
      [0, 200, 0, 255], // Green for vegetation
      [200, 100, 0, 255] // Brown for non-vegetation
    ],
  },
});`

const contrastCode = `// Dynamic contrast stretching
const layer = new TileLayer({
  source: source,
  style: {
    variables: {
      contrastMin: 0.0,
      contrastMax: 0.5,
    },
    color: [
      'color',
      ['interpolate', ['linear'], ['band', 1], ['var', 'contrastMin'], 0, ['var', 'contrastMax'], 255],
      ['interpolate', ['linear'], ['band', 2], ['var', 'contrastMin'], 0, ['var', 'contrastMax'], 255],
      ['interpolate', ['linear'], ['band', 3], ['var', 'contrastMin'], 0, ['var', 'contrastMax'], 255],
      [
        'case',
        ['==', ['+', ['band', 1], ['band', 2], ['band', 3]], 0],
        0,
        255,
      ],
    ],
  },
});

// Update contrast
layer.updateStyleVariables({
  contrastMin: newMin,
  contrastMax: newMax,
});`
</script>

<style scoped>
.warning {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  color: #856404;
  padding: 12px;
  border-radius: 4px;
  margin: 16px 0;
}

.success {
  background: #d4edda;
  border: 1px solid #c3e6cb;
  color: #155724;
  padding: 12px;
  border-radius: 4px;
  margin: 16px 0;
}

.demo-section {
  margin: 24px 0;
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  overflow: hidden;
}

.map-container {
  width: 100%;
  height: 400px;
  position: relative;
}

.code-section {
  background: #f6f8fa;
  padding: 16px;
  border-top: 1px solid #e1e4e8;
}

.copy-button {
  background: #0366d6;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 12px;
  font-size: 14px;
}

.copy-button:hover {
  background: #0256cc;
}

.controls {
  padding: 16px;
  background: #f8f9fa;
  border-bottom: 1px solid #e1e4e8;
}

.controls label {
  display: block;
  margin-bottom: 12px;
  font-weight: 500;
}

.controls input[type="range"] {
  width: 200px;
  margin: 0 8px;
}

pre {
  background: #f6f8fa;
  padding: 16px;
  border-radius: 4px;
  overflow-x: auto;
  font-size: 14px;
  line-height: 1.4;
  margin: 0;
}

code {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}
</style>

# OpenLayers Integration with EOPF Zarr Data

## Overview

This guide demonstrates how to integrate OpenLayers with EOPF's Zarr-formatted satellite data using the experimental GeoZarr support in OpenLayers 10.7.1-dev. **All examples below are live, interactive demonstrations** running directly in your browser.

<div v-if="webglSupport === false" class="warning">
⚠️ **WebGL Not Supported**: Your browser doesn't support WebGL, which is required for GeoZarr visualization. Please use a modern browser with WebGL enabled.
</div>

<div v-if="webglSupport === true" class="success">
✅ **WebGL Supported**: Your browser supports WebGL and can render GeoZarr data.
</div>

## Interactive Examples

### 1. Basic Map Setup

Here's a live example of loading EOPF Zarr data with minimal configuration:

<div v-if="webglSupport" class="demo-section">
  <div ref="basicMapRef" class="map-container"></div>
  
  <div class="code-section">
    <button @click="copyCode(basicMapCode)" class="copy-button">📋 Copy Code</button>
    <pre><code>{{ basicMapCode }}</code></pre>
  </div>
</div>

### 2. True Color Visualization

Apply proper scaling for natural color rendering:

<div v-if="webglSupport" class="demo-section">
  <div ref="trueColorMapRef" class="map-container"></div>
  
  <div class="code-section">
    <button @click="copyCode(trueColorCode)" class="copy-button">📋 Copy Code</button>
    <pre><code>{{ trueColorCode }}</code></pre>
  </div>
</div>

### 3. False Color Infrared

Use infrared bands for vegetation and land cover analysis:

<div v-if="webglSupport" class="demo-section">
  <div ref="falseColorMapRef" class="map-container"></div>
  
  <div class="code-section">
    <button @click="copyCode(falseColorCode)" class="copy-button">📋 Copy Code</button>
    <pre><code>{{ falseColorCode }}</code></pre>
  </div>
</div>

### 4. NDVI Calculation

Calculate vegetation indices directly in the browser:

<div v-if="webglSupport" class="demo-section">
  <div ref="ndviMapRef" class="map-container"></div>
  
  <div class="code-section">
    <button @click="copyCode(ndviCode)" class="copy-button">📋 Copy Code</button>
    <pre><code>{{ ndviCode }}</code></pre>
  </div>
</div>

### 5. Interactive Contrast Stretching

Adjust contrast dynamically to enhance visualization:

<div v-if="webglSupport" class="demo-section">
  <div ref="contrastMapRef" class="map-container"></div>
  
  <div class="controls">
    <label>
      Contrast Min: 
      <input 
        v-model.number="contrastMin" 
        type="range" 
        min="0" 
        max="0.5" 
        step="0.01"
        @input="updateContrast"
      />
      {{ contrastMin }}
    </label>
    <label>
      Contrast Max: 
      <input 
        v-model.number="contrastMax" 
        type="range" 
        min="0.1" 
        max="1.0" 
        step="0.01"
        @input="updateContrast"
      />
      {{ contrastMax }}
    </label>
  </div>
  
  <div class="code-section">
    <button @click="copyCode(contrastCode)" class="copy-button">📋 Copy Code</button>
    <pre><code>{{ contrastCode }}</code></pre>
  </div>
</div>

## Installation

### NPM Installation (Recommended)

The page uses locally installed OpenLayers and STAC-js libraries:

```bash
npm install ol@10.7.1-dev stac-js@^0.1.2
```

```javascript
import Map from 'ol/Map.js';
import TileLayer from 'ol/layer/WebGLTile.js';
import GeoZarr from 'ol/source/GeoZarr.js';
import View from 'ol/View.js';
import 'ol/ol.css';
```

### CDN Approach (Alternative)

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@10.7.1-dev/ol.css" />
  <script src="https://cdn.jsdelivr.net/npm/ol@10.7.1-dev/dist/ol.js"></script>
</head>
<body>
  <div id="map" style="height: 400px;"></div>
  <script>
    // Your OpenLayers code here
  </script>
</body>
</html>
```

### NPM Installation

```bash
npm install ol@10.7.1-dev
```

```javascript
import Map from 'ol/Map.js';
import TileLayer from 'ol/layer/WebGLTile.js';
import GeoZarr from 'ol/source/GeoZarr.js';
import View from 'ol/View.js';
import 'ol/ol.css';
```

## STAC Browser Integration

### Finding Zarr URLs

1. Visit the [EOPF STAC Browser](https://api.explorer.eopf.copernicus.eu/browser)
2. Search for your desired Sentinel scene
3. Look for assets with type `application/zarr` or `application/zarr+zip`
4. Copy the asset URL for use in your OpenLayers configuration

### Programmatic STAC Access

```javascript
import STAC from 'stac-js';

async function loadZarrFromSTAC(itemId) {
  const stac = new STAC('https://api.explorer.eopf.copernicus.eu/stac');
  
  // Search for items
  const results = await stac.search({
    ids: [itemId],
    collections: ['sentinel-2-l2a']
  });
  
  const item = results.features[0];
  const zarrAsset = Object.values(item.assets)
    .find(asset => asset.type === 'application/zarr');
  
  if (zarrAsset) {
    return zarrAsset.href;
  }
  
  throw new Error('No Zarr asset found');
}

// Usage
loadZarrFromSTAC('S2B_MSIL2A_20251115T091139_N0511_R050_T35SLU_20251115T111807')
  .then(zarrUrl => {
    // Initialize your map with the Zarr URL
    const source = new GeoZarr({
      url: zarrUrl,
      group: 'measurements/reflectance',
      bands: ['b04', 'b03', 'b02'],
    });
  });
```

## Advanced Styling

### Band Math Expressions

```javascript
// Enhanced Vegetation Index (EVI)
const eviStyle = {
  color: [
    'case',
    ['>', 
      ['/', 
        ['*', 2.5, ['-', ['band', 1], ['band', 2]]], 
        ['+', ['band', 1], ['*', 6, ['band', 2]], ['*', -7.5, ['band', 3]], 1]
      ], 
      0.3
    ],
    [0, 0.8, 0, 1], // High vegetation
    [0.8, 0.4, 0, 1] // Low vegetation
  ]
};

// Water Detection (NDWI)
const ndwiStyle = {
  color: [
    'case',
    ['>', 
      ['/', 
        ['-', ['band', 2], ['band', 4]], 
        ['+', ['band', 2], ['band', 4]]
      ], 
      0.3
    ],
    [0, 0, 0.8, 1], // Water
    [0.5, 0.3, 0.1, 1] // Land
  ]
};
```

### Multi-temporal Analysis

```javascript
// Compare two time periods
const beforeSource = new GeoZarr({
  url: 'path/to/before.zarr',
  group: 'measurements/reflectance',
  bands: ['b08', 'b04'],
});

const afterSource = new GeoZarr({
  url: 'path/to/after.zarr', 
  group: 'measurements/reflectance',
  bands: ['b08', 'b04'],
});

// Layer showing change detection
const changeLayer = new TileLayer({
  source: beforeSource, // Primary source
  style: {
    color: [
      'case',
      ['>', 
        ['-', 
          // NDVI after
          ['/', ['-', ['band', 1], ['band', 2]], ['+', ['band', 1], ['band', 2]]],
          // NDVI before (would need additional logic to access)
          ['/', ['-', ['band', 3], ['band', 4]], ['+', ['band', 3], ['band', 4]]]
        ], 
        0.1
      ],
      [0, 0.8, 0, 1], // Vegetation increase
      [0.8, 0, 0, 1]  // Vegetation decrease
    ]
  }
});
```

## Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure the Zarr data is accessible from your domain
2. **Loading Failures**: Check browser console for network errors
3. **Performance Issues**: Consider reducing data resolution or implementing progressive loading
4. **Memory Usage**: Monitor browser memory, especially with large datasets

### Browser Compatibility

- **Chrome 80+**: Full support
- **Firefox 75+**: Full support
- **Safari 14+**: Limited support (some style expressions may not work)
- **Edge 80+**: Full support

### Version Notes

⚠️ **Development Version**: OpenLayers 10.7.1-dev contains experimental GeoZarr support that may change. For production use, wait for the stable 10.8.0 release.

## Performance Optimization

### WebGL Optimization

```javascript
// Enable pixel ratio optimization
const layer = new TileLayer({
  source: zarrSource,
  style: styleConfig,
  preload: 2, // Preload surrounding tiles
  useInterimTilesOnError: false
});
```

### Caching

```javascript
// Enable tile caching
const source = new GeoZarr({
  url: zarrUrl,
  cacheSize: 128, // Increase cache size
  transition: 250,
  group: 'measurements/reflectance',
  bands: ['b04', 'b03', 'b02'],
});
```

## Next Steps

1. **Explore EOPF Data**: Browse available datasets in the [STAC Browser](https://api.explorer.eopf.copernicus.eu/browser)
2. **Custom Styling**: Experiment with different band combinations and mathematical expressions
3. **Integration**: Combine with other OpenLayers features like vector overlays and controls
4. **Performance**: Optimize for your specific use case and data volume

For more advanced features and the latest updates, follow the [OpenLayers development](https://github.com/openlayers/openlayers) and [EOPF Explorer project](https://github.com/EOPF-Explorer).