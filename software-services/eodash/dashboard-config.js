/**
 * @type {import("@eodash/eodash").Eodash} 
 */
export default {
  id: "my-dashboard",
  stacEndpoint: {
    endpoint: "https://api.explorer.eopf.copernicus.eu/stac",
    api: true,
  },
  brand: {
    name: "My Dashboard",
    noLayout: true,
    theme: {
      colors: {
        primary: "#004170",
        secondary: "#00417044",
        surface: "#ffffff",
      },
    },
    font: {
      family: "Poppins",
    },  
    footerText: "Powered by EOPF",
  },
  template: {
    background: {
      id: "background-map",
      type: "internal",
      widget: {
        name: "EodashMap",
        properties:{
          btns:{
            enableBackToPOIs:false,
            enableChangeProjection:false,
            enableCompareIndicators:false,
            enableExportMap:false,
            enableGlobe:false,
           enableMosaic:false,
           enableSearch:false,
           enableZoom:false,
           
          },
        }
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
