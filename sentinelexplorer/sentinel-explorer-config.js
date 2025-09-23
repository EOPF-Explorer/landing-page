import { getBaseConfig } from "@eodash/eodash/templates";

export default getBaseConfig({
  id: "eopf",
  stacEndpoint: {
    endpoint: "https://api.explorer.eopf.copernicus.eu/stac/",
    api: true,
    rasterEndpoint: " https://api.explorer.eopf.copernicus.eu/tiler/",
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
        primary: "#009bdb",
        secondary: "#00ae9d",
      },
    },
    logo: "https://hub-brands.eox.at/eopf/eopf-explorer-white.svg",
  },
});
