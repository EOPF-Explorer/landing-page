import { getBaseConfig } from "@eodash/eodash/templates";

export default getBaseConfig({
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
        primary: "#001925",
        secondary: "#009bdb",
      },
      variables: {
        "surface-opacity": 0.6,
        "primary-opacity": 0.6,
      },
    },
    logo: "https://hub-brands.eox.at/eopf/eopf-explorer-white.svg",
  },
});
