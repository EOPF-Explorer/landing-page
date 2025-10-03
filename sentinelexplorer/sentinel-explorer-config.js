import { compare } from "@eodash/eodash/templates";
import { mdiMapSearch } from "@mdi/js";
export default {
  id: "eopf",
  stacEndpoint: {
    endpoint: "https://api.explorer.eopf.copernicus.eu/stac",
    api: true,
    rasterEndpoint: " https://api.explorer.eopf.copernicus.eu/raster/",
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
            enableCompare: true,
            btns: {
              enableZoom: true,
              enableExportMap: true,
              enableChangeProjection: true,
              enableCompareIndicators: {
                fallbackTemplate: "expert",
              },
              enableBackToPOIs: true,
              enableSearch: true,
            },
            btnsPosition: {
              x: "12/9/9",
              y: 2,
              gap: 24,
            },
          },
        },
      },
      widgets: [
        {
          id: "Layercontrol",
          type: "internal",
          title: "Layers",
          layout: { x: "9/9/10", y: 6, w: "3/3/2", h: 5 },
          widget: {
            name: "EodashLayerControl",
          },
        },
        {
          //@ts-expect-error todo
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: "Information",
                  title: "Information",
                  layout: { x: "9/9/10", y: 0, w: "3/3/2", h: 6 },
                  type: "internal",
                  widget: {
                    name: "EodashStacInfo",
                  },
                }
              : null;
          },
        },
        {
          id: "ItemCatalog",
          title: "Catalog",
          type: "internal",
          layout: { x: 0, y: 0, w: "3/3/2", h: 12 },
          widget: {
            name: "EodashItemCatalog",
            properties:{
              layoutTarget: "expert",
            }
          },
        },
        // {
        //   defineWidget: (selectedSTAC) =>
        //     includesProcess(selectedSTAC) && {
        //       id: "Processes",
        //       type: "internal",
        //       title: "Processes",
        //       layout: { x: "9/9/10", y: 6, w: "3/3/2", h: 5 },
        //       widget: {
        //         name: "EodashProcess",
        //       },
        //     },
        // },
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
            enableCompare: true,
            zoomToExtent: true,
            btns: {
              enableZoom: true,
              enableExportMap: true,
              enableChangeProjection: true,
              enableCompareIndicators: {
                fallbackTemplate: "expert",
              },
              enableBackToPOIs: true,
              enableSearch: true,
            },
            btnsPosition: {
              x: "12/9/9",
              y: 2,
              gap: 24,
            },
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
                imageProperty: "thumbnail",
                aggregateResults: "collection_group",
              },
            },
          },
        },
        {
          id: "Layercontrol",
          type: "internal",
          title: "Layers",
          layout: { x: 0, y: 1, w: "3/3/2", h: 11 },
          widget: {
            name: "EodashLayerControl",
          },
        },
        {
          //@ts-expect-error todo
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: "Information",
                  title: "Information",
                  layout: { x: "9/9/10", y: 0, w: "3/3/2", h: 6 },
                  type: "internal",
                  widget: {
                    name: "EodashStacInfo",
                  },
                }
              : null;
          },
        },
        {
          //@ts-expect-error todo
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: "expert-datepicker",
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
        // {
        //   defineWidget: (selectedSTAC) =>
        //     includesProcess(selectedSTAC) && {
        //       id: "Processes",
        //       type: "internal",
        //       title: "Processes",
        //       layout: { x: "9/9/10", y: 6, w: "3/3/2", h: 5 },
        //       widget: {
        //         name: "EodashProcess",
        //       },
        //     },
        // },
      ],
    },
    compare,
  },
};
