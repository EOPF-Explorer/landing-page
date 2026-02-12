---
url: /pr-preview/pr-60/software-services/eoxelements/story.md
---

## Storytelling with EOxStoryTelling &#x20;

This tutorial demonstrates how to use the **eox-storytelling** component to build narrative map tours with minimal configuration using Markdown.

**What You'll Build:** A guided tour showing different spectral visualizations of the same Sentinel-2 GeoZarr data, entirely configured via Markdown.

The **eox-storytelling** component interprets Markdown to create interactive stories.
By using custom HTML comments `<!--{ ... }-->`, you can define map sections and control the view state (center, zoom, layers) for each step of the tour.

\<template #code>

::: code-group

```html [index.html]
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EOxElements Storytelling</title>
    <!-- Optional: import using a CDN or NPM -->
    <script src="https://unpkg.com/@eox/storytelling" type="module"></script>
    <script src="https://unpkg.com/@eox/map" type="module"></script>
</head>
<body>
    <!-- Pass markdown content to the component -->
    <eox-storytelling id="story"></eox-storytelling>
    <script type="module" src="./main.js"></script>
</body>
</html>
```

```javascript [main.js]
import "@eox/storytelling";
import "@eox/map";
import "@eox/map/src/plugins/advancedLayersAndSources";

const urlNapoli = "https://s3.explorer.eopf.copernicus.eu/esa-zarr-sentinel-explorer-fra/tests-output/sentinel-2-l2a-staging/S2A_MSIL2A_20251227T100441_N0511_R122_T33TVF_20251227T121715.zarr";

function createLayers(url, bands) {
  return JSON.stringify([
    {
      type: "Tile",
      properties: { title: "OpenStreetMap", id: "osm" },
      source: {
        type: "XYZ",
        url: "https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg"
      }
    },
    {
      type: "WebGLTile",
      properties: {
          id: "sentinel-layer",
          title: "Sentinel-2 GeoZarr",
      },
      source: {
          type: "GeoZarr",
          url: url,
          group: "measurements/reflectance",
          bands: bands,
      },
      style:  {
            gamma: 1.5,
            color: [
              "color",
              ["interpolate", ["linear"], ["band", 1], 0, 0, 0.5, 255],
              ["interpolate", ["linear"], ["band", 2], 0, 0, 0.5, 255],
              ["interpolate", ["linear"], ["band", 3], 0, 0, 0.5, 255],
              [
                "case",
                ["==", ["+", ["band", 1], ["band", 2], ["band", 3]], 0],
                0,
                1,
              ],
            ],
          },
    }
  ]);
}

const markdown = `
# Sentinel-2 Band Comparison

This story demonstrates visualizing different band combinations of Sentinel-2 data using **EOxElements**.

## Band Combinations <!--{ as="eox-map" mode="tour" projection="EPSG:3857" }-->

### <!--{ layers='${createLayers(urlNapoli, ["b04", "b03", "b02"])}' center='[14.24, 40.83]' zoom='11' }-->
#### True Color (RGB)
**Bands: Red (B04), Green (B03), Blue (B02)**
This natural color composite shows the area as seen by the human eye.

### <!--{ layers='${createLayers(urlNapoli, ["b12", "b8a", "b04"])}' center='[14.24, 40.83]' zoom='11' animationOptions="{'duration': 1000}" }-->
#### Short-Wave Infrared (SWIR)
**Bands: SWIR2 (B12), NIR2 (B8A), Red (B04)**
Useful for penetrating atmospheric haze and highlighting moisture.
`;

document.querySelector("#story").markdown = markdown;
```

:::

### Key Features

* **Markdown-Driven**: define your story structure and content in plain Markdown.
* **Scrollytelling**: Automatically syncs map state with scrolling text.
* **Minimal Config**: No complex JavaScript or Layout setup required.

### Next Steps

For more details and documentation, visit the [EOxElements Documentation](https://eox-a.github.io/EOxElements/).
