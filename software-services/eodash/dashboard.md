---
title: eodash Tutorial
layout: page
---

<script setup>
const config = async() => (await import("./dashboard-config.js")).default
</script>

## Web Component Dashboard Tutorial <img src="https://eodash.org/eodash_logo.png" alt="EODash Logo" style="height:60px;vertical-align:middle;margin-left:0.5rem;float:right;" />

This hands-on tutorial demonstrates how to embed a fully functional Earth Observation dashboard into your application using the **EODash Web Component**.

By default, connecting to the EOPF STAC API allows the dashboard to automatically discover Collections and Items, rendering filters and maps without any additional glue code.

<Tutorial demoHeight="600px">
 <template #description>

### Dashboard Features

- **Standard-Based**: Consumes STAC directly to populate UI.
- **Responsive Grid**: `template.widgets.layout` defines the layout grid.
- **Extensible**: Add custom widgets or use built-in ones (Map, LayerControl, DatePicker).
 
 </template>
  <template #demo>
    <ClientOnly>
      <div style="height: 600px;">
        <eo-dash style="height: 600px !important" .config="config"></eo-dash>
      </div>
    </ClientOnly>
  </template>

  <template #code>

::: code-group

```html [index.html]
<head>
  <!-- Load the bundled web component -->
  <link rel="stylesheet" href="https://unpkg.com/@eodash/eodash/dist/style.css" />
  <script type="module" src="https://unpkg.com/@eodash/eodash/dist/eodash.js"></script>
</head>

<body>
  <!-- Pass configuration via property -->

  <eo-dash style="height:100vh;" .config="config"></eo-dash>  
  
  <script type="module">
    
    const dashboard = document.getElementById('dashboard');
    dashboard.config = async() => (await import("./config.js")).default;
  </script>
</body>
```

```javascript [config.js]

export default {
  id: "my-dashboard",
  stacEndpoint: {
    endpoint: "https://api.explorer.eopf.copernicus.eu/stac",
    api: true
  },
  // Custom Branding
  brand: {
    noLayout: true,
    name: "My EO Dashboard",
    font: { family: "Poppins" },
    theme: {
      colors: {
        primary: "#004170",
        secondary: "#00417044",
        surface: "#ffffff",
      },
    },
    footerText: "Powered by EOPF",
  },

  // Explicit Layout Configuration
  template: {
    background: {
      id: "background-map",
      type: "internal",
      widget: {
        name: "EodashMap",
      },
    },
    widgets: [
      {
        id: "filters",
        type: "internal",
        title: "Filters",
        layout: { x: 0, y: 0, w: 3, h: 12 },
        widget: {
          name: "EodashItemCatalog",
        },
      },
      {
        id: "layers",
        type: "internal",
        title: "Layers",
        layout: { x: 9, y: 0, w: 3, h: 12 },
        widget: {
          name: "EodashLayerControl",
        },
      },
    ],
  },
};
```

:::

  </template>
</Tutorial>

### Key Concepts

**Widget Interactivity**

Widgets in eodash are not isolated; they share a central state. When you configure an `EodashItemCatalog` and an `EodashMap` with the same STAC endpoint, they automatically synchronize:
- **Filtering**: Selecting a date or cloud cover range in the filter updates the map's WMS/WMTS layers.
- **Spatial Search**: Panning the map can trigger updates in the item list.

**Grid Layout System**

The dashboard uses a responsive 12-column grid system. Widgets are positioned using `x`, `y`, `w` (width), and `h` (height) coordinates:

```javascript
layout: { x: 0, y: 0, w: 3, h: 12 } // Occupies the first 3 columns, full height
```

**STAC Connection**

The `stacEndpoint` configuration acts as the single source of truth. eodash queries this endpoint to:
1.  Discover available collections.
2.  Fetch metadata for filters.
3.  Determines available visualisations (Web Map Layers) from STAC Assets.

### Templates

To accelerate development, `eodash` provides pre-configured templates that can be extended or used as-is.

**Using `getBaseConfig`**

You can use the `getBaseConfig` utility to inherit from a base template while overriding specific properties:

```javascript
import { getBaseConfig } from "@eodash/eodash/templates";

export default getBaseConfig({
  stacEndpoint: "https://my.endpoint.com/stac/catalog.json",
  brand: {
    name: "My Custom Explorer",
  }
});
```

**Available Templates**

- **`lite`**: A minimal configuration suitable for simple data catalogs.
- **`explore`**: A layout optimized for exploring scenes using STAC Items, tailored for eoAPI instances.
- **`expert`**: An advanced configuration with comprehensive tools for power users, that displays collections in a thematic showcase.

### Next Steps

- **Custom Widgets**: Learn to build your own widgets using Vue.js or Web Components.
- **Theming**: Customize the look and feel to match your brand identity.
- **Deploy**: Publish your dashboard as a standalone app or embed it in existing portals.

<nav class="surface-variant large-padding center-align">
  <a href="../" class="button border">← Back to Overview</a>
</nav>
