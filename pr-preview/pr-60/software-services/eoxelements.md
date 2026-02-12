---
url: /pr-preview/pr-60/software-services/eoxelements.md
---

## EOxElements&#x20;

### Overview

The **EOxElements** is a comprehensive suite of [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) designed specifically for Earth Observation (EO) data visualization. By encapsulating complex domain-specific logic into declarative HTML tags, it enables developers to build powerful geospatial applications with minimal code.

Key components in the suite include:

* **`<eox-map>`**: A powerful  **[OpenLayers](/software-services/ol/)** wrapper for declarative mapping.
* **`<eox-layercontrol>`**: Layer management with support for optional/exclusive layers and tools.
* **`<eox-timecontrol>`**: Interactive time slider and timeline for temporal data navigation.
* **`<eox-chart>`**: Vega-Lite based charting for data visualization.
* **`<eox-drawtools>`**: Vector feature drawing and editing.
* **`<eox-jsonform>`**: Dynamic forms generated from JSON schemas.
* **`<eox-storytelling>`**: Scrollytelling interfaces with map interactions.

::: info&#x20;**&#x20;What You'll Learn**
This integration guide covers building interactive geospatial applications using EOxElements with EOPF's GeoZarr-formatted Sentinel-2 data. Learn to create declarative map configurations, dynamic visualizations, and storytelling experiences using web components that work in any framework.

**Sample Data** used here are available in [the Sentinel-2 L2A collection in STAC Browser](https://api.explorer.eopf.copernicus.eu/browser/external/api.explorer.eopf.copernicus.eu/stac/collections/sentinel-2-l2a)
:::

### Quick Start

::: info&#x20;**&#x20;Get Started in 5 Minutes**
Ready to dive in? Start with the [Basic Tutorial](./basic) to render a Sentinel-2 GeoZarr layer with controls, then explore advanced JSON Forms integration and storytelling layouts.
:::

### Installation

::: info NPM (Recommended)

```bash
npm install @eox/map @eox/layercontrol @eox/drawtools
npm install @eox/jsonform @eox/timecontrol @eox/layout
```

:::

::: info CDN (Quick Testing)

```html
<script type="module" src="https://unpkg.com/@eox/map"></script>
<script type="module" src="https://unpkg.com/@eox/layercontrol"></script>
```

:::

::: warning :warning: **GeoZarr Support**
GeoZarr source requires `@eox/map` v2.1.0 or later. The GeoZarr source functionality is still experimental, conforming to the evolving GeoZarr specification.
:::

### Key Concepts

**Declarative Map Configuration**

EOxElements uses a JSON-based configuration approach. Instead of writing imperative code, you define your map state as data:

```javascript
// Configure layers, sources, and styles declaratively
const layers = [{
  type: "WebGLTile",
  source: {
    type: "GeoZarr",
    url: "https://path/to/data.zarr",
    group: "measurements/reflectance",
    bands: ["b04", "b03", "b02"]
  },
  style: { gamma: 1.5 }
}];
```

**Web Components Architecture**

EOxElements components work in any framework (Vue, React, Angular, vanilla JS).

**Component Linking**

Link controls to maps using the `for` attribute:

```html
<eox-layercontrol for="#my-map"></eox-layercontrol>
<eox-map id="my-map"></eox-map>
```

### Coding with AI

EOxElements is designed to be AI-friendly, supporting the **Model Context Protocol (MCP)** to assist developers in building applications faster.

**EOxElements MCP Server**
The [EOxElements MCP Server](https://eox-a.github.io/EOxElements/?path=/docs/coding-agents--docs) allows AI coding agents (like Cursor, Windsurf, or generic LLMs) to:

* List available web components and their capabilities.
* Retrieve full API documentation, properties, and events for specific elements.
* Access usage examples and "stories" to generate accurate implementation code.

If you are using an AI assistant, you can point it to the **[LLM Documentation](https://eox-a.github.io/EOxElements/llms.txt)**, a condensed reference file optimized for Large Language Models to understand the library's context and component APIs efficiently, or to use the MCP server without installing anything locally, you can point your coding agent to our hosted endpoint `https://elements.mcp.eox.at`.

### Next Steps

1. **Start with Examples**: Work through each [tutorial](#integration-examples) to understand the capabilities
2. **Explore EOPF Data**: Browse available datasets in the [STAC Browser](https://api.explorer.eopf.copernicus.eu/browser)
3. **Read Component Docs**: Visit the [EOxElements Storybook](https://eox-a.github.io/EOxElements/) for API reference
4. **Build Applications**: Create your own EO applications with declarative configurations
5. **Community**: Join [discussions](https://discourse.eopf.copernicus.eu/c/eopf-explorer/17) and contribute to the growing EOPF ecosystem

For more information, visit the [EOxElements GitHub repository](https://github.com/EOX-A/EOxElements) and the [EOPF Explorer project](https://github.com/EOPF-Explorer).
