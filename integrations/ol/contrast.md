---
title: OpenLayers - Interactive Contrast
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
const mapRef = ref()
const contrastMin = ref(0.0)
const contrastMax = ref(0.5)

let map = null
let contrastLayer = null

const zarrUrl = 'https://s3.explorer.eopf.copernicus.eu/esa-zarr-sentinel-explorer-fra/tests-output/sentinel-2-l2a/S2B_MSIL2A_20251218T110359_N0511_R094_T30SUF_20251218T115223.zarr'

onMounted(async () => {
  const canvas = document.createElement('canvas')
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
  webglSupport.value = gl !== null

  if (webglSupport.value) {
    nextTick(() => {
      initializeMap()
    })
  }
})

function initializeMap() {
  if (mapRef.value) {
    try {
      const source = new GeoZarr({
        url: zarrUrl,
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

      map = new Map({
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          contrastLayer,
        ],
        target: mapRef.value,
        view: getView(
          source,
          withLowerResolutions(1),
          withHigherResolutions(2),
          withExtentCenter(),
          withZoom(2),
        ),
      })
    } catch (error) {
      console.error('Failed to initialize map:', error)
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

function copyCode() {
  const code = `// Dynamic contrast stretching
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

// Update contrast dynamically
layer.updateStyleVariables({
  contrastMin: newMin,
  contrastMax: newMax,
});`
  
  navigator.clipboard.writeText(code)
}
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
  height: 500px;
  position: relative;
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

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 32px 0;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
}

.nav-button {
  padding: 8px 16px;
  background: #0366d6;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
}

.nav-button:hover {
  background: #0256cc;
  color: white;
}

.contrast-info {
  background: #e7f3ff;
  border: 1px solid #b3d7ff;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
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

# Interactive Contrast Stretching

This example demonstrates dynamic contrast adjustment using OpenLayers style variables, allowing real-time enhancement of satellite imagery.

<div v-if="webglSupport === false" class="warning">
⚠️ **WebGL Not Supported**: Your browser doesn't support WebGL, which is required for interactive contrast adjustment.
</div>

<div v-if="webglSupport === true" class="success">
✅ **WebGL Supported**: Your browser can perform real-time contrast adjustments.
</div>

## Live Demo

<div v-if="webglSupport" class="demo-section">
  <div ref="mapRef" class="map-container"></div>
  
  <div class="controls">
    <label>
      Contrast Min: 
      <input 
        v-model.number="contrastMin" 
        type="range" 
        min="0" 
        max="0.4" 
        step="0.01"
        @input="updateContrast"
      />
      {{ contrastMin.toFixed(2) }}
    </label>
    <label>
      Contrast Max: 
      <input 
        v-model.number="contrastMax" 
        type="range" 
        min="0.2" 
        max="1.0" 
        step="0.01"
        @input="updateContrast"
      />
      {{ contrastMax.toFixed(2) }}
    </label>
  </div>
  
  <div class="code-section">
    <button @click="copyCode" class="copy-button">📋 Copy Code</button>
    <p>This example demonstrates dynamic contrast with:</p>
    <ul>
      <li><strong>Style Variables</strong> - Updateable parameters in WebGL expressions</li>
      <li><strong>Linear Stretching</strong> - Map input range to full 0-255 output</li>
      <li><strong>Real-time Updates</strong> - No re-rendering required</li>
      <li><strong>Interactive Controls</strong> - Adjust min/max values dynamically</li>
    </ul>
  </div>
</div>

## Contrast Stretching Theory

<div class="contrast-info">
<h3>How Contrast Stretching Works</h3>
<p>Contrast stretching maps a narrow range of input values to the full display range (0-255), enhancing the visual contrast of features in satellite imagery.</p>

**Formula**: `output = (input - min) / (max - min) × 255`

Where:
- **input** = Original reflectance value
- **min** = Minimum stretch value (dark point)
- **max** = Maximum stretch value (bright point)
- **output** = Enhanced display value (0-255)
</div>

## Applications

### Image Enhancement
- **Dark scenes** - Lower the minimum value to brighten shadows
- **Bright scenes** - Raise the minimum value to increase contrast
- **Low contrast** - Narrow the min/max range to stretch values

### Feature Detection
- **Urban areas** - Adjust contrast to highlight buildings
- **Water bodies** - Enhance water/land boundaries
- **Vegetation** - Improve green area visibility

### Quality Assessment
- **Histogram analysis** - Identify optimal stretch values
- **Visual inspection** - Quickly assess image quality
- **Comparative analysis** - Standardize display across scenes

## Implementation Benefits

### Performance
- **Hardware acceleration** - WebGL-based processing
- **No network requests** - All processing done client-side
- **Smooth interaction** - Real-time parameter updates

### Flexibility
- **Dynamic ranges** - Adjust for different scene types
- **User control** - Interactive parameter adjustment
- **Reproducible results** - Exact parameter values available

## Try Different Settings

Experiment with the sliders above:
- **Narrow range** (e.g., 0.1-0.3) for high contrast
- **Wide range** (e.g., 0.0-0.8) for natural appearance
- **Shifted range** (e.g., 0.2-0.6) for brightness adjustment

<div class="navigation">
  <a href="/integrations/ol/ndvi" class="nav-button">← Previous: NDVI</a>
  <span><strong>5 of 5</strong> - Interactive Contrast</span>
  <a href="/integrations/ol" class="nav-button">Back to Overview →</a>
</div>