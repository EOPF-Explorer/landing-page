import { mdiMapSearch } from "@mdi/js";

export default /*** @type {import("@eodash/eodash").Eodash} */ ({
  id: "eopf",
  stacEndpoint: {
    endpoint: "https://api.explorer.eopf.copernicus.eu/stac",
    api: true,
    rasterEndpoint: "https://api.explorer.eopf.copernicus.eu/raster/",
    mosaicEndpoint: "https://api.explorer.eopf.copernicus.eu/raster/",
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
        id: "background-map",
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
                itemFilterConfig: {
                  imageProperty: "assets.thumbnail.href",
                },
              },
              enableBackToPOIs: false,
              enableSearch: false,
            },
            initialLayers: [
              {
                type: "Tile",
                properties: {
                  id: "terrain-light;:;EPSG:3857",
                  title: "Terrain Light",
                },
                source: {
                  type: "XYZ",
                  url: "https://s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpeg",
                },
              },
            ],
          },
        },
      },
      widgets: [
        {
          id: "Layercontrol",
          type: "internal",
          title: "Layers",
          layout: { x: "9/9/10", y: 0, w: "3/3/2", h: 12 },
          widget: {
            name: "EodashLayerControl",
            properties: {
              tools: ["info", "config", "legend", "opacity"],
            },
          },
        },
        {
          id: "ItemCatalog",
          title: "Catalog",
          type: "internal",
          layout: { x: 0, y: 0, w: "3/3/2", h: 12 },
          widget: {
            name: "EodashItemCatalog",
            properties: {
              layoutTarget: "expert",
            },
          },
        },
      ],
    },
    expert: {
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
        id: "background-map",
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
                itemFilterConfig: {
                  imageProperty: "assets.thumbnail.href",
                },
              },
              enableBackToPOIs: false,
              enableSearch: false,
            },
            initialLayers: [
              {
                type: "Tile",
                properties: {
                  id: "terrain-light;:;EPSG:3857",
                  title: "Terrain Light",
                },
                source: {
                  type: "XYZ",
                  url: "https://s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpeg",
                },
              },
            ],
          },
        },
      },
      widgets: [
        {
          id: "Tools",
          type: "internal",
          title: "Tools",
          layout: { x: 0, y: 0, w: "3/3/2", h: 1 },
          widget: {
            name: "EodashTools",
            properties: {
              layoutTarget: "explore",
              layoutIcon: mdiMapSearch,
              itemFilterConfig: {
                resultType: "cards",
                subTitleProperty: "subtitle",
                imageProperty: "assets.thumbnail.href",
                aggregateResults: "collection_group",
              },
            },
          },
        },
        {
          id: "Layercontrol",
          type: "internal",
          title: "Layers",
          layout: { x: 0, y: 1, w: "3/3/2", h: 7 },
          widget: {
            name: "EodashLayerControl",
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
                  id: "expert-datetime",
                  type: "internal",
                  layout: { x: 1, y: 8, w: 10, h: 3 },
                  title: "Time Slider",
                  widget: {
                    name: "EodashTimeSlider",
                    properties: {
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
        id: Symbol(),
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
        id: "background-map",
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
                itemFilterConfig: {
                  imageProperty: "assets.thumbnail.href",
                },
              },
              enableBackToPOIs: false,
              enableSearch: false,
            },
            initialLayers: [
              {
                type: "Tile",
                properties: {
                  id: "terrain-light;:;EPSG:3857",
                  title: "Terrain Light",
                },
                source: {
                  type: "XYZ",
                  url: "https://s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpeg",
                },
              },
            ],
          },
        },
      },
      widgets: [
        {
          id: "Tools",
          type: "internal",
          title: "Tools",
          layout: { x: 0, y: 0, w: "3/3/2", h: 1 },
          widget: {
            name: "EodashTools",
            properties: {
              showLayoutSwitcher: false,
              itemFilterConfig: {
                resultType: "cards",
                filtersTitle: "Select an indicator",
                resultsTitle: "",
                subTitleProperty: "subtitle",
                imageProperty: "assets.thumbnail.href",
              },
            },
          },
        },
        // compare indicators
        {
          id: "CompareTools",
          type: "internal",
          title: "Tools",
          layout: { x: "9/9/10", y: 0, w: "3/3/2", h: 1 },
          widget: {
            name: "EodashTools",
            properties: {
              showLayoutSwitcher: false,
              indicatorBtnText: "Select second indicator",
              itemFilterConfig: {
                enableCompare: true,
                resultType: "cards",
                filtersTitle: "Select an indicator to compare",
                resultsTitle: "",
                subTitleProperty: "subtitle",
                imageProperty: "assets.thumbnail.href",
              },
            },
          },
        },
        {
          id: "layercontrol",
          type: "internal",
          title: "Layers",
          layout: { x: 0, y: 1, w: "3/3/2", h: 11 },
          widget: {
            name: "EodashLayerControl",
          },
        },
        {
          id: "CompareLayerControl",
          title: "Comparison Layers",
          layout: { x: "9/9/10", y: 1, w: "3/3/2", h: 11 },
          type: "internal",
          widget: {
            name: "EodashLayerControl",
            properties: {
              map: "second",
            },
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: "expert-Datepicker",
                  type: "internal",
                  layout: { x: 4, y: 7, w: 4, h: 5 },
                  title: "Date",
                  widget: {
                    name: "EodashDatePicker",
                    properties: {
                      hintText: `<b>Hint:</b> closest available date is displayed <br />
                                on map (see Analysis Layers)`,
                      toggleCalendar: true,
                    },
                  },
                }
              : null;
          },
        },
      ],
    },
  },
});
