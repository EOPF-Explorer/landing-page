---
title: EOxElements Jupyter
layout: page
---

## EOxElements Jupyter <img src="/media/eoxelements-jupyter.png" alt="EOxElements-Jupyter Logo" style="height:70px;vertical-align:middle;margin-left:0.5rem;float:right;" />

### Overview

**EOxElements Jupyter** (`ipyeoxelements`) is a Python package that brings [EOxElements](../eoxelements/) web components directly into Jupyter Notebooks. Built on [anywidget](https://anywidget.dev/), it provides a Pythonic API for visualizing **GeoZarr**, STAC, and Sentinel data using the same web components powering this site -- no JavaScript required.

Key components available as Python classes:

- **`EOxMap`**: Interactive geospatial map with GeoZarr, XYZ, and STAC sources.
- **`EOxLayercontrol`**: Layer management panel linked to a map instance.
- **`EOxChart`**: Interactive charts powered by [Vega-Lite](https://vega.github.io/vega-lite/) specifications.

::: info **<i class="mdi mdi-target"></i> What You'll Learn**
Learn how to use EOxElements web components within a Python environment. This guide covers installation, the automatic mapping of Python classes to web components, and how to create interactive maps and charts directly in your Jupyter notebooks.
:::

### Installation

::: info **<i class="mdi mdi-download"></i> Get Started**
You can install the package via pip:
```bash
pip install ipyeoxelements
```
If you are already running a notebook, use the magic command to install it into the current kernel:
```python
%pip install ipyeoxelements
```
:::

<br/>

::: warning :warning: Restart Kernal
After installation, you **must restart the Jupyter Kernel** (Menu -> Kernel -> Restart Kernel) for the widget extension to be loaded correctly.
:::

### Key Concepts 

**Automatic component mapping**

EOxElements Jupyter is built on [anywidget](https://anywidget.dev/), which allows Python class names in CamelCase to map automatically to their kebab-case HTML counterparts. This ensures that the Python API stays perfectly in sync with the web components.

| Python Class | HTML Element |
| :--- | :--- |
| `EOxMap` | `<eox-map>` |
| `EOxChart` | `<eox-chart>` |
| `EOxLayercontrol` | `<eox-layercontrol>` |

**Layer configuration**

Layers are configured as Python dicts that mirror the JSON configuration used in the web component. This allows you to use the same GeoZarr or STAC configurations across both web and Jupyter environments:

```python
from ipyeoxelements import EOxMap

layers = [
    {
        "type": "Tile",
        "properties": {"id": "osm"},
        "source": {"type": "OSM"}
    },
    {
        "type": "STAC",
        "properties": {"id": "geozarr-layer", "title": "GeoZarr Data"},
        "url": "https://example.com/geozarr-item.json", # STAC Item pointing to GeoZarr
    }
]
map = EOxMap(layers=layers, zoom=5, center=[16, 48])
display(map)
```

**Interactive Charts**

You can also render interactive charts by passing a [Vega-Lite](https://vega.github.io/vega-lite/) specification:

```python
from ipyeoxelements import EOxChart

spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "mark": {"type": "bar", "tooltip": True, "fill": "#004170"},
    "data": {"values": [{"a": "A", "b": 28}, {"a": "B", "b": 55}, {"a": "C", "b": 43}]},
    "encoding": {
        "x": {"field": "a", "type": "ordinal"},
        "y": {"field": "b", "type": "quantitative"},
    },
}

chart = EOxChart(spec=spec, layout={"height": "400px"})
display(chart)
```

**Linking widgets**

Link `EOxLayercontrol` to a map using the `for_` parameter and standard `ipywidgets` containers for complex layouts:

```python
from ipywidgets import HBox
from ipyeoxelements import EOxMap, EOxLayercontrol

my_map = EOxMap(id="main-map", layers=[...])
control = EOxLayercontrol(for_="#main-map")

display(HBox([my_map, control]))
```

### Tutorials

Each EOxElements tutorial below includes a **Python (Jupyter)** tab alongside the HTML and JavaScript code. Switch between tabs to see the equivalent implementation in both environments. For the full source and development setup, visit the [EOxElements-Jupyter GitHub repository](https://github.com/EOX-A/EOxElements-Jupyter).


<FeaturesGallery
  background="transparent"
  sectionTitle="Integration Examples"
  :cards="[
    {
      title: '1. Basic Setup',
      content: 'Render a Sentinel-2 GeoZarr layer with an OpenStreetMap base layer and layer control.',
      features: [
        'GeoZarr Source',
        'EOxLayercontrol',
        'Group Layers',
        'Python + HTML tabs'
      ],
      link: {
        text: 'View Tutorial',
        href: '../eoxelements/basic',
        target: '_self'
      }
    },
    {
      title: '2. Advanced Visualization',
      content: 'Dynamic band selection and gamma control via the layerConfig pattern.',
      features: [
        'Band Combination Selector',
        'Gamma Slider',
        'layerConfig Schema',
        'Python + HTML tabs'
      ],
      link: {
        text: 'View Tutorial',
        href: '../eoxelements/advanced',
        target: '_self'
      }
    },
    {
      title: '3. 3D Globe',
      content: 'Render Sentinel-2 mosaic data on a 3D globe with terrain and city fly-tos.',
      features: [
        'Globe Projection',
        'Sentinel-2 Mosaic',
        'Terrain Rendering',
        'Python + HTML tabs'
      ],
      link: {
        text: 'View Tutorial',
        href: '../eoxelements/globe',
        target: '_self'
      }
    }
  ]"
/>
