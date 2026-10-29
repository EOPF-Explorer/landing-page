import { defineLoader } from "vitepress";

/** Example cards of the tutorial pages, keyed by page */
/** @type {import("./tutorials.data").Tutorials} */
const tutorials = {
  titiler: [
    {
      title: "1. RGB Band Combinations",
      content:
        "Learn to create true color and false color visualizations using Titiler's tile endpoints with OpenLayers or Leaflet.",
      features: [
        "True color RGB (B04, B03, B02)",
        "False color infrared composites",
        "Color enhancement formulas",
        "Web mapping integration",
      ],
      link: {
        text: "View Example",
        href: "/software-services/titiler/rgb",
        target: "_self",
      },
    },
    {
      title: "2. Vegetation Indices",
      content:
        "Calculate vegetation indices server-side using mathematical expressions and visualize with custom color schemes.",
      features: [
        "Real-time NDVI calculation",
        "Server-side expressions",
        "Custom color mapping",
        "Environmental monitoring",
      ],
      link: {
        text: "View Example",
        href: "/software-services/titiler/ndvi",
        target: "_self",
      },
    },
    {
      title: "3. Spatial Cropping",
      content:
        "Extract specific areas from satellite scenes using bounding box and feature-based spatial operations.",
      features: [
        "Bounding box cropping",
        "Polygon-based extraction",
        "Coordinate system handling",
        "Export capabilities",
      ],
      link: {
        text: "View Example",
        href: "/software-services/titiler/crop",
        target: "_self",
      },
    },
  ],
  eoxelements: [
    {
      title: "1. Basic Usage",
      content:
        "Learn the fundamentals of rendering GeoZarr data with a layer control and drawing tools.",
      features: [
        "Layer Control",
        "Draw Tools",
        "GeoZarr Source Configuration",
        "Basic Map Setup",
      ],
      link: {
        text: "View Tutorial",
        href: "/software-services/eoxelements/basic",
        target: "_self",
      },
    },
    {
      title: "2. Advanced Visualization",
      content:
        "Create interactive dashboards with JSON Forms to control band combinations and arithmetic indices.",
      features: [
        "JSON Forms Integration",
        "Dynamic Band Combinations",
        "Spectral Indices (NDVI/NDWI)",
        "Time Control",
      ],
      link: {
        text: "View Tutorial",
        href: "/software-services/eoxelements/advanced",
        target: "_self",
      },
    },
    {
      title: "3. 3D Globe Visualization",
      content:
        "Experience 3D visualization with terrain rendering, camera tours, and seamless 2D/3D projection switching.",
      features: [
        "Hybrid 3D Engine",
        "Terrain Visualization",
        "Interactive Tours",
        "Projection Switching",
      ],
      link: {
        text: "View Tutorial",
        href: "/software-services/eoxelements/globe",
        target: "_self",
      },
    },
    {
      title: "4. Storytelling",
      content:
        "Build immersive map tours and stories using EOxLayout and globe projections.",
      features: [
        "Interactive Map Tour",
        "Globe Projection (EPSG:4326)",
        "Sidebar Layout",
        "Animation Control",
      ],
      link: {
        text: "View Tutorial",
        href: "/software-services/eoxelements/story",
        target: "_self",
      },
    },
  ],
  ol: [
    {
      title: "1. Basic Map Setup and band combination",
      content:
        "Learn the fundamental configuration needed to load and display EOPF Zarr data with OpenLayers.",
      features: [
        "Minimal configuration",
        "OSM base layer integration",
        "Automatic extent fitting",
        "WebGL rendering",
      ],
      link: {
        text: "View Example",
        href: "/software-services/ol/basic",
        target: "_self",
      },
    },
    {
      title: "2. NDVI Calculation",
      content:
        "Perform real-time vegetation index calculations directly in the browser using WebGL expressions.",
      features: [
        "Real-time NDVI calculation",
        "Vegetation classification",
        "Agricultural applications",
        "Environmental monitoring",
      ],
      link: {
        text: "View Example",
        href: "/software-services/ol/ndvi",
        target: "_self",
      },
    },
    {
      title: "3. STAC Catalog Integration",
      content:
        "Search and visualize Sentinel data from EOPF's STAC catalog using spatial-temporal filters.",
      features: [
        "STAC API integration",
        "Spatial-temporal search",
        "Scene footprints display",
        "Interactive data discovery",
      ],
      link: {
        text: "View Example",
        href: "/software-services/ol/stac",
        target: "_self",
      },
    },
  ],
  eodash: [
    {
      title: "Web Component Tutorial",
      content:
        "Learn how to embed a full STAC-powered dashboard into your application using the eo-dash web component.",
      features: [
        "Web Component",
        "STAC Integration",
        "Custom Branding",
        "Widget Layout",
      ],
      link: {
        text: "Start Tutorial",
        href: "/software-services/eodash/dashboard",
        target: "_self",
      },
    },
  ],
  jupyter: [
    {
      title: "1. Basic Setup",
      content:
        "Render a Sentinel-2 GeoZarr layer with an OpenStreetMap base layer and layer control.",
      features: [
        "GeoZarr Source",
        "EOxLayercontrol",
        "Group Layers",
        "Python + HTML tabs",
      ],
      link: {
        text: "View Tutorial",
        href: "/software-services/eoxelements/basic",
        target: "_self",
      },
    },
    {
      title: "2. Advanced Visualization",
      content:
        "Dynamic band selection and gamma control via the layerConfig pattern.",
      features: [
        "Band Combination Selector",
        "Gamma Slider",
        "layerConfig Schema",
        "Python + HTML tabs",
      ],
      link: {
        text: "View Tutorial",
        href: "/software-services/eoxelements/advanced",
        target: "_self",
      },
    },
    {
      title: "3. 3D Globe",
      content:
        "Render Sentinel-2 mosaic data on a 3D globe with terrain and city fly-tos.",
      features: [
        "Globe Projection",
        "Sentinel-2 Mosaic",
        "Terrain Rendering",
        "Python + HTML tabs",
      ],
      link: {
        text: "View Tutorial",
        href: "/software-services/eoxelements/globe",
        target: "_self",
      },
    },
  ],
};

export default defineLoader({
  load() {
    return tutorials;
  },
});
