---
title: EOxElements Advanced Tutorial
layout: page
---

<script setup>
import { useTemplateRef, onMounted, nextTick } from "vue";
import "@eox/map"
import "@eox/layercontrol"
import "@eox/jsonform"
import "@eox/layout"
import Tutorial from '../../.vitepress/components/Tutorial.vue'

const zarrUrl = 'https://s3.explorer.eopf.copernicus.eu/esa-zarr-sentinel-explorer-fra/tests-output/sentinel-2-l2a/S2B_MSIL2A_20260120T125339_N0511_R138_T27VWL_20260120T131151.zarr';

// Layer configuration using the layerConfig pattern
const layers = [
  {
    type: "Tile",
    properties: { 
      id: "basemap",
      title: "OpenStreetMap" 
    },
    source: { 
      type: "OSM",
    }
  },
  {
    type: "WebGLTile",
    properties: {
      id: "s2-layer",
      title: "Sentinel-2 GeoZarr",
      layerControlExpand: true,
      layerControlToolsExpand: true,
      // Layer Config embedded in layer properties
      layerConfig: {
        type: "style",
        schema: {
          type: "object",
          title: "Visualization Settings",
          properties: {
            red: {
              title: "Red Channel",
              type: "number",
              enum: [1, 2, 3, 4],
              options: {
                enum_titles: ["Red (B04)", "Green (B03)", "Blue (B02)", "SWIR (B11)"]
              },
              default: 1
            },
            green: {
              title: "Green Channel",
              type: "number",
              enum: [1, 2, 3, 4],
              options: {
                enum_titles: ["Red (B04)", "Green (B03)", "Blue (B02)", "SWIR (B11)"]
              },
              default: 2
            },
            blue: {
              title: "Blue Channel",
              type: "number",
              enum: [1, 2, 3, 4],
              options: {
                enum_titles: ["Red (B04)", "Green (B03)", "Blue (B02)", "SWIR (B11)"]
              },
              default: 3
            },
             redMax: {
              title: "Red Max Value",
              type: "number",
              minimum: 0.1,
              maximum: 1,
              default: 0.5,
              step:0.1,
              format: "range"
            },
            greenMax: {
              title: "Green Max Value",
              type: "number",
              minimum: 0.1,
              maximum: 1,
              default: 0.5,
              step:0.1,
              format: "range"
            },
            blueMax: {
              title: "Blue Max Value",
              type: "number",
              minimum: 0.1,
              maximum: 1,
              default: 0.5,
              step:0.1,
              format: "range"
            },
            gamma: {
              title: "Gamma Correction",
              type: "number",
              minimum: 0.5,
              maximum: 3.0,
              default: 1.5,
              step:0.1,
              format: "range"
            }
          }
        },
      }
    },
    source: {
      type: "GeoZarr",
      url: zarrUrl,
      group: "measurements/reflectance",
      bands: ["b04", "b03", "b02", "b11"]
    },
    style: {
      variables: {
        red: 1, 
        green: 2, 
        blue: 3,
        redMax: 0.5,
        greenMax: 0.5,
        blueMax: 0.5,
        gamma: 1.5,
      },
      gamma: ["var", "gamma"],
      color: [
        'array',
        ['/', ['band', ['var', 'red']], ['var', 'redMax']],
        ['/', ['band', ['var', 'green']], ['var', 'greenMax']],
        ['/', ['band', ['var', 'blue']], ['var', 'blueMax']],
        [
          'case',
          [
            '==',
            [
              '+',
              ['band', ['var', 'red']],
              ['band', ['var', 'green']],
              ['band', ['var', 'blue']],
            ],
            0,
          ],
          0,
          1,
        ],
      ],
    }
  },
];

const center = [-20.12, 63.54]; 
const zoom = 7;

/** @type {import('vue').Ref<import("@eox/map").EOxMap>} */
const eoxMap = useTemplateRef("eoxMap");
/** @type {import('vue').Ref<import("@eox/layercontrol").EOxLayerControl>} */
const eoxLayercontrol = useTemplateRef("eoxLayercontrol");

onMounted(() => {
  nextTick(() => {
    if(!eoxMap.value) return
    //@ts-expect-error
    eoxMap.value.layers = layers;
    eoxMap.value.center = center;
    eoxMap.value.zoom = zoom;
    eoxLayercontrol.value.for = "eox-map#map-layerconfig";
  });
});
</script>

## Advanced Visualization with Layer Config

This tutorial demonstrates the **layerConfig** pattern - EOxElements' declarative approach for building dynamic visualization dashboards. By embedding JSON Schema configurations directly in layer properties, you create interactive controls without additional components.

**What You'll Build:** A GeoZarr visualization dashboard where the layer control provides built-in configuration tools for band selection, gamma correction, and brightness adjustment - all defined declaratively in the layer configuration.

<Tutorial height="650px">
  <template #description>

The **layerConfig** approach embeds form schemas directly in layer properties. 
The eox-layercontrol automatically renders configuration tools based on these schemas,
enabling dynamic style and source updates without custom form components.
  
</template>

  <template #demo>
    <ClientOnly>
    <eox-layout gap="8" class="surface-variant" style="height: 650px;">
        <eox-layout-item x="0" y="0" w="3" h="12">
            <div class="card fill">
                <div class="padding">
                    <eox-layercontrol 
                        ref="eoxLayercontrol"
                        class="scroll"
                        :tools='["config", "opacity", "info", "legend"]'
                    ></eox-layercontrol>
                </div>
            </div>
        </eox-layout-item>
        <eox-layout-item x="3" y="0" w="9" h="12">
            <eox-map
                ref="eoxMap"
                id="map-layerconfig"
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
<eox-layout gap="8" style="height: 600px;">
  <eox-layout-item x="0" y="0" w="3" h="12">
    <div class="card fill">
      <!-- Layer Control with config tool enabled -->
      <div class="padding">
        <eox-layercontrol 
          for="#map"
          tools='["config", "opacity", "info", "legend"]'
        ></eox-layercontrol>
      </div>
    </div>
  </eox-layout-item>
  
  <eox-layout-item x="3" y="0" w="9" h="12">
    <!-- Map element -->
    <eox-map
      id="map"
      class="fill"
      .center="[-20.12, 63.54]"
      .zoom="10"
    ></eox-map>
  </eox-layout-item>
</eox-layout>

<script type="module" src="config.js"></script>
```

```javascript [config.js]
import "@eox/map/dist/eox-map.js";
import "@eox/layercontrol/dist/eox-layercontrol.js";
import "@eox/jsonform"; // Required for config tool
import "@eox/layout"; // Layout architecture

// Layer configuration with embedded schema
export const layers = [
  {
    type: "Tile",
    properties: { 
      id: "basemap",
      title: "OpenStreetMap" 
    },
    source: { 
      type: "OSM",
    }
  },
  {
    type: "WebGLTile",
    properties: {
      id: "s2-layer",
      title: "Sentinel-2 GeoZarr",
      layerControlExpand: true,
      layerControlToolsExpand: true,
      // Layer Config embedded in layer properties
      layerConfig: {
        type: "style",  // Updates style variables
        schema: {
          type: "object",
          title: "Visualization Settings",
          properties: {
            red: {
              title: "Red Channel",
              type: "number",
              enum: [1, 2, 3, 4],
              options: {
                enum_titles: ["Blue (B02)", "Green (B03)", "Red (B04)", "SWIR (B11)"]
              },
              default: 3
            },
            green: {
              title: "Green Channel",
              type: "number",
              enum: [1, 2, 3, 4],
              options: {
                enum_titles: ["Blue (B02)", "Green (B03)", "Red (B04)", "SWIR (B11)"]
              },
              default: 2
            },
            blue: {
              title: "Blue Channel",
              type: "number",
              enum: [1, 2, 3, 4],
              options: {
                enum_titles: ["Blue (B02)", "Green (B03)", "Red (B04)", "SWIR (B11)"]
              },
              default: 1
            },
            redMax: {
              title: "Red Max Value",
              type: "number",
              minimum: 0.1,
              maximum: 1,
              default: 0.5,
              format: "range"
            },
            greenMax: {
              title: "Green Max Value",
              type: "number",
              minimum: 0.1,
              maximum: 1,
              default: 0.5,
              format: "range"
            },
            blueMax: {
              title: "Blue Max Value",
              type: "number",
              minimum: 0.1,
              maximum: 1,
              default: 0.5,
              format: "range"
            },
            gamma: {
              title: "Gamma Correction",
              type: "number",
              minimum: 0.5,
              maximum: 3.0,
              default: 1.5,
              step:0.1,
              format: "range"
            }
          }
        },
        legend: {
          title: "Sentinel-2 RGB Composite",
          domain: ["Low", "High"],
          range: ["#000000", "#FFFFFF"]
        }
      }
    },
    source: {
      type: "GeoZarr",
      url: "https://s3.explorer.eopf.copernicus.eu/esa-zarr-sentinel-explorer-fra/tests-output/sentinel-2-l2a/S2B_MSIL2A_20260120T125339_N0511_R138_T27VWL_20260120T131151.zarr",
      group: "measurements/reflectance",
      bands: ["b04", "b03", "b02", "b11"]
    },
    style: {
      // Variables that can be updated by layerConfig
      variables: {
        gamma: 1.5,
        red: 1,
        green: 2,
        blue: 3,
        redMax: 0.5,
        greenMax: 0.5,
        blueMax: 0.5
      },
      gamma: ["var", "gamma"],
      color: [
        "array",
        ["/", ["band", ["var", "red"]], ["var", "redMax"]],
        ["/", ["band", ["var", "green"]], ["var", "greenMax"]],
        ["/", ["band", ["var", "blue"]], ["var", "blueMax"]],
        // Alpha channel (nodata mask)
        [
          "case",
          ["==", ["+", ["band", ["var", "red"]], ["band", ["var", "green"]], ["band", ["var", "blue"]]], 0],
          0, 
          1
        ]
      ]
    }
  }
];

const eoxMap = document.querySelector("eox-map");
Object.assign(eoxMap, { 
  layers,
  });
```
:::

  </template>
</Tutorial>

<style scoped>
.panel {
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
}

.panel h3 {
  margin-top: 0;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.panel .hint {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
}
</style>

### Key Concepts: Layer Config Pattern

The **layerConfig** pattern provides a declarative way to create dynamic layer controls. It utilizes [json-editor](https://github.com/json-editor/json-editor) via `@eox/jsonform` to render forms directly from your schema.

| Property | Type | Description |
|----------|------|-------------|
| `layerConfig.type` | `"style"` | Updates style variables when form changes |
| `layerConfig.schema` | JSON Schema | Defines the form structure using [json-editor supported schemas](https://github.com/json-editor/json-editor?tab=readme-ov-file#supported-schemas) |
| `layerConfig.legend` | Object | Optional legend configuration with title, domain, range |
| `layerControlExpand` | Boolean | Auto-expand this layer in the control |
| `layerControlToolsExpand` | Boolean | Auto-expand the tools section |

### Schema Format Options

The `schema` respects JSON Schema standards and `json-editor` extensions. The `format` property controls how inputs are rendered:

| Format | Renders As | Use Case |
|--------|-----------|----------|
| `"range"` | Slider | Numeric values with min/max |
| `"minmax"` | Paired sliders | Dynamic range selection |
| (none) | Dropdown | Enumerated string values (`enum`) |
| (none) | Number input | Numeric without range |

### Tool Configuration

Enable tools on the layer control via the `tools` property:

```javascript
tools: ["config", "opacity", "info", "legend", "datetime", "remove"]
```

| Tool | Description |
|------|-------------|
| `config` | Renders form from layerConfig schema |
| `opacity` | Slider for layer opacity |
| `info` | Shows layer description |
| `legend` | Renders color legend from layerLegend |
| `datetime` | Time slider from layerDatetime |
| `remove` | Button to remove layer |


### Next Steps

Continue to the [3D Globe](./globe) tutorial to learn how to visualize data on a 3D globe with terrain handling.

For more details and documentation, visit the [EOxElements Documentation](https://eox-a.github.io/EOxElements/).

<nav class="surface-variant large-padding center-align">
  <a href="./basic" class="button border">← Basic Tutorial</a>
  <span class="padding"><strong>2 of 4</strong> - Layer Config</span>
  <a href="./globe" class="button border">Next: 3D Globe →</a>
</nav>
