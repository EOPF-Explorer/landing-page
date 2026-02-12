---
url: /pr-preview/pr-60/software-services/eoxelements/advanced.md
---

## Advanced Visualization with Layer Config &#x20;

This tutorial demonstrates the **layerConfig** pattern - EOxElements' declarative approach for building dynamic visualization dashboards. By embedding JSON Schema configurations directly in layer properties, you create interactive controls without additional components.

**What You'll Build:** A GeoZarr visualization dashboard where the layer control provides built-in configuration tools for band selection, gamma correction, and brightness adjustment - all defined declaratively in the layer configuration.

The **layerConfig** approach embeds form schemas directly in layer properties.
The eox-layercontrol automatically renders configuration tools based on these schemas,
enabling dynamic style and source updates without custom form components.

\<template #demo>
















\<template #code>

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
import "@eox/map";
import "@eox/map/src/plugins/advancedLayersAndSources"
import "@eox/layercontrol";
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
      type: "XYZ",
      url: "https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg"
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
