import { mdiMapSearch } from "@mdi/js";

const baseLayers = [
  {
    type: "Group",
    properties: {
      id: "BaseLayersGroup",
      title: "Base Layers",
    },
    layers: [
      {
        type: "Tile",
        properties: {
          id: "OSM;:;EPSG:3857",
          title: "OSM Background",
          roles: ["baselayer", "invisible"],
          group: "baselayer",
          visible: false,
          layerControlExclusive: true,
        },
        source: {
          type: "XYZ",
          url: "https://{a-e}.s2maps-tiles.eu/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpeg",
          projection: "EPSG:3857",
        },
        preload: Infinity,
      },
      {
        type: "Tile",
        properties: {
          id: "terrain-light;:;EPSG:3857",
          title: "Terrain Light",
          roles: ["baselayer", "visible"],
          group: "baselayer",
          visible: true,
          layerControlExclusive: true,
        },
        source: {
          type: "XYZ",
          url: "https://{a-e}.s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpeg",
          projection: "EPSG:3857",
        },
        preload: Infinity,
      },
      {
        type: "Tile",
        properties: {
          id: "cloudless-2024;:;EPSG:3857",
          title: "EOxCloudless 2024",
          roles: ["baselayer", "invisible"],
          group: "baselayer",
          visible: false,
          layerControlExclusive: true,
        },
        source: {
          type: "XYZ",
          url: "https://{a-e}.s2maps-tiles.eu/wmts/1.0.0/s2cloudless-2024_3857/default/g/{z}/{y}/{x}.jpeg",
          projection: "EPSG:3857",
        },
        preload: Infinity,
      },
    ],
    interactions: [],
  },
];
export default /*** @type {import("@eodash/eodash").Eodash} */ ({
  id: "eopf",
  stacEndpoint: {
    endpoint: "https://api.explorer.eopf.copernicus.eu/stac",
    api: true,
    rasterEndpoint: "https://api.explorer.eopf.copernicus.eu/raster/",
    mosaicEndpoint: "https://api.explorer.eopf.copernicus.eu/raster/",
    supportedUpscalingEndpoints: ["api.explorer.eopf.copernicus.eu/raster/"],
  },
  brand: {
    name: "Sentinel Explorer",
    noLayout: true,
    font: {
      body: {
        family: "Open Sans",
        link: "/fonts/Open_Sans/opensans.css",
      },
      headers: {
        family: "Exo 2",
        link: "/fonts/Exo_2/exo2.css",
      },
    },
    theme: {
      colors: {
        primary: "#003047",
        secondary: "#00ae9d",
      },
      variables: {
        "surface-opacity": 0.6,
        "primary-opacity": 0.6,
      },
    },
    logo: "https://hub-brands.eox.at/eopf/eopf-explorer-white.svg",
  },
  templates: {
    explore: {
      gap: 16,
      loading: {
        id: "loading",
        type: "web-component",
        widget: {
          // https://uiball.com/ldrs/
          link: "https://cdn.jsdelivr.net/npm/ldrs/dist/auto/mirage.js",
          tagName: "l-mirage",
          properties: {
            class: "align-self-center justify-self-center",
            size: "120",
            speed: "2.5",
            color: "#004170",
          },
        },
      },
      background: {
        id: "explore-background-map",
        type: "internal",
        widget: {
          name: "EodashMap",
          properties: {
            zoomToExtent: true,
            enableCompare: true,
            btns: {
              enableZoom: true,
              enableExportMap: true,
              enableChangeProjection: true,
              enableMosaic: false,
              enableCompareIndicators: {
                fallbackTemplate: "explore",
                compareTemplate: "compare",
                itemFilterConfig: {
                  imageProperty: "assets.thumbnail.href",
                },
              },
              enableBackToPOIs: false,
              enableSearch: false,
            },
            baseLayers,
          },
        },
      },
      widgets: [
        {
          id: "explore-layercontrol",
          type: "internal",
          title: "Layers",
          layout: { x: "9/9/10", y: 0, w: "3/3/2", h: 7 },
          widget: {
            name: "EodashLayerControl",
            properties: {
              tools: ["info", "config", "legend", "opacity"],
            },
          },
        },
        {
          id: "StacInfo",
          type: "internal",
          title: "Information",
          layout: { x: "9/9/10", y: 7, w: "3/3/2", h: 5 },
          widget: {
            name: "EodashStacInfo",
            properties: {
              level: "item",
              allowHtml: true,
              header: ["collection"],
              // tags:["instruments"],
              body: [
                "datetime",
                "platform",
                "constellation",
                "instruments",
                "eo:cloud_cover",
                "processing:level",
                "product:type",
                "eo:snow_cover",
                "view:sun_elevation",
                "processing:facility",
              ],
              footer: ["providers"],
              featured: [
                "id",
                "processing:software",
                { key: "assets", filter: (asset) => !!asset },
                {
                  key: "links",
                  filter: (link) =>
                    link.rel == "self" ||
                    (!!link.title && !["xyz", "tilejson"].includes(link.rel)),
                },
              ],
            },
          },
        },
        {
          id: "ItemCatalog",
          title: "Catalog",
          type: "internal",
          layout: { x: 0, y: 0, w: "3/3/2", h: 11 },
          widget: {
            name: "EodashItemCatalog",
            properties: {
              layoutTarget: "mosaic",
              hoverProperties: ["datetime", "eo:cloud_cover"],
            },
          },
        },
      ],
    },
    mosaic: {
      loading: {
        id: "loading",
        type: "web-component",
        widget: {
          // https://uiball.com/ldrs/
          link: "https://cdn.jsdelivr.net/npm/ldrs/dist/auto/mirage.js",
          tagName: "l-mirage",
          properties: {
            class: "align-self-center justify-self-center",
            size: "120",
            speed: "2.5",
            color: "#004170",
          },
        },
      },
      background: {
        id: "mosaic-background-map",
        type: "internal",
        widget: {
          name: "EodashMap",
          properties: {
            zoomToExtent: true,
            enableCompare: true,
            btns: {
              enableZoom: true,
              enableExportMap: true,
              enableChangeProjection: true,
              enableCompareIndicators: {
                fallbackTemplate: "explore",
                compareTemplate: "compare",
                itemFilterConfig: {
                  imageProperty: "assets.thumbnail.href",
                },
              },
              enableBackToPOIs: false,
              enableSearch: false,
            },
            baseLayers,
          },
        },
      },
      widgets: [
        {
          id: "mosaic-layercontrol",
          type: "internal",
          title: "Layers",
          layout: { x: 0, y: 0, w: "3/3/2", h: 7 },
          widget: {
            name: "EodashLayerControl",
            properties: {
              onVnodeBeforeMount: async () => {
                if (
                  window.eodashStore.states.indicator.value !== "sentinel-2-l2a"
                ) {
                  await window.eodashStore.stac
                    .useSTAcStore()
                    .loadSelectedSTAC("sentinel-2-l2a");
                }
              },
              layoutTarget: "explore",
              layoutIcon: mdiMapSearch,
            },
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: "Information",
                  title: "Information",
                  layout: { x: "9/9/10", y: 0, w: "3/3/2", h: 8 },
                  type: "internal",
                  widget: {
                    name: "EodashStacInfo",
                    body: ["description"],
                    featured: [
                      "satellite",
                      "sensor",
                      "agency",
                      "extent",
                      "providers",
                      "assets",
                      "links",
                    ],
                  },
                }
              : null;
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: "mosaic-datetime",
                  type: "internal",
                  layout: { x: 1, y: 8, w: 10, h: 3 },
                  title: "Time Slider",
                  widget: {
                    name: "EodashTimeSlider",
                    properties: {
                      animate: false,
                      useMosaic: true,
                      filters: [
                        {
                          key: "eo:cloud_cover",
                          title: "Cloud Coverage %",
                          type: "range",
                          expanded: true,
                          min: 0,
                          max: 100,
                          step: 5,
                          state: {
                            min: 0,
                            max: 100,
                          },
                        },
                      ],
                    },
                  },
                }
              : null;
          },
        },
      ],
    },
    compare: {
      gap: 16,
      loading: {
        id: "loading",
        type: "web-component",
        widget: {
          // https://uiball.com/ldrs/
          link: "https://cdn.jsdelivr.net/npm/ldrs/dist/auto/mirage.js",
          tagName: "l-mirage",
          properties: {
            class: "align-self-center justify-self-center",
            size: "120",
            speed: "2.5",
            color: "#004170",
          },
        },
      },
      background: {
        id: "explore-background-map",
        type: "internal",
        widget: {
          name: "EodashMap",
          properties: {
            zoomToExtent: true,
            enableCompare: true,
            btns: {
              enableZoom: true,
              enableExportMap: true,
              enableChangeProjection: true,
              enableMosaic: false,
              enableCompareIndicators: {
                fallbackTemplate: "explore",
                compareTemplate: "compare",
                itemFilterConfig: {
                  imageProperty: "assets.thumbnail.href",
                },
              },
              enableBackToPOIs: false,
              enableSearch: false,
            },
            baseLayers,
          },
        },
      },
      widgets: [
        {
          id: "ItemCatalog",
          title: "Catalog",
          type: "internal",
          layout: { x: 0, y: 0, w: "3/3/2", h: 6 },
          widget: {
            name: "EodashItemCatalog",
            properties: {
              layoutTarget: "mosaic",
            },
          },
        },
        {
          id: "CompareItemCatalog",
          title: "Comparison Catalog",
          type: "internal",
          layout: { x: "9/9/10", y: 0, w: "3/3/2", h: 6 },
          widget: {
            name: "EodashItemCatalog",
            properties: {
              enableCompare: true,
              layoutTarget: "mosaic",
            },
          },
        },
        {
          id: "Layercontrol",
          type: "internal",
          title: "Layers",
          layout: { x: 0, y: 6, w: "3/3/2", h: 6 },
          widget: {
            name: "EodashLayerControl",
            properties: {
              tools: ["info", "config", "legend", "opacity"],
            },
          },
        },
        {
          id: "CompareLayerControl",
          title: "Comparison Layers",
          layout: { x: "9/9/10", y: 6, w: "3/3/2", h: 6 },
          type: "internal",
          widget: {
            name: "EodashLayerControl",
            properties: {
              map: "second",
              tools: ["info", "config", "legend", "opacity"],
            },
          },
        },
      ],
    },
  },
});
