export default {
  id: "demo",
  options: {
  },
  stacEndpoint: "https://eopf-explorer.github.io/sentinel-dataset-exploration-catalog/sentinelexplorer/catalog.json",
  brand: {
    noLayout: true,
    name: "Sentinel Explorer Usecase",
    theme: {
      colors: {
        primary: "#3333",
        secondary: "#A3A3A3",
        surface: "#ffff",
      },
      variables: {
        "surface-opacity": 0.8,
        "primary-opacity": 0.9,
      },
      // Bank-Wong palette
      collectionsPalette: [
        "#009E73",
        "#E69F00",
        "#56B4E9",
        "#009E73",
        "#F0E442",
        "#0072B2",
        "#D55E00",
        "#CC79A7",
        "#994F00",
      ],
    },
    footerText: "Demo configuration of eodash client",
  },
  templates: {
    expert: {
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
            enableCompare: true,
          },
        },
      },
      widgets: [
        {
          id: Symbol(),
          type: "internal",
          title: "Tools",
          layout: { x: 0, y: 0, w: "3/3/2", h: 1 },
          widget: {
            name: "EodashTools",
            properties: {
              layoutTarget: "light",
              layoutIcon: "M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z",
              itemFilterConfig: {
                enableHighlighting: false,
                filterProperties: [
                  {
                    keys: ["title"],
                    title: "Search",
                    placeholder: "Search by name",
                    type: "text",
                    expanded : true
                  }
                ],
                aggregateResults: "collection_group",
                resultType: "cards",
                subTitleProperty: "subtitle",
                imageProperty: "thumbnail",
                style: {
                  "--select-filter-max-items": 8
                },
              },
            },
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: Symbol(),
                  type: "internal",
                  title: "Layers",
                  layout: { x: 0, y: 1, w: "3/3/2", h: 11 },
                  widget: {
                    name: "EodashLayerControl",
                    properties: {
                      cssVars: {
                        "--layer-toggle-button-visibility": "flex",
                      },
                    },
                  },
                }
              : null;
          },
        },
        {
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
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: "Datepicker",
                  type: "internal",
                  layout: { x: 4, y: 6, w: 4, h: 6 },
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
        {
          defineWidget: (selected) => {
            return selected
              ? {
                  id: "Buttons",
                  layout: { x: "8/8/9", y: 0, w: 1, h: 3 },
                  title: "Buttons",
                  type: "internal",
                  widget: {
                    name: "EodashMapBtns",
                  },
                }
              : null;
          },
        },
        {
          defineWidget: (selectedSTAC) =>
            window.eodashStore.actions.includesProcess(selectedSTAC)
              ? {
                  id: "Processes",
                  type: "internal",
                  title: "Processes",
                  layout: { x: "9/9/10", y: 6, w: "3/3/2", h: 6 },
                  widget: {
                    name: "EodashProcess",
                  },
                }
              : null,
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
            enableCompare: true,
          },
        },
      },
      widgets: [
        {
          id: Symbol(),
          type: "internal",
          title: "Tools",
          layout: { x: 0, y: 0, w: "3/3/2", h: 1 },
          widget: {
            name: "EodashTools",
            properties: {
              showLayoutSwitcher: false,
              itemFilterConfig: {
                enableHighlighting: false,
                filterProperties: [
                  {
                    keys: ["title"],
                    title: "Search",
                    placeholder: "Search by name",
                    type: "text",
                    expanded : true
                  },
                ],
                aggregateResults: "collection_group",
                resultType: "cards",
                subTitleProperty: "subtitle",
                imageProperty: "thumbnail",
                style: {
                  "--select-filter-max-items": 8
                },
              },
            },
          },
        },
        // compare indicators
        {
          id: Symbol(),
          type: "internal",
          title: "Compare Tools",
          layout: { x: "9/9/10", y: 0, w: "3/3/2", h: 1 },
          widget: {
            name: "EodashTools",
            properties: {
              showLayoutSwitcher: false,
              indicatorBtnText: "Select second indicator",
              itemFilterConfig: {
                enableCompare: true,
                enableHighlighting: false,
                filterProperties: [
                  {
                    keys: ["title"],
                    title: "Search",
                    placeholder: "Search by name",
                    type: "text",
                    expanded : true
                  }
                ],
                aggregateResults: "collection_group",
                resultType: "cards",
                subTitleProperty: "subtitle",
                imageProperty: "thumbnail",
                style: {
                  "--select-filter-max-items": 8
                },
                filtersTitle: "Select an indicator to compare",
                resultsTitle: "",
              },
            },
          },
        },
        {
          id: Symbol(),
          type: "internal",
          title: "Layers",
          layout: { x: 0, y: 1, w: "3/3/2", h: 11 },
          widget: {
            name: "EodashLayerControl",
          },
        },
        {
          id: Symbol(),
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
          defineWidget: (selected) => {
            return selected
              ? {
                  id: "Buttons",
                  layout: { x: "8/8/9", y: 0, w: 1, h: 3 },
                  title: "Buttons",
                  type: "internal",
                  widget: {
                    name: "EodashMapBtns",
                    properties: {
                      compareIndicators: {
                        fallbackTemplate: "expert",
                      },
                    },
                  },
                }
              : null;
          },
        },
        {
          defineWidget: (selectedSTAC) => {
            return selectedSTAC
              ? {
                  id: "Datepicker",
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
};
